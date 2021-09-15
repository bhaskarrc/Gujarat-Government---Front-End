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
import { PhysicalVerifList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: PhysicalVerifList[] = [
  {
    fYear: '2019-2020',
    toffice: 'Mahisagar-Lunawada Treasury Office',
    rNumber: '51/00057/072019/23',
    closingDate: '12-Apr-2019',
    vName: 'Mr.A.B Sharme',
    refDateTime: '12-Dec-2020 04:17 PM',
    desi: 'Account Officer',
    status: 'Draft',
  },
  {
    fYear: '2019-2020',
    toffice: 'Chhota Udepur Treasury Office',
    rNumber: '51/00057/072019/23',
    closingDate: '10-May-2020',
    vName: 'Mr.A.B Sharme',
    refDateTime: '12-Dec-2020 04:17 PM',
    desi: 'Account Officer',
    status: 'Pending',
  },
  {
    fYear: '2019-2020',
    toffice: 'Surat Treasury Office',
    rNumber: '51/00057/072019/23',
    closingDate: '13-Aug-2020',
    vName: 'Mr.A.B Sharme',
    refDateTime: '12-Dec-2020 04:17 PM',
    desi: 'Account Officer',
    status: 'Submitted'
  },
];

@Component({
  selector: 'app-physical-stock-verification-dat-list',
  templateUrl: './physical-stock-verification-dat-list.component.html',
  styleUrls: ['./physical-stock-verification-dat-list.component.css']
})
export class PhysicalStockVerificationDatListComponent implements OnInit {
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
  treasury_List: CommonListing[] = [
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


  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Draft' },
    { value: '2', viewValue: 'Pending' },
    { value: '2', viewValue: 'Submitted' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
  displayedColumns: string[] = ['position', 'fYear', 'toffice', 'closingDate', 'vName',
    'desi', 'status', 'action'];

  finYearCtrl: FormControl = new FormControl();
  trOfficeCtrl: FormControl = new FormControl();
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  statusCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  physicalStockDatListForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.physicalStockDatListForm = this.fb.group({
      finYear: ['10'],
      troffice: [''],
      visitFromDate: [''],
      todate: [''],
      status: [''],

    });
  }

  clearForm() {
    this.physicalStockDatListForm.reset();
  }
// Delete
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
}

