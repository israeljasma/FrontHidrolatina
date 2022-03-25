import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ppe } from '../interfaces/ppes.intarface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PpesService {

  private apiEndpoint: string = environment.apiEndpoint;

  constructor( private http: HttpClient ) { }

  public results: Ppe[] = [];

  getPpeList(): Observable <any> {

    const url = `${ this.apiEndpoint }/ppes/ppe/`;

    this.http.get<Ppe[]>(url).subscribe( (resp) => {
      console.log( resp );
      this.results = resp;
    });
    
    return this.http.get(url);
  }

  getPpeListByUser(id: number): Observable <any> {

    let data = {user: id};
    const url = `${ this.apiEndpoint }/ppes/ppe/`;

    this.http.get<Ppe[]>(url, {params: data}).subscribe( (resp) => {
      console.log( resp );
      this.results = resp;
    });
    
    return this.http.get(url, {params: data});
  }
}
