import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { MatSelect, MatAutocompleteSelectedEvent, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReceiptEstimate } from '../../../model/receipt-estimate';
import { StandingChargeForwardDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
import { SaveConfirmDialogComponent } from '../../save-confirm-dialog/save-confirm-dialog.component';
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';


export interface HeaderElement {
  label: string | '';
  value: string | '';
}

@Component({
  selector: 'app-receipt-estimates',
  templateUrl: './receipt-estimates.component.html',
  styleUrls: ['./receipt-estimates.component.css']
})
export class ReceiptEstimatesComponent implements OnInit {

  date: any = new Date();

  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
  ];

  removable = true;
  isTokentable = false;
  isnotTokentable = true;
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
    {
      majorHead: '2225', subMajorHead: '00', minorHead: '107', subHead: '01', detailHead: '00', objectHead: '00', thirdLastYearReceipt: '',
      secondLastYearReceipt: '', lastYearReceipt: '', thirdLastYearDisbursement: '', secondLastYearDisbursement: '',
      lastYearDisbursement: '', beReceipt: '', beDisbursement: '', hodAmountReceipt: '', hodAmountDisbursement: '',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
      submajortooltip: 'Secretariat-Economic Services',
      minortooltip: 'Secretariat',
      detailetooltip: 'AGR-15 Information & Technology',
      subtooltip: 'Agricultural and Co-operation Department', ActualsReceipt1: '', ActualsDisbursement1: '', provisionRecipt: '',
      provisionDisbursement: '', ActualsDisbursement3: '', ActualsReceipt3: '', actualsReceipt2: '', actualsDisbursement2: '',
    },
    {
      majorHead: '2225', subMajorHead: '00', minorHead: '107', subHead: '02', detailHead: '00', objectHead: '00', thirdLastYearReceipt: '',
      secondLastYearReceipt: '', lastYearReceipt: '', thirdLastYearDisbursement: '', secondLastYearDisbursement: '',
      lastYearDisbursement: '', beReceipt: '', beDisbursement: '', hodAmountReceipt: '', hodAmountDisbursement: '',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
      submajortooltip: 'Secretariat-Economic Services',
      minortooltip: 'Secretariat',
      detailetooltip: 'AGR-15 Information & Technology',
      subtooltip: 'Agricultural and Co-operation Department', ActualsReceipt1: '', ActualsDisbursement1: '', provisionRecipt: '',
      provisionDisbursement: '', ActualsDisbursement3: '', ActualsReceipt3: '', actualsReceipt2: '', actualsDisbursement2: '',
    },
    {
      majorHead: '2225', subMajorHead: '00', minorHead: '107', subHead: '03', detailHead: '00', objectHead: '00', thirdLastYearReceipt: '',
      secondLastYearReceipt: '', lastYearReceipt: '', thirdLastYearDisbursement: '', secondLastYearDisbursement: '',
      lastYearDisbursement: '', beReceipt: '', beDisbursement: '', hodAmountReceipt: '', hodAmountDisbursement: '',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
      submajortooltip: 'Secretariat-Economic Services',
      minortooltip: 'Secretariat',
      detailetooltip: 'AGR-15 Information & Technology',
      subtooltip: 'Agricultural and Co-operation Department', ActualsReceipt1: '', ActualsDisbursement1: '', provisionRecipt: '',
      provisionDisbursement: '', ActualsDisbursement3: '', ActualsReceipt3: '', actualsReceipt2: '', actualsDisbursement2: '',
    },
  ];

  dataSource = new MatTableDataSource(this.receiptEstimate);
  dataSource1 = new MatTableDataSource(this.receiptEstimate);

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



  revenueCapitalCtrl: FormControl = new FormControl();

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

  ngOnInit() {
    this.createForm();

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

}

@Component({
  selector: 'app-receipt-estimate-forward-dialog',
  templateUrl: 'receipt-estimate-forward-dialog.html',
  styleUrls: ['./receipt-estimates.component.css']
})
export class ReceiptEstimateDialogComponent implements OnInit {
  showAction: Boolean = true;

