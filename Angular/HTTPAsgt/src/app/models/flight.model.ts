export interface Flight {
  id: string | number;
  flightNo: string;
  airline: string;
  source: string;
  destination: string;
  departureTime: string;
  price: number;
  status: string;
}
