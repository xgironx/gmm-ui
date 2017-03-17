import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterTextService }   from './filter-text/filter-text.service';
import { InitCapsPipe }        from './init-caps.pipe';
import { ApprovedGrantsPieChartComponent } from './charts/approved-grants-pie-chart/approved-grants-pie-chart.component';
import { PieChartCustomComponent } from './charts/pie-chart-custom/pie-chart-custom.component';
import { PieChartSeriesCustomComponent } from './charts/pie-chart-series-custom/pie-chart-series-custom.component';
import { PieChartGuageCustomComponent } from './charts/pie-chart-guage-custom/pie-chart-guage-custom.component';
import { PieChartGuageSeriesCustomComponent } from './charts/pie-chart-guage-series-custom/pie-chart-guage-series-custom.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartModule } from 'angular2-highcharts';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
export function highchartsFactory() {
    var hc = require('highcharts');
    var hcf = require('highcharts/modules/funnel');
    var exp = require('highcharts/modules/exporting');

    hcf(hc);
    exp(hc);
    return hc;
}
import { FunnelChartComponent } from './charts/funnel-chart/funnel-chart.component';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';
import { CurrencyFormatterDirective } from './directives/currency-formatter.directive';
import { DateDifferencePipe } from './pipes/date-difference.pipe';

import { YearValidatorDirective } from './directives/year-validator.directive';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    NgxChartsModule,
    ChartModule
  ],
  declarations: [
    FilterTextComponent,
    InitCapsPipe,
    InitCapsPipe,
    PieChartCustomComponent,
    PieChartSeriesCustomComponent,
    ApprovedGrantsPieChartComponent,
    PieChartGuageCustomComponent,
    PieChartGuageSeriesCustomComponent,
    FunnelChartComponent,
    CurrencyPipePipe,
    CurrencyFormatterDirective,
    DateDifferencePipe,
    YearValidatorDirective
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
    PieChartCustomComponent,
    PieChartSeriesCustomComponent,
    ApprovedGrantsPieChartComponent,
    PieChartGuageCustomComponent,
    PieChartGuageSeriesCustomComponent,
    FunnelChartComponent,
    CurrencyPipePipe,
    CurrencyFormatterDirective,
    DateDifferencePipe
  ]
})
export class SharedModule { }
