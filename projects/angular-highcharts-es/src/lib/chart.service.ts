/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/andrei4ik1997/angular-highcharts-es/blob/master/LICENSE
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
/* import Highcharts from 'highcharts/es-modules/masters/highcharts.src';
import Highstock from 'highcharts/es-modules/masters/highstock.src';
import Highmaps from 'highcharts/es-modules/masters/highmaps.src';
import HighchartsGnatt from 'highcharts/es-modules/masters/highcharts-gantt.src'; */

export let HIGHCHARTS_MODULES = new InjectionToken<any[]>('HighchartsModules');

@Injectable()
export class ChartService {
  constructor(@Inject(HIGHCHARTS_MODULES) private chartModules: any[]) {}

  initModules() {
    this.chartModules.forEach((chartModule) => {
      [/* Highcharts, Highstock, Highmaps, HighchartsGnatt */].forEach(chartModule);
    });
  }
}
