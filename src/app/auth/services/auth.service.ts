import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthResponse, User, UserAuth } from '../interfaces/auth.interface';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiEndpoint: string = environment.apiEndpoint;
  private _userAuth!: UserAuth ;

  get userAuth(): UserAuth {
    return { ...this._userAuth };
  }

  constructor( private http: HttpClient ) { }

  login(body: any){
    return this.http.post<AuthResponse>(`${ this.apiEndpoint }/login/`, body)
    .pipe( 
      tap( resp => {
        if ( resp.token ) {
          localStorage.setItem( 'token', resp.token );
          this._userAuth = {
            username: resp.user.username,
            name: resp.user.name,
            last_name: resp.user.last_name,
            email: resp.user.email
          };
        }
      }), map( resp => resp),
      catchError(this.handleError));
  }

  tokenValidate(): Observable<boolean>{
    const url = `${ this.apiEndpoint }/api/token/renew/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    })
    return this.http.get<AuthResponse>(url, { headers: headers })
    .pipe(
      map( resp => {
        this._userAuth = {
          username: resp.user.username,
          name: resp.user.name,
          last_name: resp.user.last_name,
          email: resp.user.email
        };
        return resp ? true : false;
      }),
      catchError( err => of(false))
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
