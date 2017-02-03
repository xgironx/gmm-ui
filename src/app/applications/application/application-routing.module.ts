import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { GranteeAddComponent } from '../grantee-add/grantee-add.component';
import { ApplicationAddComponent } from '../application-add/application-add.component';
import { SubGranteeAddComponent } from '../sub-grantee-add/sub-grantee-add.component';
import { StateResolver, ApplicantTypeResolver, GrantTypeResolver } from '../../shared/ref-data-resolver.service';

const lazyRoutes: Routes = [
  {
    path: 'Application',
    component: ApplicationComponent,
    children: [
      {
        path: 'addGrantee',
        component: GranteeAddComponent,
        resolve: { states: StateResolver, applicantTypes: ApplicantTypeResolver }
      },
      {
        path: 'addApplication/:id',
        component: ApplicationAddComponent,
        resolve: { grantTypes: GrantTypeResolver }
      },
      {
        path: 'addSubGrantee/:id',
        component: SubGranteeAddComponent,
        resolve: { states: StateResolver, applicantTypes: ApplicantTypeResolver }
      }
    ]
  }
];

export const lazyRouting: ModuleWithProviders = RouterModule.forChild(lazyRoutes);
