import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUsersList();
  }

  get users(){
    return this.userService.resultados;
  }

  delete(id: string){
    this.userService.deleteUser( id ).subscribe( resp => { this.router.navigate(['/users']) });
  }
}
