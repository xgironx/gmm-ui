import { NgModule } from '@angular/core';
import { LoggerService } from './logger.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    SidebarComponent,
    TopnavbarComponent
  ],
  declarations: [
    SidebarComponent,
    TopnavbarComponent
  ],
  providers: [
    LoggerService
  ]
})
export class CoreModule { }
