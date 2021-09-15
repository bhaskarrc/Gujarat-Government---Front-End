import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CloseDialogBoxComponent } from 'src/app/expenditure-accounting/close-dialog-box/close-dialog-box.component';
import { DeleteDialogBoxComponent } from 'src/app/expenditure-accounting/delete-dialog-box/delete-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';

@Component({
  selector: 'app-bank-configuration-master-list',
  templateUrl: './bank-configuration-master-list.component.html',
  styleUrls: ['./bank-configuration-master-list.component.css']
})
export class BankConfigurationMasterListComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();
  isSubmitted = false;
  // FormGroup
  bankConfigurationListForm: FormGroup;
  // FormControl
  bankNameCtrl: FormControl = new FormControl();
  directiveObject = new EaDirectives(this.dialog);
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
  // Display Element Data
  Element_Data: any[] = [
    {
      bName: 'Bank Of Baroda',
      bankCode: '1000',
      branchName: 'Vidhansabha',
      branchCode: '17103',
      branchAddress: 'BOB Gh-4, Gandhinagar',
      ePaymentFlag: 'Yes',
      ifscCode: '100000554',
    }
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'bName', 'bankCode', 'branchName', 'branchCode', 'branchAddress',
    'ePaymentFlag', 'ifscCode', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.bankConfigurationListForm = this.fb.group({
      // FormGroup Fields
      bankName: [''],
      bCode: [''],
      brnchName: [''],
      branchCode: [''],
      address: [''],
      flag: [''],
      code: [''],

    });

  }

  // function to clear form
  clearForm() {
    this.bankConfigurationListForm.reset();
  }
  // function to delete row from table
  deleteEntry(element) {

    let isYes = false;
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
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
}
