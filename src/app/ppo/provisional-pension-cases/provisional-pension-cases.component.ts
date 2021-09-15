import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { Family } from 'src/app/model/ppo';

@Component({
  selector: 'app-provisional-pension-cases',
  templateUrl: './provisional-pension-cases.component.html',
  styleUrls: ['./provisional-pension-cases.component.css']
})
export class ProvisionalPensionCasesComponent implements OnInit {

  selectedIndex: number;
  tabDisable: Boolean = true;
  fileData;
  fileDetailsEmp: Boolean = false;
  fileBrowseEmp: Boolean = true;
  listshow: Boolean = false;
  todayDate = Date.now();
  pensionDetailForm: FormGroup;

  // lists
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  pensionCList: ListValue[] = [
    { value: '1', viewValue: 'Final ' },
    { value: '2', viewValue: 'Provisional ' }
  ];

  caseMrType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];

  sanctionAuType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
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

  pensionType: ListValue[] = [
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

  genderType: ListValue[] = [
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

  cvpType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];

  dcrgType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];
  dpType: ListValue[] = [
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
  paymentType: ListValue[] = [
    { value: '1', viewValue: 'ePayment' },
    { value: '2', viewValue: 'cheque' }
  ];

  ropType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' },
    { value: '2', viewValue: 'Paid ' }
  ];

  /* pensionerdetails */
  cadreType: ListValue[] = [
    { value: '1', viewValue: 'Yes ' },
    { value: '2', viewValue: 'No ' }
  ];

  stateList: ListValue[] = [
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

  nDistrictList: ListValue[] = [
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
  bankList: ListValue[] = [
    { value: '1', viewValue: 'SBI' },
    { value: '2', viewValue: 'HDFC' },
    { value: '3', viewValue: 'PNB' },
  ];
  bankBarList: ListValue[] = [
    { value: '1', viewValue: 'SBI' },
    { value: '2', viewValue: 'HDFC' },
    { value: '3', viewValue: 'PNB' },
  ];
  treasuryList: ListValue[] = [
    { value: '1', viewValue: 'treasury' },
    { value: '2', viewValue: 'treasury' },
    { value: '3', viewValue: 'treasury' }
  ];
  subTreasuryList: ListValue[] = [
    { value: '1', viewValue: 'treasury' },
    { value: '2', viewValue: 'treasury' },
    { value: '3', viewValue: 'treasury' }
  ];

  empDesignationList: ListValue[] = [
    { value: '1', viewValue: 'Assistant Manager' },
    { value: '2', viewValue: 'Director' },
    { value: '3', viewValue: 'Dy.Manager ' },
    { value: '4', viewValue: 'Senior Assistant' },
  ];

  departmentList: ListValue[] = [
    { value: '1', viewValue: 'Government Employee' },
    { value: '2', viewValue: 'Panchayat' },
    { value: '3', viewValue: 'GSRTC' },
    { value: '4', viewValue: 'IPS' },
  ];
  hodList: ListValue[] = [
    { value: '1', viewValue: 'hod1' },
    { value: '2', viewValue: 'hod2' },
    { value: '3', viewValue: 'hod3' },
    { value: '4', viewValue: 'hod4' },
  ];

  empClassList: ListValue[] = [
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

  issueTwenty: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  lpcCertiType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  authorityTwentyTwoType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  lpcAuthType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  reMarriedType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  relationType: ListValue[] = [
    { value: '1', viewValue: 'Spouse' },
    { value: '2', viewValue: 'Father' },
    { value: '3', viewValue: 'Mother' },
    { value: '4', viewValue: 'Son' },
    { value: '5', viewValue: 'Daughter' },
    { value: '6', viewValue: 'Other' },
  ];

  physicallyType: ListValue[] = [
    { value: '1', viewValue: 'Mentally Retire' },
    { value: '2', viewValue: 'Physically Handicap' },
  ];

  rops: ListValue[] = [
    { value: '1', viewValue: 'Apply' },
    { value: '2', viewValue: 'Paid' },
  ];

  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved' },
    { value: '2', viewValue: 'Forwarded to Verifier' },
    { value: '3', viewValue: 'Forwarded to Approver' },
    { value: '4', viewValue: 'Approved' },
  ];

  pensionerDetailForm: FormGroup;
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  disableSelect = new FormControl(false);
  pensionClassCtrl: FormControl = new FormControl();
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
  cadreCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
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
  issueTwentyTwoCtrl: FormControl = new FormControl();
  lpcCertiCtrl: FormControl = new FormControl();
  authorityTwentyTwoCtrl: FormControl = new FormControl();
  authCtrl: FormControl = new FormControl();
  reMarriedCtrl: FormControl = new FormControl();
  relationCtrl: FormControl = new FormControl();
  phHdiCtrl: FormControl = new FormControl();
  bankNameCtrl: FormControl = new FormControl();
  bankBarhCtrl: FormControl = new FormControl();

  // table data
  familyList: Family[] = [
    {
      name: '', relation: '', percentage: '', dateBirth: '', minor: true,
      married: true, marrieDadte: '10-02-2020', salary: 5215, physicallyHandi: '',
      gardinName: '', deathDate: '', accountNo: '', pan: '', ifscCode: '', adharCard: '', mobileNo: ''
    },
  ];

  familyDetailSource = new MatTableDataSource(this.familyList);
  familyDetailColumn = ['name', 'relation', 'percentage', 'dateBirth', 'minor',
    'married', 'marrieDadte', 'salary', 'physicallyHandi', 'gardinName', 'deathDate',
    'accountNo', 'pan', 'ifscCode', 'adharCard', 'mobileNo', 'action'];

  nomineeDetailSource = new MatTableDataSource(this.familyList);
  nomineeColumn = ['name', 'percentage', 'bankName', 'bankBrance', 'accountNo', 'ifscCode', 'action'];

  penHistorySource = new MatTableDataSource([]);
  prnsionColumn = ['ppoNo', 'billType', 'payMode', 'padAmount', 'bakBranch', 'location', 'status', 'totalAmount', 'AmountWord'];

  provisionalPensionCasesForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef) { }

  ngOnInit() {
    this.provisionalPensionCasesFormData();
  }

  provisionalPensionCasesFormData() {
    this.provisionalPensionCasesForm = this.fb.group({
      pensionClass: [''],
      caseMr: [''],
      sanctionAu: [''],
      sanctionletterNo: [''],
      ppoNo: [''],
      revision: [''],
      headCode: [''],
      description: [''],
      scheme: [''],
      regNumber: [''],
      calctype: [''],
      penType: [''],
      pensionStatus: [''],
      linkPPONo: [''],
      legerNo: [''],
      pageNo: [''],
      trNo: [''],
      condiPPO: [''],
      firstName: [''],
      middleName: [''],
      surname: [''],
      gender: [''],
      dob: [''],
      doj: [''],
      dor: [''],
      commencementDate: [''],
      alive: [''],
      dateDeath: [''],
      seen: [''],
      seenDate: [''],
      totalService: [''],
      lastPay: [''],
      payscale: [''],
      lastpadDate: [''],
      lastPadAmount: [''],
      adharCard: [''],
      panCard: [''],
      cvpPaid: [''],
      dcrg: [''],
      dcrgDate: [''],
      scvpoderNo: [''],
      dcrgOrderNo: [''],
      cvpAmount: [''],
      dCRGAmount: [''],
      withheldAmount: [''],
      cvpDate: [''],
      restorationDate: [''],
      da: [''],
      newDa: [''],
      cvpEffectiveDate: [''],
      beforeBombay: [''],
      afterBombay: [''],
      afterGujarat: [''],
      redbeforeBombay: [''],
      redafterBombay: [''],
      redafterGujarat: [''],
      dpMeg: [''],
      pensionPay: [''],
      sanctionAmount: [''],
      basicPension: [''],
      pensionCutAmut: [''],
      dp: [''],
      dpAmount: [''],
      adpAmount: [''],
      cvpMont: [''],
      ReducedPension: [''],
      iT: [''],
      iTAmount: [''],
      mediaclAllow: [''],
      mAAmount: [''],
      pfFirstDate: [''],
      personalPension: [''],
      fpOneDate: [''],
      fpAmount: [''],
      irAmount: [''],
      fpTwoDate: [''],
      otherBenifit: [''],
      fpAmountTwo: [''],
      arrearsAmount: [''],
      rop: [''],
      ppoNoSecound: [''],
      specialCut: [''],
      ppoEndDate: [''],
      iTAmountSec: [''],
      firstPension: [''],
      otherReq: [''],
      fpPayment: [''],
      netPension: [''],
      ledgerNo: [''],
      scheme2: [''],
      fpFor10Years: [''],
      residentialAddress: [''],
      officeAddress: [''],
      pinCode: [''],
      State: [''],
      nDistrict: [''],
      designation: [''],
      telephone: [''],
      otherDesignation: [''],
      accountNo: [''],
      ifscCode: [''],
      status: [''],
      cadre: ['']
    });
  }
  // photo upload related methods
  openFileSelector1() {
    this.el.nativeElement.querySelector('#fileBrowse-emp').click();
  }

  onFileSelection1(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.fileData = fileSelected.target.files[0];
      this.fileDetailsEmp = true;
    }
    this.fileBrowseEmp = false;
  }
  // goes to next tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

}
