import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ScheduleFourLoanReceived } from 'src/app/model/local-fund';



@Component({
  selector: 'app-schedule-four-report',
  templateUrl: './schedule-four-report.component.html',
  styleUrls: ['./schedule-four-report.component.css']
})
export class ScheduleFourReportComponent implements OnInit {
  searchForm: FormGroup;
  filterElementData: any[];

  financialYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  officeNameCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();

  officeNameList: ListValue[] = [
    { value: '0', viewValue: 'Development Commissioner' },
    { value: '1', viewValue: 'Primary Education Director' },
    { value: '2', viewValue: 'Revenue collector' },
  ];
  majorHeadList: ListValue[] = [
    { value: '0', viewValue: '6215 CDP housing' },
    { value: '1', viewValue: '7615 Loan to primary teachers' },
    { value: '2', viewValue: '7616 Other loan to primary teachers' },
    { value: '3', viewValue: '6215 CDP housing' },
    { value: '4', viewValue: 'V.H.P Loan' },
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
  ElementData: ScheduleFourLoanReceived[] = [
    {
      district: 'Rajkot',
      financialYear: '2013-14',
      majorHead: '6215 CDP housing',
      officeName: 'Development Commissioner',
      openingBalance: 100000,
      loanReceived: 200000,
      refundedLoan: 50000,
      recoveryLoan: 0,
      totalLoanIncome: 350000,
      total: 600000,
      districtPanchayatExpenditure: 0,
      talukaRefund: 0,
      refund: 0,
      totalExpense: 0,
      closingBalance: 2350,
      remarks: 'NA'
    },
    {
      district: 'Rajkot',
      financialYear: '2013-14',
      majorHead: '7615 Loan to primary teachers',
      officeName: 'Primary Education Director',
      openingBalance: 2500000,
      loanReceived: 1000000,
      refundedLoan: 100000,
      recoveryLoan: 0,
      totalLoanIncome: 3600000,
      total: 4700000,
      districtPanchayatExpenditure: 0,
      talukaRefund: 0,
      refund: 0,
      totalExpense: 0,
      closingBalance: 47212767,
      remarks: 'NA'
    },
    {
      district: 'Rajkot',
      financialYear: '2013-14',
      majorHead: '7616 Other loan to primary teachers',
      officeName: 'Primary Education Director',
      openingBalance: 300000,
      loanReceived: 1000000,
      refundedLoan: 0,
      recoveryLoan: 0,
      totalLoanIncome: 1300000,
      total: 2300000,
      districtPanchayatExpenditure: 7513400,
      talukaRefund: 0,
      refund: 14111600,
      totalExpense: 21625000,
      closingBalance: -43217658,
      remarks: 'NA'
    },
    {
      district: 'Rajkot',
      financialYear: '2013-14',
      majorHead: '6215 CDP housing',
      officeName: '',
      openingBalance: 4500000,
      loanReceived: 500000,
      refundedLoan: 100000,
      recoveryLoan: 0,
      totalLoanIncome: 5100000,
      total: 5700000,
      districtPanchayatExpenditure: 0,
      talukaRefund: 0,
      refund: 0,
      totalExpense: 0,
      closingBalance: 135000,
      remarks: 'NA'
    },
    {
      district: 'Rajkot',
      financialYear: '2013-14',
      majorHead: 'V.H.P Loan',
      officeName: 'Revenue collector',
      openingBalance: 7000000,
      loanReceived: 1500000,
      refundedLoan: 500000,
      recoveryLoan: 0,
      totalLoanIncome: 9000000,
      total: 11000000,
      districtPanchayatExpenditure: 0,
      talukaRefund: 0,
      refund: 0,
      totalExpense: 0,
      closingBalance: 1267275,
      remarks: 'NA'
    }
  ];

  // listing dataSource
  dataSource = new MatTableDataSource<ScheduleFourLoanReceived>(this.ElementData);

  // listing dataSource
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'financialYear',
    'majorHead',
    'officeName',
    'openingBalance',
    'loanReceived',
    'refundedLoan',
    'recoveryLoan',
    'totalLoanIncome',
    'total',
    'districtPanchayatExpenditure',
    'talukaRefund',
    'refund',
    'totalExpense',
    'closingBalance',
    'remarks',
    // 'action'
  ];

