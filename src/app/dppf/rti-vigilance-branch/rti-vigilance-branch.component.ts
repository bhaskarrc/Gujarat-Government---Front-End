import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-rti-vigilance-branch',
  templateUrl: './rti-vigilance-branch.component.html',
  styleUrls: ['./rti-vigilance-branch.component.css']
})
export class RtiVigilanceBranchComponent implements OnInit {
  // VAriable
  rtiVigilanceBranch = 'RTI Vigilance Branch';
  pension = false;
  hbaMca = false;
  nps = false;
  gpf = false;
  other = false;
  // Date
  rtiDate = 'Date-';
  todayDate = Date.now();
  date = new Date();
  errorMessage;
  // form group
  rtiVigilanceBranchForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  // Control Form
  appSentRtiReqFeesType: FormControl = new FormControl();
  branchType: FormControl = new FormControl();
  transferToPiostatusType: FormControl = new FormControl();
  pioToPublicAuthorityType: FormControl = new FormControl();
  demandedDocumentChargesToApplicantType: FormControl = new FormControl();
  mediumAppAmountAndDateType: FormControl = new FormControl();
  mediumAppAmountAndDateYestype: FormControl = new FormControl();
  applicantAppealedToApioType: FormControl = new FormControl();

  hearingType: FormControl = new FormControl();
  rtiOrNotCtrl: FormControl = new FormControl();
  inwardTypeCtrl: FormControl = new FormControl();
  applicantFeesCtrl: FormControl = new FormControl();
  rtiInterimAnswerCtrl: FormControl = new FormControl();
  appealInterimAnswerCtrl: FormControl = new FormControl();
  demandedDocumentChargesCtrl: FormControl = new FormControl();
  receivedDocumentChargesCtrl: FormControl = new FormControl();
  modeOfDocumentChargeCtrl: FormControl = new FormControl();
  hearingCtrl: FormControl = new FormControl();
  appealToGujCtrl: FormControl = new FormControl();
  transferToOtherPioCtrl: FormControl = new FormControl();
  hearingDoneCtrl: FormControl = new FormControl();
  pensionType: FormControl = new FormControl();
  hbaMcaType: FormControl = new FormControl();
  npsType: FormControl = new FormControl();
  gpfType: FormControl = new FormControl();
  prrType: FormControl = new FormControl();
  // Lists
  inwardTypeList: ListValue[] = [
    { value: '1', viewValue: 'Application' },
    { value: '3', viewValue: 'Document Charge' },
    { value: '2', viewValue: 'Appeal' },
    { value: '4', viewValue: 'Received From other PIO' },
    // { value: '5', viewValue: 'Other PIO Address' },
  ];

  transferToOtherPioList: ListValue[] = [
    { value: '1', viewValue: 'Completely' },
    { value: '2', viewValue: 'Partly' },
  ];
  applicantFeesList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  yesNoList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  modeOfDocumentChargeList: ListValue[] = [
    { value: '1', viewValue: 'Cash' },
    { value: '2', viewValue: 'I.P.O' },
    { value: '2', viewValue: 'D.D' },
    { value: '2', viewValue: 'Others' },
  ];

  classAppSentRtiReqFeesType: ListValue[] = [
    { value: '8', viewValue: 'Cash' },
    { value: '1', viewValue: 'I.P.O' },
    { value: '2', viewValue: 'D.D' },
    { value: '3', viewValue: 'Stamp Franking' },
    { value: '4', viewValue: 'Revenue Stamp' },
    { value: '5', viewValue: 'Non-Judicial Stamp' },
    { value: '6', viewValue: 'Court Fee Label' },
    { value: '7', viewValue: 'Others' },
  ];

  classBranchType: ListValue[] = [
    { value: '1', viewValue: 'Pension' },
    { value: '2', viewValue: 'HBA/MCA' },
    { value: '3', viewValue: 'NPS' },
    { value: '4', viewValue: 'GPF' },
    { value: '5', viewValue: 'Other' },
  ];

  classPioToPublicAuthorityType: ListValue[] = [
    { value: '1', viewValue: 'Completely' },
    { value: '2', viewValue: 'Partially' }
  ];

  classTransferToPiostatusType: ListValue[] = [
    { value: '1', viewValue: 'Completely' },
    { value: '2', viewValue: 'Partially' }
  ];

  classDemandedDocumentChargesToApplicant: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  classMediumAppAmountAndDateType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  classMediumAppAmountAndDateYesType: ListValue[] = [
    { value: '1', viewValue: 'Case' },
    { value: '2', viewValue: 'OP' },
    { value: '3', viewValue: 'DD' },
    { value: '4', viewValue: 'Others' }
  ];

