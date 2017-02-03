import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IApplication } from './iapplication';
import { IGrantee } from './igrantee';


@Injectable()
export class ApplicationService {
    private _applicationUrl = 'api/applications/applications.json';

    constructor(private _http: Http) { }

    getApplications(): Observable<IApplication[]> {
        return this._http.get(this._applicationUrl)
            .map((response: Response) => <IApplication[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveGrantee(grantee): Observable<IGrantee> {
        let headers = new Headers({ 'Content-Type': 'grantee/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('/api/grantees', JSON.stringify(grantee), options)
            .map((response: Response) => {
            return response.json();
        }).catch(this.handleError);
    }

    saveApplication(application): Observable<IApplication> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('/api/applications', JSON.stringify(application), options)
            .map((response: Response) => {
            return response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}