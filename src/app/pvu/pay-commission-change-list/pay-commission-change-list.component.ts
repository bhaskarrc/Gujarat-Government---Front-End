import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators} from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource, MatSelect} from '@angular/material';


@Component({
  selector: 'app-pay-commission-change-list',
  templateUrl: './pay-commission-change-list.component.html',
  styleUrls: ['./pay-commission-change-list.component.css']
})
export class PayCommissionChangeListComponent implements OnInit {

  paycommissionFrom: FormGroup;
  private paginator: MatPaginator;
  private sort: MatSort;


  Designation: any[] = [
    {value: '01', viewValue: 'Under Secretary'},
    {value: '02', viewValue: 'Deputy Secretary'},
    {value: '03', viewValue: 'Secretary'},
    {value: '04', viewValue: 'Joint Secretary'},
    {value: '05', viewValue: 'Assistant Secretary'},
    {value: '06', viewValue: 'Section Officer'},
  ];
  
  Class: any[] = [
    {value: '01', viewValue: 'Class I'},
    {value: '02', viewValue: 'Class II'},
    {value: '03', viewValue: 'Class III'},
    {value: '04', viewValue: 'Class IV'},
  ];
 
  Office: any[] = [
    {value: '01', viewValue: 'Pay & Accounts Office Ahmedabad'},
    {value: '02', viewValue: 'Pension Payment Office, Ahmedabad'},
    {value: '03', viewValue: 'District Asst Examiner Local Fund Accounts, Ahmeda'},
    {value: '04', viewValue: 'District Treasury Office, Ahmedabad'},
  ];

  EmpType: any[] = [
    {value: '01', viewValue: 'GO'},
    {value: '02', viewValue: 'NGO'},
    {value: '03', viewValue: 'AIS'},
  ];
  location_list: any[] = [
    {value: 'Ahemdabad', viewValue: 'Rajkot'},
    {value: 'Gandhinagar', viewValue: 'Gandhinagar'},
  ];

   DesignationCtrl: FormControl = new FormControl();
   date = new FormControl(new Date());

   ClassCtrl: FormControl = new FormControl();
   OfficeCtrl:FormControl = new FormControl();
   EmpTypeCtrl:FormControl = new FormControl();
   locationCtrl: FormControl = new FormControl();

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

  ELEMENT_DATA: any[] = [
    {empNumber: 1100100012, employeeName: 'Narendra',
    designation: 'Assistant Manager',employeeType:'Regular', officeName:'District Treasury Office, Ahmedabad',
    empClass: 'Class I', status: 'Pending'},
    
  ];

  displayedColumns: string[] = [ 'position', 'empNumber', 'employeeName', 
  'empDesignation','officeName','empType','status', 'action'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  

  constructor(private fb: FormBuilder,) { }

  ngOnInit() {
    this.paycommissionFrom = this.fb.group({
      employeeName:[''],
      EmployeeNumber: ['',Validators.required],
      Designation:[''],
      gpfNo:[''],
      npsNo:[''],
      caseNo:[''],
      retirementDate:[''],
      Office:[''],
      location:[''],
      EmpType:[''],
    });
  }

  saveDesign(){}
  clearForm(){
    this.paycommissionFrom.reset();
  }
  goToDashboard(){}
}
