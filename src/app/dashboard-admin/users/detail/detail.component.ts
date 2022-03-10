import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/users.intarface';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user!: User;

  constructor( private activateRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe( switchMap( (param) => this.usersService.getUserDetail( param['id'] )), tap( console.log ) ).subscribe( user => this.user = user );
  }

}
