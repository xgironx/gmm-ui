/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RefDataService } from '../../shared/ref-data.service';
import { ApplicationService } from '../application.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ApplicationAddComponent } from '../application-add/application-add.component';

describe('ApplicationAddComponent', () => {
  let component: ApplicationAddComponent;
  let fixture: ComponentFixture<ApplicationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [ ApplicationAddComponent ],
      providers: [ FormBuilder, RefDataService, ApplicationService ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
