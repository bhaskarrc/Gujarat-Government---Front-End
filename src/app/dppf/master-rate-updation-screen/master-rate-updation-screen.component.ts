import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { DppfMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-ti-rate-type-dialog',
  templateUrl: './ti-rate-type-dialog.html',
})
export class TiRateTypeDialogComponent implements OnInit {
  message = '';
  constructor(
    public dialogRef: MatDialogRef<TiRateTypeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  // data for verify dialog
  inwardDate = new Date();
  ppoNo = 0;
  dt = new Date();
  gpfNumber = 0;
  pensionPaymentNo = '';
  verifyButton: boolean;
  closeButton: boolean;
  ngOnInit(): void {

    console.log(this.data);
    // displays message as per selected option and shows and hides buttons
    if (this.data === 'headCode') {
      this.message = 'Please Select Head Code';
      this.verifyButton = false;
    } else if (this.data === 'tiRateType') {
      this.message = 'Please Select Pension for which changes to be made';
      this.verifyButton = false;
    } else if (this.data === 'verify') {
      this.message = 'Data Verified and Found Correct';
      this.ppoNo = 1221;
      this.gpfNumber = 1213;
      this.pensionPaymentNo = '311231';
      this.verifyButton = true;
    } else if (this.data === 'TIRateTypeNull') {
      this.message = 'Please Select TI Rate type';
      this.verifyButton = false;
    } else if (this.data === 'greaterYearPaymentTo') {
      this.message = 'Payment From Month should not be greater then Payment To Year';
      this.verifyButton = false;
    } else if (this.data === 'greaterYearPaymentIn') {
      this.message = 'Payment From Month should not be greater then Payment In Year';
      this.verifyButton = false;
    } else if (this.data.comp.data === 'finalMessage') {
      this.message = 'You are going to change the TI from ' + this.data.comp.oldRate + ' to ' + this.data.comp.newRate + '.00 for headcode ' + this.data.comp.headCode + '. It will be effective from ' + this.data.comp.effectiveFromDate + '. Appears from from ' + this.data.comp.fromMonth + ' till ' + this.data.comp.toMonth + ' will be paid in the month ' + this.data.comp.inMonth + ' . Press OK to continue and Close to Quit.';
      this.verifyButton = false;
      this.closeButton = true;
    }
  }

  // on close
  onOkClick() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-master-rate-updation-screen',
  templateUrl: './master-rate-updation-screen.component.html',
  styleUrls: ['./master-rate-updation-screen.component.css']
})
export class MasterRateUpdationScreenComponent implements OnInit {
  // Table Source
  displayColumns = [
    'monthPaymentFrom',
    'yearPaymentFrom',
    'monthPaymentTo',
    'yearPaymentTo',
    'monthPaymentIn',
    'yearPaymentIn',
    'action'];

  masterRateInfo = 'Master Rate/Amount Change Admin Screen';
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  // Variable
  errorMessage;
  gtrfourtyFout = 'Form GTR 44 - Detailed Bill of Contingent Charges of Fully vouched contingent charges';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  // Date
  todayDate = Date.now();
  // Form Group
  masterRateChangeAdminScreen: FormGroup;
  daForm: FormGroup;
  adpForm: FormGroup;
  gpfForm: FormGroup;
  tiForm: FormGroup;
  descriptionADP: string;
  isForPensionSelected = false;

  // table Data
  masterRateSourceData: any[] = [
    { monthPaymentFrom: '', yearPaymentFrom: '2020', monthPaymentTo: '', yearPaymentTo: '2020', monthPaymentIn: '', yearPaymentIn: '2020' }
  ];
  // Table Source
  masterRateSource = new MatTableDataSource(this.masterRateSourceData);
  // List

  configurationFor_list: CommonListing[] = [
    { value: 1, viewValue: 'TI' },
    { value: 2, viewValue: 'DA' },
    // { value: 3, viewValue: 'GPF' },
    { value: 4, viewValue: 'ADP' }
  ];

