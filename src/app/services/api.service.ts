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
   * Gets forecast
   * @param {string} city
   * @param {string} countryCode
   * @returns {Observable<Object>}
   */
  getForecast(city: string, countryCode: string): Observable<Object> {
    // parameters as object
    const p = {
      'q': encodeURIComponent(city) + ',' + encodeURIComponent(countryCode),
      'units': environment.units,
      'lang': environment.lang,
      'APPID': environment.appId,
    };
    // map into array of 'key=value' strings, then
    // &-join all into a single string of query parameters
    const q = Object.keys(p)
      .map(k => k + '=' + p[k])
      .join('&');
    const url = environment.apiUrl + '?' + q;
    return this.http.get(url);
  }
}
