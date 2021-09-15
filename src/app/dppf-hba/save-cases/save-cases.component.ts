import { SaveCases } from './../../model/dppf-hba';
import {
  DemandOfInterestConformationLetterComponent
} from './../demand-of-interest-conformation-letter/demand-of-interest-conformation-letter.component';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { HbaDialogComponent } from '../hba-dialog/hba-dialog.component';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { EmployeeDialogBoxComponent } from '../employee-dialog-box/employee-dialog-box.component';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
import { ListValue } from 'src/app/model/common-grant';


@Component({
  selector: 'app-save-cases',
  templateUrl: './save-cases.component.html',
  styleUrls: ['./save-cases.component.css']
})
export class SaveCasesComponent implements OnInit {
  ELEMENT_DATA: SaveCases[] = [
    {
      position: '',
      inwardNo: 'DFN/6/2016/4905',
      empNo: '1000000001',
      inwardDate: '22-Feb-2016 ',
      inwardType: 'Demand for NDC',
      hbaMcaAccount: '2641773',
      name: 'A T MHETA ',
      status: 'Verify ',
      wfStatus: 'Approval In Progress',
      from: '',
      nothing: ''
    },
    {
      position: '',
      inwardNo: 'DFN/6/2016/717',
      empNo: '1000000002',
      inwardDate: '22-Feb-2016 ',
      inwardType: 'Demand for NDC',
      hbaMcaAccount: '1641773',
      name: 'D B Patel ',
      wfStatus: 'Approval In Progress',
      status: 'Verify ',
      from: '',
      nothing: ''
    },
    {
      position: '',
      inwardNo: 'DFN/6/2016/631',
      empNo: '1000000003',
      inwardDate: '22-Feb-2016 ',
      inwardType: 'Demand for NDC',
      hbaMcaAccount: '2641783',
      name: 'A K NADIA ',
      wfStatus: 'Approval In Progress',
      status: 'Verify ',
      from: '',
      nothing: ''
    },
    {
      position: '',
      inwardNo: 'DIC/1/2020/507',
      empNo: '1000000004',
      inwardDate: '23-Jan-2020 ',
      inwardType: 'Demand for Interest Confirmation Letter',
      hbaMcaAccount: '17108918',
      name: 'V K RAVAT',
      wfStatus: 'Approval In Progress',
      status: 'Forward',
      from: '',
      nothing: ''
    },
    {
      position: '',
      inwardNo: 'DIC/10/2019/5796',
      empNo: '1000000005',
      inwardDate: '07-Nov-2019 ',
      inwardType: 'Demand for Interest Confirmation Letter',
      hbaMcaAccount: '1713136',
      name: 'G J DAVE',
      wfStatus: 'Approval In Progress',
      status: 'Forward',
      from: '',
      nothing: ''
    },
  ];
  // Form Group
  saveCaseForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Variable
  public errorMessages;
  // Form COntrol
  inwardTypeCtrl: FormControl = new FormControl();
  // List
  inwarde_list: ListValue[] = [
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
  // Table SOurce
  displayedColumns: string[] = ['position', 'inwardNo', 'inwardDate', 'inwardType', 'empNo', 'hbaMcaAccount', 'name',
    'status', 'wfStatus', 'from', 'nothing'];
  dataSource = new MatTableDataSource<SaveCases>(this.ELEMENT_DATA);
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  directiveObject = new DPPFHbaDirectives(this.dialog);

  ngOnInit() {
    this.errorMessages = dppfHbaMessage;
    this.saveCaseData();
  }
  // Hba Dialog Ppup
  hbaDialod(): void {
    const dialogRef = this.dialog.open(HbaDialogComponent, {
      position: {
        top: '10px',
        right: '10px'
      },
      height: '100vw',
      width: '100vw',
      maxWidth: '95vw',
      panelClass: 'full-screen-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // Demand for interest letter
  demandDialog(): void {
    const dialogRef = this.dialog.open(DemandOfInterestConformationLetterComponent, {
      width: '100vw',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  saveCaseData() {
    this.saveCaseForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      accountNo: [''],
      inwardType: [''],
      empNo: [''],
      firstName: [''],
      middleName: [''],
      surName: [''],
    });
  }

  gotopage() {
    this.router.navigate(['/dppf-hba/inward-details']);
  }
  // Inward no Dialog
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // Emp No popup
  onEmpNo() {
    const dialogRef = this.dialog.open(EmployeeDialogBoxComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
