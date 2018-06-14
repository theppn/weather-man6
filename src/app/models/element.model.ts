export class Element {
  date: number;
  icon: string;
  description: string;
  temp: number;
  pressure: number;
  humidity: number;
  windSpeed: number;

  constructor(date: number, icon: string, description: string, temp: number, pressure: number, humidity: number, windSpeed: number) {
    this.date = date;
    this.icon = icon;
    this.description = description;
    this.temp = temp;
    this.pressure = pressure;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }
}
