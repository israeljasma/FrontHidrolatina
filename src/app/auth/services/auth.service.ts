import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../interfaces/auth.interface';
import { map, Observable, of, tap } from 'rxjs';

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
    username : '------',
    password : '------',
  }

  constructor( private http: HttpClient ) { }
  
  verificaAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('user')) {
      return of(false);
    }
    return this.http.post<Auth>(`${ this.apiEndpoint }/login/`, this.credencials).pipe( map( auth => { this._auth = auth; return true; } ) );
  }

  login(data: any){
    return this.http.post<Auth>(`${ this.apiEndpoint }/login/`, data).pipe(tap( auth => this._auth = auth ), tap( auth => localStorage.setItem('user', JSON.stringify(this.auth)) ))
  }
}
