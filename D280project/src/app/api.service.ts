import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryData(country: string): Observable<any> {
    let api = `https://api.worldbank.org/v2/country/${country}?format=json`;
    return this.http.get(api);
  }

  setCountryData(country: string) {
    this.fetchCountryData(country).subscribe((data: any) => {


    });

  }

}