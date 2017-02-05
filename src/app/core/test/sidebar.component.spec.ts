/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { ApplicationsListComponent } from '../../applications/applications-list/applications-list.component';
import { AppModule } from '../../app.module';
import { ApplicationService } from '../../applications/application.service';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [ SidebarComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SidebarComponent', () => {
    expect(component).toBeTruthy();
  });
});
