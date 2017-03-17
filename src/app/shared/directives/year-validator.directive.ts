import { Directive, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appYearValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: YearValidatorDirective, multi: true}]
})
export class YearValidatorDirective implements Validator, OnChanges {
  @Input() year: string;
  private valFn = Validators.nullValidator;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['appYearValidator'];
    if (change) {
      const val: string | RegExp = change.currentValue;
      const re = val instanceof RegExp ? val : new RegExp(val, 'i');
      this.valFn = forbiddenNameValidator(re);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }

}
