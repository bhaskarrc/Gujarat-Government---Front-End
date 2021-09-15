import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatDialog} from '@angular/material';
import { Router } from '@angular/router';
import { SubmitConfirmCommonDialogComponent } from '../annexure-a/annexure-a.component';
import { BudgetDirectives } from 'src/app/common/directive/budget-directive';

@Component({
  selector: 'app-upload-as-account',
  templateUrl: './upload-as-account.component.html',
  styleUrls: ['./upload-as-account.component.css']
})
export class UploadAsAccountComponent implements OnInit {

  uploadAccount: FormGroup;
  finYearCtrl: FormControl = new FormControl();
  accountTypeCtrl: FormControl = new FormControl();
  accountTypeCtrl2: FormControl = new FormControl();
  bpnCodeCtrl: FormControl = new FormControl();
  directiveObject = new BudgetDirectives(this.dialog);

  // Entry Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2017-2018' },
    { value: '2', viewValue: '2018-2019' },
    { value: '3', viewValue: '2019-2020' },
    { value: '4', viewValue: '2020-2021' },
  ];

  accountTypeList1: CommonListing[] = [
    { value: '1', viewValue: 'Receipt Account' },
  ];

  accountTypeList2: CommonListing[] = [
    { value: '1', viewValue: 'Expenditure Account'},
  ];

  bpnList: CommonListing[] = [
    {value: '1', viewValue: '02: Receipt under Consolidated Fund & Transaction under Contingency Fund & Public Accounts, etc.'},
    {value: '2', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department '},
    {value: '3', viewValue: '04:Education Department'},
    {value: '4', viewValue: '05:Energy and Petro-Chemicals Department'},
    {value: '5', viewValue: '06:Finance Department'},
    {value: '6', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department'},
  ];

  fileBrowseIndex: number;
  brwoseData: any[] = [{
    name: undefined,
    file: undefined,
    attachment: 'Final Order'
  }];

  // Attachments Table
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = ['fileName', 'browse'];


  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private router: Router,
    public dialog: MatDialog,

    ) { }

  ngOnInit() {
    this.uploadAccount = this.fb.group({
      financialYear: ['1'],
      bpnCode: [''],
      accountType: ['1'],
      accountType2: ['1'],
    });
  }

  // Attachments Section Functions
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  gotoListing() {
    this.router.navigate(['./budget/upload-ag-accounts-list']);
  }
  saveUploadAccount() {}
  goToDashboard() {}

}
