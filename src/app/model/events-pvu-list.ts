export class EventsPvuSearchForm {
    dateCreatedTo: string;
    dateCreatedFrom: string;
    eventsName: string;
    employeeNo: number;
    employeeName: string;
    designation: string;
    gpfNo: string;
    ppanNo: string;
    caseNo: string;
    class: string;
    retirementDate: string;
    officeName: string;
    empType: string;
    dateInwardFrom: string;
    dateInwardTo: string;
    workflowStatus: string;
}
export class EventsPvuList {
    checkbox: Boolean;
    transNo: number;
    inwardDate: string;
    eventName: string;
    empNo: number;
    empName: string;
    empDesignation: string;
    empType: string;
    officeName: string;
    status: string;
    pendingWith: string;
}

export class AuditorEventsList {
    // checkbox: Boolean;
    transNo: number;
    inwardDate: string;
    inwardNo: string;
    eventName: string;
    empNo: number;
    empName: string;
    empDesignation: string;
    empType: string;
    officeName: string;
    status: string;
    fwdDate: string;
}

export class EventsPvuApproverList {
    transNo: number;
    inwardDate: string;
    inwardNo: string;
    eventName: string;
    empNo: number;
    empName: string;
    empDesignation: string;
    empType: string;
    officeName: string;
    status: string;
    fwdDate: string;
}

export class DialogData {
}
