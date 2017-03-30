import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../models/itask';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DateDifferencePipe } from '../../shared/pipes/date-difference.pipe';

@Component({
  selector: 'app-my-task-list',
  templateUrl: './my-task-list.component.html'
})
export class MyTaskListComponent implements OnInit {
  @Input() user:string;
  errorMessage: string;
  tasks: ITask[];
  tasksTemp: ITask[];
  messages:any = {
    emptyMessage: "No data to display",
    totalMessage: "total"
  };

  constructor(private _taskService: TaskService,private route: ActivatedRoute,
    private router: Router, private ddpipe: DateDifferencePipe) {
      this.ddpipe = new DateDifferencePipe();
    }

  ngOnInit() {
    this._taskService.getTasksByUser(this.user)
      .subscribe(
      (tasks) => {
        this.tasks = tasks;
        this.tasksTemp = tasks;
      },
      error => this.errorMessage = <any>error
      );
  }

  onActivate(event: any) {
    console.log('Event: activate', event);
    if(event.column.prop == "processCorrelationId"){
      this.router.navigate(['/Application/addApplicationOrganization'], { queryParams: { id: event.row.processCorrelationId } });
    }
  }

  navigateToApplication(row: ITask){
    this.router.navigate(['/Application/addApplicationOrganization'], { queryParams: { id: row.processCorrelationId } });
  }

  updateFilter(event) {
    let val = (<string>event.target.value).toLowerCase();
    let tasksTemp = this.tasksTemp.filter(function(d) {
      let pipe: DateDifferencePipe = new DateDifferencePipe();
      let a = pipe.transform(d.dueDate, d.currentDate);
      console.log(a);
      return (d.name.toLowerCase().indexOf(val) !== -1 ||
             d.processCorrelationId.toString().toLowerCase().indexOf(val) !== -1 ||
             ("Due " + pipe.transform(d.dueDate, d.currentDate).toString()).toLowerCase().indexOf(val) !== -1
      )
    });
    this.tasks = tasksTemp;
  }

  editTask(){
    
  }
 
}
