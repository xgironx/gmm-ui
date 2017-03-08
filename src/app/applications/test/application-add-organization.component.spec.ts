import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { ApplicationAddOrganizationComponent } from '../application-add-organization/application-add-organization.component';

describe('ApplicationAddOrganizationComponent', () => {
  let component: ApplicationAddOrganizationComponent;
  let fixture: ComponentFixture<ApplicationAddOrganizationComponent>;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ApplicationAddOrganizationComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAddOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
