/* tslint:disable:no-unused-variable */
import { Injectable  } from '@angular/core';
import { ComponentFixture, TestBed  } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import { ApplicationModule } from '../../applications/application/application.module';
import { ApplicationsListComponent } from '../../applications/applications-list/applications-list.component';
import { HomeComponent } from './home.component';
import { SidebarComponent } from '../../menu/sidebar/sidebar.component';
import { TopnavbarComponent } from '../../menu/topnavbar/topnavbar.component';

import { ApplicationService } from '../../applications/application.service';
import { IApplication } from '../../applications/iapplication';
import { Application } from '../../applications/application';

let fixture: ComponentFixture<HomeComponent>;
let component: HomeComponent;
let compiled: HTMLElement | null;
let applicationServiceStub: ApplicationService;

@Injectable()
class ApplicationServiceMock  extends ApplicationService {
  constructor() {
    super(null);
  }
  applications: Application[] = [{
          applicationId: 6548976,
          grantType: "Research",
          poc: "Joe Smith",
          subGrantee: "Yes",
          status: "Active"
        },
        {
          applicationId: 6558976,
          grantType: "Research",
          poc: "Frank Jones",
          subGrantee: "Yes",
          status: "Active"
        }];

    getApplications(): Observable<IApplication[]> {
      return Observable.of(this.applications);
    }
}



describe('Component: HomeComponent', () => {
  let app: HomeComponent;
  beforeEach(() => {
    app = new HomeComponent();
    var applicationServiceMock = new ApplicationServiceMock();
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ApplicationModule
      ],
      declarations: [
        HomeComponent,
        SidebarComponent,
        TopnavbarComponent
      ],
      providers:    [ {provide: ApplicationService, useClass:  ApplicationServiceMock/*useValue: applicationServiceMock*/ } ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    //fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;

  });

  it('should create the mock test component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a div with class 'right_col' as its only child HTMLElement`, () => {
    let nativeEls: HTMLCollection | undefined[];
    nativeEls = compiled ? compiled.children : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      expect(nativeEls[0].tagName === 'div' || nativeEls[0].tagName === 'DIV').toBeTruthy('Not a "div" element.');
      expect(nativeEls[0].classList.contains('right_col')).toBeTruthy('Not of class "right_col".');
    }
  });

  it('should set new message', () => {
    expect(app.pageTitle).toBe('Applications');
  });

  /*it(`should have heading h3 with text 'Applications'`, () => {
    let nativeEls: NodeListOf<HTMLHeadingElement> | undefined[];
    nativeEls = compiled ? compiled.querySelectorAll('h3') : [];
    expect(nativeEls.length).toBe(1, 'Incorrect number of elements found');
    if (nativeEls.length === 1) {
      let nativeEl = nativeEls[0];
      expect(nativeEl.textContent).toBe('Applications');
    }
  });*/

  it(`should contain an 'app-applications-list' component`, () => {
    expect(fixture.debugElement.query(By.css('app-applications-list'))).not.toBeNull('Missing.');
  });

});