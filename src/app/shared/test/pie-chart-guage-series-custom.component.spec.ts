/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieChartGuageSeriesCustomComponent } from '../charts/pie-chart-guage-series-custom/pie-chart-guage-series-custom.component';

describe('PieChartGuageSeriesCustomComponent', () => {
  let component: PieChartGuageSeriesCustomComponent;
  let fixture: ComponentFixture<PieChartGuageSeriesCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartGuageSeriesCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartGuageSeriesCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
