import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { User } from '../interface/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user!: User;

  constructor( private activateRoute: ActivatedRoute, private userService: UserService ) { }

  ngOnInit(): void {
    
    this.activateRoute.params.pipe( switchMap( (param) => this.userService.getUserDetail( param['id'] )), tap( console.log ) ).subscribe( user => this.user = user );
    
  }

}
