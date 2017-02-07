import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html'
})
export class Dashboard1Component implements OnInit  {
    pageTitle: string = 'Dashboard 1';

    // pie charts
    showLabels = false;
    explodeSlices = false;
    doughnut = true;
    view: any[] = [550, 220];
    showLegend = false;
    colorScheme = {
        domain: ['#0033cc', '#b3ccff', '#00ccff']
    };
    prepardednessGrantsTitle:string;
    prepardednessGrantInnerCircleLine1: string;
    prepardednessGrantInnerCircleLine2: string;
    prepardednessGrantInnerCircleLine3: string;
    prepardednessGrantsEntries: any[];
    
    submittedFinancialReportsTitle:string;
    submittedFinancialReportsInnerCircleLine1: string;
    submittedFinancialReportsInnerCircleLine2: string;
    submittedFinancialReportsInnerCircleLine3: string;
    submittedFinancialReportsEntries: any[];
    

    constructor() {

    } 

    ngOnInit() {
        this.setPrepardednessGrantsChart();
        this.setSubmittedFinancialReportsChart();
    }

    private setPrepardednessGrantsChart(){
        this.prepardednessGrantsEntries = [
            {
                "name": "Accepted Grants",
                "value": 346
            },
            {
                "name": "Rejected Grants",
                "value": 300
            }
        ];
        this.prepardednessGrantsTitle = "Prepardedness Grants";
        this.prepardednessGrantInnerCircleLine1 = "of preparedness grant awards";
        this.prepardednessGrantInnerCircleLine2 = "accepted within 90 days";
        this.prepardednessGrantInnerCircleLine3 = "View Details";
    }

    private setSubmittedFinancialReportsChart(){
        this.submittedFinancialReportsEntries = [
            {
                "name": "On Time",
                "value": 875
            },
            {
                "name": "Late",
                "value": 300
            }
        ];
        this.submittedFinancialReportsTitle = "Submitted Financial Reports";
        this.submittedFinancialReportsInnerCircleLine1 = "of quartlerly federal financial ";
        this.submittedFinancialReportsInnerCircleLine2 = "reports submitted on time";
        this.submittedFinancialReportsInnerCircleLine3 = "View Details";
    }
}
