import { FormControl } from '@angular/forms';

export class CustomValidators {

    static emailValidator(control: FormControl) {
        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return { 'invalidEmailAddress': true };
        }
    }

    static yearValidator(control: FormControl) {
        if (!control.value.match(/(?:(?:19|20)[0-9]{2})/)) {
            return { 'invalidYear': true };
        }
    }
}