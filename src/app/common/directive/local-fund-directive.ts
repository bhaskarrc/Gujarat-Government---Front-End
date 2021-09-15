import { MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from 'src/app/local-fund/workflow-details-lf/workflow-details-lf.component';
export class LocalFundDirective {

    constructor(private dialog: MatDialog) { }

    // local fund Workflow Popup
    workflowDetails() {
        const dialogRef = this.dialog.open(WorkflowDetailsLfComponent, {
            width: '1200px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
