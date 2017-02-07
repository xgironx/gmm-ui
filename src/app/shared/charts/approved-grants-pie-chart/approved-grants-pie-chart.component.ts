import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-approved-grants-pie-chart',
  templateUrl: './approved-grants-pie-chart.component.html',
  styleUrls: ['./approved-grants-pie-chart.component.css']
})

export class ApprovedGrantsPieChartComponent implements OnInit {
    pageTitle: string = 'Dashboard 1';

    single: any[];
    multi: any[];

    view: any[] = [450, 220];

    // options
    showLegend = false;

    colorScheme = {
        domain: ['#0033cc', '#0099ff', '#00ccff']
    };

    // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = true;
  middleLabel: string = "2016";

    constructor() {
        
        this.single = [
            {
                "name": "PSGP",
                "value": 125
            },
            {
                "name": "HSGP",
                "value": 100
            },
            {
                "name": "AFG",
                "value": 150
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
