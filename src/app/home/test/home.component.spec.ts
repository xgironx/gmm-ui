/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { HomeComponent } from '../home/home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [ HomeComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  /*it(`should have a div with class 'right_col' as its only child HTMLElement`, () => {
    let nativeEls: HTMLCollection | undefined[];
    nativeEls = compiled ? compiled.children : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      expect(nativeEls[0].tagName === 'div' || nativeEls[0].tagName === 'DIV').toBeTruthy('Not a "div" element.');
      expect(nativeEls[0].classList.contains('right_col')).toBeTruthy('Not of class "right_col".');
    }
  });

  it('should have pageTitle be Applications', () => {
    expect(app.pageTitle).toBe('Applications');
  });*/
});
