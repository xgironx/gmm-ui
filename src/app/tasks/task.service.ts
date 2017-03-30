import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { ITask } from './models/itask';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService {
    //private _getTasksUrl = "dist/api/tasks/tasks.json";
    private _getTasksUrl = environment.serviceBaseActiviti + "tasks";

    private headers:Headers;

    constructor(private _http: Http) { 
        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        this.headers.append('Access-Control-Allow-Methods', 'GET');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }

    getTasksByUser(user: string): Observable<ITask[]> {
        return this._http.get(this._getTasksUrl + "tasks?assignee=" + user, {headers: this.headers})
            .map((response: Response) => <ITask[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }    

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}