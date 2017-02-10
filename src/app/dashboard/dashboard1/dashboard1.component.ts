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

    reportsReceivedTitle:string;
    reportsReceivedInnerCircleLine1: string;
    reportsReceivedInnerCircleLine2: string;
    reportsReceivedInnerCircleLine3: string;
    reportsReceivedEntries: any[];

    improperPaymentsTitle:string;
    improperPaymentsInnerCircleLine1: string;
    improperPaymentsInnerCircleLine2: string;
    improperPaymentsInnerCircleLine3: string;
    improperPaymentsEntries: any[];

    correctiveActionsTitle:string;
    correctiveActionsInnerCircleLine1: string;
    correctiveActionsInnerCircleLine2: string;
    correctiveActionsInnerCircleLine3: string;
    correctiveActionsEntries: any[];

    constructor() {

    } 

    ngOnInit() {
        this.setPrepardednessGrantsChart();
        this.setSubmittedFinancialReportsChart();
        this.setReportsReceivedChart();
        this.setImproperPaymentsChart();
        this.setCorrectiveActionsChart();
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

    private setReportsReceivedChart(){
        this.reportsReceivedEntries = [
            {
                "name": "Received",
                "value": 390
            },
            {
                "name": "Outstanding",
                "value": 300
            }
        ];
        this.reportsReceivedTitle = "Reports Received";
        this.reportsReceivedInnerCircleLine1 = "";
        this.reportsReceivedInnerCircleLine2 = "";
        this.reportsReceivedInnerCircleLine3 = "";
    }

    private setImproperPaymentsChart(){
        this.improperPaymentsEntries = [
            {
                "name": "Received",
                "value": 444
            },
            {
                "name": "Outstanding",
                "value": 300
            }
        ];
        this.improperPaymentsTitle = "Improper Payments";
        this.improperPaymentsInnerCircleLine1 = "of improper payments identified";
        this.improperPaymentsInnerCircleLine2 = "through financial monitoring";
        this.improperPaymentsInnerCircleLine3 = "View Details";
    }

    private setCorrectiveActionsChart(){
        this.correctiveActionsEntries = [
            {
                "name": "On Time",
                "value": 650
            },
            {
                "name": "Late",
                "value": 300
            }
        ];
        this.correctiveActionsTitle = "Corrective Actions";
        this.correctiveActionsInnerCircleLine1 = "of corrective actions";
        this.correctiveActionsInnerCircleLine2 = "submitted on time";
        this.correctiveActionsInnerCircleLine3 = "View Details";
    }
}
