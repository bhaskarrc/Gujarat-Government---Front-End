
import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { DialogData } from 'src/app/model/ppr-comments';

// table data
const ELEMENT_DATA = [
  {
    queryId: '1006', pprNo: '10747', projectName: 'Gujrat Apex training Institute',
    sentTo: 'NITI Ayog', sentOn: '08 jan 2020', status: 'Pending', transStatus: 'Approved', remark: 'pending', action: '-'
  },
  {
    queryId: '1006', pprNo: '10747', projectName: 'Gujrat Apex training Institute',
    sentTo: 'NITI Ayog', sentOn: '08 jan 2020', status: 'Rejected', transStatus: 'Approved', remark: 'Responded', action: '-'
  },
  {
    queryId: '1006', pprNo: '10747', projectName: 'Gujrat Apex training Institute',
    sentTo: 'NITI Ayog', sentOn: '08 jan 2020', status: 'Approved', transStatus: 'Rejected', remark: 'send feedback', action: '-'
  },
  {
    queryId: '1006', pprNo: '10747', projectName: 'Gujrat Apex training Institute',
    sentTo: 'NITI Ayog', sentOn: '08 jan 2020', status: 'Pending', transStatus: 'Approved', remark: 'pending', action: '-'
  },
  {
    queryId: '1006', pprNo: '10747', projectName: 'Gujrat Apex training Institute',
    sentTo: 'NITI Ayog', sentOn: '08 jan 2020', status: 'Rejected', transStatus: 'Approved', remark: 'Responded', action: '-'
  },
  {
    queryId: '1006', pprNo: '10747', projectName: 'Gujrat Apex training Institute',
    sentTo: 'NITI Ayog', sentOn: '08 jan 2020', status: 'Approved', transStatus: 'Rejected', remark: 'send feedback', action: '-'
  },
];
@Component({
  selector: 'app-ppr-comments',
  templateUrl: './ppr-comments.component.html',
  styleUrls: ['./ppr-comments.component.css']
})
export class PprCommentsComponent implements OnInit {
  isSearch: Boolean = true;
  private _onDestroy = new Subject<void>();
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  todayDate = Date.now();

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  displayedColumns: string[] = [
    'srNo', 'queryId', 'pprNo', 'projectName', 'sentTo', 'sentOn', 'status', 'transStatus', 'remark', 'action'
  ];
  pprCmt_Qid_list: CommonListing[] = [
    { value: '1008', viewValue: '1008' },
    { value: '1007', viewValue: '1007' },
    { value: '1006', viewValue: '1006' },
    { value: '916', viewValue: '916' },
  ];
  pprCmt_PprNo_list: CommonListing[] = [
    { value: '10747', viewValue: '10747' },
    { value: '10848', viewValue: '10848' },
  ];
  pprCmt_prjName_list: CommonListing[] = [
    { value: 'Gujrat Apex training Institute', viewValue: 'Gujrat Apex training Institute' },
    { value: 'Surat Metro Rail Project Phase -1', viewValue: 'Surat Metro Rail Project Phase -148' },
  ];
  pprCommentsForm: FormGroup;
  pprQueryIdCtrl: FormControl = new FormControl();
  pprCmtPprNoCtrl: FormControl = new FormControl();
  pprCmtProjNameCtrl: FormControl = new FormControl();
  private paginator: MatPaginator;
  private sort: MatSort;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  ngOnInit() {
    this.pprCommentsForm = this.fb.group({
      pprQueryId: ['', Validators.required],
      pprCmtPprNo: ['', Validators.required],
      pprCmtProjName: ['', Validators.required],
    });
  }
  createForm() {
    this.pprCommentsForm = this.fb.group({
      pprQueryId: ['', Validators.required],
      pprCmtPprNo: ['', Validators.required],
      pprQueryIdCtrl: ['', Validators.required],
      pprCmtPprNoCtrl: ['', Validators.required],
      pprCmtProjNameCtrl: ['', Validators.required],
    });
  }
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  // leave submit function
  leaveSubmit() {
    const p_data = this.pprCommentsForm;
    console.log(p_data);
  }

  // clear form
  clearForm() {
    this.pprCommentsForm.reset();
  }

  // change value of isSearch variable on click of search 
  search() {
    this.isSearch = false;
  }

  // opens Ppr Comments Forward Dialog Component on click on responded icon
  showConfirmationPopup() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(PprCommentsForwardDialogComponent, {
      width: '100%',
      panelClass: 'UserRoleViewDialog',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(() => { });
  }

  // opens Ppr Comments Forward Dialog Component
  onSubmit() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(PprCommentsForwardDialogComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }
}



@Component({
  selector: 'app-ppr-comments-forward-dialog',
  templateUrl: 'ppr-comments-forward-dialog.html',
  styleUrls: ['./ppr-comments.component.css']
})
export class PprCommentsForwardDialogComponent implements OnInit {
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
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'action'
  ];
  headerJso: any[] = [
    { label: 'PPR ID', value: 'P0001032019' },
    { label: 'Reference ID', value: 'R000001' },
    { label: 'Project Name', value: 'Gujrat Apex Training Institute' },
    { label: 'Department', value: 'Department 1' },
    { label: 'Sent To', value: 'NITI Ayog' },
    { label: 'Send By', value: 'Gujrat Apex Training Institute' },
    { label: 'Query', value: 'Query Submitted' },
  ];

  displayData = false;
  actionForm: FormGroup;
  action_list: any[] = [{ value: '1', viewValue: 'Forward' }];
  user_list: any[] = [{ value: '1', viewValue: 'Mr. Shah ' }];
  attachmentType_list: any[] = [{ value: '1', viewValue: 'WorkFlow' }];

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  userCodeCtrl: FormControl = new FormControl();
  filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  private _onDestroy = new Subject<void>();
  selectedIndex: number;
  dialog: any;
  tabDisable: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PprCommentsForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
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

  // delete row
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  gotoListing() {

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
      userCode: ['', Validators.required]
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

  // perform operation on file selection
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  // open file selector
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  // add row
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
      }
    }
  }
}
