import { OutwardCasesSavedCasesInterface, OutwardCasesAccountGenerationDialog } from './../../model/dppf-hba';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { DialogData } from 'src/app/model/standing-charge';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outward-case-hba',
  templateUrl: './outward-case-hba.component.html',
  styleUrls: ['./outward-case-hba.component.css']
})
export class OutwardCaseHbaComponent implements OnInit {
  // Form Group
  outwardCasesForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // form controls
  typeOfStatusCtrl: FormControl = new FormControl();
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  directiveObject = new DPPFHbaDirectives(this.dialog);
  // Table Source

  ELEMENT_DATA: OutwardCasesSavedCasesInterface[] = [

    {
      inwardNO: 'NDC/9/2020/123',
      inwardDate: '10-Mar-2019',
      inwardType: 'Class 4 Final Payment Register',
      hbamcaNo: '1231230',
      name: 'Vijay Chauhan',
      outwardNo: '115772/11/03/2019',
      outwardDate: '12-Feb-2020',
      status: 'Objected',
      workflowStatus: 'Objected',
    },
    {

      inwardNO: 'DIC/9/2020/123',
      inwardDate: '12-Feb-2020',
      inwardType: 'Class 4 Final Payment Register',
      hbamcaNo: '1238530',
      name: 'Depak Sharma',
      outwardNo: '315772/11/03/2019',
      outwardDate: '10-Feb-2019',
      status: 'Objected',
      workflowStatus: 'Objected',
    },
    {

      inwardNO: 'NDC/9/2020/123',
      inwardDate: '10-Mar-2019',
      inwardType: 'Class 4 Final Payment Register',
      hbamcaNo: '1241230',
      name: 'Neha Tyagi',
      outwardNo: '615772/11/03/2020',
      outwardDate: '10-Jan-2019',
      status: 'Objected',
      workflowStatus: 'Objected',
    },
    {
      inwardNO: 'DIC/9/2020/123',
      inwardDate: '26-Jan2020',
      inwardType: 'Class 4 Final Payment Register',
      hbamcaNo: '1231251',
      name: 'Sanket Modi',
      outwardNo: '215772/11/03/2019',
      outwardDate: '10-Mar-2019',
      status: 'Objected',
      workflowStatus: 'Objected',

    },
  ];

  displayedColumns: string[] = [
    'select',
    'inwardNO',
    'inwardDate',
    'inwardType',
    'hbamcaNo',
    'name',
    'outwardNo',
    'outwardDate',
    'status',
    'workflowStatus',
  ];

  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar' },
  ];

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodra' },
  ];


  classTypeOfInward: ListValue[] = [
    { value: '1', viewValue: 'Demand for Interest Conformation Letter' },
    { value: '2', viewValue: 'Demand for NDC' },
    { value: '3', viewValue: 'Demand for refund order' },
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
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '4', viewValue: '2023' },
    { value: '5', viewValue: '2024' },

  ];

  statusList: ListValue[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Outwarded' },
  ];

  dataSource = new MatTableDataSource<OutwardCasesSavedCasesInterface>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.outwardCasesForm = this.fb.group({
      search: '',
      inwardNumber: '',
      inwardFromDate: '',
      inwardToDate: '',
      typeOfInward: '',
      district: '',
      treasuryPao: '',
      year: '',
      month: '',
      status: '',
    });
  }

  // Open inwardNoDialog
  openSearch(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '1200px',
      height: '500px',

    }
    );
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

// Outward Case Dialog
@Component({
  selector: 'app-outward-cases-dialog',
  templateUrl: './outward-cases-dialog.html'
})

// tslint:disable-next-line: component-class-suffix
export class OutwardCaseDialog implements OnInit {
  maxDate = new Date();
  errorMessage;
  searchVariable = false;
  directiveObject = new DPPFHbaDirectives(this.dialog);
  accountDetailDialogForm: FormGroup;
  // form controls
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  // lists
  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar' },
  ];

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodra' },
  ];


  classTypeOfInward: ListValue[] = [
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
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2010' },
    { value: '2', viewValue: '2011' },
    { value: '3', viewValue: '2012' },
    { value: '4', viewValue: '2013' },
    { value: '5', viewValue: '2014' },
    { value: '6', viewValue: '2015' },
    { value: '7', viewValue: '2016' },
    { value: '8', viewValue: '2017' },
    { value: '9', viewValue: '2018' },
    { value: '10', viewValue: '2019' },
    { value: '11', viewValue: '2020' },

  ];

  Element_Data: OutwardCasesAccountGenerationDialog[] = [
    {
      inwardNo: '32345/01/2019',
      inwardDate: '12/01/2020',
      typeOfInward: 'Class 4/DW/WC',
      district: 'Mahisagar',
      treasuryPao: 'Raman Singh',
      year: '2020',
      month: 'January',
    },
  ];

  displayedColumns: string[] = [
    'select',
    'inwardNo',
    'inwardDate',
    'typeOfInward',
    'district',
    'treasuryPao',
    'year',
    'month',
  ];

  dataSource = new MatTableDataSource<OutwardCasesAccountGenerationDialog>(this.Element_Data);

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OutwardCaseDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router, public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.accountDetailDialogForm = this.fb.group({
      inwardNumber: '',
      inwardDate: '',
      typeOfInward: '',
      district: '',
      treasuryPao: '',
      year: '',
      status: '',
      month: '',
    });
  }
  // On Close
  okClick($event?) {
    this.dialogRef.close();
  }
  // On Reset
  resetForm() {
    this.accountDetailDialogForm.reset();
  }
  // On Inward No Link
  searchInwardNo() {
    if (this.accountDetailDialogForm.controls.inwardNumber.value.length > 0) {
      this.searchVariable = true;
    }
  }
}






