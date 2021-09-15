import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { PensionPreAuditCasesRegisterDetails } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';




@Component({
  selector: 'app-pension-pre-audit-cases-register-details',
  templateUrl: './pension-pre-audit-cases-register-details.component.html',
  styleUrls: ['./pension-pre-audit-cases-register-details.component.css']
})
export class PensionPreAuditCasesRegisterDetailsComponent implements OnInit {
  // date
  maxDate = new Date();
  todayDate = Date.now();
  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  errorMessages = lfMessage;
  isSubmitted = false;
  id = 2;
  // form group
  pensionPreAuditCasesRegisterDetails: FormGroup;
  // form control
  isApprovedOrQueryCtrl: FormControl = new FormControl();
  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);
  // lists start
  isApprovedOrQueryList: ListValue[] = [
    { value: '0', viewValue: 'No' },
    { value: '1', viewValue: 'Yes' },
  ];
  // lists end

  // table data start
  elementData: PensionPreAuditCasesRegisterDetails[] = [
    {
      id: '1',
      district: 'Ahmedabad',
      inwardNumber: '333',
      inwardDate: new Date('03/02/2019'),
      pensionerName: 'Bhartiben N Patel',
      designation: 'Primary Teacher',
      pensionOfficeName: 'Ahmedabad',
      ppoNumber: '12313',
      retirementDate: new Date('09/30/2018'),
      isApprovedOrQuery: 'Approved',
      dcrg: '',
      cvp: '',
      ae: '',
      outwardNo: '',
      outwardDate: '',
      remarks: ''
    }
  ];
  dataSource = new MatTableDataSource<PensionPreAuditCasesRegisterDetails>(this.elementData);
  displayedColumns: string[] = [
    'serialNo',
    'id',
    'district',
    'inwardNumber',
    'inwardDate',
    'pensionerName',
    'designation',
    'pensionOfficeName',
    'ppoNumber',
    'retirementDate',
    'isApprovedOrQuery',
    'dcrg',
    'cvp',
    'ae',
    'outwardNo',
    'outwardDate',
    'remarks',
    'action'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.pensionPreAuditCasesRegisterDetails = this.fb.group({
      districtName: [''],
      id: [''],
      inwardNumber: [''],
      inwardDate: [''],
      pensionerName: [''],
      designation: [''],
      pensionOfficeName: [''],
      ppoNumber: [''],
      retirementDate: [''],
      isApprovedOrQuery: [''],
      dcrg: [''],
      cvp: [''],
      ae: [''],
      outwardNo: [''],
      outwardDate: [''],
      remarks: [''],
    });
  }

  // add new table entry
  add() {
    if (this.pensionPreAuditCasesRegisterDetails.valid) {
      this.isSubmitted = false;
      this.elementData.push({
        id: String(this.id),
        district: 'Ahmedabad',
        inwardNumber: this.pensionPreAuditCasesRegisterDetails.value.inwardNumber,
        inwardDate: this.pensionPreAuditCasesRegisterDetails.value.inwardDate,
        pensionerName: this.pensionPreAuditCasesRegisterDetails.value.pensionerName,
        designation: this.pensionPreAuditCasesRegisterDetails.value.designation,
        pensionOfficeName: this.pensionPreAuditCasesRegisterDetails.value.pensionOfficeName,
        ppoNumber: this.pensionPreAuditCasesRegisterDetails.value.ppoNumber,
        retirementDate: this.pensionPreAuditCasesRegisterDetails.value.retirementDate,
        isApprovedOrQuery: this.isApprovedOrQueryList[this.pensionPreAuditCasesRegisterDetails.value.isApprovedOrQuery].viewValue,
        dcrg: this.pensionPreAuditCasesRegisterDetails.value.dcrg,
        cvp: this.pensionPreAuditCasesRegisterDetails.value.cvp,
        ae: this.pensionPreAuditCasesRegisterDetails.value.ae,
        outwardNo: this.pensionPreAuditCasesRegisterDetails.value.outwardNo,
        outwardDate: this.pensionPreAuditCasesRegisterDetails.value.outwardDate,
        remarks: this.pensionPreAuditCasesRegisterDetails.value.remarks,
      });

      this.dataSource = new MatTableDataSource<PensionPreAuditCasesRegisterDetails>(this.elementData);
      this.id = Number(this.id) + 1;

    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  clearForm() {
    this.pensionPreAuditCasesRegisterDetails.reset();
    // patches default value
    this.pensionPreAuditCasesRegisterDetails.patchValue({
      districtName: 'Ahmedabad',
      id: this.id,
    });
  }

  // reset common button
  reset() { }

}
