import {
  Component, Input,
  ChangeDetectionStrategy, ChangeDetectorRef, ElementRef,
  NgZone
} from '@angular/core';

import { Location } from '@angular/common';

import d3 from '../d3';
import {NgxChartsModule, PieArcComponent , calculateViewDimensions, ViewDimensions, ColorHelper, BaseChartComponent, trimLabel, gridLayout, formatLabel} from "@swimlane/ngx-charts";


@Component({
  selector: 'app-pie-grid-custom',
  templateUrl: './pie-grid-custom.component.html',
  styleUrls: ['./pie-grid-custom.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieGridCustomComponent extends BaseChartComponent {
  
  dims: ViewDimensions;
  data: any[];
  transform: string;
  series: any[];
  domain: any[];
  colorScale: ColorHelper;
  @Input()  middleLabel: string;
  @Input()  total: number;
  margin = [0, 0, 0, 0];

   constructor(chartElement: ElementRef, zone: NgZone, cd: ChangeDetectorRef, location: Location){
       super(chartElement, zone, cd, location);
       
   }

  update(): void {
    super.update();
    
this.chartElement
    this.zone.run(() => {
      this.dims = calculateViewDimensions({
        width: this.width,
        height: this.height,
        margins: this.margin
      });

      this.domain = this.getDomain();

      this.data = gridLayout(this.dims, this.results, 150);
      this.transform = `translate(${this.margin[3]} , ${this.margin[0]})`;

      this.series = this.getSeries();
      this.setColors();

    });
  }

  getTooltipText(label, val): string {
    return `
      <span class="tooltip-label">${label}</span>
      <span class="tooltip-val">${val}</span>
    `;
  }

  getDomain(): any[] {
    return this.results.map(d => d.name);
  }

  getSeries(): any[] {
    const total = this.getTotal();

    return this.data.map((d) => {
      const baselineLabelHeight = 20;
      const padding = 10;
      const label = formatLabel(d.data.name);
      const value = d.data.value;
      const radius = (d3.min([d.width - padding, d.height - baselineLabelHeight]) / 2) - 5;
      const innerRadius = radius * 0.9;

      let count = 0;
      const colors = () => {
        count += 1;
        if (count === 1) {
          return 'rgba(100,100,100,0.3)';
        } else {
          return this.colorScale.getColor(label);
        }
      };

      const xPos = d.x + (d.width - padding) / 2;
      const yPos = d.y + (d.height - baselineLabelHeight) / 2;

      return {
        transform: `translate(${xPos}, ${yPos})`,
        colors,
        innerRadius,
        outerRadius: radius,
        label: trimLabel(label),
        total: total,
        value,
        percent: d3.format(".0%")(value/total),
        data: [d, {
          data: {
            other: true,
            value: total - value,
            name: d.data.name
          }
        }]
      };
    });
  }

  getTotal(): any {
      return this.total;
    /*return this.results
      .map(d => d.value)
      .reduce((sum, d) => { return sum + d; }, 0);*/
  }

  onClick(data): void {
    this.select.emit(data);
  }

  setColors(): void {
    this.colorScale = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
  }

}
