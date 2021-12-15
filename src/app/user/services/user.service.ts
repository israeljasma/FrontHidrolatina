import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserListResponse } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public resultados: UserListResponse[] = [];

  getUsers() {
    this.http.get<UserListResponse[]>(`http://127.0.0.1:8000/user/user/`).subscribe( (resp) => {
      console.log( resp );
      this.resultados = resp;
    });
  };
}
