import { Component, OnInit } from '@angular/core';
import { ITask } from '../../tasks/models/itask';
import { Task } from '../../tasks/models/task';

@Component({
  selector: 'app-branch-chief-dashboard',
  templateUrl: './branch-chief-dashboard.component.html',
  styleUrls: ['./branch-chief-dashboard.component.css']
})
export class BranchChiefDashboardComponent implements OnInit {
  public pageTitle: string = 'Branch Chief Dashboard';
  series: any[] = [];
  dataA: boolean = true;
  dataB: boolean = false;
  tasks: ITask[] = [];
  tasksTemp: ITask[] = [];
  columns = [
    { prop: 'assignee', name: "Assignee", maxWidth: 100 },
    { prop: 'description', name: "Description", maxWidth: 100 },
    { prop: 'name', name: "Name", maxWidth: 100 },
    { prop: 'owner', name: "Owner", maxWidth: 100 }
  ];

  constructor() { 
    this.series = [{
                name: 'BUS FUN',
                data: [
                    ['BUS FUN 6', 15654],
                    ['BUS FUN 7', 4064],
                    ['BUS FUN 8', 1987],
                    ['BUS FUN 9', 976],
                    ['BUS FUN 10', 846]
                ]
            }];
  }

  ngOnInit() {
    this.tasks.push(new Task("abcd", "Joe", "description test", "name test", "owner test", "processInstanceId", 1));
    this.tasksTemp.push(new Task("abcd", "Joe", "description test", "name test", "owner test", "processInstanceId", 2));
    this.series = [{
                name: 'BUS FUN',
                data: [
                    ['BUS FUN 1', 15654],
                    ['BUS FUN 2', 4064],
                    ['BUS FUN 3', 1987],
                    ['BUS FUN 4', 976],
                    ['BUS FUN 5', 846]
                ]
            }];
    
  }

  clicked(event: any){
    this.series = [{
                name: 'BUS FUN',
                data: [
                    ['BUS FUN 1', 8000],
                    ['BUS FUN 2', 5000],
                    ['BUS FUN 3', 1000],
                    ['BUS FUN 4', 950],
                    ['BUS FUN 5', 821]
                ]
            }];
  }

  updateFilter(event: any) {
    let val = (<string>event.target.value).toLowerCase();
    let tasksTemp = this.tasksTemp.filter(function(d) {
      return (d.assignee.toLowerCase().indexOf(val) !== -1 ||
             d.description.toLowerCase().indexOf(val) !== -1 ||
             d.name.toLowerCase().indexOf(val) !== -1 ||
             d.owner.toLowerCase().indexOf(val) !== -1 
      )
    });
    this.tasks = tasksTemp;
  }

}
