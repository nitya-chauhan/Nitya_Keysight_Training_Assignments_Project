import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from './models/flight.model';

@Pipe({
  name: 'flightFilter'
})
export class FlightFilterPipe implements PipeTransform {

  transform(flights: any[], searchText: string): any[] {
  if (!searchText) return flights;

  searchText = searchText.toLowerCase();

  return flights.filter(f =>
    f.source.toLowerCase().includes(searchText) ||
    f.destination.toLowerCase().includes(searchText)
  );
}

}
