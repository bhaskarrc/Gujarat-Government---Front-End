import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { WorkflowDetailsDppfComponent } from '../workflow-details-dppf/workflow-details-dppf.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { DppfMessage } from 'src/app/common/error-message/common-message.constants';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { DppfDialogBoxComponent } from '../dppf-dialog-box/dppf-dialog-box.component';
import { SearchInwardNoDppfComponent } from '../search-inward-no-dppf/search-inward-no-dppf.component';
import { EmployeeAutoFillTable, PpnoListInterface } from 'src/app/model/ppo';
import { InwardCase } from 'src/app/model/dppf';
import { SearchReferenceNumberDppfComponent } from '../search-reference-number-dppf/search-reference-number-dppf.component';
import { DataService } from 'src/app/common/data.service';

export let Element_DataInDailog: EmployeeAutoFillTable[] = [
  {
    employeeNumber: '7512369854', employeeName: '', designation: '', class: '', panNo: '', officeName: ''
  },
  {
    employeeNumber: '2456982347', employeeName: '', designation: '', class: '', panNo: '', officeName: ''
  },
  {
    employeeNumber: '9423972498', employeeName: '', designation: '', class: '', panNo: '', officeName: ''
  },
  {
    employeeNumber: '7319824658', employeeName: '', designation: '', class: '', panNo: '', officeName: ''
  },
  {
    employeeNumber: '9137284652', employeeName: '', designation: '', class: '', panNo: '', officeName: ''
  },
];

@Component({
  selector: 'app-inward-pension-case',
  templateUrl: './inward-pension-case.component.html',
  styleUrls: ['./inward-pension-case.component.css'],
})
export class InwardPensionCaseComponent implements OnInit {
  // Variable
  inwardPensionCase = 'Inward Pension Case ';
  inwardDate = 'Inward  Date:';
  home = 'Home';
  dppf = 'DPPF';
  inwardPCase = 'Inward Pension Case';
  errorMessage;
  caseDetails = 'Case Details';
  // Date
  todayDate = Date.now();
  date = new FormControl(new Date());
  // Form Group
  onlinePensionForm: FormGroup;
  // Form Control
  ppoNoCtrl: FormControl = new FormControl();
  ppoData;
  optionCtrl = true;
  isView = false;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;


  dataFromDailogComponent: EmployeeAutoFillTable[];

