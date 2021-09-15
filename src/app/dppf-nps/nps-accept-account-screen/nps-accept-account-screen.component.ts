import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfgpfMessage, DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { AcceptAccountInterface } from 'src/app/model/dppf-nps';




@Component({
  selector: 'app-nps-accept-account-screen',
  templateUrl: './nps-accept-account-screen.component.html',
  styleUrls: ['./nps-accept-account-screen.component.css']
})
export class NpsAcceptAccountScreenComponent implements OnInit {
  // Variable
  errorMessage;
  errormsg = DppfNpsMessage;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // FOrm Group
  acceptAccountScreenForm: FormGroup;
  // Form COntrol
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  // List
  classTypeOfYear: ListValue[] = [
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

  classTypeOfMonth: ListValue[] = [
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

  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },

  ];

  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'District Treasury Office, Gandhinagar' },
    { value: '3', viewValue: 'District Treasury Office, Vadodara' },
    { value: '4', viewValue: 'District Treasury Office, Surat' },
    { value: '5', viewValue: 'District Treasury Office, Rajkot' },
    { value: '6', viewValue: 'District Treasury Office, Anand' },
    { value: '7', viewValue: 'District Treasury Office, Bharuch' },
    { value: '8', viewValue: 'District Treasury Office, Valsad' },
    { value: '9', viewValue: 'District Treasury Office, Navsari' },
    { value: '10', viewValue: 'District Treasury Office, Dang' },
  ];
  // Table COntent Data
  Element_Data: AcceptAccountInterface[] = [
    {
      majorHead: '1000',
      noOfDocuments: '4',
      creditDebit: '',
      amount: '3000',
      tcAmount: '1500',
      grossAmount: '4500',

    },
    {
      majorHead: '2100',
      noOfDocuments: '8',
      creditDebit: '',
      amount: '3000',
      tcAmount: '2200',
      grossAmount: '5200',

    },
    {
      majorHead: '1200',
      noOfDocuments: '5',
      creditDebit: '',
      amount: '3000',
      tcAmount: '1200',
      grossAmount: '4200',

    },

    {

      majorHead: '2349',
      creditDebit: '',
      noOfDocuments: '9',
      amount: '3000',
      tcAmount: '1100',
      grossAmount: '4100',

    },
  ];
  // Table Source
  displayedColumns: string[] = [
    'srno',
    'majorHead',
    'noOfDocuments',
    'amount',
    'tcAmount',
    'grossAmount',
    'action',
  ];

  dataSource = new MatTableDataSource<AcceptAccountInterface>(this.Element_Data);
  // Directives of NPS
  directiveObj = new CommonDirective();
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.acceptAccountScreenForm = this.fb.group({
      year: '',
      month: '',
      treasuryPao: '',
      paymentType: '',

    });
  }

  // open work flow account
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
