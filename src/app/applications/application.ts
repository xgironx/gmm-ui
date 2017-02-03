import { IApplication } from './iapplication';
export class Application implements IApplication {

    constructor(
        public applicationId: number = 0,
        public grantType: string = "",
        public poc: string = "",
        public subGrantee: string = "",
        public status: string = "")
     {}
}
