import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { IApplication, IGrantee, IOrganization, IPointOfContact, ISubGrantee } from './models/iapplication';
import { Application, Organization, PointOfContact, Grantee } from './models/application';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class ApplicationService {
    private _getApplicationsUrl = environment.serviceBase + "getApplications";
    private _getApplicationByApplicationNumberUrl = environment.serviceBase + "getApplicationByApplicationNumber";
    private _getApplicationsByUser = environment.serviceBase + "getApplicationsByUser";
    private _saveApplicationsUrl = environment.serviceBase + "saveApplication";

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

    getApplicationByApplicationNumber(applicationNumber: number): Observable<IApplication> {
        return this._http.get(this._getApplicationByApplicationNumberUrl + "?applicationNumber=" + applicationNumber.toString(), {headers: this.headers})
            .map((response: Response) => <IApplication>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getApplicationsByUser(user: string): Observable<IApplication[]> {
        return this._http.get(this._getApplicationsByUser + "?user=" + user, {headers: this.headers})
            .map((response: Response) => <IApplication[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveApplication(application: Application): Observable<IApplication> {        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers});
        console.log(this._saveApplicationsUrl);
        console.log(application);
        return this._http.post(this._saveApplicationsUrl, application, options)
            .map((response: Response) => {
                console.log(response);
                return response.json();
        });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}