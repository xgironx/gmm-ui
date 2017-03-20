import 'rxjs/add/operator/switchMap';
import { Component, TemplateRef, ViewChild, ViewContainerRef, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {Router, Params, ActivatedRoute, RoutesRecognized} from '@angular/router';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ModalComponent, DialogRef } from 'angular2-modal';
import { GranteeAddModalComponent } from '../grantee-add-modal/grantee-add-modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IState } from '../../shared/istate';
import { IGrantType } from '../../shared/igrant-type';
import { IApplicantType } from '../../shared/iapplicant-type';
import { ApplicationService } from '../application.service';
import { CustomValidators } from '../../core/custom.validators';
import { PocAddModalComponent } from '../poc-add-modal/poc-add-modal.component';
import { IPoc } from '../ipoc';
import { IApplication, IGrantee, IOrganization, IPointOfContact, ISubGrantee } from '../iapplication';
import { Application, Organization, PointOfContact, Grantee, SubGrantee } from '../application';
import { CurrencyPipePipe } from '../../shared/pipes/currency-pipe.pipe';
import 'rxjs/add/operator/pairwise';
import { Globals } from '../../globals';


@Component({
  selector: 'app-application-add-organization',
  templateUrl: './application-add-organization.component.html',
  styleUrls: ['./application-add-organization.component.css'],
  providers: [Modal]
})
export class ApplicationAddOrganizationComponent implements OnInit {
  public pageTitle: string = 'Add Application Organization';
  origApplication: IApplication;
  errorMessage: string;
  applicationState: ApplicationState;
  applicationNumber: number;
  applicationForm: FormGroup;
  states: IState[];
  stateDropDownList: any[] = [];
  applicantTypes: IApplicantType[];
  applicantTypesDropDownList: any[] = [];
  @ViewChild('customModalRef') customModalRef: TemplateRef<any>;
  @ViewChild('pocModalRef') pocModalRef: TemplateRef<any>;
  grantee: IGrantee = null;
  subGrantees: IGrantee[] = [];
  pocs: IPoc[] = [];
  dialog: DialogRef<BSModalContext>;
  grantTypes: IGrantType[];
  grantTypesDropDownList: any[] = [];
  enableEdit: boolean = false;
  previousRoute: string = "";

  constructor(
      private router:Router,
      vcRef: ViewContainerRef, 
      public modal: Modal, 
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private _applicationService: ApplicationService,
      private curpipe: CurrencyPipePipe) {
    modal.overlay.defaultViewContainer = vcRef;
    
  }
  
  ngOnInit() {
    this.router.events
      .filter(e => e instanceof RoutesRecognized)
      .pairwise()
      .subscribe((e: any[]) => {
        console.log(e);
        console.log(e[0].url);
        this.previousRoute = e[0].url; //this does not work, this means something else, need to find a solution
      });

    this.route.queryParams
      .subscribe(params => {
          this.applicationNumber = +params['id'] || -1;
    });

    this.applicationForm = this.fb.group({
        orgName: new FormControl('', Validators.required),
        address1: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        applicantType: new FormControl('', Validators.required),
        congressionalDistrict: new FormControl('', Validators.required),
        projectTitle: new FormControl('', Validators.required),
        projectNumber: new FormControl('', Validators.required),
        projectYear: new FormControl('', Validators.required/*, CustomValidators.yearValidator*/),//['', Validators.compose([Validators.required, CustomValidators.yearValidator])],
        grantType: new FormControl('', Validators.required),
        grantValue: new FormControl('', Validators.required)//['', Validators.compose([Validators.required, CustomValidators.currencyValidator])]
    });

    if (this.applicationNumber != -1) {
      this._applicationService.getApplicationByApplicationNumber(this.applicationNumber)
        .subscribe(
          (application: IApplication) => {
            this.origApplication = application;
            (<FormControl>this.applicationForm.controls['orgName']).patchValue(application.organization.name, { onlySelf: true });
            (<FormControl>this.applicationForm.controls['address1']).patchValue(application.organization.address1, { onlySelf: true });
            (<FormControl>this.applicationForm.controls['state']).patchValue(application.organization.state, { onlySelf: true });
            (<FormControl>this.applicationForm.controls['applicantType']).patchValue(application.organization.applicationType, { onlySelf: true });
            (<FormControl>this.applicationForm.controls['congressionalDistrict']).patchValue(application.organization.district, { onlySelf: true });
            (<FormControl>this.applicationForm.controls['projectTitle']).patchValue(application.organization.projectTitle, { onlySelf: true });
            (<FormControl>this.applicationForm.controls['projectNumber']).patchValue(application.organization.projectNumber, { onlySelf: true });
            (<FormControl>this.applicationForm.controls['projectYear']).patchValue(application.organization.projectYear, { onlySelf: true });
            (<FormControl>this.applicationForm.controls['grantType']).patchValue(application.grantType, { onlySelf: true });
            (<FormControl>this.applicationForm.controls['grantValue']).patchValue(application.amount, { onlySelf: true });
            //(<FormControl>this.applicationForm.controls['grantValue']).patchValue(this.curpipe.transform(application.amount.toString()), { onlySelf: true });
            
            if(application.pointOfContact != undefined && application.pointOfContact != null){
              this.pocs.push(application.pointOfContact);
            }
            if(application.grantee1 != undefined && application.grantee1 != null){
              this.grantee = application.grantee1;
            }
            if(application.subGrantee1 != undefined && application.subGrantee1 != null){
              this.subGrantees.push(application.subGrantee1);
            }
            if(application.subGrantee2 != undefined && application.subGrantee2 != null){
              this.subGrantees.push(application.subGrantee2);
            }

            if(application.status == "Draft")
              this.applicationState = ApplicationState.Draft;
            if(application.status == "Submitted")
              this.applicationState = ApplicationState.Submitted;
            this.setFormControlEnableByState();
          },
          error => this.errorMessage = <any>error
        );
    }
    else{
      this.origApplication = new Application();
      this.origApplication.applicant = Globals.defaultApplicantUser;
      this.applicationState = ApplicationState.New;
      this.setFormControlEnableByState();
    }
    
    this.states = this.route.snapshot.data['states'];
    for (var i = 0, len = this.states.length; i < len; i++) {
        this.stateDropDownList.push({ value: this.states[i].stateId, label: this.states[i].stateName + ":" +  this.states[i].urbanArea});
    }
    this.applicantTypes = this.route.snapshot.data['applicantTypes'];
    for (var i = 0, len = this.applicantTypes.length; i < len; i++) {
        this.applicantTypesDropDownList.push({ value: this.applicantTypes[i].applicantTypeId, label: this.applicantTypes[i].applicantTypeName });
    }
    this.grantTypes = this.route.snapshot.data['grantTypes'];
    for (var i = 0, len = this.grantTypes.length; i < len; i++) {
        this.grantTypesDropDownList.push({ value: this.grantTypes[i].grantTypeId, label: this.grantTypes[i].grantTypeName });
    }
  }

