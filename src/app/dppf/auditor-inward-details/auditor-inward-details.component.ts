import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { DppfMessage } from 'src/app/common/error-message/common-message.constants';
import { AnnualIncrement, PensionDetails, RecoveryDetail, ServiceBreakDetail, ServiceOtherDetail, InwardCase } from 'src/app/model/dppf';
import { TiRateTypeDialogComponent } from '../master-rate-updation-screen/master-rate-updation-screen.component';


@Component({
  selector: 'app-auditor-inward-details',
  templateUrl: './auditor-inward-details.component.html',
  styleUrls: ['./auditor-inward-details.component.css']
})
export class AuditorInwardDetailsComponent implements OnInit {

  // Family mat-table datasource data

  familyDetailData: any[] = [
    {
      name: '',
      group: '',
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

  // Service Tab tables data
  serviceBreakDetailData: ServiceBreakDetail[] = [
    {
      serviceBreakType: '',
      breakFromDate: undefined,
      breakToDate: undefined,
      breakofParticularPeriod: ''
    }
  ];
  serviceOtherDetailData: ServiceOtherDetail[] = [
    {
      checkList: '',
      status: ''
    }
  ];
  // Provisional Pension Details Table data
  provisionalPensionDetailslData: any[] = [
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
      sto: '',
    }
  ];

  // Pay Details Data
  annualIncrementData: AnnualIncrement[] = [
    {
      incrementDate: undefined,
      incrementAmount: '',
      basic: '',
      gradePay: '',
      payType: ''
    }
  ];

  // Pension cals details table data
  pensionDetailsData: PensionDetails[] = [];

  // Recovery/Cut Details Table Data
  recoveryDetailData: RecoveryDetail[] = [
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

  // Data Lists

  toogleYesNo_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  state_list: ListValue[] = [
    { value: '1', viewValue: 'Gujarat' },
    { value: '2', viewValue: 'Madhya Pradesh' }
  ];

  treasury_list: ListValue[] = [
    { value: '1', viewValue: 'Treasury1' }
  ];

  subTreasury_list: ListValue[] = [
    { value: '1', viewValue: 'sub Treasury1' }
  ];

  // service table lists
  typeOfRop_list: ListValue[] = [
    { value: '0', viewValue: 'ROP 1986' },
    { value: '1', viewValue: 'ROP 1998' },
    { value: '2', viewValue: 'ROP 2006' },
    { value: '3', viewValue: 'ROP 2016' },
  ];
  serviceBreakType_list: ListValue[] = [
    { value: '1', viewValue: 'Suspension' },
    { value: '2', viewValue: 'EOL more than 36 Month' },
    { value: '3', viewValue: 'Brake in service more than 3 Month' },
    { value: '4', viewValue: 'DW Service' },
    { value: '5', viewValue: 'Adhoc Service' },
    { value: '6', viewValue: 'Others' }
  ];
  checkList_list: ListValue[] = [
    { value: '1', viewValue: 'Institutional Fund' },
    { value: '2', viewValue: 'Original Challan' },
    { value: '3', viewValue: 'CPF Certificate' },
    { value: '4', viewValue: 'Credited in time' },
    { value: '5', viewValue: 'Credited in Major Head 0071' },
    { value: '6', viewValue: 'Teacher of Government Approved School' },
    { value: '7', viewValue: 'Salary From Govt. Grant' },
    { value: '8', viewValue: 'Rakshit Teacher Certificate' },
    { value: '9', viewValue: 'Notice of Month' },
    { value: '10', viewValue: 'Service Record Available' },
    { value: '11', viewValue: 'Service book is verified' },
    { value: '12', viewValue: 'Pay fixation by Jr Assistant Examiner' },
    { value: '13', viewValue: 'PF from secondary school service' },
    { value: '14', viewValue: 'Other' },
  ];
  retirementForTeacher_list: ListValue[] = [
    { value: '1', viewValue: '58' },
    { value: '2', viewValue: '60' },
    { value: '3', viewValue: '62' }
  ];

  // Family Details Table list
  disabilityType_lists: ListValue[] = [
    { value: '1', viewValue: 'Physically Handicapped' },
    { value: '2', viewValue: 'Mentally Retired' },
    { value: '3', viewValue: 'Deaf and Dumb' }
  ];
  group_lists: ListValue[] = [
    { value: '1', viewValue: 'Group 1' },
    { value: '2', viewValue: 'Group 2' },
  ];
  relation_lists: ListValue[] = [
    { value: '1', viewValue: 'Spouse' },
    { value: '2', viewValue: 'Son' },
    { value: '3', viewValue: 'Daughter' },
    { value: '4', viewValue: 'Father' },
    { value: '5', viewValue: 'Mother' },
    { value: '6', viewValue: 'Brother' },
    { value: '7', viewValue: 'Sister' },
    { value: '8', viewValue: 'Grand Father' },
    { value: '9', viewValue: 'Grand Mother' },
    { value: '10', viewValue: 'Mother in Law' },
    { value: '11', viewValue: 'Sister In Law' },
    { value: '12', viewValue: 'Uncle' },
    { value: '13', viewValue: 'cousin' },
    { value: '14', viewValue: 'Nephew' },
    { value: '15', viewValue: 'Aunty' },
    { value: '16', viewValue: 'Niece' },
    { value: '17', viewValue: 'Other' }
  ];

  // Pay Detail List
  currentPayScale_list: ListValue[] = [
    { value: '1', viewValue: 'current pay1' }
  ];
  gradePay_list: ListValue[] = [
    { value: '1', viewValue: 'grade pay1' }
  ];
  noOfMonthPensionCalculation_list: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '10' },
    { value: '3', viewValue: '20' },
    { value: '4', viewValue: '36' }
  ];
  lastScale_list: ListValue[] = [
    { value: '1', viewValue: 'last Scale1' }
  ];
  promotedScale_list: ListValue[] = [
    { value: '1', viewValue: 'promoted scale1' }
  ];
  payType_list: ListValue[] = [
    { value: '1', viewValue: 'Regular Increment' },
    { value: '2', viewValue: 'Event Increment' },
    { value: '3', viewValue: 'Promotion' },
    { value: '4', viewValue: 'Higher Grade' },
    { value: '5', viewValue: 'Change Of Scale' },
    { value: '6', viewValue: 'Demotion' },
  ];

