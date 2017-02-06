import { Component, OnInit }  from '@angular/core';

import { ITask } from '../itask';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-my-task-list',
  templateUrl: './my-task-list.component.html'
})
export class MyTaskListComponent implements OnInit {

    myTasks: ITask[];
    errorMessage: string;

    constructor(private _taskService: TaskService) {

    }  

    ngOnInit() {
        this._taskService.getMyTasks()
                .subscribe(myTasks => this.myTasks = myTasks,
                          error => this.errorMessage = <any>error);
    }
 
}


