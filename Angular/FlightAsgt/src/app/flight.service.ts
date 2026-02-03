import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights = [
    {
      flightNo: 'SW101',
      source: 'Delhi',
      destination: 'Mumbai',
      time: '10:00 AM',
      status: 'On Time'
    },
    {
      flightNo: 'SW202',
      source: 'Bangalore',
      destination: 'Chennai',
      time: '1:30 PM',
      status: 'Delayed'
    },
    {
      flightNo: 'SW303',
      source: 'Pune',
      destination: 'Kolkata',
      time: '6:45 PM',
      status: 'Cancelled'
    }
  ];

  getFlights() {
    return this.flights;
  }
}
