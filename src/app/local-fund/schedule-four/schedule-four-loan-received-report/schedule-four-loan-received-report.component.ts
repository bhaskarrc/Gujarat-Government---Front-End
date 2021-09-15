import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { ScheduleFourLoanReceived } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';



@Component({
  selector: 'app-schedule-four-loan-received-report',
  templateUrl: './schedule-four-loan-received-report.component.html',
  styleUrls: ['./schedule-four-loan-received-report.component.css']
})
export class ScheduleFourLoanReceivedReportComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  scheduleFour: FormGroup;
  openingBalanceValue = 10000;
  todayExpenseValue = null;
  todayValue = null;
  errorMessages = lfMessage;
  isSubmitted = false;
  isEditClicked = false;
  indexValue = null;
  isDataUpdated = false;
  financialYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();

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
    { value: '0', viewValue: '2013-14' },
    { value: '1', viewValue: '2014-15' },
    { value: '2', viewValue: '2016-17' },
    { value: '3', viewValue: '2017-18' },
    { value: '4', viewValue: '2018-19' },
    { value: '5', viewValue: '2019-20' },
    { value: '6', viewValue: '2020-21' },
  ];

  majorHeadList: ListValue[] = [
    { value: '0', viewValue: '6215 CDP housing' },
    { value: '1', viewValue: '7615 Loan to primary teachers' },
    { value: '2', viewValue: '7616 Other loan to primary teachers' },
    { value: '3', viewValue: '6215 CDP housing' },
    { value: '4', viewValue: 'V.H.P Loan' },
  ];

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

  dataSource = new MatTableDataSource<ScheduleFourLoanReceived>(this.ElementData);
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
    'action'
  ];
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
    'action'

  ];
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.scheduleFour = this.fb.group({
      financialYear: [''],
      districtName: [''],
      officeName: [''],
      openingBalance: [''],
      loanReceived: [''],
      refundedLoan: [''],
      recoveryLoan: [''],
      totalLoanIncome: [''],
      total: [''],
      districtPanchayatExpenditure: [''],
      talukaRefund: [''],
      refund: [''],
      totalExpense: [''],
      closingBalance: [''],
      remarks: [''],
      majorHead: [''],
    });
  }

  // on click on add button
  add() {
    if (this.scheduleFour.valid) {
      this.isSubmitted = false;
      const districtValue = this.scheduleFour.value.districtName;
      const financialYearValue = this.scheduleFour.value.financialYear;
      const majorHeadValue = this.scheduleFour.value.majorHead;

      // updates table data if data is edited
      if (this.isEditClicked) {
        this.ElementData.splice(this.indexValue, 1, {
          district: this.districtNameList[districtValue].viewValue,
          financialYear: this.financialYearList[financialYearValue].viewValue,
          majorHead: this.majorHeadList[majorHeadValue].viewValue,
          officeName: this.scheduleFour.value.officeName,
          openingBalance: this.openingBalanceValue,
          loanReceived: this.scheduleFour.value.loanReceived,
          refundedLoan: this.scheduleFour.value.refundedLoan,
          recoveryLoan: this.scheduleFour.value.recoveryLoan,
          totalLoanIncome: this.scheduleFour.value.totalLoanIncome,
          total: this.todayValue,
          districtPanchayatExpenditure: this.scheduleFour.value.districtPanchayatExpenditure,
          talukaRefund: this.scheduleFour.value.talukaRefund,
          refund: this.scheduleFour.value.refund,
          totalExpense: this.todayExpenseValue,
          closingBalance: this.scheduleFour.value.closingBalance,
          remarks: this.scheduleFour.value.remarks
        });

        this.dataSource = new MatTableDataSource<ScheduleFourLoanReceived>(this.ElementData);

        this.isEditClicked = false;
        this.isDataUpdated = true;

        // patches default value after editing data
        this.scheduleFour.patchValue({
          financialYear: [''],
          districtName: [''],
          officeName: [''],
          openingBalance: ['1000'],
          loanReceived: [''],
          refundedLoan: [''],
          recoveryLoan: [''],
          totalLoanIncome: [''],
          total: [null],
          districtPanchayatExpenditure: [''],
          talukaRefund: [''],
          refund: [''],
          totalExpense: [''],
          closingBalance: [''],
          remarks: [''],
          majorHead: [''],
        });
      } else {
        this.isDataUpdated = false;
        // add new entry into table
        this.ElementData.push({
          district: this.districtNameList[districtValue].viewValue,
          financialYear: this.financialYearList[financialYearValue].viewValue,
          majorHead: this.majorHeadList[majorHeadValue].viewValue,
          officeName: this.scheduleFour.value.officeName,
          openingBalance: this.openingBalanceValue,
          loanReceived: this.scheduleFour.value.loanReceived,
          refundedLoan: this.scheduleFour.value.refundedLoan,
          recoveryLoan: this.scheduleFour.value.recoveryLoan,
          totalLoanIncome: this.scheduleFour.value.totalLoanIncome,
          total: this.todayValue,
          districtPanchayatExpenditure: this.scheduleFour.value.districtPanchayatExpenditure,
          talukaRefund: this.scheduleFour.value.talukaRefund,
          refund: this.scheduleFour.value.refund,
          totalExpense: this.todayExpenseValue,
          closingBalance: this.scheduleFour.value.closingBalance,
          remarks: this.scheduleFour.value.remarks
        });

        this.dataSource.data = this.dataSource.data;
      }
    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  resetForm() {
    this.scheduleFour.reset();
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

  // calculate closing balancxe
  calculateClosingBalance() {
    let closingBalance = 0;
    this.dataSource.data.forEach((element1) => {
      closingBalance = Number(closingBalance) + Number(element1.closingBalance);
    });
    return closingBalance;
  }

  // calculate total amount
  calculateTotalAmount() {

    // total value if data is edited
    if (this.isEditClicked) {
      const index = this.indexValue;
      const todayValue = this.ElementData[index].total;

      this.todayValue = todayValue;

    } else {
      // after form reset
      if (this.isDataUpdated) {
        this.todayValue = null;
      } else {
        const loanReceived = this.scheduleFour.value.loanReceived;
        const refundedLoan = this.scheduleFour.value.refundedLoan;
        const recoveryLoan = this.scheduleFour.value.recoveryLoan;
        const totalIncome = this.scheduleFour.value.totalLoanIncome;
        let todayValue;
        if (loanReceived !== '' && refundedLoan !== '' && totalIncome !== '' && this.openingBalanceValue !== null && recoveryLoan !== '') {
          todayValue = (
            Number(this.openingBalanceValue) +
            Number(loanReceived) + Number(refundedLoan) +
            Number(totalIncome) + Number(recoveryLoan));
        }
        this.todayValue = todayValue; // new entry is made
      }
    }
    return this.todayValue;
  }

  // calculate total expense amount
  calculateTotalExpenseAmount() {
    const districtPanchayatExpenditure = this.scheduleFour.value.districtPanchayatExpenditure;
    const talukaRefund = this.scheduleFour.value.talukaRefund;
    const refund = this.scheduleFour.value.refund;
    if (districtPanchayatExpenditure !== '' && talukaRefund !== '' && refund !== '') {
      this.todayExpenseValue = Number(districtPanchayatExpenditure) + Number(talukaRefund) + Number(refund);
    }

    return this.todayExpenseValue;
  }

  // show respective row data into form for enabling data editing
  editDetails(index) {
    this.isEditClicked = true;
    this.indexValue = index;
    const financialYearValue = this.ElementData[index].financialYear;
    const districtNameValue = this.ElementData[index].district;
    const majorHeadValue = this.ElementData[index].majorHead;
    const length = Object.keys(this.financialYearList).length;
    const length1 = Object.keys(this.districtNameList).length;
    const length2 = Object.keys(this.majorHeadList).length;
    let financialYear;
    let districtName;
    let majorHead;

    for (let i = 0; i < length1; i++) {
      if (districtNameValue === this.districtNameList[i].viewValue) {
        districtName = this.districtNameList[i].value;
      }
    }
    for (let i = 0; i < length; i++) {
      if (financialYearValue === this.financialYearList[i].viewValue) {
        financialYear = this.financialYearList[i].value;
      }
    }
    for (let i = 0; i < length2; i++) {
      if (majorHeadValue === this.majorHeadList[i].viewValue) {
        majorHead = this.majorHeadList[i].value;
      }
    }
    this.scheduleFour.setValue({
      financialYear: financialYear,
      districtName: districtName,
      officeName: this.ElementData[index].officeName,
      openingBalance: this.ElementData[index].openingBalance,
      loanReceived: this.ElementData[index].loanReceived,
      refundedLoan: this.ElementData[index].refundedLoan,
      recoveryLoan: this.ElementData[index].recoveryLoan,
      totalLoanIncome: this.ElementData[index].totalLoanIncome,
      total: this.ElementData[index].total,
      districtPanchayatExpenditure: this.ElementData[index].districtPanchayatExpenditure,
      talukaRefund: this.ElementData[index].talukaRefund,
      refund: this.ElementData[index].refund,
      totalExpense: this.ElementData[index].totalExpense,
      closingBalance: this.ElementData[index].closingBalance,
      remarks: this.ElementData[index].remarks,
      majorHead: majorHead,
    });
  }

  // reset common button
  reset() { }
}
