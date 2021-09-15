import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { InwardRegisterReportList } from 'src/app/model/local-fund';

@Component({
  selector: 'app-inward-register-register',
  templateUrl: './inward-register-register.component.html',
  styleUrls: ['./inward-register-register.component.css']
})
export class InwardRegisterRegisterComponent implements OnInit {
  // variables
  id = 0;
  // form group
  inwardRegisterReport: FormGroup;
  // form control
  dateTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  letterTypeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  // list value start
  dateTypeList: ListValue[] = [
    { value: '1', viewValue: 'Inward Date' },
    { value: '2', viewValue: 'Letter Date' }
  ];

  branchNameList: ListValue[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Bill Budget' },
    { value: '3', viewValue: 'Pension' },
    { value: '4', viewValue: 'Technical 1' },
    { value: '5', viewValue: 'Technical 2' },
    { value: '6', viewValue: 'Record' },
    { value: '7', viewValue: 'Admin 1' },
    { value: '8', viewValue: 'Admin 2' },
    { value: '9', viewValue: 'GPF' },
    { value: '10', viewValue: 'University' },
    { value: '11', viewValue: 'LR Taluka Panchayat 1' },
    { value: '12', viewValue: 'LR Taluka Panchayat 2' },
    { value: '13', viewValue: 'Nagar Palika' },
    { value: '14', viewValue: 'Village Panchayat' },
    { value: '15', viewValue: 'Corporation' },
    { value: '16', viewValue: 'SVO' },
    { value: '17', viewValue: 'Special Audit' },
    { value: '18', viewValue: 'Other' }
  ];

  letterTypeList: ListValue[] = [
    { value: '1', viewValue: 'Letters from Governments' },
    { value: '2', viewValue: 'Letters from Head Quaters' },
    { value: '3', viewValue: 'Letters from AG Office' },
    { value: '4', viewValue: 'Other Letters' },
    { value: '5', viewValue: 'Avadhisar Notes/ U.O.R' },
    { value: '6', viewValue: 'Inquiry to another branch' },
    { value: '7', viewValue: 'All types of letters from Audit circle' },
    { value: '8', viewValue: 'RTI' }
  ];

  statusList: ListValue[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Dispose' }
  ];
  // lists value end

  // table data start
  elementData: InwardRegisterReportList[] = [
    {
      letterType: 'Letter From Government', inwardDate: '10-May-2019', inwardNo: '1201',
      branchName: 'Administration', letterReceivedFrom: 'Finance Department',
      letterNo: 'FD/2019/AD/1256', letterDate: '8-May-2019', status: 'Dispose', branchWorksheetNo: '1',
      receivedDateAtBranch: '8-May-2019', tableWorksheetNo: '11',
      receivedDateAtTable: '8-May-2019', employeeName: 'Mr. J P Patel', remarks: ''
    },
    {
      letterType: 'Letter From Head Quarter', inwardDate: '11-May-2019', inwardNo: '1202',
      branchName: 'Bill Budget', letterReceivedFrom: 'HOD',
      letterNo: 'LF/2019/Admin/345', letterDate: '11-May-2019', status: 'Dispose', branchWorksheetNo: '4',
      receivedDateAtBranch: '11-May-2019', tableWorksheetNo: '41',
      receivedDateAtTable: '11-May-2019', employeeName: 'Mr. K P Patel', remarks: ''
    },
    {
      letterType: 'RTI', inwardDate: '11-May-2019', inwardNo: '1203',
      branchName: 'Pension', letterReceivedFrom: 'RTI Department',
      letterNo: 'RTI/2019/admin/23', letterDate: '11-May-2019', status: 'Dispose', branchWorksheetNo: '6',
      receivedDateAtBranch: '11-May-2019', tableWorksheetNo: '61',
      receivedDateAtTable: '11-May-2019', employeeName: 'Mr. J P Patel', remarks: ''
    },
    {
      letterType: 'Other Letter', inwardDate: '12-May-2019', inwardNo: '1204',
      branchName: 'Other', letterReceivedFrom: 'Other',
      letterNo: '126598', letterDate: '11-May-2019', status: 'Pending', branchWorksheetNo: '1',
      receivedDateAtBranch: '', tableWorksheetNo: '11',
      receivedDateAtTable: '', employeeName: 'Mr. M J Patel', remarks: ''
    },
    {
      letterType: 'Letter From Government', inwardDate: '1-Jun-2019', inwardNo: '1205',
      branchName: 'Administration', letterReceivedFrom: 'Finance Department',
      letterNo: 'FD/2019/AD/1256', letterDate: '1-Jun-2019', status: 'Dispose', branchWorksheetNo: '1',
      receivedDateAtBranch: '1-Jun-2019', tableWorksheetNo: '11',
      receivedDateAtTable: '1-Jun-2019', employeeName: 'Mr. J P Patel', remarks: ''
    },
    {
      letterType: 'Letter From Head Quarter', inwardDate: '7-Jun-2019', inwardNo: '1206',
      branchName: 'Bill Budget', letterReceivedFrom: 'HOD',
      letterNo: 'LF/2019/Admin/3455', letterDate: '7-Jun-2019', status: 'Dispose', branchWorksheetNo: '4',
      receivedDateAtBranch: '7-Jun-2019', tableWorksheetNo: '41',
      receivedDateAtTable: '7-Jun-2019', employeeName: 'Mr. K P Patel', remarks: ''
    },
    {
      letterType: 'RTI', inwardDate: '11-May-2019', inwardNo: '1207',
      branchName: 'Pension', letterReceivedFrom: 'RTI Department',
      letterNo: 'RTI/2019/admin/45', letterDate: '11-May-2019', status: 'Pending', branchWorksheetNo: '6',
      receivedDateAtBranch: '', tableWorksheetNo: '61',
      receivedDateAtTable: '', employeeName: 'Mr. J P Patel', remarks: ''
    },
    {
      letterType: 'Other Letter', inwardDate: '12-May-2019', inwardNo: '1208',
      branchName: 'Other', letterReceivedFrom: 'Other',
      letterNo: '12846', letterDate: '11-May-2019', status: 'Pending', branchWorksheetNo: '1',
      receivedDateAtBranch: '', tableWorksheetNo: '11',
      receivedDateAtTable: '', employeeName: 'Mr. M J Patel', remarks: ''
    }
  ];
  dataSource = new MatTableDataSource<InwardRegisterReportList>(this.elementData);
  displayedColumns: string[] = ['position', 'letterType', 'inwardDate', 'inwardNo', 'branchName'
    , 'letterReceivedFrom', 'letterNo', 'letterDate', 'status', 'branchWorksheetNo', 'receivedDateAtBranch',
    'tableWorksheetNo', 'receivedDateAtTable', 'employeeName', 'remarks'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchFormData();
    this.dataSource.paginator = this.paginator;

  }

  // form data
  searchFormData() {
    this.inwardRegisterReport = this.fb.group({
      dateType: [''],
      fromDate: [''],
      toDate: [''],
      branchName: [''],
      letterType: [''],
      letterReceivedFrom: [''],
      status: [''],
      inwardNo: ['']
    });
  }
}
