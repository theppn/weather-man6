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
  getDate(): number {
    return this.date;
  }
  getIcon(): string {
    return this.icon;
  }
  getDescription(): string {
    return this.description;
  }
  getTemp(): number {
    return this.temp;
  }
  getPressure(): number {
    return this.pressure;
  }
  getHumidity(): number {
    return this.humidity;
  }
  getWindSpeed(): number {
    return this.windSpeed;
  }
}
