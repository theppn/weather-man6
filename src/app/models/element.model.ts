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
  constructor(data: any) {
    this.date = data['dt'] * 1000;
    this.icon = data['weather'][0]['icon'];
    this.description = data['weather'][0]['description'];
    this.temp = data['main']['temp'];
    this.pressure = data['main']['pressure'];
    this.humidity = data['main']['humidity'];
    this.windSpeed = data['wind']['speed'];
  }

  /**
   * gets date
   * @returns {number}
   */
  getDate(): number {
    return this.date;
  }

  /**
   * gets icon
   * @returns {string}
   */
  getIcon(): string {
    return this.icon;
  }

  /**
   * gets description
   * @returns {string}
   */
  getDescription(): string {
    return this.description;
  }

  /**
   * gets temperature
   * @returns {number}
   */
  getTemp(): number {
    return this.temp;
  }

  /**
   * gets pressure
   * @returns {number}
   */
  getPressure(): number {
    return this.pressure;
  }

  /**
   * gets humidity
   * @returns {number}
   */
  getHumidity(): number {
    return this.humidity;
  }

  /**
   * gets wind speed
   * @returns {number}
   */
  getWindSpeed(): number {
    return this.windSpeed;
  }
}
