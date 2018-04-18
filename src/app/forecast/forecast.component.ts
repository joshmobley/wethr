import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ForecastService } from './forecast.service';

import 'rxjs/add/operator/switchMap';


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

  ngOnInit() {
    this.location$ = this.forecastService.location$;
    this.conditions$ = this.location$.switchMap( res => this.getConditions(res.state, res.city) );
  }

}
