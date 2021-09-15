export class EventsSearchForm {
    dateCreatedTo: string;
    dateCreatedFrom: string;
    eventsName: string;
    employeeNo: number;
    employeeName: string;
    designation: string;
    gpfNo: string;
    ppanNo: string;
    caseNo: string;
    Class: string;
    retirementDate: string;
    officeName: string;
    EmpType: string;
    workflowStatus: string;
}
export class EventsList {
    transNo: number;
    eventName: string;
    empNo: number | '';
    empName: string | '';
    empDesignation: string | '';
    empType: string;
    officeName: string | '';
    status: string;
    pendingWith: string;
}

export class DialogData {
    // animal: string;
    // name: string;
}
