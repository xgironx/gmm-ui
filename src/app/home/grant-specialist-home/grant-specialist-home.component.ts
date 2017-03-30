import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
  selector: 'app-grant-specialist-home',
  templateUrl: './grant-specialist-home.component.html',
  styleUrls: ['./grant-specialist-home.component.css']
})
export class GrantSpecialistHomeComponent implements OnInit {
  public pageTitle: string = 'Grant Specialist Home';
  user:string = Globals.defaultGrantSpecialistUser;
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
            ['Approval', 125],
            ['Review', 150],
            ['Draft', 75]
        ]
    }];
  }

}