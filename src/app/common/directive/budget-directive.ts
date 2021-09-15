import { MatDialog } from '@angular/material';
import { SubmitConfirmCommonDialogComponent } from 'src/app/budget/annexure-a/annexure-a.component';
import { StandingChargeForwardDialogComponent, StandingChargeViewCommentsComponent } from 'src/app/budget/standing-charge/standalone-charge/standalone-charge.component';
import { CommentDetailsBudgetComponent } from 'src/app/budget/comment-details-budget/comment-details-budget.component';
export class BudgetDirectives {

    constructor(private dialog: MatDialog) { }

    // Common submit popup. Do You Want to Submit?
    submit() {
      const dialogRef = this.dialog.open(SubmitConfirmCommonDialogComponent, {
        width: '400px'
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('From Common');
        if (result === 'yes') {
        }
      });
    }

    // Common Workflow popup
    workflow(): void {
        const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent, {
        width: '2700px',
        height: '600px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('From Common');
        });
    }

    // Common Standing Charge View Comments Popup
    viewComments(): void {

      const dialogRef = this.dialog.open(StandingChargeViewCommentsComponent, {
        width: '2700px',
        height: '600px'
        // data: employees
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('From Common');
        if (result === 'no') {
          console.log('The dialog was closed', result);
        } else if (result === 'yes') {
          console.log('The dialog was closed', result);
        }
      });
    }

    // View Comments Button
    commentDetails(): void {
        const dialogRef = this.dialog.open(CommentDetailsBudgetComponent, {
          width: '1200px',
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('From Common');
        });
      }

}
