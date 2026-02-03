import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: any;

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flights = this.flightService.getFlights();
  }
}
