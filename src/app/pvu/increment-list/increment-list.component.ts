import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { IncrementList } from 'src/app/model/increment-list';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-increment-list',
  templateUrl: './increment-list.component.html',
  styleUrls: ['./increment-list.component.css']
})
export class IncrementListComponent implements OnInit {

  ELEMENT_DATA: IncrementList[] = [
    {transactionNo: 1100100012, incrementType: 'Regular',  status: 'Pending', incrementFor: '6th Pay commission'},
  ];

  displayedColumns: string[] = [ 'position', 'transactionNo', 'incrementType', 'status',
  'incrementFor', 'action'];

  searchListForm: FormGroup;

  empType_list: CommonListing[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'NGO' },
    { value: '3', viewValue: 'AIS' },
  ];
  employeePayType_list: CommonListing[] = [
    {value: '1', viewValue: 'Regular'},
  ];
  empClass_list: CommonListing[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Class I' },
    { value: '3', viewValue: 'Class II' },
    { value: '4', viewValue: 'Class III' },
    { value: '5', viewValue: 'Class IV' },
  ];

  eventName_list: CommonListing[] = [
    { value: '1', viewValue: 'Increment' },
  ];
  workflowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
  ];

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  empTypeCtrl: FormControl = new FormControl();
  empClassCtrl: FormControl = new FormControl();
  workflowStatusCtrl: FormControl = new FormControl();
  eventNameCtrl: FormControl = new FormControl();
  employeePayTypeCtrl: FormControl = new FormControl();
  _onDestroy = new Subject<void>();
  dataSource = new MatTableDataSource<IncrementList>(this.ELEMENT_DATA);
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
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchListForm = this.fb.group({
      transactionNo: [''],
      empType: [''],
      eventName: ['1'],
      employeePayType: ['1'],
      empClass: [''],
      workflowStatus: [''],
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
  saveEstimate() {
  }

}

