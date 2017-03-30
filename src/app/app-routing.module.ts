import { ModuleWithProviders }         from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchChiefHomeComponent } from './home/branch-chief-home/branch-chief-home.component';
import { GranteeHomeComponent } from './home/grantee-home/grantee-home.component';
import { GrantSpecialistHomeComponent } from './home/grant-specialist-home/grant-specialist-home.component';
import { StateResolver, ApplicantTypeResolver, GrantTypeResolver } from './shared/ref-data-resolver.service';

const routes: Routes = [
    { path: 'home', component: BranchChiefHomeComponent },
    { path: 'grantSpecialistHome', component: GrantSpecialistHomeComponent },
    { 
        path: 'granteeHome', 
        component: GranteeHomeComponent,
        resolve: { grantTypes: GrantTypeResolver, applicantTypes: ApplicantTypeResolver },
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'Dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'Application', loadChildren: './applications/application.module#ApplicationModule' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);