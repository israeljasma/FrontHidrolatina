import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor( private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params => { console.log( params )});
    
  }

}
