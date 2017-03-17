import {Pipe, ChangeDetectorRef, PipeTransform} from '@angular/core';
import * as moment from 'moment';

const momentConstructor: (value?: any) => moment.Moment = (<any>moment).default || moment;

@Pipe({
  name: 'dateDifference'
})
export class DateDifferencePipe implements PipeTransform {
  transform(value: Date | moment.Moment,
            otherValue: Date | moment.Moment,
            unit?: moment.unitOfTime.Diff,
            precision?: boolean): number {

    let date = momentConstructor(value);
    let date2 = (otherValue !== null) ? momentConstructor(otherValue) : momentConstructor();

    return date.diff(date2, unit, precision);
  }

}
