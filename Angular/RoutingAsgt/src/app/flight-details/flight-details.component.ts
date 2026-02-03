import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html'
})
export class FlightDetailsComponent implements OnInit {

  flight: any;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flight = this.flightService.getFlightById(id);
  }
}