  fileBrowseIndex: number;
  date: any = new Date();
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = [
    'position',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'action'
  ];
  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Department', value: 'Education Department' },
    { label: 'Branch Name', value: 'Budget' },
    { label: 'Estimation From', value: 'Director of Horticulture' },
    { label: 'Major Head', value: '0020 : Corporation Tax' },
    { label: 'Sector', value: 'A - Tax Revenue' },
    { label: 'Sub Sector', value: 'Taxes on Income and Expenditure' }
  ];

  displayData = false;

  attachment = [
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
  ];
  sample = 'src/assets/img/pdf-test.pdf';
  fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
  show = false;
  page = 1;
  totalPages: number;
  isLoaded = false;
  sampleFlag: boolean;
  tabDisable: Boolean = true;
  selectedIndex: number;

  actionForm: FormGroup;
  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department'
  };

  forwardDialog_history_list: any[] = [
    {
      id: 3,
      userName: 'Shri P M Shah',
      designation: 'Deputy Secretaryr',
      role: 'Approver',
      date: '11/11/2019',
      comment: 'We may approve'
    },
    {
      id: 2,
      userName: 'Shri C Patel',
      designation: 'Section Officer',
      role: 'Verifier',
      date: '10/11/2019',
      comment: 'We may approve'
    },
    {
      id: 1,
      userName: 'Shri S M Modi',
      designation: 'Deputy Section Officer',
      role: 'Creator',
      date: '1/11/2019',
      comment:
        // tslint:disable-next-line: max-line-length
        'Please correct standing charge estimate for object head and correct all the calculations.Please verify last 3 year account as well as CSS grant received till date.Ask cooncerned officer from respective office to send necessay details at the earliest to department.'
    }
  ];

  action_list: any[] = [
    { value: '1', viewValue: 'Forward' }
  ];

  user_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala (DDO)' }
  ];

  attachmentType_list: any[] = [
    {value: '1', viewValue: 'Supporting Document'},
    {value: '2', viewValue: 'Sanction Order'},
    {value: '3', viewValue: 'Other'},
];
  branch_list: any[] = [
    { value: '1', viewValue: 'A Branch' },
    { value: '2', viewValue: 'CH Branch' },
    { value: '3', viewValue: 'CASH Branch' },
    { value: '4', viewValue: 'REGISTRY Branch' }
  ];
  branchCtrl: FormControl = new FormControl();
  filteredBranch: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  userCodeCtrl: FormControl = new FormControl();
  filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  private _onDestroy = new Subject<void>();

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StandingChargeForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private el: ElementRef
  ) { }

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    this.createForm();

    if (this.branch_list) {
      this.filteredBranch.next(this.branch_list.slice());
    }
    this.branchCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchCtrl.value,
          this.filteredBranch
        );
      });

    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.action_list,
          this.actionCtrl.value,
          this.filteredAction
        );
      });

    if (this.user_list) {
      this.filteredUserCode.next(this.user_list.slice());
    }
    this.userCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.user_list,
          this.userCodeCtrl.value,
          this.filteredUserCode
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
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.actionForm.patchValue({
      actionCode: '1',
      userCode: '1'
    });
  }

  backToAction() {
    this.showAction = true;
    this.show = false;

  }

  gotoListing() {
    this.router.navigate(['./budget/standing-charge-list']);
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
  uploadAttachment() {
    this.tabDisable = false;
    this.selectedIndex = 2;
  }
  createForm() {
    this.actionForm = this.fb.group({
      actionCode: ['', Validators.required],
      userCode: ['', Validators.required],
      branch: ['']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  nextPage() {
    this.page += 1;
    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
  }

  previousPage() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
    }
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
  }



  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName == data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
        }
      } else if (data.fileType === 'pdf') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
        // this.attachment[i].imgStatus? false : '';
        // this.attachment[i].pdfStatus? false : '';
      }
      if (this.show === false) {
        this.showAction = true;
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
    console.log(data);
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

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
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
}

@Component({
  selector: 'app-receipt-estimate-confirm-dialog',
  templateUrl: './receipt-estimate-confirm-dialog.html',
  styleUrls: ['./receipt-estimates.component.css']
})
export class ReceiptEstimateConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReceiptEstimateConfirmDialogComponent>
  ) { }

  ngOnInit() { }

  onCancel(): void {
    this.dialogRef.close('no');
  }

  onSave(): void {
    this.dialogRef.close('save');
  }
}

