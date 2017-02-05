import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterTextService }   from './filter-text/filter-text.service';
import { InitCapsPipe }        from './init-caps.pipe';
import { ReportsReceivedPieChartComponent } from './charts/reports-received-pie-chart/reports-received-pie-chart.component';
import { PieGridCustomComponent } from './charts/pie-grid-custom/pie-grid-custom.component';
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
    ReportsReceivedPieChartComponent,
    PieGridCustomComponent
  ],
  providers: [FilterTextService],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextComponent,
    InitCapsPipe
  ]
})
export class SharedModule { }
