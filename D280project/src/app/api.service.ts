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

  setCountryData(countryID: string) {
    let subject = new Subject();

    this.fetchCountryData(countryID).subscribe(data: any) => {
      subject.next({
        countryName: data.name,
        countryCapital: data.capitalCity,
        countryRegion: data.region.value,
        countryIncomeLevel: data.incomeLevel.value,
        countryLat: data.latitutde,
        countryLong: data.longitude,
      })
    }
    return subject.asObservable();
  }
}
