import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActionDetection } from '../interfaces/actions.intarface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private apiEndpoint: string = environment.apiEndpoint;

  constructor( private http: HttpClient ) { }

  public results: ActionDetection[] = [];

  getActionDetectionList(): Observable<any> {

    const url = `${ this.apiEndpoint }/actiondetections/action/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    // this.http.get<ActionDetection[]>(url).subscribe( resp => this.results = resp );

    return this.http.get(url, { headers: headers });
  }
}
