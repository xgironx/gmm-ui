import { Component, OnInit } from '@angular/core';
import { ITask } from '../itask';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DateDifferencePipe } from '../../shared/pipes/date-difference.pipe';

@Component({
  selector: 'app-my-task-list',
  templateUrl: './my-task-list.component.html'
})
export class MyTaskListComponent implements OnInit {
  errorMessage: string;
  taskData: ITask[] = null;
  tasks: ITask[] = [];
  tasksTemp: ITask[] = [];
  columns = [
    { prop: 'applicationNumber', name: "Task"},
    { prop: 'dueDate', name: "Due Date" },
    { name: "User Actions" }
  ];

  constructor(private _taskService: TaskService,private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this._taskService.getTasks()
      .subscribe(
      (tasks) => {
        this.taskData = tasks;
        console.log(this.taskData);
        for (let t of this.taskData) {
            this.tasks.push(t);
            this.tasksTemp.push(t);
          //this.tasks.push(new TaskTableData(t.name + " " + t.applicationNumber.toString() + ": Task ready for approval", t.dueDate.toString(), t.applicationNumber));
          //this.tasksTemp.push(new TaskTableData(t.name + " " + t.applicationNumber.toString() + ": Task ready for approval", t.dueDate.toString(), t.applicationNumber));
        }
      },
      error => this.errorMessage = <any>error
      );
  }

  onActivate(event: any) {
    console.log('Event: activate', event);
    if(event.column.prop == "applicationNumber"){
      this.router.navigate(['/Application/addApplicationOrganization'], { queryParams: { id: event.row.applicationNumber } });
    }
  }

  navigateToApplication(row: ITask){
    this.router.navigate(['/Application/addApplicationOrganization'], { queryParams: { id: row.applicationNumber } });
  }
 
}

class TaskTableData {
    constructor(
        public task: string = "",
        public dueDate: string = "",
        public applicationNumber: number = null)
     {}
}
