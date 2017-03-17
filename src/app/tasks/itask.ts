export interface ITask {
    id: string;
    assignee: string;
    description: string;
    name: string;
    owner: string;
    processInstanceId: string;
    applicationNumber: number;
    dueDate: Date;
    currentDate: Date;
}