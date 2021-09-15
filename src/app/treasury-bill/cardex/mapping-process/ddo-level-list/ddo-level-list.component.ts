import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SelectionModel } from '@angular/cdk/collections';
import { DDOLEVELLIST, ListValue } from 'src/app/model/treasury-bill';

const ELEMENT_DATA: DDOLEVELLIST[] = [
  {
    ddoNo: '552',
    cardexNo: '4',
    ddoName: '	Collector Office, Gandhinagar',
    ddoApproverName: 'Mr.Shah',
    lywith: 'Shri Pratik Shah',
    status: 'Pending for verification', fromDate: '12-Jan-2019',
    toDate: '02-Mar-2020',
    type: 'Primary'
  },
  {
    ddoNo: '553',
    cardexNo: '4',
    ddoName: '	Collector Office, Gandhinagar',
    ddoApproverName: 'Mr.Patel',
    lywith: 'Shri Pratik K Shah',
    status: 'Approved',
    fromDate: '12-Jan-2019',
    toDate: '02-Mar-2020',
    type: 'Primary'
  }
];


@Component({
  selector: 'app-ddo-level-list',
  templateUrl: './ddo-level-list.component.html',
  styleUrls: ['./ddo-level-list.component.css']
})
export class DdoLevelListComponent implements OnInit {
  // Date
  todayDate = new Date();
  // Form Group
  ddoverificationForm: FormGroup;
  // Form COntrol
  ddonameCtrl: FormControl = new FormControl();
  statusctrl: FormControl = new FormControl();
  // Table Source
  newdataSource = new MatTableDataSource(ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srno', 'ddoNo', 'cardexNo', 'ddoName',
    'fromDate', 'toDate', 'type',
    'ddoApproverName',
    'view_image', 'lywith', 'status', 'action'];
  // Lists
  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	Collector Office, Gandhinagar' },
  ];

  status_list: ListValue[] = [
    { value: '1', viewValue: '	Approved' },
    { value: '2', viewValue: '	Collector Office, Gandhinagar' },
  ];
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.ddoverificationData();
  }


  ddoverificationData() {
    this.ddoverificationForm = this.fb.group({
      ddoNo: [''],
      cardexNo: [''],
      ddoName: [''],
      statu: ['']
    });
  }
  // siganture Dialog
  openDialog() {
    const dialogRef = this.dialog.open(SignatureDialogComponent, {
      width: 'auto',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }
  // delete data
  delete(index) {
    this.newdataSource.data.splice(index, 1);
    this.newdataSource = new MatTableDataSource(
      this.newdataSource.data
    );
  }




}



@Component({
  selector: 'app-signature-dialog',
  templateUrl: 'signature-dialog.html',
})

export class SignatureDialogComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<SignatureDialogComponent>
  ) { }

  vitocancel(): void {
    this.dialogRef.close();
  }

}