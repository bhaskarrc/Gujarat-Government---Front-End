import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { VenDiscMasteNewSto, VenDiscMasterSto } from 'src/app/model/stamp-processing';

const ELEMENT_DATA3: VenDiscMasterSto[] = [
  {
    checkbox: true,
    deno: '1',
    disc: '0',
  },
  {
    checkbox: true,
    deno: '2',
    disc: '0',
  },
  {
    checkbox: true,
    deno: '5',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '10',
    disc: '0',
  },
  {
    checkbox: false,
    deno: '20',
    disc: '0',
  },
];
 const ELEMENT_FINAL3: VenDiscMasteNewSto[] = [
  {
    deno: '1',
    disc: '6',
  },
  {
    deno: '2',
    disc: '6',
  },
  {
    deno: '5',
    disc: '6',
  },
];

@Component({
  selector: 'app-vendor-discount-master-sto-view',
  templateUrl: './vendor-discount-master-sto-view.component.html',
  styleUrls: ['./vendor-discount-master-sto-view.component.css']
})
export class VendorDiscountMasterStoViewComponent implements OnInit {

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
  subTre_List: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dhandhuka'},
    { value: '2', viewValue: 'Sub Treasury Office, Dholka'},
    { value: '3', viewValue: 'Sub Treasury Office, Sanad'},
    { value: '4', viewValue: 'Sub Treasury Office, Viramgam'},
  ];
  venNameCode_List: CommonListing[] = [
    { value: '1', viewValue: 'B.S.Patel (000123)'},
    { value: '2', viewValue: 'S.K.Singh (000124)'},
    { value: '3', viewValue: 'D.B.Patel (000125)'},
    { value: '4', viewValue: 'P.D.Kapadia (000126)'},
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

    dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
    // Final Tables
    dataSourceFinal3 = new MatTableDataSource(ELEMENT_FINAL3);
    dataSourceFinalHeading = [];

    displayedColumns: string[] = ['position', 'checkbox', 'denomination', 'disc'];
    displayFinal: string[] = ['position', 'denomination', 'discount', 'action'];
  finYearCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  venNameCodeCtrl: FormControl = new FormControl();

  vendorDiscSubForm: FormGroup;
  date: any = new Date();
  vCode = '123456';
  venName = 'Vendor';

  stampVal: string;

  onAdd = false;
  onAdd2 = false;
  onAdd3 = false;
  onAdd4 = false;
  onAdd5 = false;
  onAdd6 = false;
  onAdd7 = false;
  onAdd8 = false;
  onAdd9 = false;
  onAdd10 = false;
  onAdd11 = false;
  onAdd12 = false;
  onCheck = false;
  onCheck2 = false;
  onCheck3 = false;
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
      venNameCode: ['B.S.Patel (000123)'],
      subTreOff: ['1'],
      stamp: ['3'],
    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/vendor-discount-master-sto-list']);
  }


  checkboxValueChange(item) {
    this.stampVal = this.vendorDiscSubForm.controls.stamp.value;

    if (this.stampVal === '1') {
      this.onCheck = true;
    } else if (this.stampVal === '2') {
      this.onCheck2 = true;
    } else if (this.stampVal === '3') {
      this.onCheck3 = true;
    }
  }

}