  tiRateType_list: CommonListing[] = [
    { value: '1', viewValue: 'TI Rate Continue from ROP 1986' },
    { value: '2', viewValue: 'Revised TI after DP Merge' },
    { value: '3', viewValue: 'Revised TI after ROP 2006' },
    { value: '4', viewValue: 'Revised TI after ROP 2016' },
  ];

  forPension_list: CommonListing[] = [

    { value: '1', viewValue: 'UPTO 1750' },
    { value: '2', viewValue: 'UPTO 3000' },
    { value: '3', viewValue: 'ABOVE 3001' },
  ];

  month_list: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' }
  ];

  headCode_list: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
    { value: '9', viewValue: '9' },
    { value: '10', viewValue: '10' },
    { value: '11', viewValue: '11' },
    { value: '12', viewValue: '12' },
    { value: '13', viewValue: '13' },
    { value: '14', viewValue: '14' },
    { value: '15', viewValue: '15' },
    { value: '16', viewValue: '16' },
    { value: '17', viewValue: '17' },
    { value: '18', viewValue: '18' },
    { value: '19', viewValue: '19' },
    { value: '20', viewValue: '20' },

  ];
  year_list: CommonListing[] = [
    { value: '2019', viewValue: '2019' },
    { value: '2020', viewValue: '2020' },
    { value: '2021', viewValue: '2021' },
    { value: '2022', viewValue: '2022' },
    { value: '2023', viewValue: '2023' },
    { value: '2024', viewValue: '2024' },
  ];

  daRateType_list: CommonListing[] = [
    { value: '1', viewValue: 'DA Rate for ROP 6' },
    { value: '2', viewValue: 'DA Rate for ROP 16' },
  ];
  // Form Control
  isSubmitted = false;
  makePaymentFromDisable = false;
  configurationForCtrl: FormControl = new FormControl();
  tiRateTypeCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();
  monthPaymentFromCtrl: FormControl = new FormControl();
  daRateTypeCtrl: FormControl = new FormControl();
  description: string;
  oldAmountTI: string;
  oldAmountDA: string;
  oldPercentEightyToEightyFiveValue: string;
  oldPercentEightyFiveToNinetyValue: string;
  oldPercentNinetyToNinetyFiveValue: string;
  oldPercentEightyToHundredValue: string;
  oldPercentHundredYearsOrMoreValue: string;

  // Method to be executed on click of save
  save() {
    this.isSubmitted = true;
    const passData: any = {
      data: 'finalMessage',
      oldRate: this.masterRateChangeAdminScreen.controls.oldRate.value,
      newRate: this.masterRateChangeAdminScreen.controls.newRate.value,
      headCode: this.masterRateChangeAdminScreen.controls.headCode.value,
      effectiveFromDate: this.masterRateChangeAdminScreen.controls.effectiveFromDate.value._i.date + '-' + this.month_list[this.masterRateChangeAdminScreen.controls.effectiveFromDate.value._i.month - 1].viewValue + '-' + this.masterRateChangeAdminScreen.controls.effectiveFromDate.value._i.year,
      fromMonth: this.month_list[this.masterRateSource.data[0].monthPaymentFrom - 1].viewValue,
      // fromMonth: this.masterRateSource.data[0].monthPaymentFrom,
      toMonth: this.month_list[this.masterRateSource.data[0].monthPaymentTo - 1].viewValue,
      inMonth: this.month_list[this.masterRateSource.data[0].monthPaymentIn - 1].viewValue,
      // toMonth: this.masterRateSource.data[0].monthPaymentTo,
      // inMonth: this.masterRateSource.data[0].monthPaymentIn
    }

    if (this.masterRateSource.data[0].monthPaymentFrom && this.masterRateSource.data[0].yearPaymentFrom &&
      this.masterRateSource.data[0].monthPaymentTo && this.masterRateSource.data[0].yearPaymentTo &&
      this.masterRateSource.data[0].monthPaymentIn && this.masterRateSource.data[0].yearPaymentIn) {

      const dialogRef = this.dialog.open(TiRateTypeDialogComponent, {
        width: '500px',
        height: 'auto',
        data: {
          comp: passData
        }
      }
      );
      dialogRef.afterClosed().subscribe(result => { });
    }
  }

  changeYearPaymentTo() {
    if (this.masterRateSource.data[0].yearPaymentFrom > this.masterRateSource.data[0].yearPaymentTo) {
      const dialogRef = this.dialog.open(TiRateTypeDialogComponent, {
        width: '250px',
        height: 'auto',
        data: 'greaterYearPaymentTo'
      }
      );
      dialogRef.afterClosed().subscribe(result => { });
    }
  }

  changeYearPaymentIn() {
    if (this.masterRateSource.data[0].yearPaymentFrom > this.masterRateSource.data[0].yearPaymentIn) {
      const dialogRef = this.dialog.open(TiRateTypeDialogComponent, {
        width: '250px',
        height: 'auto',
        data: 'greaterYearPaymentIn'
      }
      );
      dialogRef.afterClosed().subscribe(result => { });
    }
  }

  // Method to update Payment
  updatePayment() {
    console.log(this.masterRateChangeAdminScreen.controls.effectiveFromDate.value);
    const dateMonth = this.masterRateChangeAdminScreen.controls.effectiveFromDate.value._i.month;
    const dateYear = this.masterRateChangeAdminScreen.controls.effectiveFromDate.value._i.year;
    this.masterRateSource.data[0].monthPaymentFrom = (dateMonth + 1).toString();
    this.masterRateSource.data[0].yearPaymentFrom = (dateYear).toString();
    this.masterRateSource.data = this.masterRateSource.data;
    this.makePaymentFromDisable = true;

    // this.masterRateSource.data['monthPaymentFrom'] = this.masterRateChangeAdminScreen.controls['effectiveFromDate'].value;
  }


  // oldEffectiveDate;

  changeDesc() {

    if (this.masterRateChangeAdminScreen.controls['tiRateType'].value) {

      this.masterRateChangeAdminScreen.patchValue({
        description: '2071 Pension And Other Retirement Benefits To Civil Pensioner',
        oldRate: '390.0',
        oldEffectiveFromDate: new Date('07/01/2008')
      });

    } else {
      const dialogRef = this.dialog.open(TiRateTypeDialogComponent, {
        width: '250px',
        height: 'auto',
        data: 'TIRateTypeNull'
      }
      );
      dialogRef.afterClosed().subscribe(result => { });
      this.masterRateChangeAdminScreen.controls['headCode'].setValue(' ');
    }

  }

  changeRate(event) {
    if (event.value === '1') {
      this.daForm.patchValue({
        oldRate: '130.00',
        oldEffectiveFromDate: new Date('02/01/2016')
      });
    }
    if (event.value === '2') {
      this.daForm.patchValue({
        oldRate: '8.00',
        oldEffectiveFromDate: new Date('02/01/2018')
      });
    }

  }

  changeADP() {

    this.adpForm.patchValue({
      descriptionADP: '2071 Pension And Other Retirement Benefits To Civil Pensioner',
      oldPercentEightyToEightyFive: '20.00',
      oldPercentEightyFiveToNinety: '30.00',
      oldPercentNinetyToNinetyFive: '40.00',
      oldPercentEightyToHundred: '40.00',
      oldPercentHundredYearsOrMore: '100.00',
      oldEffectiveDate: new Date('01/01/2018')

    });
  }
  ngOnInit() {

    this.errorMessage = DppfMessage;
    this.masterRateChangeAdminScreenData();
    this.adpFormData();
    this.gpfFormData();
    this.daFormData();



  }

  masterRateChangeAdminScreenData() {
    this.masterRateChangeAdminScreen = this.fb.group({
      configurationFor: [1, Validators.required],
      tiRateType: ['', Validators.required],
      forPension: ['', Validators.required],
      headCode: ['', Validators.required],
      description: [{ value: '', disabled: true }],
      oldRate: [{ value: '', disabled: true }],
      newRate: ['', Validators.required],
      oldEffectiveFromDate: [{ value: '', disabled: true }, Validators.required],
      effectiveFromDate: [null, Validators.required],
      oldMinimumAmount: [{ value: '', disabled: true }, Validators.required],
      newMinimumAmount: ['', Validators.required],
      monthPaymentFrom: [''],
      yearPaymentFrom: ['2'],
      monthPaymentTo: [''],
      yearPaymentTo: ['2'],
      monthPaymentIn: [''],
      yearPaymentIn: ['2'],
      oldEffectiveDate: [''],
      newEffectiveDate: [''],


    });
  }

  adpFormData() {
    this.adpForm = this.fb.group({
      headCodeADP: ['', Validators.required],
      descriptionADP: [{ value: '', disabled: true }],
      oldPercentEightyToEightyFive: [{ value: '', disabled: true }],
      newPercentEightyToEightyFive: ['', Validators.required],
      oldPercentEightyFiveToNinety: [{ value: '', disabled: true }],
      newPercentEightyFiveToNinety: ['', Validators.required],
      oldPercentNinetyToNinetyFive: [{ value: '', disabled: true }],
      newPercentNinetyToNinetyFive: ['', Validators.required],
      oldPercentEightyToHundred: [{ value: '', disabled: true }],
      newPercentEightyToHundred: ['', Validators.required],
      oldPercentHundredYearsOrMore: [{ value: '', disabled: true }],
      newPercentHundredYearsOrMore: ['', Validators.required],
      oldEffectiveDate: [{ value: '', disabled: true }],
      newEffectiveDate: ['', Validators.required],
    });
  }

  gpfFormData() {
    this.gpfForm = this.fb.group({
      oldRate: [{ value: '8.00', disabled: true }],
      newRate: ['', Validators.required],
      oldEffectiveFromDate: [{ value: new Date('07/01/2019'), disabled: true }],
      effectiveFromDate: ['', Validators.required],
    });
  }

  daFormData() {
    this.daForm = this.fb.group({
      daRateType: ['', Validators.required],
      oldRate: [{ value: '', disabled: true }],
      newRate: ['', Validators.required],
      oldEffectiveFromDate: [{ value: '', disabled: true }, Validators.required],
      effectiveFromDate: ['', Validators.required],
    });
  }

  addNewRow() {
    const Col_Data = this.masterRateSource.data;
    Col_Data.push({
      monthPaymentFrom: '', yearPaymentFrom: '2020', monthPaymentTo: '', yearPaymentTo: '2020', monthPaymentIn: '', yearPaymentIn: '2020'
    });
    this.masterRateSource.data = Col_Data;
  }

  deleteRow(i) {
    this.masterRateSource.data.splice(i, 1);
    this.masterRateSource = new MatTableDataSource(
      this.masterRateSource.data
    );
  }
  // Work Flow Popup
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  resetForm() {
    this.isSubmitted = false;
    this.masterRateChangeAdminScreen.reset();
    if (this.masterRateSource.data.length > 1) {
      const lastRow = this.masterRateSource.data[this.masterRateSource.data.length - 1];
      if (lastRow.monthPaymentFrom && lastRow.monthPaymentTo && lastRow.monthPaymentIn) {

      } else {
        this.masterRateSource.data.splice(this.masterRateSource.data.length - 1, 1);
        this.masterRateSource = new MatTableDataSource(
          this.masterRateSource.data
        );
      }
    }
  }

  onSelectingTiRateType(event) {
    if (event.value === '1') {
      const dialogRef = this.dialog.open(TiRateTypeDialogComponent, {
        width: '500px',
        height: 'auto',
        data: 'tiRateType'
      }
      );
      dialogRef.afterClosed().subscribe(result => { });
    } else {
      const dialogRef = this.dialog.open(TiRateTypeDialogComponent, {
        width: '250px',
        height: 'auto',
        data: 'headCode'
      }
      );
      dialogRef.afterClosed().subscribe(result => { });
    }
  }

  onSelectingForPension(event) {
    if (event.value) {
      const dialogRef = this.dialog.open(TiRateTypeDialogComponent, {
        width: '250px',
        height: 'auto',
        data: 'headCode'
      }
      );
      dialogRef.afterClosed().subscribe(result => { });
    }
    if (event.value === '2') {
      this.isForPensionSelected = true;
      this.masterRateChangeAdminScreen.patchValue({
        oldMinimumAmount: ''
      });
    }
  }

}

