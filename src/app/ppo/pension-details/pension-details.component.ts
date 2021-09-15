import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogData } from 'src/app/model/standing-charge';
import { ListValue } from 'src/app/model/common-grant';
import { CvpData, DcrgData, OtherCut, ArriarData, RevisionData, WithheldAmt } from 'src/app/model/ppo';

const Arriar: ArriarData[] = [
  {
    amount: '',
    fromMonth: '',
    toYear: '',
    remarks: '',
  }];

const Revision: RevisionData[] = [
  {
    revisionDate: '29/10/2020',
    pension: '3407.00',
    cvp: '176189.00',
    cvpMonthly: '0.00',
    fpDate: '',
    fp: '3407.00',
    fpTwoDate: '',
    fpTwo: '',
    dcrg: '2280.00',
    remarks: ''
  },
];
const cvpData: CvpData[] = [
  {
    orderNo: '12', cvpAmount: '176189.00', cvpPaidDate: '25-Mar-2020', effectFromDate: '5-Mar-2020',
    restorationDate: '6-Mar-2020', paidMode: 'Supplementary ', restored: 'Yes', basic: '', cvpMonthlyAmt: ''
  }];

const dcrgData: DcrgData[] = [
  {
    orderNo: '12', dcrgAmount: '176189.00', dcrgPaidDate: '25-Mar-2020', withheldAmount: '200.00',
    da: '100.00', paidMode: 'Supplementary '
  }];
const otherCut: OtherCut[] = [
  {
    fromYear: '',
    fromMonth: '',
    toYear: '',
    toManth: '',
    amount: '',
    remarks: '',
  }];

// Special Cut
@Component({
  selector: 'app-withheld-amt-dialog',
  templateUrl: 'withheld-amt-dialog.html',
  styleUrls: ['./pension-details.component.css']
})
export class WithheldAmtComponent {

  paymentMode_list: any[] = [
    { value: '1', viewValue: 'Supplementary' },
    { value: '2', viewValue: 'Monthly' }
  ];
  paymentModeCtrl: FormControl = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<SpecialCutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }


  // table data
  Element_Data: WithheldAmt[] = [
    { totalDcrg: '176610.00', withheldDcrg: '6000.00', dcrgAmtToBePaid: '', paymentMode: '' }
  ];
  columns: string[] = ['srNo', 'totalDcrg', 'withheldDcrg', 'dcrgAmtToBePaid', 'paymentMode', 'action'];
  dataSource = new MatTableDataSource(this.Element_Data);
  // closes dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
  // closes dialog box
  saveRevice() {
    this.dialogRef.close();
  }
  // adds row in other cut
  otherCutAddRow() {
    const otherCutDate = this.dataSource.data;
    otherCutDate.push({
      totalDcrg: '176610.00',
      withheldDcrg: '6000.00',
      dcrgAmtToBePaid: '',
      paymentMode: '',

    });
    this.dataSource.data = otherCutDate;
  }

  // deletes row in other cut
  otherCutDataRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

}

// dcrg amount
@Component({
  selector: 'app-dcrg-amount-dialog',
  templateUrl: 'dcrg-amount-dialog.html',
  styleUrls: ['./pension-details.component.css']
})
export class DcrgAmountDialogComponent {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DcrgAmountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  // table data
  dcrgAmountColumns = ['srNo', 'orderNo', 'dcrgAmount', 'withheldAmount', 'cvpPaidDate', 'da', 'paidMode'];
  dcrgTableDate = new MatTableDataSource(dcrgData);
  // closes dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
  // closes dialog box
  saveRevice() {
    this.dialogRef.close();
  }
}
// cvp amount
@Component({
  selector: 'app-cvp-amount-dialog',
  templateUrl: 'cvp-amount-dialog.html',
  styleUrls: ['./pension-details.component.css']
})
export class CvpAmountDialogComponent {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CvpAmountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  // table data
  cvpAmountColumns = ['srNo', 'orderNo', 'cvpPaidDate', 'restorationDate', 'effectFromDate', 'basic', 'cvpAmount',
    'cvpMonthlyAmt', 'paidMode', 'restored'];
  cvpTableDate = new MatTableDataSource(cvpData);
  // closes dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
  // closes dialog box
  saveRevice() {
    this.dialogRef.close();
  }
}

// Revision-Dialog
@Component({
  selector: 'app-revision-dialog',
  templateUrl: 'Revision-dialog.html',
  styleUrls: ['./pension-details.component.css']
})
export class RevisionDialogComponent {
  // variables
  pensionerName = 'R J Parmar';
  ppoNo = 'L/GNR/STATE/CL-IV/P/011941';
  // lists
  finYear: ListValue[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' }
  ];

