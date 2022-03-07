import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiEndpoint: string = environment.apiEndpoint;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }

  credencials = {
    username : '-----',
    password : '-----',
  }

  constructor( private http: HttpClient ) { }

  login(){
    return this.http.post<Auth>(`${ this.apiEndpoint }/login/`, this.credencials).pipe(tap( auth => this._auth = auth))
  }
}
