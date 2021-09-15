import { datasource } from './../../budget/delegation/delegation.component';
import { AdjustmentAccount, AdjustmentAccountViewUpDetails } from './../../model/dppf-hba';
import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { WorkflowDppfHbaComponent } from '../workflow-dppf-hba/workflow-dppf-hba.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { HbaMcaNoDialogComponent } from '../hba-mca-no-dialog/hba-mca-no-dialog.component';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';

const ELEMENT_Details: AdjustmentAccount[] = [
  {
    upNo: '',
    correction: '',
    hbaMca: '',
    name: '',
    principlerecoveryAmount: '',
    interstrecoveryAmount: '',
    forMonth: '',
    forYear: '',
    remarks: '',
  }
];
const VIEW_UP_DETAILS: AdjustmentAccountViewUpDetails[] = [
  {
    forYear: '',
    forMonth: '',
    creditDebit: '',
    head: '',
    voucherNo: '',
    upNo: '',
    type: '',
    hbaMca: '',
    name: '',
    shortName: '',
    amount: '',
    clearedAmount: '',
    remarks: '',
  }
];

@Component({
  selector: 'app-adjustment-account',
  templateUrl: './adjustment-account.component.html',
  styleUrls: ['./adjustment-account.component.css']
})
export class AdjustmentAccountComponent implements OnInit {
  // Form Group
  accountForm: FormGroup;
  // Variable
  isSubmitted;
  // DAte
  todayDate = Date.now();
  maxDate = new Date();
  // Form COntrol
  districtCtrl: FormControl = new FormControl();
  treaspaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeMonthCtrl: FormControl = new FormControl();
  hbaCtrl: FormControl = new FormControl();
  // Lust
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Gandhinagar' },
    { value: '2', viewValue: 'Ahmedabad' },
    { value: '3', viewValue: 'Rajkot' },
  ];
  TESPAO_list: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];

  hbaMca_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  upNo_List: CommonListing[] = [];
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
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },

  ];
  ctype_list: CommonListing[] = [
    { value: '1', viewValue: 'Un Specified Entry' },
    { value: '2', viewValue: 'HBA UP' },
    { value: '3', viewValue: 'MCA TE' },
    { value: '4', viewValue: 'GPF UP' },
    { value: '5', viewValue: 'Transfer UP' },
    { value: '6', viewValue: 'New Pension UP' },
    { value: '7', viewValue: 'UP To Missing Voucher' },
    { value: '8', viewValue: 'GPF UP Type' },
    { value: '9', viewValue: 'Other than HBA/MCA' },

  ];
  // Table Source
  displayedColumns: string[] = ['upNo', 'hbaMca', 'name', 'principlerecoveryAmount', 'interstrecoveryAmount',
    'forMonth', 'forYear', 'remarks', 'action'];
  columnWithHba: string[] = ['upNo', 'hbaMca', 'name', 'principlerecoveryAmount', 'interstrecoveryAmount',
    'forMonth', 'forYear', 'remarks', 'action'];
  columnWithCorrection: string[] = ['upNo', 'correction', 'name', 'principlerecoveryAmount', 'interstrecoveryAmount',
    'forMonth', 'forYear', 'remarks', 'action'];

  dataSource = new MatTableDataSource<AdjustmentAccount>(ELEMENT_Details);
  displayedColumns1: string[] = ['select', 'forYear', 'forMonth', 'creditDebit', 'head', 'voucherNo',
    'upNo', 'type', 'hbaMca', 'name', 'shortName', 'amount',
    'clearedAmount', 'remarks'];
  dataSource1 = new MatTableDataSource<AdjustmentAccountViewUpDetails>([]);
  // Directive
  directiveObj = new CommonDirective();
  directiveObject = new DPPFHbaDirectives(this.dialog);
  // Variable
  errorMessages;
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  ngOnInit() {
    this.accountData();
    this.errorMessages = dppfHbaMessage;
  }
  accountData() {
    this.accountForm = this.fb.group({
      district: [''],
      treasury: [''],
      // { value: '', disabled: true }
      year: [''],
      month: [''],
      hba: [''],
      wiseTotal: [''],
      upTotal: [''],
      total: ['']
    });
  }

  // Navigate Route
  navigate() {
    this.router.navigate(['./dppf-hba/account-adustment-listing']);
  }
  // hba mca Dialog
  hbaMcaNo() {
    const dialogRef = this.dialog.open(HbaMcaNoDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // On selection of district
  onDistrict(eventVal) {
    this.accountForm.controls['treasury'].setValue(eventVal);
  }
  // display viewUpDetails table
  viewUpDetails() {

    this.isSubmitted = true;
    if (this.accountForm.valid &&
      this.accountForm.controls['district'].value !== '' &&
      this.accountForm.controls['year'].value !== '' &&
      this.accountForm.controls['month'].value !== '' &&
      this.accountForm.controls['hba'].value !== ''
    ) {
      this.dataSource1.data.push(
        {
          forYear: '2020',
          forMonth: 'January',
          creditDebit: 'Credit',
          head: '2059',
          voucherNo: '44',
          upNo: 'UP/000282/2/2020',
          type: 'Un Specified Entry',
          hbaMca: '',
          name: '',
          shortName: '',
          amount: '10000',
          clearedAmount: '0',
          remarks: 'pw/dat/590 9 p j',
        },
        {
          forYear: '2020',
          forMonth: 'January',
          creditDebit: 'Credit',
          head: '2210',
          voucherNo: '144',
          upNo: 'UP/000272/2/2020',
          type: 'Un Specified Entry',
          hbaMca: '',
          name: '',
          shortName: '',
          amount: '10000',
          clearedAmount: '0',
          remarks: 'wanting schedule',
        },
        {
          forYear: '2118',
          forMonth: 'January',
          creditDebit: 'Credit',
          head: '2059',
          voucherNo: '424',
          upNo: 'UP/000572/2/2020',
          type: 'Un Specified Entry',
          hbaMca: '',
          name: '',
          shortName: '',
          amount: '10000',
          clearedAmount: '0',
          remarks: 'wanting',
        },
      );
      this.dataSource1.data = this.dataSource1.data;
    }
  }


  // on up type dropdown to display diff columns
  onType(event) {
    if (event.value === '9') {
      this.displayedColumns = this.columnWithCorrection;
    } else {
      this.displayedColumns = this.columnWithHba;
    }
  }

  // Add row table
  addRow() {
    this.dataSource.data.push(
      {
        upNo: '',
        correction: '',
        hbaMca: '',
        name: '',
        principlerecoveryAmount: '',
        interstrecoveryAmount: '',
        forMonth: '',
        forYear: '',
        remarks: '',
      }
    );
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  deleteRow(i) {
    this.dataSource.data.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }


  // Common code for Checkbox is not used because different functions are performend on click of checkbox
  // CheckBox methods
  onSelect() {
    this.directiveObj.masterToggle(this.dataSource1);
    this.isSelected();
  }
  onSelect2(row) {
    this.directiveObj.selection.toggle(row);
    this.isSelected();
  }
  isSelected() {
    let temp: CommonListing[] = [];
    this.dataSource1.data.forEach(row => {
      const ans = this.directiveObj.selection.isSelected(row) ? temp.push({ value: row.upNo, viewValue: row.upNo }) : null;
      temp = temp;
    });
    this.upNo_List = temp;
  }
  // ----------------------------------------------------------------------------------------------------
  resetForm() {
    this.accountForm.reset();
  }

}
