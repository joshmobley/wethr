import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ForecastService } from './forecast.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  conditions$;
  location$;

  constructor(
    private forecastService: ForecastService
  ) {}

  getConditions(state,city) {
   return this.forecastService.conditions$(state,city);
  }

  getTime(timestamp) {
    let date = timestamp.split(' ');
    let hours = date[4].split(':')[0];
    if (hours > 18) { return 'night'; }
    if (hours > 16) { return 'evening'; }
    if (hours > 10) { return 'day'; }
    if (hours > 5) { return 'morning'; }
    else { return 'night'; }
  }

  slugify(text) {
    let str = text.replace(/\s/g, '');
    return str.toLowerCase();
  }

  ngOnInit() {
    this.location$ = this.forecastService.location$;
    this.conditions$ = this.location$.switchMap( res => this.getConditions(res.state, res.city) );
  }

}
