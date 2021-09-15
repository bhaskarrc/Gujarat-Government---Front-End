import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-history-details-dialog',
  templateUrl: './history-details-dialog.component.html',
  styleUrls: ['./history-details-dialog.component.css']
})
export class HistoryDetailsDialogComponent implements OnInit {

  todayDate = new Date();
  heading = 'Letter of Credit Module History Details';
  master_checked = false;
  master_indeterminate = false;
  headerJso: any[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Gross Total of Indent', value: 'Rs. 54000' },
    { label: 'Name of Office', value: 'Superintendent of Stamp Office' },
    { label: 'Duration of Indent', value: '4-May-2020 to 8-Nov-2020' },
    { label: 'Date of Indent', value: '3-Apr-2020' },
    { label: 'Indent Received From', value: 'District Treasury Office, Gandhinagar' },
    { label: 'Type of Indent', value: 'Regular Indent' },
  ];

  attachment = [
    // {fileName:'Attachment 1', fileType:'image', filePath:'', imgStatus: false},
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
  ];
  forwardDialog_history_list: any[] = [
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 1,
      userName: 'Shri P M Shah',
      designation: 'Deputy Secretary',
      role: 'Approver',
      date: '11/11/2019',
      comment: 'We may approve'
    },
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 2,
      userName: 'Shri C Patel',
      designation: 'Section Officer',
      role: 'Verifier',
      date: '10/11/2019',
      comment: 'We may approve'
    },
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 3,
      userName: 'Shri S M Modi',
      designation: 'Deputy Section Officer',
      role: 'Creator',
      date: '1/11/2019',
      comment:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<HistoryDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private el: ElementRef
  ) { }


  ngOnInit() {

    if (this.data === 'fromLCAccountOpeningRequest') {
      this.headerJso = [
        { label: 'Office Name', value: 'Director, Sardar Patel Zological Park, kevadia' },
        { label: 'Administrative Department', value: 'Forest And Environment Department' },
        { label: 'Head Of Department', value: 'Principal Chief conservator of Wild life' },
        { label: 'Treasury Office', value: 'District Treasury Office, Gandhinagar' },
        { label: 'District', value: 'Gandhinagar' },
        { label: 'Cardex No.', value: '141' },
        { label: 'DDO Code', value: '467' },
        { label: 'Division Name', value: 'Director, Sardar Patel Zological Park, kevadia' },
        { label: 'Circle Name', value: 'Dir. Parks & Garden, G. S. Gnr.' },
        { label: 'Circle Code', value: 'SE005' },
      ];
      this.heading = 'LC Account Opening Request';
    } else if (this.data === 'fromLCVerificationToEdit') {
      this.headerJso = [
        { label: 'LC Number', value: 'LC57SE001EE0010001' },
        { label: 'Division Code', value: 'AFR007' },
        { label: 'Division Name', value: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'LC Issue Date', value: '26-Sep-2020' },
        { label: 'Entry Type', value: 'Distribution' },
        { label: 'LC Valid From', value: '01-Mar-2020' },
        { label: 'LC Valid Upto', value: '31-Mar-2020' },
        { label: 'Circle Code', value: 'CFRST' },
        { label: 'Circle Name', value: 'PRINCIPAL CHEF CONSERVATOR FOREST, GUJARAAT STATE' },
        { label: 'Grant Order Number', value: 'test' },
        { label: 'Grant Order Date', value: '27-Jan-2020' },
        { label: 'Balance LC Amount', value: '41477360.00' },
        { label: 'New Balance LC Amount', value: '58977360.00' },
      ];
      this.heading = 'LC Distribution';
    } else if (this.data === 'fromLCSavedAdvice') {
      this.headerJso = [
        { label: 'Advice No.', value: 'ADV57AFR0070001' },
        { label: 'Advice Date', value: '17-Jun-2020' },
        { label: 'Division Code', value: 'AFR007' },
        { label: 'Division Name', value: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Treasury Office', value: 'District Treasury Office, Gandhinagar' },
        { label: 'Drawing Officer', value: 'Deputy Conservator,  Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'Deduction Total', value: '3,000.00' },
        { label: 'Net Total', value: '7,000.00' },
        { label: 'Opening + New LC Balance', value: '36,500,000.00' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'LC Balance', value: '36,490,000.00' },
      ];
      this.heading = 'LC Advice Preparation';
    } else if (this.data === 'fromLCSavedAdviceTO') {
      this.headerJso = [
        { label: 'Advice No.', value: 'ADV57AFR0070001' },
        { label: 'Advice Date', value: '17-Jun-2020' },
        { label: 'Division Code', value: 'AFR007' },
        { label: 'Division Name', value: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Treasury Office', value: 'District Treasury Office, Gandhinagar' },
        { label: 'Drawing Officer', value: 'Deputy Conservator,  Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'Deduction Total', value: '3,000.00' },
        { label: 'Net Total', value: '7,000.00' },
        { label: 'Opening + New LC Balance', value: '36,500,000.00' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'LC Balance', value: '36,490,000.00' },
      ];
      this.heading = 'LC Saved Advice';
    } else if (this.data === 'fromOnlineAdvice') {
      this.headerJso = [
        { label: 'Advice No.', value: 'ADV57AFR0070001' },
        { label: 'Advice Date', value: '17-Jun-2020' },
        { label: 'Division Code', value: 'AFR007' },
        { label: 'Division Name', value: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Treasury Office', value: 'District Treasury Office, Gandhinagar' },
        { label: 'Drawing Officer', value: 'Deputy Conservator,  Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'Deduction Total', value: '3,000.00' },
        { label: 'Net Total', value: '7,000.00' },
        { label: 'Opening + New LC Balance', value: '36,500,000.00' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'LC Balance', value: '36,490,000.00' },
      ];
      this.heading = 'Inward Online Advice';
    } else if (this.data === 'fromLCAdviceCardexVerification') {
      this.headerJso = [
        { label: 'Advice No.', value: 'ADV57AFR0070001' },
        { label: 'Advice Date', value: '17-Jun-2020' },
        { label: 'Division Code', value: 'AFR007' },
        { label: 'Division Name', value: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Treasury Office', value: 'District Treasury Office, Gandhinagar' },
        { label: 'Drawing Officer', value: 'Deputy Conservator,  Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'Deduction Total', value: '3,000.00' },
        { label: 'Net Total', value: '7,000.00' },
        { label: 'Opening + New LC Balance', value: '36,500,000.00' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'LC Balance', value: '36,490,000.00' },
      ];
      this.heading = 'Advice Cardex Verification';
    } else if (this.data === 'fromLCAdviceAuthorization') {
      this.headerJso = [
        { label: 'Advice No.', value: 'ADV57AFR0070001' },
        { label: 'Advice Date', value: '17-Jun-2020' },
        { label: 'Division Code', value: 'AFR007' },
        { label: 'Division Name', value: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Treasury Office', value: 'District Treasury Office, Gandhinagar' },
        { label: 'Drawing Officer', value: 'Deputy Conservator,  Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'Deduction Total', value: '3,000.00' },
        { label: 'Net Total', value: '7,000.00' },
        { label: 'Opening + New LC Balance', value: '36,500,000.00' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'LC Balance', value: '36,490,000.00' },
      ];
      this.heading = 'LC Advice Authorization';
    } else if (this.data === 'fromLCAdviceVerification') {
      this.headerJso = [
        { label: 'Advice No.', value: 'ADV57AFR0070001' },
        { label: 'Advice Date', value: '17-Jun-2020' },
        { label: 'Division Code', value: 'AFR007' },
        { label: 'Division Name', value: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Treasury Office', value: 'District Treasury Office, Gandhinagar' },
        { label: 'Drawing Officer', value: 'Deputy Conservator,  Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'Deduction Total', value: '3,000.00' },
        { label: 'Net Total', value: '7,000.00' },
        { label: 'Opening + New LC Balance', value: '36,500,000.00' },
        { label: 'Expenditure Total', value: '10,000.00' },
        { label: 'LC Balance', value: '36,490,000.00' },
      ];
      this.heading = 'LC Advice Verification';
    } else if (this.data === 'fromLcChequebookActivateInactivate') {
      this.headerJso = [
        { label: 'Division Code', value: 'AFR007' },
        { label: 'Division Name', value: 'Dy. Con. Of Forest Training Centre, Gandhinagar' },
        { label: 'Bank Name', value: 'State Bank Of India, Main Branch, Gandhinagar' },
        { label: 'Bank Account No', value: '12345678912340' },
        { label: 'Cheque Type', value: 'CTS 2010' },
        { label: 'Type Of Request', value: 'Activate' },
      ];
      this.heading = 'LC Cheque Book Activate / Inactivate';
    } else {
      this.headerJso = [
        { label: 'Financial Year', value: '2019-2020' },
        { label: 'Demand', value: '017: Treasury and Accounts Administrations' },
        { label: 'Fund', value: 'Consolidated' },
        { label: 'Major Head', value: '2054: Treasury and Accounts Administrations' },
        { label: 'Sub Major Head', value: '00' },
        { label: 'Minor Head', value: '097:Treasury Establishment' },
        { label: 'Sub Head', value: '01:Treasuries' },
        { label: 'Detailed Head', value: '00' },
        { label: 'Charged/Voted', value: 'Voted' },
        { label: 'Type of budget', value: 'State' },
        { label: 'Bill gross amount', value: '100000' },
        { label: 'Bill Deduction', value: '100' },
      ];
      this.heading = 'Letter of Credit Module History Details';

    }

  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

  master_change() {
    for (const value of Object.values(this.forwardDialog_history_list)) {
      value.checked = this.master_checked;
    }
  }

  list_change() {
    let checked_count = 0;
    // Get total checked items
    for (const value of Object.values(this.forwardDialog_history_list)) {
      if (value.checked) {
        checked_count++;
      }
    }

    if (
      checked_count > 0 &&
      checked_count < this.forwardDialog_history_list.length
    ) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    } else if (checked_count === this.forwardDialog_history_list.length) {
      // If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    } else {
      // If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }


}
