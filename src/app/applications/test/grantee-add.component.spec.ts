/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GranteeAddComponent } from '../grantee-add/grantee-add.component';

describe('GranteeAddComponent', () => {
  let component: GranteeAddComponent;
  let fixture: ComponentFixture<GranteeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GranteeAddComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
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