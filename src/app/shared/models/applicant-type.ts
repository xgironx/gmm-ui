import { IApplicantType } from './iapplicant-type';
export class ApplicantType implements IApplicantType {
  constructor(public id: string, public name: string) { }
}
