import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiEndpoint: string = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public resultados: User[] = [];

  getUsersList(): Observable <any> {

    const url = `${ this.apiEndpoint }/users/`;

    this.http.get<User[]>(url).subscribe( (resp) => {
      console.log( resp );
      this.resultados = resp;
    });

    return this.http.get(url);
  }

  getUserDetail(userId: string): Observable<User>{

    const url = `${ this.apiEndpoint }/users/${ userId }`;

    return this.http.get<User>(url);
  }
}
