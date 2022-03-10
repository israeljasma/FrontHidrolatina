import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';
import { User } from '../interfaces/users.intarface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: User = {
    username: '',
    name: '',
    last_name: '',
    password: '',
    email: ''
  }

  constructor( private usersService: UserService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe( switchMap( ({ id }) => this.usersService.getUserDetail(id)) ).subscribe( user => this.user = user );
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

    this.usersService.updateUser( this.user ).subscribe( user => { console.log('Actualizando', user ), this.showSnackBar('Usuario actualizado con exito!') });
  }

  delete(){
    const dialog = this.dialog.open( ConfirmComponent, {
      width: '300px',
      data: this.user
    } );

    dialog.afterClosed().subscribe( (result ) => {
      if (result) {
        this.usersService.deleteUser( this.user.id!.toString() ).subscribe( resp => { this.router.navigate(['/dashboard/users']), this.showSnackBar('Usuario eliminado con exito!') });
      }
    } );
  }

  showSnackBar(message: string){
    this.snackBar.open(message, 'Cerrar', { duration:3500 })
  }
}
