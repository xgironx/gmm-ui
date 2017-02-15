import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ModalComponent, DialogRef } from 'angular2-modal';
 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IState } from '../../shared/istate';
import { IApplicantType } from '../../shared/iapplicant-type';
import { IGrantee } from '../igrantee';
import { RefDataService } from '../../shared/ref-data.service';
import { ApplicationService } from '../application.service';

export class GranteeModalContext extends BSModalContext {
  public grantee: IGrantee;
  public title: string;
  public states: IState[];
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
  applicantTypes: IApplicantType[];
  applicantTypesDropDownList: any[] = [];
  context: GranteeModalContext;
  grantee: IGrantee;
  editGrantee: IGrantee = <IGrantee>{};
  title: string;

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
            financialReportDate: ['', [Validators.required]]
            //applicantType: ['', [Validators.required]]
        });
        if(this.context.grantee != null){
          this.grantee = this.context.grantee;
          this.editGrantee = this.context.grantee;
        }
        
        for (var i = 0, len = this.context.states.length; i < len; i++) {
            this.stateDropDownList.push({ value: this.context.states[i].stateId, label: this.context.states[i].stateName + ":" +  this.context.states[i].urbanArea });
        }
        /*this.applicantTypes = this.route.snapshot.data['applicantTypes'];
        for (var i = 0, len = this.applicantTypes.length; i < len; i++) {
            this.applicantTypesDropDownList.push({ value: this.applicantTypes[i].id, label: this.applicantTypes[i].name });
        }*/
  }

  save(formValues) {
        let grantee:IGrantee = {
            id: undefined,
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            street1: formValues.street1,
            street2: formValues.street2,
            city: formValues.city,
            state: null,//formValues.state,
            dunsId: formValues.dunsId,
            taxId: formValues.taxId,
            financialReportDate: formValues.financialReportDate,
            applicantType: null//formValues.applicantType
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
      //this.dialogRef.close();
      console.log(this.dialog);
      this.dialog.close(null);
    }

  ngOnDestroy() {
    console.log('app-grantee-add-modal: ngOnDestroy');
  }
}
