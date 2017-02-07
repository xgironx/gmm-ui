/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ApprovedGrantsPieChartComponent } from '../charts/approved-grants-pie-chart/approved-grants-pie-chart.component';
import { PieChartCustomComponent } from '../charts/pie-chart-custom/pie-chart-custom.component';
import { PieChartSeriesCustomComponent } from '../charts/pie-chart-series-custom/pie-chart-series-custom.component';

describe('ApprovedGrantsPieChartComponent', () => {
  let component: ApprovedGrantsPieChartComponent;
  let fixture: ComponentFixture<ApprovedGrantsPieChartComponent>;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [
        NgxChartsModule
      ],
      declarations: [
        ApprovedGrantsPieChartComponent,
        PieChartCustomComponent,
        PieChartSeriesCustomComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedGrantsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should work", function () {
    expect(component).toBeTruthy();
  });
});
