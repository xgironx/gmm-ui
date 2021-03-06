/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopnavbarComponent } from '../topnavbar/topnavbar.component';

describe('TopnavbarComponent', () => {
  let component: TopnavbarComponent;
  let fixture: ComponentFixture<TopnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TopnavbarComponent', () => {
    expect(component).toBeTruthy();
  });
});
