import { Http, Response, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable, Component } from '@angular/core';
import { GrantType } from './grants'
import { ApplicationForm } from '../models/application-form';
import { Organization } from '../models/organization';
import { Poc } from '../models/poc';
import { Grantee } from '../models/grantee';


const GRANTS: GrantType[] = [
  { "grantType": "terrorismProtectionGrant", "poc": "", "focus": "", "region": "", "status": "" },
  { "grantType": "disasterRecoveryGrant", "poc": "", "location": "", "status": "" },
  { "grantType": "floodRecoveryGrant", "poc": "", "county": "", "region": "", "status": "" }
]
var FORM: ApplicationForm = {
  grantType: "Grant Type",
  organizationName: "Org Name",
  address: "Address",
  state: "state",
  applicationType: "app type",
  congressionalDistrict: "congress district",
  projectTitle: "proj title",
  projectNumber: "proj number",
  projectYear: 2017,
  submissionDate: "date",
  grantValue: 123,
  notificationsFrequency: "frequency"
};
// var GRANTEE1: Grantee;
// GRANTEE1.address1 = "123 Main Grant Street";
// GRANTEE1.address1 = "123 Main Grant Street";
// GRANTEE1.address2 = "Suite 100";
// GRANTEE1.applicantType = "Simple Applicant Type";
// GRANTEE1.city = "Los Angeles";
// GRANTEE1.dunsID = "DUNS - 123 - A";
// GRANTEE1.finReportDate = "2016 - 12 - 31";
// GRANTEE1.firstName = "Miles";
// GRANTEE1.lastName = "Synkovic";
// GRANTEE1.state = "California";
// GRANTEE1.taxID = "TAXID - 098 - ABC";

// var GRANTEE2: Grantee;
// GRANTEE2.address1 = "101 North Avenue";
// GRANTEE2.address2 = "Floor 5000";
// GRANTEE2.applicantType = "Slim Applicant Type";
// GRANTEE2.city = "New York";
// GRANTEE2.dunsID = "DUNS - 999 - 01A";
// GRANTEE2.finReportDate = "2016 - 12 - 29";
// GRANTEE2.firstName = "Tommy";
// GRANTEE2.lastName = "Strollanlini";
// GRANTEE2.state = "New York";
// GRANTEE2.taxID = "TAXID - 999 - ZZZ";

// var SUBGRANTEE1: Grantee;
// SUBGRANTEE1.address1 = "123 Main Grant Street";
// SUBGRANTEE1.address1 = "123 Main Grant Street";
// SUBGRANTEE1.address2 = "Suite 100";
// SUBGRANTEE1.applicantType = "Simple Applicant Type";
// SUBGRANTEE1.city = "Los Angeles";
// SUBGRANTEE1.dunsID = "DUNS - 123 - A";
// SUBGRANTEE1.finReportDate = "2016 - 12 - 31";
// SUBGRANTEE1.firstName = "Miles";
// SUBGRANTEE1.lastName = "Synkovic";
// SUBGRANTEE1.state = "California";
// SUBGRANTEE1.taxID = "TAXID - 098 - ABC";

// var SUBGRANTEE2: Grantee;
// SUBGRANTEE2.address1 = "101 North Avenue";
// SUBGRANTEE2.address2 = "Floor 5000";
// SUBGRANTEE2.applicantType = "Slim Applicant Type";
// SUBGRANTEE2.city = "New York";
// SUBGRANTEE2.dunsID = "DUNS - 999 - 01A";
// SUBGRANTEE2.finReportDate = "2016 - 12 - 29";
// SUBGRANTEE2.firstName = "Tommy";
// SUBGRANTEE2.lastName = "Strollanlini";
// SUBGRANTEE2.state = "New York";
// SUBGRANTEE2.taxID = "TAXID - 999 - ZZZ";

// var POC: Poc;
// POC.address1= "1 Rainbow Curve";  
// POC.city= "Houston";
// POC.email= "jess@bighelp.com";
// POC.firstName= "Jess";
// POC.lastName= "Tyme";
// POC.middleInitial= "N";
// POC.organization= "Big Help";
// POC.phone= "604 - 392 - 5839";
// POC.state= "Texas";
// POC.title= "CEO";
// POC.zip= "59423";

// var ORGANIZATION: Organization;
// ORGANIZATION.address1= "4321 East Park Boulevard";
// ORGANIZATION.applicationType= "Bulk Applicant Type";
// ORGANIZATION.district= "Green Light District";
// ORGANIZATION.name= "Rescue Rangers";
// ORGANIZATION.organizationId= 1;
// ORGANIZATION.phoneNumber= "555 - 555 - 1234";
// ORGANIZATION.projectNumber= 1;
// ORGANIZATION.projectTitle= "Big Project";
// ORGANIZATION.projectYear= 2017;
// ORGANIZATION.state= "Maine";

// var MOCK_FORM: ApplicationForm;
// MOCK_FORM.context = "context-123-addform";
// MOCK_FORM.userRole = "userRole-1";
// MOCK_FORM.applicationNumber = "0";
// MOCK_FORM.applicant = "Lisa Simpson";
// MOCK_FORM.amount = "654321.12";
// MOCK_FORM.fiscalYear = "2017";
// MOCK_FORM.programId = "1";
// MOCK_FORM.status = "Submitted";
// MOCK_FORM.grantType = "FloodRecoveryGrant";
// MOCK_FORM.grantee1 = GRANTEE1;
// MOCK_FORM.grantee2 = GRANTEE2;
// MOCK_FORM.organization = ORGANIZATION;
// MOCK_FORM.poc = "Mama Mia";
// MOCK_FORM.pointOfContact = POC;
// MOCK_FORM.subGrantee = "Joe Subway";
// MOCK_FORM.subGrantee1 = SUBGRANTEE1;
// MOCK_FORM.subGrantee2 = SUBGRANTEE2;

@Injectable()
export class AppService {

  constructor(private http: Http){

  }
  get(grantType: string): GrantType {
    return this.clone(GRANTS.find(p => p.grantType === grantType));
  }

  private clone(object: any) {
    // hack
    //console.log(object)
    return JSON.parse(JSON.stringify(object));
  }

  public save() : Observable<ApplicationForm> {
    let postType = "dynamicUiForm-1";
    //let url:string = "http://submit-dev.apps.gmm.bahincubator.com:80/submit";
    let url:string = 'http://submit-dev.apps.gmm.bahincubator.com:80/testPostRequestBody';
    let value = 'hey';
    let body = 'omg pls';
    //body.set('value', 'fuck');
    let body1 = `value=${value}`;
    // let body = {
    //   "postType": postType,
    //   "postValue": FORM
    // };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    

    console.log('you mdae it to save ' + body);

    return this.http.post(url, body, options)
      .map((res: Response) => {
        console.log('res ' + res);
        return res.json();
      });
    //post(url: url, body:)
    //let originalGrant = GRANTS.find(p => p.grantType === grant.grantType);
    //if (originalGrant) Object.assign(originalGrant, grant);
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