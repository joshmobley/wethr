import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HourlyComponent } from './forecast/hourly/hourly.component';
import { TenDayComponent } from './forecast/ten-day/ten-day.component';

import { ForecastService } from './forecast/forecast.service';




@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    HourlyComponent,
    TenDayComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ForecastComponent }
    ])
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