  // total footer column
  displayedColumnsTotal: any[] = [
    'footer1',
    'openingBalance',
    'loanReceived',
    'refundedLoan',
    'recoveryLoan',
    'totalLoanIncome',
    'total',
    'districtPanchayatExpenditure',
    'talukaRefund',
    'refund',
    'totalExpense',
    'closingBalance',
    'remarks',
    // 'action'

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
      officeName: [''],
      majorHead: ['']
    });
  }

  // calculate opening balance
  calculateOpeningBalance() {
    let openingBalance = 0;
    this.dataSource.data.forEach((element1) => {
      openingBalance = Number(openingBalance) + Number(element1.openingBalance);
    });

    return openingBalance;
  }

  // calculate loan received
  calculateLoanReceived() {
    let loanReceived = 0;
    this.dataSource.data.forEach((element1) => {
      loanReceived = Number(loanReceived) + Number(element1.loanReceived);
    });

    return loanReceived;
  }

  // calculate refund loan
  calculateRefundLoan() {
    let refundedLoan = 0;
    this.dataSource.data.forEach((element1) => {
      refundedLoan = Number(refundedLoan) + Number(element1.refundedLoan);
    });

    return refundedLoan;
  }

  // calculate recovery loan
  calculateRecoveryLoan() {
    let recoveryLoan = 0;
    this.dataSource.data.forEach((element1) => {
      recoveryLoan = Number(recoveryLoan) + Number(element1.recoveryLoan);
    });

    return recoveryLoan;
  }

  // calculate total loan income
  calculateTotalLoanIncome() {
    let totalLoanIncome = 0;
    this.dataSource.data.forEach((element1) => {
      totalLoanIncome = Number(totalLoanIncome) + Number(element1.totalLoanIncome);
    });

    return totalLoanIncome;
  }

  // calculate total
  calculateTotal() {
    let total = 0;
    this.dataSource.data.forEach((element1) => {
      total = Number(total) + Number(element1.total);
    });

    return total;
  }

  // calculate district panchayat expenditure
  calculateDistrictPanchayatExpenditure() {
    let districtPanchayatExpenditure = 0;
    this.dataSource.data.forEach((element1) => {
      districtPanchayatExpenditure = Number(districtPanchayatExpenditure) + Number(element1.districtPanchayatExpenditure);
    });

    return districtPanchayatExpenditure;
  }

  // calculate taluka refund
  calculateTalukaRefund() {
    let talukaRefund = 0;
    this.dataSource.data.forEach((element1) => {
      talukaRefund = Number(talukaRefund) + Number(element1.talukaRefund);
    });

    return talukaRefund;
  }

  // calculate refund
  calculateRefund() {
    let refund = 0;
    this.dataSource.data.forEach((element1) => {
      refund = Number(refund) + Number(element1.refund);
    });

    return refund;

  }

  // calculate total expense
  calculateTotalExpense() {
    let totalExpense = 0;
    this.dataSource.data.forEach((element1) => {
      totalExpense = Number(totalExpense) + Number(element1.totalExpense);
    });

    return totalExpense;
  }

  // calculate closing balance
  calculateClosingBalance() {
    let closingBalance = 0;
    this.dataSource.data.forEach((element1) => {
      closingBalance = Number(closingBalance) + Number(element1.closingBalance);
    });

    return closingBalance;
  }

  // search data on basis of search critxeria
  onSearch() {
    const formVal = this.searchForm.value;

    const financialYearValue = formVal.financialYear;
    const districtNameValue = formVal.districtName;
    const officeNameValue = formVal.officeName;
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

    if (formVal.officeName !== '' && formVal.officeName != null) {

      const officeName = this.officeNameList[officeNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.officeName.toLowerCase() === officeName.toLowerCase());
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
      (formVal.majorHead === '' || formVal.majorHead == null) &&
      (formVal.officeName === '' || formVal.officeName == null)




    ) {
      this.dataSource = new MatTableDataSource<any>(this.ElementData);
    }

  }

  // clear form data
  clearForm() {
    this.searchForm.reset();
  }

  // on click on export to pdf button
  captureScreen() {}

  // on click on generate pdf
  goToReport() { }


}
