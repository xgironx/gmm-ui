import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MockBackend } from "@angular/http/testing";
import { BaseRequestOptions, Http } from "@angular/http";

import { routing, appRoutingProviders } from './app-routing.module';
import { RefDataService } from './shared/ref-data.service';
import { StateResolver, ApplicantTypeResolver, GrantTypeResolver } from './shared/ref-data-resolver.service';

/* Third Party */
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { SelectModule } from 'angular2-select';
import { TabsModule, ModalModule } from 'ng2-bootstrap';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

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

export function optionsFactory(backend: MockBackend, options: BaseRequestOptions) {
 return new Http(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
    Ng2TableModule,
    SelectModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    RefDataService,
    StateResolver,
    ApplicantTypeResolver,
    GrantTypeResolver,
    appRoutingProviders/*,
    BootstrapModalModule.getProviders(),
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: optionsFactory
    }*/
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
