import { paoMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue, PeriodicElement, SloDept } from 'src/app/model/paoModel';
import { PaoDirectives } from 'src/app/common/directive/pao';

const ELEMENT_DATA: SloDept[] = [
  {
    srNo: 0,
    department: '',
    cardexNo: '',
    schemeNo: '',
    demand: '',
    majorHead: '',
    subMajorHead: '',
    minorHead: '',
    subHead: '',
    detailHead: '',
    objectClass: '',
    officeCategory: '',
    minister: '',
  },
];
const postMaster: any[] = [
  {
    type: '',
    designation: '',
    sanction: '',
    parentRec: '',
    pay: '',
    payBand: '',
    gradePay: '',
    startDate: '',
    endDate: ''
  },
];


@Component({
  selector: 'app-slo-department-postmaster',
  templateUrl: './slo-department-postmaster.component.html',
  styleUrls: ['./slo-department-postmaster.component.css']
})
export class SloDepartmentPostmasterComponent implements OnInit {
  // Variable
  sloPostMasterLable = 'Slo Department Post Master';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'PAO';
  createBill = 'Create Online Bill';
  department = 'Slo Department';

  todayDate = Date.now();
  displayedColumns: string[] = ['srNo', 'department', 'cardexNo', 'schemeNo',
    'demand', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'detailHead',
    'objectClass', 'officeCategory', 'minister'];

  postMasterDataSource = new MatTableDataSource([]);

  sloPostMasterForm: FormGroup;
  deptSave = false;
  isSubmitted = false;
  errorMessages = paoMessage;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, private router: Router) {

    this.sloPostMasterForm = this.fb.group({
      department: ['', Validators.required],
      cardexNo: [''],
      schemeNo: [''],
      demand: ['', Validators.required],
      majorHead: ['', Validators.required],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      objectClass: ['', Validators.required],
      officeCategory: ['', Validators.required],
      minister: ['', Validators.required]
    });
  }
  directiveObject = new PaoDirectives(this.router, this.dialog);
  // List
  department_list: ListValue[] = [
    { value: '1', viewValue: 'A.O. Dir. Of Social Defence ' },
    { value: '2', viewValue: 'A.O.G.S.S.S Bord' },
    { value: '3', viewValue: 'A.O Dir Of Library' }
  ];

  demand_list: ListValue[] = [
    { value: '1', viewValue: '017:Treasury and Accounts Administration' }
  ];

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '00' }
  ];

  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '095:Directorate of Accounts and Treasuries' },
    { value: '2', viewValue: '096:Pay and Accounts Offices' },
    { value: '3', viewValue: '097:Treasury Establishment' },
  ];

  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01:GES-1 Directorate' },
    { value: '2', viewValue: '01:Pay and Accounts offices ' },
    { value: '3', viewValue: '01:Treasuries' },
  ];

  detailHead_list: ListValue[] = [
    { value: '1', viewValue: '00:GES-1 Directorate' },
    { value: '2', viewValue: '00:Pay and Accounts offices' },
    { value: '3', viewValue: '00:Treasuries' },
  ];

  objectClass_list: ListValue[] = [
    { value: '1', viewValue: 'C0' },
    { value: '2', viewValue: 'C1' },
    { value: '3', viewValue: 'C2' },
    { value: '4', viewValue: 'C3' },
    { value: '5', viewValue: 'C4' },
    { value: '6', viewValue: 'C5' },
    { value: '7', viewValue: 'C6' },
    { value: '7', viewValue: 'C7' }
  ];

  officeCategory_list: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IPS/IAS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' }
  ];

  minister_list: ListValue[] = [
    { value: '1', viewValue: 'Minister 1' },
    { value: '2', viewValue: 'Minister 2' },
    { value: '3', viewValue: 'Minister 3' },
    { value: '4', viewValue: 'Minister 4' }
  ];
  // Form COntrol
  departmentCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objClassCtrl: FormControl = new FormControl();
  officeCategoryCtrl: FormControl = new FormControl();
  ministerCtrl: FormControl = new FormControl();

  ngOnInit() {

  }

  userCreationForm() {
    // console.log(data)
  }

  resetForm() {
    this.sloPostMasterForm.reset();
    this.isSubmitted = false;
  }
  saveForm() {
    if (this.sloPostMasterForm.valid) {
      this.isSubmitted = false;
      this.deptSave = true;
      const p_data = this.postMasterDataSource.data;
      p_data.push({
        srNo: this.sloPostMasterForm.value[''],
        department: this.sloPostMasterForm.value['department'],
        cardexNo: this.sloPostMasterForm.value['cardexNo'],
        schemeNo: this.sloPostMasterForm.value['schemeNo'],
        demand: this.sloPostMasterForm.value['demand'],
        majorHead: this.sloPostMasterForm.value['majorHead'],
        subMajorHead: this.sloPostMasterForm.value['subMajorHead'],
        minorHead: this.sloPostMasterForm.value['minorHead'],
        subHead: this.sloPostMasterForm.value['subHead'],
        detailHead: this.sloPostMasterForm.value['detailHead'],
        objectClass: this.sloPostMasterForm.value['objectClass'],
        officeCategory: this.sloPostMasterForm.value['officeCategory'],
        minister: this.sloPostMasterForm.value['minister']
      });
      this.postMasterDataSource.data = p_data;
    } else {
      this.isSubmitted = true;
    }
  }

  onSearch() {
    if (this.sloPostMasterForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }


  updateFormDepat() {
    // tslint:disable-next-line: no-use-before-declare
    this.dialog.open(DepartmentPostMasterComponent, {
      width: '1600px',
      maxWidth: '92vw',
      data: this.sloPostMasterForm.value,
    });
  }

}



