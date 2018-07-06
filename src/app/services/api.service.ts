import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * @constructor
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) { }

  /**
   * gets forecast
   * @param {string} city
   * @param {string} countryCode
   * @returns {Observable<Object>}
   */
  getForecast(city: string, countryCode: string): Observable<Object> {
    // parameters as object
    const p = {
      'q': city + ',' + countryCode,
      'units': environment.units,
      'lang': environment.lang,
      'APPID': environment.appId,
    };
    const url = environment.apiUrl;
    return this.http.get(url, { params: p });
  }
}
