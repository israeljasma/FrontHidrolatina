import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user.interface';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = {
    username: '',
    name: '',
    last_name: '',
    password: '',
    email: ''
  }

  constructor( private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe( switchMap( ({ id }) => this.userService.getUserDetail(id)) ).subscribe( user => this.user = user );
  }

  updateUser() {
    if( this.user.username.trim().length === 0 ) {
      return;
    }else if( this.user.name.trim().length === 0 ) {
      return;
    }else if( this.user.last_name.trim().length === 0 ) {
      return;
    }else if( this.user.email.trim().length === 0 ) {
      return;
    }

    this.userService.updateUser( this.user ).subscribe( user => { console.log('Actualizando', user ), this.showSnackBar('Usuario actualizado con exito!') });
  }

  delete(){
    const dialog = this.dialog.open( ConfirmComponent, {
      width: '300px',
      data: this.user
    } );

    dialog.afterClosed().subscribe( (result ) => {
      if (result) {
        this.userService.deleteUser( this.user.id!.toString() ).subscribe( resp => { this.router.navigate(['/users']), this.showSnackBar('Usuario eliminado con exito!') });
      }
    } );
  }

  showSnackBar(message: string){
    this.snackBar.open(message, 'Cerrar', { duration:3500 })
  }
}
