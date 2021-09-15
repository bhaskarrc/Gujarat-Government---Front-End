
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { MatSelect, MatAutocompleteSelectedEvent, MatTableDataSource } from '@angular/material';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


export interface HeaderElement {
  label: string | '';
  value: string | '';
}

@Component({
  selector: 'app-receipt-estimate-consolidate',
  templateUrl: './receipt-estimate-consolidate.component.html',
  styleUrls: ['./receipt-estimate-consolidate.component.css']
})
export class ReceiptEstimateConsolidateComponent implements OnInit {

  date: any = new Date();

  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
  ];

  removable = true;

  codeCtrl = new FormControl();
  filteredCodes: Observable<string[]>;
  codes: string[] = [];
  expendCharges: boolean;
  doneHeader: Boolean = false;
  selectedIndex: number;
  // allMainCodes: string[] = ['3131', '3132', '3133', '3135-13', '3135-14', '3135-15',
  //   '3135-16', '3241', '3243', '3351', '3153', '3161', '3363'];
  @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;


  receiptEstimate: any[] = [
    {
      majorHead: '2225', subMajorHead: '2', minorHead: '277', subHead: '30', detailHead: '0', ddoNo: '21', thirdLastYearReceipt: '200',
      secondLastYearReceipt: '123', lastYearReceipt: '322', thirdLastYearDisbursement: '213', secondLastYearDisbursement: '121',
      lastYearDisbursement: '4121', beReceipt: '122', beDisbursement: '182', hodAmountReceipt: '195', hodAmountDisbursement: '180', hodAmountReceipt1: '190', hodAmountDisbursement2: '200',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
    },
    {
      majorHead: '2225', subMajorHead: '6', minorHead: '101', subHead: '6', detailHead: '0', ddoNo: '21', thirdLastYearReceipt: '200',
      secondLastYearReceipt: '122', lastYearReceipt: '232', thirdLastYearDisbursement: '124', secondLastYearDisbursement: '152',
      lastYearDisbursement: '232', beReceipt: '312', beDisbursement: '182', hodAmountReceipt: '195', hodAmountDisbursement: '180', hodAmountReceipt1: '190', hodAmountDisbursement2: '200',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
    },
    {
      majorHead: '2225', subMajorHead: '3', minorHead: '102', subHead: '1', detailHead: '0', ddoNo: '21', thirdLastYearReceipt: '1334',
      secondLastYearReceipt: '321', lastYearReceipt: '1212', thirdLastYearDisbursement: '2432', secondLastYearDisbursement: '123',
      lastYearDisbursement: '322', beReceipt: '121', beDisbursement: '182', hodAmountReceipt: '195', hodAmountDisbursement: '180', hodAmountReceipt1: '190', hodAmountDisbursement2: '200',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
    },
    {
      majorHead: '2225', subMajorHead: '3', minorHead: '796', subHead: '11', detailHead: '0', ddoNo: '21', thirdLastYearReceipt: '5433',
      secondLastYearReceipt: '3131', lastYearReceipt: '1234', thirdLastYearDisbursement: '4321', secondLastYearDisbursement: '1522',
      lastYearDisbursement: '2312', beReceipt: '123', beDisbursement: '182', hodAmountReceipt: '195', hodAmountDisbursement: '180', hodAmountReceipt1: '190', hodAmountDisbursement2: '200',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
    },
    {
      majorHead: '2225', subMajorHead: '1', minorHead: '106', subHead: '2', detailHead: '1', ddoNo: '21', thirdLastYearReceipt: '5232',
      secondLastYearReceipt: '123', lastYearReceipt: '2313', thirdLastYearDisbursement: '4342', secondLastYearDisbursement: '1233',
      lastYearDisbursement: '4322', beReceipt: '125', beDisbursement: '182', hodAmountReceipt: '195', hodAmountDisbursement: '180', hodAmountReceipt1: '190', hodAmountDisbursement2: '200',
      remarks: '', deductRefundMapping: '',
      majorHeadInfo: 'Welfare of Schedule Casts, Schedule Tribes , other Backward Classes and Minorities',
    },
  ];

  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource(this.receiptEstimate);

  // tslint:disable-next-line: max-line-length
  displayedColumns = ['subMajorHead', 'minorHead', 'subHead', 'detailHead', 'ddoNo', 'thirdLastYearReceipt', 'secondLastYearReceipt', 'lastYearReceipt',
    // tslint:disable-next-line: max-line-length
    'thirdLastYearDisbursement', 'secondLastYearDisbursement', 'lastYearDisbursement', 'beReceipt', 'beDisbursement', 'hodAmountReceipt', 'hodAmountDisbursement', 'hodAmountReceipt1', 'hodAmountDisbursement2', 'provisionRecipt', 'provisionDisbursement', 'remarks'];

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
    { value: '1', viewValue: 'DDO' },
    { value: '2', viewValue: 'HOD' },
    { value: '3', viewValue: 'Department' },
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
  ];

  attachmentType_list: any[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
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
  displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];
  // tslint:disable-next-line:member-ordering
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  // tslint:disable-next-line:member-ordering
  fileBrowseIndex: number;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private el: ElementRef
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
    // this.createReceiptEstimateForm.controls.finYear.patchValue('2020-2021');
    // this.createReceiptEstimateForm.controls.estimationFrom.patchValue('DDO');
    // this.createReceiptEstimateForm.controls.estimateBy.patchValue('Shri Arun Mahesh Babu MS');
    // debugger
    this.createReceiptEstimateForm.patchValue({
      'finYear': '1',
      'estimationFrom': '1',
      'estimateBy': '1'
    });
  }

  // calculateReceiptValue() {
  //   this.dataSource.data.forEach((element, index) => {
  //     element.val4 = (Number(element.val2) + Number(element.val3)).toFixed(2);
  //   });
  // }

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


  // addReceipt() {
  //   if (this.dataSource) {
  //     this.dataSource.data.forEach((element, index) => {
  //       if ((this.dataSource.data.length === (index + 1)) && element && element.majorHead &&
  //       element.subMajorHead && element.minorHead && element.subHead && element.detailHead && element.thirdLastYearReceipt
  //       && element.secondLastYearReceipt && element.lastYearReceipt && element.thirdLastYearDisbursement &&
  //       element.secondLastYearDisbursement && element.lastYearDisbursement && element.beReceipt && element.beDisbursement &&
  //       element.hodAmountReceipt && element.hodAmountDisbursement && element.remarks && element.deductRefundMapping) {
  //          const p_data = this.dataSource.data;
  //          // tslint:disable-next-line: max-line-length
  //          p_data.push({ majorHead: '', subMajorHead: '', minorHead: '',
  //          subHead: '', detailHead: '', thirdLastYearReceipt: '', secondLastYearReceipt: '',
  //          lastYearReceipt: '', thirdLastYearDisbursement: '', secondLastYearDisbursement: '',
  //          lastYearDisbursement: '', beReceipt: '', beDisbursement: '', hodAmountReceipt: '',
  //          hodAmountDisbursement: '', remarks: '', deductRefundMapping: ''});
  //          this.dataSource.data = p_data;
  //       } else if (this.dataSource.data.length === (index + 1)) {
  //         this.toastr.error('Please fill the detail.');
  //       }
  //     });
  //   }
  // }

  // deleteReceipt(index) {
  //   this.dataSource.data.splice(index, 1);
  //   this.dataSource = new MatTableDataSource(this.dataSource.data);
  // }

  createForm() {
    this.createReceiptEstimateForm = this.fb.group({
      finYear: ['', Validators.required],
      departmentCode: ['', Validators.required],
      branchCode: ['', Validators.required],
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
    this.tabDisable = false;
    this.selectedIndex = 1;
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

}
