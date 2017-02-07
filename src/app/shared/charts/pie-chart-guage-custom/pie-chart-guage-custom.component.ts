import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, ChangeDetectorRef, ElementRef,
  NgZone
} from '@angular/core';

import { Location } from '@angular/common';

import d3 from '../d3';
import {NgxChartsModule, PieArcComponent , calculateViewDimensions, ViewDimensions, ColorHelper, BaseChartComponent, trimLabel, gridLayout, formatLabel} from "@swimlane/ngx-charts";


@Component({
  selector: 'app-pie-chart-guage-custom',
  templateUrl: './pie-chart-guage-custom.component.html',
  styleUrls: ['./pie-chart-guage-custom.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PieChartGuageCustomComponent extends BaseChartComponent {

  @Input() labels = false;
  @Input() legend = false;
  @Input() explodeSlices = false;
  @Input() doughnut = false;
  @Input() arcWidth = 0.10;
  @Input() gradient: boolean;
  @Input() activeEntries: any[] = [];
  @Input()  innerCircleLine1: string;
  @Input()  innerCircleLine2: string;
  @Input()  innerCircleLine3: string;
  @Input()  title: string;

  @Output() select = new EventEmitter();
  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() deactivate: EventEmitter<any> = new EventEmitter();

  translation: string;
  outerRadius: number;
  innerRadius: number;
  data: any;
  colors: ColorHelper;
  domain: any;
  dims: any;
  margin = [20, 20, 20, 20];
  legendOptions: any;
  total: number;
  percent: number;

  constructor(chartElement: ElementRef, zone: NgZone, cd: ChangeDetectorRef, location: Location){
       super(chartElement, zone, cd, location);
   }

  update(): void {
    super.update();
    console.log(this.results[0]);
    

    this.zone.run(() => {
      if (this.labels) {
        this.margin = [20, 80, 50, 10];
      }

      this.dims = calculateViewDimensions({
        width: this.width,
        height: this.height,
        margins: this.margin,
        showLegend: this.legend,
        columns: 10
      });

      const xOffset = this.margin[3] + this.dims.width / 2;
      const yOffset = this.margin[0] + this.dims.height / 2;
      this.translation = `translate(${xOffset}, ${yOffset})`;
      this.outerRadius = Math.min(this.dims.width, this.dims.height);
      if (this.labels) {
        // make room for labels
        this.outerRadius /= 2;
      } else {
        this.outerRadius /= 2;
      }
      this.innerRadius = 0;
      if (this.doughnut) {
        this.innerRadius = this.outerRadius * (1 - this.arcWidth);
      }

      this.domain = this.getDomain();

      // sort data according to domain
      this.data = this.results.sort((a, b) => {
        return this.domain.indexOf(a.name) - this.domain.indexOf(b.name);
      });

      this.setColors();
      this.legendOptions = this.getLegendOptions();
    });
  }

  getDomain(): any[] {
    this.total = 0;
    const items = [];

    this.results.map(d => {
      let label = d.name;
      let value = d.value;
      if (label.constructor.name === 'Date') {
        label = label.toLocaleDateString();
      } else {
        label = label.toLocaleString();
      }

      if (items.indexOf(label) === -1) {
        this.total += value;
        items.push(label);
      }
    });
    this.percent = d3.format(".0%")(this.results[0].value/this.total);

    return items;
  }

  onClick(data): void {
    this.select.emit(data);
  }

  setColors(): void {
    this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
  }

  getLegendOptions() {
    return {
      scaleType: 'ordinal',
      domain: this.domain,
      colors: this.colors
    };
  }

  onActivate(item) {
    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value;
    });
    if (idx > -1) {
      return;
    }

    this.activeEntries = [ item, ...this.activeEntries ];
    this.activate.emit({ value: item, entries: this.activeEntries });
  }

  onDeactivate(item) {
    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value;
    });

    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];

    this.deactivate.emit({ value: item, entries: this.activeEntries });
  }

}
