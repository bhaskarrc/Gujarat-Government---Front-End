import { CommonListing } from './../../model/common-listing';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import * as cloneDeep from 'lodash/cloneDeep';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';


export interface HeaderElement {
  label: string | '';
  value: string | '';
}


export interface DDOList {
  checkbox: Boolean;
  ddoName: string;
  ddoProposedAmt: number | '-';
  ddoReferenceNo: string;
  ddoTransactionDate: string;
  hodProposedAmt: number | string;
  receipt: number | string;
  disbursement: number | string;
  receiptDept: number | string;
  disbursementDept: number | string;
}

export interface DDONotProposedList {
  checkbox: Boolean;
  ddoName: string;
  ddoProposedAmt: string;
}

const DDO_List: DDOList[] = [
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'Director of Agriculture', receipt: '400.00', disbursement: '400.00', ddoProposedAmt: 451.52, hodProposedAmt: '0.00',
   ddoReferenceNo: '19-20/BUD/RE/001', ddoTransactionDate: '18-Sep-2019 15:48', receiptDept: '0.00', disbursementDept: '0.00'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'Director of Horticulture', receipt: '401.00', disbursement: '410.00', ddoProposedAmt: 235.52, hodProposedAmt: '0.00',
   ddoReferenceNo: '19-20/BUD/RE/002', ddoTransactionDate: '16-Sep-2019 10:48', receiptDept: '0.00', disbursementDept: '0.00'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'Director of Animal Husbandry', receipt: '402.00', disbursement: '411.00', ddoProposedAmt: 450.52, hodProposedAmt: '0.00',
   ddoReferenceNo: '19-20/BUD/RE/003', ddoTransactionDate: '10-Sep-2019 18:00', receiptDept: '0.00', disbursementDept: '0.00'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'Registrar of Co-operative Societies', receipt: '403.00', disbursement: '412.00', ddoProposedAmt: 451.52, hodProposedAmt: '0.00',
   ddoReferenceNo: '19-20/BUD/RE/004', ddoTransactionDate: '18-Sep-2019 15:48', receiptDept: '0.00', disbursementDept: '0.00'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'Commissioner of Fisheries', receipt: '404.00', disbursement: '413.00', ddoProposedAmt: 99.52, hodProposedAmt: '0.00',
   ddoReferenceNo: '19-20/BUD/RE/005', ddoTransactionDate: '16-Sep-2019 10:48', receiptDept: '0.00', disbursementDept: '0.00'},
  // { checkbox: false, ddoName: 'HoD / CO 6', ddoProposedAmt: 451.52,
  //  hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/14', ddoTransactionDate: '10-Sep-2019 18:00' },
  // { checkbox: false, ddoName: 'HoD / CO 7', ddoProposedAmt: 45.52,
  //  hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '10-Sep-2019 18:00' },
  // { checkbox: false, ddoName: 'HoD / CO 8', ddoProposedAmt: 41.52,
  //  hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/003', ddoTransactionDate: '18-Sep-2019 15:48' },
  // { checkbox: false, ddoName: 'HoD / CO 9', ddoProposedAmt: 51.52,
  //  hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/007', ddoTransactionDate: '16-Sep-2019 10:48' },
  // { checkbox: false, ddoName: 'HoD / CO 10', ddoProposedAmt: 4510.52,
  //  hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '16-Sep-2019 10:48' },
  // { checkbox: false, ddoName: 'HoD / CO 11', ddoProposedAmt: 1000.00,
  //  hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/096', ddoTransactionDate: '10-Sep-2019 18:00' },
  // { checkbox: false, ddoName: 'HoD / CO 12', ddoProposedAmt: 2000.00,
  //  hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '18-Sep-2019 15:48' },
  // { checkbox: false, ddoName: 'HoD / CO 13', ddoProposedAmt: 300.00,
  //  hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48' },
  // { checkbox: false, ddoName: 'HoD / CO 14', ddoProposedAmt: '-',
  //  hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48' },
  // { checkbox: false, ddoName: 'HoD / CO 15', ddoProposedAmt: '-',
  //  hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/088', ddoTransactionDate: '16-Sep-2019 10:48' },
  // was till ddoName: 'HoD / CO 33'
];

