/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RefDataService } from '../../shared/ref-data.service';
import { ApplicationService } from '../application.service';
import { ActivatedRoute, Router  } from '@angular/router';

import { ApplicationAddComponent } from '../application-add/application-add.component';

describe('ApplicationAddComponent', () => {
  let component: ApplicationAddComponent;
  let fixture: ComponentFixture<ApplicationAddComponent>;

  beforeEach(async(() => {
    component = new ApplicationAddComponent(null, null, null, null, null);
    TestBed.configureTestingModule({
      declarations: [ ApplicationAddComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        FormBuilder,
        RefDataService,
        ApplicationService,
        ActivatedRoute,
        Router
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
