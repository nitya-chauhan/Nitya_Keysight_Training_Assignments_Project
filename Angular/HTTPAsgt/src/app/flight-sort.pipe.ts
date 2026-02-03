import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from './models/flight.model';

@Pipe({
  name: 'flightSort'
})
export class FlightSortPipe implements PipeTransform {

  transform(flights: Flight[], key: string, order: string): Flight[] {
    if (!flights || !key) return flights;

    return flights.slice().sort((a: any, b: any) => {
      if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }
}
