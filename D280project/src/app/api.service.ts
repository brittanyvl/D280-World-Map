import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, async } from 'rxjs';
import { Subject } from 'rxjs';

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
    let subject = new Subject();
    this.fetchCountryData(country).subscribe((data: any) => {
      subject.next({
        countryName: data[1][0].name,
        countryCapital: data[1][0].capitalCity,
        countryRegion: data[1][0].region.value,
        countryIncomeLevel: data[1][0].incomeLevel.value,
        countryLat: data[1][0].latitude,
        countryLong: data[1][0].longitude
      })

    })

    return subject.asObservable();

  }

}