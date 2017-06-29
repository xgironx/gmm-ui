import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ModalComponent, DialogRef } from 'angular2-modal';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IState } from '../../shared/models/istate';
import { IApplicantType } from '../../shared/models/iapplicant-type';
import { IGrantee } from '../models/igrantee';
import { RefDataService } from '../../shared/ref-data.service';
import { ApplicationService } from '../application.service';

export declare class GranteeModalContext extends BSModalContext {
  public grantee: IGrantee;
  public title: string;
  public states: IState[];
  public applicantTypes: IApplicantType[];
}

@Component({
  selector: 'app-grantee-add-modal',
  templateUrl: './grantee-add-modal.component.html',
  styleUrls: ['./grantee-add-modal.component.css']
})
export class GranteeAddModalComponent implements OnDestroy, OnInit, AfterViewInit, ModalComponent<GranteeModalContext> {
  @Input() dialogRef: DialogRef<BSModalContext>;
  applicationForm: FormGroup;
  characters: Array<any>;
  stateDropDownList: any[] = [];
  applicantTypesDropDownList: any[] = [];
  context: GranteeModalContext;
  grantee: IGrantee;
  editGrantee: IGrantee = <IGrantee>{};
  title: string;
  selectedState: string = null;
  selectedApplicantType:string = null;

  constructor(
        private fb: FormBuilder,
        private _refDataService: RefDataService,
        private _applicationService: ApplicationService,
        private route: ActivatedRoute,
        private router: Router,
        public dialog: DialogRef<GranteeModalContext>
        ) {
          this.context = dialog.context;
    }

  ngAfterViewInit(){

  }

  ngOnInit() {
    this.applicationForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required]],
            street1: ['', [Validators.required]],
            street2: ['',],
            city: ['', [Validators.required]],
            state: ['', [Validators.required]],
            dunsId: ['', [Validators.required]],
            taxId: ['', [Validators.required]],
            financialReportDate: ['', [Validators.required]],
            applicantType: ['', [Validators.required]]
        });
        if(this.context.grantee != null){
          this.grantee = this.context.grantee;
          this.editGrantee = this.context.grantee;
        }

        for (var i = 0, len = this.context.states.length; i < len; i++) {
          let option = { value: this.context.states[i].id, label: this.context.states[i].name };
          this.stateDropDownList.push(option);
          if(this.grantee != null && this.selectedState == null && this.context.states[i].name == this.grantee.state){
            this.selectedState = this.context.states[i].id;
          }
        }
        for (var i = 0, len = this.context.applicantTypes.length; i < len; i++) {
          let option = { value: this.context.applicantTypes[i].id, label: this.context.applicantTypes[i].name };
          this.applicantTypesDropDownList.push(option);
          if(this.grantee != null && this.selectedApplicantType == null && this.context.applicantTypes[i].name == this.grantee.applicantType){
            this.selectedApplicantType = this.context.applicantTypes[i].id;
          }
        }
  }

  save(formValues) {
    let name: string = null;
    for (var i = 0, len = this.context.states.length; i < len; i++) {
      if(formValues.state == this.context.states[i].id){
        name = this.context.states[i].name;
      }
    }
    let applicantTypeName: string = null;
    for (var i = 0, len = this.context.applicantTypes.length; i < len; i++) {
      if(formValues.applicantType == this.context.applicantTypes[i].id){
        applicantTypeName = this.context.applicantTypes[i].name;
      }
    }
    let grantee:IGrantee = {
        id: undefined,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        street1: formValues.street1,
        street2: formValues.street2,
        city: formValues.city,
        state: name,
        dunsId: formValues.dunsId,
        taxId: formValues.taxId,
        financialReportDate: formValues.financialReportDate,
        applicantType: applicantTypeName
    };
    this.dialog.close(grantee);
    /*this._applicationService.saveGrantee(grantee).subscribe(
        grantee => {
                console.log('Saved:' + JSON.stringify(grantee));
                this.router.navigate(['/Application/addApplication', grantee.id]);
            },
        err => {
            console.error(err);
            this.router.navigate(['/Application/addApplication', 1]); //REMOVE THIS ONCE WE GET API HOOKED UP
            }
    );*/
    }

  close(){
      this.dialog.close(null);
  }

  ngOnDestroy() {
  }
}
