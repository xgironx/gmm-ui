/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { PieChartCustomComponent } from '../charts/pie-chart-custom/pie-chart-custom.component';
import { PieChartSeriesCustomComponent } from '../charts/pie-chart-series-custom/pie-chart-series-custom.component';

describe('PieChartCustomComponent', () => {
  let component: PieChartCustomComponent;
  let fixture: ComponentFixture<PieChartCustomComponent>;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [
        NgxChartsModule
      ],
      declarations: [ 
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
    fixture = TestBed.createComponent(PieChartCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
