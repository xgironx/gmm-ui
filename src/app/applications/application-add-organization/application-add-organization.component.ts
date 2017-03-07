import { Component, TemplateRef, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
import { CustomValidators } from '../../core/custom.validators';
import { PocAddModalComponent } from '../poc-add-modal/poc-add-modal.component';
import { IPoc } from '../ipoc';



@Component({
  selector: 'app-application-add-organization',
  templateUrl: './application-add-organization.component.html',
  styleUrls: ['./application-add-organization.component.css'],
  providers: [Modal]
})
export class ApplicationAddOrganizationComponent implements OnInit {
  public pageTitle: string = 'Add Application Organization';
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
        orgName: ['', [Validators.required]],
        address1: ['', [Validators.required]],
        state: ['', [Validators.required]],
        applicantType: ['', [Validators.required]],
        congressionalDistrict: ['', [Validators.required]],
        projectTitle: ['', [Validators.required]],
        projectNumber: ['', [Validators.required]],
        projectYear: ['', Validators.compose([Validators.required, CustomValidators.yearValidator])]   
    });
    this.states = this.route.snapshot.data['states'];
    for (var i = 0, len = this.states.length; i < len; i++) {
        this.stateDropDownList.push({ value: this.states[i].stateId, label: this.states[i].stateName + ":" +  this.states[i].urbanArea});
    }
    this.applicantTypes = this.route.snapshot.data['applicantTypes'];
    for (var i = 0, len = this.applicantTypes.length; i < len; i++) {
        this.applicantTypesDropDownList.push({ value: this.applicantTypes[i].applicantTypeId, label: this.applicantTypes[i].applicantTypeName });
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

  saveApp(formValues) {
  }

  save(){}

}
