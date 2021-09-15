import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { FreezeUnfreezScheduleHba } from 'src/app/model/dppf-hba';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
@Component({
  selector: 'app-freeze-unfreez-schedule-hba',
  templateUrl: './freeze-unfreez-schedule-hba.component.html',
  styleUrls: ['./freeze-unfreez-schedule-hba.component.css']
})
export class FreezeUnfreezScheduleHbaComponent implements OnInit {
  // Form Group
  freezeUnfreezScheduleForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  isSubmitted = false;
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  // LIst
  status_list: CommonListing[] = [
    { value: '1', viewValue: 'New(From 2004) ' },
    { value: '2', viewValue: 'Old(Before 2004)  ' },
  ];
  year_list: CommonListing[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];
  month_list: CommonListing[] = [
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },

  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];
  hbaMca_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  locked_list: CommonListing[] = [
    { value: '1', viewValue: 'Locked' },
    { value: '2', viewValue: 'UnLocked' },
  ];
  // Variable
  errorMessages;
  // From Control
  districtCtrl: FormControl = new FormControl();

  // table data
  Element_Data: FreezeUnfreezScheduleHba[] = [
    {
      inwardNo: 'TSC/5/2020/4',
      inwardDate: '13-May-2020',
      treasuryName: 'District Treasury Office, Gandhinagar',
      scheduleAmount: '55000',
      accountWiseEntryAmount: '2600',
      difference: '52400',
      lockedUnlocked: 'Unlocked',
    },
  ];
  dataSource = new MatTableDataSource<FreezeUnfreezScheduleHba>(this.Element_Data);
  displayedColumns: any[] = [
    'select',
    'inwardNo',
    'inwardDate',
    'treasuryName',
    'scheduleAmount',
    'accountWiseEntryAmount',
    'difference',
    'lockedUnlocked',
  ];
  directiveObj = new CommonDirective(this.router);

  ngOnInit() {
    this.errorMessages = dppfHbaMessage;
    this.freezeUnfreezScheduleData();
  }
  freezeUnfreezScheduleData() {
    this.freezeUnfreezScheduleForm = this.fb.group({
      scheduleNo: [''],
      district: [''],
      month: [''],
      year: [''],
      hba: [''],
      locked: ['']
    });
  }
  // navigation Route
  navigate() {
    this.router.navigate(['./dppf-hba/freeze-unfreeze-schedule-listing']);
  }

  // On submit button
  onSubmit() {
    this.isSubmitted = true;
  }

  onLock() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(LockUnlockDialog, {
      width: '250px',
      height: 'auto',
      data: 'Succesfully Locked.'
    });

    dialogRef.afterClosed().subscribe(item => {
      this.dataSource.data.forEach(row => {
        const result = this.directiveObj.selection.isSelected(row) ? row.lockedUnlocked = 'Locked' : null;
      });
      this.directiveObj.selection.clear();
      console.log('The dialog was closed');
    });
  }

  onUnlock() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(LockUnlockDialog, {
      width: '250px',
      height: 'auto',
      data: 'Succesfully Unlocked.'
    });

    dialogRef.afterClosed().subscribe(item => {
      this.dataSource.data.forEach(row => {
        const result = this.directiveObj.selection.isSelected(row) ? row.lockedUnlocked = 'Unlocked' : null;
      });
      this.directiveObj.selection.clear();
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'app-lock-unlock-dialog',
  templateUrl: './lock-unlock-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class LockUnlockDialog implements OnInit {
  message = '';
  constructor(public dialogRef: MatDialogRef<LockUnlockDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.message = this.data;
  }
  // On Click of Ok button
  OnClickOk() {
    this.dialogRef.close('Ok');
  }
}

