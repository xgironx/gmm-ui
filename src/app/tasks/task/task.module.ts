import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTaskListComponent } from '../my-task-list/my-task-list.component';
import { TaskService } from '../task.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

/* Shared Module */
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    SharedModule
    ],
  exports: [
    MyTaskListComponent
  ],
  declarations: [
    MyTaskListComponent
  ],
  providers: [TaskService]
})
export class TaskModule {}
