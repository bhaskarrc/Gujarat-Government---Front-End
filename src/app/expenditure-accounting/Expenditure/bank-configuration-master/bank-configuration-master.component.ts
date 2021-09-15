
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { DeleteDialogBoxComponent } from '../../delete-dialog-box/delete-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';


@Component({
  selector: 'app-save-dialog-box-bank-configuration-master',
  templateUrl: 'save-dialog-box-bank-configuration-master.component.html'
})
export class SaveDialogBoxBankConfigurationMasterComponent implements OnInit {
  isYes = false;

  constructor(
    public dialogRef: MatDialogRef<SaveDialogBoxBankConfigurationMasterComponent>) { }

  ngOnInit(): void {

  }

  onNo($event?) {
    this.dialogRef.close();
  }
  onYes() {
    this.isYes = !this.isYes;
  }

  onClose() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-bank-configuration-master',
  templateUrl: './bank-configuration-master.component.html',
  styleUrls: ['./bank-configuration-master.component.css']
})
export class BankConfigurationMasterComponent implements OnInit {
  directiveObject = new EaDirectives(this._dialog);

  maxDate = new Date();
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  isDelete = false;
  isSubmitted = false;
  showDetail = false;
  errorMessages = eaMessage;
  // FormGroup
  bankConfigurationMasterForm: FormGroup;
  // FormControl
  bankNameCtrl: FormControl = new FormControl();
  languageCtrl: FormControl = new FormControl();

  // List values
  bankName_list: any[] = [
    { value: '1', viewValue: 'Bank Of Baroda' },
    { value: '2', viewValue: 'Bank Of India' },
    { value: '3', viewValue: 'Canara Bank' },
    { value: '4', viewValue: 'Central Bank Of India' },
    { value: '5', viewValue: 'Dena Bank' },
    { value: '6', viewValue: 'Indian Bank' },
    { value: '7 ', viewValue: 'State Bank Of India' },
  ];
  language_list: any[] = [
    { value: '1', viewValue: 'English' },
    { value: '2', viewValue: 'Gujarati' },
    { value: '3', viewValue: 'Hindi' },
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      bankName: '',
      bankCode: '',
      branchName: '',
      branchCode: '',
      branchAddress: '',
      ePaymentFlag: '',
      ifscCode: '',
    }
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['ifscCode', 'bankName', 'bankCode', 'branchName', 'branchCode', 'branchAddress', 'ePaymentFlag', 'action'];
  constructor(private fb: FormBuilder, private _dialog: MatDialog) { }

  ngOnInit() {
    this.bankConfigurationMasterForm = this.fb.group({
      // FormGroup Fields
      bankName: [''],
      bankCode: [''],
      language: [''],
      branchName: [''],
      branchCode: [''],
      branchAddress: [''],
      ePaymentFlag: [''],
      ifscCode: [''],
    });
  }
  // function to clear form
  clearForm() {
    this.bankConfigurationMasterForm.reset();
  }
  // function to delete row from table
  deleteEntry(element) {

    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  // function to add row into table
  add() {
    const p_data = this.dataSource.data;
    this.isDelete = true;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amountExp: '0.00'
    });
    this.dataSource.data = p_data;
  }

  // function to delete row from table
  delete(index) {

    let isYes = false;
    const dialogRef = this._dialog.open(DeleteDialogBoxComponent, {
      width: '500px', data: isYes
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      isYes = result.data;
      if (isYes) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource(
          this.dataSource.data
        );
      }
    });
  }


  onSave() {
    if (this.bankConfigurationMasterForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

  // open save dialog pop up
  openSaveDialog(): void {
    this.showDetail = true;
    const dialogRef = this._dialog.open(SaveDialogBoxBankConfigurationMasterComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(data => {
      // const p_data = this.dataSource.data;
      // this.isDelete = true;
      // this.bankConfigurationMasterForm.patchValue({
      //   bankName: '1'
      // });
      // this.dataSource.data.splice(0, 1, {
      //   bankName: this.bankName_list[0].value,
      //   bankCode: '1000',
      //   branchName: 'Vidhansabha',
      //   branchCode: '17103',
      //   branchAddress: 'BOB Gh-4, Gandhinagar',
      //   ePaymentFlag: '',
      //   ifscCode: this.Element_Data[0].ifscCode
      // });
      // this.dataSource.data = this.dataSource.data;
    });
  }


  enterDetails(element, index) {
    console.log(element);
    if (element.ifscCode) {
      this.bankConfigurationMasterForm.patchValue({
        bankName: '1'
      });
    }

    this.dataSource.data.splice(index, 1, {
      bankName: '1',
      bankCode: '1000',
      branchName: 'Vidhansabha',
      branchCode: '17103',
      branchAddress: 'BOB Gh-4, Gandhinagar',
      ePaymentFlag: '',
      ifscCode: element.ifscCode
    });
    this.dataSource.data = this.dataSource.data;
  }
}
