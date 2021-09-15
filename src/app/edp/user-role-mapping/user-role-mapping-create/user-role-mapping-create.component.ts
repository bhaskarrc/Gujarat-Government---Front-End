import { Component, ViewChild, ElementRef, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSelect, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { VERSION } from '@angular/material';
import { HeaderElement } from 'src/app/model/common-listing';
import { DialogData,  Userole, UseroleMap } from 'src/app/model/user-role-mapping';


const mappinmgList: Userole[] = [
  // tslint:disable-next-line: max-line-length
  {
    position: 1,
    empNo: '225014',
    empName: 'M k Shukla',
    postName: 'Mamltdar -1',
    postType: 'Primary'
  },
  {
    position: 2,
    empNo: '225014',
    empName: 'M k Shukla',
    postName: 'Joint Director - 2',
    postType: 'Secondary'
  }
];

const rolemappinmgList: UseroleMap[] = [];

  // Rights to be Remove table
const rolemappinmgremioveList: UseroleMap[] = [];

@Component({
  selector: 'app-user-role-mapping-create',
  templateUrl: './user-role-mapping-create.component.html',
  styleUrls: ['./user-role-mapping-create.component.css']
})
export class UserRoleMappingCreateComponent implements OnInit {

  // Table on clcik serch button
  displayedRoleColumn: string[] = [
    'position',
    'empNo',
    'empName',
    'postName',
    'postType'
  ];
  userRole = mappinmgList;

  // Rights to be Given table
  displayedRoleMapColumn: string[] = [
    'position',
    'empNo',
    'empName',
    'postName',
    'postType',
    'moduleList',
    'subModule',
    'manuCounter',
    'permission',
    'workFLow',
    'action'
  ];
  userRoleMap = new MatTableDataSource(rolemappinmgList);

  // Rights to be Remove table
  displayedRoleMapremoveColumn: string[] = [
    'position',
    'empNo',
    'empName',
    'postName',
    'postType',
    'moduleList',
    'subModule',
    'manuCounter',
    'permission',
    'workFLow',
    'action'
  ];
  userRoleMapremove = new MatTableDataSource(rolemappinmgremioveList);

  version = VERSION;
  selectedIndex = 0;
  permissioncheckbox = false;
  tabDisable: Boolean = true;
  isSearch = true;
  selectedModuleName: string;

  sub_activity: string[] = [
    'Inward Branch',
    'Cardex Verification Branch',
    'Audit Branch',
    'Cheque/E-payment Branch',
    'Outward Branch'
  ];


  menu: any[] = [
    { value: '1', viewValue: 'Counter Allocation for Token' },
    { value: '2', viewValue: 'Counter Allocation for Inward' },
    { value: '3', viewValue: 'Token Information Search' },
    { value: '4', viewValue: 'Inward Online Bill' },
    { value: '5', viewValue: 'Inward Physical Bill' },
    { value: '6', viewValue: 'Saved Bill' },
    { value: '7', viewValue: 'Paper Token Re -Print' }
  ];

  moduleList: any[] = [
    { value: '1', viewValue: 'Budget' },
    { value: '2', viewValue: 'Grant' },
    { value: '3', viewValue: 'Online Bill' },
    { value: '4', viewValue: 'Treasury Bill Processing' },
    { value: '5', viewValue: 'Pay & Accounts Office' },
    { value: '6', viewValue: 'Pension Payment' },
    { value: '7', viewValue: 'Payment Management' },
    { value: '8', viewValue: 'Accounting' }
    
  ];

  subMenuList: any[] = [
    { value: '1', viewValue: 'Inward' },
    { value: '2', viewValue: 'Cardex' },
    { value: '3', viewValue: 'Audit' },
    { value: '4', viewValue: 'Cheque' },
    { value: '5', viewValue: 'Dispatch' }
  ];


  workFlow_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  branchList = [
    { value: '1', viewValue: 'Budget Branch' },
    { value: '2', viewValue: 'EDP Branch' },
    { value: '3', viewValue: 'TC Branch' }
  ];

  userMappingForm: FormGroup;
  activitiesCtrl: FormControl = new FormControl();
  AddUser2: any;
  array: any = [];
  designation = 'Deputy Mamlatdar - 2';
  showSubActivity: Boolean = false;
  showSubActivityMappedToUser: Boolean = false;
  permissionOn: Boolean = false;
  searchText: any;
  today_date = Date.now();


  branchCtrl: FormControl = new FormControl();

  browseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];

  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];

  dataSourceBrowse = new MatTableDataSource(this.browseData);
  fileBrowseIndex: number;

  @ViewChild('singleSelect') singleSelect: MatSelect;

  // moduleList: boolean;
  subList: boolean;
  menuChecbox: boolean;
  workFlowCheckBox = false;
  branchlistdrop = false;
  selectedSubModuleName: any;
  selectedmenuName: any;
  showModuleSelection = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private el: ElementRef,
    public dialog: MatDialog
  ) {}

  ngOnInit() {

    this.userMappingForm = this.fb.group({
      district: ['Ahmedabad'],
      ddoNo: ['416'],
      cardexNo: ['78'],
      ddoOffice: ['Collector Office,Ahmedabad'],
      postName: [''],
      moduleName: ['', Validators.required],
      employeeNo: [''],
      userName: [''],
      branchName: ['']
    });


  }

  onEmployeeNumberClick() {
    this.showModuleSelection = true;
    this.userRole = [
      {
        position: 1,
        empNo: '225014',
        empName: 'M k Shukla',
        postName: 'Mamltdar -1',
        postType: 'Primary'
      }
    ];
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

  onEmpNoSelect(data) {
    // console.log(data);
    this.userMappingForm.controls.userName.setValue(data.name);
    this.userMappingForm.controls.postName.patchValue('1');
  }

  onModuleNameSelect() {
    this.array.push({
      AddUser2: this.userMappingForm.value.userName
    });
    this.showSubActivity = true;
  }

  onSubActivitySelect() {
    this.showSubActivityMappedToUser = true;
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

  onBrowseSelectChange() {}

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          dropDown: undefined,
          name: undefined,
          file: undefined
        });
        this.dataSourceBrowse.data = p_data;
      } else {
      }
    }
  }

  addRow() {
    if (this.userRoleMap) {
      this.showModuleSelection = false;
      this.userRole = mappinmgList;
      const p_data = this.userRoleMap.data;

      // Rights to be Given table data
      p_data.push({
        position: 1,
        empNo: '225014',
        empName: 'M k Shukla',
        postName: 'Mamltdar -1',
        postType: 'Primary',
        moduleList: 'Budget',
        subModule: 'Inward',
        manuCounter: 'Counter Allocation for Token',
        permission: 'Create',
        branch: 'Budget',
        workFLow: 'Create'
      });
      this.userRoleMap.data = p_data;
    }

    if (this.userRoleMapremove) {

      const p_data = this.userRoleMapremove.data;

      // Rights to be remove table data
      p_data.push({
        position: 1,
        empNo: '225014',
        empName: 'M k Shukla',
        postName: 'Mamltdar -1',
        postType: 'Primary',
        moduleList: 'Budget',
        subModule: 'Inward',
        manuCounter: 'Counter Allocation for Token',
        permission: 'View',
        branch: 'Budget',
        workFLow: ''
      });
      this.userRoleMapremove.data = p_data;
    }
  }

  showConfirmationPopup() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(UserRoleMappingViewDialogComponent, {
      width: '100%',
      panelClass: 'UserRoleViewDialog',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  onSubmit() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(UserRoleMappingForwardDialogComponent, {
      width: '2700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  view() {}


  gotoListing() {
    this.router.navigate(['./edp/user-role-mapping-list']);
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  viewComments(): void {}

  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  clickOnModule(item) {
    this.subList = true;
    this.selectedModuleName = item.viewValue;
  }

  subMenu(item) {
    this.selectedSubModuleName = item.viewValue;
    this.menuChecbox = true;
  }

  workFlow(workflowcheckboxshow) {
    if (workflowcheckboxshow.value === '2') {
      this.workFlowCheckBox = false;
    } else {
      this.workFlowCheckBox = true;
    }
  }

  branchshow(branchlistshow) {
    if (branchlistshow.value === '2') {
      this.branchlistdrop = false;
    } else {
      this.branchlistdrop = true;
    }
  }

  menuList(item) {
    this.permissionOn = item.viewValue;
    this.selectedmenuName = item.viewValue;
  }

  search() {
    this.isSearch = false;
  }

  oncancel() {
    this.showModuleSelection = false;
    this.isSearch = true;
  }
}

@Component({
  selector: 'app-user-role-mapping-forward-dialog',
  templateUrl: 'user-role-mapping-forward-dialog.html',
  styleUrls: ['./user-role-mapping-create.component.css']
})
export class UserRoleMappingForwardDialogComponent implements OnInit {
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
  headerJso: HeaderElement[] = [
    { label: 'GR No.', value: 'DAT/EDP/01032019/0001' },
    { label: 'Office Type', value: 'DDO ' },
    { label: 'Office Name', value: 'Mamlatdar Office, Ahmedabad' },
    { label: 'Designation', value: 'Mamlatdar' },
    { label: 'District', value: 'Ahmedabad' },
    { label: 'Mobile No', value: '9122887722' },
    { label: 'Email ID', value: 'ahm-mam@gujarat.gov.in' },
    { label: 'HOD', value: 'Collector Office' }
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

  actionForm: FormGroup;


  forwardDialog_history_list: any[] = [
    {
      id: 1,
      userName: 'Mr. M Raja',
      designation: 'Deputy Section Officer',
      role: 'HOD/AD Creator',
      date: '1/11/2019',
      comment: 'New Office needs to be created as Collector Office'
    },
    {
      id: 2,
      userName: 'Mr. S S Trikoti',
      designation: 'Section Officer',
      role: 'HOD/AD Verifier',
      date: '10/11/2019',
      comment: 'Details Verified'
    },
    {
      id: 3,
      userName: 'Mr. R Shukla',
      designation: 'Deputy Secretaryr',
      role: 'HOD/AD Approver',
      date: '11/11/2019',
      comment: 'Approved'
    }
  ];

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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserRoleMappingForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private el: ElementRef
  ) {}

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

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
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
        if (this.attachment[i].fileName === data.fileName) {
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

  onBrowseSelectChange() {}

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

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'user-role-mapping-view-dialog',
  templateUrl: 'user-role-mapping-view-dialog.html',
  styleUrls: ['./user-role-mapping-create.component.css']
})
export class UserRoleMappingViewDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserRoleMappingViewDialogComponent>
  ) {}
  public module;
  public count;
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
