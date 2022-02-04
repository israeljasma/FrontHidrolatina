import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  public resultados: User[] = [];

  getUsersList(): Observable <any> {

    const url = `${ this.apiUrl }/users/`;

    this.http.get<User[]>(url).subscribe( (resp) => {
      console.log( resp );
      this.resultados = resp;
    });

    return this.http.get(url);
  }

  getUserDetail(userId: string): Observable<User>{

    const url = `${ this.apiUrl }/users/${ userId }`;

    return this.http.get<User>(url);
  }
}
