// opens workflow dialog box

import { MatDialog } from '@angular/material';
// tslint:disable-next-line: max-line-length
import { WorkflowDepartmentComponent } from 'src/app/receipt-management/department-registration/workflow-department/workflow-department.component';


export class ReceiptManagementDirective {
    constructor(private dialog: MatDialog) { }
    workflowDetails(): void {
        const dialogRef = this.dialog.open(WorkflowDepartmentComponent, {
            width: '1200px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
