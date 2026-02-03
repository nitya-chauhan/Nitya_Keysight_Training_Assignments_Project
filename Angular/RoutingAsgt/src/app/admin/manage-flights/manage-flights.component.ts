import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html'
})
export class ManageFlightsComponent implements OnInit {

  flights: any[] = [];
  editingFlightId: number | null = null;
  editedFlight: any = {};

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flights = this.flightService.getFlights();
  }

  editFlight(flight: any) {
    this.editingFlightId = flight.id;
    this.editedFlight = { ...flight };
  }

  updateFlight() {
    this.flightService.updateFlight(this.editedFlight);
    this.editingFlightId = null;
  }

  deleteFlight(id: number) {
    if (confirm('Are you sure you want to delete this flight?')) {
      this.flightService.deleteFlight(id);
      this.flights = this.flightService.getFlights();
    }
  }

  cancelEdit() {
    this.editingFlightId = null;
  }
}
