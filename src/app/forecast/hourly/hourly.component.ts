import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ForecastService } from '../forecast.service';
//import * as fromStore from '../../store';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnInit {

  @Input() location;
  forecast$;

  constructor(
    private forecastService: ForecastService
  ) { }

  getHourlyForecast(state, city) {
    return this.forecastService.hourlyForecast$(state, city);
  }

  ngOnInit() {
    this.forecast$ = this.getHourlyForecast(this.location.state, this.location.city);
    //this.store.dispatch(new fromStore.GetConditions({city: 'clayton', state: 'nc'}))
  }

}
