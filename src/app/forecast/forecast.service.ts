import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ForecastService {

  url = 'http://api.wunderground.com/api/31bf61d50c387d23/';

  randomString = Math.random().toString(36).substring(7);

  constructor(
    private httpClient: HttpClient
  ) { }

  conditions$(state, city) {
    return this.httpClient.get(this.url + 'conditions/q/' + state + '/' + city + '.json').map(
      res => res['current_observation']
    );
  }

  hourlyForecast$(state, city) {
    return this.httpClient.get(this.url + 'hourly/q/' + state + '/' + city + '.json').map(
      res => res['hourly_forecast']
    )
  }

  location$ = this.httpClient.get(this.url +  'geolookup/q/autoip.json?' + this.randomString).map(
    res => res['location']
  );

  tenDayForecast$(state, city) {
    return this.httpClient.get(this.url + 'forecast10day/q/' + state + '/' + city + '.json').map(
      res => res['forecast'].simpleforecast.forecastday
    );
  }

}
