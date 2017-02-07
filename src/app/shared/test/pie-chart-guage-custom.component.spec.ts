/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import d3 from '../charts/d3';
import {PieArcComponent , calculateViewDimensions, ViewDimensions, ColorHelper, BaseChartComponent, trimLabel, gridLayout, formatLabel} from "@swimlane/ngx-charts";


import { PieChartGuageCustomComponent } from '../charts/pie-chart-guage-custom/pie-chart-guage-custom.component';
import { PieChartSeriesCustomComponent } from '../charts/pie-chart-series-custom/pie-chart-series-custom.component';

describe('PieChartGuageCustomComponent', () => {
  let component: PieChartGuageCustomComponent;
  let fixture: ComponentFixture<PieChartGuageCustomComponent>;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [
        NgxChartsModule
      ],
      declarations: [ 
        PieChartGuageCustomComponent,
        PieChartSeriesCustomComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartGuageCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
