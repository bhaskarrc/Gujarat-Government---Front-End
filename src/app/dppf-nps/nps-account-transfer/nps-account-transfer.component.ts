import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { SearchPpaDppfNpsComponent } from '../search-ppa-dppf-nps/search-ppa-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { NpsAccountTransfer } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-nps-account-transfer',
  templateUrl: './nps-account-transfer.component.html',
  styleUrls: ['./nps-account-transfer.component.css']
})
export class NpsAccountTransferComponent implements OnInit {
  // List
  headList: CommonListing[] = [
    { value: '1', viewValue: '2014' }
  ];

  voucherList: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' }
  ];

  headAmountList: CommonListing[] = [
    { value: '', viewValue: '' }
  ];

  gradePayList: CommonListing[] = [
    { value: '', viewValue: '' }
  ];

  monthList: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Sepetember' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];

  yearList: CommonListing[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];

  upTypeList: CommonListing[] = [
    { value: '', viewValue: '' }
  ];

  typeNoList: CommonListing[] = [
    { value: '', viewValue: '' }
  ];

  mappingTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Map' },
    { value: '2', viewValue: 'Un-Map' },
  ];

  detailsData: NpsAccountTransfer[] = [
    {
      typeNo: '',
      ppaNo: '',
      pranNo: '',
      transactionID: '',
      mappingType: '',
      name: '',
      basic: '',
      gradePay: '',
      dp: '',
      da: '',
      amount: '',
      up: '',
      forMonth: '',
      transferId: '',
      forYear: '',
      upType: '',
      remarks: ''
    }
  ];

  detailsColumn: string[] = [
    'typeNo',
    'ppaNo',
    'pranNo',
    'transactionID',
    'mappingType',
    'name',
    'basic',
    'gradePay',
    'dp',
    'da',
    'amount',
    'up',
    'forMonth',
    'transferId',
    'forYear',
    'upType',
    'remarks',
    'action'
  ];
  // Date
  todayDate = new Date();
  // Variable
  errormsg = DppfNpsMessage;
  inwardDetails = true;
  // Form Gorup
  accountTransferForm: FormGroup;
  // Form COntrol
  headCTRL: FormControl = new FormControl();
  voucherCTRL: FormControl = new FormControl();
  gradePayCTRL: FormControl = new FormControl();
  forMonthCTRL: FormControl = new FormControl();
  forYearCTRL: FormControl = new FormControl();
  upTypeCTRL: FormControl = new FormControl();
  typeNoCTRL: FormControl = new FormControl();
  mappingTypeCTRL: FormControl = new FormControl();
  // Table Source
  detailsDataSource = new MatTableDataSource<NpsAccountTransfer>(this.detailsData);
  // Directive
  directiveObj = new CommonDirective();

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.accountTransferFormData();
  }

  accountTransferFormData() {
    this.accountTransferForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      treasuryPAO: [''],
      year: [''],
      month: [''],
      group: [''],
      groupHead: [''],
      creditDebit: [''],
      tcChallan: [''],
      majorHead: [''],
      majorHeadAmount: [''],
      head: [''],
      headAmount: [''],
      voucherNo: [''],
      voucherAmount: [''],
      ddo: [''],
      dp: [''],
      da: [''],
      gradePay: [''],
      typeNo: [''],
      forMonth: [''],
      forYear: [''],
      upType: [''],
      mappingType: [''],
      fromPPANo: [''],
      from: [''],
      toPPANo: [''],
      to: [''],
      transferAmount: [''],
      remarks: [''],
    });
  }

  // open workFlow dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // Open Inward  number Dialog
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.accountTransferForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }

  // open ppan no dialog
  openDialogPPANumber() {
    const dialogRef = this.dialog.open(SearchPpaDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.accountTransferForm.patchValue({
          ppaNo: result[0].ppaNo,
        });
      }
    });
  }

  addDetails() {
    const Col_Data = this.detailsDataSource.data;
    Col_Data.push({
      typeNo: '',
      ppaNo: '',
      pranNo: '',
      transactionID: '',
      mappingType: '',
      name: '',
      basic: '',
      gradePay: '',
      dp: '',
      da: '',
      amount: '',
      up: '',
      forMonth: '',
      transferId: '',
      forYear: '',
      upType: '',
      remarks: ''
    });
    this.detailsDataSource.data = Col_Data;
  }
}
