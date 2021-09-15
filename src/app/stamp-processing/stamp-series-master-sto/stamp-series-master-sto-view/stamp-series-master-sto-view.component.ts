
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';



const ELEMENT_DATA3: any[] = [
  {

    denomination: '1',
    unitValue: '1000.00',
    stampSheet: '4',
    from: 'A-000001',
    to: 'A-000100',
  },
  {

    denomination: '2',
    unitValue: '2000.00',
    stampSheet: '10',
    from: 'B-000001',
    to: 'B-000100',
  },
  {

    denomination: '5',
    unitValue: '5000.00',
    stampSheet: '5',
    from: 'C-000001',
    to: 'C-000100',
  },
  {

    denomination: '10',
    unitValue: '3000.00',
    stampSheet: '7',
    from: 'D-000001',
    to: 'D-000100',
  },
  {

    denomination: '20',
    unitValue: '8000.00',
    stampSheet: '8',
    from: 'E-000001',
    to: 'E-000100',
  }
];


@Component({
  selector: 'app-stamp-series-master-sto-view',
  templateUrl: './stamp-series-master-sto-view.component.html',
  styleUrls: ['./stamp-series-master-sto-view.component.css']
})
export class StampSeriesMasterStoViewComponent implements OnInit {

  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '3', viewValue: 'Court Fee Label' },
    { value: '4', viewValue: 'Court Fee Paper' },
    { value: '5', viewValue: 'Foreign bill' },
    { value: '6', viewValue: 'Hundi' },
    { value: '7', viewValue: 'Insurance' },
    { value: '8', viewValue: 'Non Judicial Paper' },
    { value: '9', viewValue: 'Notary' },
    { value: '10', viewValue: 'Revenue' },
    { value: '11', viewValue: 'Share transfer' },
    { value: '12', viewValue: 'Special Adhesive' },

  ];

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
  dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
  displayedColumns: string[] = ['position', 'denomination', 'unitValue',
    'stampSheet', 'from', 'to'];

  stampCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
  stampMasterStoViewForm: FormGroup;
  date: any = new Date();
  tofficeVal = 'District Treasury Office, Ahmedabad';

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampMasterStoViewForm = this.fb.group({
      finYear: ['10'],
      toffice: [''],
      challan: ['1'],
    });
  }
  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-series-master-sto-list']);
  }

}

