import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})

export class FlightListComponent  {
  showAddForm: boolean = false;

  newFlight: Omit<Flight, 'id'> = {
  flightNo: '',
  airline: '',
  source: '',
  destination: '',
  departureTime: '',
  price: 0,
  status: 'On Time'
};


  flights: Flight[] = [];
  searchText: string = '';
  sortKey: string = 'price';
sortOrder: string = 'asc';   


  constructor(private flightService: FlightService) {}

 

 

  

  // GET
  getAllFlights() {
    this.flightService.getFlights().subscribe(data => {
      this.flights = data;
    });
  }

  get uniqueLocations() {
  const sources = this.flights.map(f => f.source);
  const destinations = this.flights.map(f => f.destination);
  return [...new Set([...sources, ...destinations])];
}



  // POST
  addFlight() {
  this.flightService.addFlight(this.newFlight as any).subscribe(() => {

    // ✅ ONLY TRUST BACKEND
    this.getAllFlights();

    // reset form
    this.newFlight = {
      flightNo: '',
      airline: '',
      source: '',
      destination: '',
      departureTime: '',
      price: 0,
      status: 'On Time'
    };

    this.showAddForm = false;
  });
}





  // PUT
  updateFlightStatus(flight: any) {

  let nextStatus = '';

  if (flight.status === 'On Time') {
    nextStatus = 'Delayed';
  } 
  else if (flight.status === 'Delayed') {
    nextStatus = 'Cancelled';
  } 
  else {
    nextStatus = 'On Time';
  }

  const updatedFlight = {
    ...flight,
    status: nextStatus
  };

  this.flightService.updateFlight(updatedFlight).subscribe(() => {
    this.getAllFlights();
  });
}



  // DELETE
deleteFlight(id: any) {
  this.flightService.deleteFlight(id).subscribe(() => {
    this.getAllFlights();
  });
}





}
