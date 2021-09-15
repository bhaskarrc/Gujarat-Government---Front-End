import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { WorkInProgress } from '../../../model/work-in-progress';
import { BudgetFormType, WorkSelectionTab2, WorkSelectionTab1, WorkSelectionTabMain } from 'src/app/model/budget';
import { MatFormFieldControl } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { StandingChargeForwardDialogComponent, StadingChargeConfirmDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
// tslint:disable-next-line: max-line-length
import { ConfirmDialogModel, StandingChargeConsolidateHistoryComponent } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { CommonListingClass } from 'src/app/model/common-listing';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-work-in-progress',
  templateUrl: './wip-create-estimate.component.html',
  styleUrls: ['./wip-create-estimate.component.css'],
  animations: [
    trigger('expandRow', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ]
})
export class WIPCreateEstimateComponent implements OnInit, OnDestroy {
  // WorkSelection table data
  Element_Data1: WorkSelectionTab1[] = [
    {
      workDetails: 'Amount of Sanction Estimates',
      amount: '0',
    },
  ];
  Element_Data: WorkSelectionTab2[] = [

    {
      workDetails: 'Last Year Actual Expenditure 2017-2018',
      state: '',
      css: '',
      total: ''
    },
    {
      workDetails: 'Total Progressive Expenditure Upto The End Of The Last Year 2017-2018	',
      state: '',
      css: '',
      total: ''
    },
    {
      workDetails: 'Budget Provision For The Current Year 2018-2019	',
      state: '',
      css: '',
      total: ''
    },
    {
      workDetails: 'Actual For The First Four Months Of The Current Year 2018-2019	',
      state: '',
      css: '',
      total: ''
    },
    {
      workDetails: 'Probably Expenditure For The Last Eight Months Of The Current Year 2018-2019	',
      state: '',
      css: '',
      total: ''
    },
    {
      workDetails: 'Total Probable Expenditure For The Current Year 2018-2019	',
      state: '',
      css: '',
      total: ''
    },
    {
      workDetails: 'Ratio',
      state: '',
      css: '',
      total: ''
    },
    {
      workDetails: 'Provision Proposed For 2019-2020	',
      state: '',
      css: '',
      total: ''
    },
  ];
  displayedColumnsExecel: any[] = [
    { value: 'srNo', viewValue: 'Sr No.', class: 'centerAlign' },
    { value: 'districtName', value2: 'itemNo', viewValue: 'District Name', viewValue2: 'Item No.', class: 'leftAlign' },
    { value: 'workDescriptionEng', viewValue: 'Work Description (Eng)', class: 'leftAlign' },
    { value: 'provisionProposed', viewValue: 'Provision Proposed For 2019-2020', class: 'leftAlign' },
    { value: 'state', viewValue: 'State (60%)', class: 'rightAlign' },
    { value: 'css', viewValue: 'CSS (40%)', class: 'rightAlign' },
    { value: 'status', viewValue: 'Status', class: 'leftAlign' },
    { value: 'action', viewValue: 'Action', class: 'leftAlign' },
  ];

  ELEMENT_EXE_DATA: WorkSelectionTabMain[] = [
    {
      srNo: '1',
      districtName: 'Ahmedbad',
      itemNo: '1234',
      workDescriptionEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      state: '75',
      css: '25',
      status: 'Saved',
    },
    {
      srNo: '2',
      districtName: 'Ahmedbad',
      itemNo: '1234',
      workDescriptionEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      state: '75',
      css: '25',
      status: 'Saved',
    },
    {
      srNo: '3',
      districtName: 'Ahmedbad',
      itemNo: '1234',
      workDescriptionEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      state: '75',
      css: '25',
      status: 'Saved',
    },
    {
      srNo: '4',
      districtName: 'Ahmedbad',
      itemNo: '1234',
      workDescriptionEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      state: '75',
      css: '25',
      status: 'Saved',
    },
    {
      srNo: '5',
      districtName: 'Ahmedbad',
      itemNo: '1234',
      workDescriptionEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      state: '75',
      css: '25',
      status: 'Saved',
    },
    {
      srNo: '6',
      districtName: 'Ahmedbad',
      itemNo: '1234',
      workDescriptionEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      state: '75',
      css: '25',
      status: 'Saved',
    },
    {
      srNo: '7',
      districtName: 'Ahmedbad',
      itemNo: '1234',
      workDescriptionEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
      state: '75',
      css: '25',
      status: 'Saved',
    },
  ];
  selectedIndex: any;
  date: any = new Date();
  CSSPartDiv = true;
  wipDataSource: WorkInProgress[] = [this.createWIPData()];
  wipDataSource1: WorkInProgress[] = [this.createWIPData1()];
  dataSourceWorkInProgress = new MatTableDataSource(this.wipDataSource);
  dataSourceWorkInProgress1 = new MatTableDataSource(this.wipDataSource1);
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  dataSource1 = new MatTableDataSource<any>(this.Element_Data1);
  exeDataSource = new MatTableDataSource<any>(this.ELEMENT_EXE_DATA);
  // Expansion Section Table
  displayedColumns: any[] = ['workDetails', 'state', 'css', 'total'];
// Detail Tab Tables
  displayedAttachmentColumns: string[] = [
    'districtId', 'districtName', 'workNo', 'workName',
    'val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'val7', 'total', 'action'
  ];
// Work Selection Tab Tables
  displayedColumnsHeaders: string[] = [
    'srNo', 'districtName', 'workDescriptionEng', 'provisionProposed', 'status', 'action'
  ];
  displayedColumnsHeaders1: string[] = ['state', 'css'];
  displayedColumnsHeadersVal: string[] = [
    'srNo', 'districtName', 'workDescriptionEng', 'state', 'css', 'status', 'action'
  ];

