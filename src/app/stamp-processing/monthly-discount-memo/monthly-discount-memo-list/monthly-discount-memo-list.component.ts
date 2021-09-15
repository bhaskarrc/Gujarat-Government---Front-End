

import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementMonthMemoList } from 'src/app/model/stamp-processing';


// Listing table data
const ELEMENT_DATA: ElementMonthMemoList[] = [

  {
    fYear: '2019-2020',
    refDate: '14-Apr-2019',
    refNo: '51/00057/072019/23',
    office: 'District Treasury Office, Ahmedabad',

    status: 'Pending',
  },

  {
    fYear: '2019-2020',
    refDate: '15-Apr-2019',
    refNo: '51/00057/072019/44',
    office: 'District Treasury Office, Junagadh',

    status: 'Draft'
  },


  {
    fYear: '2019-2020',
    refDate: '23-May-2019',
    refNo: '51/00057/072019/56',
    office: 'Sub Treasury Office, Viramgam',

    status: 'Approved'
  },

  {
    fYear: '2019-2020',
    refDate: '21-Jun-2019',
    refNo: '51/00057/072019/86',
    office: 'Sub Treasury Office, Dhandhuka',

    status: 'Cancelled'
  },


];

@Component({
  selector: 'app-monthly-discount-memo-list',
  templateUrl: './monthly-discount-memo-list.component.html',
  styleUrls: ['./monthly-discount-memo-list.component.css']
})
export class MonthlyDiscountMemoListComponent implements OnInit {
// Search Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2011-2012' },
    { value: '2', viewValue: '2012-2013' },
    { value: '3', viewValue: '2013-2014' },
    { value: '4', viewValue: '2014-2015' },
    { value: '5', viewValue: '2015-2016' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2017-2018' },
    { value: '8', viewValue: '2018-2019' },
    { value: '9', viewValue: '2019-2020' },
    { value: '10', viewValue: '2020-2021' },
  ];

  status_List: any[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
    { value: '3', viewValue: 'Returned' },
    { value: '4', viewValue: 'Cancelled' },
    { value: '5', viewValue: 'Draft' },
  ];



  subTreasury_List: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office' },
    { value: '2', viewValue: 'Sub Treasury Office' },
  ];
  sbtreasury_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dhandhuka' },
    { value: '2', viewValue: 'Sub Treasury Office, Dholka' },
    { value: '3', viewValue: 'Sub Treasury Office, Sanad' },
    { value: '4', viewValue: 'Sub Treasury Office, Viramgam' },
  ];

  treasury_List: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'District Treasury Office, Amreli' },
    { value: '3', viewValue: 'District Treasury Office, Anand' },
    { value: '4', viewValue: 'District Treasury Office, Aravalli-Modasa' },
    { value: '5', viewValue: 'District Treasury Office, Banasakantha - Palanpur' },
    { value: '6', viewValue: 'District Treasury Office, Bhavnagar' },
    { value: '7', viewValue: 'District Treasury Office, Bhuj' },
    { value: '8', viewValue: 'District Treasury Office, Botad' },
    { value: '9', viewValue: 'District Treasury Office, Chhota Udepur' },
    { value: '10', viewValue: 'District Treasury Office, Dahod' },
    { value: '11', viewValue: 'District Treasury Office, Dang Ahwa' },
    { value: '12', viewValue: 'District Treasury Office, Devbhumi-Dwarka' },
    { value: '13', viewValue: 'District Treasury Office, Gandhinagar' },
    { value: '14', viewValue: 'District Treasury Office, Gir-Somnath' },
    { value: '15', viewValue: 'District Treasury Office, Jamnagar' },
    { value: '16', viewValue: 'District Treasury Office, Junagadh' },
    { value: '17', viewValue: 'District Treasury Office, Kheda-Nadiad' },
    { value: '18', viewValue: 'District Treasury Office, Kutch (Bhuj)' },
    { value: '19', viewValue: 'District Treasury Office, Mahisagar-Lunawadav' },
    { value: '20', viewValue: 'District Treasury Office, Mahisagar' },
    { value: '21', viewValue: 'District Treasury Office, Morbi' },
    { value: '22', viewValue: 'District Treasury Office, Narmada-Rajpipala' },
    { value: '23', viewValue: 'District Treasury Office, Navsari' },
    { value: '24', viewValue: 'District Treasury Office, Panchmahal (Godhara)' },
    { value: '25', viewValue: 'District Treasury Office, Patan' },
    { value: '26', viewValue: 'District Treasury Office, Porbandar' },
    { value: '27', viewValue: 'District Treasury Office, Rajkot' },
    { value: '28', viewValue: 'District Treasury Office, Sabarkantha – Himatnagar' },
    { value: '29', viewValue: 'District Treasury Office, Surat' },
    { value: '30', viewValue: 'District Treasury Office, Surendranagar' },
    { value: '31', viewValue: 'District Treasury Office, Tapi - Vyara' },
    { value: '32', viewValue: 'District Treasury Office, Vadodara' },
    { value: '33', viewValue: 'District Treasury Office, Valsad' },

  ];
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '1', viewValue: 'Court Fee Label' },
    { value: '2', viewValue: 'Court Fee Paper' },
    { value: '1', viewValue: 'Foreign bill' },
    { value: '2', viewValue: 'Hundi' },
    { value: '1', viewValue: 'Insurance' },
    { value: '2', viewValue: 'Non Judicial Paper' },
    { value: '1', viewValue: 'Notary' },
    { value: '2', viewValue: 'Revenue' },
    { value: '1', viewValue: 'Share transfer' },
    { value: '2', viewValue: 'Special Adhesive' },

  ];



  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'refNo', 'refDate', 'office', 'status',
    'action'];

  finYearCtrl: FormControl = new FormControl();


  subTreasuryCtrl: FormControl = new FormControl();
  treasuryCtrl: FormControl = new FormControl();
  sbtreasuryCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);


  statusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  stampIssueByListForm: FormGroup;
  subTreasuryVal: string;
  onAddTreasury = false;
  onAddSubTreasury = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampIssueByListForm = this.fb.group({
      finYear: ['10'],
      stamp: [''],
      refFromDate: [''],
      refToDate: [''],
      status: [''],
      subTreasury: [''],
      treasury: [''],
      sbtreasury: [''],
    });
  }

  whenSubTreasuryClick() {
    this.subTreasuryVal = this.stampIssueByListForm.controls.subTreasury.value;
    if (this.subTreasuryVal === '1') {
      this.onAddTreasury = true;
      this.onAddSubTreasury = false;
    } else if (this.subTreasuryVal === '2') {
      this.onAddSubTreasury = true;
      this.onAddTreasury = false;
    }
  }


  clearForm() {
    this.stampIssueByListForm.reset();
  }
// Delete
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
}

