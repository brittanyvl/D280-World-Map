import { Component } from '@angular/core';

@Component({
  selector: 'app-worldmap',
  standalone: true,
  imports: [],
  templateUrl: './worldmap.component.html',
  styleUrl: './worldmap.component.css'
})
export class WorldmapComponent {

  setCountryData(event: any) {
    console.log('event', event.target.id)
  }

}
