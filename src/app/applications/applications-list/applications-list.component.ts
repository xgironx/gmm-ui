import { Component, OnInit } from '@angular/core';
import { IApplication } from '../iapplication';
import { ApplicationService } from '../application.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html'
})
export class ApplicationsListComponent implements OnInit {
  applications: ApplicationTableData[] = [];
  applicationsTemp: ApplicationTableData[] = [];
  appData: IApplication[] = null;
  errorMessage: string;

  columns = [
    { prop: 'applicationId' },
    { prop: 'grantType' },
    { prop: 'poc' },
    { prop: 'subGrantee' },
    { prop: 'status' }
  ];

  constructor(private _applicationService: ApplicationService) {}

  ngOnInit() {
    this._applicationService.getApplications()
      .subscribe(
      (applications) => {
        this.appData = applications;
        for (let a of this.appData) {
          this.applications.push(new ApplicationTableData(a.applicationId.toString(), a.grantType, a.poc, a.subGrantee, a.status));
          this.applicationsTemp.push(new ApplicationTableData(a.applicationId.toString(), a.grantType, a.poc, a.subGrantee, a.status));
        }
      },
      error => this.errorMessage = <any>error
      );
  }

  updateFilter(event) {
    let val = (<string>event.target.value).toLowerCase();
    let applicationsTemp = this.applicationsTemp.filter(function(d) {
      return (d.applicationId.toLowerCase().indexOf(val) !== -1 ||
             d.grantType.toLowerCase().indexOf(val) !== -1 ||
             d.poc.toLowerCase().indexOf(val) !== -1 ||
             d.status.toLowerCase().indexOf(val) !== -1 ||
             d.subGrantee.toLowerCase().indexOf(val) !== -1 
      )
    });
    this.applications = applicationsTemp;
  }

}

class ApplicationTableData {

    constructor(
        public applicationId: string = "",
        public grantType: string = "",
        public poc: string = "",
        public subGrantee: string = "",
        public status: string = "")
     {}
}
