import { Router } from '@angular/router';
import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReceiptEstimateList } from 'src/app/model/receipt-estimate-list';
import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from '../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { ReceiptEstimateViewCommentsComponent, ReceiptEstimateConfirmDialogComponent } from '../receipt-estimate/receipt-estimates/receipt-estimates.component';
import { ToastrService } from 'ngx-toastr';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';


@Component({
  selector: 'app-receipt-consolidate-list',
  templateUrl: './receipt-consolidate-list.component.html',
  styleUrls: ['./receipt-consolidate-list.component.css']
})
export class ReceiptConsolidateListComponent implements OnInit {

  ELEMENT_DATA: any[] = [


    {
      fianicial: '2019-2020',
      majorHead: '0005',
      majorHeadToolTip: '0005:Central Goods and Services Tax',
      hod: 'Director of Agriculture',
      noDDOs: '4',
      receipt: 100.65,
      disbursement: 110.1,
      refNo: '19-20/BUD/SCE/001',
      refDate: '14-Dec-2020',
      status: '-',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Draft By Rajesh 10-Feb-2020 10:30',
      ddo: '110.00',
      cohod: '100.00',
      ad: '80.00',
      fd: '70.00'

    },
    {
      fianicial: '2020-2021',
      majorHead: '0006',
      majorHeadToolTip: '0006:State Goods and Services Tax(SGST) ',
      hod: 'Director of Horticulture',
      noDDOs: '4',
      receipt: 100.65,
      disbursement: 110.1,
      refNo: '19-20/BUD/SCE/001',
      refDate: '14-Dec-2020',
      status: 'Draft',
      lyingWith: 'MR. Rajput',
      receivedOnFrom: 'Rajesh 10-Feb-2020 10:30',
      sentToOn: 'Rajesh 10-Feb-2020 10:30',
      tooltip: 'Draft By Rajesh 10-Feb-2020 10:30',
      ddo: '110.00',
      cohod: '100.00',
      ad: '80.00',
      fd: '70.00'

    },

  ];
  dataSource = new MatTableDataSource<ReceiptEstimateList>(this.ELEMENT_DATA);
  displayedColumns: string[] = [
    'position',
    'fianicial',
    'majorHead',
    'noDDOs',
    'dddo',
    'dcohod',
    'ddo',
    'cohod',
    'ad',
    'fd',
    // 'refNo',
    'receivedOnFrom',
    'sentToOn',
    'lyingWith',
    'status',
    'action'
  ];

