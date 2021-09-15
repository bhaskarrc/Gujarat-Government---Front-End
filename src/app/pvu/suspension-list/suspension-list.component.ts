import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { SuspensionListModel } from 'src/app/model/suspension';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-suspension-list',
  templateUrl: './suspension-list.component.html',
  styleUrls: ['./suspension-list.component.css']
})
export class SuspensionListComponent implements OnInit {

  ELEMENT_DATA: SuspensionListModel[] = [
    {empNo: 1100100012,
     empName: 'Raj kumar', 
     payCom: '7th pay Commission', 
     designation: 'Assistant Manager',
     transactionNo: '101216345', 
     class: 'Class I',
     suspensionStartDate: '19-02-1971',
     suspensionReason: '', 
     officeName: 'Office 1', 
     status: 'Pending'},
  ];

  displayedColumns: string[] = [ 'position', 'transactionNo', 'empNo', 'empName', 'class', 'designation', 'officeName',  'payCom',
    'suspensionStartDate', 'suspensionReason','action'];

  searchListForm: FormGroup;

  Paycommision: CommonListing[] = [
    { value: '1', viewValue: '7th Pay Commission' },
    { value: '2', viewValue: '6th Pay Commission' },
    { value: '3', viewValue: '5th Pay Commission' },
  ];

  ReasonList: CommonListing[] = [
    { value: '1', viewValue: 'Reason1' },
    { value: '2', viewValue: 'Reason 2' },
    { value: '3', viewValue: 'Reason3' },
  ];

  Reason_list: CommonListing[] = [
    { value: '1', viewValue: 'Reason1' },
    { value: '2', viewValue: 'Reason 2' },
    { value: '3', viewValue: 'Reason3' },

  ];

  status_list: CommonListing[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
  ];

  PaycommisionCtrl: FormControl = new FormControl();
  ReasonCtrl: FormControl = new FormControl();
  statusCtrl:FormControl =  new FormControl();

  _onDestroy = new Subject<void>();

  dataSource = new MatTableDataSource<SuspensionListModel>(this.ELEMENT_DATA);

  private paginator: MatPaginator;
  private sort: MatSort;

  showTable: Boolean = false;

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
  ) { }

  ngOnInit() {
    this.searchListForm = this.fb.group({
      transactionNumber: [''],
      empName: [''],
      suspensionCreatedFromDate: [''],
      suspensioncreatedToDate: [''],
      paycommision:[''],
      employeeNumber:[''],
      status:[''],
      reason:['']
     
    });
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  search() {
    this.showTable = true;
  }

}
