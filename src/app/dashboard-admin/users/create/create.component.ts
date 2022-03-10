import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/users.intarface';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: User = {
    username: '',
    name: '',
    last_name: '',
    password: '',
    email: ''
  }

  constructor( private usersService: UsersService, private router: Router, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  saveUser(){
    if( this.user.username.trim().length === 0 ) {
      return;
    }else if( this.user.name.trim().length === 0 ) {
      return;
    }else if( this.user.last_name.trim().length === 0 ) {
      return;
    }else if( this.user.password.trim().length === 0 ) {
      return;
    }else if( this.user.email.trim().length === 0 ) {
      return;
    }
    this.usersService.addUser( this.user ).subscribe( user => { this.router.navigate(['/dashboard/users']), this.showSnackBar('Usuario creado con exito!')});
  }

  showSnackBar(message: string){
    this.snackBar.open(message, 'Cerrar', { duration:3500 })
  }

}