@Component({
  selector: 'app-hod-co-list',
  templateUrl: './hod-co-list.component.html',
  styleUrls: ['./hod-co-list.component.css']
})
export class HodCoListComponent implements OnInit {

  headerJson: HeaderElement[] = [
    { label: 'Name of Department', value: 'Agriculture , Famers welfare and Co-operation Department' },
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Major Head', value: '0005:Central Goods and Services Tax' },
    { label: 'Sector', value: 'A - Tax Revenue' },
    { label: 'Sub Sector', value: 'Taxes on Income and Expenditure' },
    { label: 'Major Head Receipt Amount', value: '20000' },
  ];
  // dept_list: CommonListing[] = [
  //   { value: '1', viewValue: 'Agriculture Department'},
  //   { value: '2', viewValue: 'Farmers Department'},
  //   { value: '3', viewValue: 'Welfare and Co-operation Department'},
  // ];
  dept_list: CommonListing[] = [
    { value: '1', viewValue: 'Agriculture ,Famers welfare and Co-operation Department'},
  ];
  hodCo_list: CommonListing[] = [
    { value: '1', viewValue: 'Director of Agriculture'},
    { value: '2', viewValue: 'Director of Horticulture'},
    { value: '3', viewValue: 'Director of Animal Husbandry'},
    { value: '4', viewValue: 'Registrar of Co-operative Societies'},
    { value: '5', viewValue: 'Commissioner of Fisheries'},
    { value: '6', viewValue: 'Director of Sugar'},
    { value: '7', viewValue: 'Director of Agriculture Marketing & Rural Finance'},
    { value: '8', viewValue: 'Chief Executive Officer Inspection & Audit Committee'},
    { value: '9', viewValue: 'Gujarat State Co-Operative Tribunal'},
  ];
  listType: string;
  paginationSize: number[] = [5, 10, 20, 50, 100, 200];

  filledList = DDO_List.filter(obj => (obj.ddoProposedAmt).toString() !== '-');

  ddoListDataSource = new MatTableDataSource(this.filledList);

  notFilledList = DDO_List.filter(obj => (obj.ddoProposedAmt).toString() === '-');
  ddoListNotProposedDataSource = new MatTableDataSource(this.notFilledList);
  ddoListColumn: string[] = ['srNo', 'ddoName', 'receipt', 'disbursement', 'ddoReferenceNo', 'ddoTransactionDate'];
  ddoNotProposedListColumn: string[] = ['checkbox', 'srNo', 'ddoName'];
  // ddoNotProposedListColumn: string[] = [];

  // @ViewChild(MatPaginator) ddoListPaginator: MatPaginator;
  @ViewChild(MatSort) ddoListSort: MatSort;

  // @ViewChild(MatPaginator) ddoNotProposedListPaginator: MatPaginator;
  @ViewChild(MatSort) ddoNotProposedListSort: MatSort;

