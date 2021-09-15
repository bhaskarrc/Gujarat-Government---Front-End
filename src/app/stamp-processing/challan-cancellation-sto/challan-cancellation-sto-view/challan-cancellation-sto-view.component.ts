import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { ElementChallanCan } from 'src/app/model/stamp-processing';


const ELEMENT_DATA: ElementChallanCan[] = [
  {
    cNumber: '51/00057/072019/23',
    cDate: '15-Apr-2020',
    cName: 'B S Patel (000123)',
    cAmount: '23500',
    bankNo: 'TO/GNR/2020-21/37',
    bankAmount: '23500',
    cStatus: 'Pending',

    remarks: '',
  },

];


@Component({
  selector: 'app-challan-cancellation-sto-view',
  templateUrl: './challan-cancellation-sto-view.component.html',
  styleUrls: ['./challan-cancellation-sto-view.component.css']
})
export class ChallanCancellationStoViewComponent implements OnInit {


  challan_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/34' },
    { value: '3', viewValue: '51/00057/072019/56' },
    { value: '4', viewValue: '51/00057/072019/77' },
  ];


  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['position', 'cNumber', 'cDate',
    'cName', 'cAmount', 'bankNo', 'bankAmount', 'cStatus', 'remarks'];

  indentCtrl: FormControl = new FormControl();

  challanCancellationStoViewForm: FormGroup;
  date: any = new Date();

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.challanCancellationStoViewForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],

      issueDate: ['', Validators.required],

      subTreasury: ['District Treasury Office, Gandhinagar', Validators.required],
      challanNumber: ['1', Validators.required],

    })
  }


  goToDashboard() {
    this.router.navigate(['']);
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/challan-cancellation-sto-list'])
  }

  closeConfirmationPopup() {
    const dialogRef = this.dialog.open(CloseConfirmCommonDialogComponent, {
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "yes") {
        this.router.navigate(['']);
      }
    });
  }
}
