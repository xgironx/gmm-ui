import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app-routing.module';
import { RefDataService } from './shared/ref-data.service';
import { StateResolver, ApplicantTypeResolver, GrantTypeResolver } from './shared/ref-data-resolver.service';

/* Third Party */
import { Ng2TableModule } from 'ng2-table/ng2-table';
import {SelectModule} from 'angular2-select';
import { TabsModule } from 'ng2-bootstrap';
import {NgxChartsModule} from "@swimlane/ngx-charts";

/* Feature Modules */
import { ApplicationModule } from './applications/application/application.module';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';
import { TaskModule } from './tasks/task/task.module';

/* Components */
import { AppComponent } from './app.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { TopnavbarComponent } from './menu/topnavbar/topnavbar.component';
import { HomeComponent } from './home/home/home.component';
//import { ReportsReceivedPieChartComponent } from './shared/charts/reports-received-pie-chart/reports-received-pie-chart.component';
//import { PieGridCustomComponent } from './shared/charts/pie-grid-custom/pie-grid-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopnavbarComponent,
    HomeComponent//,
    //ReportsReceivedPieChartComponent,
    //PieGridCustomComponent
  ],
  imports: [
    TabsModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ApplicationModule,
    DashboardModule,
    TaskModule,
    Ng2TableModule,
    SelectModule,
    NgxChartsModule
  ],
  providers: [
    RefDataService,
    StateResolver,
    ApplicantTypeResolver,
    GrantTypeResolver,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
