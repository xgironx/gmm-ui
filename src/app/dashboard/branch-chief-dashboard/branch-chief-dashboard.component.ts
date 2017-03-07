import { Component, OnInit } from '@angular/core';

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

  clicked(event){
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

}
