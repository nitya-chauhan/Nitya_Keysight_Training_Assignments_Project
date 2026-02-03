import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-header',
  templateUrl: './flight-header.component.html',
  styleUrls: ['./flight-header.component.css']
})
export class FlightHeaderComponent {
  airlineName = 'SkyWays Airlines';
  tagline = 'Fly Beyond Limits';
}
