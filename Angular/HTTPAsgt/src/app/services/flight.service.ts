import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private url = 'http://localhost:3000/flights';

  constructor(private http: HttpClient) {}

  // GET
  getFlights() {
    return this.http.get<Flight[]>(this.url);
  }

  // POST
  addFlight(flight: Omit<Flight, 'id'>) {
  return this.http.post<Flight>(this.url, flight);
}


  // PUT
  updateFlight(flight: Flight) {
    return this.http.put(`${this.url}/${flight.id}`, flight);
  }

  // DELETE
  deleteFlight(id: any) {
  return this.http.delete(`${this.url}/${id}`);
}

}
