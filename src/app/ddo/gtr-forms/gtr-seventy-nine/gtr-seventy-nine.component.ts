import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DdoDirective } from 'src/app/common/directive/ddo-directive';
import { FundDetails, SanctionOrderDetails } from 'src/app/model/ddo-forms';

@Component({
  selector: 'app-gtr-seventy-nine',
  templateUrl: './gtr-seventy-nine.component.html',
  styleUrls: ['./gtr-seventy-nine.component.css']
})
export class GtrSeventyNineComponent implements OnInit {

  // variables
  gtrfourtyFout = 'FORM G.T.R  79  - Bill for the withdrawal from State Government Employees Group Insurance Scheme, 1981 (Savings Fund)';
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  home = 'Home';
  ddo = 'DDO';
  createBill = 'Create Online Bill';
  billPreForm = 'Bill Preparation Form';
  detailHeaderLable2 = 'GTR - 79 Group Insurance Scheme, 1981 (Savings Fund)';
  tabDisable: Boolean = true;
  selectedIndex: number;
  fileBrowseIndex: number;
  isInputEdpCode = true;
  isDelete = false;

  // date
  todayDate = Date.now();
  maxDate = new Date();

  // directive object for workflow details
  directiveObject = new DdoDirective(this.dialog);

  // form controls
  fundlistCTRL: FormControl = new FormControl();
  group: FormControl = new FormControl();
  date = new FormControl(new Date());

  // lists
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  fundGroupList: ListValue[] = [
    { value: '1', viewValue: 'A' },
    { value: '2', viewValue: 'B' },
    { value: '3', viewValue: 'C' },
    { value: '4', viewValue: 'D' }
  ];
  // lists end


  // Sanctions Order Details
  gtrTbableColumn = ['nameOfGovernmentEmployee',
    'designationOfEmployee',
    'sanctionOrderNo',
    'sanctionOrderDate',
    'deathDate',
    'retirementDate'];
  sanctionOrderList: SanctionOrderDetails[] = [
    {
      nameOfGovernmentEmployee: 'ABC Employee',
      designationOfEmployee: 'Teacher',
      sanctionOrderNo: '', sanctionOrderDate: '', deathDate: '', retirementDate: ''
    },
  ];
  gtrDetailDataSource = new MatTableDataSource<SanctionOrderDetails>(this.sanctionOrderList);
  // Sanctions Order Details end


  // fund details
  fundTbableColumn = ['group', 'amountPayableInsuranceFund', 'fromDate', 'toDate', 'ramarks', 'action'];
  fundList: FundDetails[] = [
    { group: '', amountPayableInsuranceFund: '', fromDate: '', toDate: '', ramarks: '' }
  ];
  fundDataSource = new MatTableDataSource<FundDetails>(this.fundList);
  // fund details end

  // constructor
  constructor(public dialog: MatDialog, private router: Router) { }

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

  // reset form
  resetForm() { }

  // add fund
  addFund() {
    const p_data = this.fundDataSource.data;
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      group: '',
      amountPayableInsuranceFund: '0.00',
      ramarks: '',
      fromDate: '',
      toDate: ''
    });
    this.fundDataSource.data = p_data;
  }

  // delete fund
  deleteFund(index) {
    this.fundDataSource.data.splice(index, 1);
    this.fundDataSource = new MatTableDataSource(this.fundDataSource.data);
  }

  // add row in sanction order details
  addNewRowDetail() {
    const Col_Data = this.gtrDetailDataSource.data;
    Col_Data.push({
      nameOfGovernmentEmployee: '',
      designationOfEmployee: '',
      sanctionOrderNo: '', sanctionOrderDate: '', deathDate: '', retirementDate: ''
    });
    this.gtrDetailDataSource.data = Col_Data;
  }

  // delete row in santion order details
  deleteDetail(index) {
    this.gtrDetailDataSource.data.splice(index, 1);
    this.gtrDetailDataSource = new MatTableDataSource(
      this.gtrDetailDataSource.data
    );
  }

  // go to report
  goToReport() {
    this.router.navigate(['/ddo/report-gtr-79']);
  }

  // go to cheque list
  gotoCheckList() {
    this.router.navigate(['/ddo/cheque-list']);
  }
}
