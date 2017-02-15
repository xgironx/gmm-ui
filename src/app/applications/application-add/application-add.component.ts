import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IGrantType } from '../../shared/igrant-type';
import { RefDataService } from '../../shared/ref-data.service';
import { ActivatedRoute, Router, Params  } from '@angular/router';
import { ApplicationService } from '../application.service';
import { IApplication } from '../iapplication';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html'
})
export class ApplicationAddComponent implements OnInit {
    public pageTitle: string = 'Application Information';
    applicationForm: FormGroup;
    grantTypes: IGrantType[];
    grantTypesDropDownList: any[] = [];
    granteeId: number;

    constructor(
        private fb: FormBuilder, 
        private _refDataService: RefDataService, 
        private _applicationService: ApplicationService, 
        private route: ActivatedRoute,
        private router: Router
        ) 
    {

    }

    ngOnInit() {
        this.granteeId = +this.route.snapshot.params['id'];
        this.applicationForm = this.fb.group({
            firstNamePoc: ['', [Validators.required, Validators.minLength(3)]],
            lastNamePoc: ['', [Validators.required]],
            grantType: ['', [Validators.required]],
            subGrantee:  ['', []]
        });
        this.grantTypes = this.route.snapshot.data['grantTypes'];
        for (var i = 0, len = this.grantTypes.length; i < len; i++) {
            this.grantTypesDropDownList.push({ value: this.grantTypes[i].grantTypeId, label: this.grantTypes[i].grantTypeName });
        }
    }

    save(formValues) {
        /*let application:IApplication = {
            applicationId: undefined,
            grantType: formValues.grantType,
            poc: formValues.firstNamePoc + ' ' + formValues.lastNamePoc,
            status: undefined,
            subGrantee: undefined
        };

        this._applicationService.saveApplication(application).subscribe(
            application => {
                    console.log('Saved:' + JSON.stringify(application));
                    if(this.applicationForm.controls["subGrantee"].value == true){
                        this.router.navigate(['/Application/addSubGrantee', application.applicationId]);
                    }
                    else{
                        this.router.navigate(['/home']);
                    }
                    
                },
            err => {
                    console.error(err);
                    if(this.applicationForm.controls["subGrantee"].value == true){ //REMOVE THIS ONCE WE GET API HOOKED UP
                        this.router.navigate(['/Application/addSubGrantee', 1]);
                    }
                    else{
                        this.router.navigate(['/home']);
                    }
                }
        ); */ 
    }
}
