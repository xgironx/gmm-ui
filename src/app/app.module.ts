import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http } from "@angular/http";

import { routing, appRoutingProviders } from './app-routing.module';
import { RefDataService } from './shared/ref-data.service';
import { StateResolver, ApplicantTypeResolver, GrantTypeResolver } from './shared/ref-data-resolver.service';

/* Third Party */
import { SelectModule } from 'ng-select';
import { TabsModule, ModalModule } from 'ng2-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

/* Feature Modules */
import { ApplicationModule } from './applications/application/application.module';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';
import { TaskModule } from './tasks/task/task.module';

/* Shared Module */
import { SharedModule } from './shared/shared.module';

/* Core Module */
import { CoreModule } from './core/core.module';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { GranteeHomeComponent } from './home/grantee-home/grantee-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GranteeHomeComponent
  ],
  imports: [
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ApplicationModule,
    DashboardModule,
    TaskModule,
    SelectModule,
    SharedModule,
    CoreModule,
    NgxDatatableModule
  ],
  providers: [
    RefDataService,
    StateResolver,
    ApplicantTypeResolver,
    GrantTypeResolver,
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
