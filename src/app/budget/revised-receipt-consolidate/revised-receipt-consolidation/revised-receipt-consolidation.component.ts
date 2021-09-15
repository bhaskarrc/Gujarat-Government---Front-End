import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';

import { Router } from '@angular/router';

import { takeUntil } from 'rxjs/operators';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import { ToastrService } from 'ngx-toastr';
import {
  MatTableDataSource,
  MatAutocompleteSelectedEvent,
  MatChipInputEvent,
  MatAutocomplete
} from '@angular/material';
import { MatDialog } from '@angular/material';
import { SaveConfirmDialogComponent } from '../../save-confirm-dialog/save-confirm-dialog.component';
import { StandingChargeForwardDialogComponent, StadingChargeConfirmDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
import { ElementRevRecConsolidate } from 'src/app/model/budget';

// Listing table Data
const ELEMENT_DATA: ElementRevRecConsolidate[] = [
  {
    subMajorHead: '01',
    minorHead: '901',
    subHead: '90',
    detailHead: '210',
    receipt: '',
    disbursement: '',
    receipt1: '',
    disbursement1: '',
    receipt2: '',
    disbursement2: '',
    receipt3: '',
    disbursement3: '',
    receipt4: '',
    disbursement4: '',
    actualReceiptForLastYear: '',
    actualDisburSementForLastYear: '',
    actualReceiptFor8MonthsOfCurrYr1A: '',
    actualDisbursementFor8MonthsOfCurrYr1B: '',
    actReciForLast4MonthCurR2A: '',
    actDisbForLast4MonthCurR2B: '',
    receipt1M2: '',
    disbursement1M2: '',
    Provision4nYReceipt: '',
    Provision4nYdisbursement: '',
    PropoAmountReceipt: '',
    PropoAmountDisbu: '',
    fDAcctOctNovCurrYearRec: '',
    fDAcctOctNovCurrYearDis: '',
    FDLatestEt4castCurrYearRec: '',
    FDLatestEt4castCurrYearDis: '',
    remarks: '',
    DeductRefundMap: ''
  }
];

@Component({
  selector: 'app-revised-receipt-consolidation',
  templateUrl: './revised-receipt-consolidation.component.html',
  styleUrls: ['./revised-receipt-consolidation.component.css']
})
export class RevisedReceiptConsolidationComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA, TAB];
  expendCharges: boolean;
  tabDisable: Boolean = true;
  doneHeader: Boolean = false;
  selectedIndex: number;
  date: any = new Date();
// For Calculation of Year
  headerJson: any[] = [
    { label: 'Financial Year', value: '2019-2020' }
  ];

  private _onDestroy = new Subject<void>();
  createRevisedReceiptEstimateForm: FormGroup;
  filteredCodes: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  codeCtrl = new FormControl();
  showObject: string;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
    BRANCH: 'Please select any Name of the Branch ',
    ESTIMATION_FORM: 'Please select any Estimation Form ',
    ESTIMATE_BY: 'Please select any Estimation By ',
    MAJOR_HEAD: 'Please select any Major Head'
  };
// Entry Field Details

  attachmentType_list: any[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Other' }
  ];

// Entry Table
  displayedColumns = ['subMajorHead', 'minorHead', 'subHead', 'detailHead', 'objectHead', 'receipt', 'disbursement',
  'receipt1', 'disbursement1',
  'receipt2', 'disbursement2',
  'receipt3', 'disbursement3', 'receipt4', 'disbursement4',
  'receipt1M2', 'disbursement1M2', 'Provision4nYReceipt', 'Provision4nYdisbursement', 'PropoAmountReceipt',
  'PropoAmountDisbu', 'fDAcctOctNovCurrYearRec', 'fDAcctOctNovCurrYearDis', 'FDLatestEt4castCurrYearRec',
  'FDLatestEt4castCurrYearDis', 'remarks', 'DeductRefundMap'];

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  expendDataSource: any;
  selSubObjectId: string;
  codes: string[] = [];
  subObjectId: Array<any> = [];
  hodAmount: any;
  succObjectCode: Array<any> = [];
  allMainCodes: any;
  // Attachment Table
  displayedBrowseColumns = [
    'position',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  fileBrowseIndex: number;

  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private el: ElementRef,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.createForm();

    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.attachmentType_list,
          this.attachmentTypeCodeCtrl.value,
          this.filteredAttachmentTypeCode
        );
      });

    this.createRevisedReceiptEstimateForm.controls.finYear.patchValue(
      '2019-2020'
    );
    this.createRevisedReceiptEstimateForm.controls.estimationFrom.patchValue(
      '1'
    );
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
    this.createRevisedReceiptEstimateForm = this.fb.group({
      finYear: ['1', Validators.required],
      departmentCode: ['', Validators.required],
      branchCode: ['1', Validators.required],
      estimationFrom: ['1', Validators.required],
      // estimateBy: ['1'],
      // hod: ['', Validators.required],
      majorHeadCode: ['', Validators.required]
    });
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
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
  // For calculation of total in columns
  covertToNumber(data) {
    let returnData = 0;
    if (
      data.actualReceiptFor8MonthsOfCurrYr1A ||
      data.actReciForLast4MonthCurR2A
    ) {
      returnData =
        Number(data.actualReceiptFor8MonthsOfCurrYr1A) +
        Number(data.actReciForLast4MonthCurR2A);
    }
    return returnData;
  }

  covertToNumber2(data) {
    let returnData = 0;
    if (
      data.actualDisbursementFor8MonthsOfCurrYr1B ||
      data.actDisbForLast4MonthCurR2B
    ) {
      returnData =
        Number(data.actualDisbursementFor8MonthsOfCurrYr1B) +
        Number(data.actDisbForLast4MonthCurR2B);
    }
    return returnData;
  }

  decimalPoint(data, key) {
    // debugger
    data[key] = Number(data[key]).toFixed(2);
  }

  integerKeyPress(event: any) {
    const pattern = /^\d{0,5}?$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    // If the key is backspace, tab, left, right or delete
    const keystobepassedout =
      '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
    if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
      return true;
    }
    if (event.target.value.length > 5) {
      event.preventDefault();
      return false;
    }

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Attachments Section Functions
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

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.file && data.name) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          // dropDown: undefined,
          // fileType:undefined,
          name: undefined,
          file: undefined
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  gotoListing() {
    this.router.navigate(['./budget/revised-receipt-consolidation-list']);
  }

  // Common workflow model
  submit() {
    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent, {
      width: '2700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
        this.showConfirmationPopup();
      }
    });
  }
  showConfirmationPopup() {
    const dialogRef = this.dialog.open(StadingChargeConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log(result);
      } else if (result === 'save') {
        console.log(result);
      }
    });
  }

  goToDashboard() {}

  //  For Calculction of Year
  loadLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) - 1).toString() + '-' + (Number(year[0]) - 0).toString()
    );
  }

  loadNextYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (
      (Number(year[0]) + 1).toString() + '-' + (Number(year[0]) + 2).toString()
    );
  }

  loadCurrentYear() {
    return this.headerJson[0].value;
  }
  saveStandCharge() {}

}
