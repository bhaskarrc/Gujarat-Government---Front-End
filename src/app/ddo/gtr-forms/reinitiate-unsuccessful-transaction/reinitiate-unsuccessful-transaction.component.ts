import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ReinitiateUnsuccessfulTransaction } from './../../../model/reinitiate-unsuccessful-transaction';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DialogData } from 'src/app/model/standing-charge';
import { EmployeeTransactionHead, Heading } from 'src/app/model/ddo-forms';
import { CommonDirective } from 'src/app/common/directive/validation.directive';


/*ReinitiateUnsuccessfulTransactionDailogComponent starts */
@Component({
  selector: 'app-employee-transaction-head',
  templateUrl: 'employee-transaction-head.html'
})
export class ReinitiateUnsuccessfulTransactionDailogComponent {

  // variable declaration
  elementData1: EmployeeTransactionHead[];
  dataSource;
  headingSource;

  constructor(
    public dialogRef: MatDialogRef<ReinitiateUnsuccessfulTransactionDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    let datas;
    datas = data;
    this.elementData1 = [{
      creditorName: datas.creditorName,
      creditorAccountNo: datas.creditorAccountNo,
      creditorIfscCode: datas.creditorIfscCode,
      partName: '-',
      partAccNo: '-',
      partyIFSC: '-'
    }];
    this.dataSource = new MatTableDataSource<EmployeeTransactionHead>(this.elementData1);
    this.headingSource = new MatTableDataSource<Heading>([]);

  }

  // display table columns
  displayedColumns: string[] = [
    'creditorName',
    'creditorAccountNo',
    'creditorIfscCode',
    'partName',
    'partAccNo',
    'partyIFSC'
  ];
}
/*ReinitiateUnsuccessfulTransactionDailogComponent ends */



/** ReinitiateUnsuccessfulTransactionComponent starts */
@Component({
  selector: 'app-reinitiate-unsuccessful-transaction',
  templateUrl: './reinitiate-unsuccessful-transaction.component.html',
  styleUrls: ['./reinitiate-unsuccessful-transaction.component.css']
})
export class ReinitiateUnsuccessfulTransactionComponent implements OnInit {
  // variables
  reinitiateUnsuccessfulTransactionrForm: FormGroup;

  // directive object for matcheckbox
  directiveObj = new CommonDirective(this.router);

  // table data
  elementData: ReinitiateUnsuccessfulTransaction[] = [
    {
      checkbox: false,
      tokenNo: '24',
      creditorName: 'AARTI KISHORBHAI BAJANIYA',
      creditorIfscCode: 'UCBA0000907',
      creditorAccountNo: '0970110041665',
      beneficiaryAmount: '600.00',
      billNetAmount: '408600.00',
      majorHead: '2225',
      date: '25-SEP-2019',
      billType: 'Scholarship / Stipend',
      ddoNo: '441',
      cardexNo: '87',
      voucherNo: '121',
      voucherDate: '17-DEC-2019',
      typeOfBeneficiary: 'Digital Gujarat',
      reason: 'Reason - Account Does Not Exist',
      billId: '19201006641'
    },
    {
      checkbox: false,
      tokenNo: '30',
      creditorName: 'Pratik K',
      creditorIfscCode: 'BCBA0010907',
      creditorAccountNo: '088754664546',
      beneficiaryAmount: '1600.00',
      billNetAmount: '908600.00',
      majorHead: '2030',
      date: '12-SEP-2018',
      billType: 'Scholarship / Stipend',
      ddoNo: '441',
      cardexNo: '87',
      voucherNo: '121',
      voucherDate: '17-DEC-2019',
      typeOfBeneficiary: 'Digital Gujarat',
      reason: 'Reason - Account Does Not Exist',
      billId: '29201006647'
    },
    {
      checkbox: false,
      tokenNo: '24',
      creditorName: 'Mr. Pankaj Gupta',
      creditorIfscCode: 'GTBA0000907',
      creditorAccountNo: '0045145451111',
      beneficiaryAmount: '7000.00',
      billNetAmount: '208600.00',
      majorHead: '2225',
      date: '25-SEP-2019',
      billType: 'Scholarship / Stipend',
      ddoNo: '441',
      cardexNo: '87',
      voucherNo: '121',
      voucherDate: '17-DEC-2019',
      typeOfBeneficiary: 'Digital Gujarat',
      reason: 'Reason - Account Does Not Exist',
      billId: '25201016641'
    },
    {
      checkbox: false,
      tokenNo: '24',
      creditorName: 'AARTI KISHORBHAI BAJANIYA',
      creditorIfscCode: 'UCBA0000907',
      creditorAccountNo: '0970110041665',
      beneficiaryAmount: '600.00',
      billNetAmount: '408600.00',
      majorHead: '2225',
      date: '25-SEP-2019',
      billType: 'Scholarship / Stipend',
      ddoNo: '441',
      cardexNo: '87',
      voucherNo: '121',
      voucherDate: '17-DEC-2019',
      typeOfBeneficiary: 'Digital Gujarat',
      reason: 'Reason - Account Does Not Exist',
      billId: '19201006641'
    },
    {
      checkbox: false,
      tokenNo: '24',
      creditorName: 'AARTI KISHORBHAI BAJANIYA',
      creditorIfscCode: 'UCBA0000907',
      creditorAccountNo: '0970110041665',
      beneficiaryAmount: '600.00',
      billNetAmount: '408600.00',
      majorHead: '2225',
      date: '25-SEP-2019',
      billType: 'Scholarship / Stipend',
      ddoNo: '441',
      cardexNo: '87',
      voucherNo: '121',
      voucherDate: '17-DEC-2019',
      typeOfBeneficiary: 'Digital Gujarat',
      reason: 'Reason - Account Does Not Exist',
      billId: '19201006641'
    }
  ];
  dataSource = new MatTableDataSource<ReinitiateUnsuccessfulTransaction>(this.elementData);
  displayedColumns: string[] = ['checkbox',
    'tokenNo',
    'creditorName',
    'creditorIfscCode',
    'creditorAccountNo',
    'beneficiaryAmount',
    'billNetAmount',
    'majorHead',
    'date',
    'billType',
    'ddoNo',
    'cardexNo',
    'voucherNo',
    'voucherDate',
    'typeOfBeneficiary',
    'reason',
    'billId'
  ];
  // table data end


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // constructor
  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.reinitiateUnsuccessfulTransactionrForm = this.fb.group({
      tokenNo: ['']
    });
  }

  // clears the form
  clearForm() {
    this.reinitiateUnsuccessfulTransactionrForm.reset();
  }

  // opens ReinitiateUnsuccessfulTransactionDailog Component
  opendialog(data): void {
    const dialogRef = this.dialog.open(ReinitiateUnsuccessfulTransactionDailogComponent, {
      width: '1000px', data: data
    });
  }

  // on submit of form
  searchBill() { }

}
/** ReinitiateUnsuccessfulTransactionComponent ends */


