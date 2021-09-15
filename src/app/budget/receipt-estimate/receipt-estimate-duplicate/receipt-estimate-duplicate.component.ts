import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { MatSelect, MatAutocompleteSelectedEvent, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator } from '@angular/material';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReceiptEstimate } from '../../../model/receipt-estimate';
import { StandingChargeForwardDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
import { SaveConfirmDialogComponent } from '../../save-confirm-dialog/save-confirm-dialog.component';
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { ReceiptEstimateConfirmDialogComponent, ReceiptEstimateDialogComponent } from '../receipt-estimates/receipt-estimates.component';
import { BudgetFormType } from 'src/app/model/budget';

export interface HeaderElement {
  label: string | '';
  value: string | '';
}

@Component({
  selector: 'app-receipt-estimate-duplicate',
  templateUrl: './receipt-estimate-duplicate.component.html',
  styleUrls: ['./receipt-estimate-duplicate.component.css']
})
export class ReceiptEstimateDuplicateComponent implements OnInit {

  date: any = new Date();

  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
  ];

  removable = true;
  isTokentable = false;
  isnotTokentable = true;
  onAdd = false;
  codeCtrl = new FormControl();
  filteredCodes: Observable<string[]>;
  codes: string[] = [];
  expendCharges: boolean;
  doneHeader: Boolean = false;
  selectedIndex: number;
  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;


  receiptEstimate: ReceiptEstimate[] = [
    {
      majorHead: '2225', subMajorHead: '00 ', minorHead: '901', subHead: '00', detailHead: '00', objectHead: '00', thirdLastYearReceipt: '',
      secondLastYearReceipt: '', lastYearReceipt: '', thirdLastYearDisbursement: '', secondLastYearDisbursement: '',
      lastYearDisbursement: '', beReceipt: '', beDisbursement: '', hodAmountReceipt: '', hodAmountDisbursement: '',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
      submajortooltip: 'Secretariat-Economic Services',
      minortooltip: 'Secretariat',
      detailetooltip: 'AGR-15 Information & Technology',
      subtooltip: 'Agricultural and Co-operation Department', ActualsReceipt1: '', ActualsDisbursement1: '', provisionRecipt: '',
      provisionDisbursement: '', ActualsDisbursement3: '', ActualsReceipt3: '', actualsReceipt2: '', actualsDisbursement2: '', },
    {
      majorHead: '2225', subMajorHead: '00', minorHead: '901', subHead: '90', detailHead: '00', objectHead: '00', thirdLastYearReceipt: '',
      secondLastYearReceipt: '', lastYearReceipt: '', thirdLastYearDisbursement: '', secondLastYearDisbursement: '',
      lastYearDisbursement: '', beReceipt: '', beDisbursement: '', hodAmountReceipt: '', hodAmountDisbursement: '',
      submajortooltip: 'Secretariat-Economic Services',
      minortooltip: 'Secretariat',
      detailetooltip: 'AGR-15 Information & Technology',
      subtooltip: 'Agricultural and Co-operation Department',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
       ActualsReceipt1: '', ActualsDisbursement1: '', provisionRecipt: '',
      provisionDisbursement: '', ActualsDisbursement3: '', ActualsReceipt3: '', actualsReceipt2: '', actualsDisbursement2: '',
    },
  ];
  receiptEstimate1: ReceiptEstimate[] = [
    {
      majorHead: '2225', subMajorHead: '00 ', minorHead: '901', subHead: '00', detailHead: '00', objectHead: '00', thirdLastYearReceipt: '',
      secondLastYearReceipt: '', lastYearReceipt: '', thirdLastYearDisbursement: '', secondLastYearDisbursement: '',
      lastYearDisbursement: '', beReceipt: '', beDisbursement: '', hodAmountReceipt: '', hodAmountDisbursement: '',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
      submajortooltip: 'Secretariat-Economic Services',
      minortooltip: 'Secretariat',
      detailetooltip: 'AGR-15 Information & Technology',
      subtooltip: 'Agricultural and Co-operation Department', ActualsReceipt1: '', ActualsDisbursement1: '', provisionRecipt: '',
      provisionDisbursement: '', ActualsDisbursement3: '', ActualsReceipt3: '', actualsReceipt2: '', actualsDisbursement2: '', },
    {
      majorHead: '2225', subMajorHead: '00', minorHead: '901', subHead: '90', detailHead: '00', objectHead: '00', thirdLastYearReceipt: '',
      secondLastYearReceipt: '', lastYearReceipt: '', thirdLastYearDisbursement: '', secondLastYearDisbursement: '',
      lastYearDisbursement: '', beReceipt: '', beDisbursement: '', hodAmountReceipt: '', hodAmountDisbursement: '',
      submajortooltip: 'Secretariat-Economic Services',
      minortooltip: 'Secretariat',
      detailetooltip: 'AGR-15 Information & Technology',
      subtooltip: 'Agricultural and Co-operation Department',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
       ActualsReceipt1: '', ActualsDisbursement1: '', provisionRecipt: '',
      provisionDisbursement: '', ActualsDisbursement3: '', ActualsReceipt3: '', actualsReceipt2: '', actualsDisbursement2: '',
    },
  ];

  dataSource = new MatTableDataSource(this.receiptEstimate);
  dataSource1 = new MatTableDataSource(this.receiptEstimate1);

  // tslint:disable-next-line: max-line-length
  // displayedColumns = ['subMajorHead', 'minorHead', 'subHead', 'detailHead', 'thirdLastYearReceipt', 'secondLastYearReceipt', 'lastYearReceipt',

  //   'thirdLastYearDisbursement', 'secondLastYearDisbursement', 'lastYearDisbursement', 'beReceipt', 'beDisbursement', 'hodAmountReceipt','hodAmountDisbursement','provisionRecipt','provisionDisbursement','remarks'];



  displayedColumns = ['position', 'subMajorHead', 'minorHead', 'subHead', 'detailHead',
    'beReceipt', 'beDisbursement',
    'ActualsReceipt1', 'ActualsDisbursement1',
    'ActualsReceipt2', 'ActualsDisbursement2',
    'ActualsReceipt3', 'ActualsDisbursement3',
    // 'thirdLastYearDisbursement', 'secondLastYearDisbursement', 'lastYearDisbursement',
    'hodAmountReceipt', 'hodAmountDisbursement', 'provisionRecipt', 'provisionDisbursement', 'remarks', 'deductRefundMapping'];


  displayedColumns1 = ['position','subMajorHead', 'minorHead', 'subHead', 'detailHead', 'objectHead',
    'beReceipt', 'beDisbursement',
    'ActualsReceipt1', 'ActualsDisbursement1',
    'ActualsReceipt2', 'ActualsDisbursement2',
    'ActualsReceipt3', 'ActualsDisbursement3',
    // 'thirdLastYearDisbursement', 'secondLastYearDisbursement', 'lastYearDisbursement',
    'hodAmountReceipt', 'hodAmountDisbursement', 'provisionRecipt', 'provisionDisbursement', 'remarks', 'deductRefundMapping'];


  // added by PankajG
  createReceiptEstimateForm: FormGroup;
  receiptSecondForm: FormGroup;

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
    BRANCH: 'Please select any Name of the Branch ',
    ESTIMATION_FORM: 'Please select any Estimation Form ',
    ESTIMATE_BY: 'Please select any Estimation By ',
    MAJOR_HEAD: 'Please select any Major Head',
  };

  finYear_list: any[] = [
    // { value: '2019-2020', viewValue: '2019-2020' },
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2019-2020' },
  ];

  department_list: any[] = [
    { value: '1', viewValue: 'Home Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' },
  ];

  branch_list: any[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Budget' },
  ];

  estimation_list: any[] = [
    { value: '1', viewValue: 'Director of Horticulture' },
    { value: '2', viewValue: 'Director of Animal Husbandry' },
    { value: '3', viewValue: 'Commission of Geology and Mining' },

  ];

  estimation_by_list: any[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' },
  ];

  majorHead_list: any[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
    { value: '6', viewValue: '1601 : Grants-in-aid from Central Government' },
  ];

  attachmentType_list: any[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Other' },
  ];

  filteredRevenueCapital: any[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
    { value: '3', viewValue: 'Public Account' },
  ];
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



  revenueCapitalCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detHeadCtrl: FormControl = new FormControl();
  objHeadCtrl: FormControl = new FormControl();

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

  majorHeadCodeCtrl: FormControl = new FormControl();
  filteredMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;

  private _onDestroy = new Subject<void>();

  // tslint:disable-next-line:member-ordering
  tabDisable: Boolean = true;
  // tslint:disable-next-line:member-ordering
  tabHeader: boolean;

  // Attachments
  // tslint:disable-next-line:member-ordering
  brwoseData: any[] = [{
    // attachmentType: undefined,
    name: undefined,
    file: undefined,
  }];
  // tslint:disable-next-line:member-ordering
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  // tslint:disable-next-line:member-ordering
  fileBrowseIndex: number;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private el: ElementRef,
    public dialog: MatDialog
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.createForm();
    this.createFormSecond();
    this.dataSource.paginator = this.paginator;

    this.filteredFinYear.next(this.finYear_list.slice());
    (this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYear_list, this.finYearCtrl.value, this.filteredFinYear);
      }));

    if (this.department_list) {
      this.filteredDepartmentCode.next(this.department_list.slice());
    }
    (this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.department_list, this.departmentCodeCtrl.value, this.filteredDepartmentCode);
      }));
    if (this.branch_list) {
      this.filteredBranchCode.next(this.branch_list.slice());
    }
    (this.branchCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.branch_list, this.branchCodeCtrl.value, this.filteredBranchCode);
      }));
    this.filteredEstimationFrom.next(this.estimation_list.slice());
    (this.estimationFromCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_list, this.estimationFromCtrl.value, this.filteredEstimationFrom);
      }));
    this.filteredEstimateBy.next(this.estimation_by_list.slice());
    (this.estimateByCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.estimation_by_list, this.estimateByCtrl.value, this.filteredEstimateBy);
      }));
    this.filteredMajorHeadCode.next(this.majorHead_list.slice());
    (this.majorHeadCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.majorHead_list, this.majorHeadCodeCtrl.value, this.filteredMajorHeadCode);
      }));

    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachmentType_list, this.attachmentTypeCodeCtrl.value, this.filteredAttachmentTypeCode);
      });
    this.createReceiptEstimateForm.patchValue({
      'finYear': '1',
      'estimationFrom': '1',
      'estimateBy': '1'
    });
  }

  ontoken(index) {
    if (index.value === '6') {
      this.isTokentable = true;
      this.isnotTokentable = false;
    } else {
      this.isTokentable = false;
      this.isnotTokentable = true;
    }
  }

  whenAddClick() {
    this.onAdd = true;

    const p_data = this.dataSource.data;
    p_data.push({
      majorHead: '',
      subMajorHead: '01',
      minorHead: '901',
      subHead: '90',
      detailHead: '210',
      objectHead: '0101',

      thirdLastYearReceipt: '', secondLastYearReceipt: '', lastYearReceipt: '', thirdLastYearDisbursement: '',
      secondLastYearDisbursement: '', lastYearDisbursement: '', beReceipt: '', beDisbursement: '',
      hodAmountReceipt: '', hodAmountDisbursement: '', remarks: '', deductRefundMapping: '', majorHeadInfo: '',
      submajortooltip: '', minortooltip: '', detailetooltip: '', subtooltip: '', ActualsReceipt1: '',
      ActualsDisbursement1: '', provisionRecipt: '', provisionDisbursement: '', ActualsDisbursement3: '',
      ActualsReceipt3: '', actualsReceipt2: '', actualsDisbursement2: '',
    });
    this.dataSource.data = p_data;

    const p_data_second = this.dataSource1.data;
    p_data_second.push({
      majorHead: '',
      subMajorHead: '01',
      minorHead: '901',
      subHead: '90',
      detailHead: '210',
      objectHead: '0101',

      thirdLastYearReceipt: '', secondLastYearReceipt: '', lastYearReceipt: '', thirdLastYearDisbursement: '',
      secondLastYearDisbursement: '', lastYearDisbursement: '', beReceipt: '', beDisbursement: '',
      hodAmountReceipt: '', hodAmountDisbursement: '', remarks: '', deductRefundMapping: '', majorHeadInfo: '',
      submajortooltip: '', minortooltip: '', detailetooltip: '', subtooltip: '', ActualsReceipt1: '',
      ActualsDisbursement1: '', provisionRecipt: '', provisionDisbursement: '', ActualsDisbursement3: '',
      ActualsReceipt3: '', actualsReceipt2: '', actualsDisbursement2: '',
    });
    this.dataSource1.data = p_data_second;
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
    this.createReceiptEstimateForm = this.fb.group({
      finYear: ['', Validators.required],
      departmentCode: ['2', Validators.required],
      branchCode: ['2', Validators.required],
      estimationFrom: [''],
      estimateBy: [''],
      majorHeadCode: ['', Validators.required],
      revenueCapital: ['']

    });
  }

  createFormSecond() {
    this.receiptSecondForm = this.fb.group({
      subMajorHeadCode: ['', Validators.required],
      minorHeadCode: ['', Validators.required],
      subHead: ['', Validators.required],
      detHead: ['', Validators.required],
      objHead: ['', Validators.required],
    });
  }

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

  getBillNo(data) {
  }

  saveStandCharge() { }
  getRowData(index) {
    // this.dataSource.data.forEach((data, dataindex: any) => {
    //   if (dataindex === index) {
    //     data.status = false;
    //   } else {
    //     data.status = true;
    //   }
    // });
  }

  gotoListing() {
    this.router.navigate(['./budget/receipt-estimate-list']);
  }

  saveAllData() {
    this.toastr.success('Data Saved Successfully.');
  }

  goToNext() {
    const dialogRef = this.dialog.open(SaveConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.tabHeader = true;
        this.tabDisable = false;
        this.selectedIndex = 1;
      }
    });
    // if (this.createEstimateForm.invalid) {
    //   this.toastr.error('Please fill all the details.');
    //   this.tabDisable = true;
    // } else {
    //   this.tabDisable = false;
    //   this.selectedIndex = 1;
    //   this.doneHeader = true;
    // }
  }
  decimalPoint(data, key) {
    // debugger
    data[key] = Number(data[key]).toFixed(2);
  }


  /* Attachment Functions */

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }
  submitToNextLevel(): void {
    const dialogRef = this.dialog.open(ReceiptEstimateDialogComponent, {
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
    const dialogRef = this.dialog.open(ReceiptEstimateConfirmDialogComponent, {
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
  openHistory(data) {
    data.isSelected = true;
    this.showHistoryDialog();
  }

  showHistoryDialog(): void {

    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(StandingChargeConsolidateHistoryComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          // dropDown: undefined,
          name: undefined,
          file: undefined,
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

  loadThirdLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 3).toString() + '-' + (Number(year[0]) - 2).toString();
  }

  loadSecondLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 2).toString() + '-' + (Number(year[0]) - 1).toString();
  }

  loadLastYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 1).toString() + '-' + (Number(year[0]) - 0).toString();
  }

  loadNextYear() {
    const year: any[] = this.headerJson[0].value.split('-');
    return (Number(year[0]) - 0).toString() + '-' + (Number(year[0]) + 1).toString();
  }

  loadCurrentYear() {
    return this.headerJson[0].value;
  }

  goToDashboard() {
  }

  saveEstimate() {
  }


  saveEstimate2() {
  }

  saveReceiptEstimate() { }

  calcThirdLastYearReceipt() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.thirdLastYearReceipt);
    });
    return sum != 0 ? sum : '';
  }

  calcThirdLastYearDisbursement() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.thirdLastYearDisbursement);
    });
    return sum != 0 ? sum : '';
  }

  calcSecondLastYearReceipt() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.secondLastYearReceipt);
    });
    return sum != 0 ? sum : '';
  }

  calcSecondLastYearDisbursement() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.secondLastYearDisbursement);
    });
    return sum != 0 ? sum : '';
  }

  calcLastYearReceipt() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.lastYearReceipt);
    });
    return sum != 0 ? sum : '';
  }

  calcLastYearDisbursement() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.lastYearDisbursement);
    });
    return sum != 0 ? sum : '';
  }

  calcBeDisbursement() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.beDisbursement);
    });
    return sum != 0 ? sum : '';
  }

  calcBeReceipt() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.beReceipt);
    });
    return sum != 0 ? sum : '';
  }

  calcHodAmountReceipt() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.hodAmountReceipt);
    });
    return sum != 0 ? sum : '';
  }

  calcHodAmountDisbursement() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.hodAmountDisbursement);
    });
    return sum != 0 ? sum : '';
  }

  calcProvisionRecipt() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.provisionRecipt);
    });
    return sum != 0 ? sum : '';
  }

  calcProvisionDisbursement() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
        sum =
        sum + Number(element.provisionDisbursement);
    });
    return sum != 0 ? sum : '';
  }
  // For Second Table
  calcThirdLastYearReceiptNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.thirdLastYearReceipt);
    });
    return sum !== 0 ? sum : '';
  }

  calcThirdLastYearDisbursementNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.thirdLastYearDisbursement);
    });
    return sum !== 0 ? sum : '';
  }

  calcSecondLastYearReceiptNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.secondLastYearReceipt);
    });
    return sum !== 0 ? sum : '';
  }

  calcSecondLastYearDisbursementNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.secondLastYearDisbursement);
    });
    return sum !== 0 ? sum : '';
  }

  calcLastYearReceiptNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.lastYearReceipt);
    });
    return sum !== 0 ? sum : '';
  }

  calcLastYearDisbursementNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.lastYearDisbursement);
    });
    return sum !== 0 ? sum : '';
  }

  calcBeDisbursementNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.beDisbursement);
    });
    return sum !== 0 ? sum : '';
  }

  calcBeReceiptNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.beReceipt);
    });
    return sum !== 0 ? sum : '';
  }

  calcHodAmountReceiptNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.hodAmountReceipt);
    });
    return sum !== 0 ? sum : '';
  }

  calcHodAmountDisbursementNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.hodAmountDisbursement);
    });
    return sum !== 0 ? sum : '';
  }

  calcProvisionReciptNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.provisionRecipt);
    });
    return sum !== 0 ? sum : '';
  }

  calcProvisionDisbursementNew() {
    let sum = 0;
    this.dataSource1.data.forEach((element, index) => {
        sum =
        sum + Number(element.provisionDisbursement);
    });
    return sum !== 0 ? sum : '';
  }

}
1