  ppoNo_list: PpnoListInterface[] = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService) {
    if (dataService.getOption()['outward-pension-cases-view'] === 'isView') {
      this.isView = true;
      dataService.setOption('outward-pension-cases-view', '');
    } else {
      this.isView = false;
    }
  }
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

  inwardDetails = true;
  todaysDate = new Date();
  isTokentable = false;
  // Form Control
  classCtrl: FormControl = new FormControl();
  tenderDateTypeCtrl: FormControl = new FormControl();
  classInwardCtrl: FormControl = new FormControl();
  classCourtCase: FormControl = new FormControl();
  classDept: FormControl = new FormControl();
  classHod: FormControl = new FormControl();
  SalutationCtrl: FormControl = new FormControl();
  stateType: FormControl = new FormControl();
  districtType: FormControl = new FormControl();
  talukaType: FormControl = new FormControl();
  pensionType: FormControl = new FormControl();
  designationType: FormControl = new FormControl();
  penType: FormControl = new FormControl();
  statePensionerType: FormControl = new FormControl();
  districtPensionerType: FormControl = new FormControl();
  talukaPensionerType: FormControl = new FormControl();
  genderType: FormControl = new FormControl();
  StateType: FormControl = new FormControl();
  ReasonForRevisionCase: FormControl = new FormControl();
  ManualPPORequiredCTRL: FormControl = new FormControl();
  otherStatePensionerType: FormControl = new FormControl();
  serviceType: FormControl = new FormControl();
  otherStateToCtrl: FormControl = new FormControl();
  otherStateStoCtrl: FormControl = new FormControl();
  // Lists
  classType: ListValue[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Revision' },
  ];

  tenderDate_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  otherStateTo_list: ListValue[] = [
    { value: '1', viewValue: ' ' },
  ];

  otherStateSto_list: ListValue[] = [
    { value: '1', viewValue: ' ' },
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

  classTypeInward: ListValue[] = [
    { value: '1', viewValue: 'Pension Case' },
    { value: '2', viewValue: 'Service Certificate' },
    { value: '4', viewValue: ' Other State Pension Cases  ' },
    { value: '5', viewValue: 'NPS Gratuity' },
    { value: '6', viewValue: 'Old Revision Cases' },
  ];

  courtCaseType: ListValue[] = [
    { value: '1', viewValue: 'No' },
    { value: '2', viewValue: 'Yes' },
  ];

  classDeptType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];

  classHodType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];

  classStateType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];

  classDistrictType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];

  classTalukaType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];

  classPensionType: ListValue[] = [
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

  classDesignationType: ListValue[] = [
    { value: '1', viewValue: 'Officer' },
    { value: '2', viewValue: 'Clerk' },
    { value: '3', viewValue: 'Other' },
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

  classStatePensionerType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];

  classDistrictPensionerType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];

  classTalukaPensionerType: ListValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
  ];

  classGenderType: ListValue[] = [
    { value: '1', viewValue: 'Male' },
    { value: '2', viewValue: 'Female' },
  ];

  classotherStatePensionerType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
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

  serviceTypeList: any[] = [
    { value: '1', viewValue: '1. state/panchayat' },
    { value: '2', viewValue: '2. municipal board' }
  ];

  ngOnInit() {
    this.errorMessage = DppfMessage;
    if (this.isView) {
      this.onlinePensionForm = this.fb.group({
        // case details starts
        caseType: [{ value: '2', disabled: true }],
        typeOfInward: [{ value: '1', disabled: true }],
        revisionPPONO: [{ value: '', disabled: true }],
        inwardNo: [{ value: '', disabled: true }],
        serviceCertificateNo: [{ value: '', disabled: true }],
        inwardDate: [{ value: Date.now(), disabled: true }],
        ppon: [{ value: '12345', disabled: true }],
        documentCourt: [{ value: '5678', disabled: true }],
        noOfRevision: [{ value: '8976', disabled: true }],
        courtCase: [{ value: '', disabled: true }],
        reasonForRevision: [{ value: '', disabled: true }],
        maualPPORequired: [{ value: '', disabled: true }],
        manualPPO: [{ value: '', disabled: true }],
        // case details ends

        department: [{ value: '', disabled: true }],
        value: [{ value: '', disabled: true }],
        hod: [{ value: '', disabled: true }],
        state: [{ value: '', disabled: true }],
        district: [{ value: '', disabled: true }],
        taluka: [{ value: '', disabled: true }],
        typeOfPension: [{ value: '', disabled: true }],
        designation: [{ value: '', disabled: true }],
        pensionerType: [{ value: '', disabled: true }],
        statePensioner: [{ value: '', disabled: true }],
        districtPensioner: [{ value: '', disabled: true }],
        talukaPensioner: [{ value: '', disabled: true }],
        gender: [{ value: '', disabled: true }],
        otherStatePensioner: [{ value: '', disabled: true }],
        frmDate: [{ value: '12345', disabled: true }],
        datepension: [{ value: new Date(), disabled: true }],
        officeName: [{ value: '', disabled: true }],
        officeAddress: [{ value: '', disabled: true }],
        pinCode: [{ value: '180013', disabled: true }],
        otherDesig: [{ value: 'Officer', disabled: true }],
        surnam: [{ value: '', disabled: true }],
        salutation: [{ value: '', disabled: true }],
        firstnam: [{ value: '', disabled: true }],
        middlenam: [{ value: '', disabled: true }],
        dateob: [{ value: '', disabled: true }],
        dateoj: [{ value: '', disabled: true }],
        dateor: [{ value: '', disabled: true }],
        dateod: [{ value: '', disabled: true }],
        pensionstartdt: [{ value: '', disabled: true }],
        pensioneradd: [{ value: '', disabled: true }],
        pincod: [{ value: '201231', disabled: true }],
        gpfnum: [{ value: '38654', disabled: true }],
        ppannum: [{ value: '', disabled: true }],
        prannum: [{ value: '', disabled: true }],
        height: [{ value: '', disabled: true }],
        idMark: [{ value: '', disabled: true }],
        casenum: [{ value: '3768965', disabled: true }],
        tenderDate: [{ value: '', disabled: true }],
        tenderDates: [{ value: '', disabled: true }],
        tenderDateTypeCtrl: [{ value: '', disabled: true }],
        otherState: [{ value: '', disabled: true }],
        otherStateTo: [{ value: '', disabled: true }],
        otherStateSto: [{ value: '', disabled: true }],
        remarks: [{ value: '', disabled: true }],
        serviceType: [{ value: '', disabled: true }],
      });

    } else {
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

        department: ['', Validators.required],
        hod: ['', Validators.required],
        state: ['', Validators.required],
        district: ['', Validators.required],
        taluka: ['', Validators.required],
        typeOfPension: ['', Validators.required],
        designation: ['', Validators.required],
        pensionerType: ['', Validators.required],
        statePensioner: ['', Validators.required],
        districtPensioner: ['', Validators.required],
        talukaPensioner: [''],
        gender: ['', Validators.required],
        otherStatePensioner: ['', Validators.required],
        frmDate: ['12345'],
        datepension: [new Date()],
        officeName: ['', Validators.required],
        officeAddress: ['', Validators.required],
        pinCode: ['180013'],
        otherDesig: ['Officer'],
        surnam: ['', Validators.required],
        salutation: ['', Validators.required],
        firstnam: ['', Validators.required],
        middlenam: ['', Validators.required],
        dateob: ['', Validators.required],
        dateoj: ['', Validators.required],
        dateor: ['', Validators.required],
        dateod: ['', Validators.required],
        pensionstartdt: ['', Validators.required],
        pensioneradd: ['', Validators.required],
        pincod: ['201231'],
        gpfnum: ['38654'],
        ppannum: [''],
        prannum: [''],
        height: [''],
        idMark: [''],
        casenum: ['3768965'],
        tenderDate: [''],
        tenderDates: [''],
        tenderDateTypeCtrl: [''],
        otherState: [''],
        otherStateTo: [''],
        otherStateSto: [''],
        remarks: [''],
        serviceType: ['']
      });

      this.optionCtrl = true;
      this.ppoNoVal = 'PPO No.';
      this.dataFromDailogComponent = Element_DataInDailog;
      for (let i = 0; i < this.dataFromDailogComponent.length; i++) {
        this.ppoNo_list.push({ ppoNo: this.dataFromDailogComponent[i].employeeNumber });
      }

      this.filteredppoNo = this.ppoNoCtrl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value),
          map(ppoNo => ppoNo ? this._filter(ppoNo) : this.ppoNo_list.slice())
        );
    }
  }
  private _filter(ppoNo: string): PpnoListInterface[] {
    const filterValue = ppoNo;

    return this.ppoNo_list.filter(option => option.ppoNo.indexOf(filterValue) === 0);
  }
  displayFn(ppoNo_list: PpnoListInterface): string {
    return ppoNo_list && ppoNo_list.ppoNo ? ppoNo_list.ppoNo : '';
  }
  sendPPOData(data) {
    this.ppoData = data;
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
  // Dppf Dialog
  openDPPFDialog() {
    this.optionCtrl = false;
    if (this.ppoData == null || this.ppoData === undefined || this.ppoData === '') {
      this.ppoData = 'Please Provide PPO No.';
    }
    const dailogRef = this.dialog.open(DppfDialogBoxComponent,
      {
        width: '1000px',
        height: '500px',
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

  ontoken(index) {
    if (index.value === '1') {
      this.isTokentable = true;
    } else {
      this.isTokentable = false;
    }
  }

  resetForm() {
    this.onlinePensionForm.reset();
  }
  // Work Flow Dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfComponent, {
      width: '1100px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  // Inward No Popup

  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfComponent, {
      width: '900',
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
