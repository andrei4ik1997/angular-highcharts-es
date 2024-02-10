import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts-es';
import * as more from 'highcharts/es-modules/masters/highcharts-more.src';
import * as exporting from 'highcharts/es-modules/masters/modules/exporting.src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartModule],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
