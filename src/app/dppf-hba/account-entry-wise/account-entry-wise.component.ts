import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { AccountWiseHbaComponent } from './account-wise-hba/account-wise-hba.component';
import { AccountEntryWiseChallanDetails } from 'src/app/model/dppf-hba';
import { ListingDialogComponent } from '../listing-dialog/listing-dialog.component';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';


@Component({
  selector: 'app-account-entry-wise',
  templateUrl: './account-entry-wise.component.html',
  styleUrls: ['./account-entry-wise.component.css']
})
export class AccountEntryWiseComponent implements OnInit {
  // Variable
  public errorMessages;
  hbaOrMca;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  voucherForm: FormGroup;
  // Form COntrol
  typeOfYearCtrl: FormControl = new FormControl();
  typeMonthCtrl: FormControl = new FormControl();
  creditCtrl: FormControl = new FormControl();
  headCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  challanNumberCtrl: FormControl = new FormControl();
  // List
  challanNumberList: CommonListing[] = [
    { value: '1', viewValue: '12' },
  ];
  credit_list: CommonListing[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' }
  ];
  head_list: CommonListing[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '7610' },
    { value: '3', viewValue: '2010' },
    { value: '4', viewValue: '2011' },
    { value: '5', viewValue: '2012' },
    { value: '6', viewValue: '2013' },
    { value: '7', viewValue: '2014' },
    { value: '8', viewValue: '2015' },
    { value: '9', viewValue: '2016' },
    { value: '10', viewValue: '2017' },

  ];
  voucher_list: CommonListing[] = [
    { value: '1', viewValue: '102375' },
    { value: '2', viewValue: 'De78587' }
  ];
  ctype_list: CommonListing[] = [
    { value: '1', viewValue: 'Detail Entry' },
    { value: '2', viewValue: 'Un Specified Entry' },
    { value: '3', viewValue: 'HBA UP' },
    { value: '4', viewValue: 'MCA TE' },
    { value: '5', viewValue: 'GPF UP' },
    { value: '6', viewValue: 'Transfer UP' },
    { value: '7', viewValue: 'New Pension UP' },
    { value: '8', viewValue: 'UP To Missing Voucher' },
    { value: '9', viewValue: 'GPF UP Type' },
    { value: '10', viewValue: 'Other than HBA/MCA' },

  ];

  year_list: CommonListing[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];
  month_list: CommonListing[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },
  ];
  isSubmitted;
  directiveObj = new CommonDirective(this.router);
  // Table Source

  ELEMENT_Details: AccountEntryWiseChallanDetails[] = [
    {
      hbaMca: '',
      name: '',
      installmentNo: '',
      forMonth: '' + (new Date().getMonth() + 1),
      forYear: '' + this.directiveObj.getValue(this.year_list, '' + new Date().getFullYear()),
      type: '',
      upNo: '',
      remarks: '',
      principlerecoveryAmount: '',
      remaningPrincipleAmount: '300000',
      interstrecoveryAmount: '',
      remaningInterstAmount: '',
    }
  ];
  displayedColumns: string[] = ['hbaMca', 'name', 'principlerecoveryAmount', 'remaningPrincipleAmount',
    'interstrecoveryAmount', 'remaningInterstAmount', 'installmentNo',
    'forMonth', 'forYear', 'type', 'upNo', 'remarks', 'action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_Details);


  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  directiveObject = new DPPFHbaDirectives(this.dialog);
  ngOnInit() {
    this.voucherData();
    this.errorMessages = dppfHbaMessage;
  }
  voucherData() {
    this.voucherForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [{ value: '', disabled: true }],
      treasuryPao: [{ value: '', disabled: true }],
      hbaMca: [{ value: '', disabled: true }],
      tcChallanAMount: [{ value: '', disabled: true }],
      tcAmount: [{ value: '', disabled: true }],
      challanAmount: [{ value: '', disabled: true }],
      credir: [{ value: '', disabled: true }],
      year: [{ value: '', disabled: true }],
      month: [{ value: '', disabled: true }],
      total: [{ value: '', disabled: true }],
      head: [''],
      majorHeadAmount: [{ value: '', disabled: true }],
      majorHead: [{ value: '', disabled: true }],
      headAmount: [{ value: '', disabled: true }],
      hbaMcaScheduleNo: [''],
      groupHead: [{ value: '', disabled: true }],
      ddo: [{ value: '', disabled: true }],
      voucherNo: [''],
      voucherAmount: [{ value: '', disabled: true }],
      wiseTotal: [{ value: '', disabled: true }],
      upTotal: [{ value: '', disabled: true }],
      // Challan Details
      challanNumber: [{ value: '', disabled: false }],
      challanDate: [{ value: '', disabled: true }],
      amount: [{ value: '', disabled: false }],
    });
  }
  // Add row table
  addRow() {
    this.dataSource.data.push({
      hbaMca: '',
      name: '',
      principlerecoveryAmount: '',
      remaningPrincipleAmount: '',
      interstrecoveryAmount: '',
      remaningInterstAmount: '',
      installmentNo: '',
      forMonth: '' + (new Date().getMonth() + 1),
      forYear: '' + this.directiveObj.getValue(this.year_list, '' + new Date().getFullYear()),
      type: '',
      upNo: '',
      remarks: '',
    });
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  deleteRow(i) {
    this.dataSource.data.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  // inward popup
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.voucherForm.patchValue({
        inwardNo: '11/02230/3456',
        inwardDate: '05-JUL-2020',
        treasuryPao: '1',
        year: '2009',
        month: 'Jan',
        credir: 'Debit',
        tcChallan: '4',
        majorHead: '8009',
        majorHeadAmount: '200000',
        head: '1',
        hbaMca: '' + result.hba,
        headAmount: '50000',
        headamount: '200000',
        groupHead: 'DIST TREASURY ACCOUNT',
      });
      if (this.voucherForm.controls['hbaMca'].value === 'HBA' && this.voucherForm.controls['hbaMca'].value !== undefined) {
        this.dataSource.data.forEach(item => {
          item.hbaMca = '1';
        });
      } else if (this.voucherForm.controls['hbaMca'].value === 'MCA' && this.voucherForm.controls['hbaMca'].value !== undefined) {
        this.dataSource.data.forEach(item => {
          item.hbaMca = '2';
        });
      }
      console.log('The dialog was closed');
    });
  }
  onClickListing() {
    const dialogRef = this.dialog.open(ListingDialogComponent, {
      width: '300px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'No') {
        this.navigate();
      }
    });
  }
  // Navigate route
  navigate() {
    this.router.navigate(['./dppf-hba/account-wise-entry-listing']);
  }
  // open dialog AccountWiseHbaComponent
  hbaMca() {
    const dialogRef = this.dialog.open(AccountWiseHbaComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  ontype(element, eventVal, index) {
    const value = eventVal;
    const upNo = 'UP/00000' + (index + 1) + '/9/2020';
    switch (value) {

      case '1': element.upNo = '';
        break;
      case '2': element.upNo = upNo;
        break;
      case '3': element.upNo = upNo;
        break;
      case '4': element.upNo = upNo;
        break;
      case '5': element.upNo = upNo;
        break;
      case '6': element.upNo = upNo;
        break;
      case '7': element.upNo = upNo;
        break;
      case '8': element.upNo = upNo;
        break;
      case '9': element.upNo = upNo;
        break;
      case '10': element.upNo = upNo;
        break;
      case undefined: element.upNo = '';
        break;

      default: element.upNo = '';
        break;
    }

  }

}
