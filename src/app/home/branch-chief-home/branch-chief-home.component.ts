import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
  selector: 'app-branch-chief-home',
  templateUrl: './branch-chief-home.component.html',
  styleUrls: ['./branch-chief-home.component.css']
})
export class BranchChiefHomeComponent implements OnInit {
  public pageTitle: string = 'Branch Cheif Home';
  user:string = Globals.defaultBranchChiefUser;
  dcWidth:number = 400;
  dcCenterText:string = "2016";
  dcSeries:any[];

  

  constructor() { 
      
  }

  ngOnInit() {
      this.dcSeries = [{
        type: "pie",
        name: 'Application Status',
        data: [
            ['Approval', 1000],
            ['Review', 250],
            ['Draft', 750]
        ]
    }];
  }

}