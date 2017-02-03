import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IState } from './istate';
import { IApplicantType } from './iapplicant-type';
import { IGrantType } from './igrant-type';

@Injectable()
export class RefDataService {
    private _stateUrl = '/api/refData/state.json';
    private _applicantTypeUrl = '/api/refData/applicantType.json';
    private _grantTypeUrl = '/api/refData/grantType.json';

    constructor(private _http: Http) { }

    getStates(): Observable<IState[]> {
        return this._http.get(this._stateUrl)
            .map((response: Response) => <IState[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getApplicantTypes(): Observable<IApplicantType[]> {
        return this._http.get(this._applicantTypeUrl)
            .map((response: Response) => <IApplicantType[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getGrantTypes(): Observable<IGrantType[]> {
        return this._http.get(this._grantTypeUrl)
            .map((response: Response) => <IGrantType[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
