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


/* Third Party */
import { PaginationModule, ModalModule } from 'ng2-bootstrap';
import {SelectModule} from 'angular2-select';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

/* Shared Module */
import { SharedModule } from '../../shared/shared.module';

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
    GranteeAddModalComponent
  ],
  providers: [ApplicationService, MODAL_PROVIDERS],
  entryComponents: [ GranteeAddModalComponent ]
})
export class ApplicationModule { }
