import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IApplication } from './iapplication';
import { IGrantee } from './igrantee';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class ApplicationService {
    private _getApplicationsUrl = environment.serviceBase + "getApplications";

    private headers:Headers;
        

    constructor(private _http: Http) { 
        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        this.headers.append('Access-Control-Allow-Methods', 'GET');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }

    getApplications(): Observable<IApplication[]> {
        return this._http.get(this._getApplicationsUrl, {headers: this.headers})
            .map((response: Response) => <IApplication[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveGrantee(grantee: IGrantee): Observable<IGrantee> {
        let headers = new Headers({ 'Content-Type': 'grantee/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('/api/grantees', JSON.stringify(grantee), options)
            .map((response: Response) => {
            return response.json();
        }).catch(this.handleError);
    }

    saveApplication(application: IApplication): Observable<IApplication> {
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