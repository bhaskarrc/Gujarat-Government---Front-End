
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';


const ELEMENT_DATA: any[] = [
  {
    denomination: '1',
    availQty: '10',
    authQty: '8',
    requestedQuantity: '5',
    qtyapproved: '100',
    unitValue: '1',
    stampSheet: '1',
    from: '10',

  },
  {
    denomination: '2',
    availQty: '9',
    authQty: '7',
    requestedQuantity: '10',
    qtyapproved: '50',
    unitValue: '2',
    stampSheet: '2',
    from: '50',

  },
  {
    denomination: '5',
    availQty: '11',
    authQty: '10',
    requestedQuantity: '15',
    qtyapproved: '100',
    unitValue: '4',
    stampSheet: '4',
    from: '100',

  },
  {
    denomination: '10',
    availQty: '10',
    authQty: '10',
    requestedQuantity: '30',
    qtyapproved: '150',
    unitValue: '10',
    stampSheet: '10',
    from: '55',

  },
  {
    denomination: '20',
    availQty: '9',
    authQty: '0',
    requestedQuantity: '25',
    qtyapproved: '300',
    unitValue: '20',
    stampSheet: '20',
    from: '15',
  }
];



@Component({
  selector: 'app-indent-consolidation-view',
  templateUrl: './indent-consolidation-view.component.html',
  styleUrls: ['./indent-consolidation-view.component.css']
})
export class IndentConsolidationViewComponent implements OnInit {

  subTreasury_List: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad Treasury Office' },
    { value: '2', viewValue: 'Amreli Treasury Office' },
    { value: '3', viewValue: 'Anand Treasury Office' },
    { value: '4', viewValue: 'Aravalli-Modasa Treasury Office' },
    { value: '5', viewValue: 'Banasakantha – Palanpur Treasury Office' },
    { value: '6', viewValue: 'Bhavnagar Treasury Office' },
    { value: '7', viewValue: 'Bharuch Treasury Office' },
    { value: '8', viewValue: 'Botad Treasury Office' },
    { value: '9', viewValue: 'Chhota Udepur Treasury Office' },
    { value: '10', viewValue: 'Dahod Treasury Office' },
    { value: '11', viewValue: 'Dang – Ahwa Treasury Office' },
    { value: '12', viewValue: 'Devbhoomi Dwarka-Jamkhambhaliya Treasury Office' },
    { value: '13', viewValue: 'Gandhinagar Treasury Office' },
    { value: '14', viewValue: 'Gir somnath (Veraval) Treasury Office' },
    { value: '15', viewValue: 'Jamnagar Treasury Office' },
    { value: '16', viewValue: 'Junagadh Treasury Office' },
    { value: '17', viewValue: 'Kheda-Nadiad Treasury Office' },
    { value: '18', viewValue: 'Kutch (Bhuj) Treasury Office' },
    { value: '19', viewValue: 'Mahesana Treasury Office' },
    { value: '20', viewValue: 'Mahisagar-Lunawada Treasury Office' },
    { value: '21', viewValue: 'Morbi Treasury Office' },
    { value: '22', viewValue: 'Narmada-Rajpipala Treasury Office' },
    { value: '23', viewValue: 'Navsari Treasury Office' },
    { value: '24', viewValue: 'Panchmahal (Godhara) Treasury Office' },
    { value: '25', viewValue: 'Patan Treasury Office' },
    { value: '26', viewValue: 'Porbandar Treasury Office' },
    { value: '27', viewValue: 'Rajkot Treasury Office' },
    { value: '28', viewValue: 'Sabarkantha – Himatnagar Treasury Office' },
    { value: '29', viewValue: 'Tapi – Vyara Treasury Office' },
    { value: '30', viewValue: 'Vadodara Treasury Office' },
    { value: '31', viewValue: 'Valsad Treasury Office' },
    { value: '32', viewValue: 'Surat Treasury Office' },
    { value: '33', viewValue: 'Surendranagar Treasury Office' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['position', 'denomination', 'availQty',
    'authQty', 'requestedQuantity', 'qtyapproved', 'unitValue', 'stampSheet', 'from', ];


  subTreasuryCtrl: FormControl = new FormControl();

  venNameVal = 'Court Fee Paper';
  indentConsolidationViewForm: FormGroup;
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
    this.indentConsolidationViewForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],
      indentType: ['Regular Indent', Validators.required],
      issueDate: ['15-Oct-2018', Validators.required],
      indentDuration: ['01-Jul-2019 to 31-Dec-2019', Validators.required],
      subTreasury: ['1', Validators.required],
      indentNumber: ['51/00057/072019/23', Validators.required],
      lastRaisedDate: ['21-Mar-2019', Validators.required],

    });
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/indent-consolidation-list']);
  }
}