  fromMonths_list: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Septembet' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  constructor(
    public dialogRef: MatDialogRef<RevisionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  // form controls
  finYearCtrl: FormControl = new FormControl();
  fromMonthsCtrl: FormControl = new FormControl();
  // table data
  displayedColumns: string[] = ['srNo', 'revisionDate', 'pension', 'cvp', 'cvpMonthly', 'fpDate',
    'fp', 'fpTwoDate', 'fpTwo', 'dcrg', 'remarks'];
  revisionData = new MatTableDataSource(Revision);
  // closes dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
  // closes dialog box
  saveRevice() {
    this.dialogRef.close(this.revisionData);
  }
  // adds row in revision
  revisionAddRow() {
    const revisionDate = this.revisionData.data;
    revisionDate.push({
      revisionDate: '',
      pension: '',
      cvp: '',
      cvpMonthly: '',
      fpDate: '',
      fp: '',
      fpTwoDate: '',
      fpTwo: '',
      dcrg: '',
      remarks: ''
    });
    this.revisionData.data = revisionDate;
  }

  // deletes row in revision
  revisionRow(index) {
    this.revisionData.data.splice(index, 1);
    this.revisionData = new MatTableDataSource(this.revisionData.data);
  }
}

// pension cut
@Component({
  selector: 'app-pension-cut-dialog',
  templateUrl: 'pensionCut-dialog.html',
  styleUrls: ['./pension-details.component.css']
})
export class PensionCutComponent {
  // lists
  finYear: ListValue[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' }
  ];
  fromMonths_list: ListValue[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Septembet' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  constructor(
    public dialogRef: MatDialogRef<PensionCutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  // form controls
  finYearCtrl: FormControl = new FormControl();
  fromMonthsCtrl: FormControl = new FormControl();
  // table data
  pensionCutColumns: string[] = ['srNo', 'fromYear', 'fromMonth', 'toYear', 'toManth', 'amount', 'remarks', 'action'];
  pensionCut = new MatTableDataSource(Revision);
  // closes dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
  // closes dialog box
  saveRevice() {
    this.dialogRef.close();
  }
  // adds row in pension cut
  addNewRow() {
    const p_data = this.pensionCut.data;
    p_data.push({
      cvp: '', cvpMonthly: '', dcrg: '', fp: '', fpDate: '', fpTwo: '', fpTwoDate: '', pension: '', remarks: '', revisionDate: ''
    });
    this.pensionCut.data = p_data;

  }
  // deletes row in pension cut
  deletExpenditureRow(index) {
    this.pensionCut.data.splice(index, 1);
    this.pensionCut = new MatTableDataSource(this.pensionCut.data);
  }
}

// other benefit
@Component({
  selector: 'app-other-benifit-dialog',
  templateUrl: 'otherBenifit-dialog.html',
  styleUrls: ['./pension-details.component.css']
})
export class OtherBenifitComponent {
  // lists
  finYear: ListValue[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' }
  ];
  fromMonths_list: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Septembet' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  constructor(
    public dialogRef: MatDialogRef<OtherBenifitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  // form controls
  finYearCtrl: FormControl = new FormControl();
  fromMonthsCtrl: FormControl = new FormControl();
  // table data
  otherCutColumns: string[] = ['srNo', 'fromYear', 'fromMonth', 'toYear', 'toManth', 'amount', 'remarks', 'action'];
  otherCut = new MatTableDataSource(otherCut);
  // closes dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
  // closes dialog box
  saveRevice() {
    this.dialogRef.close();
  }
  // adds row in other cut
  otherCutAddRow() {
    const otherCutDate = this.otherCut.data;
    otherCutDate.push({
      fromYear: '',
      fromMonth: '',
      toYear: '',
      toManth: '',
      amount: '',
      remarks: '',
    });
    this.otherCut.data = otherCutDate;
  }
  // deletes row in other cut
  otherCutDataRow(index) {
    this.otherCut.data.splice(index, 1);
    this.otherCut = new MatTableDataSource(this.otherCut.data);
  }

}

// arrear details
@Component({
  selector: 'app-arrear-detail-dialog',
  templateUrl: 'arrearDetail-dialog.html',
  styleUrls: ['./pension-details.component.css']
})
export class ArrearDetailComponent {
  // lists
  finYear: ListValue[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' }
  ];
  fromMonths_list: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Septembet' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  constructor(
    public dialogRef: MatDialogRef<ArrearDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  // form controls
  finYearCtrl: FormControl = new FormControl();
  fromMonthsCtrl: FormControl = new FormControl();
  // table data
  arrearColumns: string[] = ['srNo', 'amount', 'fromMonth', 'fromYear', 'toMonth', 'toYear', 'remarks', 'action'];
  arrear = new MatTableDataSource(Arriar);
  // closes dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
  // closes dialog box
  saveRevice() {
    this.dialogRef.close();
  }
  // adds row in arrear data
  otherCutAddRow() {
    const otherCutDate = this.arrear.data;
    otherCutDate.push({

      fromMonth: '',
      toYear: '',

      amount: '',
      remarks: '',
    });
    this.arrear.data = otherCutDate;
  }
  // deletes row in arrear data
  otherCutDataRow(index) {
    this.arrear.data.splice(index, 1);
    this.arrear = new MatTableDataSource(this.arrear.data);
  }
}

// special cut
@Component({
  selector: 'app-special-cut-dialog',
  templateUrl: 'specialCut-dialog.html',
  styleUrls: ['./pension-details.component.css']
})
export class SpecialCutComponent {
  // lists
  finYear: ListValue[] = [
    { value: '1', viewValue: '2019' },
    { value: '2', viewValue: '2020' }
  ];
  fromMonths_list: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Septembet' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];


