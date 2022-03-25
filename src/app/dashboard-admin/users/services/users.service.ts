import { HttpClient } from '@angular/common/http';
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

  public resultados: User[] = [];

  getUsersList(): Observable <any> {

    const url = `${ this.apiEndpoint }/users/users/`;

    this.http.get<User[]>(url).subscribe( (resp) => {
      console.log( resp );
      this.resultados = resp;
    });

    return this.http.get(url);
  }

  getUserDetail(userId: string): Observable<User>{

    const url = `${ this.apiEndpoint }/users/users/${ userId }`;

    return this.http.get<User>(url);
  }

  addUser( user: User ): Observable<User>{

    const url = `${ this.apiEndpoint }/users/users/`;

    return this.http.post<User>(url, user);
  }

  updateUser( user: User ): Observable<User>{

    const url = `${ this.apiEndpoint }/users/users/${ user.id }/`;

    return this.http.put<User>(url, user);
  }

  deleteUser( id: string ): Observable<any>{

    const url = `${ this.apiEndpoint }/users/users/${ id }/`;

    return this.http.delete<any>(url);
  }
}
