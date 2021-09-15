import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementSsoToToNew } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { HistoryDetailsCommonDialogComponent } from '../history-details-common-dialog/history-details-common-dialog.component';
// tslint:disable-next-line: max-line-length
import { HistoryIndentConsolidationPopupComponent } from '../indent-consolidation/history-indent-consolidation-popup/history-indent-consolidation-popup.component';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { StampIssueSsoToToPopupComponent } from './stamp-issue-sso-to-to-popup/stamp-issue-sso-to-to-popup.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

declare function SetEnglish();
declare function SetGujarati();


// Listing table data
const ELEMENT_DATA: ElementSsoToToNew[] = [
  {
    position: '1',
    typeOfStamp: 'Court Fee Paper',
    denominationvalue: '10',
    availQty: '10',
    authQty: '8',
    requestedQuantity: '5',
    qtyApprScr: '',
    qtyapproved: '',
    denominationCode: '10',
    stampSheet: '1',
    from: '',
    to: '',
    remarks: '',
    isDisable: false,
    show: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
  {
    position: '2',
    typeOfStamp: 'Court Fee Paper',
    denominationvalue: '50',
    availQty: '9',
    authQty: '7',
    requestedQuantity: '10',
    qtyApprScr: '',
    qtyapproved: '',
    denominationCode: '50',
    stampSheet: '1',
    from: '',
    to: '',
    remarks: '',
    isDisable: false,
    show: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
  {
    position: '3',
    typeOfStamp: 'Court Fee Paper',
    denominationvalue: '100',
    availQty: '11',
    authQty: '10',
    requestedQuantity: '15',
    qtyApprScr: '',
    qtyapproved: '',
    denominationCode: '100',
    stampSheet: '1',
    from: '',
    to: '',
    remarks: '',
    isDisable: false,
    show: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
  {
    position: '4',
    typeOfStamp: 'Court Fee Label',
    denominationvalue: '1',
    availQty: '10',
    authQty: '10',
    requestedQuantity: '30',
    qtyApprScr: '',
    qtyapproved: '',
    denominationCode: '1.180',
    stampSheet: '180',
    from: '-',
    to: '-',
    remarks: '',
    isDisable: true,
    show: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  },
  {
    position: '5',
    typeOfStamp: 'Court Fee Label',
    denominationvalue: '2',
    availQty: '9',
    authQty: '0',
    requestedQuantity: '25',
    qtyApprScr: '',
    qtyapproved: '',
    denominationCode: '2.120',
    stampSheet: '120',
    from: '-',
    to: '-',
    remarks: '',
    isDisable: true,
    show: false,
    innerDataSource: new MatTableDataSource([]),
    rowStyleClass: '',
  }
];






@Component({
  selector: 'app-stamp-issue-by-sso-to-to',
  templateUrl: './stamp-issue-by-sso-to-to.component.html',
  styleUrls: ['./stamp-issue-by-sso-to-to.component.css'],
  animations: [
    trigger('expandRow', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ]
})
export class StampIssueBySsoToToComponent implements OnInit {
  // Entry Field Details
  subTreasury_List: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad Treasury Office' },
    { value: '2', viewValue: 'Amreli Treasury Office' },
    { value: '3', viewValue: 'Anand Treasury Office' },
    { value: '4', viewValue: 'Aravalli-Modasa Treasury Office' },
    { value: '5', viewValue: 'Banasakantha – Palanpur Treasury Office' },
    { value: '6', viewValue: 'Bhavnagar Treasury Office' },
    { value: '7', viewValue: 'Bharuch Treasury Office' },
    { value: '8', viewValue: 'Botad Treasury Office' },
    { value: '9', viewValue: 'Chhota Udepur Treasury Office' },
    { value: '10', viewValue: 'Dahod Treasury Office' },
    { value: '11', viewValue: 'Dang – Ahwa Treasury Office' },
    { value: '12', viewValue: 'Devbhoomi Dwarka-Jamkhambhaliya Treasury Office' },
    { value: '13', viewValue: 'Gandhinagar Treasury Office' },
    { value: '14', viewValue: 'Gir somnath (Veraval) Treasury Office' },
    { value: '15', viewValue: 'Jamnagar Treasury Office' },
    { value: '16', viewValue: 'Junagadh Treasury Office' },
    { value: '17', viewValue: 'Kheda-Nadiad Treasury Office' },
    { value: '18', viewValue: 'Kutch (Bhuj) Treasury Office' },
    { value: '19', viewValue: 'Mahesana Treasury Office' },
    { value: '20', viewValue: 'Mahisagar-Lunawada Treasury Office' },
    { value: '21', viewValue: 'Morbi Treasury Office' },
    { value: '22', viewValue: 'Narmada-Rajpipala Treasury Office' },
    { value: '23', viewValue: 'Navsari Treasury Office' },
    { value: '24', viewValue: 'Panchmahal (Godhara) Treasury Office' },
    { value: '25', viewValue: 'Patan Treasury Office' },
    { value: '26', viewValue: 'Porbandar Treasury Office' },
    { value: '27', viewValue: 'Rajkot Treasury Office' },
    { value: '28', viewValue: 'Sabarkantha – Himatnagar Treasury Office' },
    { value: '29', viewValue: 'Tapi – Vyara Treasury Office' },
    { value: '30', viewValue: 'Vadodara Treasury Office' },
    { value: '31', viewValue: 'Valsad Treasury Office' },
    { value: '32', viewValue: 'Surat Treasury Office' },
    { value: '33', viewValue: 'Surendranagar Treasury Office' },
  ];

  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Gross Total of Indent', value: 'Rs. 54000' },
    { label: 'Name of Office', value: 'Superintendent of Stamp Office' },
    { label: 'Duration of Indent', value: '4-May-2020 to 8-Nov-2020' },
    { label: 'Date of Indent', value: '3-Apr-2020' },
    { label: 'Indent Received From', value: 'District Treasury Office, Gandhinagar' },
    { label: 'Type of Indent', value: 'Regular Indent' },
  ];
  stamp_List: any[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '3', viewValue: 'Court Fee Label' },
    { value: '4', viewValue: 'Court Fee Paper' },
    { value: '5', viewValue: 'Foreign bill' },
    { value: '6', viewValue: 'Hundi' },
    { value: '7', viewValue: 'Insurance' },
    { value: '8', viewValue: 'Non Judicial Paper' },
    { value: '9', viewValue: 'Notary' },
    { value: '10', viewValue: 'Revenue' },
    { value: '11', viewValue: 'Share transfer' },
    { value: '12', viewValue: 'Special Adhesive' },
  ];
  denoVal_list: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '2', viewValue: '5' },
    { value: '2', viewValue: '10' },
    { value: '2', viewValue: '20' },
  ];
  denoCode_list: CommonListing[] = [
    { value: '1', viewValue: '10' },
    { value: '2', viewValue: '20' },
    { value: '2', viewValue: '30' },
    { value: '2', viewValue: '50' },
  ];

  indent_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/082019/23' },
  ];

  attachmentType_list: CommonListing[] = [
    { value: '1', viewValue: 'Supporting document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Others' },
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Entry Table
  // displayedColumns: string[] = ['position', 'typeOfStamp', 'denominationvalue', 'denominationCode', 'stampSheet', 'availQty',
  //   'authQty', 'requestedQuantity', 'qtyapproved', 'from', 'to', 'action'];

  displayedColumns: string[] = ['position', 'typeOfStamp', 'denominationvalue', 'availQty',
    'authQty', 'requestedQuantity', 'qtyapproved', 'from', 'to', 'qtyApprScr', 'amt', 'action'];


  subTreasuryCtrl: FormControl = new FormControl();
  indentCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  venNameVal = 'Court Fee Paper';
  date: any = new Date();
  selectedRowIndex = -1;
  selection = new SelectionModel<any>(false, null);
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  onAdd = false;
  directiveObj = new CommonDirective();

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() { }

  // Add Button Click
  whenAddClick() {
    this.onAdd = true;
  }
  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-issue-by-sso-to-to-list']);
  }
  // to delete expanded row
  deleteRow(element, index) {
    element.innerDataSource.data.splice(index, 1);
    element.innerDataSource.data = element.innerDataSource.data;
    if (element.innerDataSource.data.length > 0) {
      element.rowStyleClass = 'classForBackground pointerCursor';
    } else {
      element.rowStyleClass = '';
    }
  }

  // to open entry popup
  openAddDetails(element) {
    const dialogRef = this.dialog.open(StampIssueSsoToToPopupComponent, {
      maxWidth: '1200px',
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult === 'close') {
        console.log(dialogResult);
      } else {
        element.innerDataSource.data.push({
          typeOfStamp: dialogResult[0].typeOfStamp,
          denominationvalue: dialogResult[0].denominationvalue,
          availQty: dialogResult[0].availQty,
          authQty: dialogResult[0].authQty,
          requestedQuantity: dialogResult[0].requestedQuantity,
          qtyApprScr: dialogResult[0].qtyApprScr,
          qtyapproved: dialogResult[0].qtyapproved,
          denominationCode: dialogResult[0].denominationCode,
          stampSheet: dialogResult[0].stampSheet,
          from: dialogResult[0].from,
          to: dialogResult[0].to,
          remarks: dialogResult[0].remarks,
        });
        element.innerDataSource.data = element.innerDataSource.data;
        element.rowStyleClass = 'classForBackground pointerCursor';
      }
    });
  }
  // For getting data source for table
  getDataSource(element_data) {
    return new MatTableDataSource(element_data)
  }

  // To Open History Pppoup
  openHistory() {
    const dialogRef = this.dialog.open(HistoryIndentConsolidationPopupComponent, {
      maxWidth: '1200px',
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }
  // Method to Open Workflow Details for Stamp Issue by SSo to To
  sumbitStampIssutSsoToToWorkflow(): void {
    const dialogRef = this.dialog.open(StampIssueSSoToToWorkflowComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('From Common');
    });
  }
}

