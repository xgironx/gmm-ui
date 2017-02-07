/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieChartSeriesCustomComponent } from '../charts/pie-chart-series-custom/pie-chart-series-custom.component';

describe('PieChartSeriesCustomComponent', () => {
  let component: PieChartSeriesCustomComponent;
  let fixture: ComponentFixture<PieChartSeriesCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartSeriesCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartSeriesCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
