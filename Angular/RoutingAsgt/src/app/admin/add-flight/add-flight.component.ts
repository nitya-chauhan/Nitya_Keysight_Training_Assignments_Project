import { Component } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html'
})
export class AddFlightComponent {

  flight = {
    flightNo: '',
    source: '',
    destination: '',
    time: '',
    price: 0
  };

  constructor(private flightService: FlightService) {}

  addFlight() {
    this.flightService.addFlight({ ...this.flight });
    alert('Flight added successfully!');
    
    this.flight = {
      flightNo: '',
      source: '',
      destination: '',
      time: '',
      price: 0
    };
  }
}
