import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user.interface';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

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

  constructor( private userService: UserService, private activatedRoute: ActivatedRoute, private router:Router ) { }

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

    this.userService.updateUser( this.user ).subscribe( user => console.log('Actualizando', user ));
  }

}
