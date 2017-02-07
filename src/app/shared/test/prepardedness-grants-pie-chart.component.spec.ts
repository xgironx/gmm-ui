/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrepardednessGrantsPieChartComponent } from '../charts/prepardedness-grants-pie-chart/prepardedness-grants-pie-chart.component';

describe('PrepardednessGrantsPieChartComponent', () => {
  let component: PrepardednessGrantsPieChartComponent;
  let fixture: ComponentFixture<PrepardednessGrantsPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepardednessGrantsPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepardednessGrantsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
