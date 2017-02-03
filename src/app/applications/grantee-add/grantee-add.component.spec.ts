/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GranteeAddComponent } from './grantee-add.component';

describe('GranteeAddComponent', () => {
  let component: GranteeAddComponent;
  let fixture: ComponentFixture<GranteeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GranteeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GranteeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
