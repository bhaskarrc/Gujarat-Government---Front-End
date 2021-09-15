import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { DatePipe } from '@angular/common';
import { InwardRegisterEntryList } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-inward-register-entry',
  templateUrl: './inward-register-entry.component.html',
  styleUrls: ['./inward-register-entry.component.css']
})
export class InwardRegisterEntryComponent implements OnInit {
  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);
  // variables
  id = 1;
  errorMessages = lfMessage;

  // form group
  inwardRegisterEntry: FormGroup;
  // from control
  letterTypeCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  branchWorksheetNoCtrl: FormControl = new FormControl();
  employeeNameCtrl: FormControl = new FormControl();
  // lists start
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

  statusList: ListValue[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Dispose' }
  ];

  branchWorksheetNoList: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' }
  ];

  employeeNameList: ListValue[] = [
    { value: '1', viewValue: 'Mr. J P Patel' },
    { value: '2', viewValue: 'Mr. A P Patel' },
    { value: '3', viewValue: 'Mr. P P Patel' }
  ];
  // lists end

  // table data start
  employeeData: InwardRegisterEntryList[] = [
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
    }
  ];
  dataSource = new MatTableDataSource<InwardRegisterEntryList>(this.employeeData);
  displayedColumns: string[] = ['position', 'inwardNo', 'letterType', 'inwardDate', 'branchName'
    , 'letterReceivedFrom', 'letterNo', 'letterDate', 'status', 'branchWorksheetNo', 'receivedDateAtBranch',
    'tableWorksheetNo', 'receivedDateAtTable', 'employeeName', 'remarks', 'action'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // constructor
  constructor(private fb: FormBuilder, private datePipe: DatePipe, public dialog: MatDialog) { }

  ngOnInit() {
    this.inwardRegisterEntry = this.fb.group({
      letterType: [''],
      inwardDate: [''],
      inwardNo: this.idCreation(),
      branchName: [''],
      letterReceivedFrom: [''],
      letterNo: [''],
      letterDate: [''],
      status: [''],
      branchWorksheetNo: [''],
      receivedDateAtBranch: [''],
      tableWorksheetNo: [''],
      receivedDateAtTable: [''],
      employeeName: [''],
      remarks: [''],
    });
    this.dataSource.paginator = this.paginator;
  }

  // creates id
  idCreation() {
    const id = Number(this.id) + 1;
    return id;
  }

  // on click on add button
  onAdd() {
    this.dataSource.data.push({
      branchName: this.inwardRegisterEntry.get('branchName').value,
      branchWorksheetNo: this.inwardRegisterEntry.get('branchWorksheetNo').value,
      employeeName: this.inwardRegisterEntry.get('employeeName').value,
      inwardDate: this.datePipe.transform(this.inwardRegisterEntry.get('inwardDate').value, 'dd-MMM-yyyy'),
      inwardNo: this.inwardRegisterEntry.get('inwardNo').value,
      letterDate: this.datePipe.transform(this.inwardRegisterEntry.get('letterDate').value, 'dd-MMM-yyyy'),
      letterNo: this.inwardRegisterEntry.get('letterNo').value,
      letterReceivedFrom: this.inwardRegisterEntry.get('letterReceivedFrom').value,
      letterType: this.inwardRegisterEntry.get('letterType').value,
      receivedDateAtBranch: this.datePipe.transform(this.inwardRegisterEntry.get('receivedDateAtBranch').value, 'dd-MMM-yyyy'),
      receivedDateAtTable: this.datePipe.transform(this.inwardRegisterEntry.get('receivedDateAtTable').value, 'dd-MMM-yyyy'),
      remarks: this.inwardRegisterEntry.get('remarks').value,
      status: this.inwardRegisterEntry.get('status').value,
      tableWorksheetNo: this.inwardRegisterEntry.get('tableWorksheetNo').value,
    });
    this.dataSource.data = this.dataSource.data;

    // increment Id No
    this.id++;
  }

  // reset form
  clearForm() {
    this.inwardRegisterEntry.reset();
    this.inwardRegisterEntry.patchValue({ inwardNo: this.id });
  }

}
