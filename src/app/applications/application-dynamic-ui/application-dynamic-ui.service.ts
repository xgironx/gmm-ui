import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { GrantType } from './grants'


const GRANTS: GrantType[] = [
  {"grantType":"terrorismProtectionGrant","poc":"","focus":"","region":"","status":""},
  {"grantType":"disasterRecoveryGrant","poc":"","location":"","status":""},
  {"grantType":"floodRecoveryGrant","poc":"","county":"","region":"","status":""}
]

@Injectable()
export class AppService{

  get(grantType: string) : GrantType {
    return this.clone(GRANTS.find(p => p.grantType === grantType));
 }

 private clone(object: any){
    // hack
    //console.log(object)
    return JSON.parse(JSON.stringify(object));
  }

  save(grant: GrantType){
    let originalGrant = GRANTS.find(p => p.grantType === grant.grantType);
    if (originalGrant) Object.assign(originalGrant, grant);
    // saved muahahaha
  }
 //  private baseUrl: string = 'http://dynamic-ui-dev.apps.gmm.bahincubator.com:80/'
 //
 //  constructor(private http : Http){
 //  }
 //
 //  getGrantTypes(): Observable<Person>{
 //    let grants$ = this.http
 //        .get('${this.baseUrl}/newApplicationForm', {headers: this.getHeaders()})
 //        .map(mapPersons)
 //        return grants$
 //  }
 //
 //  private getHeaders(){
 //    let headers = new Headers();
 //      headers.append('Accept', 'application/json');
 //      return headers;
 // }

}
