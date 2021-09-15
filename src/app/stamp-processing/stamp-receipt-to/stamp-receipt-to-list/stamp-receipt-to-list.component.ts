import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SaveConfirmCommonDialogComponent } from '../../save-confirm-common-dialog/save-confirm-common-dialog.component';
import { CloseConfirmCommonDialogComponent } from '../../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { DeleteConfirmCommonDialogComponent } from '../../delete-confirm-common-dialog/delete-confirm-common-dialog.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { ElementRecToList } from 'src/app/model/stamp-processing';

// Listing table Data
const ELEMENT_DATA: ElementRecToList[] = [
  {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '14-Apr-2020',
    receivedFrom: 'Superintendent of Stamps Office, Gandhinagar',
    dateStamp: '15-Apr-2020',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Forwarded to Verifier',
    status: 'Pending',
   },
   {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '15-Apr-2020',
    receivedFrom: 'Sub Treasury Office, Mansa',
    dateStamp: '16-Apr-2020',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Approved by Approver',
    status: 'Approved',
   },
   {
    fYear: '2019-2020',
    rNumber: '51/00057/072019/23',
    rDate: '14-Apr-2020',
    receivedFrom: 'Superintendent of Stamps Office, Gandhinagar',
    dateStamp: '15-Apr-2020',
    recFromOn: 'Rajesh 10-Feb-2020 10:30',
    sentToON: 'Rajesh 10-Feb-2020 10:30',
    lyingWith: 'Mr. S G Yadav',
    wStatus: 'Cancelled',
    status: 'Pending',
   },
];
@Component({
  selector: 'app-stamp-receipt-to-list',
  templateUrl: './stamp-receipt-to-list.component.html',
  styleUrls: ['./stamp-receipt-to-list.component.css']
})
export class StampReceiptToListComponent implements OnInit {
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
  recFromValues_list: any[] = [
    { value: '1', viewValue: 'Treasury Office' },
    { value: '2', viewValue: 'Sub Treasury Office' },
    { value: '3', viewValue: 'Superintendent of Stamps Office' }
  ];

  refNo_List: CommonListing[] = [
  { value: '1', viewValue: '51/00057/072019/23'},
  { value: '2', viewValue: '51/00057/072019/32'},
  { value: '3', viewValue: '51/00057/072019/44'},
  ];
  receive_List: CommonListing[] = [
    { value: '1', viewValue: 'Received From' },
    { value: '2', viewValue: 'Sent To' },
  ];
  treOff_list: CommonListing[] = [
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
  subTreOff_list: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dehgam' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' },
    { value: '3', viewValue: 'Sub Treasury Office, Mansa' },
  ];
  wStatus_List: CommonListing[] = [
    { value: '1', viewValue: 'Cancelled'},
    { value: '2', viewValue: 'Forwarded to Verifier'},
    { value: '3', viewValue: 'Returned to Creator'},
    { value: '4', viewValue: 'Forwarded to Approver'},
    { value: '5', viewValue: 'Returned to Verifier'},
    { value: '6', viewValue: 'Approved by Approver'},
    { value: '7', viewValue: 'Returned to Creator'},
    { value: '8', viewValue: 'Rejected by Approver'},
  ];
  status_List: CommonListing[] = [
    { value: '1', viewValue: 'Pending'},
    { value: '2', viewValue: 'Issued'},
    ];

    dataSource = new MatTableDataSource(ELEMENT_DATA);
// Listing Table
    displayedColumns: string[] = ['position', 'fYear', 'rNumber', 'rDate', 'receivedFrom', 'dateStamp',
    'recFromOn', 'sentToON', 'lyingWith', 'wStatus', 'status', 'action'];
  finYearCtrl: FormControl = new FormControl();
  refNoCtrl: FormControl = new FormControl();
  receiveCtrl: FormControl = new FormControl();
  wStatusCtrl: FormControl = new FormControl();
  recFromValuesCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  treOffCtrl: FormControl = new FormControl();
  subTreOffCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  stampReceiptForm: FormGroup;
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);



  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampReceiptForm = this.fb.group({
      finYear: ['10'],
      treOff: [''],
      treOff2: ['District Treasury Office, Gandhinagar'],
      subTreOff: [''],
      recFromValues: [''],
      srFromDate: [''],
      srToDate: [''],
      refNo: [''],
      fromDate: [''],
      toDate: [''],
      challan: [''],
      receive: [''],
      recFrom: [''],
      sentTo: [''],
      wStatus: [''],
      status: [''],
    });
  }

  clearForm() {
    this.stampReceiptForm.reset();
  }
// Delete
  deleteConfirmPopup(index) {
    const dialogRef = this.dialog.open(DeleteConfirmCommonDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteRec(index);
      }
    });
  }

  deleteRec(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

}
