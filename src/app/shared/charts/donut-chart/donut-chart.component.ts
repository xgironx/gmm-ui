import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit, OnChanges {
  @Input() series: any[] = [];
  @Input() width: number;
  @Input() centerText: string;
  chart : Object;
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
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          },
          width: this.width
      },
      title: {
        text: this.centerText,
        verticalAlign: 'middle'
    },
    exporting: {
      buttons: {
        contextButton: {
          enabled: true
        }
      }
    },
    plotOptions: {
        pie: {
        		allowPointSelect: true,
            showInLegend: true,
            innerSize: "60%",
            depth: 45
        },
        series:{
          dataLabels: {
            enabled: false,
            animation: true
          },
        }
    },
    series: this.series,
    credits: {
      enabled: false
    },
    legend:{
      floating: false
    },
    lang:{
      thousandsSep: ","
    }



    }
  }
}

