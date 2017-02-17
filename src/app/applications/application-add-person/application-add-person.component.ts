import { Component, TemplateRef, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ModalComponent, DialogRef } from 'angular2-modal';
import { GranteeAddModalComponent } from '../grantee-add-modal/grantee-add-modal.component';
import { IGrantee } from '../igrantee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IState } from '../../shared/istate';
import { ActivatedRoute } from '@angular/router';
import { IGrantType } from '../../shared/igrant-type';
import { IApplicantType } from '../../shared/iapplicant-type';
import { ApplicationService } from '../application.service';
import { IApplication } from '../iapplication';
import { Application } from '../application';

@Component({
  selector: 'app-application-add-person',
  templateUrl: './application-add-person.component.html',
  styleUrls: ['./application-add-person.component.css'],
  providers: [Modal]
})
export class ApplicationAddPersonComponent implements OnInit {
  public pageTitle: string = 'Add Application Person';
  @ViewChild('customModalRef') customModalRef: TemplateRef<any>;
  grantee: IGrantee = null;
  subGrantees: IGrantee[] = [];
  applicationForm: FormGroup;
  states: IState[];
  stateDropDownList: any[] = [];
  grantTypes: IGrantType[];
  grantTypesDropDownList: any[] = [];
  applicantTypes: IApplicantType[];
  applicantTypesDropDownList: any[] = [];

  dialog: DialogRef<BSModalContext>;

  constructor(
      vcRef: ViewContainerRef, 
      public modal: Modal, 
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private _applicationService: ApplicationService) {
    modal.overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    this.applicationForm = this.fb.group({
        employee: ['', [Validators.required]],
        state: ['', [Validators.required]],
        congressionalDistrict: ['', [Validators.required]],
        projectTitle: ['', [Validators.required]],
        projectNumber: ['', [Validators.required]],
        projectYear: ['', [Validators.required]],
        grantType: ['', [Validators.required]],
        applicantType: ['', [Validators.required]]
    });
    this.states = this.route.snapshot.data['states'];
    for (var i = 0, len = this.states.length; i < len; i++) {
        this.stateDropDownList.push({ value: this.states[i].stateId, label: this.states[i].stateName + ":" +  this.states[i].urbanArea});
    }
    this.grantTypes = this.route.snapshot.data['grantTypes'];
    for (var i = 0, len = this.grantTypes.length; i < len; i++) {
        this.grantTypesDropDownList.push({ value: this.grantTypes[i].grantTypeId, label: this.grantTypes[i].grantTypeName });
    }
    this.applicantTypes = this.route.snapshot.data['applicantTypes'];
    for (var i = 0, len = this.applicantTypes.length; i < len; i++) {
        this.applicantTypesDropDownList.push({ value: this.applicantTypes[i].applicantTypeId, label: this.applicantTypes[i].applicantTypeName });
    }
  }

  saveApp(formValues) {
    var application = new Application();
    application.fiscalYear = formValues.projectYear;
    application.grantType = formValues.grantType;
    application.poc = formValues.poc;
    application.programId = 22;
    application.status = "Applied";
    application.subGrantee = "No";
    application.amount = undefined;
    application.poc = "testing";
    application.amount = 234;
    application.applicant = "testing";
  
  console.log(application);
    this._applicationService.saveApplication(application)
      .subscribe(
      (applications) => {
        console.log(applications);
      },
      error => console.log(error)
      );
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

  onRemoveGrantee() {
    this.grantee = null;
  }

  private destroyModal() {
    if (this.dialog) {
      this.dialog.overlay.defaultViewContainer.clear();
      this.dialog = null;
    }
  }
}
