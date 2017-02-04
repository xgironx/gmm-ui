import { Injectable } from '@angular/core';
import { } from 'jasmine';
import {
    TestBed,
    getTestBed,
    async,
    fakeAsync,
    inject
} from '@angular/core/testing';
import {
    Headers, BaseRequestOptions,
    Response, HttpModule, Http, XHRBackend, RequestMethod, ResponseOptions
} from '@angular/http';
import { MockBackend, MockConnection } from "@angular/http/testing";
import { MOCK_APPLICATION_DATA } from './mock-application-data';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class MockBackendService {
    public isStarted: boolean;
    constructor(private backend: MockBackend) { 
        this.isStarted = false;
    }

    start(): void {
        this.backend.connections.subscribe((c: MockConnection) => {
            const URL = "http://localhost:8080/applications";
            this.isStarted = true;

            if (c.request.url === URL && c.request.method === RequestMethod.Get) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(MOCK_APPLICATION_DATA)
                })));
            }
        });
    }

}