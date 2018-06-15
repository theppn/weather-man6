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
   * @param {number} date
   * @param {string} icon
   * @param {string} description
   * @param {number} temp
   * @param {number} pressure
   * @param {number} humidity
   * @param {number} windSpeed
   */
  constructor(date: number, icon: string, description: string, temp: number, pressure: number, humidity: number, windSpeed: number) {
    this.date = date;
    this.icon = icon;
    this.description = description;
    this.temp = temp;
    this.pressure = pressure;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
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
