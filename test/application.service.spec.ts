import { Injectable  } from '@angular/core';
import { } from 'jasmine';
import {
  TestBed,
  getTestBed,
  async,
  inject
} from '@angular/core/testing';
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod, ResponseOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { ApplicationService } from '../application.service';
import { Application } from '../application';
import { IApplication } from '../iapplication';
import { MOCK_APPLICATION_DATA } from '../../mock-backend/mock-application-data';

@Injectable()
class ApplicationServiceMock  extends ApplicationService {
  constructor() {
    super(null);
  }
  applications: Application[] = MOCK_APPLICATION_DATA;

  getApplications(): Observable<IApplication[]> {
    return Observable.of(this.applications);
  }
}

describe('Application Service Tests', () => {
    let applicationService = new ApplicationService(null);
});

/*describe('ApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApplicationService
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should construct', async(inject([ApplicationService], (service) => {
    expect(service).toBeDefined();
  })));
});

describe('ApplicationService (Mocked)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApplicationService,

        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should construct', async(inject(
    [ApplicationService, MockBackend], (service, mockBackend) => {

      expect(service).toBeDefined();
    })));
});

describe('ApplicationService Methods', () => {
  const mockApplication1: Application = {
    applicationId: 6548976,
    grantType: "Research",
    poc: "Joe Smith",
    subGrantee: "Yes",
    status: "Active"
  };
  const mockApplication2: Application = {
    applicationId: 6558976,
    grantType: "Research",
    poc: "Frank Jones",
    subGrantee: "Yes",
    status: "Submitted"
  };
  const mockResponse: Application[] = [mockApplication1, mockApplication2];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ApplicationService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ],
      imports: [
        HttpModule
      ]
    });
  }));

  it('should return an Observable<Array<IApplication>>',
    inject([ApplicationService, MockBackend], (applicationService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      applicationService.getApplications().subscribe((applications) => {
        expect(applications.length).toBe(2);
        expect(applications[0].applicationId).toEqual(6548976);
        expect(applications[1].applicationId).toEqual(6558976);
      });
    }));
});*/