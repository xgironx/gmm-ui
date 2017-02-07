import { IApplication } from './iapplication';
export class Application implements IApplication {

    constructor(
        public applicationId: number = 0,
        public fiscalYear: number = 0,
        public grantType: string = "",
        public poc: string = "",
        public programId: number = 0,
        public status: string = "",
        public subGrantee: string = ""
        )
     {}
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