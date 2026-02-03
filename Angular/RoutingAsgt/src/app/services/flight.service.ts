import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private flights = [
    {
      id: 101,
      flightNo: 'AI-101',
      source: 'Delhi',
      destination: 'Mumbai',
      time: '10:30',
      price: 5500
    },
    {
      id: 202,
      flightNo: 'IND-202',
      source: 'Bangalore',
      destination: 'Chennai',
      time: '14:00',
      price: 4200
    }
  ];

  getFlights() {
    return this.flights;
  }

  getFlightById(id: number) {
    return this.flights.find(f => f.id === id);
  }

  addFlight(flight: any) {
    const newId = Math.max(...this.flights.map(f => f.id)) + 1;
    this.flights.push({ id: newId, ...flight });
  }

  updateFlight(updatedFlight: any) {
    const index = this.flights.findIndex(f => f.id === updatedFlight.id);
    if (index !== -1) {
      this.flights[index] = updatedFlight;
    }
  }

  deleteFlight(id: number) {
    this.flights = this.flights.filter(f => f.id !== id);
  }
}
