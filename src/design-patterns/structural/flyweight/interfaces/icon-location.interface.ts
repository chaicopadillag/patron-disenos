export interface IconLocationI {
  name: string;
  icon: string;
  description: string;
  address: string;

  display(coordinates: CoordinatesI): void;
}

export interface CoordinatesI {
  lat: number;
  lng: number;
}
