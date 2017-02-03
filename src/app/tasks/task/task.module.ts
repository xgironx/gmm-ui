import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTaskListComponent } from '../my-task-list/my-task-list.component';
import { TaskService } from '../task.service';

@NgModule({
  imports: [
    CommonModule
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
