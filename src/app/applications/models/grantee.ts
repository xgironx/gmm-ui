import { IGrantee } from './igrantee';
export class Grantee  implements IGrantee  {

    constructor(
        public id: string = '',
        public firstName = '',
        public lastName: string = '',
        public street1: string = '',
        public street2: string = '',
        public city: string = '',
        public state: string = '',
        public dunsId: string = '',
        public taxId: string = '',
        public financialReportDate: Date = null,
        public applicantType: string = '') { }
}
        // public address1: string,
        // public address2: string,
        // public applicantType: string,
        // public city: string,
        // public dunsID: string,
        // public finReportDate: string,
        // public firstName: string,
        // public id: number,
        // public lastName: string,
        // public state: string,
        // public taxID: string


       