import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { AccountEntryWiseChallanDetails } from 'src/app/model/dppf-hba';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { AccountWiseHbaComponent } from '../account-entry-wise/account-wise-hba/account-wise-hba.component';
import { ScheduleNoDialogComponent } from './schedule-no-dialog/schedule-no-dialog.component';

@Component({
  selector: 'app-schedule-entry-hba',
  templateUrl: './schedule-entry-hba.component.html',
  styleUrls: ['./schedule-entry-hba.component.css']
})
export class ScheduleEntryHbaComponent implements OnInit {
  directiveObject = new DPPFHbaDirectives(this.dialog);
  public errorMessages;
  todayDate = Date.now();
  maxDate = new Date();
  // form controls
  districtCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeMonthCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  voucherForm: FormGroup;
  // lists
  credit_list: CommonListing[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' }
  ];
  classTypeOfTreasuryPao: CommonListing[] = [
    { value: '1', viewValue: 'Treasury ' },
    { value: '2', viewValue: 'PAO' },

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
  voucher_list: CommonListing[] = [
    { value: '1', viewValue: '102375' },
    { value: '2', viewValue: 'De78587' }
  ];

  hbaMca_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
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
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];

  isSubmitted;
  directiveObj = new CommonDirective(this.router);

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
    'forMonth', 'forYear',
    // 'type', 'upNo',
    'remarks', 'action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_Details);


  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit() {
    this.voucherData();
    this.errorMessages = dppfHbaMessage;
  }
  voucherData() {
    this.voucherForm = this.fb.group({
      scheduleNo: [''],
      inwardDate: [{ value: new Date(), disabled: true }],
      treasuryPao: [''],
      hbaMca: [''],
      tcChallanAMount: [''],
      tcAmount: [''],
      challanAmount: [''],
      voucherAmount: [''],
      amount: [''],
      credir: [''],
      year: [''],
      month: [''],
      total: [''],
      head: [''],
      majorHead: [{ value: '7610', disabled: true }],
      headAmount: [''],
      groupHead: [''],
      ddo: [{ value: '', disabled: true }],
      cursoron: [''],
      wiseTotal: [''],
      rowTotal: [''],
      hba: [''],
      lastmonth: [''],
      district: ['']
    });
  }
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

  navigate() {
    this.router.navigate(['./dppf-hba/schedule-entry-listing']);
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



  // open dialog AccountWiseHbaComponent
  openScheduleNoDialog() {
    const dialogRef = this.dialog.open(ScheduleNoDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.voucherForm.patchValue({
        scheduleNo: result
      });
      console.log('The dialog was closed');
    });
  }

}
