import { ExtraOrdinaryLeaveComponent } from './../extra-ordinary-leave/extra-ordinary-leave.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ExtraOrdinaryLeaveList } from 'src/app/model/extra-ordinary-leave-list';

const ELEMENT_DATA: ExtraOrdinaryLeaveList[] = [
  {
    transactionNo: 1022100, employeeNo: 1257894586, empName: 'R.kumar', empDesignation: 'Assistant Manager',
    class: 'Class I', startDate: '10/08/2020',
    endDate: '10/10/2020', noOfDays: '3', officeName: 'office 1', status: 'Pending', action: '-'
  },
  {
    transactionNo: 1022101, employeeNo: 1257894586, empName: 'P.kumar', empDesignation: 'Assistant Manager',
    class: 'Class II', startDate: '10/08/2020',
    endDate: '10/10/2020', noOfDays: '3', officeName: 'office 1', status: 'Pending', action: '-'
  },
  {
    transactionNo: 1022102, employeeNo: 1257894586, empName: 'T.kumar', empDesignation: 'Assistant Manager',
    class: 'Class III', startDate: '10/08/2020',
    endDate: '15/10/2020', noOfDays: '3', officeName: 'office 1', status: 'Pending', action: '-'
  },
  {
    transactionNo: 1022103, employeeNo: 1257894586, empName: 'S.kumar', empDesignation: 'Assistant Manager',
    class: 'Class IV', startDate: '10/08/2020',
    endDate: '15/10/2020', noOfDays: '3', officeName: 'office 1', status: 'Pending', action: '-'
  },
  {
    transactionNo: 1022104, employeeNo: 1257894586, empName: 'A.kumar', empDesignation: 'Assistant Manager',
    class: 'Class V', startDate: '10/08/2020',
    endDate: '15/10/2020', noOfDays: '3', officeName: 'office 1', status: 'Pending', action: '-'
  },
  {
    transactionNo: 1022105, employeeNo: 1257894586, empName: 'A.kumar', empDesignation: 'Assistant Manager',
    class: 'Class VI', startDate: '10/08/2020',
    endDate: '15/10/2020', noOfDays: '3', officeName: 'office 1', status: 'Pending', action: '-'
  },
  {
    transactionNo: 1022106, employeeNo: 1257894586, empName: 'A.kumar', empDesignation: 'Assistant Manager',
    class: 'Class VII', startDate: '10/08/2020',
    endDate: '15/10/2020', noOfDays: '3', officeName: 'office 1', status: 'Pending', action: '-'
  },
  {
    transactionNo: 1022107, employeeNo: 1257894586, empName: 'A.kumar', empDesignation: 'Assistant Manager',
    class: 'Class VIII', startDate: '10/08/2020',
    endDate: '15/10/2020', noOfDays: '3', officeName: 'office 1', status: 'Pending', action: '-'
  },
  {
    transactionNo: 1022108, employeeNo: 1257894586, empName: 'A.kumar', empDesignation: 'Assistant Manager',
    class: 'Class IX', startDate: '10/08/2020',
    endDate: '15/10/2020', noOfDays: '3', officeName: 'office 1', status: 'Pending', action: '-'
  },
  {
    transactionNo: 1022109, employeeNo: 1257894586, empName: 'A.kumar', empDesignation: 'Assistant Manager',
    class: 'Class X', startDate: '10/08/2020',
    endDate: '15/10/2020', noOfDays: '3', officeName: 'office 1', status: 'Pending', action: '-'
  },
];

@Component({
  selector: 'app-extra-ordinary-leave-list',
  templateUrl: './extra-ordinary-leave-list.component.html',
  styleUrls: ['./extra-ordinary-leave-list.component.css']
})
export class ExtraOrdinaryLeaveListComponent implements OnInit {

  isSearch: Boolean = true;
  codeCtrl = new FormControl();
  private _onDestroy = new Subject<void>();

  dataSource = new MatTableDataSource<ExtraOrdinaryLeaveList>(ELEMENT_DATA);


  leaveStatusCtrl: FormControl = new FormControl();
  filteredleaveStatus: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }


  displayedColumns: string[] = [
    'srNo', 'transactionNo', 'employeeNo', 'empName', 'empDesignation', 'class', 'startDate', 'endDate',
    'noOfDays', 'officeName', 'status', 'action'
  ];


  leaveStatusList: any[] = [
    { value: '00', viewValue: 'Approved' },
    { value: '01', viewValue: 'Pending' },
    { value: '02', viewValue: 'Rejected' },
  ];
 
  employeeLeaveDetail: FormGroup;
  private paginator: MatPaginator;
  private sort: MatSort;
  date: Date = new Date();

  private endDate: Date = new Date;
  private startDate: Date = new Date;

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  constructor(private fb: FormBuilder, private router: Router, ) { }

  ngOnInit() {
    this.createForm();
    this.filteredleaveStatus.next(this.leaveStatusList.slice());
    (this.leaveStatusCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.leaveStatusList, this.leaveStatusCtrl.value, this.filteredleaveStatus);
      }));
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
    filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }

  createForm() {
    this.employeeLeaveDetail = this.fb.group({
      sdate: [''],
      edate: [''],
      transactionNo: [''],
      employeeNo: [''],
      employeeName: [''],
      employeeDesignation: [''],
      caseNo: [''],
      officeName: [''],
      leaveStatus: [''],
    });
  }

  toDateChange(endDate) {
    console.log(endDate);
    return this.endDate = endDate;
  }
  fromDateChange(startDate) {
    console.log(startDate);
    return this.startDate = startDate;
  }

  leaveSubmit() {
    let p_data= this.employeeLeaveDetail;
    console.log(p_data);
  }
  clearForm() {
    this.employeeLeaveDetail.reset();
  }
  search() {
    this.isSearch = false;
  }

  goToDashboard() {
    this.router.navigate(['./']);
  }

}


