import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { lazyRouting  } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { ApplicationsListComponent } from '../applications-list/applications-list.component';
import { ApplicationService } from '../application.service';
import { StateResolver, ApplicantTypeResolver, GrantTypeResolver } from '../../shared/ref-data-resolver.service';
import { ApplicationAddPersonComponent } from '../application-add-person/application-add-person.component';
import { GranteeAddModalComponent } from '../grantee-add-modal/grantee-add-modal.component';
import { ApplicationAddOrganizationComponent } from '../application-add-organization/application-add-organization.component';
import { PocAddModalComponent } from '../poc-add-modal/poc-add-modal.component';


/* Third Party */
import { PaginationModule, ModalModule } from 'ng2-bootstrap';
import {SelectModule} from 'ng-select';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

/* Shared Module */
import { SharedModule } from '../../shared/shared.module';
import { CurrencyPipePipe } from '../../shared/pipes/currency-pipe.pipe';

const MODAL_PROVIDERS = [
  Modal,
  Overlay,
  { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];

@NgModule({
  imports: [
    PaginationModule.forRoot(),
    ModalModule,
    BootstrapModalModule,
    //BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    lazyRouting,
    SelectModule,
    SharedModule,
    NgxDatatableModule
    
  ],
  exports: [
    ApplicationsListComponent
  ],
  declarations: [
    ApplicationComponent,
    ApplicationsListComponent,
    ApplicationAddPersonComponent,
    GranteeAddModalComponent,
    ApplicationAddOrganizationComponent,
    PocAddModalComponent
  ],
  providers: [
    ApplicationService, 
    MODAL_PROVIDERS, 
    CurrencyPipePipe
  ],
  entryComponents: [ 
    GranteeAddModalComponent,
    PocAddModalComponent
  ]
})
export class ApplicationModule { }
