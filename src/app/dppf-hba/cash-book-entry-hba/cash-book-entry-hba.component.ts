import { CommonListing } from 'src/app/model/common-listing';
import { CashBookEntryChequesRecieved } from './../../model/dppf-hba';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { WorkflowDppfHbaComponent } from '../workflow-dppf-hba/workflow-dppf-hba.component';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
const ELEMENT_DETAILS: CashBookEntryChequesRecieved[] = [
  {
    hbaMca: '',
    name: '',
    recoveryType: '',
    interstrecoveryAmount: '',
    forMonth: '',
    forYear: '',
    installNo: '',
  }
];
@Component({
  selector: 'app-cash-book-entry-hba',
  templateUrl: './cash-book-entry-hba.component.html',
  styleUrls: ['./cash-book-entry-hba.component.css']
})
export class CashBookEntryHbaComponent implements OnInit {
  // Form Group
  cashBookForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Control
  monthCtrl: FormControl = new FormControl();
  recoCtrl: FormControl = new FormControl();
  installCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  // List
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

  recoveryType_list: CommonListing[] = [
    { value: '1', viewValue: 'Principal' },
    { value: '2', viewValue: 'Interest' },
    { value: '3', viewValue: 'Penalty' },
  ];
  upNo_List: CommonListing[] = [
    { value: '1', viewValue: '' },
  ];
  // Table Sourece
  displayedColumns: string[] = ['hbaMca', 'name', 'recoveryType', 'interstrecoveryAmount',
    'forMonth', 'forYear', 'installNo', 'action'];
  dataSource = new MatTableDataSource<CashBookEntryChequesRecieved>(ELEMENT_DETAILS);
  // Variable
  errorMessages;
  isSubmitted;
  directiveObj = new CommonDirective(this.router);
  directiveObject = new DPPFHbaDirectives(this.dialog);

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.errorMessages = dppfHbaMessage;
    this.cashBookData();
  }
  cashBookData() {
    this.cashBookForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      demandNo: [''],
      chequeNo: [''],
      ddo: [''],
      clearanceDate: [''],
      challanNo: [''],
      challanDate: [''],
      remarks: [''],
      total: ['']
    });
  }
  // add row data
  addRow() {
    this.dataSource.data.push({
      hbaMca: '',
      name: '',
      recoveryType: '',
      interstrecoveryAmount: '',
      forMonth: '',
      forYear: '',
      installNo: ''
    });
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  // Inward no Popup
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Navigate Route
  navigate() {
    this.router.navigate(['./dppf-hba/cash-book-entry-listing']);
  }

}