@Component({
  selector: 'app-stamp-issue-by-sso-to-to-workflow',
  templateUrl: './stamp-issue-by-sso-to-to-workflow.html',
  styleUrls: ['./stamp-issue-by-sso-to-to.component.css']
})
export class StampIssueSSoToToWorkflowComponent implements OnInit {

  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;
  public showData = true;
  showAction: Boolean = true;

  fileBrowseIndex: number;
  date: any = new Date();
  brwoseData: any[] = [{
    name: undefined,
    file: undefined,
    uploadedBy: undefined

  }];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];
  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Date of Indent Consolidation', value: '15-Oct-2018' },
    { label: 'Indent Number', value: '51/00057/072019/23' },
    { label: 'Indent Duration', value: '01-Jul-2019 to 31-Dec-2019' },
    { label: 'Type of Indent', value: 'Regular Indent' },
    { label: 'Date of Last Consoldiated Indent', value: '21-Mar-2019' },
    { label: 'Gross Total of Indent', value: 'Rs. 54000' },
  ];
  displayData = false;

  attachment = [
    { fileName: 'Attachment 1', fileType: 'image', filePath: '../../../assets/sample-attachments/image-sample.jpg', imgStatus: false },
    { fileName: 'Attachment 2', fileType: 'pdf', filePath: '../../../assets/sample-attachments/pdf-sample.pdf', pdfStatus: false },
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
    DEPARTMENT: 'Please select any Department',
  };

  forwardDialog_history_list: any[] = [
    {
      id: 1, userName: 'Shri S M Modi', designation: 'Deputy Section Officer',
      // tslint:disable-next-line: max-line-length
      role: 'Creator', date: '1/11/2019', comment: 'Please correct standing charge estimate for object head and correct all the calculations.Please verify last 3 year account as well as CSS grant received till date.Ask cooncerned officer from respective office to send necessay details at the earliest to department.'
    },
    {
      id: 2, userName: 'Shri C Patel', designation: 'Section Officer',
      role: 'Verifier', date: '10/11/2019', comment: 'We may approve'
    },
    {
      id: 3, userName: 'Shri P M Shah', designation: 'Deputy Secretaryr',
      role: 'Approver', date: '11/11/2019', comment: 'We may approve'
    },
  ];

  action_list: CommonListing[] = [
    { value: '1', viewValue: 'Forward' },
    { value: '2', viewValue: 'Return' },
    { value: '3', viewValue: 'Send Back' },
    { value: '4', viewValue: 'Verify' },
    { value: '2', viewValue: 'Approve' },
    { value: '3', viewValue: 'Reject' },
    { value: '4', viewValue: 'Cancel' },
  ];

  user_list: CommonListing[] = [
    { value: '1', viewValue: 'Satendra Zala (DDO)' },
  ];

  attachmentType_list: CommonListing[] = [
    { value: '1', viewValue: 'Supporting document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Others' },
  ];

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  userCodeCtrl: FormControl = new FormControl();
  filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  private _onDestroy = new Subject<void>();

  constructor(private elem: ElementRef,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StampIssueSSoToToWorkflowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private el: ElementRef,
  ) { }

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    // additionalText :['', Validators.required]
    this.createForm();
    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.action_list, this.actionCtrl.value, this.filteredAction);
      });
    if (this.user_list) {
      this.filteredUserCode.next(this.user_list.slice());
    }
    this.userCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.user_list, this.userCodeCtrl.value, this.filteredUserCode);
      });
    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachmentType_list, this.attachmentTypeCodeCtrl.value, this.filteredAttachmentTypeCode);
      });
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.actionForm.patchValue({
      actionCode: '1',
      userCode: '1',
      additionalText: ''
    });
  }

  gotoListing() {
    this.router.navigate(['']);
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
      additionalText: ['', Validators.required]
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if (this.showAction = true) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
          // this.showAction = true;
        } else {
          this.attachment[i].imgStatus = false;
          // this.show = false;
        }
      } else if (data.fileType === 'pdf') {
        if (this.showAction = true) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
          // this.showAction = true;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
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
          name: undefined,
          file: undefined,
          uploadedBy: undefined
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }
  checkDisplayFileToggle() {
    this.showAction = true;
    this.show = false;
  }
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  setEnglishOnFocusOut() {
    SetEnglish();
  }
  toggleLanguage() {
    this.isLangChange = true;
    const elements = this.elem.nativeElement.querySelectorAll('.hasfocus')[0];
    if (elements !== undefined) {
      if (this.currentLang.value === 'Guj') {
        SetEnglish();
        this.currentLang.next('Eng');
      } else {
        SetGujarati();
        this.currentLang.next('Guj');
      }
      elements.focus();
    }
  }

}

