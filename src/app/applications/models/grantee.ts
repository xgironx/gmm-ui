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