@Component({

  selector: 'app-department-post-master',
  templateUrl: 'department-postMaster.html',
  styleUrls: ['./slo-department-postmaster.component.css']
})
export class DepartmentPostMasterComponent implements OnInit {

  editSloPostMasterForm: FormGroup;
  department = 'Department';
  isSubmitted = false;
  errorMessages = paoMessage;

  department_list: ListValue[] = [
    { value: '1', viewValue: 'A.O. Dir. Of Social Defence ' },
    { value: '2', viewValue: 'A.O.G.S.S.S Bord' },
    { value: '3', viewValue: 'A.O Dir Of Library' }
  ];

  demand_list: ListValue[] = [
    { value: '1', viewValue: '017:Treasury and Accounts Administration' }
  ];

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  subMajorHead_list: ListValue[] = [
    { value: '1', viewValue: '00' }
  ];

  minorHead_list: ListValue[] = [
    { value: '1', viewValue: '095:Directorate of Accounts and Treasuries' },
    { value: '2', viewValue: '096:Pay and Accounts Offices' },
    { value: '3', viewValue: '097:Treasury Establishment' },
  ];

  subHead_list: ListValue[] = [
    { value: '1', viewValue: '01:GES-1 Directorate' },
    { value: '2', viewValue: '01:Pay and Accounts offices ' },
    { value: '3', viewValue: '01:Treasuries' },
  ];

  detailHead_list: ListValue[] = [
    { value: '1', viewValue: '00:GES-1 Directorate' },
    { value: '2', viewValue: '00:Pay and Accounts offices' },
    { value: '3', viewValue: '00:Treasuries' },
  ];

  objectClass_list: ListValue[] = [
    { value: '1', viewValue: 'C0' },
    { value: '2', viewValue: 'C1' },
    { value: '3', viewValue: 'C2' },
    { value: '4', viewValue: 'C3' },
    { value: '5', viewValue: 'C4' },
    { value: '6', viewValue: 'C5' },
    { value: '7', viewValue: 'C6' },
    { value: '7', viewValue: 'C7' }
  ];