  private setFormControlEnableByState(){
    if(this.applicationState == ApplicationState.New || this.applicationState == ApplicationState.Draft){
      this.enableEdit = true;
    }
    else{
      this.applicationForm.disable();
      this.enableEdit = false;
    }
  }

  openGranteeModal(title: string) {
    var g = this.modal.open(GranteeAddModalComponent, overlayConfigFactory({ grantee: this.grantee, title: title, states: this.states, applicantTypes: this.applicantTypes }, BSModalContext))
      .then((result) => {
        return result;
      });
    g
      .then((resultPromise) => {
        resultPromise.result.then((result) => {
          if(result != null)
            this.grantee = result;
        });
      });
  }

  onRemoveGrantee() {
    this.grantee = null;
  }

  openSubGranteeModal(title: string){
    var g = this.modal.open(GranteeAddModalComponent, overlayConfigFactory({ grantee: null, title: title, states: this.states, applicantTypes: this.applicantTypes }, BSModalContext))
      .then((result) => {
        return result;
      });
    g
      .then((resultPromise) => {
        resultPromise.result.then((result) => {
          if(result != null)
            this.subGrantees.push(result);
        });
      });
  }

  editSubGranteeModal(i:number, title: string){
    var g = this.modal.open(GranteeAddModalComponent, overlayConfigFactory({ grantee: this.subGrantees[i], title: title, states: this.states, applicantTypes: this.applicantTypes }, BSModalContext))
      .then((result) => {
        return result;
      });
    g
      .then((resultPromise) => {
        resultPromise.result.then((result) => {
          if(result != null)
            this.subGrantees[i] = result;
        });
      });
  }

  onRemoveSubGrantee(i: number){
    this.subGrantees.splice(i, 1);
  }

  openPocModal(title: string){
    var g = this.modal.open(PocAddModalComponent, overlayConfigFactory({ poc: null, title: title, states: this.states }, BSModalContext))
      .then((result) => {
        return result;
      });
    g
      .then((resultPromise) => {
        resultPromise.result.then((result) => {
          if(result != null)
            this.pocs.push(result);
        });
      });
  }

  editPocModal(i:number, title: string){
    var g = this.modal.open(PocAddModalComponent, overlayConfigFactory({ poc: this.pocs[i], title: title, states: this.states }, BSModalContext))
      .then((result) => {
        return result;
      });
    g
      .then((resultPromise) => {
        resultPromise.result.then((result) => {
          if(result != null)
            this.pocs[i] = result;
        });
      });
  }

  onRemovePoc(i: number){
    this.pocs.splice(i, 1);
  }

  private destroyModal() {
    if (this.dialog) {
      this.dialog.overlay.defaultViewContainer.clear();
      this.dialog = null;
    }
  }

