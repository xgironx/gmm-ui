import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Dashboard1Component } from '../dashboard1/dashboard1.component';
import {BranchChiefDashboardComponent} from '../branch-chief-dashboard/branch-chief-dashboard.component'

const lazyRoutes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component
      },
      {
        path: 'bcDashboard',
        component: BranchChiefDashboardComponent
      }
    ]
  }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(lazyRoutes);