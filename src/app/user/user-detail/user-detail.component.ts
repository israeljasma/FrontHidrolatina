import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor( private activateRoute: ActivatedRoute, private userService: UserService ) { }

  ngOnInit(): void {
    
    this.activateRoute.params.pipe( switchMap( (param) => this.userService.getUserDetail( param['id'] )) ).subscribe( resp => { console.log(resp) });
    
  }

}
