import { Component, OnInit, ViewChild } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ScheduleFiveListing } from 'src/app/model/local-fund';



@Component({
  selector: 'app-schedule-five-listing',
  templateUrl: './schedule-five-listing.component.html',
  styleUrls: ['./schedule-five-listing.component.css']
})
export class ScheduleFiveListingComponent implements OnInit {

  searchForm: FormGroup;
  filterElementData: any[];
  selection = new SelectionModel<ScheduleFiveListing>(true, []);

  financialYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();

  majorHeadList: ListValue[] = [
    { value: '0', viewValue: '2059 Public construction' },
    { value: '1', viewValue: '2210 Medical public health' },
    { value: '2', viewValue: '2216 Housing' },
    { value: '3', viewValue: '2236 Nutrition diet' },
    { value: '4', viewValue: '2245 Natural calamity' },
  ];


  districtNameList: ListValue[] = [
    { value: '0', viewValue: 'Ahmedabad' },
    { value: '1', viewValue: 'Amreli' },
    { value: '2', viewValue: 'Anand' },
    { value: '3', viewValue: 'Aravalli' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Botad' },
    { value: '8', viewValue: 'Chhota Udaipur' },
    { value: '9', viewValue: 'Dahod' },
    { value: '10', viewValue: 'Dang' },
    { value: '11', viewValue: 'Devbhoomi Dwarka' },
    { value: '12', viewValue: 'Gandhinagar' },
    { value: '13', viewValue: 'Gir Somnath' },
    { value: '14', viewValue: 'Jamnagar' },
    { value: '15', viewValue: 'Junagadh' },
    { value: '16', viewValue: 'Kutch' },
    { value: '17', viewValue: 'Kheda' },
    { value: '18', viewValue: 'Mahisagar' },
    { value: '19', viewValue: 'Mehsana' },
    { value: '20', viewValue: 'Morbi' },
    { value: '21', viewValue: 'Narmada' },
    { value: '22', viewValue: 'Navsari' },
    { value: '23', viewValue: 'Panchmahal' },
    { value: '24', viewValue: 'Patan' },
    { value: '25', viewValue: 'Porbandar' },
    { value: '26', viewValue: 'Rajkot' },
    { value: '27', viewValue: 'Sabarkantha' },
    { value: '28', viewValue: 'Surat' },
    { value: '29', viewValue: 'Surendranagar' },
    { value: '30', viewValue: 'Tapi' },
    { value: '31', viewValue: 'Vadodara' },
    { value: '32', viewValue: 'Valsad' },
  ];

  financialYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
  ];

  // listing data
  ElementData: ScheduleFiveListing[] = [
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2059 Public construction',
      openingBalance: '11207560',
      income: '21606',
      totalIncome: '11229166',
      amountDeposited: '13022',
      closingBalance: '11216144',
      remarks: 'NA',
      status: 'Pending for Verify'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2210 Medical public health',
      openingBalance: '20433',
      income: '0',
      totalIncome: '20433',
      amountDeposited: '0',
      closingBalance: '20433',
      remarks: 'NA',
      status: 'Pending for Approval'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2216 Housing',
      openingBalance: '6467',
      income: '0',
      totalIncome: '6467',
      amountDeposited: '0',
      closingBalance: '6467',
      remarks: 'NA',
      status: 'Approved'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2236 Nutrition diet',
      openingBalance: '-300',
      income: '0',
      totalIncome: '-300',
      amountDeposited: '0',
      closingBalance: '-300',
      remarks: 'NA',
      status: 'Pending for Verify'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2245 Natural calamity',
      openingBalance: '196486',
      income: '0',
      totalIncome: '196486',
      amountDeposited: '0',
      closingBalance: '196486',
      remarks: 'NA',
      status: 'Pending for Verify'
    }
  ];

  // listing datasource
  dataSource = new MatTableDataSource<ScheduleFiveListing>(this.ElementData);

  // listing column
  displayedColumns: any[] = [
    'serialNo',
    'financialYear',
    'district',
    'majorHead',
    'openingBalance',
    'income',
    'totalIncome',
    'amountDeposited',
    'closingBalance',
    'remarks',
    'status',
    'action'
  ];

  // total column
  displayedColumnsTotal: any[] = [
    'footer1',
    'openingBalance',
    'income',
    'totalIncome',
    'amountDeposited',
    'closingBalance',
    'remarks',
    'status',
    'action'

  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      financialYear: [''],
      districtName: [''],
      majorHead: ['']
    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;

    const financialYearValue = formVal.financialYear;
    const districtNameValue = formVal.districtName;
    const majorHeadValue = formVal.majorHead;

    if (formVal.financialYear !== '' && formVal.financialYear != null) {

      const financialYear = this.financialYearList[financialYearValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.financialYear.toLowerCase() === financialYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.districtName !== '' && formVal.districtName != null) {

      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }
    if (formVal.majorHead !== '' && formVal.majorHead != null) {

      const majorHead = this.majorHeadList[majorHeadValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.majorHead.toLowerCase() === majorHead.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (
      (formVal.financialYear === '' || formVal.financialYear == null) &&
      (formVal.districtName === '' || formVal.districtName == null) &&
      (formVal.majorHead === '' || formVal.majorHead == null)
    ) {
      this.dataSource = new MatTableDataSource<any>(this.ElementData);
    }
  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

  // calculate opening balance
  calculateOpeningBalance() {
    let openingBalance = 0;
    this.dataSource.data.forEach((element1) => {
      openingBalance = Number(openingBalance) + Number(element1.openingBalance);
    });

    return openingBalance;
  }

  // calculate income
  calculateIncome() {
    let income = 0;
    this.dataSource.data.forEach((element1) => {
      income = Number(income) + Number(element1.income);
    });

    return income;
  }

  // calculate total income
  calculateTotalIncome() {
    let totalIncome = 0;
    this.dataSource.data.forEach((element1) => {
      totalIncome = Number(totalIncome) + Number(element1.totalIncome);
    });

    return totalIncome;
  }

  // calculate amount deposited
  calculateAmountDeposited() {
    let amountDeposited = 0;
    this.dataSource.data.forEach((element1) => {
      amountDeposited = Number(amountDeposited) + Number(element1.amountDeposited);
    });

    return amountDeposited;
  }

  // calculate closing balance
  calculateClosingBalance() {
    let closingBalance = 0;
    this.dataSource.data.forEach((element1) => {
      closingBalance = Number(closingBalance) + Number(element1.closingBalance);
    });

    return closingBalance;
  }

  // calculate total income value
  calculateTotalIncomeValue() {
    let totalIncome = 0;
    this.dataSource.data.forEach((element1) => {
      totalIncome = Number(totalIncome) + Number(element1.totalIncome);
    });

    return totalIncome;
  }

  // checkbox related method
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;

  }

}




