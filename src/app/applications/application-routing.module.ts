import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { StateResolver, ApplicantTypeResolver, GrantTypeResolver } from '../shared/ref-data-resolver.service';
import { ApplicationAddPersonComponent } from './application-add-person/application-add-person.component';
import { ApplicationAddOrganizationComponent } from './application-add-organization/application-add-organization.component';

const lazyRoutes: Routes = [
  {
    path: 'Application',
    component: ApplicationComponent,
    children: [
      {
        path: 'addApplicationPerson',
        component: ApplicationAddPersonComponent,
        resolve: { states: StateResolver, grantTypes: GrantTypeResolver, applicantTypes: ApplicantTypeResolver }
      },
      {
        path: 'addApplicationOrganization',
        component: ApplicationAddOrganizationComponent,
        resolve: { states: StateResolver, grantTypes: GrantTypeResolver, applicantTypes: ApplicantTypeResolver }
      },
      {
        path: 'addApplicationOrganization/:id',
        component: ApplicationAddOrganizationComponent,
        resolve: { states: StateResolver, grantTypes: GrantTypeResolver, applicantTypes: ApplicantTypeResolver }
      }
    ]
  }
];

export const lazyRouting: ModuleWithProviders = RouterModule.forChild(lazyRoutes);
