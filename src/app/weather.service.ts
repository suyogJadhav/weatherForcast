import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {WeatherReport}  from  './weather.report';
import {mockReports} from'./mock.report';

@Injectable()
export class WeatherService {
  constructor(private http:Http){

  }

  getCityWeatherReport() {
    return mockReports;
    /*return this.http.get('https://jsonplaceholder.typicode.com/posts').
      map(res => res.json());*/
  }
}
