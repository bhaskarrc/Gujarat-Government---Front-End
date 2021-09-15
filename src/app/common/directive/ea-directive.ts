import { MatDialog } from '@angular/material';
import { CloseDialogBoxComponent } from 'src/app/expenditure-accounting/close-dialog-box/close-dialog-box.component';
import { WorkflowDetailsEaComponent } from 'src/app/expenditure-accounting/workflow-details-ea/workflow-details-ea.component';
export class EaDirectives {

    constructor(private dialog: MatDialog) { }

    // Close  Dialog Box
    onClose() {
      const dialogRef = this.dialog.open(CloseDialogBoxComponent, {
        width: '500px',
      }
      );
      dialogRef.afterClosed().subscribe(result => {
        console.log('From Common');
       });
    }

    // EA Workflow Popup
    workflowDetails() {
      const dialogRef = this.dialog.open(WorkflowDetailsEaComponent, {
        width: '1200px'
      });
    }

}
