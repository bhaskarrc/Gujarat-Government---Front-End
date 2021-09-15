import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { VenDiscMasteStoList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: VenDiscMasteStoList[] = [
  {
    fYear: '2019-2020',
    treSubTre: 'Sub Treasury Office, Kalol',
    vendorNameCode: 'B.S.Patel (000123)',
    stamp: 'Agency License'
   },
   {
    fYear: '2019-2020',
    treSubTre: 'Sub Treasury Office, Mansa',
    vendorNameCode: 'S.K.Singh (000124)',
    stamp: 'Foreign bill'
   },
   {
    fYear: '2019-2020',
    treSubTre: 'Sub Treasury Office, Dehgam',
    vendorNameCode: 'D.B.Patel (000125)',
    stamp: 'Hundi'
   }
];

@Component({
  selector: 'app-vendor-discount-master-sto-list',
  templateUrl: './vendor-discount-master-sto-list.component.html',
  styleUrls: ['./vendor-discount-master-sto-list.component.css']
})
export class VendorDiscountMasterStoListComponent implements OnInit {
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

  treSub_List: CommonListing[] = [
    { value: '1', viewValue: 'Treasury Office'},
    { value: '2', viewValue: 'Sub Treasury Office'},
  ];
  subTre_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dhandhuka'},
    { value: '2', viewValue: 'Sub Treasury Office, Dholka'},
    { value: '3', viewValue: 'Sub Treasury Office, Sanad'},
    { value: '4', viewValue: 'Sub Treasury Office, Viramgam'},
  ];
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License'},
    { value: '2', viewValue: 'Agreement'},
    { value: '3', viewValue: 'Court Fee Label'},
    { value: '4', viewValue: 'Court Fee Paper'},
    { value: '5', viewValue: 'Foreign bill'},
    { value: '6', viewValue: 'Hundi'},
    { value: '7', viewValue: 'Insurance'},
    { value: '8', viewValue: 'Non Judicial Paper'},
    { value: '9', viewValue: 'Notary'},
    { value: '10', viewValue: 'Revenue'},
    { value: '11', viewValue: 'Share transfer'},
    { value: '12', viewValue: 'Special Adhesive'},
    ];

    dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
    displayedColumns: string[] = ['position', 'fYear', 'treSubTre', 'vendorNameCode', 'stamp', 'action'];
  finYearCtrl: FormControl = new FormControl();
  treSubCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  vendorDiscSubForm: FormGroup;

  temp1Value = 'Treasury Office, Ahmedabad';
  date: any = new Date();
  vCode = '123456';

  stampVal: string;
  showSubTre = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.vendorDiscSubForm = this.fb.group({
      finYear: ['10'],
      vendorCode: [''],
      treSub: [''],
      subTreOff: [''],
      stamp: [''],
      temp1: [''],
    });
  }

  clearForm() {
    this.vendorDiscSubForm.reset();
  }

}
