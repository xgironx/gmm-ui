import { IApplication, IGrantee, IOrganization, IPointOfContact, ISubGrantee } from './iapplication';
export class Application implements IApplication {
    public amount: number;
    public applicant: string;
    public applicationId: string;
    public applicationNumber: number;
    public fiscalYear: number;
    public grantType: string;
    public grantee1?: IGrantee = null;
    public grantee2?: IGrantee = null;
    public organization?: IOrganization = null;
    public poc: string;
    public pointOfContact?: IPointOfContact = null;
    public programId: number;
    public status: string;
    public subGrantee: string;
    public subGrantee1?: ISubGrantee = null;
    public subGrantee2?: ISubGrantee = null;

    constructor(){
        this.amount = 0;
        this.programId = 0;
    } 
}

export class Grantee implements IGrantee {
    public address1: string;
    public address2: string;
    public applicantType: string;
    public city: string;
    public dunsID: string;
    public finReportDate: string;
    public firstName: string;
    public id: string;
    public lastName: string;
    public state: string;
    public taxID: string;
    
    constructor(){} 
}

export class SubGrantee implements ISubGrantee {
    public address1: string;
    public address2: string;
    public applicantType: string;
    public city: string;
    public dunsID: string;
    public finReportDate: string;
    public firstName: string;
    public id: string;
    public lastName: string;
    public state: string;
    public taxID: string;

    constructor(){} 
}

export class Organization implements IOrganization {
    public address1: string;
    public applicationType: string;
    public district: string;
    public name: string;
    public organizationId: string;
    public phoneNumber: string;
    public projectNumber: number;
    public projectTitle: string;
    public projectYear: number;
    public state: string;

    constructor(){} 
}

export class PointOfContact implements IPointOfContact {
    public address1: string;
    public address2: string;
    public city: string;
    public email: string;
    public firstName: string;
    public id: string;
    public lastName: string;
    public middleInitial: string;
    public organization: string;
    public phone: string;
    public state: string;
    public title: string;
    public zip: string;

    constructor(){} 
}