  classApplicantAppealedToApio: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  classHearingType: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  classApplicantAppealedToApiotype: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  rtiOrNotList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  classPensionType: ListValue[] = [
    { value: '1', viewValue: 'PR 1' },
    { value: '2', viewValue: 'PR 2' },
    { value: '3', viewValue: 'PR 3' },
    { value: '4', viewValue: 'PR 4' },
    { value: '5', viewValue: 'PR 5' },
    { value: '6', viewValue: 'PR 6' },
    { value: '7', viewValue: 'PR 7' },
    { value: '8', viewValue: 'PR 8' },
    { value: '9', viewValue: ' PA Computer' },
    { value: '10', viewValue: 'Internal Audit' },
    { value: '11', viewValue: 'PA 1 / PA 2' },
    { value: '12', viewValue: 'LM' },
    { value: '13', viewValue: 'Vigilance' },
    { value: '14', viewValue: 'ADM 1' },
    { value: '15', viewValue: 'ADM 12' },
    { value: '16', viewValue: 'Old Record' },
  ];
  classHbaMcaType: ListValue[] = [
    { value: '1', viewValue: 'HBA Control' },
    { value: '2', viewValue: 'MCA Control' },
  ];
  classNpsType: ListValue[] = [
    { value: '1', viewValue: ' NPS Control' }
  ];
  classGpfType: ListValue[] = [
    { value: '1', viewValue: 'Control' },
    { value: '2', viewValue: 'Inward' },
    { value: '3', viewValue: 'Outward' },
    { value: '4', viewValue: 'PFC 1 to 5' }
  ];
  classPrrType: ListValue[] = [
    { value: '1', viewValue: 'PR 1 ' },
    { value: '2', viewValue: 'PR 2' },
    { value: '3', viewValue: 'PR 3' },
    { value: '4', viewValue: ' PR 4' },
    { value: '5', viewValue: 'PR 5' },
    { value: '6', viewValue: ' PR 6' },
    { value: '7', viewValue: '  PR 7' },
    { value: '8', viewValue: ' PR 8' }
  ];
  Element_Data: any[] = [
    {
      hearingDone: '',
      nextHearingDate: '',
    },
  ];
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  Element_Data1: any[] = [
    {
      hearingDone: '',
      nextHearingDate: '',
    },
  ];
  dataSource1 = new MatTableDataSource<any>(this.Element_Data1);
  // table columns
  // tslint:disable-next-line: max-line-length
  displayedColumns: any[] = ['hearingDone', 'nextHearingDate', 'action'];
  ngOnInit() {
    this.errorMessage = DppfMessage;
    this.rtiVigilanceBranchForm = this.fb.group({
      rtiOrNot: ['', Validators.required],
      inwardType: ['1', Validators.required],
      applicationRTI: [''],
      inwardLetterDate: ['', Validators.required],
      appealNo: ['', Validators.required],
      appealReceivedDate: ['', Validators.required],
      applicantName: ['', Validators.required],
      rtiApplicantAddress: ['', Validators.required],
      rtiApplicationReceivedDate: ['', Validators.required],
      enterAppFeesType: ['', Validators.required],
      receivedApplicationFees: ['', Validators.required],
      applicationFeesType: [{ value: 'B.P.L', disabled: true }],
      appSentRtiReqFees: ['', Validators.required],
      branch: ['', Validators.required],
      pension: ['', Validators.required],
      hbaMca: ['', Validators.required],
      nps: ['', Validators.required],
      gpf: ['', Validators.required],
      prr: ['', Validators.required],
      applicantFees: ['', Validators.required],
      enterRtiRelatedBranch: ['', Validators.required],
      transferToPiostatus: ['', Validators.required],
      pioToPublicAuthority: ['', Validators.required],
      transferToPiostatusDetails: ['', Validators.required],
      transferToPioToPublicAuthorityDetails: ['', Validators.required],
      rtiTransferFromPioToPublicAuthority: [''],
      demandedDocumentChargesToApplicant: ['', Validators.required],
      demandedDocumentChargesToApplicantDate: [''],
      demandedDocumentChargesToApplicantDetails: ['', Validators.required],
      applicantReceivedDocumentCharges: ['', Validators.required],
      applicantReceivedDocumentChargesDate: [''],
      mediumAppAmountAndDate: ['', Validators.required],
      mediumAppAmountAndDateYes: ['', Validators.required],
      applicationRtiApplicationDisposedDate: [''],
      applicantAppealedToApio: ['', Validators.required],
      applicantFirstSecondAppealDate: [''],
      applicantReceivedFirstSecondAppealDate: [''],
      hearing: [''],
      applicantFirstSecondAppealDisposalDate: [''],
      otherPioAddress: [''],

      transferToOtherPio: [''],
      transferredToOtherAddress: [''],
      rtiTransferToPioStatusDate: ['', Validators.required],
      rtiInterimAnswer: [''],
      rtiInterimAnswerDate: [''],
      appealInterimAnswer: [''],
      appealInterimAnswerDate: [''],
      demandedDocumentCharges: [''],
      demandedDocumentChargesRupees: [''],
      demandedDocumentChargesDate: [''],
      receivedDocumentCharges: [''],
      receivedDocumentChargesDate: [''],
      modeOfDocumentCharge: [''],
      enterModeOfDocumentCharge: [''],
      rtiDisposeDate: [''],
      appealDisposeDate: [''],
      hearingDone: [''],
      hearingDate: [''],
      date: [''],
      appealToGuj: [''],
      gujInfoCommHearingDate: [''],
      remark: [''],
    });
  }
  resetForm() {
    this.rtiVigilanceBranchForm.reset();
  }
  onInwardChange(event) {

    if (event === '2' || event === '3') {


      // tslint:disable-next-line: no-use-before-declare
      const dialogRef = this.dialog.open(RtiApplicationNo, {
        width: '900px',
        height: 'auto',

      });

      dialogRef.afterClosed().subscribe(result => {

        if (result) {

          this.rtiVigilanceBranchForm.patchValue({
            applicationRTI: result.rtiApplicationNo,
            inwardLetterDate: new Date(result.rtiApplicationDate),
            applicantName: result.applicantName,
          });
        }
      });
    }
    if (event === '3') {
      this.modeOfDocumentChargeList = [
        { value: '1', viewValue: 'Cash' },
        { value: '2', viewValue: 'I.P.O' },
        { value: '3', viewValue: 'D.D' },
        { value: '4', viewValue: 'Pay Order' },
        { value: '5', viewValue: 'Others' },
      ];
    } else {
      this.modeOfDocumentChargeList = [
        { value: '1', viewValue: 'Cash' },
        { value: '2', viewValue: 'I.P.O' },
        { value: '3', viewValue: 'D.D' },
        { value: '5', viewValue: 'Others' },
      ];
    }
  }

