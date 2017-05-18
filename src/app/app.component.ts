import { Component } from '@angular/core';
import {WeatherService} from './weather.service';
import  {WeatherReport} from './weather.report';

@Component({
  selector: 'my-app',
  template: `<h1> {{title}}</h1>

  <form #form="ngForm" name="form">
    <label>City : </label>
    <input type="text" name="name"  />
<button (click)="getReports()">REPORT</button>
  </form>

  <p><strong>city :</strong>{{name}}</p>
  <p><strong>High temp :</strong>{{htemp}}</p>
  <p><strong>Low temp :</strong>{{ltemp}}</p>
  <table>
        <thead>
            <th>name</th>
            <th>High Temp</th>
            <th>Low Temp</th>
        </thead>
        <tbody>
            <tr *ngFor="let city of reports">
                <td>{{city.name}}</td>
                <td>{{city.htemp}}</td>
                <td>{{city.ltemp}}</td>
            </tr>
        </tbody>
    </table>

  `,
  providers: [WeatherService]
})
export class AppComponent {
  title = 'Weather Report forcasts';
  name : string;
  reports : WeatherReport[];
  detailReport : WeatherReport;



  constructor(private weatherService : WeatherService){
    console.log('app.component started');


      }

  getReports(): void {
    console.log('getreports');
    this.reports = this.weatherService.getCityWeatherReport();
    this.detailReport = new WeatherReport('dahiwadi','12','34');

      }


}
