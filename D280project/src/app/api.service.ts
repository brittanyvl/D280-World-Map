import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryData(countryID: string) {
    let api = `https://api.worldbank.org/v2/country/${countryID}?format=json`
    return this.http.get(api)
  }

}