@Component({
  selector: 'app-receipt-estimate-view-comments-dialog',
  templateUrl: 'receipt-estimate-view-comments-dialog.html',
  styleUrls: ['./receipt-estimates.component.css']
})
export class ReceiptEstimateViewCommentsComponent implements OnInit {
  // showAction: Boolean = true;

  fileBrowseIndex: number;
  date: any = new Date();
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'action'
  ];
  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Department', value: 'Education Department' },
    { label: 'Branch Name', value: 'Budget' },
    { label: 'Estimation From', value: 'Director of Horticulture' },
    { label: 'Major Head', value: '0020 : Corporation Tax' },
    { label: 'Sector', value: 'A - Tax Revenue' },
    { label: 'Sub Sector', value: 'Taxes on Income and Expenditure'},
    { label: 'Major Head Receipt Amount', value: '5000'},
    { label: 'Major Head Disbursement Amount', value: '1000'},
  ];

  displayData = false;

  attachment = [
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
  ];
  sample = 'src/assets/img/pdf-test.pdf';
  fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
  show = true;
  page = 1;
  totalPages: number;
  isLoaded = false;
  sampleFlag: boolean;



  actionForm: FormGroup;

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department'
  };

  master_checked = false;
  master_indeterminate = false;

  forwardDialog_history_list: any[] = [
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 1,
      userName: 'Shri P M Shah',
      designation: 'Deputy Secretary',
      role: 'Approver',
      date: '11/11/2019',
      comment: 'We may approve'
    },
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 2,
      userName: 'Shri C Patel',
      designation: 'Section Officer',
      role: 'Verifier',
      date: '10/11/2019',
      comment: 'We may approve'
    },
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 3,
      userName: 'Shri S M Modi',
      designation: 'Deputy Section Officer',
      role: 'Creator',
      date: '1/11/2019',
      comment:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  action_list: any[] = [
    { value: '1', viewValue: 'Forward' }
  ];

  user_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala (DDO)' }
  ];

  attachmentType_list: any[] = [{ value: '1', viewValue: 'WorkFlow' }];
  branch_list: any[] = [
    { value: '1', viewValue: 'A Branch' },
    { value: '2', viewValue: 'CH Branch' },
    { value: '3', viewValue: 'CASH Branch' },
    { value: '4', viewValue: 'REGISTRY Branch' }
  ];

  branchPopupCtrl: FormControl = new FormControl();
  branchPopupType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  userCodeCtrl: FormControl = new FormControl();
  filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  private _onDestroy = new Subject<void>();

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ReceiptEstimateViewCommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private el: ElementRef
  ) { }

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    this.createForm();

    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.action_list,
          this.actionCtrl.value,
          this.filteredAction
        );
      });
    if (this.user_list) {
      this.filteredUserCode.next(this.user_list.slice());
    }
    this.branchPopupCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchPopupCtrl.value,
          this.branchPopupType
        );
      });

    this.userCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.user_list,
          this.userCodeCtrl.value,
          this.filteredUserCode
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
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.actionForm.patchValue({
      actionCode: '1',
      userCode: '1'
    });
  }

  gotoListing() {
    this.router.navigate(['./budget/standing-charge-list']);
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
    this.actionForm = this.fb.group({
      actionCode: ['', Validators.required],
      userCode: ['', Validators.required],
      branchPopupCode: ['']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  nextPage() {
    this.page += 1;
    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
  }

  previousPage() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
    }
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
  }

  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if (this.attachment[i].fileName == data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
        }
      } else if (data.fileType === 'pdf') {
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
        // this.attachment[i].imgStatus? false : '';
        // this.attachment[i].pdfStatus? false : '';
      }
      if (this.show === false) {
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
    console.log(data);
    // return data;
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

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
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

  master_change() {
    for (let value of Object.values(this.forwardDialog_history_list)) {
      value.checked = this.master_checked;
    }
  }

  list_change() {
    let checked_count = 0;
    for (let value of Object.values(this.forwardDialog_history_list)) {
      if (value.checked) { checked_count++; }
    }

    if (
      checked_count > 0 &&
      checked_count < this.forwardDialog_history_list.length
    ) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    } else if (checked_count == this.forwardDialog_history_list.length) {
      // tslint:disable-next-line: comment-format
      //If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    } else {
      // tslint:disable-next-line: comment-format
      //If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }
}
