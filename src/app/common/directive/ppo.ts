import { WorkflowDetailsPpoComponent } from 'src/app/ppo/workflow-details-ppo/workflow-details-ppo.component';
import { MatDialog } from '@angular/material';

export class PpoDirectives {
    constructor(private dialog: MatDialog) { }

    // opens workflow dialog
    workflowDetails() {
        const dialogRef = this.dialog.open(WorkflowDetailsPpoComponent, {
            width: '1200px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
