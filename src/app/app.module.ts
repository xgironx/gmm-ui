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
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

/* Feature Modules */
import { ApplicationModule } from './applications/application.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TaskModule } from './tasks/task.module';

/* Shared Module */
import { SharedModule } from './shared/shared.module';

/* Core Module */
import { CoreModule } from './core/core.module';

/* Components */
import { AppComponent } from './app.component';
import { GranteeHomeComponent } from './home/grantee-home/grantee-home.component';
import { BranchChiefHomeComponent } from './home/branch-chief-home/branch-chief-home.component';
import { GrantSpecialistHomeComponent } from './home/grant-specialist-home/grant-specialist-home.component';


@NgModule({
  declarations: [
    AppComponent,
    GranteeHomeComponent,
    BranchChiefHomeComponent,
    GrantSpecialistHomeComponent
  ],
  imports: [
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