  searchListForm: FormGroup;

  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2020-2021' }
  ];
  statuslist: any[] = [
    { value: '1', viewValue: 'Approved' },
    { value: '2', viewValue: 'Rejected' },
    { value: '3', viewValue: 'Cancelled' }
  ];
  reveList: any[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
  ];
  receivelist: any[] = [
    { value: '1', viewValue: 'Received From' },
    { value: '2', viewValue: 'Received SentTo' },
  ];

  department_list: any[] = [
    { value: '1', viewValue: 'Home Department' },
    {
      value: '2',
      viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'
    },
    { value: '3', viewValue: 'Health and Family Welfare Department' }
  ];

  branch_list: any[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Budget' }
  ];

  estimation_list: any[] = [
    { value: '1', viewValue: 'Director of Horticulture' },
    { value: '2', viewValue: 'Director of Animal Husbandry' },
    { value: '3', viewValue: 'Commission of Geology and Mining' }
  ];

  estimation_by_list: any[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' }
  ];

  filteredMajorlist: any[] = [
    { value: '1', viewValue: '0005:Central Goods and Services Tax' },
    {
      value: '2',
      viewValue: '0006:State Goods and Services Tax(SGST)'
    },
    { value: '3', viewValue: '0008:Integrated Goods and Service Tax(IGST)' },
    { value: '4', viewValue: '0020:Corporation Tax' },
    { value: '5', viewValue: '0021:Taxes on Income other than Corporation Tax' }
  ];

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
  // filteredMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  _onDestroy = new Subject<void>();

  isToken: Boolean = false;
  isTokentable: Boolean = false;
  rangeTypeValue = 'Approved';
  receiveValue = 'Received From';
  errorMessages = budgetMessage;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();

    if (this.finYear_list) {
      this.filteredFinYear.next(this.finYear_list.slice());
    }
    this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.finYear_list,
          this.finYearCtrl.value,
          this.filteredFinYear
        );
      });
    if (this.department_list) {
      this.filteredDepartmentCode.next(this.department_list.slice());
    }
    this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.department_list,
          this.departmentCodeCtrl.value,
          this.filteredDepartmentCode
        );
      });
    if (this.branch_list) {
      this.filteredBranchCode.next(this.branch_list.slice());
    }
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
    // this.filteredMajorHeadCode.next(this.majorHead_list.slice());
    // (this.majorHeadCodeCtrl.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterObjValue(this.majorHead_list, this.majorHeadCodeCtrl.value, this.filteredMajorHeadCode);
    //   }));
  }
  ontoken(index) {
    console.log(index.value);
    this.isTokentable = true;
    for (const item of this.statuslist) {
      if (item.value === index.value) {
        this.rangeTypeValue = item.viewValue;
      }
    }
  }
  onrecevietoken(index) {
    this.isToken = true;
    for (const item of this.receivelist) {
      if (item.value === index.value) {
        this.receiveValue = item.viewValue;
      }
    }
  }
  createForm() {
    this.searchListForm = this.fb.group({
      finYear: ['1'],
      departmentCode: [''],
      estimationFrom: ['1'],
      estimateBy: [''],
      majorHeadCode: [''],
      refNO: [''],
      revenuecapital: [''],
      frRefDate: [''],
      refDatepickerto: [''],
      recRefDate: [''],
      recRetDate: [''],
      apporRefDate: [''],
      apporReftDate: [''],
      statusd: [''],
      approvedBy: [''],
      receiveddata: [''],
      datepickerfrom: [''],
      datepickerto: [''],
      recevie: ['']

    });
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

  consolidatePage() {
    this.router.navigate(['./budget/receipt-consolidate']);
  }

  consolidateView() {
    this.router.navigate(['./budget/receipt-consolidate-view']);
  }

  // showHistoryDialog(): void {

  //   const dialogData = new ConfirmDialogModel();

  //   const dialogRef = this.dialog.open(StandingChargeConsolidateHistoryComponent, {
  //     maxWidth: '400px',
  //     data: dialogData
  //   });

  //   dialogRef.afterClosed().subscribe(dialogResult => {

  //   });
  // }
showHistoryDialog(): void {
  const dialogRef = this.dialog.open(ReceiptConsolidateViewCommentsComponent, {
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

}
@Component({
  selector: 'app-receipt-consolidate-view-comments-dialog',
  templateUrl: 'receipt-consolidate-view-comments-dialog.html',
  styleUrls: ['./receipt-consolidate-list.component.css']
})
export class ReceiptConsolidateViewCommentsComponent implements OnInit {
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
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Department', value: 'Agriculture ,Farmers welfare and Co-operation Department' },
    { label: 'Major Head', value: '0005 : Central Goods and Services Tax' },
    { label: 'Sector', value: 'A - General Services' },
    { label: 'Sub Sector', value: '(a) Organs of State'},
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  action_list: any[] = [
    { value: '1', viewValue: 'Forward' }
    // { value: 'Return', viewValue: 'Return' },
    // { value: 'Approve', viewValue: 'Approve' },
  ];

  user_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala (DDO)' }
    // { value: '2', viewValue: 'Hardik Chaudhary' },
    // { value: '3', viewValue: 'C.K Brahmbhatt' },
  ];

  attachmentType_list: any[] = [{ value: '1', viewValue: 'WorkFlow' }];

  // branchPopupCtrl:FormControl = new FormControl();
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

    // this.checkDisplayFile(this.attachment[0]);
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
    // console.log("pdfData",  pdfData)
    this.totalPages = pdfData.numPages;
    // this.isLoaded = true;
  }

  // initVar(){
  //   this.totalPages = 0;
  //   this.page = 1;
  // }

  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if (this.attachment[i].fileName == data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
          // this.show = false;
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
    // if(data.fileType === 'image'){
    // data.imgStatus = !data.imgStatus;
    // (data.imgStatus) ? (data.imgStatus = false) : (data.imgStatus = true);
    // (!data.pdfStatus) ? (data.imgStatus = false) : '';
    // if(!data.pdfStatus) {
    //   this.sampleFlag = true;
    // }

    //   if(data.imgStatus){
    //     data.imgStatus = false;
    //   } else {
    //     console.log('hello one');
    //     data.imgStatus = true;
    //     // data.pdfStatus = false;
    //   }
    // } else{
    //   // data.imgStatus = false;
    // }

    // if(data.fileType === 'pdf'){
    //   // (!data.imgStatus) ? (data.pdfStatus = false) : '';
    //   // data.pdfStatus = !data.pdfStatus;
    //   if(data.pdfStatus){
    //     data.pdfStatus = false;
    //   } else {
    //     console.log('hello one');
    //     // data.imgStatus = false;
    //     data.pdfStatus = true;
    //   }
    // } else{
    //   // data.pdfStatus = false;
    //   // data.imgStatus = false;
    // }
    console.log(data);
    // return data;
  }

  // onResizeEnd(event: ResizeEvent): void {
  //   console.log('Element was resized', event);
  //   document.getElementById("block1").style.width = String(Number(document.getElementById("block1").style.width) + Number(event.edges.right)) + 'px';
  //   document.getElementById("block2").style.width = String(Number(document.getElementById("block2").style.width) - Number(event.edges.right)) + 'px';
  // }

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
    //Get total checked items
    for (let value of Object.values(this.forwardDialog_history_list)) {
      if (value.checked) checked_count++;
    }

    if (
      checked_count > 0 &&
      checked_count < this.forwardDialog_history_list.length
    ) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    } else if (checked_count == this.forwardDialog_history_list.length) {
      //If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    } else {
      //If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }
}
