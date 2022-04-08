import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/users.intarface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiEndpoint: string = environment.apiEndpoint;

  constructor( private http: HttpClient ) { }

  // public resultados: User[] = [];

  getUsersList(): Observable <any> {

    const url = `${ this.apiEndpoint }/users/users/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    // this.http.get<User[]>(url, { headers: headers }).subscribe( (resp) => {
    //   this.resultados = resp;
    // });

    return this.http.get(url, { headers: headers });
  }

  getUserDetail(userId: string): Observable<User>{

    const url = `${ this.apiEndpoint }/users/users/${ userId }`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get<User>(url, { headers: headers });
  }

  addUser( user: User ): Observable<User>{

    const url = `${ this.apiEndpoint }/users/users/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.post<User>(url, user, { headers: headers });
  }

  updateUser( user: User ): Observable<User>{

    const url = `${ this.apiEndpoint }/users/users/${ user.id }/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.put<User>(url, user, { headers: headers });
  }

  deleteUser( id: string ): Observable<any>{

    const url = `${ this.apiEndpoint }/users/users/${ id }/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.delete<any>(url, { headers: headers });
  }
}
