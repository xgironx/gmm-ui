import { IApplication } from './iapplication';
export class Application implements IApplication {

    constructor(
        public applicationId: number = undefined,
        public fiscalYear: number = undefined,
        public grantType: string = "",
        public poc: string = "",
        public programId: number = undefined,
        public status: string = "",
        public subGrantee: string = "",
        public amount: number = undefined,
        public applicant: string = ""
        )
     {}

    public getPostJsonUrlString(): string {
        var response: string = "?";
        if (this.fiscalYear != undefined && this.fiscalYear.toString() != "")
            response += "&fiscalYear=" + this.fiscalYear.toString();
        if (this.grantType != undefined && this.grantType.toString() != "")
            response += "&grantType=" + this.grantType.toString();
        if (this.poc != undefined && this.poc.toString() != "")
            response += "&POC=" + this.poc.toString();
        if (this.programId != undefined && this.programId.toString() != "")
            response += "&programId=" + this.programId.toString();
        if (this.status != undefined && this.status.toString() != "")
            response += "&status=" + this.status.toString();
        if (this.subGrantee != undefined && this.subGrantee.toString() != "")
            response += "&subGrantee=" + this.subGrantee.toString();
        if (this.amount != undefined && this.amount.toString() != "")
            response += "&amount=" + this.amount.toString();
        if (this.applicant != undefined && this.applicant.toString() != "")
            response += "&applicant=" + this.applicant.toString();
        return response;
    }
}

export class ApplicationVM {

    constructor(
        public applicationId: string = "",
        public grantType: string = "",
        public poc: string = "",
        public subGrantee: string = "",
        public status: string = "")
     {}
}