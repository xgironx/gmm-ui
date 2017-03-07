import { Component, OnInit, Input, OnChanges } from '@angular/core';

declare var require: any;
const Highcharts = require('highcharts');
Highcharts.setOptions({ lang: { thousandsSep: ',' } });

@Component({
  selector: 'app-funnel-chart',
  templateUrl: './funnel-chart.component.html',
  styleUrls: ['./funnel-chart.component.css']
})

export class FunnelChartComponent implements OnInit, OnChanges {
  @Input() series: any[] = [];
  options: Object;
  items = [];

  constructor() { 
    
  }

  ngOnInit() {
    this.renderChart(this.series);
  }

  ngOnChanges(){
    this.renderChart(this.series);
  }

  renderChart(series:any[]){
    this.options = {
            chart: {
                type: 'funnel',
                marginRight: 100,
                width: "450"
            },
            /*exporting: {
              buttons: {
                      contextButton: {
                        enabled: false
                          //menuItems: this.createDefaultMenuItems()
                      }
                  }
            },*/
            title: {
                text: 'Bus Func funnel',
                x: -50
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> ({point.y:,.0f})',
                        //color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                        softConnector: true
                    },
                    neckWidth: '30%',
                    neckHeight: '25%'

                    //-- Other available options
                    // height: pixels or percent
                    // width: pixels or percent
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: series
        };
  }

}
