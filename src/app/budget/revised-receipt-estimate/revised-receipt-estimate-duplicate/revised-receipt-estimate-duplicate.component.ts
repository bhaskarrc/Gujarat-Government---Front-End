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
  MatAutocomplete,
  MatPaginator
} from '@angular/material';
import { HeaderElement } from '../revised-receipt-view/revised-receipt-estimate-view.component';
import { MatDialog } from '@angular/material';
import { SaveConfirmDialogComponent } from '../../save-confirm-dialog/save-confirm-dialog.component';
import { StandingChargeForwardDialogComponent, StadingChargeConfirmDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
import { BudgetFormType, RevisedRecEstimate } from 'src/app/model/budget';

// Listing table data
const ELEMENT_DATA: RevisedRecEstimate[] = [
  {
    subMajorHead: '01',
    minorHead: '901',
    subHead: '90',
    detailHead: '210',
    objectHead: '0101',
    receipt: '',
    disbursement: '',
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
  selector: 'app-revised-receipt-estimate-duplicate',
  templateUrl: './revised-receipt-estimate-duplicate.component.html',
  styleUrls: ['./revised-receipt-estimate-duplicate.component.css']
})
export class RevisedReceiptEstimateDuplicateComponent implements OnInit {
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

// For Calculation of year
  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' }
  ];

  private _onDestroy = new Subject<void>();
  createRevisedReceiptEstimateForm: FormGroup;
  revisedReceiptSecondForm: FormGroup;
  filteredCodes: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  codeCtrl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detHeadCtrl: FormControl = new FormControl();
  objHeadCtrl: FormControl = new FormControl();
  showObject: string;
  onAdd = false;

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

  attachmentType_list: any[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Other' }
  ];
  // Entry Field Details
  subMajorHeadCode_list: BudgetFormType[] = [
    {
      value: '1',
      viewValue: '00:Secretariat-Economic Services'
    },

    {
      value: '2',
      viewValue: '00:Capital Outlay on other General Economics Services'
    },

    {
      value: '3',
      viewValue: '00:Crop Husbandry'
    },

    {
      value: '4',
      viewValue: '00:Secretariat-Economic Services'
    },

    {
      value: '5',
      viewValue: '00:Capital Outlay on other General Economics Services'
    },

    {
      value: '6',
      viewValue: '01:Civil'
    },

    {
      value: '7',
      viewValue: '00:Stationery and Printing'
    },

    {
      value: '8',
      viewValue: '00::Co-operation'
    }
  ];

  minorHeadCode_list: BudgetFormType[] = [
    {
      value: '1',
      viewValue: '090:Secretariat'
    },
    { value: '2', viewValue: '101:Niti Aayog' },
    { value: '800:Other Expenditure', viewValue: '800:Other Expenditure' },

    { value: '3', viewValue: '101:Direction And Administration' },
    { value: '4', viewValue: '102:Food grain Crops' },

    { value: '5', viewValue: '103:Seed' },
    { value: '6', viewValue: '800:Other Expenditure' },

    { value: '7', viewValue: '108:Contribution to Provident Funds' },
    { value: '8', viewValue: '001:Direction and Administration' },

    { value: '9', viewValue: '101:Purchase and Supply of Stationery Stores' },
    { value: '10', viewValue: '103:Government Presses' },

    { value: '11', viewValue: '105:Government Publications' },

    {
      value: '12',
      viewValue: '797:Transfer to Reserve fund and Deposite Account'
    },

    {
      value: '13',
      viewValue: '108:Assistance to other co-operatives'
    }
  ];

  subHead_list: BudgetFormType[] = [
    {
      value: '1',
      viewValue: '01:Agricultural and Co-operation Department'
    },

    {
      value:
        '2',
      viewValue:
        '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '
    },

    {
      value: '3',
      viewValue: '01:AGR-15 Information & Technology'
    },

    {
      value: '4',
      viewValue: '02:Expenditure for Training'
    },

    {
      value: '5',
      viewValue: '01:AGR-Renovation Of The Department'
    },

    {
      value: '6',
      viewValue: '01:Direcorate of Agriculture'
    },

    {
      value: '7',
      viewValue: '02:Divisional Establishmen'
    },

    {
      value: '8',
      viewValue: '03:District Establishment'
    },

    {
      value: '9',
      viewValue: '01:Intensive Agricultural District Programme'
    },

    {
      value:
        '10',
      viewValue:
        '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
    },

    {
      value: '11',
      viewValue: '03:National Food Security Mission'
    },

    {
      value:
        '12',
      viewValue:
        '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
    },

    {
      value: '13',
      viewValue: '01:Multiplication and Distribution of various type of cotton'
    },

    {
      value: '14',
      viewValue: '02:Seed Testing Laboratory'
    },

    {
      value: '15',
      viewValue: '03:AGR 5 -Taluka Seed Multiplication Farms'
    },

    {
      value: '16',
      viewValue: '04:Adj.Establishment of seed cell'
    },

    {
      value: '17',
      viewValue: '01:IND-51 Industries and Mines Department'
    },

    {
      value: '18',
      viewValue:
        '01:IND-1 Planning Machinery in the Industries & Mines Department'
    },

    {
      value:
        '19',
      viewValue:
        '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
    },

    {
      value:
        '20',
      viewValue:
        '03:IND-45 Evaluation of Schemes under the Industries and Mines Department'
    },

    {
      value: '21',
      viewValue: '01:IND-44 Information Technology'
    },

    {
      value: '22',
      viewValue: '01:OIN-17 Industries & Mines Department'
    },

    {
      value:
        '23',
      viewValue:
        '01:Contribution towards employees Provident Funds Scheme for Presses'
    },

    {
      value: '24',
      viewValue: '01:IND-11 Directorate of Printing and Stationery'
    },

    {
      value: '25',
      viewValue: '01:Stationery offices Stores'
    },

    {
      value: '26',
      viewValue: '01:IND-48 Government Presses'
    },

    {
      value: '27',
      viewValue: '02:IND-42 Apprentice Training in Government Presses'
    },

    {
      value: '28',
      viewValue: '01:IND-32 Government Book Depots'
    },

    {
      value: '29',
      viewValue: '01:Depreciation Reserve Fund for Government Presses'
    },

    {
      value: '30',
      viewValue: '01:IND-48 Government Presses'
    },

    {
      value:
        '31',
      viewValue:
        '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
    },

    {
      value:
        '32',
      viewValue:
        '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
    }
  ];
  detHead_list: BudgetFormType[] = [
    {
      value: '1', viewValue: '00:Agricultural and Co-operation Department'
    },
    {
      value: '2', viewValue: '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development'
    },

    {
      value: '3', viewValue: '00:AGR-15 Information & Technology'
    },

    {
      value: '4', viewValue: '00:Expenditure for Training'
    },

    {
      value: '5', viewValue: '00:AGR-Renovation Of The Department'
    },

    {
      value: '6', viewValue: '00:Direcorate of Agriculture'
    },

    {
      value: '7', viewValue: '00:Intensive Agricultural District Programme'
    },
  ];
  objHead_list: BudgetFormType[] = [
    {
      value: '1', viewValue: '0101 : Pay of Officers Including Grade Pay'
    },
    {
      value: '2', viewValue: '0102 : Pay of Establishment Including Grade Pay'
    },

    {
      value: '3', viewValue: '0103 : Dearness Allowance'
    },

    {
      value: '4', viewValue: '0104 : Other Allowances'
    },

    {
      value: '5', viewValue: '0105 : Leave Travel Concession'
    },

    {
      value: '6', viewValue: '0106 : Reimbursement of Medical Charges'
    },

    {
      value: '7', viewValue: '0107 : Medical Allowance'
    },
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.createForm();
    this.createFormSecond();
    this.dataSource.paginator = this.paginator;


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

  // On click of Add button
  whenAddClick() {
    this.onAdd = true;
    const p_data = this.dataSource.data;

    p_data.push({
      subMajorHead: '01',
    minorHead: '901',
    subHead: '90',
    detailHead: '210',
    objectHead: '0101',
    receipt: '',
    disbursement: '',
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
    });
    this.dataSource.data = p_data;
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
      majorHeadCode: ['', Validators.required]
    });
  }

  createFormSecond() {
    this.revisedReceiptSecondForm = this.fb.group({
      subMajorHeadCode: ['', Validators.required],
      minorHeadCode: ['', Validators.required],
      subHead: ['', Validators.required],
      detHead: ['', Validators.required],
      objHead: ['', Validators.required],
    });
  }

  backCharge() {
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

  // For addition of columns
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

  // For 2 point decimal
  decimalPoint(data, key) {
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

  getRowData(index) {}
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
    this.router.navigate(['./budget/revised-receipt-estimate-List']);
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

  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }
  goToDashboard() {
    console.log('deshbord');
  }

  // Functions For Calculation of Year
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
  saveEstimate() {}
  saveStandCharge() {}

}
