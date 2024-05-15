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

  info: any = {};

  constructor(private apiService: ApiService) { }

  setCountryData(event: any) {
    this.apiService.setCountryData(event.target.id).subscribe(
      (data: any) => {
        console.log(data); // Log the data
        this.info = { ...data }; // Assign data to this.info
      }
    );
  }
}