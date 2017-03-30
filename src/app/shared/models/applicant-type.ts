import { IApplicantType } from './iapplicant-type';
export class ApplicantType implements IApplicantType {
  constructor(public applicantTypeId: string, public applicantTypeName: string) { }
}