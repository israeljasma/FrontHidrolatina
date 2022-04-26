import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  private apiEndpoint: string = environment.apiEndpoint;

  constructor( private http: HttpClient ) { }

  getConductivityPermeatemembranes(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/conductivitypermeatemembranes/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getConductivityPermeateVessels(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/conductivitypermeatevessels/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getFeedConductivity(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/feedconductivity/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getFeedPressureVessels(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/feedpressurevessels/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getFeedTemperature(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/feedtemperature/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getGraphFeedConductivity(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/graphfeedconductivity/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getMembraneFeedPressure(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/membranefeedpressure/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getMembranePermeate(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/membranepermeate/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getMembraneRejectionFlow(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/membranerejectionflow/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getMembraneRejectionPressure(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/membranerejectionpressure/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getRegisterMembranes(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/registermembranes/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getRegisterVessels(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/registervessels/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getRejectPressureVessels(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/rejectpressurevessels/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getVesselsFeedingFlow(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/vesselsfeedingflow/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }

  getVesselsPermeateFlow(): Observable<any> {

    const url = `${ this.apiEndpoint }/sensors/vesselspermeateflow/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    });

    return this.http.get(url, { headers: headers });
  }
}
