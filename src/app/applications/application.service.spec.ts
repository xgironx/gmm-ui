/*import { ApplicationService } from './application.service';
import {} from 'jasmine';
import {
  TestBed,
  getTestBed,
  async,
  inject
} from '@angular/core/testing';
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { IApplication } from './iapplication';

describe('ApplicationService', () => {
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ApplicationService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
       }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));

  /*it('should ...', inject([ApplicationService], (service: ApplicationService) => {
    expect(service).toBeTruthy();
  }));*/

  /*it('should get applications', done => {
    let applicationService: ApplicationService;

    getTestBed().compileComponents().then(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    applicationId: 26,
                    contentRendered: '<p><b>Hi there</b></p>',
                    contentMarkdown: '*Hi there*'
                  }]
              }
            )));
        });

        applicationService = getTestBed().get(ApplicationService);
        expect(applicationService).toBeDefined();

        applicationService.getApplications().subscribe((applications: IApplication[]) => {
            expect(applications.length).toBeDefined();
            expect(applications.length).toEqual(1);
            expect(applications[0].applicationId).toEqual(26);
            done();
        });
    });
  });
});*/