  getApplicationForm(): IApplication{
    let formData = this.applicationForm.getRawValue();
    let application: IApplication = this.origApplication;
    application.amount = formData.grantValue;
    application.grantType = formData.grantType;
    application.organization = new Organization();
    application.organization.name = formData.orgName;
    application.organization.address1 = formData.address1;
    application.organization.state = formData.state;
    application.organization.applicationType = formData.applicantType;
    application.organization.district = formData.congressionalDistrict;
    application.organization.projectTitle = formData.projectTitle;
    application.organization.projectNumber = formData.projectNumber;
    application.organization.projectYear = formData.projectYear;

    if(this.pocs.length > 0){
      application.pointOfContact = new PointOfContact();
      application.pointOfContact.title = this.pocs[0].title;
      application.pointOfContact.firstName = this.pocs[0].firstName;
      application.pointOfContact.middleInitial = this.pocs[0].middleInitial;
      application.pointOfContact.lastName = this.pocs[0].lastName;
      application.pointOfContact.organization = this.pocs[0].organization;
      application.pointOfContact.address1 = this.pocs[0].address1;
      application.pointOfContact.address2 = this.pocs[0].address2;
      application.pointOfContact.city = this.pocs[0].city;
      application.pointOfContact.state = this.pocs[0].state;
      application.pointOfContact.zip = this.pocs[0].zip;
      application.pointOfContact.phone = this.pocs[0].phone;
      application.pointOfContact.email = this.pocs[0].email;
    }
    if(this.grantee != null){
      application.grantee1 = new Grantee();
      application.grantee1.firstName = this.grantee.firstName;
      application.grantee1.lastName = this.grantee.lastName;
      application.grantee1.address1 = this.grantee.address1;
      application.grantee1.address2 = this.grantee.address2;
      application.grantee1.city = this.grantee.city;
      application.grantee1.state = this.grantee.state;
      application.grantee1.dunsID = this.grantee.dunsID;
      application.grantee1.taxID = this.grantee.taxID;
      application.grantee1.finReportDate = this.grantee.finReportDate;
      application.grantee1.applicantType = this.grantee.applicantType;
    }
    if(this.subGrantees.length > 0){
      application.subGrantee1 = new SubGrantee();
      application.subGrantee1.firstName = this.subGrantees[0].firstName;
      application.subGrantee1.lastName = this.subGrantees[0].lastName;
      application.subGrantee1.address1 = this.subGrantees[0].address1;
      application.subGrantee1.address2 = this.subGrantees[0].address2;
      application.subGrantee1.city = this.subGrantees[0].city;
      application.subGrantee1.state = this.subGrantees[0].state;
      application.subGrantee1.dunsID = this.subGrantees[0].dunsID;
      application.subGrantee1.taxID = this.subGrantees[0].taxID;
      application.subGrantee1.finReportDate = this.subGrantees[0].finReportDate;
      application.subGrantee1.applicantType = this.subGrantees[0].applicantType;
    }
    if(this.subGrantees.length > 1){
      application.subGrantee2 = new SubGrantee();
      application.subGrantee2.firstName = this.subGrantees[1].firstName;
      application.subGrantee2.firstName = this.subGrantees[1].firstName;
      application.subGrantee2.lastName = this.subGrantees[1].lastName;
      application.subGrantee2.address1 = this.subGrantees[1].address1;
      application.subGrantee2.address2 = this.subGrantees[1].address2;
      application.subGrantee2.city = this.subGrantees[1].city;
      application.subGrantee2.state = this.subGrantees[1].state;
      application.subGrantee2.dunsID = this.subGrantees[1].dunsID;
      application.subGrantee2.taxID = this.subGrantees[1].taxID;
      application.subGrantee2.finReportDate = this.subGrantees[1].finReportDate;
      application.subGrantee2.applicantType = this.subGrantees[1].applicantType;
    }


    return application;
  }

  saveApp(formValues) {
    let application: IApplication = this.getApplicationForm();

    this._applicationService.saveApplication(application)
      .subscribe(
        (applications) => {
          console.log(applications);
        },
        error => console.log(error),  
        () => {
          //this.goToPreviousPage();
          this.router.navigate(['/granteeHome']);
        }
      );
  }

  approveApp(){
    let application: IApplication = this.getApplicationForm();

    this._applicationService.saveApplication(application)
      .subscribe(
        (applications) => {
          console.log(applications);
        },
        error => console.log(error),  
        () => {
          //this.goToPreviousPage();
          this.router.navigate(['/granteeHome']);
        }
      );
  }

  isDraft() : boolean{
    return this.applicationState == ApplicationState.Draft;
  }

  isNew() : boolean{
    return this.applicationState == ApplicationState.New;
  }

  isSubmitted() : boolean{
    return this.applicationState == ApplicationState.Submitted;
  }

  goToPreviousPage() {
    console.log("previousRoute="+this.previousRoute);
    this.router.navigate([this.previousRoute]); // here "About" is path
  }

  save(){}

}

enum ApplicationState {
    New,
    Draft,
    Submitted,
    Approve,
    Blank
}