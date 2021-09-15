import { MatDialog } from '@angular/material';
import { WorkflowDetailsCiComponent } from 'src/app/cheque-inventory/workflow-details-ci/workflow-details-ci.component';

export class ChequeInventoryDirective {
    constructor(private dialog: MatDialog) { }

    /**
     * opens workflow dialog box
     * @param component component name passed as method arguement from html
     */
    workflowDetails(component: string) {
        const dialogRef = this.dialog.open(WorkflowDetailsCiComponent, {
            width: '1200px',
            data: component
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
