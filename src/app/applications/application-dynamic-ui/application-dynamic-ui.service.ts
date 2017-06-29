import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable, Component } from '@angular/core';
import { GrantType } from './grants';
import { ApplicationForm } from '../models/application-form';
import { serviceRoutes } from '../../../environments/environment';


const GRANTS: GrantType[] = [
  { "grantType": "terrorismProtectionGrant", "poc": "", "focus": "", "region": "", "status": "" },
  { "grantType": "disasterRecoveryGrant", "poc": "", "location": "", "status": "" },
  { "grantType": "floodRecoveryGrant", "poc": "", "county": "", "region": "", "status": "" }
]

@Injectable()
export class AppService {
  private _headers: Headers;

  constructor(private _http: Http) {
    this._headers = new Headers();
    this._headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this._headers.append('Access-Control-Allow-Methods', 'POST');
    this._headers.append('Access-Control-Allow-Origin', '*');
  }

  getGrants() {
    return this._http.get(serviceRoutes.activiti.grants.getGrantTypes)
      .map((res: Response) => res.json());
  }

  getData() {
    return this._http.get(serviceRoutes.activiti.grants.getApplicationForm)
      .map(
      (res: Response) => res.json()
      );
  }

  getApplications(){
    return this._http.get('http://data-dev.apps.gmm.bahincubator.com:80/getApplications', this._headers)
      .map((res: Response) => {
        return res;
      });
  }
  get(grantType: string): GrantType {
    return this.clone(GRANTS.find(p => p.grantType === grantType));
  }

  private clone(object: any) {
    // hack
    //console.log(object)
    return JSON.parse(JSON.stringify(object));
  }

  submitApplication(application: JSON): Observable<ApplicationForm> {
    let url: string = "http://submit-dev.apps.gmm.bahincubator.com:80/submit";
    let postType = "dynamicUiForm-1";
    let options = new RequestOptions({ headers: this._headers });
    let body = {
      "postInstanceId": "string",
      "postTypeId": "string",
      "postValues": JSON.stringify(application)
    };

    return this._http.post(url, body, options)
      .map((response: Response) => {
        console.log('response is ' + response);
        return response.json();
      });
  }
  //  getGrantTypes(): Observable<Person>{
  //    let grants$ = this.http
  //        .get('${this.baseUrl}/newApplicationForm', {headers: this.getHeaders()})
  //        .map(mapPersons)
  //        return grants$
  //  }
}
