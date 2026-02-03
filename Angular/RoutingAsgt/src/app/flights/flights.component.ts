import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html'
})
export class FlightsComponent implements OnInit {

  flights: any[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flights = this.flightService.getFlights();
  }
}
