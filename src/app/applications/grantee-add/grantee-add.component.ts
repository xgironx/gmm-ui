import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IState } from '../../shared/istate';
import { IApplicantType } from '../../shared/iapplicant-type';
import { IGrantee } from '../igrantee';
import { RefDataService } from '../../shared/ref-data.service';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-grantee-add',
  templateUrl: './grantee-add.component.html'
})
export class GranteeAddComponent implements OnInit {
    public pageTitle: string = 'Grantee Information';
    applicationForm: FormGroup;
    characters: Array<any>;
    states: IState[];
    stateDropDownList: any[] = [];
    applicantTypes: IApplicantType[];
    applicantTypesDropDownList: any[] = [];

    constructor(
        private fb: FormBuilder, 
        private _refDataService: RefDataService, 
        private _applicationService: ApplicationService, 
        private route: ActivatedRoute,
        private router: Router
        ) {

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
        this.states = this.route.snapshot.data['states'];
        for (var i = 0, len = this.states.length; i < len; i++) {
            this.stateDropDownList.push({ value: this.states[i].abbreviation, label: this.states[i].name });
        }
        this.applicantTypes = this.route.snapshot.data['applicantTypes'];
        for (var i = 0, len = this.applicantTypes.length; i < len; i++) {
            this.applicantTypesDropDownList.push({ value: this.applicantTypes[i].id, label: this.applicantTypes[i].name });
        }
    }

    save(formValues) {
        let grantee:IGrantee = {
            id: undefined,
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            street1: formValues.street1,
            street2: formValues.street2,
            city: formValues.city,
            state: formValues.state,
            dunsId: formValues.dunsId,
            taxId: formValues.taxId,
            financialReportDate: formValues.financialReportDate,
            applicantType: formValues.applicantType
        };
 
        this._applicationService.saveGrantee(grantee).subscribe(
            grantee => {
                    console.log('Saved:' + JSON.stringify(grantee));
                    this.router.navigate(['/Application/addApplication', grantee.id]);
                },
            err => {
                console.error(err);
                this.router.navigate(['/Application/addApplication', 1]); //REMOVE THIS ONCE WE GET API HOOKED UP
                }
        );
    }
}
