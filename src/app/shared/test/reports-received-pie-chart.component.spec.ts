/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ReportsReceivedPieChartComponent } from '../charts/reports-received-pie-chart/reports-received-pie-chart.component';
import { PieGridCustomComponent } from '../charts/pie-grid-custom/pie-grid-custom.component';

describe('ReportsReceivedPieChartComponent', () => {
  let component: ReportsReceivedPieChartComponent;
  let fixture: ComponentFixture<ReportsReceivedPieChartComponent>;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [
        NgxChartsModule
      ],
      declarations: [ 
        ReportsReceivedPieChartComponent,
        PieGridCustomComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsReceivedPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
