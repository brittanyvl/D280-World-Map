import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-worldmap',
  standalone: true,
  imports: [],
  templateUrl: './worldmap.component.html',
  styleUrl: './worldmap.component.css'
})
export class WorldmapComponent {

  constructor(private apiService: ApiService) { }

  setCountryData(event: any) {
    //console.log('event', event.target.id);
    this.apiService.fetchCountryData(event.target.id);
    this.apiService.fetchCountryData(event.target.id).subscribe(data => console.log(data))

  }
}