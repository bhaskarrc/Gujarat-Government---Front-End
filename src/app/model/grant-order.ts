export class PeriodicElement {
    position: number;
    divisionName: string;
    budgetStateScheme: number;
    budgetStateShare: number;
    budgetCssShare: number;
    revisedStateScheme: number;
    revisedStateShare: number;
    revisedCssShare: number;
    grantRelease: number;
    grantReleaseWithAutho: number;
    addAuthorizeState: number;
    addAuthorizeCss: number;
    availableGrant: string | number;
    grantReleaseInProgress: string | number;
    grantToBeReleaseProgress: string | number;
    remainingGrant: string | number;
    tooltip?: string | '';
}

export class GrantReleaseOrder {
    departmentName: string;
    // name: string;
    // budget: string;
    budgetEstimate: string;
    tilldate: string ;
    grantReleaseDraft: string ;
    total: string;
}
export class FdTpAdministrativeDepartment {
    grantOrderId : String;
    orderNo : String;
    grantRelease : String;
    orderCreateDate : String;
    status : String;
    lyingWith : String;
}

// export class VIewComments {
//     disabled: Boolean;
//     checked: Boolean;
//     labelPosition: string;
//     id: number;
//     userName: string;
//     designation: string;
//     role: string;
//     date: string;
//     comment: string;
// }

// export class DialogData {
// }
