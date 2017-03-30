import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ModalComponent, DialogRef } from 'angular2-modal';
 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IState } from '../../shared/models/istate';
import { IPoc } from '../models/ipoc';
import { RefDataService } from '../../shared/ref-data.service';
import { ApplicationService } from '../application.service';

export declare class PocModalContext extends BSModalContext {
  public poc: IPoc;
  public title: string;
  public states: IState[];
}

@Component({
  selector: 'app-poc-add-modal',
  templateUrl: './poc-add-modal.component.html',
  styleUrls: ['./poc-add-modal.component.css']
})
export class PocAddModalComponent implements OnDestroy, OnInit, AfterViewInit, ModalComponent<PocModalContext> {
  @Input() dialogRef: DialogRef<BSModalContext>;
  context: PocModalContext;
  applicationForm: FormGroup;
  poc: IPoc;
  editPoc: IPoc = <IPoc>{};
  stateDropDownList: any[] = [];
  selectedState: string = null;

  constructor(
        private fb: FormBuilder, 
        private _refDataService: RefDataService, 
        private _applicationService: ApplicationService, 
        private route: ActivatedRoute,
        private router: Router,
        public dialog: DialogRef<PocModalContext>
        ) {
          this.context = dialog.context;
  }

  ngOnInit() {
    this.applicationForm = this.fb.group({
        title: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        middleInitial: ['', []],
        lastName: ['', [Validators.required]],
        organization: ['', [Validators.required]],
        address1: ['', [Validators.required]],
        address2: ['', []],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required]]
    });
    if(this.context.poc != null){
      this.poc = this.context.poc;
      this.editPoc = this.context.poc;
    }

    for (var i = 0, len = this.context.states.length; i < len; i++) {
      let option = { value: this.context.states[i].stateId, label: this.context.states[i].stateName };
      this.stateDropDownList.push(option);
      if(this.poc != null && this.selectedState == null && this.context.states[i].stateName == this.poc.state){
        this.selectedState = this.context.states[i].stateId;
      }
    }
  }

  ngAfterViewInit(){
    
  }

  save(formValues) {
    let stateName: string = null;
    for (var i = 0, len = this.context.states.length; i < len; i++) {
      if(formValues.state == this.context.states[i].stateId){
        stateName = this.context.states[i].stateName;
      }
    }
    let poc:IPoc = {
      id: undefined,
      title: formValues.title,
      firstName: formValues.firstName,
      middleInitial: formValues.middleInitial,
      lastName: formValues.lastName,
      organization: formValues.organization,
      address1: formValues.address1,
      address2: formValues.address2,
      city: formValues.city,
      state: stateName,
      zip: formValues.zip,
      phone: formValues.phone,
      email: formValues.email
    };
    this.dialog.close(poc);
  }

  close(){
      this.dialog.close(null);
  }

  ngOnDestroy() {
  }

}
