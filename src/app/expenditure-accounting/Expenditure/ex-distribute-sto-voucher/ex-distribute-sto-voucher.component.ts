import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';
@Component({
  selector: 'app-ex-distribute-sto-voucher',
  templateUrl: './ex-distribute-sto-voucher.component.html',
  styleUrls: ['./ex-distribute-sto-voucher.component.css']
})
export class ExDistributeStoVoucherComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);

  maxDate = new Date();
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  isSubmitted = false;
  errorMessages = eaMessage;

  // FormGroup
  distributeStoVoucherForm: FormGroup;
  // FormControl
  distributeToCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  // List values
  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Sub Treasury Office 1' },
    { value: '2', viewValue: 'Sub Treasury Office 2' }
  ];

  distribute_list: any[] = [
    { value: '1', viewValue: 'Mr. YOGIRAJ KISHORSINGH JADEJA' },
    { value: '2', viewValue: 'Mr. YOGIRAJ KISHORSINGH JADEJA' }
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      vDate: '10-May-2019',
      majorHead: '8009',
      challanNo: '1',
      amount: '9000.00',
      distributeTo: ''
    },
    {
      vDate: '10-May-2018',
      majorHead: '8011',
      challanNo: '1',
      amount: '2000.00',
      distributeTo: ''
    }
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['position', 'vDate', 'majorHead', 'challanNo', 'amount', 'distributeTo'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.distributeStoVoucherForm = this.fb.group({
      // FormGroup Fields
      fromDate: [''],
      toDate: [''],
      subTreasury: [''],
      treasuryCode: [''],
      distributeTo: ['1'],
    });
  }
  // function to clear form
  clearForm() {
    this.distributeStoVoucherForm.reset();
  }
  // function to delete row from table
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }


  onSave() {
    if (this.distributeStoVoucherForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }
}