  onlyAlphabets(event: any) {
    const pattern = /^[a-zA-Z ]{1,}?$/;
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
  onRtiReletedBranch(event) {
    const value = event;
    console.log(value);
    const length = event.length;

    this.pension = false;
    this.hbaMca = false;
    this.nps = false;
    this.gpf = false;
    this.other = false;
    // for(let i=0;i<length;i++){

    value.forEach(item => {
      switch (item) {
        case '1': this.pension = true;
          break;
        case '2': this.hbaMca = true;
          break;
        case '3': this.nps = true;
          break;
        case '4': this.gpf = true;
          break;
        case '5': this.other = true;
          break;
        default:
          break;
      }
    });
    // }
  }
  // onHearingDone(event, index, dataSource) {
  //   if (event === '1') {
  //     if ((index + 1) !== (dataSource.data.length - 1)) {
  //       dataSource.data.splice((index + 1), dataSource.data.length - (index + 1));
  //       dataSource = new MatTableDataSource(dataSource.data);
  //     }
  //   } else if (event === '2') {
  //     dataSource.data.push(
  //       {
  //         hearingDone: '',
  //         nextHearingDate: '',
  //       }
  //     );
  //     dataSource = new MatTableDataSource(dataSource.data);
  //   }
  // }

  // Delete row from dataSource
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // Adds row from dataSource
  add() {
    const data = this.dataSource.data;
    this.dataSource.data.push({ hearingDone: '', nextHearingDate: '', });
    this.dataSource.data = data;
  }

  // Delete row from dataSource1
  delete1(index) {
    this.dataSource1.data.splice(index, 1);
    this.dataSource1 = new MatTableDataSource(this.dataSource1.data);
  }

  // Adds row from dataSource1
  add1() {
    const data = this.dataSource1.data;
    this.dataSource1.data.push({ hearingDone: '', nextHearingDate: '', });
    this.dataSource1.data = data;
  }
  openRti() { }

  closeRTI() { }
}

@Component({
  selector: 'app-rti-app-no-dialog',
  templateUrl: './rti-app-no-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class RtiApplicationNo implements OnInit {

  rtiApplicationNoForm: FormGroup;
  isSearch = false;

  appData: any[] = [
    {
      rtiApplicationNo: '24578941',
      rtiApplicationDate: '12-Apr-2019',
      applicantName: 'Vipulbhai Sankarbhai Patel',
    },
  ];


  displayedColumn = [
    'rtiApplicationNo',
    'rtiApplicationDate',
    'applicantName',
  ];

  dataSource = new MatTableDataSource<any>(this.appData);

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<RtiApplicationNo>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.rtiApplicationNoForm = this.fb.group({
      applicationRTI: [''],
    });
  }
  // On Search
  onSearch() {
    this.isSearch = true;
  }
  // on Cancel
  onClose() {
    this.dialogRef.close();
  }
  // On RTI Application No.
  onAppNo(element) {
    this.dialogRef.close(element);
  }
  // On reset
  clearForm() {
    this.rtiApplicationNoForm.reset();
  }

}
