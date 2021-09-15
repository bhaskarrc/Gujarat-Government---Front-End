import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { ElementSsoToToView, ElementSsoToTo } from 'src/app/model/stamp-processing';


// Listing table data
const ELEMENT_DATA: ElementSsoToTo[] = [
  {
    typeOfStamp: 'Court Fee Paper',
    denominationvalue: '10',
    availQty: '10',
    authQty: '8',
    requestedQuantity: '5',
    qtyapproved: '',
    from: 'A-000001',
    to: 'A-000100',
    qtyApprScr: '6',
    amt: '',
    isDisable: false,
  },
  {
    typeOfStamp: 'Court Fee Paper',
    denominationvalue: '50',
    availQty: '9',
    authQty: '7',
    requestedQuantity: '10',
    qtyapproved: '',
    from: 'A-000001',
    to: 'A-000100',
    qtyApprScr: '4',
    amt: '',
    isDisable: false,
  },
  {
    typeOfStamp: 'Court Fee Paper',
    denominationvalue: '100',
    availQty: '11',
    authQty: '10',
    requestedQuantity: '15',
    qtyapproved: '',
    from: 'A-000001',
    to: 'A-000100',
    qtyApprScr: '5',
    amt: '',
    isDisable: false,
  },
  {
    typeOfStamp: 'Court Fee Label',
    denominationvalue: '1',
    availQty: '10',
    authQty: '10',
    requestedQuantity: '30',
    qtyapproved: '',
    from: '-',
    to: '-',
    qtyApprScr: '5',
    amt: '',
    isDisable: true,
  },
  {
    typeOfStamp: 'Court Fee Label',
    denominationvalue: '2',
    availQty: '9',
    authQty: '0',
    requestedQuantity: '25',
    qtyapproved: '',
    from: '-',
    to: '-',
    qtyApprScr: '5',
    amt: '',
    isDisable: true,
  }
];




@Component({
  selector: 'app-stamp-issue-by-sso-to-to-view',
  templateUrl: './stamp-issue-by-sso-to-to-view.component.html',
  styleUrls: ['./stamp-issue-by-sso-to-to-view.component.css']
})
export class StampIssueBySsoToToViewComponent implements OnInit {

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

  headerJso: HeaderElement[] = [
    { label: 'Financial Year', value: '2020-2021' },
    { label: 'Gross Total of Indent', value: 'Rs. 54000' },
    { label: 'Name of Office', value: 'Superintendent of Stamp Office' },
    { label: 'Duration of Indent', value: '4-May-2020 to 8-Nov-2020' },
    { label: 'Date of Indent', value: '3-Apr-2020' },
    { label: 'Indent Received From', value: 'District Treasury Office, Gandhinagar' },
    { label: 'Type of Indent', value: 'Regular Indent' },
  ];

  indent_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/082019/23' },
  ];

  attachmentObj: any[] = [
    {
      type: 'stamp-view',
      attachmentType: 'Others',
    },
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Entry Table
  displayedColumns: string[] = ['position', 'typeOfStamp', 'denominationvalue', 'availQty',
    'authQty', 'requestedQuantity', 'qtyapproved', 'from', 'to', 'qtyApprScr', 'amt'];


  subTreasuryCtrl: FormControl = new FormControl();

  indentCtrl: FormControl = new FormControl();
  venNameVal = 'Court Fee Paper';
  date: any = new Date();
  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,) {
  }

  ngOnInit() { }

  goToDashboard() {
    this.router.navigate(['']);
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/stamp-issue-by-sso-to-to-list']);
  }

  closeConfirmationPopup() {
    const dialogRef = this.dialog.open(CloseConfirmCommonDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.router.navigate(['']);
      }
    });
  }

  sumbit() {
    const dialogRef = this.dialog.open(CloseConfirmCommonDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {

      }
    });
  }
}

