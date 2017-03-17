import { FormControl, AbstractControl, ValidatorFn  } from '@angular/forms';


export class CustomValidators {
    static forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const name = control.value;
        const no = nameRe.test(name);
        return no ? {'forbiddenName': {name}} : null;
    };
    }

    static emailValidator(control: FormControl) {
        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return { 'invalidEmailAddress': true };
        }
    }

    static yearValidator(control: FormControl): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            let pattern:RegExp = /(?:(?:19|20)[0-9]{2})/;
            const year = control.value;
            return pattern.test(control.value) ? null : {'invalidYear': {year}};
        };
        /*console.log(control);
        if(typeof window[control.value.match] == 'function') return;
        if(typeof window[control.value.match] == 'function') return;
        if (control && control.value && !control.value.match(/^\d+\.\d{2}$/)) {
            return { 'invalidYear': true };
        }*/
        /*if (control && control.value && !control.value.match(/(?:(?:19|20)[0-9]{2})/)) {
            return { 'invalidYear': true };
        }*/
    }

    static currencyValidator(control: FormControl) {
        //let pattern:RegExp = /^\d+\.\d{2}$/;
        //return pattern.test(control.value) ? null : { 'invalidCurrency': true };
        //if(typeof window[control.value.match] != 'function') return;
        if (control && control.value && !control.value.match(/^\d+\.\d{2}$/)) {
            return { 'invalidCurrency': true };
        }
    }

    static emailFormat(control: AbstractControl) {
        let pattern:RegExp = /\S+@\S+\.\S+/;
        return pattern.test(control.value) ? null : {"emailFormat": true};
    }
}