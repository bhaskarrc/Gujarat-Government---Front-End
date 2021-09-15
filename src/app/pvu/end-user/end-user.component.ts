import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSelect } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { CommonListing } from 'src/app/model/common-listing';
import { EndUserDetails } from 'src/app/model/end-user';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';


@Component({
  selector: 'app-end-user-event-search-dialog',
  templateUrl: './end-user-event-search.dialog.html',
  styleUrls: ['./end-user.component.css']

})
export class EndUserEventSearchDialogComponent implements OnInit {

  searchForm: FormGroup;
  sessionExpiredCounter;
  sessionExpiredCounterMin;
  sessionCounterIntervel;

  @ViewChild('singleSelect') singleSelect: MatSelect;

  constructor(public dialogRef: MatDialogRef<EndUserEventSearchDialogComponent>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      otp: [''],
    });

    this.sessionExpiredCounter = 59;
    this.sessionExpiredCounterMin = 2;
    this.sessionCounterIntervel = setInterval(() => {
      if (this.sessionExpiredCounter > 0) {
        this.sessionExpiredCounter = this.sessionExpiredCounter - 1;
      } else {
        this.sessionExpiredCounter = 59;
        if (this.sessionExpiredCounterMin > 0) {
          this.sessionExpiredCounterMin = this.sessionExpiredCounterMin - 1;
        } else {
          clearInterval(this.sessionCounterIntervel);
          this.dialogRef.close('no');
        }
      }
    }, 1000);
  }

  onSave() {
    this.dialogRef.close('search');
  }
}

@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.css']
})
export class EndUserComponent implements OnInit {

  ELEMENT_DATA: EndUserDetails[] = [
    {
      empNumber: 1100100012, eventName: 'Event 1', eventDate: '19-05-2019', empName: 'Amit Pandey',
      empDesignation: 'Dy. Manager', empPayBand: 'PB1 (5200-20200)',
      empPayLevel: 'Level 1', empBasicPay: 10000, dateOfNextIncrement: '19-05-2001',
      optionOpted: 'Yes', dateOfAudit: '19-11-2019', status: 'In Progress'
    },
    {
      empNumber: 1100102200, eventName: 'Event 2', eventDate: '10-10-2019', empName: 'Pankaj Gupta',
      empDesignation: 'Assistant Manager', empPayBand: 'PB1 (5200-20200)',
      empPayLevel: 'Level 2', empBasicPay: 5000, dateOfNextIncrement: '09-10-2020',
      optionOpted: 'Yes', dateOfAudit: '19-11-2019', status: 'Approved'
    },
  ];

  displayedEventsColumns: string[] = ['position', 'empNumber', 'eventName', 'eventDate', 'empName',
  'empDesignation', 'empPayBand', 'empPayLevel', 'empBasicPay', 'dateOfNextIncrement',  'optionOpted',
    'dateOfAudit', 'status', 'action'];


  searchListForm: FormGroup;
  showTable: Boolean = false;
  errorMessage;

  event_field_list: CommonListing[] = [
    { value: '1', viewValue: 'Event 1' },
    { value: '2', viewValue: 'Event 2' },
  ];

  empType_list: CommonListing[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'NGO' },
    { value: '3', viewValue: 'AIS' },
  ];

  empClass_list: CommonListing[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' },
    { value: '5', viewValue: 'No Grade' },
  ];

  officeName_list: CommonListing[] = [
    { value: '1', viewValue: 'Gujrat Sales tax, Commission Ahmedabad' },
    { value: '2', viewValue: 'Commissioner of Sales Tax' },
    { value: '3', viewValue: 'Examiner, Local Fund Account' },
  ];

  workflowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
  ];

  majorHead_list: CommonListing[] = [
    { value: '2251 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2049 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '2215 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '3435 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '4217 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '2202 : General Education', viewValue: '2202 : General Education' },
  ];

  eventFieldCtrl: FormControl = new FormControl();

  // _onDestroy = new Subject<void>();

  dataSourceEvents = new MatTableDataSource<EndUserDetails>(this.ELEMENT_DATA);

  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public router: Router,
  ) { }

  ngOnInit() {
    this.errorMessage = pvuMessage;
    this.searchListForm = this.fb.group({
      employeeNo: [''],
      eventField: [''],
    });
  }

  openDialogEmployeeNumber() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.searchListForm.controls.employeeNo.patchValue(result[0].employeeNumber);
    });
  }

  setDataSourceAttributes() {
    this.dataSourceEvents.paginator = this.paginator;
    this.dataSourceEvents.sort = this.sort;
  }

  onSearch() {
    // this.showTable = true;
    const dialogRef = this.dialog.open(EndUserEventSearchDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'search') {
        console.log(result);
        this.showTable = true;
      }
    });
  }

  onclickStatus(data) {
    if (data.active) {
      data.active = false;
    } else {
      data.active = true;
    }
    return data;
  }

  clearForm() {
    this.searchListForm.reset();
  }

  saveEstimate() {
  }

  goToDashboard() {
    this.router.navigate(['']);
  }
}


