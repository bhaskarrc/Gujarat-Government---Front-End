import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { ElementMonthMemo } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';



const ELEMENT_DATA: ElementMonthMemo[] = [
  {
    denomination: '50',

    discount: '20',
  },
  {
    denomination: '60',

    discount: '10',

  },
  {
    denomination: '100',

    discount: '40',
  },
  {
    denomination: '200',

    discount: '25',
  },
  {
    denomination: '20',

    discount: '30',
  }
];

const ELEMENT_DATA1: ElementMonthMemo[] = [
  {
    denomination: '50',

    discount: '20',
  },
  {
    denomination: '60',

    discount: '10',

  },
  {
    denomination: '100',

    discount: '40',
  },
  {
    denomination: '200',

    discount: '25',
  },
  {
    denomination: '20',

    discount: '30',
  }
];

const ELEMENT_DATA2: ElementMonthMemo[] = [
  {
    denomination: '50',

    discount: '20',
  },
  {
    denomination: '60',

    discount: '10',

  },
  {
    denomination: '100',

    discount: '40',
  },
  {
    denomination: '200',

    discount: '25',
  },
  {
    denomination: '20',

    discount: '30',
  }
];

@Component({
  selector: 'app-monthly-discount-memo-view',
  templateUrl: './monthly-discount-memo-view.component.html',
  styleUrls: ['./monthly-discount-memo-view.component.css']
})
export class MonthlyDiscountMemoViewComponent implements OnInit {

  subTreasury_List: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office' },
    { value: '2', viewValue: 'Sub Treasury Office' },
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


  month_List: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'Feburary' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);

  displayedColumns: string[] = ['position', 'denomination', 'discount'];


  subTreasuryCtrl: FormControl = new FormControl();
  treasuryCtrl: FormControl = new FormControl();


  monthCtrl: FormControl = new FormControl();

  monthlyDiscountMemoViewForm: FormGroup;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);
  date: any = new Date();

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.monthlyDiscountMemoViewForm = this.fb.group({
      finYear: ['2019-2020'],

      subTreasury: ['1'],
      month: ['1'],
      treasury: ['1'],
    });
  }




  goToDashboard() {
    this.router.navigate(['']);
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/monthly-discount-memo-list']);
  }
}

