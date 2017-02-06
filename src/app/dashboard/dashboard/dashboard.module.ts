import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { Dashboard1Component } from '../dashboard1/dashboard1.component';
import { TaskModule } from '../../tasks/task/task.module';
import { TabsModule } from 'ng2-bootstrap';
//import { ReportsReceivedPieChartComponent } from '../../shared/charts/reports-received-pie-chart/reports-received-pie-chart.component';

/* Shared Module */
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting,
    TaskModule,
    TabsModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    Dashboard1Component//,
    //ReportsReceivedPieChartComponent
  ]
})
export class DashboardModule { }
