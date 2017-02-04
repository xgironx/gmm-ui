/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieGridCustomComponent } from '../charts/pie-grid-custom/pie-grid-custom.component';

describe('PieGridCustomComponent', () => {
  let component: PieGridCustomComponent;
  let fixture: ComponentFixture<PieGridCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieGridCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieGridCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
