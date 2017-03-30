import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TaskModule } from '../tasks/task.module';
import { BranchChiefDashboardComponent } from './branch-chief-dashboard/branch-chief-dashboard.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

/* Shared Module */
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting,
    TaskModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [
    DashboardComponent,
    BranchChiefDashboardComponent
  ]
})
export class DashboardModule { }
