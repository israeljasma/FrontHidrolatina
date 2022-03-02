import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = {
    username: '',
    name: '',
    last_name: '',
    password: '',
    email: ''
  }

  constructor( private userService: UserService) { }

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
    this.userService.addUser( this.user ).subscribe();
  }

}
