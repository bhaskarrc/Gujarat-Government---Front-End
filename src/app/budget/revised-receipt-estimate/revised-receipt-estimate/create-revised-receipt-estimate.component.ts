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
import { HeaderElement } from '../revised-receipt-view/revised-receipt-estimate-view.component';
import { MatDialog } from '@angular/material';
import { SaveConfirmDialogComponent } from '../../save-confirm-dialog/save-confirm-dialog.component';
import { StandingChargeForwardDialogComponent, StadingChargeConfirmDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';

export interface Element {
  subMajorHead: string | '';
  minorHead: string | '';
  subHead: string | '';
  detailHead: string | '';
  receipt: number | '';
  actualReceiptForLastYear: number | '';
  actualDisburSementForLastYear: number | '';
  actualReceiptFor8MonthsOfCurrYr1A: number | '';
  actualDisbursementFor8MonthsOfCurrYr1B: number | '';
  actReciForLast4MonthCurR2A: number | '';
  actDisbForLast4MonthCurR2B: number | '';
  receipt1M2: number | '';
  disbursement1M2: number | '';
  Provision4nYReceipt: number | '';
  Provision4nYdisbursement: number | '';
  PropoAmountReceipt: number | '';
  PropoAmountDisbu: number | '';
  fDAcctOctNovCurrYearRec: number | '';
  fDAcctOctNovCurrYearDis: number | '';
  FDLatestEt4castCurrYearRec: number | '';
  FDLatestEt4castCurrYearDis: number | '';
  remarks: string | '';
  DeductRefundMap: number | '';
  disbursement: number | '';
}
const ELEMENT_DATA: Element[] = [
  {
    subMajorHead: '01',
    minorHead: '901',
    subHead: '90',
    detailHead: '210',
    receipt: '',
    // tslint:disable-next-line:max-line-length
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
  selector: 'app-create-revised-receipt-estimate',
  templateUrl: './create-revised-receipt-estimate.component.html',
  styleUrls: ['./create-revised-receipt-estimate.component.css']
})
export class CreateRevisedReceiptEstimateComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA, TAB];
  expendCharges: boolean;
  tabDisable: Boolean = true;
  doneHeader: Boolean = false;
  selectedIndex: number;
  // date = new Date();
  // year = this.date.getFullYear();
  // previous = (this.date.getFullYear()-1);
  // nextYear = (this.date.getFullYear()+1);
  // prvYear = this.previous + "-" + this.year;
  // nextYears = this.year + "-" + this.nextYear;
  date: any = new Date();

  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' }
  ];

  // districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);
  private _onDestroy = new Subject<void>();
  createRevisedReceiptEstimateForm: FormGroup;
  // filteredCodes: Observable<string[]>;
  filteredCodes: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  codeCtrl = new FormControl();
  showObject: string;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  objs_tab1_data = {
    subMajorHead: '',
    minorHead: '0.00',
    subHead: '0.00',
    detailHead: '0.00',
    receipt: '0.00',
    disbursement: '0.00',
    actualReceiptForLastYear: '0.00',
    actualDisburSementForLastYear: '0.00',
    actualReceiptFor8MonthsOfCurrYr1A: '0.00',
    actualDisbursementFor8MonthsOfCurrYr1B: '0.00',
    actReciForLast4MonthCurR2A: '0.00',
    actDisbForLast4MonthCurR2B: '0.00',
    receipt1M2: 0.0,
    disbursement1M2: '0.00',
    Provision4nYReceipt: '0.00',
    Provision4nYdisbursement: '0.00',
    PropoAmountReceipt: '0.00',
    PropoAmountDisbu: '0.00',
    fDAcctOctNovCurrYearRec: '0.00',
    fDAcctOctNovCurrYearDis: '0.00',
    FDLatestEt4castCurrYearRec: '0.00',
    FDLatestEt4castCurrYearDis: '0.00',
    DeductRefundMap: '0.00',
    remarks: ''
  };

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
    BRANCH: 'Please select any Name of the Branch ',
    ESTIMATION_FORM: 'Please select any Estimation Form ',
    ESTIMATE_BY: 'Please select any Estimation By ',
    // HOD: 'Please select any HoD',
    MAJOR_HEAD: 'Please select any Major Head'
  };

  finYear_list: any[] = [
    {value: '1', viewValue: '2020-2021'},
    {value: '2', viewValue: '2019-2020'},
  ];
  department_list: any[] = [
    { value: '1', viewValue: 'Home Department' },
    {
      value: '2',
      viewValue: 'Agriculture,Farmers Welfare & Co-operation Department'
    },
    { value: '3', viewValue: 'Revenue Department' },
    { value: '4', viewValue: 'Gujarat Legislature Secretariat' },
    { value: '5', viewValue: 'Gujarat Forest Service Officers' },
    { value: '6', viewValue: 'Women and Child Development Department' }
  ];
  branch_list: any[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'B1 Section - Budget ' },
    { value: '3', viewValue: 'TH (Budget Non Plan)' },
    { value: '4', viewValue: 'K Section - Establishment' },
    { value: '5', viewValue: 'Budget - Revenue' },
    { value: '6', viewValue: 'Budget - FIN' }
  ];
  estimation_list: any[] = [
    {value: '1', viewValue: 'Director of Horticulture'},
    {value: '2', viewValue: 'Director of Animal Husbandry'},
    {value: '3', viewValue: 'Commission of Geology and Mining'},
  ];
  estimation_by_list: any[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' }
  ];
  // hod_list: any[] = [
  //   {value: '001', viewValue: 'Hod'},
  //   {value: '002', viewValue: 'Hod'},
  //   {value: '003', viewValue: 'Hod'},
  //   {value: '004', viewValue: 'Hod'},
  // ];
  majorHead_list: any[] = [
    { value: '1', viewValue: '0020: Corporation Tax' },
    {
      value: '2',
      viewValue: '0021 : Taxes on Income other than Corporation Tax'
    },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' }
  ];

  attachmentType_list: any[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' }
  ];

  // displayedColumns = [
  //   'subMajorHead',
  //   'minorHead',
  //   'subHead',
  //   'detailHead',
  //   'receipt',
  //   'disbursement',
  //   'actualReceiptForLastYear',
  //   'actualDisburSementForLastYear',
  //   'actualReceiptFor8MonthsOfCurrYr1A',
  //   'actualDisbursementFor8MonthsOfCurrYr1B',
  //   'actReciForLast4MonthCurR2A',
  //   'actDisbForLast4MonthCurR2B',
  //   'receipt1M2',
  //   'disbursement1M2',
  //   'Provision4nYReceipt',
  //   'Provision4nYdisbursement',
  //   'PropoAmountReceipt',
  //   'PropoAmountDisbu',
  //   'fDAcctOctNovCurrYearRec',
  //   'fDAcctOctNovCurrYearDis',
  //   'FDLatestEt4castCurrYearRec',
  //   'FDLatestEt4castCurrYearDis',
  //   'proposedAmount',
  //   'remarks',
  //   'DeductRefundMap'
  // ];

  // displayedColumns = ['subMajorHead', 'minorHead', 'subHead', 'detailHead','receipt', 'disbursement', 
  // 'actualReceiptForLastYear', 'actualDisburSementForLastYear','actualReceiptFor8MonthsOfCurrYr1A', 
  // 'actualDisbursementFor8MonthsOfCurrYr1B', 'actReciForLast4MonthCurR2A', 'actDisbForLast4MonthCurR2B', 
  // 'receipt1M2','disbursement1M2','Provision4nYReceipt','Provision4nYdisbursement', 'PropoAmountReceipt', 
  // 'PropoAmountDisbu', 'fDAcctOctNovCurrYearRec', 'fDAcctOctNovCurrYearDis', 'FDLatestEt4castCurrYearRec',
  // 'FDLatestEt4castCurrYearDis','proposedAmount', 'remarks', 'DeductRefundMap'];
  

  displayedColumns = ['subMajorHead', 'minorHead', 'subHead', 'detailHead', 'objectHead', 'receipt', 'disbursement',
  'receipt1', 'disbursement1', 
  'receipt2', 'disbursement2',
  'receipt3', 'disbursement3', 'receipt4', 'disbursement4',
  'receipt1M2','disbursement1M2','Provision4nYReceipt','Provision4nYdisbursement', 'PropoAmountReceipt', 
  'PropoAmountDisbu', 'fDAcctOctNovCurrYearRec', 'fDAcctOctNovCurrYearDis', 'FDLatestEt4castCurrYearRec',
  'FDLatestEt4castCurrYearDis', 'remarks', 'DeductRefundMap'];
  

  // tslint:disable-next-line:max-line-length
  // subDisplayedColumns = ['subMajorHead', 'minorHead', 'subHead','detailHead','receipt','disbursement', 'actualReceiptForLastYear', 'actualDisburSementForLastYear','actualReceiptFor8MonthsOfCurrYr1A','actualDisbursementFor8MonthsOfCurrYr1B', 'actReciForLast4MonthCurR2A','actDisbForLast4MonthCurR2B','receipt1M2','disbursement1M2','Provision4nYReceipt','Provision4nYdisbursement', 'PropoAmountReceipt', 'PropoAmountDisbu', 'fDAcctOctNovCurrYearRec','fDAcctOctNovCurrYearDis','FDLatestEt4castCurrYearRec','FDLatestEt4castCurrYearDis',
  //   'DeductRefundMap', 'remarks', 'action'];

  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  departmentCodeCtrl: FormControl = new FormControl();
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  branchCodeCtrl: FormControl = new FormControl();
  filteredBranchCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimationFromCtrl: FormControl = new FormControl();
  filteredEstimationFrom: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimateByCtrl: FormControl = new FormControl();
  filteredEstimateBy: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  // hodCodeCtrl: FormControl = new FormControl();
  // filteredhodCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  majorHeadCodeCtrl: FormControl = new FormControl();
  filteredMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  expendDataSource: any;
  selSubObjectId: string;
  // dataSource: any;
  codes: string[] = [];
  subObjectId: Array<any> = [];
  hodAmount: any;
  succObjectCode: Array<any> = [];
  allMainCodes: any;
  displayedBrowseColumns = [
    'position',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];
  // files = [
  //   {fileType: 'file-0', name: 'Supporting Document'},
  //   {fileType: 'file-1', name: 'Senction Order'},
  // ];
  fileBrowseIndex: number;

  brwoseData: any[] = [
    {
      // dropDown: undefined,
      // fileType:undefined,
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

    this.filteredFinYear.next(this.finYear_list.slice());
    this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.finYear_list,
          this.finYearCtrl.value,
          this.filteredFinYear
        );
      });

    this.filteredDepartmentCode.next(this.department_list.slice());
    this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.department_list,
          this.departmentCodeCtrl.value,
          this.filteredDepartmentCode
        );
      });

    this.filteredBranchCode.next(this.branch_list.slice());
    this.branchCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchCodeCtrl.value,
          this.filteredBranchCode
        );
      });

    this.filteredEstimationFrom.next(this.estimation_list.slice());
    this.estimationFromCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.estimation_list,
          this.estimationFromCtrl.value,
          this.filteredEstimationFrom
        );
      });

    this.filteredEstimateBy.next(this.estimation_by_list.slice());
    this.estimateByCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.estimation_by_list,
          this.estimateByCtrl.value,
          this.filteredEstimateBy
        );
      });

    // this.filteredhodCode.next(this.hod_list.slice());
    // (this.hodCodeCtrl.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterObjValue(this.hod_list, this.hodCodeCtrl.value, this.filteredhodCode);
    //   }));

    this.filteredMajorHeadCode.next(this.majorHead_list.slice());
    this.majorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.majorHead_list,
          this.majorHeadCodeCtrl.value,
          this.filteredMajorHeadCode
        );
      });

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
      estimationFrom: ['1',Validators.required],
      // estimateBy: ['1'],
      // hod: ['', Validators.required],
      majorHeadCode: ['', Validators.required]
    });
  }

  saveAllCharge() {
    let pstatus;
    let expenseHod: any = 0;
    let expendStatus;
    if (this.expendDataSource.data && this.expendDataSource.data.length === 0) {
      this.toastr.error('Please add the expense with selected object head.');
    } else {
      this.expendDataSource.data.forEach((element, index) => {
        // element.objecthead = showObject;
        // tslint:disable-next-line:max-line-length
        if (
          element.subMajorHead === '' ||
          element.minorHead === '' ||
          element.detailHead === '' ||
          element.actualReceiptForLastYear === '' ||
          element.actualDisburSementForLastYear === '' ||
          element.actualReceiptFor8MonthsOfCurrYr1A === '' ||
          element.actualDisbursementFor8MonthsOfCurrYr1B === '' ||
          element.actReciForLast4MonthCurR2A === '' ||
          element.actDisbForLast4MonthCurR2B === '' ||
          element.receipt1M2 === '' ||
          element.disbursement1M2 === '' ||
          element.Provision4nYReceipt === '' ||
          element.Provision4nYdisbursement === '' ||
          element.PropoAmountReceipt === '' ||
          element.PropoAmountDisbu === '' ||
          element.fDAcctOctNovCurrYearRec === '' ||
          element.fDAcctOctNovCurrYearDis === '' ||
          element.FDLatestEt4castCurrYearRec === '' ||
          element.FDLatestEt4castCurrYearDis === '' ||
          // tslint:disable-next-line:max-line-length
          element.subHead === '' ||
          element.receipt === '' ||
          element.disbursement === '' ||
          element.DeductRefundMap === ''
        ) {
          pstatus = 1;
        } else if (
          element &&
          element.subMajorHead &&
          element.minorHead &&
          element.detailHead &&
          // tslint:disable-next-line:max-line-length
          element.subHead &&
          element.receipt &&
          element.disbursement &&
          element.actualReceiptForLastYear &&
          element.actualDisburSementForLastYear &&
          element.actualReceiptFor8MonthsOfCurrYr1A &&
          element.actualDisbursementFor8MonthsOfCurrYr1B &&
          element.actReciForLast4MonthCurR2A &&
          element.actDisbForLast4MonthCurR2B &&
          element.receipt1M2 &&
          element.disbursement1M2 &&
          element.Provision4nYReceipt &&
          element.Provision4nYdisbursement &&
          element.PropoAmountReceipt &&
          element.PropoAmountDisbu &&
          element.fDAcctOctNovCurrYearRec &&
          element.fDAcctOctNovCurrYearDis &&
          element.FDLatestEt4castCurrYearRec &&
          element.FDLatestEt4castCurrYearDis &&
          element.DeductRefundMap
        ) {
          expenseHod = expenseHod + Number(element.DeductRefundMap);
          if (this.hodAmount !== expenseHod) {
            pstatus = 2;
          }
          // this.hodAmount
          // this.toastr.error('Please fill the detail of object head ' + showObject + '');
        } else {
          pstatus = '';
        }
        if (this.expendDataSource.data.length === index + 1) {
          if (pstatus === 1) {
            this.toastr.error('Please fill the detail for sub object head.');
          } else if (pstatus === 2) {
            this.toastr.error(
              'Your proposed HOD amount did not match to main object proposed HOD.'
            );
          } else {
            this.toastr.success(
              'Your expendcharges proposed HOD amount matched successfully.'
            );
            // this.expendCharges = false;
            expendStatus = true;
            return;
          }
        }
      });
    }

    let sData = 0;
    let districtStatus;
    // this.districtDataSource.data.forEach((element, index) => {
    //   if (element) {
    //     sData += Number(element.expendature) + Number(element.talukaexpendature) + Number(element.gramexpendature);
    //   }
    //   if (this.districtDataSource.data.length === (index + 1)) {
    //     if (this.hodAmount !== sData) {
    //       this.toastr.error('Your district, taluka & gram panchayat expense did not match to main object proposed HOD.');
    //     } else {
    //       this.toastr.success('Your district, taluka & gram panchayat expense matched to main object successfully.');
    //       districtStatus = true;
    //     }
    //   }
    // });

    // if (expendStatus && districtStatus && this.districtDataSource.data.length > 0 && this.expendDataSource.data.length > 0) {
    //   // tslint:disable-next-line:no-unused-expression
    //   (!this.succObjectCode.includes(this.showObject)) ? this.succObjectCode.push(this.showObject) : '';
    //   this.backCharge();
    // } else if ((expendStatus || districtStatus) && (this.districtDataSource.data.length > 0 && this.expendDataSource.data.length > 0)) {
    //   // this.errObjectCode.push(this.showObject);
    // }
  }
  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    // debugger
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      // debugger
      // Add our fruit
      if ((value || '').trim()) {
        // tslint:disable-next-line: no-unused-expression
        !this.codes.includes(value) && this.allMainCodes.includes(value)
          ? this.codes.push(value.trim())
          : '';
      }
      if (
        this.codes &&
        this.codes.length > 0 &&
        this.allMainCodes.includes(value)
      ) {
        this.applyFilter(value);
      }
      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.codeCtrl.setValue(null);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    // this.codes.push(event.option.viewValue);
    // tslint:disable-next-line:no-unused-expression
    !this.codes.includes(event.option.viewValue)
      ? this.codes.push(event.option.viewValue)
      : '';
    this.codeInput.nativeElement.value = '';
    this.codeCtrl.setValue(null);
    if (
      this.codes &&
      this.codes.length > 0 &&
      this.allMainCodes.includes(event.option.viewValue)
    ) {
      this.applyFilter(event.option.viewValue);
    }
  }
  backCharge() {
    this.showObject = '';
    // this.expendCharges = false;
    this.objectCodeFilterData();
  }
  addExpense(showObject) {
    console.log('this.expendDataSource.data', this.expendDataSource.data);
    const expendDatacount = this.expendDataSource.data.length;
    if (this.selSubObjectId) {
      if (
        this.expendDataSource &&
        this.expendDataSource.data &&
        this.expendDataSource.data.length === 0
      ) {
        // tslint:disable-next-line:max-line-length
        this.expendDataSource.data = [
          {
            subMajorHead: this.selSubObjectId,
            minorHead: 0.0,
            detailHead: 0.0,
            // tslint:disable-next-line:max-line-length
            subHead: 0.0,
            receipt: 0.0,
            disbursement: 0.0,
            actualReceiptForLastYear: 0.0,
            actualDisburSementForLastYear: 0.0,
            actualReceiptFor8MonthsOfCurrYr1A: 0.0,
            actualDisbursementFor8MonthsOfCurrYr1B: '0.00',
            actReciForLast4MonthCurR2A: '0.00',
            actDisbForLast4MonthCurR2B: '0.00',
            receipt1M2: '0.00',
            disbursement1M2: '0.00',
            Provision4nYReceipt: '0.00',
            Provision4nYdisbursement: '0.00',
            PropoAmountReceipt: '0.00',
            PropoAmountDisbu: '0.00',
            fDAcctOctNovCurrYearRec: '0.00',
            fDAcctOctNovCurrYearDis: '0.00',
            FDLatestEt4castCurrYearRec: '0.00',
            FDLatestEt4castCurrYearDis: '0.00',
            DeductRefundMap: 0.0,
            remarks: ''
          }
        ];
        this.subObjectId.push(this.selSubObjectId);
      } else {
        this.expendDataSource.data.forEach((element, index) => {
          element.subMajorHead = this.subObjectId[index];
          if (
            this.expendDataSource.data.length === index + 1 &&
            element &&
            element.subMajorHead &&
            element.minorHead &&
            element.detailHead &&
            // tslint:disable-next-line:max-line-length
            element.subHead &&
            element.receipt &&
            element.disbursement &&
            element.actualReceiptForLastYear &&
            element.actualDisburSementForLastYear &&
            element.actualReceiptFor8MonthsOfCurrYr1A &&
            element.actualDisbursementFor8MonthsOfCurrYr1B &&
            element.actReciForLast4MonthCurR2A &&
            element.actDisbForLast4MonthCurR2B &&
            element.receipt1M2 &&
            element.disbursement1M2 &&
            element.Provision4nYReceipt &&
            element.Provision4nYdisbursement &&
            element.PropoAmountReceipt &&
            element.PropoAmountDisbu &&
            element.fDAcctOctNovCurrYearRec &&
            element.fDAcctOctNovCurrYearDis &&
            element.FDLatestEt4castCurrYearRec &&
            element.FDLatestEt4castCurrYearDis &&
            element.DeductRefundMap
          ) {
            const p_data = this.expendDataSource.data;
            this.subObjectId.push(this.selSubObjectId);
            // element.objecthead = this.subObjectId[index + 1];
            // tslint:disable-next-line:max-line-length
            p_data.push({
              subMajorHead: this.selSubObjectId,
              minorHead: 0.0,
              subHead: 0.0,
              detailHead: 0.0,
              receipt: 0.0,
              // tslint:disable-next-line:max-line-length
              disbursement: 0.0,
              actualReceiptForLastYear: 0.0,
              actualDisburSementForLastYear: 0.0,
              actualReceiptFor8MonthsOfCurrYr1A: 0.0,
              actualDisbursementFor8MonthsOfCurrYr1B: 0.0,
              actReciForLast4MonthCurR2A: 0.0,
              actDisbForLast4MonthCurR2B: 0.0,
              receipt1M2: 0.0,
              disbursement1M2: 0.0,
              Provision4nYReceipt: 0.0,
              Provision4nYdisbursement: 0.0,
              PropoAmountReceipt: 0.0,
              PropoAmountDisbu: 0.0,
              fDAcctOctNovCurrYearRec: 0.0,
              fDAcctOctNovCurrYearDis: 0.0,
              FDLatestEt4castCurrYearRec: 0.0,
              FDLatestEt4castCurrYearDis: 0.0,
              DeductRefundMap: 0.0,
              remarks: ''
            });
            this.expendDataSource.data = p_data;
          } else if (this.expendDataSource.data.length === index + 1) {
            element.subMajorHead = this.subObjectId[index];
            this.toastr.error(
              'Please fill the detail of object head ' +
                element.subMajorHead +
                ''
            );
          }
        });
      }
    } else {
      this.toastr.error('Please select object head to add expense');
    }
    // debugger
  }
  selectCharge(data) {
    this.selSubObjectId = data.value;
    this.addExpense(this.showObject);
  }
  showCharge(event, index, element) {
    // this.myScrollContainer.nativeElement.scrollIntoView();
    if (
      element &&
      element.subMajorHead &&
      element.minorHead &&
      // tslint:disable-next-line:max-line-length
      element.subHead &&
      element.detailHead &&
      element.receipt &&
      element.disbursement &&
      element.actualReceiptForLastYear &&
      element.actualDisburSementForLastYear &&
      element.actualReceiptFor8MonthsOfCurrYr1A &&
      element.actualDisbursementFor8MonthsOfCurrYr1B &&
      element.actReciForLast4MonthCurR2A &&
      element.actDisbForLast4MonthCurR2B &&
      element.receipt1M2 &&
      element.disbursement1M2 &&
      element.Provision4nYReceipt &&
      element.Provision4nYdisbursement &&
      element.PropoAmountReceipt &&
      element.PropoAmountDisbu &&
      element.fDAcctOctNovCurrYearRec &&
      element.fDAcctOctNovCurrYearDis &&
      element.FDLatestEt4castCurrYearRec &&
      element.FDLatestEt4castCurrYearDis &&
      element.DeductRefundMap
    ) {
      // this.expendCharges = true;
      this.selSubObjectId = '';
      this.subObjectId = [];
      const data = this.dataSource.data.filter((x, i) => i === index);
      this.dataSource.data = data;
      this.showObject = element.subMajorHead;
      this.hodAmount = element.DeductRefundMap;
    } else {
      this.toastr.error('Please fill all the details object head!');
    }
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allMainCodes.filter(
      fruit => fruit.toLowerCase().indexOf(filterValue) === 0
    );
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.objectCodeFilterData();
  }

  objectCodeFilterData() {
    const pdata = ELEMENT_DATA;
    this.dataSource.data = pdata.filter(x =>
      this.codes.includes(x.subMajorHead)
    );
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

  remove(fruit: string): void {
    const index = this.codes.indexOf(fruit);

    if (index >= 0) {
      this.codes.splice(index, 1);
    }
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

  getRowData(index) {}
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
        //&& data.name
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
    this.router.navigate(['./budget/revised-receipt-estimate-List']);
  }

  saveConfirmationPopup() {
    const dialogRef = this.dialog.open(SaveConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.tabDisable = false;
        this.selectedIndex = 1;
      }
    });
  }

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