  selectedindex: Number;
  EstimateForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();
  detailHeadCodeCtrl: FormControl = new FormControl();
  proposalCategoryCtrl: FormControl = new FormControl();
  majorCategoryCtrl: FormControl = new FormControl();
  proposalTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  objectHeadCtrl: FormControl = new FormControl();
  itemNameCtrl: FormControl = new FormControl();
  establishmentCtrl: FormControl = new FormControl();
  expenditureTypeCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  chargedVotedCtrl: FormControl = new FormControl();
  ministerInChargeCtrl: FormControl = new FormControl();
  workInProgressForm = new FormGroup({
    department: new FormControl('3', Validators.required),
    financialYear: new FormControl('2019-2020'),
    branchName: new FormControl(''),
    demand: new FormControl(''),
    bpnCode: new FormControl(''),
    estimationFor: new FormControl(''),
    estimationFrom: new FormControl('1'),
    majorHead: new FormControl(''),
    subMajorHead: new FormControl(''),
    minorHead: new FormControl(''),
    subHead: new FormControl(''),
    objectHead: new FormControl(''),
    detailedHead: new FormControl(''),
    chargedVoted: new FormControl('2'),
    css: new FormControl('1'),
    CSSPer: new FormControl(''),
    formType: new FormControl('Form I')
  });

