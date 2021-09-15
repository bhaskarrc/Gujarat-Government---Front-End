import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { DeleteDialogBoxComponent } from '../../delete-dialog-box/delete-dialog-box.component';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { EaDirectives } from 'src/app/common/directive/ea-directive';
@Component({
  selector: 'app-sub-treasury-posted-challan',
  templateUrl: './sub-treasury-posted-challan.component.html',
  styleUrls: ['./sub-treasury-posted-challan.component.css']
})
export class SubTreasuryPostedChallanComponent implements OnInit {
  todayDate = Date.now();
  maxDate = new Date();
  initiatiomdate = new Date((new Date()));
  // FormGroup
  subTreasuryPostChallanForm: FormGroup;
  // FormControl
  majorHeadCtrl: FormControl = new FormControl();
  challanCtrl: FormControl = new FormControl();
  bankNameCtrl: FormControl = new FormControl();
  directiveObject = new EaDirectives(this.dialog);
  // List values
  majorHead_list: any[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  bank_list: any = [
    { value: '1', viewValue: 'State Bank Of India' },
    { value: '2', viewValue: 'Bank of Baroda' },
  ];

  challan_list: any = [
    { value: '1', viewValue: 'Sales Tax' },
    { value: '2', viewValue: 'RTO' },
  ];
  // Display Element Data
  Element_Data: any[] = [
    {
      branchCode: '140001',
      bank: 'State Bank of India',
      salesTextNo: '1234',
      bankDate: '09-Mar-2019',
      partyName: 'TEST',
      majorHead: '0059',
      amount: '100.00',
      revenue: 'Revenue',
      challanNo: '12122'
    }
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'branchCode', 'bank', 'challanNo', 'salesTextNo',
    'bankDate', 'partyName', 'majorHead', 'amount', 'revenue', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.subTreasuryPostChallanForm = this.fb.group({
      // FormGroup Fields
      branchCode: [''],
      challan: [''],
      bankDate: [''],
      partyName: [''],
      majorHead: [''],
      amount: [''],
      challanNo: [''],
      bank: ['']
    });

  }
  // function to clear form
  clearForm() {
    this.subTreasuryPostChallanForm.reset();
  }

  delete(item) {
    let isYes = false;
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
      width: '500px', data: isYes
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      isYes = result.data;
      if (isYes) {
        this.dataSource.data.splice(item, 1);
        this.dataSource = new MatTableDataSource(
          this.dataSource.data
        );
      }

    });
  }
}
