import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserListResponse } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  public resultados: UserListResponse[] = [];

  getUsersList(): Observable <any> {

    const url = `${ this.apiUrl }/users/`;

    this.http.get<UserListResponse[]>(url).subscribe( (resp) => {
      console.log( resp );
      this.resultados = resp;
    });

    return this.http.get(url);
  }
}
