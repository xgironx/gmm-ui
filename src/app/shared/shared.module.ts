import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterTextService }   from './filter-text/filter-text.service';
import { InitCapsPipe }        from './init-caps.pipe';
import { ChartModule } from 'angular2-highcharts';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
export function highchartsFactory() {
    var hc = require('highcharts');
    var hcf = require('highcharts/modules/funnel');
    var hc3 = require('highcharts/highcharts-3d');
    var exp = require('highcharts/modules/exporting');

    hcf(hc);
    hc3(hc);
    exp(hc);
    return hc;
}
import { FunnelChartComponent } from './charts/funnel-chart/funnel-chart.component';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';
import { CurrencyFormatterDirective } from './directives/currency-formatter.directive';
import { DateDifferencePipe } from './pipes/date-difference.pipe';

import { YearValidatorDirective } from './directives/year-validator.directive';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ChartModule
  ],
  declarations: [
    FilterTextComponent,
    InitCapsPipe,
    InitCapsPipe,
    FunnelChartComponent,
    CurrencyPipePipe,
    CurrencyFormatterDirective,
    DateDifferencePipe,
    YearValidatorDirective,
    DonutChartComponent
  ],
  providers: [
    FilterTextService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextComponent,
    InitCapsPipe,
    FunnelChartComponent,
    CurrencyPipePipe,
    CurrencyFormatterDirective,
    DateDifferencePipe,
    DonutChartComponent
  ]
})
export class SharedModule { }
