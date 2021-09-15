import { CommonListing } from 'src/app/model/common-listing';
import { DppfMessage } from './../../common/error-message/common-message.constants';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';


@Component({
  selector: 'app-online-pension-case',
  templateUrl: './online-pension-case.component.html',
  styleUrls: ['./online-pension-case.component.css']
})
export class OnlinePensionCaseComponent implements OnInit {
  // Date
  date: any = new Date();
  // List
  headOfDepartMentList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office' }
  ];
  departmentList: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office' }
  ];
  retiremntList: CommonListing[] = [
    { value: '1', viewValue: 'Retiring' },
    { value: '2', viewValue: 'Absorption' },
    { value: '3', viewValue: 'Compensation' },
    { value: '4', viewValue: 'compassionate' },
    { value: '5', viewValue: 'Family' },
    { value: '6', viewValue: 'Family Lost' },
    { value: '7', viewValue: 'Invalid' },
    { value: '8', viewValue: 'Other' },
    { value: '9', viewValue: 'Superannuation' },
    { value: '10', viewValue: 'Voluntary' },
    { value: '11', viewValue: 'Wound and Injury' },

  ];
  courtCaseList: CommonListing[] = [
    { value: '1', viewValue: 'No' },
    { value: '2', viewValue: 'Yes' },
  ];
  otherPensionersList: CommonListing[] = [
    { value: '1', viewValue: 'No' },
    { value: '2', viewValue: 'Yes' },
  ];
  designationList: CommonListing[] = [
    { value: '1', viewValue: 'Junior Clerk' },
    { value: '2', viewValue: 'Senior Clerk' },
    { value: '3', viewValue: 'Accountant' },
  ];
  typeOfROPList: CommonListing[] = [
    { value: '1', viewValue: 'ROP 1986' },
    { value: '2', viewValue: 'ROP 1996' },
    { value: '3', viewValue: 'ROP 2006' },
    { value: '4', viewValue: 'ROP 2016' },
  ];
  designationTwoList: CommonListing[] = [
    { value: '1', viewValue: 'Others' },
    { value: '2', viewValue: 'High Court Judges' },
    { value: '5', viewValue: 'Junior Clerk' },
    { value: '3', viewValue: 'Senior Clerk' },
    { value: '4', viewValue: 'Accountant' },
  ];
  employeeTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Gov. Gazzetted' },
    { value: '2', viewValue: 'Gov. Non Gazzetted' },
    { value: '3', viewValue: 'Non Govt. Teaching Staff' },
    { value: '4', viewValue: 'Non Govt. Non-Teaching Staff' },
    { value: '5', viewValue: 'IAS' },
    { value: '6', viewValue: 'IPS' },
    { value: '7', viewValue: 'IFS ' },
  ];
  caseTypeList: CommonListing[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Revision' }
  ];
  inwardTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Pension Case' },
    { value: '2', viewValue: 'Service Certificate' },
    { value: '3', viewValue: 'NPS Gratuity' },
  ];
  lfList: CommonListing[] = [
    { value: '1', viewValue: 'Office 1' },
    { value: '2', viewValue: 'Office 2' },
    { value: '3', viewValue: 'Office 3' },
  ];
  treasuryList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury 1' },
    { value: '2', viewValue: 'District Treasury 1' },
    { value: '3', viewValue: 'District Treasury 1' },
  ];
  subTreasuryList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury 1' },
    { value: '2', viewValue: 'District Treasury 1' },
    { value: '3', viewValue: 'District Treasury 1' },
  ];
  otherSateList: CommonListing[] = [
    { value: '1', viewValue: 'Gujarat' },
    { value: '2', viewValue: 'Madhya Pradesh' },
    { value: '3', viewValue: 'Rajasthan' },
  ];
  relationList: CommonListing[] = [
    { value: '1', viewValue: 'Son' },
    { value: '2', viewValue: 'Daughter' },
    { value: '3', viewValue: 'Mother' },
  ];
  yesNoList: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  majorMinorList: CommonListing[] = [
    { value: '1', viewValue: 'Major' },
    { value: '2', viewValue: 'Minor' },
  ];
  disabilityTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Physically Handicapped' },
    { value: '2', viewValue: 'Mentally Retired' },
    { value: '3', viewValue: 'Deaf and Dumb' },
  ];
  treasuryPpoOffice_list: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office, Gandhinagar' }
  ];
  ropTypeList: CommonListing[] = [
    { value: '1', viewValue: 'ROP 1986' },
    { value: '2', viewValue: 'ROP 1998' },
    { value: '3', viewValue: 'ROP 2006' },
    { value: '4', viewValue: 'ROP 2016' },
  ];
  typeOfRevisionList: CommonListing[] = [
    { value: '1', viewValue: 'Revision 1' },
    { value: '2', viewValue: 'Revision 2' },
  ];
  retirementAgeTeachersList: CommonListing[] = [
    { value: '1', viewValue: '58' },
    { value: '2', viewValue: '60' },
    { value: '3', viewValue: '62' },
  ];
  familyList: any[] = [
    '1'
  ];
  serviceBreakType_list: CommonListing[] = [
    { value: '1', viewValue: 'Service Break 1' }
  ];
  majorHead_list: CommonListing[] = [
    { value: '1', viewValue: '2225 : Welfare of Schedule Castes, Schedule Tribes, other Backward Classes and Minorities' }
  ];
  recoveryTypeList: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'Other' },
    { value: '3', viewValue: 'Pay and allowances' },
    { value: '4', viewValue: 'MCA' },
  ];
  noDueCertificateList: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'Other' },
    { value: '3', viewValue: 'Pay and allowances' },
    { value: '4', viewValue: 'MCA' },
  ];
  recoveryFromList: CommonListing[] = [
    { value: '1', viewValue: 'DCRG' },
    { value: '2', viewValue: 'CVP' },
    { value: '3', viewValue: 'Other' },
    { value: '4', viewValue: 'With Or Pending Details' },
    { value: '5', viewValue: 'Recovery of Service DCRG' },
  ];
  cutTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Temporary' },
    { value: '2', viewValue: 'Permanent' },
  ];
  payBandList: CommonListing[] = [
    { value: '1', viewValue: 'B3' },
    { value: '2', viewValue: 'B2' },
    { value: '3', viewValue: 'B1' },
  ];
  gradePayList: CommonListing[] = [
    { value: '1', viewValue: 'Grade 1' },
    { value: '2', viewValue: 'Grade 2' },
    { value: '3', viewValue: 'Grade 3' },
  ];
  matrixList: CommonListing[] = [
    { value: '1', viewValue: 'Matrix 1' },
    { value: '2', viewValue: 'Matrix 2' },
    { value: '3', viewValue: 'Matrix 3' },
  ];
  familyMemeberFor: any[] = ['1'];
  recoverPartFourList: any[] = ['1'];
  attachmentTypeCode: CommonListing[] = [
    { value: '1', viewValue: 'Photo' },
    { value: '2', viewValue: 'Signature' }
  ];
  authorizingOfficeList: CommonListing[] = [
    { value: '1', viewValue: 'DPPF' },
    { value: '2', viewValue: 'LF' },
  ];
  lfOfficeList: CommonListing[] = [
    { value: '1', viewValue: 'LF Office -1' },
    { value: '2', viewValue: 'LF Office -2' },
    { value: '3', viewValue: 'LF Office -3' },
    { value: '4', viewValue: 'LF Office -4' },
  ];
  // Table Source
  displayedBrowseColumns = [
    'srno',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  TermEndDateList: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  familyDetailData: any[] = [
    {
      name: '',
      relation: '',
      married: '',
      dateOfBirth: undefined,
      age: '',
      majorMinor: '',
      disability: '',
      disabilityType: '',
      gaurdianName: '',
      percentOfPf: '',
      isNominee: '',
      percentOfNominee: '',
    }
  ];
  // Family Details Table Source
  familyDetailColumns = [
    'name', 'relation', 'married', 'dateOfBirth', 'age',
    'majorMinor', 'disability', 'disabilityType', 'gaurdianName',
    'percentOfPf', 'isNominee', 'percentOfNominee', 'action'
  ];
  annualIncrementData: any[] = [
    {
      incrementDate: undefined,
      incrementAmount: '',
      basic: '',
      gradePay: ''
    }
  ];
  // Annual Increment Table Source
  annualIncrementColumn = [
    'incrementDate', 'incrementAmount', 'basic', 'gradePay', 'action'
  ];
  currentPayScale_list: any[] = [
    { value: '1', viewValue: 'current pay1' }
  ];
  gradePay_list: any[] = [
    { value: '1', viewValue: 'grade pay1' }
  ];
  noOfMonthPensionCalculation_list: any[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '10' },
    { value: '3', viewValue: '20' },
    { value: '4', viewValue: '36' }
  ];
  lastScale_list: any[] = [
    { value: '1', viewValue: 'last Scale1' }
  ];
  promotedScale_list: any[] = [
    { value: '1', viewValue: 'promoted scale1' }
  ];
  toogleYesNo_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  pensionDetailsData: any[] = [
    {
      pensionFromDate: '',
      pensionToDate: '',
      pensionNoOfMonths: '',
      pensionNoOfDays: '',
      basic: '',
      daAmount: '',
      npaAmount: '',
      gradePay: '',
      total: '',
    }
  ];
  // Pension Details Table Sourece
  pensionDetailsColumn = [
    'pensionFromDate', 'pensionToDate', 'pensionNoOfMonths', 'pensionNoOfDays', 'basic',
    'daAmount', 'npaAmount', 'gradePay', 'total'
  ];
  disabilityType_lists: any[] = [
    { value: '1', viewValue: 'Physically Handicapped' },
    { value: '2', viewValue: 'Mentally Retired' },
    { value: '3', viewValue: 'Deaf and Dumb' }
  ];
  // Form Group
  onlinePensionForm: FormGroup;
  pensionPaperOne: FormGroup;
  newPensionPaperTwo: FormGroup;
  pensionPaperTwo: FormGroup;
  pensionPaperThree: FormGroup;
  pensionPaperFour: FormGroup;
  pensionPaperFive: FormGroup;
  pensionPartOneNominee: FormGroup;
  searchCtrl: FormControl = new FormControl();
  TermEndDateCtrl: FormControl = new FormControl();
  errorMessage;
  selectedIndex;
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined,
      uploadedBy: ''
    }
  ];
  serviceBreakDetailData: any[] = [
    {
      serviceBreakType: '',
      breakFromDate: undefined,
      breakToDate: undefined,
      breakofParticularPeriod: ''
    }
  ];
  // Service table spurce
  serviceBreakColumn = [
    'serviceBreakType', 'breakFromDate', 'breakToDate', 'breakofParticularPeriod', 'action'
  ];
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
  // Recovery Details Table SOurce
  recoveryDetailColumn = [
    'recoveryType', 'accountNumber', 'majorHead', 'amount', 'recoveryFrom', 'amountOfRecovery', 'action'
  ];
  recoveryType_list: any[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
    { value: '3', viewValue: 'Others' }
  ];
  recoveryFrom_list: any[] = [
    { value: '1', viewValue: 'DCRG' },
    { value: '2', viewValue: 'CVP' },
    { value: '3', viewValue: 'Others' }
  ];
  pensionCutData: any[] = [
    {
      cutType: '',
      amountToBeCut: '',
      numberOfYears: '',
      numberOfMonths: '',
      orderNumber: '',
      orderDate: undefined
    }
  ];
  // Pension Cut Table Source
  pensionCutColumn = [
    'cutType', 'amountToBeCut', 'numberOfYears', 'numberOfMonths', 'orderNumber', 'orderDate', 'action'
  ];
  cutType_list: any[] = [
    { value: '1', viewValue: 'Temporary' },
    { value: '2', viewValue: 'Permanent' }
  ];

  fileBrowseIndex: number;
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  familDetailsDataSource = new MatTableDataSource<any>(this.familyDetailData);
  annualIncrementDataSource = new MatTableDataSource<any>(this.annualIncrementData);
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  ServiceBreakCtrl: FormControl = new FormControl();
  RecoveryDetailsCtrl: FormControl = new FormControl();
  PensionCutCtrl: FormControl = new FormControl();
  pensionDetailsDataSource = new MatTableDataSource<any>(this.pensionDetailsData);
  serviceBreakDetailDataSource = new MatTableDataSource<any>(this.serviceBreakDetailData);
  recoveryDetailDataSource = new MatTableDataSource<any>(this.recoveryDetailData);
  pensionCutDataSource = new MatTableDataSource<any>(this.pensionCutData);
  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog) { }
  ngOnInit() {
    this.errorMessage = DppfMessage;
    this.onlinePensionFormData();
    this.pensionPaperOneData();
    this.pensionPartOneNomineeData();
    this.pensionPaperTwoData();
    this.pensionPaperThreeData();
    this.pensionPaperFourData();
    this.pensionPaperFiveData();
    this.newPensionPaperTwoData();
  }
  onlinePensionFormData() {
    this.onlinePensionForm = this.fb.group({
      employeeIDNumber: ['', Validators.required],
      typeOfROP: ['', Validators.required],
      inwardType: ['', Validators.required],
      caseType: ['', Validators.required],
      revisionPPONO: [''],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      surName: ['', Validators.required],
      gpfNoPpanNo: [''],
      authorizingOffice: ['', Validators.required],
      lfOffice: ['', Validators.required],
      typeOfPension: ['', Validators.required],
      headOfDepartMent: ['1', Validators.required],
      department: ['1', Validators.required],
      officeName: ['', Validators.required],
      officeAddress: ['', Validators.required],
      typeOfRetirement: ['', Validators.required],
      courtCase: ['1', Validators.required],
      designation: ['', Validators.required],
      employeeType: ['', Validators.required],
      employeeAddress: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      deteOfRetirement: ['', Validators.required],
      termEndDateYesNo: [''],
      termEndDate: ['', Validators.required],
      otherPensioners: ['', Validators.required],

    });
  }
  pensionPaperOneData() {
    this.pensionPaperOne = this.fb.group({
      fullName: ['', Validators.required],
      designation: ['', Validators.required],
      officeAddress: ['', Validators.required],
      salary: ['', Validators.required],
      surname: ['', Validators.required],
      name: ['', Validators.required],
      middleName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      dateOfRetirementOrDeath: ['', Validators.required],
      pinCode: ['', Validators.required],
      officePhoneNo: ['', Validators.required],
      identificationMarks: ['', Validators.required],
      height: ['', Validators.required],
      pensionerAddress: ['', Validators.required],
      homePinCode: ['', Validators.required],
      aadharNumber: [''],
      pensionerPhoneNo: ['', Validators.required],
      treasury: ['', Validators.required],
      cvpRate: ['', Validators.required],
      cvpDatePart1: ['', Validators.required],
      otherState: [''],
      subTreasury: [''],
      termEndDatePart1: [''],
      termEndDateApplicable: ['', Validators.required],
      bankName: [''],
      bankBranch: [''],
      accountNo: [''],
      ifscCode: [''],
      officeEmailID: [''],
      pensionerEmailId: [''],
      state: ['', Validators.required]
    });
  }
  pensionPartOneNomineeData() {
    this.pensionPartOneNominee = this.fb.group({
      retirementDateDetails: ['', Validators.required],
      nomineeName: ['', Validators.required],
      nomineeRelation: ['', Validators.required],
      marriedAsk: ['', Validators.required],
      nominneDOB: [''],
      nomineeAge: ['55', Validators.required],
      majorMinor: ['', Validators.required],
      disableNomineename: ['', Validators.required],
      disability: ['', Validators.required],
      guardianName: ['', Validators.required],
      percentageOfFP: ['', Validators.required],
      percentageOfNomination: ['', Validators.required],
      isNominee: ['', Validators.required],
      beforeDate: ['', Validators.required],
      disabilityType: [''],
    });
  }
  pensionPaperTwoData() {
    this.pensionPaperTwo = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      toDateCtrl: ['', Validators.required],
      fromDateCtrl: ['', Validators.required],
      designationInsidJudge: ['', Validators.required],
      deteOfRetirement: ['', Validators.required],
      typeOfPension: ['', Validators.required],
      voluntaryDate: ['', Validators.required],
      pensionerAddress: ['', Validators.required],
      phoneNo: ['', Validators.required],
      officeAddress: ['', Validators.required],
      officeEmailID: [''],
      officePhoneNo: [''],
      headOfDepartMent: ['', Validators.required],
      department: ['', Validators.required],
      provisionalPension: ['', Validators.required],
      provisionalDCRG: ['', Validators.required],
      provisionalDcrgAmount: ['', Validators.required],
      provisionalFamilyPension: ['', Validators.required],
      pensionNominee: ['1', Validators.required],
      fpNomineeSurname: ['', Validators.required],
      fpNomineeName: ['', Validators.required],
      fpNomineeLastName: ['', Validators.required],
      dcrgSanctionDate: [''],
      provisionalDcrgSanctioned: ['2', Validators.required],
      provisinolPensionAmount: ['', Validators.required],
      provisionalPensionDate: ['', Validators.required],
      cvpRate: ['', Validators.required],
      cvpDate: ['', Validators.required],
      cvpAge: ['', Validators.required],
      typeOFROP: ['', Validators.required],
      typeOFRevision: ['', Validators.required],
      serviceBreakType: ['', Validators.required],
      breakToDate: ['', Validators.required],
      breakFromDate: ['', Validators.required],
      breakOfParticularPeriod: ['', Validators.required],
      pensionableService: ['', Validators.required],
      actualService: ['', Validators.required],
      netService: ['', Validators.required],
      lastPay: ['', Validators.required],
      increamentDate: ['', Validators.required],
      paidPensionablePayToDate: ['', Validators.required],
      paidPensionablePayFromDate: ['', Validators.required],
      serviceFP2: ['', Validators.required],
      serviceFP1: ['', Validators.required],
      familyPensionAmountFP1: ['', Validators.required],
      familyPensionAmountFP2: ['', Validators.required],
      serviceDCRG: ['', Validators.required],
      serviceCVP: ['', Validators.required],
      serviceGratuity: ['', Validators.required],

      recoveryType: ['', Validators.required],
      recoveryDetails: ['', Validators.required],
      recoveryFrom: ['', Validators.required],
      accountNo: ['', Validators.required],
      majorHead: ['', Validators.required],
      amountInRecovery: ['', Validators.required],
      amountOfRecovery: ['', Validators.required],

      // Pension Cut Details
      pensionCutCheck: [''],
      noOfYears: [''],
      orderNo: [''],
      orderDate: [''],
      noOfMonths: [''],
      nameNo1: ['', Validators.required],
      certificateForPensionableService: ['', Validators.required],
      retirementDateForCut: ['', Validators.required],
      pensionAmountCut: ['', Validators.required],
      pensionSanctionCertificate: ['', Validators.required],
      nameNo2: ['', Validators.required],
      nameNo3: ['', Validators.required],
      matrixLevel: ['', Validators.required],
      designationForPensionCut: ['', Validators.required],
      payBand: ['', Validators.required],
      departmentalInquiry: ['', Validators.required],
      noDueCertificate: ['', Validators.required],
      gradePay: ['', Validators.required],
      pensionCutNDC: ['', Validators.required],
      amountCutPerMonth: ['', Validators.required],
      cutType: ['', Validators.required],

      retirementAgeTeachers: [''],
      withheldGratuity: [''],
      treasuryPpoOffice: [''],
      fp1FromDate: [''],
      notionalService: [''],
      notionalServiceDate: [''],
      totalService: [''],
      retirementAge: [''],
      fp2FromDate: [''],
      fp1ToDate: [''],
      fp2ToDate: [''],
      provisionalFp1: [''],
      provisionalFp2: [''],
      pensionerEmailId: [''],
      gpfNoPpanNo: [''],
      otherDesignation: [''],
      termEndDatePart2: [''],
      designation: [''],
    });
  }

  newPensionPaperTwoData() {
    this.newPensionPaperTwo = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      designation: [''],
      otherDesignation: [''],
      dateOfBirth: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      toDateCtrl: ['', Validators.required],
      fromDateCtrl: ['', Validators.required],
      designationInsidJudge: ['', Validators.required],
      deteOfRetirement: ['', Validators.required],
      termEndDateApplicable: [''],
      termEndDatePart10: [''],
      pensionerEmailId: [''],
      gpfNoPpanNo: [''],
      typeOfPension: ['', Validators.required],
      voluntaryDate: ['', Validators.required],
      pensionerAddress: ['', Validators.required],
      phoneNo: ['', Validators.required],
      officeAddress: ['', Validators.required],
      officeEmailID: [''],
      officePhoneNo: [''],
      headOfDepartMent: ['', Validators.required],
      department: ['', Validators.required],
      provisionalPension: ['', Validators.required],
      provisionalDCRG: ['', Validators.required],
      provisionalDcrgAmount: ['', Validators.required],
      provisionalFamilyPension: ['', Validators.required],
      pensionNominee: ['1', Validators.required],
      fpNomineeSurname: ['', Validators.required],
      fpNomineeName: ['', Validators.required],
      fpNomineeLastName: ['', Validators.required],
      dcrgSanctionDate: [''],
      provisionalDcrgSanctioned: ['2', Validators.required],
      provisinolPensionAmount: ['', Validators.required],
      provisionalPensionDate: ['', Validators.required],
      cvpRate: ['', Validators.required],
      cvpDate: ['', Validators.required],
      cvpAge: ['', Validators.required],
      typeOFROP: ['', Validators.required],
      typeOFRevision: ['', Validators.required],
      serviceBreakType: ['', Validators.required],
      withheldGratuity: [''],
      provisionalFp1: [''],
      fp1FromDate: [''],
      fp1ToDate: [''],
      fp2FromDate: [''],
      fp2ToDate: [''],
      provisionalFp2: [''],
      treasuryPpoOffice: [''],
      lastPay: [''],
      currentPayScale: [''],
      gradePay: [''],
      npaApplicable: [''],
      npaRate: [''],
      dpRate: [''],
      daRate: [''],
      noOfMonthPensionCalculation: [''],
      pensionEPay: [''],
      revisedPensionableEPay: [''],
      pensionAmount: [''],
      revisedPensionAmount: [''],
      differencePensionableEPay: [''],
      differenceOfPensionAmount: [''],
      reducedPensionAmount: [''],
      grossPay: [''],
      cvpApplicationDate: [''],
      cvpEligibilityDate: [''],
      cvpPercentageOfCommutation: [''],
      pensionOfCvp: [''],
      cvpAge2: [''],
      cvpRate2: [''],
      cvpAmount: [''],
      revisedCvpAmount: [''],
      revisedCommutedPensionAmount: [''],
      commutedPensionAmount: [''],
      differenceofCvpAmount: [''],
      differenceCommutedPensionAmount: [''],
      revisedDcrgAmount: [''],
      revisedGratuityAmount: [''],
      dcrgAmount: [''],
      serviceGratuityAmount: [''],
      differenceDcrgAmount: [''],
      differenceServiceGratuityAmount: [''],
      revisedDcrgAmount2: [''],
      revisedGratuityAmount2: [''],
      dcrgAmount2: [''],
      serviceGratuityAmount2: [''],
      differenceDcrgAmount2: [''],
      differenceServiceGratuityAmount2: [''],
      serviceBreakRequired: [''],
      recoveryDetailsRequired: [''],
      pensionCutRequired: ['']
    });
  }


  pensionPaperThreeData() {
    this.pensionPaperThree = this.fb.group({
      officeName: ['', Validators.required],
      officeDepartment: [''],
      designation: ['', Validators.required],
      employeeName: ['', Validators.required],
      deathDatePicker: ['', Validators.required],
      applicantName: ['', Validators.required],
      applicantAddress: ['', Validators.required],
      relationWithEmployee: ['', Validators.required],
      fullName: ['', Validators.required],
      relation: ['', Validators.required],
      marriedAsk: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      nomineeAge: ['', Validators.required],
      remarks: [''],
      majorMinor: ['', Validators.required],
      disability: ['', Validators.required],
      disabilityType: [''],
      employeeNameSecond: ['', Validators.required],
      familyMemeberName: ['', Validators.required],
      treasury: ['', Validators.required],
      subTreasury: ['', Validators.required],
      guardianName: [''],
      familyPensionerName: ['', Validators.required],
      percentageOfFP: ['', Validators.required],
      isNominee: ['', Validators.required],
      nomineeAddress: ['', Validators.required],
      nomineeOfApplicant: [''],
      guardianAddress: [''],
      relationWithEmployeeSecond: [''],
      dateOfBirthSecond: [''],
      relationship: [''],
    });
  }
  pensionPaperFourData() {
    this.pensionPaperFour = this.fb.group({
      recoveryDetailsCheckBox: [''],
      employeeName: ['', Validators.required],
      designation: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      deteOfRetirement: ['', Validators.required],
      deathDatePicker: ['', Validators.required],
      actualService: ['', Validators.required],
      breakOfParticularPeriod: [''],
      netService: ['', Validators.required],
      salaryAtDeathTime: ['', Validators.required],
      lastpayBandGradePay: [''],
      familyPensionerName: ['', Validators.required],
      treasury: ['', Validators.required],
      recoveryType: ['', Validators.required],
      accountNo: ['', Validators.required],
      majorHead: ['', Validators.required],
      amountInRecovery: ['', Validators.required],
      recoveryFrom: ['', Validators.required],
      amountOfRecovery: ['', Validators.required],
      dcrgNominee: ['', Validators.required],
    });
  }
  pensionPaperFiveData() {
    this.pensionPaperFive = this.fb.group({
      employeeName: ['', Validators.required],
      designation: ['', Validators.required],
      schoolOrInstituteName: ['', Validators.required],

      // Service Detail
      instituteNameService: ['', Validators.required],
      serviceToDate: ['', Validators.required],
      serviceFromDate: ['', Validators.required],
      totalService: ['', Validators.required],
      pensionableService: ['', Validators.required],
      // CPF Detail

      cpfJoiningDate: ['', Validators.required],
      cpfAccountNo: [''], // ALso used in College
      employeeContributionWithInterest: ['', Validators.required],
      employerContributionWithInterest: ['', Validators.required],
      totalContribution: ['', Validators.required],
      balanceDateCPF: [''],
      amountInPassbook: [''],
      personalDepositAmount: [''],
      budgetHead: [''],
      cpfHead: [''],
      treasury: [''],
      cpfAmount: [''],
      majorHead: [''],
      challanNo: [''],
      dateForCPF: [''],
      nonCPFfromDate: [''],
      nonCPFtoDate: [''],
      iterestDateCPF: [''],
      fromDateCPF: [''],
      toDateCPF: [''],
      employeeJoiningDate: [''],
      retiremntDateCPF: [''],
      // College / University
      collegeName: [''],
      // Service Detail
      institteNameService: [''],
      cpfJoiningFromDate: [''],
      cpfJoiningToDate: [''],
      serviceJoiningDate: [''],
      collegServiceFromDate: [''],
      collegServiceToDate: [''],
      employerContributionService: [''],
      dcrgAmount: [''],
      fromDateDCRG: [''],


    });
  }
  getTabIndex(event?) {
  }
  fetchEmployeeDetails(empNum) {
    if (empNum) {
      this.onlinePensionForm.patchValue({
        firstName: 'FirstName',
        middleName: 'Middle Name',
        surName: 'SurName',
        gpfNoPpanNo: 'GPF1234',
        employeeType: '2',
        dateOfJoining: new Date(),
        deteOfRetirement: new Date(),
        dateOfBirth: new Date(),
        typeOfRetirement: '1',
        designation: '1',
      });
    }
  }
  addFamily() {
    this.familyList.push(this.familyList.length + 1);
  }
  addFamilyMember() {
    this.familyMemeberFor.push(this.familyMemeberFor.length + 1);
  }
  addRecoveryDetails() {
    this.recoverPartFourList.push(this.recoverPartFourList.length + 1);
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }
  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined,
          uploadedBy: ''
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        // this.toaster.error('Please fill the detail.');
      }
    }
  }
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  decimalFromControlPoint(formGroupName, controlName) {
    formGroupName.controls[controlName].value = Number(formGroupName.controls[controlName].value).toFixed(2);
    formGroupName.controls[controlName].setValue(formGroupName.controls[controlName].value);
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\\d{0,0})?$/;
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
  onlyPercent(event: any) {
    const pattern = /^[0-9.]*$/;
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

  addAnnualIncrementRow() {
    this.annualIncrementDataSource.data.push(
      {
        incrementDate: undefined,
        incrementAmount: '',
        basic: '',
        gradePay: ''
      }
    );
    this.annualIncrementDataSource.data = this.annualIncrementDataSource.data;
  }
  deleteAnnualIncrementRow(index) {
    this.annualIncrementData.splice(index, 1);
    this.annualIncrementDataSource.data = this.annualIncrementDataSource.data;
  }
  addRow() {
    this.pensionDetailsData.push(
      {
        pensionFromDate: undefined,
        pensionToDate: undefined,
        pensionNoOfMonths: '',
        pensionNoOfDays: '',
        basic: '',
        daAmount: '',
        npaAmount: '',
        gradePay: '',
        total: '',
      }
    );
    this.pensionDetailsDataSource.data = this.pensionDetailsDataSource.data;
  }

  addFamilyRow() {
    this.familDetailsDataSource.data.push(
      {
        name: '',
        relation: '',
        married: '',
        dateOfBirth: undefined,
        age: '',
        majorMinor: '',
        disability: '',
        disabilityType: '',
        gaurdianName: '',
        percentOfPf: '',
        isNominee: '',
        percentOfNominee: '',
      }
    );
    this.familDetailsDataSource.data = this.familDetailsDataSource.data;
  }
  deleteFamilyRow(index) {
    this.familyDetailData.splice(index, 1);
    this.familDetailsDataSource.data = this.familDetailsDataSource.data;
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
  deleteServiceBreakRow(index) {
    this.serviceBreakDetailData.splice(index, 1);
    this.serviceBreakDetailDataSource.data = this.serviceBreakDetailDataSource.data;
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
  deleteRecoveryDetailRow(index) {
    this.recoveryDetailData.splice(index, 1);
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
  deletePensionCutRow(index) {
    this.pensionCutData.splice(index, 1);
    this.pensionCutDataSource.data = this.pensionCutDataSource.data;
  }
  workflowDetails() { }
  openDialog() {

  }
  resetForm() { }
}
