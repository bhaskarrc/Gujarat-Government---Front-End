import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ListValue } from '../../model/treasury-bill';

@Component({
  selector: 'app-recovery-details',
  templateUrl: './recovery-details.component.html',
  styleUrls: ['./recovery-details.component.css']
})
export class RecoveryDetailsComponent implements OnInit {
  // variables
  todayDate = new Date();
  recoveryDetailsForm: FormGroup;

  // form controls
  recoveryTypeCTRL: FormControl = new FormControl();
  fromYearCTRL: FormControl = new FormControl();
  fromMonthCTRL: FormControl = new FormControl();
  toYearCTRL: FormControl = new FormControl();
  toMonthCTRL: FormControl = new FormControl();
  recoveryType_list: ListValue[] = [
    { value: '1', viewValue: 'MCA' },
    { value: '2', viewValue: 'HBA' },
    { value: '3', viewValue: 'HRA' },
    { value: '4', viewValue: 'Other' }
  ];

  Year_list: ListValue[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];

  Month_List: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Sepetember' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  // table data
  recoveryReceiptsFromDCRGData: any[] = [];

  recoveryReceiptsFromCVPData: any[] = [];

  recoveryReceiptsFromFirstPensionPaymentData: any[] = [];

  recoveryReceiptsFromChallanData: any[] = [];

  recoveryReceiptsThroughChallanData: any[] = [];

  recoveryReceiptsFromMontrhlyPensionData: any[] = [];

  recoveryReceiptsFromDCRGDataSourceColumn: string[] = [
    'recoveryType', 'accountNumber', 'edpCode', 'majorHead', 'subMajorHead', 'minorHead',
    'subHead', 'deductionsType', 'amount', 'action'
  ];

  recoveryReceiptsFromCVPDataSourceColumn: string[] = [
    'recoveryType', 'accountNumber', 'edpCode', 'majorHead', 'subMajorHead', 'minorHead',
    'subHead', 'deductionsType', 'amount', 'action'
  ];

  recoveryReceiptsFromFirstPensionPaymentDataSourceColumn: string[] = [
    'recoveryType', 'accountNumber', 'edpCode', 'majorHead', 'subMajorHead', 'minorHead',
    'subHead', 'deductionsType', 'amount', 'action'
  ];

  recoveryReceiptsFromChallanDataSourceColumn: string[] = [
    'recoveryType', 'accountNumber', 'edpCode', 'majorHead', 'subMajorHead', 'minorHead',
    'subHead', 'deductionsType', 'amount', 'action'
  ];

  recoveryReceiptsThroughChallanDataSourceColumn: string[] = [
    'recoveryType', 'accountNumber', 'edpCode', 'majorHead', 'subMajorHead', 'minorHead',
    'subHead', 'deductionsType', 'amount', 'action'
  ];

  recoveryReceiptsFromMontrhlyPensionDataSourceColumn: string[] = [
    'recoveryType', 'accountNumber', 'edpCode', 'majorHead', 'subMajorHead', 'minorHead',
    'subHead', 'deductionsType', 'fromYear', 'fromMonth', 'toYear', 'toMonth', 'amount', 'action'
  ];


  recoveryReceiptsFromDCRGDataSource = new MatTableDataSource<any>(this.recoveryReceiptsFromDCRGData);
  recoveryReceiptsFromCVPDataSource = new MatTableDataSource<any>(this.recoveryReceiptsFromCVPData);
  recoveryReceiptsFromFirstPensionPaymentDataSource = new MatTableDataSource<any>(this.recoveryReceiptsFromFirstPensionPaymentData);
  recoveryReceiptsFromChallanDataSource = new MatTableDataSource<any>(this.recoveryReceiptsFromChallanData);
  recoveryReceiptsThroughChallanDataSource = new MatTableDataSource<any>(this.recoveryReceiptsThroughChallanData);
  recoveryReceiptsFromMontrhlyPensionDataSource = new MatTableDataSource<any>(this.recoveryReceiptsFromMontrhlyPensionData);

  constructor(private fb: FormBuilder, public dailog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.recoveryDetailsFormData();
  }

  recoveryDetailsFormData() {
    this.recoveryDetailsForm = this.fb.group({
      totalRecoveryReciept: [''],
      pendingRecoveryReceipt: [''],
      remainingAmount: [''],
      totalDCRGAmount: [''],
      recoveryType: [''],
      totalCVPAmount: [''],
      firstPensionPaymentAmount: [''],
      totalChallanAmount: [''],
      fromYear: [''],
      fromMonth: [''],
      toMonth: [''],
      toYear: [''],
    });
  }
  // routing
  goPrevious() {
    this.router.navigate(['/ppo/pension-detail']);
  }
  // resets form
  resetForm() {
    this.recoveryDetailsForm.reset();
  }