  constructor(
    public dialogRef: MatDialogRef<SpecialCutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  // form control
  finYearCtrl: FormControl = new FormControl();
  fromMonthsCtrl: FormControl = new FormControl();
  // table data
  pensionCutColumns: string[] = ['srNo', 'fromYear', 'fromMonth', 'toYear', 'toManth', 'amount', 'remarks', 'action'];
  specialCut = new MatTableDataSource(Arriar);
  // closes dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
  // closes dialog box
  saveRevice() {
    this.dialogRef.close();
  }
  // adds row in special cut
  otherCutAddRow() {
    const otherCutDate = this.specialCut.data;
    otherCutDate.push({

      fromMonth: '',
      toYear: '',

      amount: '',
      remarks: '',
    });
    this.specialCut.data = otherCutDate;
  }
  // deletes row in special cut
  otherCutDataRow(index) {
    this.specialCut.data.splice(index, 1);
    this.specialCut = new MatTableDataSource(this.specialCut.data);
  }
}

@Component({
  selector: 'app-pension-details',
  templateUrl: './pension-details.component.html',
  styleUrls: ['./pension-details.component.css']
})
export class PensionDetailsComponent implements OnInit {
  // variables
  pdetail = 'Pension Details';
  home = 'Home';
  ppo = 'PPO';
  createBill = 'Pension Details';
  billPreForm = 'Pension Details';
  details = 'Basic Details';
  personal = 'Personal';
  cvpl = 'CVP';
  dcrg = 'DCRG';
  originalPension = 'Original Pension';
  reducedPension = 'Reduced Pension';
  rop = 'ROP Details';
  pensionDetails = 'Pension Details';
  penDetail = 'Pensioner Details';
  officeDetail = 'Office Details';
  familyDetail = 'Family Details';
  nomineeDetail = 'Nominee Details ';
  remarks = 'Remarks';
  required = false;
  aliveRequired = false;
  requiredCvp = false;
  reMarriedDate = false;
  isToTo = false;
  LPCCertificated = false;
  allowOtherFormAuthorityField = false;
  allowOtherLPCAuthorityField = false;
  tabDisable: Boolean = true;
  isSelectedRemarried = false;
  myModel = true;
  selectedIndex: number;
  maAmount = '0.00';
  todayDate = Date.now();
  pensionDetailForm: FormGroup;
  pensionerDetailForm: FormGroup;
  nationalityType = '';
  maritalStatus = '';

  // lists
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  PensionCList: ListValue[] = [
    { value: '1', viewValue: 'Final ' },
    { value: '2', viewValue: 'Provisional ' }
  ];

  caseMrType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];

  sanctionAuType: ListValue[] = [
    { value: '1', viewValue: 'DPPF' },
  ];

  headCodeType: ListValue[] = [
    { value: '1', viewValue: '1: 2071 Pension And Other Retirement Benefits To Civil Pensioner' },
    { value: '2', viewValue: '2: 2071 Pension And Other Retirement Benefits To Civil, Family Pensioner' },
    { value: '3', viewValue: '3: 2071 Pension And Other Retirement Benefits To Family Pensioner' },
    { value: '4', viewValue: '4: 2071 Pension And Other Retirement Benefits To School & College Pensioner' },
    { value: '5', viewValue: '5: 2071 Provisional Pension To School And College Pensioner' },
    { value: '6', viewValue: '6: 2071 Provisional Pension To Civil Pensioner' },
    { value: '7', viewValue: '7: 2071 Provisional Pension To Civil Family Pensioner' },
    { value: '8', viewValue: '8: 2071 Pension And Other Retirement Benefits Civil Pensioner Fixed Pension' },
    { value: '9', viewValue: '9: 2071 Pension Old Pensioner' },
    { value: '10', viewValue: '10: 2071 Pension State Pensioner' },
    { value: '11', viewValue: '11: 2071 Pension To Primary Teachers' },
    { value: '12', viewValue: '12: 2071 Family Pension To Primary Teachers' },
    { value: '13', viewValue: '13: 2071 Pension To Panchayat Employees' },
    { value: '14', viewValue: '14: 2071 Family Pension To Panchayat Employees' },
    { value: '15', viewValue: '15: 2071 Pension Fixed To Panchayat Employees' },
  ];
  schemeType: ListValue[] = [
    { value: '1', viewValue: 'IRLA ' },
    { value: '2', viewValue: 'PSB ' },
    { value: '3', viewValue: 'Money ' },
    { value: '4', viewValue: 'Counter' },
  ];
  calType: ListValue[] = [
    { value: '1', viewValue: ' Auto' },
    { value: '2', viewValue: 'Manual' },
  ];

