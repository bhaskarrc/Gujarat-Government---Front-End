
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';
@Component({
  selector: 'app-ex-re-distribution',
  templateUrl: './ex-re-distribution.component.html',
  styleUrls: ['./ex-re-distribution.component.css']
})
export class ExReDistributionComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  // FormGroup
  reDistributeVoucherForm: FormGroup;
  maxDate = new Date();
  initiatiomdate = new Date((new Date()));

  // FormControl
  distributeToCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  isSubmitted = false;
  errorMessages = eaMessage;
  // List values
  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Sub Treasury Office 1' },
    { value: '2', viewValue: 'Sub Treasury Office 2' }
  ];

  distribute_list: any[] = [
    { value: '1', viewValue: 'Pratik K Shah' },
    { value: '2', viewValue: 'Mr. YOGIRAJ KISHORSINGH JADEJA' }
  ];
  // Display Element Data
  Element_Data: any[] = [
    {

      majorHead: '8009',
      voucehrNo: '1',
      amount: '200.00',
      distribute: 'Pratik K Shah',
      distributeTo: ''

    },

  ];
  // Table Source

  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'voucehrNo', 'majorHead', 'amount', 'distribute', 'distributeTo'];
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.reDistributeVoucherForm = this.fb.group({
      // FormGroup Fields
      fromDate: [''],
      toDate: [''],
      // subTreasury: [''],
      treasuryCode: [''],
      distributeTo: ['1'],
    });

  }
  // function to clear form
  clearForm() {
    this.reDistributeVoucherForm.reset();
  }
  // function to delete row from table
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }

  onSave() {
    if (this.reDistributeVoucherForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
}
