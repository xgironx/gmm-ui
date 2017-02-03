import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Dashboard1Component } from '../dashboard1/dashboard1.component';

const lazyRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component
      }
    ]
  }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(lazyRoutes);