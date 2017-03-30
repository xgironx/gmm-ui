import { IPoc } from './ipoc';
export class Poc  implements IPoc  {

    constructor(
        public id: string = '',
        public title: string = '',
        public firstName: string = '',
        public middleInitial: string = '',
        public lastName: string = '',
        public organization: string = '',
        public address1: string = '',
        public address2: string = '',
        public city: string = '',
        public state: string = '',
        public zip: string = '',
        public phone: string = '',
        public email: string = '') { 

        }
}