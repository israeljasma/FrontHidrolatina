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
    this.results
    return this.http.get(url);
  }
}
