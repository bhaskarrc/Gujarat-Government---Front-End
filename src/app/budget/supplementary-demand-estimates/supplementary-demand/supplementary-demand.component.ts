import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ReplaySubject, Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
// tslint:disable-next-line: max-line-length
import { ConfirmDialogModel } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { StandingChargeForwardDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
import { SuppDemand, SuppDemandHistory } from 'src/app/model/budget';
import { BudgetDirectives } from 'src/app/common/directive/budget-directive';
import { RemarksPopupComponent } from '../remarks-popup/remarks-popup.component';

declare function SetEnglish();
declare function SetGujarati();

const HISTORY_DATA: SuppDemandHistory[] = [
  { userRole: 'Creator', userSortName: 'Shri S M Modi', userCode: 'GAD12345', designation: 'HOD',
  dateAndTime1: '28-Apr-2020', dateAndTime: '28-Apr-2020', proposedAmt: 100.00, remark: ''},
  { userRole: 'Verifier', userSortName: 'Shri P J Patel', userCode: 'GAGUJ23231', designation: 'HOD',
  dateAndTime1: '28-Apr-2020', dateAndTime: '28-Apr-2020',  proposedAmt: 200.00, remark: 'We may approve.'},
  { userRole: 'Verifier', userSortName: 'Shri S M Jani', userCode: 'GAGUJ23343', designation: 'HOD',
  dateAndTime1: '28-Apr-2020', dateAndTime: '28-Apr-2020',  proposedAmt: 170.00, remark: 'We may approve.'},
  { userRole: 'Verifier', userSortName: 'Shri R P Joshi', userCode: 'GAGUJ23232', designation: 'HOD',
  dateAndTime1: '28-Apr-2020', dateAndTime: '28-Apr-2020',  proposedAmt: 250.00, remark: ''},
  { userRole: 'Verifier', userSortName: 'Shri P S Patel', userCode: 'GAGUJ23341', designation: 'HOD',
  dateAndTime1: '28-Apr-2020', dateAndTime: '28-Apr-2020',  proposedAmt: 300.00, remark: 'We may approve.'},
  { userRole: 'Approver', userSortName: 'Shri M J Soni', userCode: 'GAGUJ34342', designation: 'HOD',
  dateAndTime1: '28-Apr-2020', dateAndTime: '28-Apr-2020',  proposedAmt: 300.00, remark: 'Approved.'},
];
@Component({
  selector: 'app-supplementary-demand',
  templateUrl: './supplementary-demand.component.html',
  styleUrls: ['./supplementary-demand.component.css']
})
export class SupplementaryDemandComponent implements OnInit {

demandCodeCtrl: FormControl = new FormControl();
majorHeadCodeCtrl: FormControl = new FormControl();
subMajorHeadCodeCtrl: FormControl = new FormControl();
minorHeadCodeCtrl: FormControl = new FormControl();
subHeadCodeCtrl: FormControl = new FormControl();
detailHeadCodeCtrl: FormControl = new FormControl();
revenueCapitalCtrl: FormControl = new FormControl();
chargedVotedCtrl: FormControl = new FormControl();
filteredDemandCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
showTab: Boolean = false;
showField = false;
date: any = new Date();
directiveObject = new BudgetDirectives(this.dialog);
step = 0;
demand_list: CommonListing[] = [
  {value: '1', viewValue: '001 - Agriculture and Co-operation Department'},
  {value: '2', viewValue: '002 - Agriculture'},
  {value: '3', viewValue: '003 - Minor Irrigation, Soil Conservation and Area Development'},
  {value: '4', viewValue: '004 - Animal Husbandry'},
  {value: '5', viewValue: '005 - Co-operation'},
  {value: '6', viewValue: '006 - Fisheries'},
  {value: '7', viewValue: '007 - Other Expenditure pertaining to Agriculture and Co-operation Department'},
  {value: '8', viewValue: '084 - Non-Residential Buildings'},
  {value: '9', viewValue: '085 - Residential Buildings'},
  {value: '10', viewValue: '093 - Welfare of Scheduled Tribes'},
  {value: '11', viewValue: '095 - Scheduled Castes Sub Plan'},
  {value: '12', viewValue: '096 - Tribal Area Sub-Plan'},
];
bpn_list: CommonListing[] = [
    { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department' },
    { value: '2', viewValue: '04:Education Department' },
    { value: '3 ', viewValue: '05:Energy and Petro-Chemicals Department' },
    { value: '4', viewValue: '06:Finance Department' },
    { value: '5', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department' },
];

majorHead_list: CommonListing[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'},
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' }
];

subMajorHead_list: CommonListing[] = [
    { value: '1', viewValue: '00:Secretariat-Economic Services'},
    { value: '2', viewValue: '00:Capital Outlay on other General Economics Services'},
    { value: '3', viewValue: '00:Crop Husbandry' },
    { value: '4', viewValue: '00:Secretariat-Economic Services' },
    { value: '5', viewValue: '00:Capital Outlay on other General Economics Services' },
    { value: '6', viewValue: '01:Civil' },
    { value: '7', viewValue: '00:Stationery and Printing' },
    { value: '8', viewValue: '00::Co-operation' }
];

minorHead_list: CommonListing[] = [
  { value: '1', viewValue: '090:Secretariat' },
  { value: '2', viewValue: '101:Niti Aayog' },
  { value: '3', viewValue: '800:Other Expenditure' },
  { value: '4', viewValue: '101:Direction And Administration' },
  { value: '5', viewValue: '102:Food grain Crops' },
  { value: '6', viewValue: '103:Seed' },
  { value: '7', viewValue: '800:Other Expenditure' },
  { value: '8', viewValue: '108:Contribution to Provident Funds' },
  { value: '9', viewValue: '001:Direction and Administration' },
  { value: '10', viewValue: '101:Purchase and Supply of Stationery Stores' },
  { value: '11', viewValue: '103:Government Presses' },
  { value: '12', viewValue: '105:Government Publications' },
  { value: '13', viewValue: '797:Transfer to Reserve fund and Deposite Account' },
  { value: '14', viewValue: '108:Assistance to other co-operatives' }
];

subHeadCode_list: CommonListing[] = [
  {value: '1', viewValue: '01:Agricultural and Co-operation Department'},
  {value: '2', viewValue: '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '},
  {value: '3', viewValue: '01:AGR-15 Information & Technology'},
  {value: '4', viewValue: '02:Expenditure for Training'},
  {value: '5', viewValue: '01:AGR-Renovation Of The Department'},
  {value: '6', viewValue: '01:Direcorate of Agriculture'},
  {value: '7', viewValue: '02:Divisional Establishmen'},
  {value: '8', viewValue: '03:District Establishment'},
];

revenue_capital_list: CommonListing[] = [
  { value: '1', viewValue: 'Revenue' },
  { value: '2', viewValue: 'Capital' },
];

charged_voted_list: CommonListing[] = [
  { value: '1', viewValue: 'Charged' },
  { value: '2', viewValue: 'Voted' },
];

detailHead_list: any[] = [
  { value: '0 : HLT-28  Leprosy Control Programme', viewValue: '0 : HLT-28  Leprosy Control Programme' },
  {
    value: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students',
    viewValue: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students'
  },
  { value: '0 : VKY-9 Umbrella Scheme', viewValue: '0 : VKY-9 Umbrella Scheme' },
];
// Entry Table
  DATA: SuppDemand[] = [
    {
      majorHead: '2049',
      subMajorHead: '03',
      minorHead: '104',
      subHead: '01',
      detHead: '00',
      budgetEstimate: '100.00',
      advancedCF: '10.00',
      revisedEstimate: '120.00',
      excessSaving: '20.00',
      excessScheme: '10.00', excessSchemeEdit: true,
      remarkEng: '',
      remarkGuj: '',
    },
    {
      majorHead: '',
      subMajorHead: '60',
      minorHead: '101',
      subHead: '01',
      detHead: '00',
      budgetEstimate: '100.00',
      advancedCF: '10.00',
      revisedEstimate: '90.00',
      excessSaving: '-10.00',
      excessScheme: '10.00', excessSchemeEdit: true,
      remarkEng: '',
      remarkGuj: '',
    },
    {
      majorHead: '',
      subMajorHead: '',
      minorHead: '701',
      subHead: '01',
      detHead: '00',
      budgetEstimate: '150.00',
      advancedCF: '0.00',
      revisedEstimate: '165.00',
      excessSaving: '15.00',
      excessScheme: '15.00', excessSchemeEdit: true,
      remarkEng: '',
      remarkGuj: '',
    },
  ];

  private _onDestroy = new  Subject<void>() ;
  createSupplementaryDemandForm: FormGroup;
  remarksForm: FormGroup;

  gujaratiType: Boolean = true;
  engAtiveClass: Boolean = false;
  gujAtiveClass: Boolean = false;
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;
  errorMessages = budgetMessage;
  selectedIndex = 0;

  @ViewChild('codeGJ') codeGJ: ElementRef;

  displayedAttachmentColumns = ['majorHead', 'subMajorHead', 'minorHead', 'subHead',
  'budgetEstimate', 'advancedCF', 'revisedEstimate', 'excessSaving', 'excessScheme', 'action'];
  dataSource = new MatTableDataSource(this.DATA);
  isExtendedRow = (index, item) => item.extend;
  constructor(
    private fb: FormBuilder,
    private fb2: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private elem: ElementRef,
   ) { }


  ngOnInit() {
    this.createForm();
    this.createFormRemarks();

    this.filteredDemandCode.next(this.demand_list.slice());
    (this.demandCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.demand_list, this.demandCodeCtrl.value, this.filteredDemandCode);
      }));

    // this.calculateTotal();
  }

  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
   filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }

  createForm() {
    this.createSupplementaryDemandForm = this.fb.group({
      demandCode: ['', Validators.required],
      revenueCapital: ['', Validators.required],
      subMajorHeadCode: ['', Validators.required],
      minorHeadCode: ['', Validators.required],
      detailHeadCode: ['', Validators.required],
      subHeadCode: ['', Validators.required],
      chargedVoted: ['', Validators.required],
      finYear: ['2020-2021'],
      bpnCode: [''],
      majorHeadCode: ['1'],
    });
  }

  createFormRemarks() {
    this.remarksForm = this.fb.group({
      remarksEng: [''],
      remarksGuj: [''],
    });
  }
  // History Popup
  openHistory(data) {
    this.showHistoryDialog();
  }
  showHistoryDialog(): void {

    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(SupplementaryDemandHistoryComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

// For Hiding and Showing Fields on Demand Select
  showFieldVal() {
    const demValue = this.createSupplementaryDemandForm.controls.demandCode.value;
    if (demValue === '8' || demValue === '9' || demValue === '10' || demValue === '11' || demValue === '12') {
      this.showField = true;
    } else {
      this.showField = false;
    }

    if (this.createSupplementaryDemandForm.controls.demandCode.value) {
      this.createSupplementaryDemandForm.controls.bpnCode.setValue('03:Agriculture, Farmers Welfare & Co-Operation Department');
    }
  }

  // Go to next Tab
  nextTab() {
    this.selectedIndex++;
  }


  onGoClick() {
    this.showTab = true;
  }
// English Gujarati functions start
  nomenclatureGJFocus() {
    if (this.gujaratiType) {
      SetGujarati();
      this.engAtiveClass = false;
      this.gujAtiveClass = true;
    }
  }
  nomenclatureGJFocusOut() {
    SetEnglish();
    this.gujaratiType = true;
    this.engAtiveClass = false;
    this.gujAtiveClass = false;
  }

  setgujarati() {
    this.gujaratiType = false;
    this.engAtiveClass = false;
    this.gujAtiveClass = true;
    SetGujarati();
    this.codeGJ.nativeElement.focus();
  }

  setenglish() {
    this.gujaratiType = false;
    this.engAtiveClass = true;
    this.gujAtiveClass = false;
    SetEnglish();
    this.codeGJ.nativeElement.focus();
  }

  checkGujarati(data) {
    this.createSupplementaryDemandForm.patchValue({
      remarkGuj: data
    });
  }
  // Remarks popup
  openRemarksPopup() {
    const dialogRef = this.dialog.open(RemarksPopupComponent, {
      width: '1200px', height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      }
    });
  }
  // English Gujarati functions Ends

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

  }
  // Gujarati English Language Functions
    setEnglishOnFocusOut() {
      SetEnglish();
    }
    setGujaratiDefault() {
      if (!this.isLangChange) {
        SetGujarati();
        this.currentLang.next('Eng');
      }
    }
    toggleLanguage() {
      this.isLangChange = true;
      const elements = this.elem.nativeElement.querySelectorAll('.hasfocus')[0];
      if (elements != undefined) {
        if (this.currentLang.value == 'Guj') {
          SetEnglish();
          this.currentLang.next('Eng');
        } else {
          SetGujarati();
          this.currentLang.next('Guj');
        }
        elements.focus();
      }
    }

  calcExcessScheme() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
      sum =
        sum + Number(element.excessScheme);
    });
    return sum;
  }

  decimalPoint(data, key) {
    data[key] = Number(data[key]).toFixed(2);
  }

  goToListing() {
    this.router.navigate(['./budget/supplementary-demand-list']);
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  saveEstimate() {

  }
}
@Component({
  selector: 'app-supplementary-demand-history',
  templateUrl: './supplementary-demand-history.component.html',
  styleUrls: ['./supplementary-demand-history.component.css']
})
export class SupplementaryDemandHistoryComponent implements OnInit {

  historyDataSource = new MatTableDataSource(HISTORY_DATA);
  historyColumns: string[] = [
    'srNo', 'userRole', 'userSortName', 'userCode', 'designation',
     'proposedAmt', 'dateAndTime', 'remark'
  ];

  constructor(public dialogRef: MatDialogRef<SupplementaryDemandHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
