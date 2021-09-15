
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { GtrEightyFiveHbaMca } from 'src/app/model/ddo-forms';


@Component({
  selector: 'app-hba-mca',
  templateUrl: './hba-mca.component.html',
  styleUrls: ['./hba-mca.component.css']
})
export class HbaMcaComponent implements OnInit {

  // variables
  gtrfourtyFout = 'Form GTR 85 H.B.A / M.C.A - Advance Bill ';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'DDO';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  detailHeaderLable2 = 'Scholarship / Stipend / Relief Bill Details';
  adBill;
  department;
  hod;
  AdvanceAmount;
  tabDisable: Boolean = true;
  selectedIndex: number;
  fileBrowseIndex: number;

  // Date
  todayDate = Date.now();
  maxDate = new Date();

  // form controls
  advanceBillCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  hodCtrl: FormControl = new FormControl();
  empTypeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  ruleCtrl: FormControl = new FormControl();
  loanCtrl: FormControl = new FormControl();
  mileStoneCtrl: FormControl = new FormControl();
  newAccountCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  date = new FormControl(new Date());

  // lists  start
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  billType: ListValue[] = [
    { value: '1', viewValue: ' House Building Advance' },
    { value: '2', viewValue: 'Motor Conveyance Advance' },
  ];

  departmentList: ListValue[] = [
    { value: '1', viewValue: 'Agriculture and Co-Operation Department' },
    { value: '2', viewValue: 'Education Department' },
    { value: '3', viewValue: 'Energy And Petrochemicals Department' },
    { value: '4', viewValue: 'Food, Civil Supplies and Consumer Affairs Department' },
    { value: '5', viewValue: 'Forest And Environment Department' },
    { value: '6', viewValue: 'Gujarat Legislature Department' }
  ];

  hodList: ListValue[] = [
    { value: '1', viewValue: 'Agriculture and Co-Operation Department' },
    { value: '2', viewValue: 'Director Of Agriculture, Gandhinagar' },
    { value: '3', viewValue: 'Director Of Sugar Co-Operative, Department' },
    { value: '4', viewValue: 'Executive Officer, Inspection and Milk Audit Board' },
    { value: '5', viewValue: 'Registrar, Guj. State Co. Op. Tribunal' }
  ];
  classList: ListValue[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' },
    { value: '5', viewValue: 'Other' }
  ];
  empTypeList: ListValue[] = [
    { value: '1', viewValue: 'IAS' },
    { value: '2', viewValue: 'IPS' },
    { value: '3', viewValue: 'IFS' },
    { value: '4', viewValue: 'GAS' },
    { value: '5', viewValue: 'Other' }
  ];
  statusList: ListValue[] = [
    { value: '1', viewValue: 'Temporary' },
    { value: '2', viewValue: 'Permanent' },
  ];

  ruleList: ListValue[] = [
    { value: '1', viewValue: 'State' },
    { value: '2', viewValue: 'Central' },
  ];
  loanList: ListValue[] = [
    { value: '1', viewValue: 'Scooter' },
    { value: '2', viewValue: 'Car' },
  ];

  mileStoneList: ListValue[] = [
    { value: '1', viewValue: 'First Advance' },
    { value: '2', viewValue: 'Second Advance' },
    { value: '3', viewValue: 'Third Advance' },
    { value: '4', viewValue: 'Fourth Advance' },
    { value: '5', viewValue: 'Further Advances' }
  ];
  genderTypeList: ListValue[] = [
    { value: '1', viewValue: 'Male' },
    { value: '2', viewValue: 'FeMale' },
  ];
  newAccountTypeList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  // list end

  // gtr-85 listing
  gtrDetailList: GtrEightyFiveHbaMca[] = [
    {
      establishment: '',
      shortName: '',
      firstName: '0',
      middleName: '',
      lastName: '',
      gender: '',
      birthDay: '',
      designation: '',
      class: '',
      empType: '',
      status: '',
      gpfNo: '',
      basicPay: '',
      sorderNo: '',
      sDate: '',
      rule: '',
      purposeLoan: '',
      mileStone: '',
      AdvanceAmount: 0,
      totalLon: '',
      installment: '',
      createAc: '',
      remarks: ''
    },
  ];

  gtrTbableColumn: string[] = [
    'establishment',
    'shortName',
    'firstName',
    'middleName',
    'lastName',
    'gender',
    'birthDay',
    'designation',
    'class',
    'empType',
    'status',
    'gpfNo',
    'basicPay',
    'sorderNo',
    'sDate',
    'rule',
    'purposeLoan',
    'mileStone',
    'AdvanceAmount',
    'totalLon',
    'installment',
    'createAc',
    'remarks',
    'action'
  ];
  gtrDetailDataSource = new MatTableDataSource<GtrEightyFiveHbaMca>(this.gtrDetailList);



  // directive object for workfkow
  directiveObject = new DdoDirective(this.dialog);

  // constructor
  constructor(public dialog: MatDialog, private el: ElementRef, private router: Router) {

  }
  ngOnInit() {
  }

  // get tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  // calculate total advance amount
  totalAdvanceAmount(): number {
    let AdvanceAmount = 0;
    this.gtrDetailDataSource.data.forEach((element) => {
      AdvanceAmount = AdvanceAmount + Number(element.AdvanceAmount);
    });
    return AdvanceAmount;
  }

  // reset form
  resetForm() {
  }

  // add new row in gtr-85 hba-mca details listing
  addNewRowDetail() {
    const Col_Data = this.gtrDetailDataSource.data;
    Col_Data.push({
      establishment: '',
      shortName: '',
      firstName: '0',
      middleName: '',
      lastName: '',
      gender: '',
      birthDay: '',
      designation: '',
      class: '',
      empType: '',
      status: '',
      gpfNo: '',
      basicPay: '',
      sorderNo: '',
      sDate: '',
      rule: '',
      purposeLoan: '',
      mileStone: '',
      AdvanceAmount: 0,
      totalLon: '',
      installment: '',
      createAc: '',
      remarks: ''
    });
    this.gtrDetailDataSource.data = Col_Data;
  }

  // delete row in gtr-85 hba- mca details listing
  deleteDetailDataRow(index) {
    this.gtrDetailDataSource.data.splice(index, 1);
    this.gtrDetailDataSource = new MatTableDataSource(this.gtrDetailDataSource.data);
  }

  // click on view bill navigates to gtr-85 reports
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-85']);
  }
}