  officeCategory_list: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IPS/IAS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' }
  ];

  minister_list: ListValue[] = [
    { value: '1', viewValue: 'Minister 0' },
    { value: '2', viewValue: 'Minister 2' },
    { value: '3', viewValue: 'Minister 3' },
    { value: '4', viewValue: 'Minister 4' }
  ];

  TypeList: ListValue[] = [
    { value: '1', viewValue: 'Permanent' },
    { value: '2', viewValue: 'Temporary' },
  ];
  payList: ListValue[] = [
    { value: '1', viewValue: 'Fifth Pay' },
    { value: '2', viewValue: 'Sixth Pay' },
    { value: '3', viewValue: 'Seventh Pay' },
  ];

  payBandList: ListValue[] = [
    { value: '1', viewValue: '2500' },
    { value: '2', viewValue: '3050' },
    { value: '3', viewValue: '3050-4590' },
    { value: '4', viewValue: '3500' },
  ];
  gradePayList: ListValue[] = [
    { value: '1', viewValue: '1300' },
    { value: '2', viewValue: '1400' },
    { value: '3', viewValue: '1500' },
    { value: '4', viewValue: '1650' },
    { value: '5', viewValue: '1800' },
    { value: '6', viewValue: '1900' },
    { value: '7', viewValue: '2000' },
    { value: '8', viewValue: '2400' },
  ];

  designationList: ListValue[] = [
    { value: '1', viewValue: 'Account Clerk' },
    { value: '2', viewValue: 'ACP' },
    { value: '3', viewValue: 'Account Controller' },
    { value: '4', viewValue: 'Account Officer - Class I' },
    { value: '5', viewValue: 'Account Officer - Class II' },
    { value: '6', viewValue: 'Account Officer' },
    { value: '7', viewValue: 'Account Officer (AG)' },
    { value: '8', viewValue: 'Account Officer (ITO)' },
  ];


  departmentCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  objClassCtrl: FormControl = new FormControl();
  officeCategoryCtrl: FormControl = new FormControl();
  ministerCtrl: FormControl = new FormControl();

  displayedColumns: string[] = ['select', 'position', 'oderNo', 'type', 'designation',
    'sanction', 'parentRec', 'pay', 'payBand', 'gradePay', 'startDate', 'endDate', 'modify'];

  addDepartMentPostingColumns: string[] = ['oderNo', 'type', 'designation',
    'sanction', 'parentRec', 'pay', 'payBand', 'gradePay', 'startDate', 'endDate', 'modify'];

  dataSource = new MatTableDataSource<PeriodicElement>([]);
  postMasterDataSource = new MatTableDataSource(postMaster);
  selection = new SelectionModel<PeriodicElement>(true, []);

  private paginator: MatPaginator;

  iconisSearch = true;
  public toggleButton = true;
  required = false;

  constructor(public dialogRef: MatDialogRef<DepartmentPostMasterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder,) {

  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }


  ngOnInit() {

    this.editSloPostMasterForm = this.fb.group({
      department: ['1', Validators.required],
      cardexNo: ['1452'],
      schemeNo: ['000000'],
      demand: ['1', Validators.required],
      majorHead: ['1', Validators.required],
      subMajorHead: ['1', Validators.required],
      minorHead: ['1', Validators.required],
      subHead: ['1', Validators.required],
      detailHead: ['1', Validators.required],
      objectClass: ['1', Validators.required],
      officeCategory: ['1', Validators.required],
      minister: ['1', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addpost() {
    const p_data = this.postMasterDataSource.data;

    p_data.push({
      position: 0,
      oderNo: '12456',
      type: 'Permanent',
      designation: 'Account Clerk',
      sanction: '1',
      parentRec: '',
      pay: 'Sixth Pay',
      payBand: '3500',
      gradePay: '3500',
      startDate: '01/01/2020',
      endDate: '01/04/2020',
    });
    this.dataSource.data = p_data;
  }

  addfiled() {
    this.iconisSearch = false;
    this.toggleButton = false;
  }
  saveclick() {
    this.toggleButton = true;
    this.iconisSearch = true;
  }


  deletpostRow(index) {
    this.postMasterDataSource.data.splice(index, 1);
    this.postMasterDataSource = new MatTableDataSource(
      this.postMasterDataSource.data
    );
  }


  typeSelection(data) {
    console.log(data);
    if (data.value === '1') {
      this.required = false;
    }
    if (data.value === '2') {
      this.required = true;
    }
  }
  userCreationForm() {
    if (this.editSloPostMasterForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }
}