  // adds row in Recovery receipts from dcrg details
  addRecoveryReceiptsFromDCRGDetails() {
    const Col_Data = this.recoveryReceiptsFromDCRGDataSource.data;
    Col_Data.push({
      recoveryType: '', accountNumber: '', edpCode: '', majorHead: '', subMajorHead: '', minorHead: '',
      subHead: '', deductionsType: '', amount: ''
    });
    this.recoveryReceiptsFromDCRGDataSource.data = Col_Data;
  }

  // deletes row in Recovery receipts from dcrg details
  deleteRecoveryReceiptsFromDCRGDetails(index) {
    this.recoveryReceiptsFromDCRGDataSource.data.splice(index, 1);
    this.recoveryReceiptsFromDCRGDataSource = new MatTableDataSource(
      this.recoveryReceiptsFromDCRGDataSource.data
    );
  }

  // adds row in cvp details
  addRecoveryReceiptsFromCVPDetails() {
    const Col_Data = this.recoveryReceiptsFromCVPDataSource.data;
    Col_Data.push({
      recoveryType: '', accountNumber: '', edpCode: '', majorHead: '', subMajorHead: '', minorHead: '',
      subHead: '', deductionsType: '', amount: ''
    });
    this.recoveryReceiptsFromCVPDataSource.data = Col_Data;
  }

  // deletes row in cvp details
  deleteRecoveryReceiptsFromCVPDetails(index) {
    this.recoveryReceiptsFromCVPDataSource.data.splice(index, 1);
    this.recoveryReceiptsFromCVPDataSource = new MatTableDataSource(
      this.recoveryReceiptsFromCVPDataSource.data
    );
  }

  // adds row in receipts from first pension payment details
  addRecoveryReceiptsFromFirstPensionPaymentDetails() {
    const Col_Data = this.recoveryReceiptsFromFirstPensionPaymentDataSource.data;
    Col_Data.push({
      recoveryType: '', accountNumber: '', edpCode: '', majorHead: '', subMajorHead: '', minorHead: '',
      subHead: '', deductionsType: '', amount: ''
    });
    this.recoveryReceiptsFromFirstPensionPaymentDataSource.data = Col_Data;
  }

  // deletes row in receipts from first pension payment details
  deleteRecoveryReceiptsFromFirstPensionPaymentDetails(index) {
    this.recoveryReceiptsFromFirstPensionPaymentDataSource.data.splice(index, 1);
    this.recoveryReceiptsFromFirstPensionPaymentDataSource = new MatTableDataSource(
      this.recoveryReceiptsFromFirstPensionPaymentDataSource.data
    );
  }

  // adds row in From challan details
  addRecoveryReceiptsFromChallanDetails() {
    const Col_Data = this.recoveryReceiptsFromChallanDataSource.data;
    Col_Data.push({
      recoveryType: '', accountNumber: '', edpCode: '', majorHead: '', subMajorHead: '', minorHead: '',
      subHead: '', deductionsType: '', amount: ''
    });
    this.recoveryReceiptsFromChallanDataSource.data = Col_Data;
  }

  // deletes row in From challan details
  deleteRecoveryReceiptsFromChallanDetails(index) {
    this.recoveryReceiptsFromChallanDataSource.data.splice(index, 1);
    this.recoveryReceiptsFromChallanDataSource = new MatTableDataSource(
      this.recoveryReceiptsFromChallanDataSource.data
    );
  }

  // adds row in Through challan details
  addRecoveryReceiptsThroughChallanDetails() {
    const Col_Data = this.recoveryReceiptsThroughChallanDataSource.data;
    Col_Data.push({
      recoveryType: '', accountNumber: '', edpCode: '', majorHead: '', subMajorHead: '', minorHead: '',
      subHead: '', deductionsType: '', amount: ''
    });
    this.recoveryReceiptsThroughChallanDataSource.data = Col_Data;
  }

  // deletes row in Through challan details
  deleteRecoveryReceiptsThroughChallanDetails(index) {
    this.recoveryReceiptsThroughChallanDataSource.data.splice(index, 1);
    this.recoveryReceiptsThroughChallanDataSource = new MatTableDataSource(
      this.recoveryReceiptsThroughChallanDataSource.data
    );
  }

  // adds row in monthly pension details
  addRecoveryReceiptsFromMontrhlyPensionDetails() {
    const Col_Data = this.recoveryReceiptsFromMontrhlyPensionDataSource.data;
    Col_Data.push({
      recoveryType: '', accountNumber: '', edpCode: '', majorHead: '', subMajorHead: '', minorHead: '',
      subHead: '', deductionsType: '', fromYear: '', fromMonth: '', toYear: '', toMonth: '', amount: ''
    });
    this.recoveryReceiptsFromMontrhlyPensionDataSource.data = Col_Data;
  }

  // deleted row in monthly pension details
  deleteRecoveryReceiptsFromMontrhlyPensionDetails(index) {
    this.recoveryReceiptsFromMontrhlyPensionDataSource.data.splice(index, 1);
    this.recoveryReceiptsFromMontrhlyPensionDataSource = new MatTableDataSource(
      this.recoveryReceiptsFromMontrhlyPensionDataSource.data
    );
  }

}
