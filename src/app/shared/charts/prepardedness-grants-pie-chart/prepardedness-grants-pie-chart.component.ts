import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prepardedness-grants-pie-chart',
  templateUrl: './prepardedness-grants-pie-chart.component.html',
  styleUrls: ['./prepardedness-grants-pie-chart.component.css']
})

export class PrepardednessGrantsPieChartComponent implements OnInit {
    single: any[];

    view: any[] = [550, 220];

    // options
    showLegend = false;

    colorScheme = {
        domain: ['#0033cc', '#b3ccff', '#00ccff']
    };

    // pie
  showLabels = false;
  explodeSlices = false;
  doughnut = true;
  middleLabel: string = "of preparedness grant awards accepted within 90 days";
  innerCircleLine1: string = "of preparedness grant awards";
  innerCircleLine2: string = "accepted within 90 days";
  innerCircleLine3: string = "View Details";

    constructor() {
        
        this.single = [
            {
                "name": "Accepted Grants",
                "value": 346
            },
            {
                "name": "Rejected Grants",
                "value": 300
            }
        ];

    }

    onSelect(event) {
        console.log(event);
    }

    ngOnInit() {
        console.log('hello `dashboard1` component');
    }

}
