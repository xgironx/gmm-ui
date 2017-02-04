import { NgModule } from '@angular/core';
import { LoggerService } from './logger.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner.service';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    SidebarComponent,
    TopnavbarComponent, 
    SpinnerComponent
  ],
  declarations: [
    SidebarComponent,
    TopnavbarComponent, 
    SpinnerComponent, 
    SpinnerComponent
  ],
  providers: [
    LoggerService, 
    SpinnerService
  ]
})
export class CoreModule { }
