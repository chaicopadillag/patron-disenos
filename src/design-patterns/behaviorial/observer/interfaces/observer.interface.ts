export interface Observer {
  name: string;
  update(weatherData: string): void;
}
