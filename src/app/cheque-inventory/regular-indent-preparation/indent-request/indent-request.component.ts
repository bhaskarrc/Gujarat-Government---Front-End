import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { ChequeDetails } from 'src/app/model/yearly-indent';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { ChequeInventoryDirective } from 'src/app/common/directive/cheque-inventory';

@Component({
  selector: 'app-indent-request',
  templateUrl: './indent-request.component.html',
  styleUrls: ['./indent-request.component.css']
})
export class IndentRequestComponent implements OnInit {
  // dates
  maxDate = new Date(); todayDate = Date.now();

  constructor(private fb: FormBuilder, public dialog: MatDialog, public router: Router) { }
  indentRequestPreprationForm: FormGroup;
  directiveObj = new CommonDirective(this.router);
  ciDirectiveObj = new ChequeInventoryDirective(this.dialog);

  // form control
  accountHolderNameTypeCtrl: FormControl = new FormControl();
  chequeFormatTypeCtrl: FormControl = new FormControl();
  chequeTypeCtrl: FormControl = new FormControl();

  // accountHolderNameType list
  accountHolderNameType_list: CommonListing[] = [
    { value: '1', viewValue: 'A B Patel' },
    { value: '2', viewValue: 'C D Patel' },
    { value: '3', viewValue: 'E F Patel' }
  ];
  // chequeFormatType list
  chequeFormatType_list: CommonListing[] = [
    { value: '1', viewValue: 'Cheque Book' },
    { value: '2', viewValue: 'Continuous Roll' }
  ];
  // chequeType list
  chequeType_list: CommonListing[] = [
    { value: '1', viewValue: 'CTS 2019' },
    { value: '2', viewValue: 'CTS 2020' }
  ];

  // table ChequeDetails
  Element_Data_2: any[] = [
    {
      department: 'Agriculture Department', chequeFormat: 'Cheque Book', chequeLeaves: '50', quantity: '22',
      chequeType: 'CTS 2019', treasuryOfficerName: 'Treasury Officer, Gandhinagar',
      districtTreasuryAddress: 'Ground Floor, Block- D, M. S Building, Gandhinagar 382016', contactNo: '2342342343', emailId: '', edit: true
    },
    {
      department: 'Tribal Department', chequeFormat: 'Continuous Roll', chequeLeaves: '100', quantity: '10',
      chequeType: 'CTS 2020', treasuryOfficerName: 'Treasury Officer, Gandhinagar',
      districtTreasuryAddress: 'Ground Floor, Block- D, M. S Building, Gandhinagar 382016', contactNo: '989898989', emailId: ' ', edit: true
    }
  ];

  chequeDetailsDataSource = new MatTableDataSource<ChequeDetails>(this.Element_Data_2);
  chequeDetailsDisplayedColumns = [
    'select',
    'position', 'department', 'chequeFormat', 'chequeLeaves', 'quantity',
    'chequeType', 'treasuryOfficerName', 'districtTreasuryAddress', 'contactNo', 'emailId', 'action'
  ];


  ngOnInit() {
    this.indentRequestPreprationForm = this.fb.group({
      indentDate: new Date('8/8/2020'),
      bankBranch: ['Adalaj, Gandhinagar'],
      treasury: ['District Treasury Office,Gandghinagar'],
      accountHolderName: [''],
      sbiBranchAccountNo: ['0000002031240312'],
      accountType: [''],
      otherDetails: [''],
    });

  }

  // to clear form
  clearForm() {
    this.indentRequestPreprationForm.reset();
  }

  // delete chequeDetails row
  deletechequeDetailsData(element) {
    this.chequeDetailsDataSource.data.splice(element, 1);
    this.chequeDetailsDataSource = new MatTableDataSource(this.chequeDetailsDataSource.data);
  }

  // edit rows
  onEdit(element) {
    element.edit = !element.edit;
  }

  // on list
  gotoListing() {
    this.router.navigate(['./ci/regular-indent-request']);
  }

  reset() {
    this.indentRequestPreprationForm.patchValue({
      indentDate: new Date('8/8/2020'),
      bankBranch: 'Adalaj, Gandhinagar',
      treasury: 'District Treasury Office,Gandghinagar',
      accountHolderName: '',
      sbiBranchAccountNo: '0000002031240312',
      accountType: '',
      otherDetails: '',
    });
  }
}
