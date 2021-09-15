import { MatDialog } from '@angular/material';
import { SubmitConfirmCommonDialigComponent } from 'src/app/stamp-processing/submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { Router } from '@angular/router';
import { CloseConfirmCommonDialogComponent } from 'src/app/stamp-processing/close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SaveConfirmCommonDialogComponent } from 'src/app/stamp-processing/save-confirm-common-dialog/save-confirm-common-dialog.component';
import { StampDetailsCommonPopupComponent } from 'src/app/stamp-processing/stamp-details-common-popup/stamp-details-common-popup.component';
import { SubmitPromptDialogComponent } from 'src/app/stamp-processing/submit-prompt-dialog/submit-prompt-dialog.component';
import { IndentConsolidationWorkflowComponent } from 'src/app/stamp-processing/indent-consolidation/indent-consolidation-workflow/indent-consolidation-workflow.component';
import { HistoryPrepChallanPopupComponent } from 'src/app/stamp-processing/preparation-of-challan-to/history-prep-challan-popup/history-prep-challan-popup.component';
import { HistoryPrepChallanTotsheetPopupComponent } from 'src/app/stamp-processing/preparation-of-challan-to/history-prep-challan-totsheet-popup/history-prep-challan-totsheet-popup.component';
import { HistoryDoubleSinglePopupComponent } from 'src/app/stamp-processing/double-single-lock-toffice/history-double-single-popup/history-double-single-popup.component';
import { HistorySingleDoublePopupComponent } from 'src/app/stamp-processing/single-double-lock-toffice/history-single-double-popup/history-single-double-popup.component';
import { HistoryDetailsCommonDialogComponent } from 'src/app/stamp-processing/history-details-common-dialog/history-details-common-dialog.component';

export class StampProcessingDirectives {

  constructor(private router: Router, private dialog: MatDialog) { }

  // details of stamp popup
  stampDetails() {
    const dialogRef = this.dialog.open(StampDetailsCommonPopupComponent, {
      width: '1200px', height: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        console.log('From Common');
      }
    });
  }

  // For Two Digit Number
  numberTwoDigitOnly(event: any) {
    const pattern = /^(100|[1-9]?[0-9])$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }

  }
  // Method to Open Workflow Details
  sumbit(data?: any): void {

    if (data) {
      const dialogRef = this.dialog.open(SubmitConfirmCommonDialigComponent, {
        width: '1200px', data: data
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Have Data');
      });
    } else {
      const dialogRef = this.dialog.open(SubmitConfirmCommonDialigComponent, {
        width: '1200px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('From Common');
      });
    }

  }
  // Method to Open Workflow Details for Consolidated Indent
  sumbitConsolidateIndent(): void {
    const dialogRef = this.dialog.open(IndentConsolidationWorkflowComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('From Common');
    });
  }
  // Do You Want To submit?
  submitNoWorkflow(): void {
    const dialogRef = this.dialog.open(SubmitPromptDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('From Common');
    });
  }
  // History Details Dialog
  showHistoryDialog(data?: any): void {
    if (data) {
      const dialogRef = this.dialog.open(HistoryDetailsCommonDialogComponent, {
        width: '1200px', data: data
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Have Data');
      });
    } else {
      const dialogRef = this.dialog.open(HistoryDetailsCommonDialogComponent, {
        width: '1200px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('From Common');
      });
    }
  }

  // History Popup for preparation of challan for No. of Stamps column
  openHistoryPrepChallan(): void {

    const dialogRef = this.dialog.open(HistoryPrepChallanPopupComponent, {
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

  // History Popup for preparation of challan for Total sheet column
  openHistoryPrepChallanTotSheet(): void {

    const dialogRef = this.dialog.open(HistoryPrepChallanTotsheetPopupComponent, {
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

  // History Popup for Double single lock
  openHistoryDoubleSingle(): void {

    const dialogRef = this.dialog.open(HistoryDoubleSinglePopupComponent, {
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }


  // History Popup for single double lock
  openHistorySingleDouble(): void {

    const dialogRef = this.dialog.open(HistorySingleDoublePopupComponent, {
      maxWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

  // Save Button Popup
  saveConfirmationPopup() {
    const dialogRef = this.dialog.open(SaveConfirmCommonDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        console.log('From Common');
      }
    });
  }

  // Close Popup
  closeConfirmationPopup() {
    const dialogRef = this.dialog.open(CloseConfirmCommonDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.router.navigate(['']);
        console.log('From Common');
      }
    });
  }
}
