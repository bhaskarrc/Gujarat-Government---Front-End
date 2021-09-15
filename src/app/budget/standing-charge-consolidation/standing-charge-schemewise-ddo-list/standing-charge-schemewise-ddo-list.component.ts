import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import * as cloneDeep from 'lodash/cloneDeep';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { HeaderElement } from 'src/app/model/budget';



const DDO_List: any[] = [
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 1', ddoProposedAmt: 451.52, hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/001', ddoTransactionDate: '18-Sep-2019 15:48'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 2', ddoProposedAmt: 235.52, hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/061', ddoTransactionDate: '16-Sep-2019 10:48'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 3', ddoProposedAmt: 450.52, hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '10-Sep-2019 18:00'},
  // tslint:disable-next-line: max-line-length
  { checkbox: false, ddoName: 'DDO 4', ddoProposedAmt: 451.52, hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/007', ddoTransactionDate: '18-Sep-2019 15:48'},
  { checkbox: false, ddoName: 'Accounts Officer, Gujarat Municipal Finance Board, Gandhinagar',
   ddoProposedAmt: 99.52, hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '16-Sep-2019 10:48'},
  { checkbox: false, ddoName: 'Principal Judge, Family Court, Ahmedabad, Ahmedabad City',
   ddoProposedAmt: 451.52, hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/14', ddoTransactionDate: '10-Sep-2019 18:00'},
  { checkbox: false, ddoName: 'Public Prosecutor, Public Prosecutor Office, Ahmedabad',
   ddoProposedAmt: 45.52, hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/151', ddoTransactionDate: '10-Sep-2019 18:00'},
  { checkbox: false, ddoName: 'Accounts Officer, Commissioner, Rural Labour, Gandhinagar',
   ddoProposedAmt: 41.52, hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/003', ddoTransactionDate: '18-Sep-2019 15:48'},
  { checkbox: false, ddoName: 'Under Secretary, Forest & Environment Department, Gandhinagar',
   ddoProposedAmt: 51.52, hodProposedAmt: 0, ddoReferenceNo: '19-20/BUD/SCE/007', ddoTransactionDate: '16-Sep-2019 10:48'},
];


@Component({
  selector: 'app-standing-charge-schemewise-ddo-list',
  templateUrl: './standing-charge-schemewise-ddo-list.component.html',
  styleUrls: ['./standing-charge-schemewise-ddo-list.component.css']
})
export class StandingChargeSchemewiseDdoListComponent implements OnInit, AfterViewInit {

  headerJson: HeaderElement[] = [
    {label: 'Financial Year', value: '2019-2020'},
    {label: 'Demand', value: '010: Other expenditure pertaining to Education Department'},
    {label: 'Book Publication No.', value: '04: Education Department'},
    {label: 'Revenue/Capital', value: 'Revenue'},
    {label: 'Major Head', value: '2205: Art and Culture'},
    {label: 'Sub Major Head', value: '00: '},
    {label: 'Minor Head', value: '101: Fine Arts Education'},
    {label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati'},
    {label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati'},
    {label: 'Charged/Voted', value: 'Voted'},
  ];
  ddoEo_list: CommonListing[] = [
    { value: '1', viewValue: 'Accounts Officer, Gujarat Municipal Finance Board, Gandhinagar'},
    { value: '2', viewValue: 'Principal Judge, Family Court, Ahmedabad, Ahmedabad City'},
    { value: '3', viewValue: 'Public Prosecutor, Public Prosecutor Office, Ahmedabad'},
    { value: '4', viewValue: 'Accounts Officer, Commissioner, Rural Labour, Gandhinagar'},
    { value: '5', viewValue: 'Under Secretary, Forest & Environment Department, Gandhinagar'},
  ];
  listType: string;
  paginationSize: number[] = [5, 10, 20, 50, 100, 200];

  filledList = DDO_List.filter(obj => (obj.ddoProposedAmt).toString() !== '-' );

  ddoListDataSource = new MatTableDataSource(this.filledList);

  notFilledList = DDO_List.filter(obj => (obj.ddoProposedAmt).toString() === '-' );
  ddoListNotProposedDataSource = new MatTableDataSource(this.notFilledList);

  ddoListColumn: string[] = ['srNo', 'ddoName', 'ddoProposedAmt', 'hodProposedAmt', 'ddoReferenceNo', 'ddoTransactionDate'];
  ddoNotProposedListColumn: string[] = ['checkbox', 'srNo',  'ddoName'];

  @ViewChild(MatSort) ddoListSort: MatSort;

  @ViewChild(MatSort) ddoNotProposedListSort: MatSort;

  ddoEoCtrl: FormControl = new FormControl();
  isSendReminderEnable: Boolean = false;
  selectedIndex: number;
  checkbox: Boolean = false;
  onAdd: Boolean = false;
  percentage;
  amount;
  schemewiseDdo: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private fb: FormBuilder,
  ) {
    this.route.params.subscribe(resRoute => {
      this.listType = resRoute.type;

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

      this.ddoListDataSource.sort = this.ddoListSort;
      this.ddoListNotProposedDataSource.sort = this.ddoNotProposedListSort;
    });

  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.schemewiseDdo = this.fb.group({
      ddoEo: ['', Validators.required],
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
    this.router.navigate(['/budget/standing-charge-consolidate/true']);
  }

  loadDetailView (data) {
    this.router.navigate(['/budget/standing-charge-consolidate-name-view', {percentage: this.percentage, amount: this.amount}]);

  }

  loadCreateEstimatePage(data) {
    this.router.navigate(['standing-charge-estimate']);
  }

  checkboxValueChange () {
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

  checkboxValueNotProposedChange () {
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

  calcAmtProposedByDDO(data): number {
    let calcAmtProposedByDDO = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.ddoListDataSource.data.forEach((element, index) => {
      calcAmtProposedByDDO = calcAmtProposedByDDO + Number(element.ddoProposedAmt);
    });
    return calcAmtProposedByDDO;
  }

  calcAmtProposedByHOD(data): number {
    let calcAmtProposedByHOD = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.ddoListDataSource.data.forEach((element, index) => {
      calcAmtProposedByHOD = calcAmtProposedByHOD + Number(element.hodProposedAmt);
    });
    return calcAmtProposedByHOD;
  }

  goToDashboard() {

  }

  whenAddClick() {
    this.onAdd = true;
  }

}