  deptCtrl: FormControl = new FormControl();
  hodCoCtrl: FormControl = new FormControl();
  isSendReminderEnable: Boolean = false;
  selectedIndex: number;
  checkbox: Boolean = false;
  onAdd: Boolean = false;
  percentage;
  amount;
  hodCoForm: FormGroup;
  errorMessages = budgetMessage;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private fb: FormBuilder,
  ) {
    this.route.params.subscribe(resRoute => {
      this.listType = resRoute.type;
      // if (this.listType === 'scheme') {
      //   this.selectedIndex = 0;
      // } else if (this.listType === 'ddo') {
      //   this.selectedIndex = 1;
      // } else {
      //   this.goToSchemeList();
      // }

      const list = cloneDeep(this.filledList).slice(0, resRoute.ddoCount);
      if (resRoute.percentage) {
        this.percentage = resRoute.percentage;
        list.forEach(obj => {
          obj.hodProposedAmt = ((obj.ddoProposedAmt * resRoute.percentage) / 100);
        });
      }

      if (resRoute.amount) {
        this.amount = resRoute.amount;
        console.log(this.amount);

        list.forEach(obj => {
          const dataLenght = list.data;
          obj.hodProposedAmt = resRoute.amount;
        });
      }

      this.ddoListDataSource = new MatTableDataSource(list);

      const list1 = cloneDeep(DDO_List).slice(resRoute.ddoCount, (DDO_List.length));
      list1.forEach(obj => {
        obj.ddoProposedAmt = '-';
      });
      this.ddoListNotProposedDataSource = new MatTableDataSource(list1);

      // this.ddoListDataSource.paginator = this.ddoListPaginator;
      this.ddoListDataSource.sort = this.ddoListSort;
      // this.ddoListNotProposedDataSource.paginator = this.ddoNotProposedListPaginator;
      this.ddoListNotProposedDataSource.sort = this.ddoNotProposedListSort;
    });

  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.hodCoForm = this.fb.group({
      dept: ['', Validators.required],
      hodCo: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    this.ddoListDataSource.sort = this.ddoListSort;
    // this.ddoListDataSource.paginator = this.ddoListPaginator;
    this.ddoListNotProposedDataSource.sort = this.ddoNotProposedListSort;
    // this.ddoListNotProposedDataSource.paginator = this.ddoNotProposedListPaginator;
  }

  // getTabIndex (tabIndex) {
  //   this.selectedIndex = tabIndex;
  // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ddoListDataSource.filter = filterValue;
  }


  goToSchemeList() {
    this.router.navigate(['/budget/receipt-consolidate-list']);
  }

  loadDetailView(data) {
    this.router.navigate(['/budget/receipt-consolidate-name-view', { percentage: this.percentage, amount: this.amount }]);

  }

  loadCreateEstimatePage(data) {
    this.router.navigate(['standing-charge-estimate']);
  }
  decimalPoint(data, key) {
    data[key] = Number(data[key]).toFixed(2);
  }
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }

  }

  checkboxValueChange() {
    let cnt = 0;
    this.ddoListDataSource.data.forEach((element, index) => {
      if (element['checkbox']) {
        cnt++;
      }
    });
    this.isSendReminderEnable = (cnt > 0) ? true : false;
  }

  sendReminder() {
    this.toastr.success('Reminder mail sent to the selected DDO\'s');
  }

  selectAll() {
    this.ddoListNotProposedDataSource.data.forEach(obj => {
      obj.checkbox = this.checkbox;
    });
    this.isSendReminderEnable = this.checkbox;
  }

  checkboxValueNotProposedChange() {
    let cnt = 0;
    this.ddoListNotProposedDataSource.data.forEach((element, index) => {
      if (element['checkbox']) {
        cnt++;
      }
    });
    this.isSendReminderEnable = (cnt > 0) ? true : false;
  }

  sendReminderNotProposed() {
    this.toastr.success('Reminder mail sent to the selected DDO\'s');
  }

  calcAmtProposedByDdoReceipt(data): number {
    let sum = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.ddoListDataSource.data.forEach((element, index) => {
      sum = sum + Number(element.receipt);
    });
    return sum;
  }

  calcAmtProposedByDdoDisbursement(data): number {
    let sum = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.ddoListDataSource.data.forEach((element, index) => {
      sum = sum + Number(element.disbursement);
    });
    return sum;
  }

  calcAmtProByDeptReceipt(data): number {
    let sum = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.ddoListDataSource.data.forEach((element, index) => {
      sum = sum + Number(element.receiptDept);
    });
    return sum;
  }

  calcAmtProByDeptDisb(data): number {
    let sum = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.ddoListDataSource.data.forEach((element, index) => {
      sum = sum + Number(element.disbursementDept);
    });
    return sum;
  }

  goToDashboard() {

  }

  whenAddClick() {
    this.onAdd = true;
  }

}
