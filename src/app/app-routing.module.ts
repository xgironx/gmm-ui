import { ModuleWithProviders }         from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'Dashboard', loadChildren: './dashboard/dashboard/dashboard.module#DashboardModule' },
    { path: 'Application', loadChildren: './applications/application/application.module#ApplicationModule' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);