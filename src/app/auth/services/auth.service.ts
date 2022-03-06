import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiEndpoint: string = environment.apiEndpoint;

  credencials = {
    username : '-----',
    password : '-----',
  }

  constructor( private http: HttpClient ) { }

  login(){
    return this.http.post<Auth>(`${ this.apiEndpoint }/login/`, this.credencials);
  }
}
