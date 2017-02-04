/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { TopnavbarComponent } from './core/topnavbar/topnavbar.component';
import { MockBackendService } from './mock-backend/mock-backend.service';
import { By } from '@angular/platform-browser';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;
let compiled: HTMLElement | null;

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SidebarComponent,
        TopnavbarComponent
      ],
      providers: [MockBackendService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  /*it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should contain an 'app-sidebar' component`, () => {
    expect(fixture.debugElement.query(By.css('app-sidebar'))).not.toBeNull('Missing.');
  });*/
});
