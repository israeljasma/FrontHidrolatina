import { Component, OnInit } from '@angular/core';
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

  get resultados(){
    return this.userService.resultados;
  }

  termino: string = '';

  buscar() {
    console.log(this.termino)
  }
}