  PensionType: ListValue[] = [
    { value: '1', viewValue: ' Absorption' },
    { value: '2', viewValue: 'Compensation' },
    { value: '3', viewValue: 'Companionate' },
    { value: '5', viewValue: 'Family' },
    { value: '6', viewValue: ' Family (Lost)' },
    { value: '7', viewValue: 'Invalid' },
    { value: '8', viewValue: 'Other' },
    { value: '9', viewValue: 'Superannuation' },
    { value: '10', viewValue: 'Voluntary' },
    { value: '12', viewValue: 'Wound & Injury' },
    { value: '13', viewValue: 'Retiring' },
    { value: '14', viewValue: 'Parvashi' },
    { value: '15', viewValue: 'Special (Addl.)' },
    { value: '16', viewValue: 'Ex. Gratia' },
    { value: '17', viewValue: 'Disability' },
    { value: '18', viewValue: 'Freedom Fighter' },
    { value: '19', viewValue: 'Swatantra Sanman' },
  ];
  pensionStatusType: ListValue[] = [
    { value: '1', viewValue: ' Continue' },
    { value: '2', viewValue: 'Continue - Transfer Form' },
    { value: '2', viewValue: 'With Held' },
    { value: '2', viewValue: 'Close' },
  ];

  conditionalPPO: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];

