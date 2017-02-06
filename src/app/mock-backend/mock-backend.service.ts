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
import { MOCK_TASK_DATA } from './mock-task-data';

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
            const APPLICATION_URL = "http://localhost:8080/applications";
            const TASKS_URL = "http://localhost:8080/tasks";
            this.isStarted = true;

            console.log(c.request.url);
            if (c.request.url === APPLICATION_URL && c.request.method === RequestMethod.Get) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(MOCK_APPLICATION_DATA)
                })));
            }

            if (c.request.url === TASKS_URL && c.request.method === RequestMethod.Get) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(MOCK_TASK_DATA)
                })));
            }
        });
    }

}