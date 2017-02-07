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


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    NgxChartsModule
  ],
  declarations: [
    FilterTextComponent,
    InitCapsPipe,
    InitCapsPipe,
    PieChartCustomComponent,
    PieChartSeriesCustomComponent,
    ApprovedGrantsPieChartComponent,
    PieChartGuageCustomComponent,
    PieChartGuageSeriesCustomComponent
  ],
  providers: [
    FilterTextService
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
    PieChartGuageSeriesCustomComponent
  ]
})
export class SharedModule { }
