
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { SaveDialogBoxComponent } from 'src/app/expenditure-accounting/save-dialog-box/save-dialog-box.component';
import { CloseDialogBoxComponent } from 'src/app/expenditure-accounting/close-dialog-box/close-dialog-box.component';
import { DeleteDialogBoxComponent } from 'src/app/expenditure-accounting/delete-dialog-box/delete-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';


@Component({
  selector: 'app-other-cheque-issue-list',
  templateUrl: './other-cheque-issue-list.component.html',
  styleUrls: ['./other-cheque-issue-list.component.css']
})
export class OtherChequeIssueListComponent implements OnInit {
  directiveObject = new EaDirectives(this._dialog);
  // FormControl
  subTreasuryValueCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  cheqeTypeCtrl: FormControl = new FormControl();
  // FormGroup
  otherChequeIssueListForm: FormGroup;
  maxDate = new Date();
  errorMessages = eaMessage;
  isSubmitted = false;
  // Display Element Data
  Element_Data: any[] = [
    {
      advNo: '140001',
      chkNo: '5478009',
      amount: '1100.00',
    },
    {
      advNo: '140002',
      chkNo: '5478008',
      amount: '1200.00',
    }
  ];
  // List values
  subTreasuryValue_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  chequeType_list: any[] = [
    { value: '1', viewValue: 'TC' },
    { value: '2', viewValue: 'LC' }
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['position', 'advNo', 'chkNo', 'amount', 'action'];
  constructor(private fb: FormBuilder, private _dialog: MatDialog) { }

  ngOnInit() {
    this.otherChequeIssueListForm = this.fb.group({
      // FormGroup Fields
      subTreasuryValue: ['2'],
      subTreasury: [''],
      adviceNo: [''],
      chequeNo: [''],
      entryDate: [''],
      chequeAmount: [''],
      chequeType: ['1'],
    });

  }
  // function to clear form
  clearForm() {
    this.otherChequeIssueListForm.reset();
  }
  // function to delete row from table
  deleteEntry(element) {
    let isYes = false;
    const dialogRef = this._dialog.open(DeleteDialogBoxComponent, {
      width: '500px', data: isYes
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      isYes = result.data;
      if (isYes) {
        this.dataSource.data.splice(element, 1);
        this.dataSource = new MatTableDataSource(
          this.dataSource.data
        );
      }

    });
  }
  onSubmit() {
    if (this.otherChequeIssueListForm.valid) {
      this.isSubmitted = false;
      const dialogRef = this._dialog.open(SaveDialogBoxComponent, {
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(data => {

      });
    } else {
      this.isSubmitted = true;
    }

  }
}


