import { Component, OnInit } from '@angular/core';
import { IApplication } from '../iapplication';
import { ApplicationService } from '../application.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IGrantType } from '../../shared/igrant-type';
import { IApplicantType } from '../../shared/iapplicant-type';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html'
})
export class ApplicationsListComponent implements OnInit {
  applications: ApplicationTableData[];
  applicationsTemp: ApplicationTableData[];
  appData: IApplication[] = null;
  errorMessage: string;
  selected: any[] = [];
  grantTypes: IGrantType[];
  applicantTypes: IApplicantType[];

  columns = [
    { prop: 'applicationNumber', name: "App Number", width: 200 },
    { prop: 'grantType', name: "Grant Type", width: 200 },
    { prop: 'poc', name: "POC", width: 200 },
    { prop: 'applicationType', name: "Application Type", width: 200 },
    { prop: 'status', name: "Status", width: 200 },
    { prop: 'date', name: "Date", width: 200 }
  ];

  constructor(private _applicationService: ApplicationService,private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.applicantTypes = this.route.snapshot.data['applicantTypes'];
    this.grantTypes = this.route.snapshot.data['grantTypes'];
    console.log(this.grantTypes);
    this._applicationService.getApplications()
      .subscribe(
      (applications) => {
        this.appData = applications;
        let aData: ApplicationTableData[] = [];
        for (let a of this.appData) {
          let poc: string = "";
          let gt: string = "";
          let at: string = "";
          let date: string = "";
          let status: string = a.status==null? "":a.status;
          if(a.pointOfContact != null){
            poc = a.pointOfContact.lastName + ", " + a.pointOfContact.firstName;
          }
          if(a.grantType && a.grantType.length > 0){
            if(this.grantTypes)
              gt = this.grantTypes.find(x => x.grantTypeId == a.grantType).grantTypeName;
            else
              gt = a.grantType==null? "":a.grantType;
          }
          if(a.organization && a.organization.applicationType && a.organization.applicationType.length > 0){
            if(this.grantTypes)
              at = this.applicantTypes.find(x => x.applicantTypeId == a.organization.applicationType).applicantTypeName;
            else
              at = a.organization.applicationType==null? "":a.organization.applicationType;
          }
          aData.push(new ApplicationTableData(a.applicationNumber.toString(), gt, poc, at, status, date));
        }
        this.applications = aData;
        this.applicationsTemp = aData;
      },
      error => this.errorMessage = <any>error
      );
  }

  onAddApplicationOrganization(){
    this.router.navigate(['/Application/addApplicationOrganization']);
  }

  updateFilter(event) {
    let val = (<string>event.target.value).toLowerCase();
    let applicationsTemp = this.applicationsTemp.filter(function(d) {
      return (d.applicationNumber.toLowerCase().indexOf(val) !== -1 ||
             d.grantType.toLowerCase().indexOf(val) !== -1 ||
             d.poc.toLowerCase().indexOf(val) !== -1 ||
             d.applicationType.toLowerCase().indexOf(val) !== -1 ||
             d.status.toLowerCase().indexOf(val) !== -1 ||
             d.date.toLowerCase().indexOf(val) !== -1 
      )
    });
    this.applications = applicationsTemp;
  }

  onSelect(event) {
    console.log('Event: select', event, this.selected);
  }

  onActivate(event) {
    console.log('Event: activate', event);
    if(event.column.prop == "applicationNumber"){
      this.router.navigate(['/Application/addApplicationOrganization'], { queryParams: { id: event.row.applicationNumber } });
    }
  }

}

class ApplicationTableData {

    constructor(
        public applicationNumber: string = "",
        public grantType: string = "",
        public poc: string = "",
        public applicationType: string = "",
        public status: string = "",
        public date: string = "")
     {}
}

