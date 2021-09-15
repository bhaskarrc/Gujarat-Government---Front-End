import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { EventsList } from '../../model/events-list';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  ELEMENT_DATA: EventsList[] = [
  { transNo: 1002, eventName: 'Senior Scale', empNo: 1100100012, empName: 'Narendra', empDesignation: 'Assistant Manager',
  empType: 'Regular', officeName: 'District Treasury Office, Ahmedabad', status: 'Pending', pendingWith: '-'},
  ];

  displayedColumns: string[] = [ 'position', 'transNo', 'eventName', 'empNo', 'empName',
  'empDesignation', 'empType', 'officeName', 'status', 'pendingWith', 'action'];

  eventsFrom: FormGroup;
  private paginator: MatPaginator;
  private sort: MatSort;

  Designation: CommonListing[] = [
    {value: '1', viewValue: 'Under Secretary'},
    {value: '2', viewValue: 'Deputy Secretary'},
    {value: '3', viewValue: 'Secretary'},
    {value: '4', viewValue: 'Joint Secretary'},
    {value: '5', viewValue: 'Assistant Secretary'},
    {value: '6', viewValue: 'Section Officer'},
  ];

  eventsName_list: CommonListing[] = [
    {value: '1', viewValue: 'Senior Scale'},
    {value: '2', viewValue: 'Deemed Date'},
    {value: '3', viewValue: 'Shetty Pay'},
    {value: '4', viewValue: 'Tiku Pay'},
    {value: '5', viewValue: 'Stepping Up'},
    {value: '6', viewValue: 'Selection Grade'},
    {value: '7', viewValue: 'Change of Scale'},
    {value: '8', viewValue: 'Promotion with Forgo'},
  ];

  Class: CommonListing[] = [
    {value: '1', viewValue: 'Class I'},
    {value: '2', viewValue: 'Class II'},
    {value: '3', viewValue: 'Class III'},
    {value: '4', viewValue: 'Class IV'},
  ];

  officeName_list: CommonListing[] = [
    {value: '1', viewValue: 'Pay & Accounts Office Ahmedabad'},
    {value: '2', viewValue: 'Pension Payment Office, Ahmedabad'},
    {value: '3', viewValue: 'District Asst Examiner Local Fund Accounts, Ahmeda'},
    {value: '4', viewValue: 'District Treasury Office, Ahmedabad'},
  ];

  EmpType: CommonListing[] = [
    {value: '1', viewValue: 'GO'},
    {value: '2', viewValue: 'NGO'},
    {value: '3', viewValue: 'AIS'},
  ];
  location_list: CommonListing[] = [
    {value: 'Ahemdabad', viewValue: 'Rajkot'},
    {value: 'Gandhinagar', viewValue: 'Gandhinagar'},
  ];
  workflowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
  ];

   DesignationCtrl: FormControl = new FormControl();
   date = new FormControl(new Date());
   eventsNameCtrl: FormControl = new FormControl();
   ClassCtrl: FormControl = new FormControl();
   officeNameCtrl: FormControl = new FormControl();
   EmpTypeCtrl: FormControl = new FormControl();
   locationCtrl: FormControl = new FormControl();
   workflowStatusCtrl: FormControl = new FormControl();

   dataSource = new MatTableDataSource<EventsList>(this.ELEMENT_DATA);

   setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.eventsFrom = this.fb.group({
      dateCreatedTo: [''],
      dateCreatedFrom: [''],
      eventsName: [''],
      employeeNo: [''],
      employeeName: [''],
      designation: [''],
      gpfNo: [''],
      ppanNo: [''],
      caseNo: [''],
      class: [''],
      retirementDate: [''],
      officeName: [''],
      empType: [''],
      workflowStatus: [''],
    });
  }

  saveEventsFrom() {}
  clearForm() {
    this.eventsFrom.reset();
  }
  goToDashboard() {}
}
