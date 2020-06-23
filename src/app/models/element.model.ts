interface WeatherData {
  icon: string;
  description: string;
}

interface WindData {
  speed: number;
}

interface MainData {
  temp: number;
  pressure: number;
  humidity: number;
  wind: WindData;
}

export interface OpenWeatherResponse {
  dt: number;
  weather: WeatherData[];
  main: MainData;
}

export class Element {
  date: number;
  icon: string;
  description: string;
  temp: number;
  pressure: number;
  humidity: number;
  windSpeed: number;

  /**
   * @constructor
   * @param {any} data
   */
   constructor(data: OpenWeatherResponse) {
    this.date = data['dt'] * 1000;
    this.icon = data['weather'][0]['icon'];
    this.description = data['weather'][0]['description'];
    this.temp = data['main']['temp'];
    this.pressure = data['main']['pressure'];
    this.humidity = data['main']['humidity'];
    this.windSpeed = data['wind']['speed'];
  }
}
