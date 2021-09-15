import { MatDialog } from '@angular/material';
import { WorkflowDetailsDdoComponent } from 'src/app/ddo/gtr-forms/workflow-details-ddo/workflow-details-ddo.component';
export class DdoDirective {

    constructor(private dialog: MatDialog) { }

    // EA Workflow Popup
    workflowDetails() {
        const dialogRef = this.dialog.open(WorkflowDetailsDdoComponent, {
            width: '1200px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
