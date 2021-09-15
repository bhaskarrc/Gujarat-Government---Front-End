import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DppfDialogBoxComponent } from './../dppf-dialog-box/dppf-dialog-box.component';
import { SearchInwardNoDppfComponent } from './../search-inward-no-dppf/search-inward-no-dppf.component';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DppfSearchEmployeeNumberComponent } from '../dppf-search-employee-number/dppf-search-employee-number.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { ServiceBreakDetail, AnnualIncrement, InwardCase } from '../../model/dppf';
import { DppfMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { PpnoListInterface } from 'src/app/model/ppo';
import { SearchReferenceNumberDppfComponent } from '../search-reference-number-dppf/search-reference-number-dppf.component';
import { Router } from '@angular/router';

declare function SetGujarati();
declare function SetEnglish();

@Component({
  selector: 'app-dppf-online-pension-case',
  templateUrl: './dppf-online-pension-case.component.html',
  styleUrls: ['./dppf-online-pension-case.component.css']
})
export class DppfOnlinePensionCaseComponent implements OnInit {
  // Lists
  PensioncaseTypeList: any[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Revision' },
  ];

  InwardTypeList: any[] = [
    { value: '1', viewValue: 'Pension Case' },
    { value: '2', viewValue: 'Serivce Certificate' },
    { value: '3', viewValue: 'Provisional Pension Case' },
    { value: '4', viewValue: 'NPS Gratuity' },
  ];

  typeOfROPList: any[] = [
    { value: '0', viewValue: 'ROP 1986' },
    { value: '1', viewValue: 'ROP 1998' },
    { value: '2', viewValue: 'ROP 2006' },
    { value: '3', viewValue: 'ROP 2016' },
  ];
  serviceTypeList: any[] = [
    { value: '1', viewValue: '1. state/panchayat' },
    { value: '2', viewValue: '2. municipal board' }
  ];

  typeOfPensionList: any[] = [
    { value: '1', viewValue: 'Retiring' },
    { value: '2', viewValue: 'Absorption' },
    { value: '3', viewValue: 'Compensation' },
    { value: '4', viewValue: 'Compassionate' },
    { value: '5', viewValue: 'Family' },
    { value: '6', viewValue: 'Family Lost' },
    { value: '7', viewValue: 'Invalid' },
    { value: '8', viewValue: 'Other' },
    { value: '9', viewValue: 'Superannuation' },
    { value: '10', viewValue: 'Wound and Injury' },
    { value: '11', viewValue: 'Voluntary' },
  ];
  typeOfPensionP3List: any[] = [
    { value: '1', viewValue: 'Family' },
    { value: '2', viewValue: 'Family Lost' }
  ];
  classPensionerType: ListValue[] = [
    { value: '1', viewValue: 'Govt Gazzeted' },
    { value: '2', viewValue: 'Govt Non Gazzeted' },
    { value: '3', viewValue: 'Non Govt Teaching Staff' },
    { value: '4', viewValue: 'Non Govt Non Teaching Staff' },
    { value: '6', viewValue: 'IAS' },
    { value: '7', viewValue: 'High Court Judges' },
    { value: '8', viewValue: 'Judges' },
    { value: '9', viewValue: 'Public Prosecutor' },
    { value: '10', viewValue: 'Class 4' },
    { value: '11', viewValue: 'Rojmadar' },
    { value: '12', viewValue: 'Kotwal' },
    { value: '13', viewValue: 'Doctor / Veterinary Doctor' },
    { value: '14', viewValue: 'Panchayat Teacher' },
    { value: '15', viewValue: 'Panchayat Employees' },
    { value: '16', viewValue: 'Freedom Fighter' },
    { value: '16', viewValue: 'Navnirman' },
    { value: '17', viewValue: 'Others' },
    { value: '18', viewValue: 'NON GOVERNMENT PRIMARY TEACHER' },
    { value: '19', viewValue: 'MUNICIPALITY EMPLOYEES' },
    { value: '20', viewValue: 'IPS' },
    { value: '21', viewValue: 'IFS' },
    { value: '22', viewValue: 'Private Primary Teaching Staff' },
    { value: '23', viewValue: 'MSB' },
  ];

  typeOfPensionerList: any[] = [
    { value: '1', viewValue: '' },
  ];

  sixthScaleList: any[] = [
    { value: '1', viewValue: '6500' },
    { value: '2', viewValue: '200' },
    { value: '3', viewValue: '10000' },
  ];

  sixthPayBandList: any[] = [
    { value: '1', viewValue: '9300-34800(PB2)' },
  ];

  sixthGradPayList: any[] = [
    { value: '1', viewValue: '4200' },
    { value: '2', viewValue: '4400' },
    { value: '3', viewValue: '4600' },
    { value: '4', viewValue: '5400' },
  ];

  retAgeOfTeacherList: any[] = [
    { value: '0', viewValue: '58' },
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '62' },
  ];

  DepartmentList: any[] = [
    { value: '1', viewValue: '' },
  ];

  lfOfficeList: any[] = [
    { value: '1', viewValue: '' },
  ];

  HodList: any[] = [
    { value: '1', viewValue: '' },
  ];

  groupList: any[] = [
    { value: '1', viewValue: 'Group 1' },
    { value: '2', viewValue: 'Group 2' },
  ];

  YesNoList: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  npaAppList: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  npaRateList: any[] = [
    { value: '1', viewValue: '15' },
    { value: '2', viewValue: '25' },
  ];
  disabilityTypeList: any[] = [
    { value: '1', viewValue: 'Physically Handicapped' },
    { value: '2', viewValue: 'Mentally Retired' },
    { value: '3', viewValue: 'Deaf and Dumb' },
  ];

  payType_list: ListValue[] = [
    { value: '1', viewValue: 'Regular Increment' },
    { value: '2', viewValue: 'Event Increment' },
    { value: '3', viewValue: 'Promotion' },
    { value: '4', viewValue: 'Higher Grade' },
    { value: '5', viewValue: 'Change Of Scale' },
    { value: '6', viewValue: 'Demotion' },
  ];
  // Table source
  familyDetailData: any[] = [
    {
      name: '', relation: '', married: '', dateOfBirth: '', age: '', majorMinor: '',
      disability: '', disabilityType: '', percentage: '', isNominee: '', percentageOfNomination: ''
    }
  ];
  familDetailsPTwoData: any[] = [
    {
      name: '', relation: '', married: '', dateOfBirth: '', age: '', majorMinor: '',
      disability: '', disabilityType: '', percentage: '', isNominee: '', percentageOfNomination: ''
    }
  ];
  provisionalPensionDetailslData: any[] = [
    {
      provisionalPension: '',
      group: '',
      ppFromDate: '',
      ppToDate: '',
      provisionalDcrg: '',
      pdFromDate: '',
      pdToDate: '',
      provisionalFp1: '',
      pfFromDate: '',
      pfToDate: '',
      provisional: '',
      pFromDate: '',
      pToDate: '',
      treasuryPpo: '',
      sto: '',
    }
  ];

  serviceBreakDetailData: ServiceBreakDetail[] = [
    {
      serviceBreakType: '',
      breakFromDate: undefined,
      breakToDate: undefined,
      breakofParticularPeriod: ''
    }
  ];
  annualIncrementData: AnnualIncrement[] = [
    {
      incrementDate: undefined,
      incrementAmount: '',
      basic: '',
      gradePay: '',
      payType: '',
    }
  ];


  pensionDetailsData: any[] = [{
    pensionFromDate: new Date('06-01-2020'),
    pensionToDate: new Date('06-01-2020'),
    pensionNoOfMonths: '1',
    pensionNoOfDays: '10',
    basic: '10000',
    daAmount: '1000',
    npaAmount: '1200',
    gradePay: '1909',
    total: '10101',
  }];
  serviceDetailsPFiveData: any[] = [{
    instituteNameService: '',
    serviceFromDate: '',
    serviceToDate: '',
    totalService: '',
    pensionableService: '',
  }];


  recoveryDetailData: any[] = [
    {
      recoveryType: '',
      accountNumber: '',
      majorHead: '',
      amount: '',
      recoveryFrom: '',
      amountOfRecovery: ''
    }
  ];

  pensionCutData: any[] = [
    {
      cutType: '',
      perCut: '',
      amountToBeCut: '',
      numberOfYears: '',
      numberOfMonths: '',
      orderNumber: '',
      orderDate: undefined
    }
  ];
  browseData: any[] = [
    {
      attachmentType: '1',
      name: undefined,
      file: undefined
    },
    {
      attachmentType: '2',
      name: undefined,
      file: undefined
    },
  ];


  witnessData: any[] = [{
    fullName: '',
    address: '',
  }];

  // Service Tab tables data
  serviceDetailsPFiveColumns = [
    'srno',
    'instituteNameService',
    'serviceFromDate',
    'serviceToDate',
    'totalService',
    'pensionableService',
    'action',
  ];
  witnessColumns = [
    'srno',
    'fullName',
    'address',
    'action',
  ];
  supportingDocument_list: ListValue[] = [
    { value: '', viewValue: 'Photo' },
    { value: '', viewValue: 'Signature' }
  ];

  guardianData: any[] = [
    {
      attachmentType: '1',
      name: undefined,
      file: undefined
    },
    {
      attachmentType: '2',
      name: undefined,
      file: undefined
    },
  ];
  pantion_data_table: InwardCase[] = [
    {
      frmDate: '',
      toDate: '',
      serPlace: ' ',
      serType: '',
      recoveryIf: '',
    },
  ];

  guardianColumns = [
    'srno',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];

  displayedBrowseColumns = [
    'srno',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  pensionDetailsColumn = [
    'pensionFromDate', 'pensionToDate', 'pensionNoOfMonths', 'pensionNoOfDays', 'basic',
    'gradePay', 'npaAmount', 'daAmount', 'total'
  ];
  recoveryDetailColumn = [
    'recoveryType', 'accountNumber', 'majorHead', 'amount', 'recoveryFrom', 'amountOfRecovery', 'action'
  ];
  pensionCutColumn = [
    'cutType', 'perCut', 'amount', 'amountToBeCut', 'numberOfYears', 'numberOfMonths', 'orderNumber', 'orderDate', 'action'
  ];

  annualIncrementColumn = [
    'incrementDate', 'incrementAmount', 'basic', 'gradePay', 'payType', 'action'
  ];

  serviceBreakColumn = [
    'serviceBreakType', 'breakFromDate', 'breakToDate', 'breakofParticularPeriod', 'action'
  ];
  provisionalPensionDetailsColumns = [
    'srno',
    'orderNo',
    'orderDate',
    'provisionalPension',
    'ppFromDate',
    'ppToDate',
    'provisionalDcrg',
    'pdFromDate',
    'pdToDate',
    'provisionalFp1',
    'pfFromDate',
    'pfToDate',
    'provisional',
    'pFromDate',
    'pToDate',
    'treasuryPpo',
    'sto',
    'action',

  ];
  familyDetailColumns = [
    'srno', 'name', 'relation', 'married', 'dateOfBirth', 'age', 'majorMinor', 'disability',
    'disabilityType', 'guardianName', 'relationWithGuardian', 'guardianAdd', 'percentage', 'isNominee',
    'percentageOfNomination', 'ifDead', 'action'
  ];
  familyDetailPTwoColumns = [
    'srno', 'name', 'relation', 'married', 'dateOfBirth', 'age', 'majorMinor', 'disability',
    'disabilityType', 'guardianName', 'relationWithGuardian', 'guardianAdd', 'percentage', 'isNominee',
    'percentageOfNomination', 'ifDead', 'action'
  ];

  displayedColumns: any[] = [
    'serialNo',
    'frmDate',
    'toDate',
    'serPlace',
    'serType',
    'recoveryIf',
    'action',
  ];
  // case details starts

  courtCaseType: ListValue[] = [
    { value: '1', viewValue: 'No' },
    { value: '2', viewValue: 'Yes' },
  ];

  reasonForRevisionList: any[] = [
    { value: '1', viewValue: 'Death Before Retirement' },
    { value: '2', viewValue: 'DCRG to be Held' },
    { value: '3', viewValue: 'Last Basic Change' },
    { value: '4', viewValue: 'change in Name, Treasury, Designation' },
    { value: '5', viewValue: 'Change in CVP Amount' },
    { value: '6', viewValue: 'Change in Pension, FP1, FP2' },
    { value: '7', viewValue: 'Change in Photo Signature' },
    { value: '8', viewValue: 'Revision for ROP 1986' },
    { value: '9', viewValue: 'Revision for ROP 1996' },
    { value: '10', viewValue: 'Revision for ROP 2016' },
    { value: '11', viewValue: 'Revision Before Payment' },
    { value: '12', viewValue: '27/03/2012 Revision' },
    { value: '13', viewValue: '50% DA Merge' },
    { value: '14', viewValue: 'ROP 1996 Notional Revision' },
    { value: '15', viewValue: 'IAS 12/5/2017' },
    { value: '16', viewValue: 'ROP 2009 Before 13/4/2009' },
    { value: '17', viewValue: 'Change in Pension' },
    { value: '18', viewValue: 'Other' }
  ];


  classTypeInward: ListValue[] = [
    { value: '1', viewValue: 'Pension Case' },
    { value: '2', viewValue: 'Service Certificate' },
    { value: '4', viewValue: ' Other State Pension Cases  ' },
    { value: '5', viewValue: '  NPS Gratuity  ' },
    { value: '6', viewValue: 'Old Account General' },
  ];

  classType: ListValue[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Revision' },
  ];

  // case details ends

  majorMinorList: any[] = [
    { value: '1', viewValue: 'Major' },
    { value: '2', viewValue: 'Minor' },
  ];
  desi_list: any[] = [
    { value: '1', viewValue: 'Designation' },
  ];
  stoList: any[] = [
    { value: '1', viewValue: ' ' },
  ];

  guardianAttachmentTypeList: any[] = [
    { value: '1', viewValue: 'Photo' },
    { value: '2', viewValue: 'Signature' },
    { value: '3', viewValue: 'Identification Mark' },
  ];
  maritalStatusList: any[] = [
    { value: '1', viewValue: 'Unmarried' },
    { value: '2', viewValue: 'Married' },
    { value: '3', viewValue: 'Divorce' },
    { value: '4', viewValue: 'Separated' },
    { value: '5', viewValue: 'Widow' },
    { value: '6', viewValue: 'Widower' },
  ];

  relationG1_lists: any[] = [
    { value: '1', viewValue: 'Spouce' },
    { value: '2', viewValue: 'Son' },
    { value: '3', viewValue: 'Daughters' },
    { value: '4', viewValue: 'Widow Daughter' },
    { value: '5', viewValue: 'Widow of predeceased Son' },
    { value: '6', viewValue: 'Addopted child' },
    { value: '7', viewValue: 'Widow of the predeceased Sons' },
    { value: '8', viewValue: 'Children of a predeceased Son' },
    { value: '9', viewValue: 'Others' },
  ];

  relationG2_lists: any[] = [
    { value: '1', viewValue: 'Father' },
    { value: '2', viewValue: 'Mother' },
    { value: '3', viewValue: 'Widow Sister' },
    { value: '4', viewValue: 'Unmarried Sister' },
    { value: '5', viewValue: 'Brother (age < 18 years)' },
    { value: '6', viewValue: 'Others' },
  ];

  relation_lists: any[] = [
    { value: '1', viewValue: 'Spouce' },
    { value: '2', viewValue: 'Son' },
    { value: '3', viewValue: 'Daughter' },
    { value: '4', viewValue: 'Father' },
    { value: '2', viewValue: 'Mother' },
    { value: '5', viewValue: 'Brother (age < 18 years)' },
    { value: '7', viewValue: 'Sister' },
    { value: '8', viewValue: 'Grand Father' },
    { value: '9', viewValue: 'Grand Mother' },
    { value: '10', viewValue: 'Mother-in-Law' },
    { value: '11', viewValue: 'Sister-in-Law' },
    { value: '12', viewValue: 'Uncle' },
    { value: '13', viewValue: 'Cousin' },
    { value: '14', viewValue: 'Nephew' },
    { value: '15', viewValue: 'Aunty' },
    { value: '16', viewValue: 'Niece' },
  ];

  SalutationTypeList: any[] = [
    { value: '1', viewValue: 'Mr.' },
    { value: '2', viewValue: 'Miss' },
    { value: '3', viewValue: 'Mrs.' },
    { value: '5', viewValue: 'Dr.' },
    { value: '6', viewValue: 'Honorable' },
    { value: '7', viewValue: 'Late' },
    { value: '8', viewValue: 'Ms.' },
  ];
  SalutationGujTypeList: any[] = [
    { value: '1', viewValue: 'શ્રી' },
    { value: '2', viewValue: 'શ્રીમાન' },
    { value: '3', viewValue: 'શ્રીમતી' },
    { value: '4', viewValue: 'કુમારી' },
    { value: '5', viewValue: 'ડોક્ટર' },
    { value: '6', viewValue: 'માનનીય' },
    { value: '7', viewValue: 'સ્વર્ગસ્થ' },
  ];

  DesignationTypeList: any[] = [
    { value: '1', viewValue: 'Account Officer' },
  ];
  attachmentTypeList: any[] = [
    { value: '1', viewValue: 'Photo' },
    { value: '2', viewValue: 'Signature' },
    { value: '3', viewValue: 'Identification Mark' },
  ];

  noOfMonthForPensionList: any[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '10' },
    { value: '3', viewValue: '20' },
    { value: '4', viewValue: '36' },
  ];

  TreasutyPPOList: any[] = [
    { value: '0', viewValue: 'Pension Payment Office Gandhinagar' },
    { value: '1', viewValue: 'Pension Payment Office Baroda' },
  ];
  seventhPayLevelList: any[] = [
    { value: '1', viewValue: '7' },
  ];
  seventhCellIDList: any[] = [
    { value: '1', viewValue: '16' },
  ];


  subTreasuryList: any[] = [
    { value: '1', viewValue: '' },
  ];
  treasuryList: any[] = [
    { value: '1', viewValue: '' },
  ];
  serviceBreakType_list: any[] = [
    { value: '1', viewValue: 'Suspension' },
    { value: '2', viewValue: 'EOL more than 36 Month' },
    { value: '3', viewValue: 'Brake in service more than 3 Month' },
    { value: '4', viewValue: 'DW Service' },
    { value: '5', viewValue: 'Adhoc Service' },
    { value: '6', viewValue: 'Others' }
  ];
  cutType_list: any[] = [
    { value: '1', viewValue: 'Temporary' },
    { value: '2', viewValue: 'Permanent' }
  ];
  recoveryType_list: any[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
    { value: '3', viewValue: 'Pay & Allowances' },
    { value: '4', viewValue: 'House Rent' },
    { value: '5', viewValue: 'Others' },
  ];
  recoveryFrom_list: any[] = [
    { value: '1', viewValue: 'DCRG' },
    { value: '2', viewValue: 'CVP' },
    { value: '3', viewValue: 'Pension' },
    { value: '4', viewValue: 'Family Pension' },
    { value: '5', viewValue: 'Others' }
  ];
  recoveryFromP4_list: any[] = [
    { value: '1', viewValue: 'DCRG' },
    { value: '2', viewValue: 'Pension' },
    { value: '3', viewValue: 'Family Pension' },
    { value: '4', viewValue: 'Others' }
  ];
  relationWithEmployeeList: any[] = [
    { value: '1', viewValue: 'Wife' },
    { value: '2', viewValue: 'Husband' },
  ];
  authorizingOfficeList: any[] = [
    { value: '1', viewValue: 'DPPF' },
    { value: '2', viewValue: 'LF' },
  ];
  otherStateTo_list: ListValue[] = [
    { value: '1', viewValue: ' ' },
  ];
  otherStateSto_list: ListValue[] = [
    { value: '1', viewValue: ' ' },
  ];
  stateList: any[] = [
    { value: '1', viewValue: 'Gujarat' },
    { value: '2', viewValue: 'Maharashtra' },
    { value: '3', viewValue: 'Andhra Pradesh' },
    { value: '4', viewValue: 'Goa' },
    { value: '5', viewValue: 'Punjab' },
    { value: '6', viewValue: 'Uttar Pradesh' },
    { value: '7', viewValue: 'Rajsthan' },
    { value: '8', viewValue: 'Madhya Pradesh' },
  ];


  errorMessage = DppfMessage;
  empdetails = true;
  isDisable = false;
  isDisableMajor = false;
  inwardDetails = false;
  fileGuardianIndex; number;
  fileBrowseIndex: number;
  todayDate = new Date();
  maxDate = new Date();
  isGuardian = false;
  optionCtrl = true;
  isRecoveryDetails = false;
  isPensionCut = false;
  isJudgeP1 = false;
  isJudgeP3 = false;
  selectedIndex = 0;
  ppoData;
  ppoNoVal: string;
  ppoNo_list: PpnoListInterface[] = [];
  filteredppoNo: Observable<PpnoListInterface[]>;
  onlinePensionForm: FormGroup;
  partTwoForm: FormGroup;
  partThreeForm: FormGroup;
  partFourForm: FormGroup;
  partFiveForm: FormGroup;
  partFiveCertificationForm: FormGroup;
  pensionInfoForm: FormGroup;
  PensionCaseCtrl: FormControl = new FormControl();
  typeOfInwardCtrl: FormControl = new FormControl();
  TypeOfROPCtrl: FormControl = new FormControl();
  TypeOfPensionCtrl: FormControl = new FormControl();
  TypeOfPensionerCtrl: FormControl = new FormControl();
  SixthScaleCtrl: FormControl = new FormControl();
  SixthPayBandCtrl: FormControl = new FormControl();
  SixthGradPayCtrl: FormControl = new FormControl();
  DepartmentCtrl: FormControl = new FormControl();
  HodCtrl: FormControl = new FormControl();
  yesNoCtrl: FormControl = new FormControl();
  appliedForCommutedPensionCtrl: FormControl = new FormControl();
  relationCTRL: FormControl = new FormControl();
  marriedCTRL: FormControl = new FormControl();
  majorMinorCTRL: FormControl = new FormControl();
  isNomineeCTRL: FormControl = new FormControl();
  SalutationCtrl: FormControl = new FormControl();
  DesignationCtrl: FormControl = new FormControl();
  TreasutyPPOCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  retAgeOfTeacherCtrl: FormControl = new FormControl();
  currentPayScaleCtrl: FormControl = new FormControl();
  npaRateCtrl: FormControl = new FormControl();
  npaAppCtrl: FormControl = new FormControl();
  noOfMonthForPensionCtrl: FormControl = new FormControl();
  pensionCutCtrl: FormControl = new FormControl();
  relationWithEmployeeCtrl: FormControl = new FormControl();
  otherStatePensionerCtrl: FormControl = new FormControl();
  typeOfPensionCtrl: FormControl = new FormControl();
  penType: FormControl = new FormControl();
  gradPayCtrl: FormControl = new FormControl();
  approvalForPensionCtrl: FormControl = new FormControl();

  classInwardCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();
  ManualPPORequiredCTRL: FormControl = new FormControl();
  ReasonForRevisionCase: FormControl = new FormControl();
  classCourtCase: FormControl = new FormControl();
  departmentalInquiryCtrl: FormControl = new FormControl();

  courtCtrl: FormControl = new FormControl();
  authorizingCtrl: FormControl = new FormControl();
  searchCtrl: FormControl = new FormControl();
  seventhPayLevelCtrl: FormControl = new FormControl();
  seventhCellIDCtrl: FormControl = new FormControl();
  otherStateToCtrl: FormControl = new FormControl();
  stateCtrl: FormControl = new FormControl();
  otherStateStoCtrl: FormControl = new FormControl();
  provisionalPensionDetailsCtrl: FormControl = new FormControl();
  recoveryDetailsCtrl: FormControl = new FormControl();
  pensionCutDetailsCtrl: FormControl = new FormControl();
  collegeUniversityEmployeeCtrl: FormControl = new FormControl();

  familDetailsDataSource = new MatTableDataSource<any>(this.familyDetailData);
  provisionalPensionDetailsDataSource = new MatTableDataSource<any>(this.provisionalPensionDetailslData);
  familDetailsPTwoDataSource = new MatTableDataSource<any>(this.familDetailsPTwoData);
  serviceBreakDetailDataSource = new MatTableDataSource<ServiceBreakDetail>(this.serviceBreakDetailData);
  annualIncrementDataSource = new MatTableDataSource<AnnualIncrement>(this.annualIncrementData);
  pensionDetailsDataSource = new MatTableDataSource<any>(this.pensionDetailsData);
  recoveryDetailDataSource = new MatTableDataSource<any>(this.recoveryDetailData);
  pensionCutDataSource = new MatTableDataSource<any>(this.pensionCutData);
  dataSourceBrowse = new MatTableDataSource(this.browseData);
  witnessDataSource = new MatTableDataSource(this.witnessData);
  serviceDetailsPFiveDataSource = new MatTableDataSource(this.serviceDetailsPFiveData);
  guardianDataSource = new MatTableDataSource(this.guardianData);

  dataSource = new MatTableDataSource<InwardCase>(this.pantion_data_table);

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, private router: Router) { }

  ngOnInit() {
    this.onlinePensionFormData();
  }

  onlinePensionFormData() {
    this.onlinePensionForm = this.fb.group({
      // case details starts
      caseType: ['2', Validators.required], // done 1 2
      typeOfInward: ['1', Validators.required], // done 1 2
      revisionPPONO: [''],
      inwardNo: [''],
      serviceCertificateNo: [''],
      inwardDate: [Date.now()],
      ppon: ['12345'],
      documentCourt: ['5678'],
      noOfRevision: ['8976'],
      courtCase: ['', Validators.required], // done 1 2
      reasonForRevision: [''],
      maualPPORequired: [''],
      manualPPO: [''],
      // case details ends
      typeOfROP: [''],


      pensionerType: [''],
      salutation: [''],
      lastname: [''],
      firstname: [''],
      middlename: [''],
      designation: [''],
      typeOfPension: [''],
      typeOfPensioner: [''],
      sixthScale: [''],
      sixthBasic: [''],
      sixthpayband: [''],
      sixthPayBandValue: [''],
      sixthGradPay: [''],
      sixthBasicPay: [''],
      seventhPayLevel: [''],
      seventhCellID: [''],
      seventhBasicPay: [''],
      seventhPayMatrix: [''],
      department: [''],
      hod: [''],
      officeName: [''],
      officeAddress: [''],
      pincode: [''],
      phoneNumber: [''],
      dateOfBirth: [''],
      dateOfJoining: [''],
      dateOfRetirement: [''],
      gpfNo: [''],
      ppanNo: [''],
      pranNo: [''],
      termEndYesNo: [''],
      termEndDate: [''],
      pensionStartDate: [''],
      height: [''],
      idMark: [''],
      pensionerAddress: [''],
      pinCode: [''],
      pensionerPhoneNumber: [''],
      emailAddress: [''],
      pensionerAdharCardNumber: [''],
      pan: [''],
      pensionerBankName: [''],
      branchAddress: [''],
      accountNumber: [''],
      ifscCode: [''],
      pensionerTreasuryPAO: [''],
      subTreasury: [''],
      appliedForCommutedPension: [''],
      commutedApplicationDate: [''],
      percentageOfCommutation: [''],
      otherStatePensioner: [''],
      state: [''],
      otherStateTo: [''],
      otherStateSto: [''],
    });
    this.partTwoForm = this.fb.group({
      salutation: ['1'],
      pensionerType: [''],
      lastname: [''],
      firstname: [''],
      middlename: [''],
      designation: ['1'],
      gpfNo: ['Gaguj12345'],
      typeOfPension: [''],
      typeOfPensioner: [''],
      department: [''],
      depCodeNo: [''],
      hod: [''],
      hodCodeNo: [''],
      officeAddress: [''],
      pinCode: [''],
      officePinCode: [''],
      pensionerEmail: [''],
      phoneNumber: [''],
      dateOfBirth: [''],
      dateOfJoining: [''],
      dateOfRetirement: [''],
      termEndYesNo: [''],
      termEndDate: [''],
      pensionerAddress: [''],
      pensionerPhoneNumber: [''],
      emailAddress: [''],
      pensionerTreasuryPAO: [''],
      subTreasury: [''],
      appliedForCommutedPension: [''],
      commutedApplicationDate: [''],
      percentageOfCommutation: [''],
      typeOfROP: [''],
      dateOfJoiningSD: [''],
      dateOfRetirementSD: [''],
      ageOfRetire: ['58'],
      notService: [''],
      additionalService: [''],
      notRetire: [''],
      retAgeOfTeacher: [''],
      totalBreak: [''],
      actualService: [''],
      netService: [''],
      pensionableService: [''],
      currentPayScale: [''],
      lastBasic: ['7100'],
      payband: ['1'],
      lastPayBandValue: ['20000'],
      gradPay: ['4'],
      basicPay: [''],
      seventhPayLevel: ['1'],
      seventhCellID: ['1'],
      lastBasicPay: ['70000'],
      verticalPayLvl: ['39900-126600'],
      npaApp: ['2'],
      npaRate: [''],
      npaAmount: [''],
      totabBasicWithNpa: [''],
      daRate: ['117'],
      dpRate: ['0'],
      noOfMonthForPension: [''],
      pensionEPay: [''],
      revisedPensionableEPay: [''],
      pensionAmount: [''],
      revisedPensionAmount: [''],
      revisedMsbPensionablePay: [''],
      revisedTotalPensionAmount: [''],
      differencePensionableEPay: [''],
      differenceOfPensionAmount: [''],
      reducedPensionAmount: [''],
      cvpApplicationDate: [''],
      grossPay: [''],
      cvpEligibilityDate: [''],
      cvpPercentageOfCommutation: [''],
      pensionOfCvp: [''],
      cvpAge: [''],
      cvpRate: [''],
      cvpAmount: [''],
      revisedCvpAmount: [''],
      revisedCommutedPensionAmount: [''],
      revisedMsbCVPPay: [''],
      revisedTotalCVPAmount: [''],
      commutedPensionAmount: [''],
      differenceofCvpAmount: [''],
      differenceCommutedPensionAmount: [''],
      revisedDcrgAmount: [''],
      revisedGratuityAmount: [''],
      dcrgAmount: [''],
      serviceGratuityAmount: [''],
      differenceDcrgAmount: [''],
      differenceServiceGratuityAmount: [''],
      revisedMsbDCRGPay: [''],
      revisedTotalDCRGAmount: [''],
      withheldAmount: [''],
      adjustmentAmount: [''],
      adjustmentAmountHeadCode: [''],
      msbPensionablePay: [''],
      totalPensionAmount: [''],
      msbCVPPay: [''],
      totalCVPAmount: [''],
      msbDCRGPay: [''],
      msbFpOneAmount: [''],
      msbFpTwoAmount: [''],
      totalFpOneAmount: [''],
      totalFpTwoAmount: [''],

      fpOneAmount: [''],
      fpTwoAmount: [''],
      revisedFpOneAmount: [''],
      revisdedFpTwoAmount: [''],
      diffFpOneAmount: [''],
      diffFpTwoAmount: [''],
      revisedMsbFpOneAmount: [''],
      revisedMsbFpTwoAmount: [''],
      revisedTotalFpOneAmount: [''],
      revisedTotalFpTwoAmount: [''],
      fpOneDate: [''],
      fpTwoDate: [''],

      provisionalPensionDetails: [''],
      recoveryDetails: [''],
      pensionCut: [''],
      serAdded: [''],
      departmentalInquiry: [''],
      approvalForPension: [''],
      otherStatePensioner: [''],
      state: [''],
      otherStateTo: [''],
      otherStateSto: [''],
      pensionCutDetails: [''],

    });
    this.partThreeForm = this.fb.group({
      // case details starts
      caseType: ['2', Validators.required], // done 1 2
      typeOfInward: ['1', Validators.required], // done 1 2
      revisionPPONO: [''],
      inwardNo: [''],
      serviceCertificateNo: [''],
      inwardDate: [Date.now()],
      ppon: ['12345'],
      documentCourt: ['5678'],
      noOfRevision: ['8976'],
      courtCase: ['', Validators.required], // done 1 2
      reasonForRevision: [''],
      maualPPORequired: [''],
      manualPPO: [''],
      // case details ends

      pensionerType: [''],
      pensionCaseType: [''],
      typeOfROP: [''],
      employeeNumber: [''],
      ppoNumber: [''],
      gpfppanNo: [''],
      salutation: [''],
      lastname: [''],
      firstname: [''],
      middlename: [''],
      firstNameGuj: [''],
      middleNameGuj: [''],
      surNameGuj: [''],
      designation: [''],
      typeOfPension: [''],
      typeOfPensioner: [''],
      height: [''],
      deathDate: [''],
      pensionStartDateP3: [''],
      idMark: [''],
      department: [''],
      gpfNo: [''],
      ppanNo: [''],
      pranNo: [''],
      hod: [''],
      officeName: [''],
      officeAddress: [''],
      officePinCode: [''],
      phoneNumber: [''],
      emailAddress: [''],
      appFirstname: [''],
      appMiddlename: [''],
      appLastname: [''],
      applicantBirthDate: [''],
      relationWithEmployee: [''],
      appAddress: [''],
      guardianAddress: [''],
      pensionerTreasuryPAO: [''],
      subTreasury: [''],
      otherStatePensioner: [''],
      state: [''],
      otherStateTo: [''],
      otherStateSto: [''],
    });
    this.partFourForm = this.fb.group({
      pensionerType: [''],
      salutation: ['1'],
      lastname: [''],
      firstname: [''],
      middlename: [''],
      designation: [''],
      gpfNo: [''],
      ppanNo: [''],
      pranNo: [''],
      typeOfROP: [''],
      dateOfJoiningSD: [''],
      dateOfBirth: [''],
      deathDate: [''],
      ageOfRetire: [''],
      totalBreak: [''],
      actualService: [''],
      netService: [''],
      pensionableService: [''],
      currentPayScale: [''],
      lastBasic: [''],
      payband: ['1'],
      lastPayBandValue: [''],
      gradPay: ['4'],
      basicPay: ['25400'],
      seventhPayLevel: ['1'],
      seventhCellID: ['1'],
      lastBasicPay: ['100000'],
      verticalPayLvl: [''],
      npaApp: ['2'],
      npaRate: [''],
      npaAmount: [''],
      totabBasicWithNpa: [''],
      dpRate: ['0'],
      daRate: ['117'],

      revisePensionablePay: [''],
      pensionablePay: [''],
      differencePensionablePay: [''],
      revisedDcrgAmount: [''],
      revisedGratuityAmount: [''],
      dcrgAmount: [''],
      serviceGratuityAmount: [''],
      differenceDcrgAmount: [''],
      differenceServiceGratuityAmount: [''],
      withheldAmount: [''],
      adjustmentAmount: [''],
      adjustmentAmountHeadCode: [''],
      revisedMsbDCRGPay: [''],
      revisedTotalDCRGAmount: [''],
      revisedPensionableEPay: [''],
      revisedPensionAmount: [''],
      revisedMsbPensionablePay: [''],
      revisedTotalPensionAmount: [''],
      pensionEPay: [''],
      pensionAmount: [''],
      differencePensionableEPay: [''],
      differenceOfPensionAmount: [''],
      reducedPensionAmount: [''],
      grossPay: [''],

      provisionalPensionDetails: [''],
      recoveryDetails: [''],
      departmentalInquiry: [''],
      approvalForPension: [''],

      fpOneAmount: [''],
      fpTwoAmount: [''],
      revisedFpOneAmount: [''],
      revisdedFpTwoAmount: [''],
      diffFpOneAmount: [''],
      diffFpTwoAmount: [''],
      revisedMsbFpOneAmount: [''],
      revisedMsbFpTwoAmount: [''],
      revisedTotalFpOneAmount: [''],
      revisedTotalFpTwoAmount: [''],
      fpOneDate: [''],
      fpTwoDate: [''],

      msbPensionablePay: [''],
      totalPensionAmount: [''],
      msbDCRGPay: [''],
      msbFpOneAmount: [''],
      msbFpTwoAmount: [''],
      totalFpOneAmount: [''],
      totalFpTwoAmount: [''],

    });

    this.pensionInfoForm = this.fb.group({
      pensionerType: [''],
      salutation: ['1'],
      firstName: [''],
      middleName: [''],
      surName: [''],
      salutationGuj: ['1'],
      firstNameGuj: [''],
      middleNameGuj: [''],
      surNameGuj: [''],
      employeeIDNumber: [''],
      employeeNumber: [''],
      typeOfPension: [''],
      courtCase: [''],
      authorizingOffice: [''],
      otherStatePensioner: [''],
      state: [''],
      otherStateTo: [''],
      otherStateSto: [''],
      lfOffice: [''],
    });

    this.partFiveForm = this.fb.group({
      pensionerType: [''],
      firstName: ['Vipulbhai'],
      middleName: ['Sankarlal'],
      surName: ['Patel'],
      designation: [''],
      schoolOrInstituteName: [''],
      appliedForCommutedPension: [''],
      commutedApplicationDate: [''],
      percentageOfCommutation: [''],
      cpfJoiningDate: [''],
      cpfAccountNo: [''],
      employeeContributionWithInterest: [''],
      instituteContributionWithInterest: [''],
      governmentContributionWithInterest: [''],
      totalContribution: [''],
      balanceDateCPF: [''],
      amountInPassbook: [''],
      personalDepositAmount: [''],
      cpfHead: [''],
      treasury: [''],
      cpfAmount: [''],
      majorHead: [''],
      challanNo: [''],
      dateForCPF: [''],
      budgetHead: [''],
      nonCPFfromDate: [''],
      nonCPFtoDate: [''],
      iterestDateCPF: [''],
      fromDateCPF: [''],
      toDateCPF: [''],
      majorHeadCU: [''],
      employeeJoiningDate: [''],
      retiremntDateCPF: [''],
      collegeName: [''],
      cpfAccountNoCU: [''],

      collegeUniversityEmployee: [''],
      totalServiceClgUni: [''],
      pensionableServiceClgUni: [''],
      employeeName: [''],
      cpfAccountNoSD: [''],
      institteNameService: [''],
      collegServiceFromDate: [''],
      collegServiceToDate: [''],
      cpfJoiningFromDate: [''],
      cpfJoiningToDate: [''],
      serviceJoiningDate: [''],
      employerContributionService: [''],
      dcrgAmount: [''],
      fromDateDCRG: [''],
      majorHeadSD: [''],
      firstName2: [''],
      middleName2: [''],
      surName2: [''],
      totalService: [''],
      pensionableService: ['']

    });
    this.partFiveCertificationForm = this.fb.group({
      pensionerType: [''],
      hoodo: [''],
      fromDate: [''],
      designation: ['1'],
      date2: [''],
      date1: ['']
    });

    this.filteredppoNo = this.ppoNoCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value),
        map(ppoNo => ppoNo ? this._filter(ppoNo) : this.ppoNo_list.slice())
      );

  }

  // redirectToListing(){
  //   this.router.navigate(['/dppf/online-pension-case-listing'])
  // }


  private _filter(ppoNo: string): PpnoListInterface[] {
    const filterValue = ppoNo;

    return this.ppoNo_list.filter(option => option.ppoNo.indexOf(filterValue) === 0);
  }


  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(DppfSearchEmployeeNumberComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.empdetails = true;
        this.onlinePensionForm.patchValue({
          payFixationEmployeeNumber: result[0].employeeNumber,
          employeeName: result[0].employeeName,
          designation: result[0].designation,
        });
      }
    });
  }

  limitHundred(event: any) {
    const pattern = /^[1-9][0-9]?$|^100$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }
  // Enable Guardian Signature and Photo
  onDisable(event) {
    if (event.value === '1') {
      this.isDisable = true;
    } else {
      this.isDisable = false;
    }
  }
  onDisableMajor(event) {
    if (event.value === '2') {
      this.isDisableMajor = true;
    } else {
      this.isDisableMajor = false;
    }
  }

  addWitnessRow() {
    this.witnessDataSource.data.push(
      {
        fullName: '',
        address: '',
      }
    );
    this.witnessDataSource.data = this.witnessDataSource.data;
  }

  deleteWitnessRow(index) {
    this.witnessData.splice(index, 1);
    this.witnessDataSource.data = this.witnessDataSource.data;
  }
  addServiceDetailsPFiveRow() {
    this.serviceDetailsPFiveDataSource.data.push(
      {
        instituteNameService: '',
        serviceFromDate: '',
        serviceToDate: '',
        totalService: '',
        pensionableService: '',
      }
    );
    this.serviceDetailsPFiveDataSource.data = this.serviceDetailsPFiveDataSource.data;
  }

  deleteServiceDetailsPFiveRow(index) {
    this.serviceDetailsPFiveData.splice(index, 1);
    this.serviceDetailsPFiveDataSource.data = this.serviceDetailsPFiveDataSource.data;
  }
  addMSBRow() {
    this.dataSource.data.push(
      {
        frmDate: '',
        toDate: '',
        serPlace: ' ',
        serType: '',
        recoveryIf: '',
      }
    );
    this.dataSource.data = this.dataSource.data;
  }
  deleteMSBRow(index) {
    this.pantion_data_table.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }
  addFamilyRow() {
    this.familDetailsDataSource.data.push(
      {
        name: '',
        relation: '',
        married: '',
        dateOfBirth: '',
        age: '',
        majorMinor: '',
        disability: '',
        disabilityType: '',
        guardianName: '',
        isNominee: '',
        percentage: '',
        percentageOfNomination: '',
      }
    );
    this.familDetailsDataSource.data = this.familDetailsDataSource.data;
  }

  deleteFamilyRow(index) {
    this.familyDetailData.splice(index, 1);
    this.familDetailsDataSource.data = this.familDetailsDataSource.data;
  }

  onIfDead(event) {
    if (event.value === '1') {
      this.addFamilyPTwoRow();
    } else {

    }
  }
  addFamilyPTwoRow() {
    this.familDetailsPTwoDataSource.data.push(
      {
        name: '',
        relation: '',
        married: '',
        dateOfBirth: '',
        age: '',
        majorMinor: '',
        disability: '',
        disabilityType: '',
        guardianName: '',
        relationWithGuardian: '',
        guardianAdd: '',
        isNominee: '',
        percentage: '',
        percentageOfNomination: '',
      }
    );
    this.familDetailsPTwoDataSource.data = this.familDetailsPTwoDataSource.data;
  }

  deleteFamilyPTwoRow(index) {
    this.familDetailsPTwoData.splice(index, 1);
    this.familDetailsPTwoDataSource.data = this.familDetailsPTwoDataSource.data;
  }

  addPPD() {
    this.provisionalPensionDetailsDataSource.data.push(
      {
        provisionalPension: '',
        ppFromDate: '',
        ppToDate: '',
        provisionalDcrg: '',
        pdFromDate: '',
        pdToDate: '',
        provisionalFp1: '',
        pfFromDate: '',
        pfToDate: '',
        provisional: '',
        pFromDate: '',
        pToDate: '',
        treasuryPpo: '',
      }
    );
    this.provisionalPensionDetailsDataSource.data = this.provisionalPensionDetailsDataSource.data;
  }
  deletePPD(index) {
    this.provisionalPensionDetailslData.splice(index, 1);
    this.provisionalPensionDetailsDataSource.data = this.provisionalPensionDetailsDataSource.data;
  }


  addServiceBreakRow() {
    this.serviceBreakDetailDataSource.data.push(
      {
        serviceBreakType: '',
        breakFromDate: undefined,
        breakToDate: undefined,
        breakofParticularPeriod: ''
      }
    );
    this.serviceBreakDetailDataSource.data = this.serviceBreakDetailDataSource.data;
  }
  addAttachment() {
    this.dataSourceBrowse.data.push(
      {
        serviceBreakType: '',
        breakFromDate: undefined,
        breakToDate: undefined,
        breakofParticularPeriod: ''
      }
    );
    this.dataSourceBrowse.data = this.dataSourceBrowse.data;
  }

  deleteAttachment(index) {
    this.browseData.splice(index, 1);
    this.dataSourceBrowse.data = this.dataSourceBrowse.data;
  }
  deleteServiceBreakRow(index) {
    this.serviceBreakDetailData.splice(index, 1);
    this.serviceBreakDetailDataSource.data = this.serviceBreakDetailDataSource.data;
  }


  addAnnualIncrementRow() {
    this.annualIncrementDataSource.data.push(
      {
        incrementDate: undefined,
        incrementAmount: '',
        basic: '',
        gradePay: '',
        payType: '',
      }
    );
    this.annualIncrementDataSource.data = this.annualIncrementDataSource.data;
  }

  deleteAnnualIncrementRow(index) {
    this.annualIncrementData.splice(index, 1);
    this.annualIncrementDataSource.data = this.annualIncrementDataSource.data;
  }
  addRecoveryDetailRow() {
    this.recoveryDetailDataSource.data.push({
      recoveryType: '',
      accountNumber: '',
      majorHead: '',
      amount: '',
      recoveryFrom: '',
      amountOfRecovery: ''
    });
    this.recoveryDetailDataSource.data = this.recoveryDetailDataSource.data;
  }

  addPensionCutRow() {
    this.pensionCutDataSource.data.push({
      cutType: '',
      amountToBeCut: '',
      numberOfYears: '',
      numberOfMonths: '',
      orderNumber: '',
      orderDate: undefined
    });
    this.pensionCutDataSource.data = this.pensionCutDataSource.data;
  }

  deleteRecoveryDetailRow(index) {
    this.recoveryDetailData.splice(index, 1);
    this.recoveryDetailDataSource.data = this.recoveryDetailDataSource.data;
  }

  deletePensionCutRow(index) {
    this.pensionCutData.splice(index, 1);
    this.pensionCutDataSource.data = this.pensionCutDataSource.data;
  }

  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  resetForm() {
    this.onlinePensionForm.reset();
  }
  resetForm2() {
    this.partTwoForm.reset();
  }
  goToListing() {
    this.router.navigate(['/dppf/online-pension-case-listing']);
  }

  onPrint() {
    const url = '../#/dppf/dppf-online-pension-case-print';
    const printWindow = window.open(url, 'print');
    printWindow.addEventListener('load', function () {
      printWindow.print();
    }, true);
  }
  displayFn(ppoNo_list: PpnoListInterface): string {
    return ppoNo_list && ppoNo_list.ppoNo ? ppoNo_list.ppoNo : '';
  }

  lessThan(event) {
    const pattern = /^[0-9][^1-9]*$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }
  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          dropDown: undefined,
          name: undefined,
          file: undefined
        });
        this.dataSourceBrowse.data = p_data;
      } else {
      }
    }
  }
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }
  addGuardian() {
    if (this.guardianDataSource) {
      console.log('in add');

      const data = this.guardianDataSource.data[this.guardianDataSource.data.length - 1];
      if (data && data.file) {
        console.log('second if');
        const p_data = this.guardianDataSource.data;
        p_data.push({
          attachmentType: undefined,
          name: undefined,
          file: undefined
        });
        this.guardianDataSource.data = p_data;
      } else {
      }
    }
  }
  deleteGuardian(index) {
    this.guardianDataSource.data.splice(index, 1);
    this.guardianDataSource = new MatTableDataSource(this.guardianDataSource.data);
  }
  onGuardianFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.guardianDataSource.data[this.fileGuardianIndex].file =
        fileSelected.target.files[0];
    }
  }
  openGuardianFileSelector(index) {
    this.el.nativeElement.querySelector('#guardianFileBrowse').click();
    this.fileGuardianIndex = index;
  }
  onRopPTwo(event) {
    const value = event.value;
    if (value === '0') {
      this.partTwoForm.patchValue({
        lastBasic: ['2725'],
        npaApp: ['2']
      });
      this.sixthScaleList = [
        { value: '1', viewValue: '2200-75-2800-EB-100-4200' },
      ];

    }
    if (value === '1') {
      this.partTwoForm.patchValue({
        lastBasic: ['7100'],
        npaApp: ['2']
      });
      this.sixthScaleList = [
        { value: '1', viewValue: '6500-200-10500' },
      ];
    }
    if (value === '2' && this.isJudgeP1) {
      this.partTwoForm.patchValue({
        lastBasic: ['7100'],
        npaApp: ['2']
      });
      this.sixthScaleList = [
        { value: '1', viewValue: '6500-200-10500' },
      ];
    }
    if (value === '2') {
      this.partTwoForm.patchValue({
        npaApp: ['2'],
        payband: ['1'],
        lastPayBandValue: ['20000'],
        basicPay: ['25400'],
        npaRate: [''],
        npaAmount: [''],
        totabBasicWithNpa: [''],
      });
    }
    if (value === '3') {
      this.partTwoForm.patchValue({
        npaApp: ['2'],
        payband: ['1'],
        seventhCellID: ['100000'],
        npaRate: [''],
        npaAmount: [''],
        totabBasicWithNpa: [''],
      });
    }

  }

  onRopPFour(event) {
    const value = event.value;
    console.log('in rop four :' + value);

    if (value === '0') {
      this.partFourForm.patchValue({
        lastBasic: ['2725'],
        npaApp: ['2']
      });
      this.sixthScaleList = [
        { value: '1', viewValue: '2200-75-2800-EB-100-4200' },
      ];
    }
    if (value === '1') {
      this.partFourForm.patchValue({
        lastBasic: ['7100'],
        npaApp: ['2']
      });
      this.sixthScaleList = [
        { value: '1', viewValue: '6500-200-10500' },
      ];
    }
    if (value === '2' || this.isJudgeP3) {
      this.partFourForm.patchValue({
        lastBasic: ['7100'],
        npaApp: ['2']
      });
      this.sixthScaleList = [
        { value: '1', viewValue: '6500-200-10500' },
      ];
    }
    if (value === '2') {
      this.partFourForm.patchValue({
        payband: ['1'],
        npaApp: ['2'],
        lastPayBandValue: ['20000'],
        basicPay: ['25400'],
        npaRate: [''],
        npaAmount: [''],
        totabBasicWithNpa: [''],
      });
    }
    if (value === '3') {
      this.partFourForm.patchValue({
        payband: ['1'],
        npaApp: ['2'],
        seventhCellID: ['100000'],
        npaRate: [''],
        npaAmount: [''],
        totabBasicWithNpa: [''],
      });
    }
  }

  onNpaRate2016(event) {
    if (event.value === '2') {
      this.partFourForm.patchValue({
        npaAmount: ['25000'],
        totabBasicWithNpa: ['125000'],
      });
      this.partTwoForm.patchValue({
        npaAmount: ['25000'],
        totabBasicWithNpa: ['125000'],
      });

    }
  }
  onNpaRate2006(event) {

    if (event.value === '2') {
      this.partFourForm.patchValue({
        npaAmount: ['6350'],
        totabBasicWithNpa: ['31750'],
      });
      this.partTwoForm.patchValue({
        npaAmount: ['6350'],
        totabBasicWithNpa: ['31750'],
      });

    }
  }

  // Inward No Popup

  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfComponent, {
      width: '900px',
      height: 'auto',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.onlinePensionForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }
  sendPPOData(data) {
    this.ppoData = data;
  }
  // Dppf Dialog
  openDPPFDialog() {
    this.optionCtrl = false;
    if (this.ppoData == null || this.ppoData === undefined || this.ppoData === '') {
      this.ppoData = 'Please Provide PPO No.';
    }
    const dailogRef = this.dialog.open(DppfDialogBoxComponent,
      {
        width: '900px',
        height: 'auto',
        data: this.ppoData
      });

    dailogRef.afterClosed().subscribe(result => {
      const dataArray = result;
      this.optionCtrl = true;
      if (dataArray !== '' && dataArray != null) {
        this.ppoNoCtrl.patchValue(dataArray[0].ppoNo);
        this.ppoNoVal = this.ppoNoCtrl.value;
        this.onlinePensionForm.patchValue({
          ppoNo: dataArray[0].ppoNo,
          pensionerName: dataArray[0].fName + ' ' + dataArray[0].mName + ' ' + dataArray[0].lName,
          bankAndBranch: dataArray[0].bankAndBranch,
          accountNumber: dataArray[0].accountNo,
          deathDateOf: dataArray[0].deathDateOf,
          totalAmountToBeRecovered: dataArray[0].totalAmtToBeRecovered,
          amountRecovered: dataArray[0].amtRecovered,
          balanceAmountToBeRecovered: dataArray[0].balAmtToBeRecovered,
        });
      }
    });
  }

  openReferenceNumberDialog() {
    this.optionCtrl = false;
    if (this.ppoData == null || this.ppoData === undefined || this.ppoData === '') {
      this.ppoData = 'Please Provide PPO No.';
    }
    const dailogRef = this.dialog.open(SearchReferenceNumberDppfComponent,
      {
        width: '900px',
        height: 'auto',
        data: this.ppoData
      });

    dailogRef.afterClosed().subscribe(result => {
      const dataArray = result;
      this.optionCtrl = true;
      if (dataArray !== '' && dataArray != null) {
        this.ppoNoCtrl.patchValue(dataArray[0].ppoNo);
        this.ppoNoVal = this.ppoNoCtrl.value;
        this.onlinePensionForm.patchValue({
          revisionPPONO: dataArray[0].ppoNo,
          pensionerName: dataArray[0].fName + ' ' + dataArray[0].mName + ' ' + dataArray[0].lName,
          bankAndBranch: dataArray[0].bankAndBranch,
          accountNumber: dataArray[0].accountNo,
          deathDateOf: dataArray[0].deathDateOf,
          totalAmountToBeRecovered: dataArray[0].totalAmtToBeRecovered,
          amountRecovered: dataArray[0].amtRecovered,
          balanceAmountToBeRecovered: dataArray[0].balAmtToBeRecovered,
        });
      }
    });
  }
  onRecoveryDetails() {
    this.isRecoveryDetails = !this.isRecoveryDetails;
  }
  onPensionCut() {
    this.isPensionCut = !this.isPensionCut;
  }
  onTypeOfPensionerP1(event) {
    if (event.value === '7' || event.value === '8') {
      this.isJudgeP1 = true;
    } else {
      this.isJudgeP1 = false;
    }
  }
  onTypeOfPensionerP2(event) {
    if (event.value === '7' || event.value === '8') {
      this.isJudgeP3 = true;
    } else {
      this.isJudgeP3 = false;
    }
  }

  // Go to next Tab
  goToNext() {
    this.selectedIndex++;
  }

  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // Set Eng/Guj Functions
  setGujarati() {
    SetGujarati();
  }

  setEnglish() {
    SetEnglish();
  }
}
