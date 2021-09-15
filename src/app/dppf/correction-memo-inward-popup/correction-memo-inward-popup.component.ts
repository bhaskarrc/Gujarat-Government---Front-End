import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MatTableDataSource,
  MAT_DIALOG_DATA
} from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { ListValue } from 'src/app/model/common-grant';
import { FamilyDetails, ServiceBreakDetail, ServiceOtherDetail, PensionDetails, RecoveryDetail, PensionCut } from 'src/app/model/dppf';
import { PensionablePayDialog, SrDialog } from '../auditor-inward-details/auditor-inward-details.component';
import { CorrectionComponent } from '../inward-outward-details/inward-outward-details.component';
import { TiRateTypeDialogComponent } from '../master-rate-updation-screen/master-rate-updation-screen.component';
@Component({
  selector: 'app-correction-memo-inward-popup',
  templateUrl: './correction-memo-inward-popup.component.html',
  styleUrls: ['./correction-memo-inward-popup.component.css']
})
export class CorrectionMemoInwardPopupComponent implements OnInit {
  familyDetailData: FamilyDetails[] = [
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
      percentOfNominee: ''
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

  // Pay Details Data
  annualIncrementData: any[] = [
    {
      incrementDate: undefined,
      incrementAmount: '',
      basic: '',
      gradePay: ''
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
  pensionCutData: PensionCut[] = [
    {
      cutType: '',
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

  treasury_list: ListValue[] = [{ value: '1', viewValue: 'Treasury1' }];

  subTreasury_list: ListValue[] = [{ value: '1', viewValue: 'sub Treasury1' }];

  // service table lists
  typeOfRop_list: ListValue[] = [
    { value: '1', viewValue: 'ROP 1986' },
    { value: '2', viewValue: 'ROP 1998' },
    { value: '3', viewValue: 'ROP 2006' },
    { value: '4', viewValue: 'ROP 2016' }
  ];
  serviceBreakType_list: ListValue[] = [
    { value: '1', viewValue: 'Suspension' },
    { value: '2', viewValue: 'LWP' },
    { value: '3', viewValue: 'Brake' },
    { value: '4', viewValue: 'Others' }
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
    { value: '14', viewValue: 'Other' }
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
  gradePay_list: ListValue[] = [{ value: '1', viewValue: 'grade pay1' }];
  noOfMonthPensionCalculation_list: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '10' },
    { value: '3', viewValue: '20' },
    { value: '4', viewValue: '36' }
  ];
  lastScale_list: ListValue[] = [{ value: '1', viewValue: 'last Scale1' }];
  promotedScale_list: ListValue[] = [
    { value: '1', viewValue: 'promoted scale1' }
  ];

  // Recovery/Cut Details List
  recoveryType_list: ListValue[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
    { value: '3', viewValue: 'Others' }
  ];
  recoveryFrom_list: ListValue[] = [
    { value: '1', viewValue: 'DCRG' },
    { value: '2', viewValue: 'CVP' },
    { value: '3', viewValue: 'Others' }
  ];
  cutType_list: ListValue[] = [
    { value: '1', viewValue: 'Temporary' },
    { value: '2', viewValue: 'Permanent' }
  ];

  // Pension Calc Details List
  treasuryPpoOffice_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];
  treasuryPpo_list: ListValue[] = [{ value: '1', viewValue: 'tresury Ppo' }];

  // Inward Details Tab Lists
  caseType_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];
  typeOfInward_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];
  pensionerState_list = this.state_list;
  pensionerDistrict_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];
  talukaPensioner_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];
  gender_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];
  pensionType_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];
  pensionerType_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];
  designationType_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];
  officeState_list = this.state_list;
  officeDistrict_list = this.pensionerDistrict_list;
  officeTaluka_list = this.talukaPensioner_list;
  officeDepartment_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];
  hod_list: ListValue[] = [{ value: '1', viewValue: 'office1' }];

  // Table Columns

  familyDetailColumns = [
    'name',
    'relation',
    'married',
    'dateOfBirth',
    'age',
    'majorMinor',
    'disability',
    'disabilityType',
    'gaurdianName',
    'percentOfPf',
    'isNominee',
    'percentOfNominee',
    'action'
  ];
  serviceBreakColumn = [
    'serviceBreakType',
    'breakFromDate',
    'breakToDate',
    'breakofParticularPeriod',
    'action'
  ];
  serviceOtherColumn = ['checkList', 'status', 'action'];
  annualIncrementColumn = [
    'incrementDate',
    'incrementAmount',
    'basic',
    'gradePay',
    'action'
  ];
  pensionDetailsColumn = [
    'pensionFromDate',
    'pensionToDate',
    'pensionNoOfMonths',
    'pensionNoOfDays',
    'basic',
    'daAmount',
    'npaAmount',
    'gradePay',
    'total'
  ];
  recoveryDetailColumn = [
    'recoveryType',
    'accountNumber',
    'majorHead',
    'amount',
    'recoveryFrom',
    'amountOfRecovery',
    'action'
  ];
  pensionCutColumn = [
    'cutType',
    'amountToBeCut',
    'numberOfYears',
    'numberOfMonths',
    'orderNumber',
    'orderDate',
    'action'
  ];

  // FormGroup

  onlinePensionForm: FormGroup;

  // Mat Table Data Sources

  familDetailsDataSource = new MatTableDataSource<FamilyDetails>(
    this.familyDetailData
  );
  serviceBreakDetailDataSource = new MatTableDataSource<
    ServiceBreakDetail
  >(this.serviceBreakDetailData);
  serviceOtherDetailDataSource = new MatTableDataSource<
    ServiceOtherDetail
  >(this.serviceOtherDetailData);
  annualIncrementDataSource = new MatTableDataSource<any>(
    this.annualIncrementData
  );
  pensionDetailsDataSource = new MatTableDataSource<PensionDetails>(
    this.pensionDetailsData
  );
  recoveryDetailDataSource = new MatTableDataSource<RecoveryDetail>(
    this.recoveryDetailData
  );
  pensionCutDataSource = new MatTableDataSource<PensionCut>(
    this.pensionCutData
  );

  selectedIndex = 0;
  selectedIndexMain = 0;
  maxRetirementAge = 62;

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

  // Attachment.....................................................................
  supportingDocument_list: ListValue[] = [
    { value: '', viewValue: 'Photo' },
    { value: '', viewValue: 'Signature' }
  ];
  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  browseData: any[] = [
    {
      name: undefined,
      file: undefined
    },
    {
      name: undefined,
      file: undefined
    }
  ];
  fileBrowseIndex: number;
  dataSourceBrowse = new MatTableDataSource(this.browseData);
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
  // ..................................................................................

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private el: ElementRef,
    public dialogRef: MatDialogRef<TiRateTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    // Pension Detail Table Data
    this.pensionDetailsData.push({
      pensionFromDate: new Date(),
      pensionToDate: new Date(),
      pensionNoOfMonths: '1',
      pensionNoOfDays: '10',
      basic: '10000',
      daAmount: '1000',
      npaAmount: '1200',
      gradePay: '1909',
      total: '10101'
    });
    this.pensionDetailsDataSource.data = this.pensionDetailsDataSource.data;

    // Variable for Pensioners Detail tab
    this.onlinePensionForm = this.fb.group({
      // FormControls for inward details
      inwardNumber: ['010608/05/2019'],
      inwardDate: undefined,
      ppoNumber: [''],
      name: ['Indira Ben Jagdeshbhai Patel'],
      dateOfBirth: [
        new Date(
          new Date().getFullYear() - 70,
          new Date().getMonth(),
          new Date().getDay()
        )
      ],
      dateOfJoining: [
        new Date(
          new Date().getFullYear() - 50,
          new Date().getMonth(),
          new Date().getDay()
        )
      ],
      dateOfRetirement: [
        new Date(
          new Date().getFullYear() - 10,
          new Date().getMonth(),
          new Date().getDay()
        )
      ],
      // Formcontrols of Pensioners Detail tab
      bankName: [''],
      branchName: [''],
      bankAccountNumber: [''],
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
      ageOfRetirement: [''],
      totalService: [''],
      notionalRetirementDate: [''],
      totalBreak: [''],
      actualService: [''],
      netService: [''],
      pensionableService: [''],
      retirementForTeacher: [''],
      // Pay Details Tab
      lastPay: [''],
      currentPayScale: [''],
      gradePay: [''],
      npaApplicable: [''],
      npaRate: [''],
      dpRate: [''],
      daRate: [''],
      noOfMonthPensionCalculation: [''],
      promotionDemotionDate: [''],
      basic: [''],
      lastScale: [''],
      promotedScale: [''],
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
      fp1Amount: [''],
      fp2Amount: [''],
      fp1Date: [''],
      fp1FromDate: [''],
      fp1ToDate: [''],
      fp2Date: [''],
      fp2FromDate: [''],
      fp2ToDate: [''],
      provisionalDcrgSanctioned: ['2'],
      provisionalDcrgAmount: [''],
      withheldGratuity: [''],
      remarks: [''],
      differencePensionableEPay: [''],
      differenceOfPensionAmount: [''],
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
      // Recovery/Cut Details Tab
      recoveryDetailsCheck: [''],
      pensionCutCheck: [''],
      // inward Details Tab
      caseType: [''],
      typeOfInward: [''],
      caseNumber: [''],
      ppoNo: [''],
      documentCourt: [''],
      noOfRevision: [''],
      firstName: [''],
      middleName: [''],
      surName: [''],
      pensionerState: [''],
      pensionerDistrict: [''],
      talukaPensioner: [''],
      pensionerAddress: [''],
      pinCode: [''],
      gender: [''],
      gpfNumber: [''],
      otherStatePensioner: [''],
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
      officePinCode: ['']
    });
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
    formGroupName.controls[controlName].value = Number(
      formGroupName.controls[controlName].value
    ).toFixed(2);
    formGroupName.controls[controlName].setValue(
      formGroupName.controls[controlName].value
    );
  }


  addFamilyRow() {
    this.familDetailsDataSource.data.push({
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
      percentOfNominee: ''
    });
    this.familDetailsDataSource.data = this.familDetailsDataSource.data;
  }

  addServiceBreakRow() {
    this.serviceBreakDetailDataSource.data.push({
      serviceBreakType: '',
      breakFromDate: undefined,
      breakToDate: undefined,
      breakofParticularPeriod: ''
    });
    this.serviceBreakDetailDataSource.data = this.serviceBreakDetailDataSource.data;
  }

  addServiceOtherRow() {
    this.serviceOtherDetailDataSource.data.push({
      checkList: '',
      status: ''
    });
    this.serviceOtherDetailDataSource.data = this.serviceOtherDetailDataSource.data;
  }

  addAnnualIncrementRow() {
    this.annualIncrementDataSource.data.push({
      incrementDate: undefined,
      incrementAmount: '',
      basic: '',
      gradePay: ''
    });
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

  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  getTabIndexMain(tabIndex) {
    this.selectedIndexMain = tabIndex;
  }

  openPensionablePayDialog($event?) {
    const dialogRef = this.dialog.open(PensionablePayDialog, {
      width: '95%',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => { });
  }


  openSr() {
    const dialogRef = this.dialog.open(SrDialog, {
      width: '90%',
      height: '700px'
    });
    dialogRef.afterClosed().subscribe(result => { });
  }

  openCorrection() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(CorrectionComponent, {
      width: '90%',
      height: '700px'
    });
    dialogRef.afterClosed().subscribe(result => { });
  }
  closeInwardDetailScreen(event?) {
    this.dialogRef.close();
  }

  goToNext() {
    this.selectedIndex++;
  }
}

