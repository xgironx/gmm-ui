export class ApplicationForm {

    constructor(
        public grantType: string,
        public organizationName: string,
        public address: string,
        public state: string,
        public applicationType: string,
        public congressionalDistrict: string,
        public projectTitle: string,
        public projectNumber: string,
        public projectYear: number,
        public submissionDate: string,
        public grantValue: number,
        public notificationsFrequency: string
    ) { }
}
