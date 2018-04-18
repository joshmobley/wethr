import { Component, Input, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-ten-day',
  templateUrl: './ten-day.component.html',
  styleUrls: ['./ten-day.component.scss']
})
export class TenDayComponent implements OnInit {

  @Input() location;
  forecast$;

  constructor(
    private forecastService: ForecastService
  ) { }

  getForecast(state, city) {
    return this.forecastService.tenDayForecast$(state,city);
  }

  ngOnInit() {
    this.forecast$ = this.getForecast(this.location.state, this.location.city);

  }

}
