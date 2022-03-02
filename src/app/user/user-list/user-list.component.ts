import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsersList();
  }

  get users(){
    return this.userService.resultados;
  }
}
