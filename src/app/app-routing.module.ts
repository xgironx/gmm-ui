import { ModuleWithProviders }         from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { GranteeHomeComponent } from './home/grantee-home/grantee-home.component';
import { StateResolver, ApplicantTypeResolver, GrantTypeResolver } from './shared/ref-data-resolver.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'granteeHome', 
        component: GranteeHomeComponent,
        resolve: { grantTypes: GrantTypeResolver, applicantTypes: ApplicantTypeResolver },
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'Dashboard', loadChildren: './dashboard/dashboard/dashboard.module#DashboardModule' },
    { path: 'Application', loadChildren: './applications/application/application.module#ApplicationModule' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);