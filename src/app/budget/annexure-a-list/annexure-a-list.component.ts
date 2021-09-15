import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { DeleteConfirmDialogComponent } from '../wireframe-of-establishment-details/wireframe-of-establishment-details.component';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { AnnexureAList } from 'src/app/model/budget';

// Listing table Data
const ELEMENT_DATA: AnnexureAList[] = [
  {
    fYear: '2019-2020',
    bpnCodeNo: '13:Industries and Mines Department',
    lang:  'English',
    expenditType:  'Charged',
    cfMemo:  'CNF/1119/17/K,Dt.08/May/2019',
    status:  'Submitted',
   },
   {
    fYear: '2019-2020',
    bpnCodeNo: '22:Roads And Buildings Department',
    lang:  'Gujarati',
    expenditType:  'Voted',
    cfMemo:  'CNF/1119/12/K,Dt.26/Apr/2019',
    status:  'Submitted',
   },
   {
    fYear: '2019-2020',
    bpnCodeNo: '13:Industries and Mines Department',
    lang: 'English',
    expenditType: 'Voted',
    cfMemo: 'CNF/1119/12/K,Dt.30/Jun/2019',
    status:  'Draft',
  }
];
@Component({
  selector: 'app-annexure-a-list',
  templateUrl: './annexure-a-list.component.html',
  styleUrls: ['./annexure-a-list.component.css']
})
export class AnnexureAListComponent implements OnInit {
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
  bpn_list: CommonListing[] = [
    { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department'},
    { value: '2', viewValue: '13:Industries and Mines Department'},
    { value: '3', viewValue: '22:Roads And Buildings Department'},
  ];
  expType_list: CommonListing[] = [
    { value: '1', viewValue: 'Charged'},
    { value: '2', viewValue: 'Voted'},
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'bpnCodeNo', 'expenditType', 'cfMemo', 'status', 'action'];

  finYearCtrl: FormControl = new FormControl();
  bpnCtrl: FormControl = new FormControl();
  expTypeCtrl: FormControl = new FormControl();

  annexureListForm: FormGroup;
  errorMessages = budgetMessage;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.annexureListForm = this.fb.group({
      finYear: ['10'],
      bpn: [''],
      expType: [''],
    });
  }

  clearForm() {
    this.annexureListForm.reset();
  }
  // Delete Popup
  deleteConfirmPopup(index) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteRec(index);
      }
    });
  }
// Delete
  deleteRec(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

}
