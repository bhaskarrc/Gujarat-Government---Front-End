import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DialogData } from 'src/app/model/ppr-comments';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { DataService } from 'src/app/common/data.service';



@Component({
  // tslint:disable-next-line: component-selector
  selector: 'utclist-comments-forward-dialog',
  templateUrl: 'utclist-comments-forward-dialog.html',
})

export class UtcCommentlistComponent implements OnInit {
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
    { label: 'UTC Ref ID', value: 'U0001032019' },
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Department', value: 'Department 1' },
    { label: 'Scheme Type', value: 'CSS' },
    { label: 'Project Name', value: 'Gujrat Apex Training Institute' },
    { label: 'Budget Head', value: '0101051053' },
    { label: 'Sent To', value: 'Ministry of Health and Family Welfare' },
    { label: 'Send By', value: 'Account Officer' },

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
    public dialogRef: MatDialogRef<UtcCommentlistComponent>,
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

  // filter object value
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

  // upload attachment function
  uploadAttachment() {
    this.tabDisable = false;
    this.selectedIndex = 2;
  }

  // create for function
  createForm() {
    this.actionForm = this.fb.group({
      actionCode: ['', Validators.required],
      userCode: ['', Validators.required],
      letterNumber: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  // close the dialog box on click of close button
  onNoClick(): void {
    this.dialogRef.close('no');
  }

  // function called on when form is submitted
  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  // function for file selection
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

  workflowDetails() {

  }

  goToDashboard() {

  }
}

@Component({
  selector: 'app-utc-list',
  templateUrl: './utc-list.component.html',
  styleUrls: ['./utc-list.component.css']
})
export class UtcListComponent implements OnInit {

  // form group
  utcFormList: FormGroup;

  // search data array
  filterElement_Data: any[];

  // attachment related data
  brwoseData: any[] = [{ name: undefined, file: undefined }];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);

  // form controls
  schemeTypeCtrl: FormControl = new FormControl();
  deptCTRl: FormControl = new FormControl();
  stateCTRl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  headOfDepartmentCtrl: FormControl = new FormControl();
  schemeNameCtrl: FormControl = new FormControl();
  sanctionOrderNoCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

  // variables
  cssList = false;
  statemin = false;


  // table data
  ELEMENT_DATA: any[] = [
    {
      financialYear: '2016-17',
      utcReferenceNo: '19-20/CM/UC/001',
      adminstrativeDepartment: 'Forest and Environment Department',
      headOfDepartment: 'Gujarat Pollution Control Board',
      budgetHead: '49-2852-80-800-24-3135',
      sanctionOrderDate: '10-Apr-2017',
      sanctionAmount: '15000',
      utilizedAmount: '2000',
      unspentAmount: '13000',
      surrenderAmount: '3000',
      surrenderOrderDate: '23-Apr-2017',
      workflowStatus: 'Verified by ABC',
      status: 'Pending'
    },
    {
      financialYear: '2017-18',
      utcReferenceNo: '19-20/CM/UC/003',
      adminstrativeDepartment: 'Revenue Department',
      headOfDepartment: 'Collector Office Ahmedabad',
      budgetHead: '49-2852-80-800-24-3135',
      sanctionOrderDate: '19-Apr-2017',
      sanctionAmount: '20000',
      utilizedAmount: '2000',
      unspentAmount: '13000',
      surrenderAmount: '8000',
      surrenderOrderDate: '29-Apr-2017',
      workflowStatus: 'Approved By XYZ',
      status: 'Approved'
    },
    {
      financialYear: '2017-18',
      utcReferenceNo: '19-20/CM/UC/005',
      adminstrativeDepartment: 'Climate Change Department',
      headOfDepartment: 'Gujarat Energy Development Agency ',
      budgetHead: '49-2852-80-800-24-3135',
      sanctionOrderDate: '25-Apr-2017',
      sanctionAmount: '18000',
      utilizedAmount: '2000',
      unspentAmount: '14000',
      surrenderAmount: '5000',
      surrenderOrderDate: '04-May-2017',
      workflowStatus: 'Approved By XYZ',
      status: 'Approved'
    },
  ];
  financialYearList: any[] = [
    { value: '2016-17', viewValue: '2016-2017' },
    { value: '2017-18', viewValue: '2017-2018' },
    { value: '2018-19', viewValue: '2018-2019' },
    { value: '2019-20', viewValue: '2019-2020' },
    { value: '2020-21', viewValue: '2020-2021' },
  ];

  statusList: any[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
    { value: '3', viewValue: 'Save As Draft' },
  ];

  sanctionOrderNoList: any[] = [
    { value: '1', viewValue: 'GAI/UD/2016-17/345' },
    { value: '2', viewValue: 'BT/IN/GOG/FD/2018-19/5678' },
    { value: '3', viewValue: 'FD/GOG/2019-20/8734' },
    { value: '4', viewValue: 'GAI/UD/2019-20/3455	' },
  ];

  headOfDepartment_list: any[] = [
    { value: '0', department: '0', viewValue: 'ATMA Directorate & SAMETI' },
    { value: '1', department: '0', viewValue: 'Agriculture & Co-operation Department' },
    { value: '2', department: '0', viewValue: 'Directorate of Agriculture' },
    { value: '3', department: '0', viewValue: 'Director of Horticulture' },
    { value: '4', department: '0', viewValue: 'Directorate of Animal Husbandry' },
    { value: '5', department: '0', viewValue: 'Commissioner of Fisheries' },
    { value: '6', department: '0', viewValue: 'NA' },
    { value: '0', department: '1', viewValue: 'Revenue Department' },
    { value: '1', department: '1', viewValue: 'Collector Office Ahmedabad' },
    { value: '2', department: '1', viewValue: 'Collector Office Amreli' },
    { value: '3', department: '1', viewValue: 'Collector Office Gandhinagar' },
    { value: '4', department: '1', viewValue: 'Collector Office Arvalli' },
    { value: '5', department: '1', viewValue: 'Collector Office Bhavanagar' },
    { value: '6', department: '1', viewValue: 'Collector Office Banaskantha' },
    { value: '7', department: '1', viewValue: 'Collector Office Botad' },
    { value: '8', department: '1', viewValue: 'NA' },
    { value: '0', department: '2', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '1', department: '2', viewValue: 'Commissionerate of Rural Development Office' },
    { value: '2', department: '2', viewValue: 'Development Commissioner Office' },
    { value: '3', department: '2', viewValue: 'Egram Vishwagram Project' },
    { value: '4', department: '2', viewValue: 'Ahemdabad District Panchayat' },
    { value: '5', department: '2', viewValue: 'Vadodara District Panchayat' },
    { value: '6', department: '2', viewValue: 'Gandhinagar District Panchayat' },
    { value: '7', department: '2', viewValue: 'Surat District Panchayat' },
    { value: '8', department: '2', viewValue: 'Rajkot District Panchayat' },
    { value: '9', department: '2', viewValue: 'NA' },
    { value: '0', department: '3', viewValue: 'Food, Civil Supplies & Consumer Affairs Dept.' },
    { value: '1', department: '3', viewValue: 'Director of Food and Civil Supplies' },
    { value: '2', department: '3', viewValue: 'Controller, Legal Metrology & Director, Consumer Affairs' },
    { value: '3', department: '3', viewValue: 'State Consumer Disputes Redressal Commission' },
    { value: '4', department: '3', viewValue: 'Gujarat State Civil Supplies Corporation Ltd.' },
    { value: '5', department: '3', viewValue: 'Food Controller, Ahmedabad' },
    { value: '6', department: '3', viewValue: 'NA' },
    { value: '0', department: '4', viewValue: 'Forest & Environment Department' },
    { value: '1', department: '4', viewValue: 'Principal Chief Conservator of Forest & Head of the Forest Force (HoFF)' },
    { value: '2', department: '4', viewValue: 'Gujarat Pollution Control Board' },
    { value: '3', department: '4', viewValue: 'Gujarat Ecology Commission' },
    { value: '4', department: '4', viewValue: 'GEER Ecological Education and Research Foundation' },
    { value: '5', department: '4', viewValue: 'State Environment Impact Assessment Authority' },
    { value: '6', department: '4', viewValue: 'Gujarat State Lion Conservation Society' },
    { value: '7', department: '4', viewValue: 'Gujarat Environment Management Institute (GEMI)' },
    { value: '8', department: '4', viewValue: 'NA' },
    { value: '0', department: '5', viewValue: 'Climate Change Department' },
    { value: '1', department: '5', viewValue: 'Gujarat Energy Developement Agency' },
    { value: '2', department: '5', viewValue: 'NA' },
    { value: '0', department: '6', viewValue: 'Women & Child Development Department' },
    { value: '1', department: '6', viewValue: 'NA' },
    { value: '0', department: '7', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '1', department: '7', viewValue: 'Ahmedabad Municipal Corporation' },
    { value: '2', department: '7', viewValue: 'Vadodara Municipal Corporation' },
    { value: '3', department: '7', viewValue: 'Bhavnagar Municipal Corporation' },
    { value: '4', department: '7', viewValue: 'Junagadh Municipal Corporation' },
    { value: '5', department: '7', viewValue: 'Gandhinagar Municipal Corporation' },
    { value: '6', department: '7', viewValue: 'Jamnagar Municipal Corporation' },
    { value: '7', department: '7', viewValue: 'Surat Muncipal Corporation' },
    { value: '8', department: '7', viewValue: 'NA' },
    { value: '0', department: '8', viewValue: 'Health & Family Welfare Department' },
    { value: '1', department: '8', viewValue: 'Commissioner of Health' },
    { value: '2', department: '8', viewValue: 'National Health Mission' },
    { value: '3', department: '8', viewValue: 'Indian Systems of Medicine & Homeopathy (AYUSH)' },
    { value: '4', department: '8', viewValue: 'Gujarat Medical Services Corporation Limited' },
    { value: '5', department: '8', viewValue: 'NA' },
    { value: '0', department: '9', viewValue: 'Road & Building Department' },
    { value: '1', department: '9', viewValue: 'NA' },
  ];

  schemeNameList: any[] = [
    { value: '0', department: '0', viewValue: '2211 Family Welfare' },
    { value: '1', department: '0', viewValue: 'Urban Development' },
    { value: '2', department: '0', viewValue: 'Forest Department' },
  ];


  // table columns
  displayedColumns: string[] = [
    'serialNo',
    'financialYear',
    'utcReferenceNo',
    'adminstrativeDepartment',
    'headOfDepartment',
    'budgetHead',
    'sanctionOrderDate',
    'sanctionAmount',
    'utilizedAmount',
    'unspentAmount',
    'surrenderAmount',
    'surrenderOrderDate',
    'workflowStatus',
    'status',
    'action'];


  // table data source
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  private paginator: MatPaginator;
  private sort: MatSort;


  // errorMessages
  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
    SCHEME_NAME: 'Please Enter Scheme Name',
    SECTIONED_GRANT: 'Please Enter Sectioned Grant',
    UTILIZED_GRANT: 'Please Enter Utilized Grant',
    UNSPENT_GRANT: 'Please Enter Unspent Grant'
  };

  department_list: any[] = [
    { value: '0', viewValue: 'Education Department' },
    { value: '1', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '2', viewValue: 'Industries and Mines Department' }
  ];
  SchemeTypeList: any[] = [
    { value: '1', viewValue: 'CSS' },
    { value: '2', viewValue: 'State' },
  ];


  departmentName_list: any[] = [
    { value: '0', viewValue: 'Agriculture, Farmers Walfare and  Cooperation Department' },
    {
      value: '1',
      viewValue: 'Revenue Department'
    },
    {
      value: '2',
      viewValue: 'Panchayat,Rural Housing and Rural Development Department'
    },
    { value: '3', viewValue: 'Food, Civil Supplies and Consumer Affairs Department' },
    { value: '4', viewValue: 'Forest and Environment Department' },
    { value: '5', viewValue: 'Climate Change Department' },
    {
      value: '6',
      viewValue: 'Women and Child Development Department'
    },
    {
      value: '7',
      viewValue: 'Urban Development and Urban Housing Department'
    },
    { value: '8', viewValue: 'Health and Family Welfare Department' },
    { value: '9', viewValue: 'Roads And Buildings Department' },
  ];


  hod_list: any[] = [];


  stateName_list: any[] = [
    { value: '1', viewValue: 'Agriculture and Farmers Welfare Department' },
    {
      value: '2',
      viewValue: 'Environment, Forest and Climate Change Department'
    },
    {
      value: '3',
      viewValue: 'Fisheries, Animal Husbandry and Dairying Department'
    },
    { value: '4', viewValue: 'Health and Family Welfare Department' },
    { value: '5', viewValue: 'Housing and Urban Affairs Department' }
  ];

  @ViewChild('singleSelect') singleSelect: MatSelect;
  _onDestroy = new Subject<void>();

  // MatSort
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  // MatPaginator
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }


  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.utcFormList = this.fb.group({
      financialYear: [''],
      departmentCode: [''],
      headOfDepartment: [''],
      schemeName: [''],
      sanctionOrderNo: [''],
      utcReference: [''],
      status: ['']

    });
  }

  utcFormListData() {

  }

  // set table paginatir,sort
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  // opens utc comment list component on click on send to button
  sendTo(element) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(UtcCommentlistComponent, {
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


  lineMinistry(departmentshow) {
    // tslint:disable-next-line: triple-equals
    if (departmentshow.value == 1) {
      this.cssList = true;
      this.statemin = false;
      // tslint:disable-next-line: triple-equals
    } else if (departmentshow.value == 2) {
      this.cssList = false;
      this.statemin = true;
    }
  }

  clearForm() {

  }

  // search table data on basis of search form fields
  onSearch() {
    const formVal = this.utcFormList.value;

    if (formVal.departmentCode !== '' && formVal.departmentCode !== null) {
      const departmentCode = formVal.departmentCode;
      const department = this.department_list[departmentCode].viewValue;
      if (formVal.departmentCode !== '' && formVal.departmentCode != null) {
        this.filterElement_Data = this.ELEMENT_DATA.filter(
          searchBy => searchBy.departmentName.toLowerCase() === department.toLowerCase());
        this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      }
    }


    if (formVal.financialYear !== '' && formVal.financialYear != null) {

      this.filterElement_Data = this.ELEMENT_DATA.filter(
        searchByFinancialYear => searchByFinancialYear.financialYear.toLowerCase() === formVal.financialYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      console.log(this.dataSource.data);
    }



    if (formVal.schemeName !== '' && formVal.schemeName != null) {
      console.log(formVal.financialYear);
      this.filterElement_Data = this.ELEMENT_DATA.filter(
        searchBy => searchBy.schemeName.toLowerCase() === formVal.schemeName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      console.log(this.dataSource.data);
    }
    if (formVal.ucId !== '' && formVal.ucId != null) {
      console.log(formVal.financialYear);
      this.filterElement_Data = this.ELEMENT_DATA.filter(
        searchBy => searchBy.ucId.toLowerCase() === formVal.ucId.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElement_Data);
      console.log(this.dataSource.data);
    }
    if ((formVal.financialYear === '' || formVal.financialYear == null) &&
      (formVal.departmentCode === '' || formVal.departmentCode == null) &&
      (formVal.schemeName === '' || formVal.schemeName == null) &&
      (formVal.ucId === '' || formVal.ucId == null)) {
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    }
  }

  resetForm() {
    this.utcFormList.reset();
  }


  // opens utc list attachment dialog box on click on upload button
  // upload(element) {

  //   // tslint:disable-next-line: no-use-before-declare
  //   const dialogRef = this.dialog.open(UtcListAttachementComponent, {
  //     width: '1200px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });

  // }

  edit(element) {
    this.dataService.setOption('utc-list', 'isView');
    this.router.navigate(['contract-management/utc']);
  }

  view(item) {
    this.router.navigate(['contract-management/utc-certificate']);
  }

  // select head of department on basis of adminstrative department
  selectDepartment() {
    const department = this.utcFormList.value.departmentCode;
    if (department !== '' && department != null) {
      this.hod_list = this.headOfDepartment_list.filter(
        searchBy => searchBy.department.toLowerCase() === department.toLowerCase());
    }
  }

  onDelete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }


}




