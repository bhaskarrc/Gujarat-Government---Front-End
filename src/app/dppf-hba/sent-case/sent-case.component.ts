import { CommonListing } from 'src/app/model/common-listing';
import { SentCase } from './../../model/dppf-hba';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { HbaDialogComponent } from '../hba-dialog/hba-dialog.component';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';

@Component({
  selector: 'app-sent-case',
  templateUrl: './sent-case.component.html',
  styleUrls: ['./sent-case.component.css']
})
export class SentCaseComponent implements OnInit {

  ELEMENT_DATA: SentCase[] = [
    {
      position: '',
      inwardNo: 'DFN/6/2016/4905',
      inwardDate: '22-Feb-2016 ',
      inwardType: 'Demand for NDC ',
      hbaMcaAccount: '2641773',
      name: 'A T MHETA ',
      status: 'RETURN ',
      from: '',
      nothing: ''
    },
    {
      position: '',
      inwardNo: 'DFN/6/2016/717',
      inwardDate: '22-Feb-2016 ',
      inwardType: 'Demand for NDC ',
      hbaMcaAccount: '1641773',
      name: 'D B Patel ',
      status: 'RETURN ',
      from: '',
      nothing: ''
    },
    {
      position: '',
      inwardNo: 'DFN/6/2016/631',
      inwardDate: '22-Feb-2016 ',
      inwardType: 'Demand for NDC ',
      hbaMcaAccount: '2641783',
      name: 'A K NADIA ',
      status: 'RETURN ',
      from: '',
      nothing: ''
    },
  ];

  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  fieldCaseForm: FormGroup;
  // Form Control
  inwardTypeCtrl: FormControl = new FormControl();
  // List
  inwarde_list: CommonListing[] = [
    { value: '1', viewValue: 'Top Schedule' },
    { value: '3', viewValue: 'Others' },
    { value: '4', viewValue: 'Cheque / Demand Draft' },
    { value: '5', viewValue: 'Request for Account Generation' },
    { value: '6', viewValue: 'Demand for Interest Conformation Letter' },
    { value: '7', viewValue: 'Demand for NDC' },
    { value: '8', viewValue: 'Demand for refund order' },
    { value: '9', viewValue: 'AGTE Misclassified Entry' },
    { value: '10', viewValue: 'AGTE Clearance Entry(Sent by DPPF)' },
    { value: '11', viewValue: 'Debit/Credit Correction Entry' },
    { value: '12', viewValue: 'AG CA Figure' }
  ];
  // Table Source
  displayedColumns: string[] = ['position', 'inwardNo', 'inwardDate', 'inwardType', 'hbaMcaAccount', 'name', 'status', 'to', 'nothing'];
  dataSource = new MatTableDataSource<SentCase>(this.ELEMENT_DATA);
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  directiveObject = new DPPFHbaDirectives(this.dialog);

  ngOnInit() {
    this.fieldCaseData();
  }

  fieldCaseData() {
    this.fieldCaseForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      accountNo: [''],
      name: [''],
      inwardType: ['']
    });
  }
  // routing
  gotopage() {
    this.router.navigate(['/dppf-hba/inward-details']);
  }

  // Hba Dialog
  hbaDialod(): void {
    const dialogRef = this.dialog.open(HbaDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Inward No
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
