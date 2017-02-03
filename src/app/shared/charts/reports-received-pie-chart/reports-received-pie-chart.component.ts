import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-reports-received-pie-chart',
  templateUrl: './reports-received-pie-chart.component.html',
  styleUrls: ['./reports-received-pie-chart.component.css']
})
export class ReportsReceivedPieChartComponent implements OnInit {
    single: any[];
    multi: any[];

    view: any[] = [500, 200];

    // options
    showLegend = true;

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    middleLabel: string = "test";
    total: number = 900;

    // pie
    
    showLabels = false;
    explodeSlices = false;
    doughnut = true;

    constructor() {
        
        this.single = [
            {
                "name": "Received",
                "value": 700
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
