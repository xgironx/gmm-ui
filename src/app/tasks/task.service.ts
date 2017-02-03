import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ITask } from './itask';


@Injectable()
export class TaskService {
    private _taskUrl = 'api/tasks/tasks.json';

    constructor(private _http: Http) { }

    getMyTasks(): Observable<ITask[]> {
        return this._http.get(this._taskUrl)
            .map((response: Response) => <ITask[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}