  // Recovery/Cut Details List
  recoveryType_list: ListValue[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
    { value: '3', viewValue: 'Pay & Allowances' },
    { value: '4', viewValue: 'House Rent' },
    { value: '5', viewValue: 'Others' },
  ];
  // degham sto
  recoveryFrom_list: ListValue[] = [
    { value: '1', viewValue: 'DCRG' },
    { value: '2', viewValue: 'CVP' },
    { value: '3', viewValue: 'Pension' },
    { value: '4', viewValue: 'Family Pension' },
    { value: '5', viewValue: 'Others' }
  ];
  cutType_list: ListValue[] = [
    { value: '1', viewValue: 'Temporary' },
    { value: '2', viewValue: 'Permanent' }
  ];

  // Pension Calc Details List
  treasuryPpoOffice_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  treasuryPpo_list: ListValue[] = [
    { value: '1', viewValue: 'tresury Ppo' }
  ];

  // Inward Details Tab Lists
  caseType_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  typeOfInward_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  pensionerState_list = this.state_list;
  pensionerDistrict_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  talukaPensioner_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  gender_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  pensionType_list: ListValue[] = [
    { value: '1', viewValue: ' Retiring' },
    { value: '2', viewValue: 'Absorption' },
    { value: '3', viewValue: ' Compensation' },
    { value: '4', viewValue: 'Compassionate' },
    { value: '5', viewValue: ' Family' },
    { value: '6', viewValue: ' Family Lost' },
    { value: '7', viewValue: ' Invalid' },
    { value: '8', viewValue: 'Other' },
    { value: '9', viewValue: ' Superannuation' },
    { value: '10', viewValue: 'Voluntary' },
    { value: '11', viewValue: ' Wound and Injury' },
  ];
  pensionerType_list: ListValue[] = [
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
  designationType_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  officeState_list = this.state_list;
  officeDistrict_list = this.pensionerDistrict_list;
  officeTaluka_list = this.talukaPensioner_list;
  officeDepartment_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  hod_list: ListValue[] = [
    { value: '1', viewValue: 'office1' }
  ];
  TreasutyPPOList: any[] = [
    { value: '0', viewValue: 'Pension Payment Office Gandhinagar' },
    { value: '1', viewValue: 'Pension Payment Office Baroda' },
  ];

  stoList: any[] = [
    { value: '0', viewValue: 'Pension Payment Office Gandhinagar' },
    { value: '1', viewValue: 'Pension Payment Office Baroda' },
  ];
  attachmentTypeList: any[] = [
    { value: '1', viewValue: 'Photo' },
    { value: '2', viewValue: 'Signature' },
    { value: '3', viewValue: 'Identification Mark' },
  ];
  guardianAttachmentTypeList: any[] = [
    { value: '1', viewValue: 'Photo' },
    { value: '2', viewValue: 'Signature' },
    { value: '3', viewValue: 'Identification Mark' },
  ];

  sixthScaleList: any[] = [
    { value: '1', viewValue: '6500' },
    { value: '2', viewValue: '200' },
    { value: '3', viewValue: '10000' },
  ];

  // Table Columns

  familyDetailColumns = [
    'name', 'group', 'relation', 'married', 'dateOfBirth', 'age',
    'majorMinor', 'disability', 'disabilityType', 'gaurdianName',
    'percentOfPf', 'isNominee', 'percentOfNominee', 'action'
  ];
  serviceBreakColumn = [
    'serviceBreakType', 'breakFromDate', 'breakToDate', 'breakofParticularPeriod', 'action'
  ];
  serviceOtherColumn = [
    'checkList', 'status', 'action'
  ];
  annualIncrementColumn = [
    'incrementDate', 'incrementAmount', 'basic', 'payType', 'action'
  ];
  pensionDetailsColumn = [
    'pensionFromDate', 'pensionToDate', 'pensionNoOfMonths', 'pensionNoOfDays', 'basic',
    'daAmount', 'npaAmount', 'gradePay', 'total'
  ];
  recoveryDetailColumn = [
    'recoveryType', 'accountNumber', 'majorHead', 'amount', 'recoveryFrom', 'amountOfRecovery', 'action'
  ];
  pensionCutColumn = [
    'cutType', 'perCut', 'amount', 'amountToBeCut', 'numberOfYears', 'numberOfMonths', 'orderNumber', 'orderDate', 'action'
  ];
  provisionalPensionDetailsColumns = [
    'srno', 'orderNo', 'orderDate', 'provisionalPension', 'ppFromDate', 'ppToDate', 'provisionalDcrg', 'pdFromDate', 'pdToDate',
    'provisionalFp1', 'pfFromDate', 'pfToDate', 'provisional', 'pFromDate', 'pToDate', 'treasuryPpo', 'sto', 'action',
  ];

  classType: ListValue[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Revision' }
  ];


  npaAppList: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  npaRateList: any[] = [
    { value: '1', viewValue: '15' },
    { value: '2', viewValue: '25' },
  ];

  serviceTypeList: any[] = [
    { value: '1', viewValue: '1. State / Panchayat' },
    { value: '2', viewValue: '2. Municipal Board' }
  ];

  // FormGroup

  public onlinePensionForm: FormGroup;

  // Mat Table Data Sources

  todaysDate = new Date();
  maxDate = new Date();
  familDetailsDataSource = new MatTableDataSource<any>(this.familyDetailData);
  serviceBreakDetailDataSource = new MatTableDataSource<ServiceBreakDetail>(this.serviceBreakDetailData);
  serviceOtherDetailDataSource = new MatTableDataSource<ServiceOtherDetail>(this.serviceOtherDetailData);
  annualIncrementDataSource = new MatTableDataSource<AnnualIncrement>(this.annualIncrementData);
  pensionDetailsDataSource = new MatTableDataSource<PensionDetails>(this.pensionDetailsData);
  recoveryDetailDataSource = new MatTableDataSource<RecoveryDetail>(this.recoveryDetailData);
  pensionCutDataSource = new MatTableDataSource<any>(this.pensionCutData);
  provisionalPensionDetailsDataSource = new MatTableDataSource<any>(this.provisionalPensionDetailslData);
  isPensionCut = false;
  isRecoveryDetails = false;
  selectedIndex = 0;
  selectedIndexMain = 0;
  maxRetirementAge = 62;
  errormsg = DppfMessage;
  isDisable = false;
  isButton = true;
  isJudge = false;

  // Controls Fro Search Bar in Select

  stateCtrl: FormControl = new FormControl();
  treasuryCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  pensionerStateCtrl: FormControl = new FormControl();
  pensionerDistrictCtrl: FormControl = new FormControl();
  talukaPensionerCtrl: FormControl = new FormControl();
  pensionTypeCtrl: FormControl = new FormControl();
  pensionerTypeCtrl: FormControl = new FormControl();
  designationTypeCtrl: FormControl = new FormControl();
  officeStateCtrl: FormControl = new FormControl();
  officeDistrictCtrl: FormControl = new FormControl();
  officeTalukaCtrl: FormControl = new FormControl();
  officeDepartmentCtrl: FormControl = new FormControl();
  hodCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  seventhCellIDCtrl: FormControl = new FormControl();
  SixthPayBandCtrl: FormControl = new FormControl();
  currentPayScaleCtrl: FormControl = new FormControl();
  npaAppCtrl: FormControl = new FormControl();
  npaRateCtrl: FormControl = new FormControl();
  SixthGradPayCtrl: FormControl = new FormControl();
  seventhPayLevelCtrl: FormControl = new FormControl();
  ReasonForRevisionCase: FormControl = new FormControl();
  classCourtCase: FormControl = new FormControl();
  ManualPPORequiredCTRL: FormControl = new FormControl();
  SalutationCtrl: FormControl = new FormControl();
  StateType: FormControl = new FormControl();
  otherStateToCtrl: FormControl = new FormControl();
  otherStateStoCtrl: FormControl = new FormControl();
  serviceTypeCtrl: FormControl = new FormControl();
  seventhCellIDList: any[] = [
    { value: '1', viewValue: '16' },
  ];
  sixthPayBandList: any[] = [
    { value: '1', viewValue: '9300-34800(PB2)' },
  ];

  otherStateTo_list: ListValue[] = [
    { value: '1', viewValue: ' ' },
  ];

  otherStateSto_list: ListValue[] = [
    { value: '1', viewValue: ' ' },
  ];
  seventhPayLevelList: any[] = [
    { value: '1', viewValue: '7' },
  ];

  sixthGradPayList: any[] = [
    { value: '1', viewValue: '4200' },
    { value: '2', viewValue: '4400' },
    { value: '3', viewValue: '4600' },
    { value: '4', viewValue: '5400' },
  ];

  state: any[] = [
    { value: '1', viewValue: 'Gujarat' },
    { value: '2', viewValue: 'Maharashtra' },
    { value: '3', viewValue: 'Andhra Pradesh' },
    { value: '4', viewValue: 'Goa' },
    { value: '5', viewValue: 'Punjab' },
    { value: '6', viewValue: 'Uttar Pradesh' },
    { value: '7', viewValue: 'Rajsthan' },
    { value: '8', viewValue: 'Madhya Pradesh' },
  ];
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
    { value: '10', viewValue: 'Revision for ROP 2009' },
    { value: '11', viewValue: 'Revision for ROP 2016' },
    { value: '12', viewValue: 'Revision Before Payment' },
    { value: '13', viewValue: '27/03/2012 Revision' },
    { value: '14', viewValue: '50% DA Merge' },
    { value: '15', viewValue: 'ROP 1996 Notional Revision' },
    { value: '16', viewValue: 'IAS 12/5/2017' },
    { value: '17', viewValue: 'ROP 2009 Before 13/4/2009' },
    { value: '18', viewValue: 'Change in Pension' },
    { value: '19', viewValue: 'Other' }
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
  // Table Source
  pantion_data_table: InwardCase[] = [
    {
      frmDate: '',
      toDate: '',
      serPlace: ' ',
      serType: '',
      recoveryIf: '',
    },
  ];

  dataSource = new MatTableDataSource<InwardCase>(this.pantion_data_table);

  displayedColumns: any[] = [
    'serialNo',
    'frmDate',
    'toDate',
    'serPlace',
    'serType',
    'recoveryIf',
    'action',
  ];


  // Attachment.....................................................................
  supportingDocument_list: ListValue[] = [
    { value: '', viewValue: 'Photo' },
    { value: '', viewValue: 'Signature' }
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
  guardianColumns = [
    'srno',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
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
  fileBrowseIndex: number;
  fileGuardianIndex: number;
  dataSourceBrowse = new MatTableDataSource(this.browseData);
  guardianDataSource = new MatTableDataSource(this.guardianData);
  typeSelect = false;
  typeSelectSix = false;
  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          attachmentType: undefined,
          name: undefined,
          file: undefined
        });
        this.dataSourceBrowse.data = p_data;
      } else {
      }
    }
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
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  deleteGuardian(index) {
    this.guardianDataSource.data.splice(index, 1);
    this.guardianDataSource = new MatTableDataSource(this.guardianDataSource.data);
  }
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }
  onGuardianFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.guardianDataSource.data[this.fileGuardianIndex].file =
        fileSelected.target.files[0];
    }
  }
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }
  openGuardianFileSelector(index) {
    this.el.nativeElement.querySelector('#guardianFileBrowse').click();
    this.fileGuardianIndex = index;
  }
  // ..................................................................................

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

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, public dialogRef: MatDialogRef<AuditorInwardDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data === 'noButtons') {
      this.isButton = false;
    } else {
      this.isButton = true;
    }
  }

  ngOnInit() {

    // Pension Detail Table Data
    this.pensionDetailsData.push(
      {
        pensionFromDate: new Date(),
        pensionToDate: new Date(),
        pensionNoOfMonths: '1',
        pensionNoOfDays: '10',
        basic: '10000',
        daAmount: '1000',
        npaAmount: '1200',
        gradePay: '1909',
        total: '10101',
      }
    );

    this.pensionDetailsDataSource.data = this.pensionDetailsDataSource.data;

    // Variable for Pensioners Detail tab
    this.onlinePensionForm = this.fb.group({
      // FormControls for inward details
      inwardNumber: ['010608/05/2019'],
      inwardDate: undefined,
      ppoNumber: [''],
      name: ['Indira Ben Jagdeshbhai Patel'],
      dateOfBirth: [new Date((new Date().getFullYear()) - 70, new Date().getMonth(), new Date().getDay())],
      dateOfJoining: [new Date((new Date().getFullYear()) - 50, new Date().getMonth(), new Date().getDay())],
      dateOfRetirement: [new Date((new Date().getFullYear()) - 10, new Date().getMonth(), new Date().getDay())],
      // Formcontrols of Pensioners Detail tab
      bankName: [''],
      branchName: [''],
      sixthpayband: [''],
      bankAccountNumber: [''],
      ifscCode: [''],
      officeEmail: [''],
      pensionerEmail: [''],
      correspondanceAddress: [''],
      permanentAddress: [''],
      state: [''],
      appliedForCommutation: [''],
      applicationDate: [''],
      percentageOfCommutation: [''],
      treasury: [''],
      subTreasury: [''],
      // Service Details Tab
      typeOfRop: [''],
      notionalService: [''],
      additionalService: [''],
      ruleNo37: [''],
      ageOfRetirement: [''],
      VerRangePay: [''],
      basicPay: [''],
      totalService: [''],
      notionalRetirementDate: [''],
      totalBreak: [''],
      actualService: [''],
      netService: [''],
      pensionableService: [''],
      retirementForTeacher: [''],

      // Pension Calc Details
      pensionEPay: [''],
      pensionAmount: [''],
      reducedPensionAmount: [''],
      grossPay: [''],
      cvpApplicationDate: [''],
      cvpEligibilityDate: [''],
      cvpPercentageOfCommutation: [''],
      pensionOfCvp: [''],
      cvpAge: [''],
      cvpRate: [''],
      cvpAmount: [''],
      commutedPensionAmount: [''],
      dcrgAmount: [''],
      serviceGratuityAmount: [''],
      provisionalPensionSanctioned: ['2'],
      provisinolPensionAmount: [''],
      provisionalPensionDate: [''],
      msbPensionablePay: [''],
      totalPensionAmount: [''],

      provisionalDcrgSanctioned: ['2'],
      provisionalDcrgAmount: [''],
      withheldGratuity: [''],
      remarks: [''],
      differencePensionableEPay: [''],
      differenceOfPensionAmount: [''],
      adjustmentAmount: [''],
      withheldAmount: [''],
      adjustmentAmountHeadCode: [''],
      revisedPensionAmount: [''],
      revisedPensionableEPay: [''],
      revisedCvpAmount: [''],
      revisedCommutedPensionAmount: [''],
      differenceofCvpAmount: [''],
      differenceCommutedPensionAmount: [''],
      revisedDcrgAmount: [''],
      revisedGratuityAmount: [''],
      differenceDcrgAmount: [''],
      differenceServiceGratuityAmount: [''],
      provisionalFp1: [''],
      provisionalFp2: [''],
      provisionalPensionFromDate: [''],
      provisionalPensionToDate: [''],
      treasuryPpoOffice: [''],
      revisedFp1Amount: [''],
      revisedFp2Amount: [''],
      differenceFp1Amount: [''],
      differenceFp2Amount: [''],
      treasuryPpo: [''],
      dcrgSanctionDate: [''],
      revisedMsbPensionablePay: [''],
      revisedTotalPensionAmount: [''],
      revisedMsbCVPPay: [''],
      revisedTotalCVPAmount: [''],
      revisedMsbDCRGPay: [''],
      revisedTotalDCRGAmount: [''],
      msbCVPPay: [''],
      totalCVPAmount: [''],
      msbDCRGPay: [''],
      totalDCRGAmount: [''],

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

      msbFpOneAmount: [''],
      msbFpTwoAmount: [''],
      totalFpOneAmount: [''],
      totalFpTwoAmount: [''],
      // Recovery/Cut Details Tab
      recoveryDetailsCheck: [''],
      pensionCutCheck: [''],

      // inward Details Tab
      caseType: ['2'],
      typeOfInward: [{ value: '', disabled: true }],
      empNo: [{ value: '', disabled: true }],
      ppoNo: [{ value: '', disabled: true }],
      documentCourt: [{ value: '', disabled: true }],
      noOfRevision: [{ value: '', disabled: true }],
      inwardNumberInwardTab: [{ value: '010608/05/2019', disabled: true }],
      inwardDateInwardTab: [{ value: '', disabled: true }],
      courtCase: [{ value: '', disabled: true }],
      reasonForRevision: [''],
      maualPPORequired: [{ value: '', disabled: true }],
      manualPPO: [{ value: '', disabled: true }],
      revisionPPONO: [{ value: '', disabled: true }],
      serviceCertificateNo: [{ value: '', disabled: true }],
      salutation: [''],
      firstName: [''],
      middleName: [''],
      surName: [''],
      pensionerState: [''],
      pensionerDistrict: [''],
      talukaPensioner: [''],
      pensionerAddress: [''],
      pinCode: [''],
      gender: [''],
      gpfnum: [''],
      ppannum: [''],
      prannum: [''],
      height: [''],
      idMark: [''],
      otherStatePensioner: [''],
      otherState: [''],
      otherStateTo: [''],
      otherStateSto: [''],
      typeOfPension: [''],
      pensionerType: [''],
      designation: [''],
      otherDesignation: [''],
      pensionStartDate: undefined,
      officeName: [''],
      officeAddress: [''],
      officeState: [''],
      officeDistrict: [''],
      officeTaluka: [''],
      officeDepartment: [''],
      hod: [''],
      officePinCode: [''],
      inwardDetailsRemarks: [''],


      // Pay Details Tab
      lastPay: [''],
      currentPayScale: [''],
      gradePay: [''],
      npaApplicable: [''],
      npaRate: [''],
      noOfMonthPensionCalculation: [''],
      promotionDemotionDate: [''],
      basic: [''],
      lastScale: [''],
      promotedScale: [''],
      lastBasic: [''],
      payband: ['1'],
      lastPayBandValue: [''],
      gradPay: ['4'],
      seventhPayLevel: ['1'],
      seventhCellID: ['1'],
      lastBasicPay: ['100000'],
      verticalPayLvl: ['39900-126600'],
      npaApp: ['2'],
      npaAmount: [''],
      totabBasicWithNpa: [''],
      dpRate: ['0'],
      daRate: ['117'],

    });
  }
  onTypeOfPensioner(event) {
    if (event.value === '7' || event.value === '8') {
      this.isJudge = true;
    } else {
      this.isJudge = false;
    }
  }

  onRop(event) {
    const value = event.value;
    console.log('in rop four :' + value);

    if (value === '0') {
      this.onlinePensionForm.patchValue({
        lastBasic: ['2725'],
        npaApp: ['2'],
      });
      this.sixthScaleList = [
        { value: '1', viewValue: '2200-75-2800-EB-100-4200' },
      ];
      this.annualIncrementColumn = [
        'incrementDate', 'incrementAmount', 'basic', 'payType', 'action'
      ];
    }
    if (value === '1') {
      this.onlinePensionForm.patchValue({
        lastBasic: ['7100'],
        npaApp: ['2'],
      });
      this.sixthScaleList = [
        { value: '1', viewValue: '6500-200-10500' },
      ];
      this.annualIncrementColumn = [
        'incrementDate', 'incrementAmount', 'basic', 'payType', 'action'
      ];
    }
    if (value === '2' || this.isJudge) {
      this.onlinePensionForm.patchValue({
        lastBasic: ['7100'],
        npaApp: ['2']
      });
      this.sixthScaleList = [
        { value: '1', viewValue: '6500-200-10500' },
      ];
      this.annualIncrementColumn = [
        'incrementDate', 'incrementAmount', 'basic', 'gradePay', 'payType', 'action'
      ];
    }
    if (value === '2') {
      this.onlinePensionForm.patchValue({
        payband: ['1'],
        npaApp: ['2'],
        lastPayBandValue: ['20000'],
        basicPay: ['25400'],
        npaRate: [''],
        npaAmount: [''],
        totabBasicWithNpa: [''],
      });
      this.annualIncrementColumn = [
        'incrementDate', 'incrementAmount', 'basic', 'gradePay', 'payType', 'action'
      ];
    }
    if (value === '3') {
      this.onlinePensionForm.patchValue({
        payband: ['1'],
        npaApp: ['2'],
        seventhCellID: ['100000'],
        npaRate: [''],
        npaAmount: [''],
        totabBasicWithNpa: [''],
      });
      this.annualIncrementColumn = [
        'incrementDate', 'incrementAmount', 'basic', 'gradePay', 'payType', 'action'
      ];
    }
  }

  onNpaRate2006(event) {
    if (event.value === '2') {
      this.onlinePensionForm.patchValue({
        npaAmount: ['6350'],
        totabBasicWithNpa: ['31750'],
      });
    }
  }

  onNpaRate2016(event) {
    if (event.value === '2') {
      this.onlinePensionForm.patchValue({
        npaAmount: ['25000'],
        totabBasicWithNpa: ['125000'],
      });
    }
  }

  calculateAge(index) {
    this.familDetailsDataSource.data[index].age = '58';
    this.familDetailsDataSource.data = this.familDetailsDataSource.data;
  }

  checkAge(event?) {
    const pattern = /^\d+(\\d{0,2})?$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    } else if (Number(tempstr) > this.maxRetirementAge) {
      return false;
    }
  }

  decimalFromControlPoint(formGroupName, controlName) {
    formGroupName.controls[controlName].value = Number(formGroupName.controls[controlName].value).toFixed(2);
    formGroupName.controls[controlName].setValue(formGroupName.controls[controlName].value);
  }

  ontoken(index) {
    if (index.value === '3') {
      this.typeSelectSix = true;
    } else {
      this.typeSelectSix = false;
    }
    if (index.value === '4') {
      this.typeSelect = true;
    } else {
      this.typeSelect = false;
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


  onCancle(): void {
    this.dialogRef.close('no');
  }


  addFamilyRow() {
    this.familDetailsDataSource.data.push(
      {
        name: '',
        group: '',
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

  addServiceOtherRow() {
    this.serviceOtherDetailDataSource.data.push(
      {
        checkList: '',
        status: ''
      }
    );
    this.serviceOtherDetailDataSource.data = this.serviceOtherDetailDataSource.data;
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
      perCut: '',
      amountToBeCut: '',
      numberOfYears: '',
      numberOfMonths: '',
      orderNumber: '',
      orderDate: undefined
    });
    this.pensionCutDataSource.data = this.pensionCutDataSource.data;
  }

  deleteFamilyRow(index) {
    this.familyDetailData.splice(index, 1);
    this.familDetailsDataSource.data = this.familDetailsDataSource.data;
  }

  deleteServiceBreakRow(index) {
    this.serviceBreakDetailData.splice(index, 1);
    this.serviceBreakDetailDataSource.data = this.serviceBreakDetailDataSource.data;
  }

  deleteServiceOtherRow(index) {
    this.serviceOtherDetailData.splice(index, 1);
    this.serviceOtherDetailDataSource.data = this.serviceOtherDetailDataSource.data;
  }

  deleteAnnualIncrementRow(index) {
    this.annualIncrementData.splice(index, 1);
    this.annualIncrementDataSource.data = this.annualIncrementDataSource.data;
  }

  deleteRecoveryDetailRow(index) {
    this.recoveryDetailData.splice(index, 1);
    this.recoveryDetailDataSource.data = this.recoveryDetailDataSource.data;
  }

  deletePensionCutRow(index) {
    this.pensionCutData.splice(index, 1);
    this.pensionCutDataSource.data = this.pensionCutDataSource.data;
  }
  // attachemnt methods
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

  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  getTabIndexMain(tabIndex) {
    this.selectedIndexMain = tabIndex;
  }
  // Pension Pay Popup
  openPensionablePayDialog($event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(PensionablePayDialog, {
      width: '1200px',
      disableClose: true
    }
    );
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  // Verify Popup
  openVerifyPopup() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(TiRateTypeDialogComponent, {

      width: '400px',
      disableClose: true,
      data: 'verify'
    }
    );
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  // Sr Dialog
  openSr() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SrDialog, {
      width: '1800px',
      height: '700px'
    }
    );
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  goToNext() {
    this.selectedIndex++;
  }
  onRecoveryDetails() {
    this.isRecoveryDetails = !this.isRecoveryDetails;
  }
  onPensionCut() {
    this.isPensionCut = !this.isPensionCut;
  }
  // Table functions
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

}

// Pensionable Pay Dialog-Box
@Component({
  selector: 'app-pensionable-pay-details',
  templateUrl: './pensionable-pay-details-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class PensionablePayDialog {

  constructor(
    public dialogRef: MatDialogRef<PensionablePayDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.addRow();
  }

  pensionDetailsData: PensionDetails[] = [];

  pensionDetailsColumn = [
    'pensionFromDate', 'pensionToDate', 'pensionNoOfMonths', 'pensionNoOfDays', 'basic',
    'daAmount', 'npaAmount', 'gradePay', 'total', 'action'
  ];
  pensionDetailsDataSource = new MatTableDataSource<PensionDetails>(this.pensionDetailsData);

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

  deleteRow(index) {
    this.pensionDetailsData.splice(index, 1);
    this.pensionDetailsDataSource.data = this.pensionDetailsDataSource.data;
  }

  okClick($event?) {
    this.dialogRef.close();
  }

  closeClick($event?) {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'app-sr-dialog',
  templateUrl: './sr-dialog.html'
})
// tslint:disable-next-line: component-class-suffix
export class SrDialog {
  ppoNo: any;
  dt: any;
  gpfNumber: any;
  pensionPaymentNo: any;
  pensionType: any;
  pensionerName: any;
  designation: any;
  pensionerType: any;
  department: any;
  hod: any;
  officeName: any;
  residentialAddress: any;
  payScale: any;
  dateOfBirth: any;
  dateOfJoining: any;
  retiredDeathDate: any;
  termEndDate: any;
  totalService: any;
  voGCSR4849: any;
  judGCSR37: any;
  serviceBreak: any;
  netService: any;
  pensionableService: any;
  notRetirementDate: any;
  pensionStartDate: any;
  lastPay: any;
  dp: any;
  npa: any;
  grossPay: any;
  pensionablePay: any;
  pensionAmount: any;
  provisionalPension: any;
  provisionalGratuity: any;
  provisionalPensionDate: any;
  pensionForCvp: any;
  commutedAmount: any;
  reducedPension: any;
  applDate: any;
  cvpEligibilityDate: any;
  commutedPercent: any;
  cvpAge: any;
  cvpRate: any;
  cvpAmount: any;
  gratuity: any;
  serviceGratuity: any;
  totalGratuity: any;
  withheldGratuity: any;
  gratuityToBePaid: any;
  daPercent: any;
  treasury: any;
  subTreasury: any;
  familyPension1Amount: any;
  familyPension1Date: any;
  familyPension2Amount: any;
  familyPension2Date: any;
  inscrementDetails: any;

  constructor(
    public dialogRef: MatDialogRef<SrDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  okClick($event?) {
    this.dialogRef.close();
  }
  // tslint:disable-next-line: member-ordering
  inwardDate = new Date();
  onPrint() {
    window.print();
  }

}