  uploadExcelForm = new FormGroup({
    subject: new FormControl('', Validators.required),
    originalFile: new FormControl(''),
    originalRemarks: new FormControl('')
  });
// Header Section Details
  financialYear_list: BudgetFormType[] = [
    { value: '1', viewValue: '2018-2019' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2020-2021' },
  ];
  department_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Education Department' }
  ];
  demand_list: BudgetFormType[] = [
    { value: '1', viewValue: '9' },
    { value: '2', viewValue: '10' },
    { value: '3', viewValue: '11' },
    { value: '4', viewValue: '12' },
  ];
  majorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '2049' },
    { value: '2', viewValue: '2051' },
    { value: '3', viewValue: '3049' },
    { value: '4', viewValue: '3051' }
  ];
  subMajorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  minorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  subHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '60' },
    { value: '2', viewValue: '01' },
    { value: '3', viewValue: '02' },
  ];
  detailHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '00' },
    { value: '2', viewValue: '01' }
  ];
  proposalType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Continuous' }
  ];
  proposalCategory_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Vehicle' },
    { value: '2', viewValue: 'Post' },
    { value: '3', viewValue: 'Construction' },
    { value: '4', viewValue: 'Furniture' },
    { value: '5', viewValue: 'Other' },
  ];
  schemeType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'CSS' }
  ];
  objectHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '0010' },
    { value: '2', viewValue: '0011' },
    { value: '3', viewValue: '0012' },
    { value: '4', viewValue: '0013' },
    { value: '5', viewValue: '5400' },
    { value: '6', viewValue: '3131' }
  ];
  majorCategory_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Specific' },
    { value: '2', viewValue: 'Regular' }
  ];
  revenueCapital_list: BudgetFormType[] = [
    { value: '1', viewValue: ' Revenue ' },
    { value: '2', viewValue: 'Capital' }
  ];
  chargedVoted_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted' }
  ];

  attachment_type: any[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Other' },
  ];

  departmentCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  estimationCtrl: FormControl = new FormControl();
  estimationFromCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHearCtrl: FormControl = new FormControl();
  detailedHeadCtrl: FormControl = new FormControl();
  bpnCodeCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  SchemeTypeCodeCtrl: FormControl = new FormControl();
  ChargedVotedCodeCtrl: FormControl = new FormControl();
  attachmentTypeCtrl: FormControl = new FormControl();

  private _onDestroy = new Subject<void>();

  browseData: any[] = [{
    dropDown: undefined,
    name: undefined,
    file: undefined,
  }];
  // Attachment Table
  displayedBrowseColumns = ['position', 'dropdown', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.browseData);
  fileBrowseIndex: number;

  constructor(
    private fb: FormBuilder,
    private el: ElementRef, private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService) {

  }
  subscribeParams: Subscription;
  public index;
  public scheme;
  showState = true;
  showCSS = true;
  ngOnInit() {
    this.createForm();
    this.subscribeParams = this.activatedRoute.params.subscribe(resRoute => {
      const temp = resRoute.id.split('-');
      this.scheme = temp[0];
      this.selectedindex = Number(temp[1]);

    });
    if (this.scheme === '1') {
      this.showState = true;
      this.showCSS = false;

    } else if (this.scheme === '2') {
      this.showState = false;
      this.showCSS = true;
    }
  }
  createForm() {
    this.EstimateForm = this.fb.group({
      formType: ['1', Validators.required],
      finYear: ['1', Validators.required],
      departmentCode: ['1', Validators.required],
      branchCode: ['1', Validators.required],
      estimationFrom: ['1', Validators.required],
      estimationFor: ['1', Validators.required],
      demandCode: ['1', Validators.required],
      ministerInCharge: ['1', Validators.required],
      bpnCode: ['1', Validators.required],
      majorHeadCode: ['1', Validators.required],
      subMajorHeadCode: ['1', Validators.required],
      minorHeadCode: ['1', Validators.required],
      subHeadCode: ['1', Validators.required],
      detailHeadCode: ['1', Validators.required],
      chargedVoted: ['2', Validators.required],
      schemeType: ['2', Validators.required],
      cssPercentage: ['1', [Validators.min(0), Validators.max(100)]],
      itemCategory: ['1', Validators.required],
      itemName: ['1', [Validators.required]],
      writeUpEng: ['1', [Validators.required]],
      writeUpGuj: ['1', [Validators.required]],
      financialYear: ['3'],
      proposalCategory: ['3'],
      majorCategory: ['1'],
      proposalType: ['2'],
      objectHead: ['1'],
      itemWorkName: [''],
      writeUpEnglish: [''],
      writeUpGujrati: [''],
      establishment: ['1'],
      expenditureType: ['1'],
      itemNames: [''],
      revenueCapital: ['1'],
      schemeTypeRatio: ['1'],
      noOfMonths: [{ value: 13 - new Date().getMonth().valueOf(), disabled: true }],
    });
    this.EstimateForm.disable();
  }

  ngOnDestroy() {
  }

  gotoListing() {
    this.router.navigate(['./budget/budget-list']);
  }

  goBack() { this.router.navigate(['./budget/budget']); }


  saveEstimate() { }
  showSchemeRatio() { }
  // Attachments Section Functions
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.dropDown && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          dropDown: undefined,
          name: undefined,
          file: undefined,
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }

  deleteBrowse(index): void {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  // Detail Tab Table add Record
  addRecord(): void {
    const p_data = this.dataSourceWorkInProgress.data;
    p_data.push(this.createWIPData());
    this.dataSourceWorkInProgress.data = p_data;
  }

  // Detail Tab Table Delete Record
  deleteRecord(index): void {
    this.dataSourceWorkInProgress.data.splice(index, 1);
    this.dataSourceWorkInProgress = new MatTableDataSource(this.dataSourceWorkInProgress.data);
  }

// WIP Darasource creation functions
  createWIPData() {
    return {
      districtId: 1,
      districtName: 'Ahmedabad',
      workId: 123,
      workNo: 123,
      workName: 'Test',
      val1: 0.00,
      val2: 0.00,
      val3: 0.00,
      val4: 0.00,
      val5: 0.00,
      val6: 0.00,
      val7: 0.00,
      total: 0.00,
      remarks: '',
      css: ''
    };
  }
  createWIPData1() {
    return {
      districtId: 1,
      districtName: 'Ahmedabad',
      workId: 123,
      workNo: 123,
      workName: 'Test',
      val1: 0.00,
      val2: 0.00,
      val3: 0.00,
      val4: 0.00,
      val5: 0.00,
      val6: 0.00,
      val7: 0.00,
      total: 0.00,
      remarks: '',
      css: ''
    };
  }
  // History Popup
  openHistory(data) {
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

  // Integer KeyPress Function
  integerKeyPressValue(event: any) {
    const pattern = /^\d{0,1}?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
    if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
      return true;
    }
    if (event.target.value.length > 2) {
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
  // Decimal Point Function for 2 decimal
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
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
// Convert Number to 2 decimal
  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }

// Work Selection tab Table Functions
  getTotal(data) {

    data['total'] = Number(data['state']) + Number(data['css']);
    const tot = Number(data['total']);
    return tot;
  }

  totalCss(): number {
    let css = 0;
    this.dataSource.data.forEach((element) => {
      css = css + Number(element.css);
    });
    // css=Number(css).toFixed(2);
    return css;
  }

  totalState(): number {
    let state = 0;
    this.dataSource.data.forEach((element) => {
      state = state + Number(element.state);
    });
    // css=Number(css).toFixed(2);
    return state;
  }
  totalAll(): number {
    let total = 0;
    this.dataSource.data.forEach((element) => {
      total = total + Number(element.total);
    });
    // css=Number(css).toFixed(2);
    return total;
  }

// Addition Functions for State Tab in Details Tab
  calcAmtSanc() {
    let calcAmtSanc = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
      calcAmtSanc = calcAmtSanc + Number(element.val1);
    });

    return calcAmtSanc != 0 ? calcAmtSanc : '';
  }
  calcActExpen() {
    let calcActExpen = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
      calcActExpen = calcActExpen + Number(element.val2);
    });

    return calcActExpen != 0 ? calcActExpen : '';
  }
  calcTotProg() {
    let calcTotProg = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
      calcTotProg = calcTotProg + Number(element.val3);
    });

    return calcTotProg != 0 ? calcTotProg : '';
  }
  calcBudEst() {
    let calcBudEst = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
      calcBudEst = calcBudEst + Number(element.val4);
    });

    return calcBudEst != 0 ? calcBudEst : '';
  }
  calcActFourMon() {
    let calcActFourMon = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
      calcActFourMon = calcActFourMon + Number(element.val5);
    });

    return calcActFourMon != 0 ? calcActFourMon : '';
  }
  calcExpEightMonth() {
    let calcExpEightMonth = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
      calcExpEightMonth = calcExpEightMonth + Number(element.val6);
    });

    return calcExpEightMonth != 0 ? calcExpEightMonth : '';
  }
  calcTotFourEight() {
    let calcTotFourEight = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
      calcTotFourEight = calcTotFourEight + Number(element.val5) + Number(element.val6);
    });

    return calcTotFourEight != 0 ? calcTotFourEight : '';
  }
  calcTotal() {
    let calcTotal = 0;
    this.dataSourceWorkInProgress.data.forEach((element, index) => {
      calcTotal = calcTotal + Number(element.total);
    });

    return calcTotal != 0 ? calcTotal : '';
  }
  // Addition Functions for CSS Tab in Details Tab
  calcAmtSancCss() {
    let calcAmtSanc = 0;
    this.dataSourceWorkInProgress1.data.forEach((element, index) => {
      calcAmtSanc = calcAmtSanc + Number(element.val1);
    });

    return calcAmtSanc != 0 ? calcAmtSanc : '';
  }
  calcActExpenCss() {
    let calcActExpen = 0;
    this.dataSourceWorkInProgress1.data.forEach((element, index) => {
      calcActExpen = calcActExpen + Number(element.val2);
    });

    return calcActExpen != 0 ? calcActExpen : '';
  }
  calcTotProgCss() {
    let calcTotProg = 0;
    this.dataSourceWorkInProgress1.data.forEach((element, index) => {
      calcTotProg = calcTotProg + Number(element.val3);
    });

    return calcTotProg != 0 ? calcTotProg : '';
  }
  calcBudEstCss() {
    let calcBudEst = 0;
    this.dataSourceWorkInProgress1.data.forEach((element, index) => {
      calcBudEst = calcBudEst + Number(element.val4);
    });

    return calcBudEst != 0 ? calcBudEst : '';
  }
  calcActFourMonCss() {
    let calcActFourMon = 0;
    this.dataSourceWorkInProgress1.data.forEach((element, index) => {
      calcActFourMon = calcActFourMon + Number(element.val5);
    });

    return calcActFourMon != 0 ? calcActFourMon : '';
  }
  calcExpEightMonthCss() {
    let calcExpEightMonth = 0;
    this.dataSourceWorkInProgress1.data.forEach((element, index) => {
      calcExpEightMonth = calcExpEightMonth + Number(element.val6);
    });

    return calcExpEightMonth != 0 ? calcExpEightMonth : '';
  }
  calcTotFourEightCss() {
    let calcTotFourEight = 0;
    this.dataSourceWorkInProgress1.data.forEach((element, index) => {
      calcTotFourEight = calcTotFourEight + Number(element.val5) + Number(element.val6);
    });

    return calcTotFourEight != 0 ? calcTotFourEight : '';
  }
  calcTotalCss() {
    let calcTotal = 0;
    this.dataSourceWorkInProgress1.data.forEach((element, index) => {
      calcTotal = calcTotal + Number(element.total);
    });

    return calcTotal != 0 ? calcTotal : '';
  }

  // Common workflow model
  submitToNextLevel(): void {
    const dialogRef = this.dialog.open(StandingChargeForwardDialogComponent, {
      width: '2700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
      } else if (result === 'yes') {
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
      } else if (result === 'save') {
      }
    });
  }

}
