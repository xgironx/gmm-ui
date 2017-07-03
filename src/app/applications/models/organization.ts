export class Organization{
    constructor(
        public address1: string,
        public applicationType: string,
        public district: string,
        public name: string,
        public organizationId: number,
        public phoneNumber: string,
        public projectNumber: number,
        public projectTitle: string,
        public projectYear: number,
        public state: string,
    ){}
}