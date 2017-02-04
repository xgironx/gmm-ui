/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportsReceivedPieChartComponent } from '../charts/reports-received-pie-chart/reports-received-pie-chart.component';

describe('ReportsReceivedPieChartComponent', () => {
  let component: ReportsReceivedPieChartComponent;
  let fixture: ComponentFixture<ReportsReceivedPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsReceivedPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsReceivedPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
