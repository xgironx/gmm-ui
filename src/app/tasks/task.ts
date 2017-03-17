import { ITask } from './itask';
export class Task  implements ITask  {
    constructor(
        public id: string = '',
        public assignee: string = '',
        public description: string = '',
        public name: string = '',
        public owner: string = '',
        public processInstanceId: string = '',
        public applicationNumber: number = null,
        public dueDate: Date = null,
        public currentDate: Date = new Date()) { 

        }
}