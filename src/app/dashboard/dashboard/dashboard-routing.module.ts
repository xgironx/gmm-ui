import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {BranchChiefDashboardComponent} from '../branch-chief-dashboard/branch-chief-dashboard.component'

const lazyRoutes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'bcDashboard',
        component: BranchChiefDashboardComponent
      }
    ]
  }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(lazyRoutes);