  GenderType: ListValue[] = [
    { value: '1', viewValue: 'Male  ' },
    { value: '2', viewValue: 'FeMale  ' }
  ];
  aliveType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];
  seenType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];

  CVPType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];

  dcrgType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];
  DPType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];
  mediaclAllowReq: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];
  pensionMonthly: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];
  PaymentType: ListValue[] = [
    { value: '1', viewValue: 'e-Payment' },
    { value: '2', viewValue: 'Cheque' }
  ];

  ROPType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' },
    { value: '2', viewValue: 'Paid ' }
  ];

  /* pensonerdetails */
  powerAttorneyType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];

  State_list: ListValue[] = [
    { value: '1', viewValue: 'Andhra Pradesh' },
    { value: '2', viewValue: 'Arunachal Pradesh' },
    { value: '3', viewValue: 'Assam' },
    { value: '4', viewValue: 'Bihar' },
    { value: '5', viewValue: 'Chhattisgarh' },
    { value: '6', viewValue: 'Goa' },
    { value: '7', viewValue: 'Gujarat' },
    { value: '8', viewValue: 'Haryana' },
    { value: '9', viewValue: 'Himachal Pradesh' },
  ];

  nDistrict_list: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Dahod' },
    { value: '8', viewValue: 'Dang' },
    { value: '9', viewValue: 'Gandhinagar' },
  ];
  bank_list: ListValue[] = [
    { value: '1', viewValue: 'SBI' },
    { value: '2', viewValue: 'HDFC' },
    { value: '3', viewValue: 'PNB' },
    { value: '4', viewValue: 'State Bank Of india' },
  ];
  bankBar_list: ListValue[] = [
    { value: '1', viewValue: 'Gandhinagar' },
    { value: '2', viewValue: 'HDFC' },
    { value: '3', viewValue: 'PNB' },
  ];
  treasuryList: ListValue[] = [
    { value: '1', viewValue: 'Pension Payment office, Gandhinagar' },
    { value: '2', viewValue: 'treasury' },
    { value: '3', viewValue: 'treasury' }
  ];
  SubTreasuryList: ListValue[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Mehsana, Gandhinagar' },
    { value: '2', viewValue: 'treasury' },
    { value: '3', viewValue: 'treasury' }
  ];

  empDesignation_list: ListValue[] = [
    { value: '1', viewValue: 'Assistant Manager' },
    { value: '2', viewValue: 'Director' },
    { value: '3', viewValue: 'Dy.Manager ' },
    { value: '4', viewValue: 'Senior Assistant' },
  ];

  departmentlist: ListValue[] = [
    { value: '1', viewValue: 'Climate Change Department' },
    { value: '2', viewValue: 'Finance Department' },
  ];
  hodlist: ListValue[] = [
    { value: '1', viewValue: 'Gujarat Sales Tax Commission, Ahmedabad' },
    { value: '2', viewValue: 'Commissioner of Sales Tax' },
    { value: '3', viewValue: 'Examiner, Local Fund Account' },
  ];

  empClass_list: ListValue[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' },
    { value: '5', viewValue: 'No Grade' },
  ];
  cadreList: ListValue[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IFS' },
    { value: '3', viewValue: 'IPS' },
    { value: '4', viewValue: 'JUDGES' },
    { value: '5', viewValue: 'High Court JUDGES' },
    { value: '6', viewValue: 'Other' }
  ];

  issueTwinty: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  lpcCertiType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  authorityTwintyTwoType: ListValue[] = [
    { value: '1', viewValue: 'Rudra Panya' },
    { value: '2', viewValue: 'Maneesh Chaudhary' },
    { value: '3', viewValue: 'R R Pandya' },
    { value: '4', viewValue: 'M M Chaudhary' },
    { value: '5', viewValue: 'Other' },
  ];

  lpcAuthType: ListValue[] = [
    { value: '1', viewValue: 'Rudra Panya' },
    { value: '2', viewValue: 'Maneesh Chaudhary' },
    { value: '3', viewValue: 'R R Pandya' },
    { value: '4', viewValue: 'M M Chaudhary' },
    { value: '5', viewValue: 'Other' },
  ];
  reMarriedType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  RelationType: ListValue[] = [
    { value: '1', viewValue: 'Spouse' },
    { value: '2', viewValue: 'Father' },
    { value: '3', viewValue: 'Mother' },
    { value: '4', viewValue: 'Son' },
    { value: '5', viewValue: 'Daughter' },
    { value: '6', viewValue: 'Other' },
  ];
  relationForSingle_list: ListValue[] = [
    { value: '1', viewValue: 'Father' },
    { value: '2', viewValue: 'Mother' },
    { value: '3', viewValue: 'Brother' },
    { value: '4', viewValue: 'Sister' },
    { value: '5', viewValue: 'Other' },
  ];
  PhysicallyType: ListValue[] = [
    { value: '1', viewValue: 'Mentally Retire' },
    { value: '2', viewValue: 'Physically Handicap' },
  ];

  rops: ListValue[] = [
    { value: '1', viewValue: 'Apply' },
    { value: '2', viewValue: 'Paid' },
  ];

  nationality_list: ListValue[] = [
    { value: '1', viewValue: 'India' },
    { value: '2', viewValue: 'Dual' },
    { value: '3', viewValue: 'Other' }
  ];
  nroAccount_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  maritalStatus_list: ListValue[] = [
    { value: '1', viewValue: 'Single' },
    { value: '2', viewValue: 'Married' },
    { value: '3', viewValue: 'Widowed' },
    { value: '4', viewValue: 'Divorced' },
    { value: '5', viewValue: 'Separated' }
  ];

  // form controls
  disableSelectEightySix = new FormControl(false);
  disableSelectNintySix = new FormControl(false);
  disableSelectTwoSix = new FormControl(false);
  disableSelectTwoSixten = new FormControl(false);
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  PensionClassCtrl: FormControl = new FormControl();
  caseMrCtrl: FormControl = new FormControl();
  sanctionAuCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();
  schemeCtrl: FormControl = new FormControl();
  calcCtrl: FormControl = new FormControl();
  penSionCtrl: FormControl = new FormControl();
  penSionStatusCtrl: FormControl = new FormControl();
  condiPPOCtrl: FormControl = new FormControl();
  GenderCtrl: FormControl = new FormControl();
  aliveCtrl: FormControl = new FormControl();
  seenCtrl: FormControl = new FormControl();
  CVPCtrl: FormControl = new FormControl();
  DCRGCtrl: FormControl = new FormControl();
  dpMegCtrl: FormControl = new FormControl();
  medicalCtrl: FormControl = new FormControl();
  pensionCtrl: FormControl = new FormControl();
  paymentCtrl: FormControl = new FormControl();
  ropCtrl: FormControl = new FormControl();

  /* pensonerdetails */
  powerAttorneytCtrl: FormControl = new FormControl();
  nStateCtrl: FormControl = new FormControl();
  nDistrictCtrl: FormControl = new FormControl();
  bankCtrl: FormControl = new FormControl();
  bankBarCtrl: FormControl = new FormControl();
  treasuryCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  empDesignationCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  hodCtrl: FormControl = new FormControl();
  empClassCtrl: FormControl = new FormControl();
  cadreCtrl: FormControl = new FormControl();
  issueTwintyTwoCtrl: FormControl = new FormControl();
  lpcCertiCtrl: FormControl = new FormControl();
  authorityTwintyTwoCtrl: FormControl = new FormControl();
  authCtrl: FormControl = new FormControl();
  nationalityCtrl: FormControl = new FormControl();
  reMarriedCtrl: FormControl = new FormControl();
  RelationCtrl: FormControl = new FormControl();
  phHdiCtrl: FormControl = new FormControl();
  bankNameCtrl: FormControl = new FormControl();
  bankBarhCtrl: FormControl = new FormControl();
  lpcDate = new FormControl();
  issueDateTwo = new FormControl();
  ppoDate = new FormControl();
  ppoInWDate = new FormControl();
  dob = new FormControl();
  doj = new FormControl();
  dor = new FormControl();
  commencementDate = new FormControl();
  seenDate = new FormControl();
  lastpadDate = new FormControl();
  nroAccountctrl: FormControl = new FormControl();
  maritalStatusCtrl: FormControl = new FormControl();

  // table data
  familyList: any[] = [
    {
      name: '', relation: '', dateBirth: '', minor: true,
      married: true, marrieDadte: '10-02-2020', salary: '0',
      physicallyHandi: '', gardinName: '', deathDate: '', accountNo: '',
      pan: '', ifscCode: '', adharCard: '', mobileNo: ''
    },
  ];

  nomineeList: any[] = [
    { name: '', percentage: '', bankName: '', bankBrance: '', accountNo: '', ifscCode: '' }
  ];

  familyDetailSource = new MatTableDataSource(this.familyList);
  familyDetailColumn = ['relation', 'name', 'dateBirth',
    'minor', 'married', 'marrieDadte', 'salary', 'physicallyHandi', 'disabilityCertificateDate',
    'gardinName', 'deathDate', 'accountNo', 'pan', 'ifscCode', 'adharCard', 'mobileNo', 'pensionStartDate', 'pensionEndDate', 'action'];

  nomineeDetailSource = new MatTableDataSource(this.nomineeList);
  nomineeColumn = ['relation', 'name', 'percentage', 'bankName', 'bankBrance', 'accountNo', 'ifscCode', 'action'];

  penHistorySource = new MatTableDataSource([]);
  prnsionColumn = ['srNo', 'ppoNo', 'billType', 'payMode', 'padAmount', 'bakBranch', 'location', 'status'];


  LoadHistorySource = new MatTableDataSource([]);
  LoadHistoryColumn = ['srNo', 'ppoNO', 'pensionerName', 'paddate', 'amount', 'paymentType', 'name'];

  LoadRecoverySource = new MatTableDataSource([]);
  LoadRecoveryColumn = ['srNo', 'year', 'month', 'recoveryBy', 'totalRecovery', 'remainingRecovery', 'chequeNo', 'cheqDate',
    'challanNo', 'chalanDate', 'recoveryAmount', 'status'];


  MedicalReimbursementSource = new MatTableDataSource([]);
  MedicalReimbursemenColumn = ['srNo', 'patienName', 'relation', 'age',
    'hospitalType', 'treatmentFrom', 'treatmentTo', 'inwardNo', 'inwardDate', 'rebAmount',
    'grantAmount', 'indoor', 'status'];

  componentWisePensionSource = new MatTableDataSource([]);
  componentWisePensionColumn = ['srNo', 'location',
    'billcreate', 'billStatus', 'basicPension',
    'dpAmount', 'tiAmount', 'maAmount', 'personalPension', 'irAmount',
    'otherBenefit', 'arrearAmount', 'tiArrearAmount', 'reliefAmount',
    'moCommision', 'cvpAmount', 'dcrgAmount', 'pensionCutAmount',
    'cvpMonthly', 'specialCutAmount', 'itCutAmount', 'otherRecovery', 'netAmount', 'billType', 'bankBranch'];

  /* variables for duplicate link start*/
  url = '';
  isDuplicatePage: Boolean;
  showField = false;
  finalCaseForm: FormGroup;
  /* variables for duplicate link end */

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef,
    private router: Router, private dataRoute: ActivatedRoute) {
    // fetches current url
    this.url = this.dataRoute.snapshot['_routerState'].url;

  }
  // gets tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }
  // go to next tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  ngOnInit() {

    // sets isDuplicate value for ppo/pension-details url
    if (this.url === '/ppo/pension-detail') {
      this.isDuplicatePage = false;
    } else if (this.url === '/ppo/pension-details') {
      this.isDuplicatePage = true;
    }

    // form for duplicate link
    this.finalCaseForm = this.fb.group({
      finalCase: ['']
    });

    this.pensionForm();
    this.pensionerForm();
    this.lpcDate.patchValue(new Date('01/02/2019'));
    this.issueDateTwo.patchValue(new Date('01/01/2019'));
    this.ppoDate.patchValue(new Date('10/12/2020'));
    this.ppoInWDate.patchValue(new Date('04/29/2019'));
    this.dob.patchValue(new Date('01/01/1951'));
    this.doj.patchValue(new Date('02/21/1983'));
    this.dor.patchValue(new Date('01/31/2011'));
    this.commencementDate.patchValue(new Date('01/02/2011'));
    this.lastpadDate.patchValue(new Date('02/02/2020'));
    this.seenDate.patchValue(new Date('01/02/2011'));

  }
  // displays final case field if it is a duplicate link and button is clicked
  convertToNormal() {
    this.showField = true;
  }
  // sets maAmount value
  changeMaAmount(data: any) {
    if (data.value === '1') { this.maAmount = '350.00'; }
    if (data.value === '2') { this.maAmount = '0.00'; }
  }
  pensionForm() {
    this.pensionDetailForm = this.fb.group({
      pensionClass: ['1'],
      caseMr: ['2'],
      sanctionAu: ['1'],
      registerDate: [''],
      sanctionletterNo: ['1234'],
      ppoNo: ['L/GNR/STATE/CL-IV/P/011941'],
      ppoDate: new Date('02/02/2012'),
      ppoInWdat: [''],
      revision: ['0.00'],
      headCode: ['1'],
      description: ['2071 Pension And Other Retirement Benefits'],
      scheme: ['4'],
      RegNumber: ['1002'],
      regNumberDate: [''],
      calctype: ['1'],
      penType: ['8'],
      pensionStatus: ['1'],
      linkPPONo: ['L/GNR/STATE/CL-IV/P/011950'],
      legerNo: ['12'],
      pageNo: ['15'],
      trNo: [''],
      condiPPO: [''],
      firstName: ['Mr. RAMATUJI'],
      middleName: ['KODARJI'],
      surname: ['THAKOR'],
      gender: ['1'],
      dob: ['01/01/1951'],
      doj: ['21/02/1983'],
      dor: ['31/01/2011'],
      commencementDate: ['01/02/2011'],
      alive: ['2'],
      dateDeath: [''],
      seen: ['1'],
      seenDate: ['01/02/2011'],
      totalService: ['21 Days, 11 Months, 08 Years'],
      lastPay: ['7400.00'],
      payscale: ['4440-7440'],
      gradePay: ['1300.00'],
      lastpadDate: ['10/02/2008'],
      lastPadAmount: ['5000.00'],
      cvpPaid: ['2'],
      dcrg: ['2'],
      dcrgDate: ['12/10/2010'],
      scvpoderNo: ['1002'],
      dcrgOrderNo: ['1001'],
      cvpAmount: ['171091.00'],
      dCRGAmount: ['176610.00'],
      withheldAmount: [''],
      cvpDate: ['31/01/2011'],
      restorationDate: ['15/10/2010'],
      da: ['45'],
      cvpEffectiveDate: [''],
      beforeBombay: ['0.00'],
      afterBombay: ['0.00'],
      afterGujarat: ['0.00'],
      redbeforeBombay: ['0.00'],
      redafterBombay: ['0.00'],
      redafterGujarat: ['0.00'],
      dpMeg: ['2'],
      pensionPay: ['8700.00'],
      sanctionAmount: ['0.00'],
      basicPension: ['4350.00'],
      pensionCutAmut: ['0.00'],
      dp: ['0.00'],
      dpAmount: ['0.00'],
      adpAmount: ['0'],
      cvpMont: ['0.00'],
      reducedPension: ['4350.00'],
      iT: ['136.00'],
      iTAmount: ['0.00'],
      mediaclAllow: ['2'],
      mAAmount: ['0.00'],
      pfFirstDate: ['31/12/2015'],
      personalPension: ['0.00'],
      fpAmount: ['4350.00'],
      irAmount: ['0.00'],
      fpTwoDate: ['01/01/2016'],
      otherBenifit: ['0.00'],
      fpAmountTwo: ['01/01/2016'],
      arrearsAmount: ['0.00'],
      ppoNoSecound: ['L/GNR/STATE/CL-IV/P/011990'],
      specialCut: ['0.00'],
      ppoEndDate: ['12/12/2020'],
      iTAmountSec: ['0.00'],
      otherReq: ['0.00'],
      fpPayment: ['1'],
      netPension: ['4350.00'],
      domesticHelpAmt: [''],
      courtName: [''],
      courtIfscCode: [''],
      accountNo: [''],
      amt: [''],
      basicItCal: ['']
    });
  }
  pensionerForm() {
    this.pensionerDetailForm = this.fb.group({
      name: ['Rajive'],
      powerAttorney: ['2'],
      address: ['Sub Treasury Office, Mehsana, Gandhinagar'],
      mobileNo: ['9898989898'],
      state: ['7'],
      nDistrict: ['9'],
      identificationMark: ['Mole on face'],
      height: ['5.10'],
      bankCode: ['140005'],
      penCard: ['AAAAA1111A'],
      bankName: ['4'],
      bankBarName: ['1'],
      accountNo: ['12345678901'],
      PensionerEmail: ['a@a.com'],
      bankEmail: ['b@b.com'],
      ofcEmail: ['c@c.com'],
      officeAddress: ['Sub Treasury Office, Mehsana, Gandhinagar'],
      designation: ['1'],
      department: ['1'],
      hod: ['1'],
      empClass: ['3'],
      cadre: ['1'],
      issueTwintyTwo: ['2'],
      lpcCerti: ['2'],
      authorityTwintyTwo: ['1'],
      authlpcCerti: ['2'],
      otherIssueAutTO: [''],
      otherIssueLPC: [''],
      issueDateTwo: ['01/01/2019'],
      lpcDate: ['01/02/2019'],
      adharCard: ['1234 5678 9012'],
      ifscCode: [''],
      nationality: [''],
      nroAccount: [''],
      maritalStatus: [''],

    });
  }
  // deletes row in family details
  deletfamilyDataRow(index) {
    this.familyDetailSource.data.splice(index, 1);
    this.familyDetailSource = new MatTableDataSource(this.familyDetailSource.data);
  }

  // deletes row in nominee details
  deletNomineeDataRow(index) {
    this.nomineeDetailSource.data.splice(index, 1);
    this.nomineeDetailSource = new MatTableDataSource(this.nomineeDetailSource.data);
  }
  // adds row in family details
  addRow() {
    const familyDetail = this.familyDetailSource.data;
    familyDetail.push({
      name: '',
      relation: '',
      dateBirth: '',
      minor: true,
      married: true,
      marrieDadte: '',
      salary: '',
      physicallyHandi: '',
      gardinName: '',
      deathDate: '',
      accountNo: '',
      pan: '',
      ifscCode: '',
      adharCard: '',
      mobileNo: ''
    });
    this.familyDetailSource.data = familyDetail;
  }

  // adds row in nominee details
  addRownominee() {
    const p_Data = this.nomineeDetailSource.data;
    p_Data.push({
      name: '',
      percentage: '',
      bankName: '',
      bankBrance: '',
      accountNo: '',
      ifscCode: ''
    });
    this.nomineeDetailSource.data = p_Data;
  }
  // selects ppo
  ppoSelection(data) {
    if (data.value === '1') {
      this.required = true;
    }
    if (data.value === '2') {
      this.required = false;
    }
  }
  // selects alive or dead
  aliveSelection(data) {
    if (data.value === '1') {
      this.aliveRequired = false;
      this.pensionDetailForm.controls['dateDeath'].setValue('');
    }
    if (data.value === '2') {
      this.aliveRequired = true;
    }
  }

  // selects cvp paid
  CVPpaid(data) {
    if (data.value === '1') {
      this.requiredCvp = true;
    }
    if (data.value === '2') {
      this.requiredCvp = false;
    }
  }

  // selects remarried or not
  reMarried(data) {
    if (data.value === '1') {
      this.reMarriedDate = true;
    }
    if (data.value === '2') {
      this.reMarriedDate = false;
    }
  }

  // formtoto data
  formToTo(data) {
    if (data.value === '1') {
      this.isToTo = true;
    }
    if (data.value === '2') {
      this.isToTo = false;
    }
  }
  // shows and hides other authority field
  showOtherFormAuthorityField(data) {
    if (data.value === '5') {
      this.allowOtherFormAuthorityField = true;
    } else {
      this.allowOtherFormAuthorityField = false;
    }
  }

  // shows and hides other lpc authority field
  showOtherLPCAuthorityField(data) {
    if (data.value === '5') {
      this.allowOtherLPCAuthorityField = true;
    } else {
      this.allowOtherLPCAuthorityField = false;
    }
  }

  // formlpc data
  formLPC(data) {
    if (data.value === '1') {
      this.LPCCertificated = true;
    }
    if (data.value === '2') {
      this.LPCCertificated = false;
    }
  }

  // opens photo
  openFileSelector1() {
    this.el.nativeElement.querySelector('#fileBrowse-photo').click();
  }
  // opens signature
  openFileSelector2() {
    this.el.nativeElement.querySelector('#fileBrowse-signature').click();
  }

  // opens revision dialog
  openDialog() {
    const dialogRef = this.dialog.open(RevisionDialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  // opens pension cut dialog
  penSionCutPopup() {
    const dialogRef = this.dialog.open(PensionCutComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // openss other benefit dialog
  otherBenifitPopup() {
    const dialogRef = this.dialog.open(OtherBenifitComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // opens withheld amt dialog box
  withheldAmtPopup() {
    const dialogRef = this.dialog.open(WithheldAmtComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  // opens arrear details dialog
  arrearDetails() {
    const dialogRef = this.dialog.open(ArrearDetailComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // opens special cut dialog
  specialCutPopup() {
    const dialogRef = this.dialog.open(SpecialCutComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // opens cvp amt dialog
  CVPAmountPopup() {
    const dialogRef = this.dialog.open(CvpAmountDialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  // opens dcrg amt dialog
  DCRGAmountPopup() {
    const dialogRef = this.dialog.open(DcrgAmountDialogComponent, {
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  // routing
  goToRecovery() {
    this.router.navigate(['/ppo/recovery-details']);
  }
  // toggles isMarrried
  enableRemarriedDate() {
    this.isSelectedRemarried = !this.isSelectedRemarried;
  }
  // selects nationality
  selectNationality(type) {
    this.nationalityType = type;
  }
  // selects marital status
  selectMaritalStatus(type) {
    this.maritalStatus = type;
  }
}
/*end componet*/
