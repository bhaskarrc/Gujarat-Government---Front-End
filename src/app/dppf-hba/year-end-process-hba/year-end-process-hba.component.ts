import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GoDialogComponent } from './go-dialog/go-dialog.component';

@Component({
  selector: 'app-year-end-process-hba',
  templateUrl: './year-end-process-hba.component.html',
  styleUrls: ['./year-end-process-hba.component.css']
})
export class YearEndProcessHbaComponent implements OnInit {
  // Form Group
  yearEndProcessForm: FormGroup;
  // DAte
  todayDate = Date.now();
  maxDate = new Date();
  passwordInfo = false;
  editable = true;

  // Form Control
  disCtrl: FormControl = new FormControl();
  // List
  district_list: CommonListing[] = [
    { value: '1', viewValue: 'Sr.Accounts Officer, A.G., Rajkot [ Total : 2 Processed : 0 Difference : 2 ] ' },
    { value: '2', viewValue: 'Ahmedabad [ Total : 14179 Processed : 0 Difference : 14179 ] ' },
    { value: '3', viewValue: 'Amreli [ Total : 1143 Processed : 0 Difference : 1143 ] ' },
    { value: '4', viewValue: 'Palanpur [ Total : 1471 Processed : 0 Difference : 1471 ] ' },
    { value: '5', viewValue: 'Bharuch [ Total : 1819 Processed : 0 Difference : 1819 ]' },
    { value: '6', viewValue: 'DISTRICT TREASURY OFFICE, BHAVNAGAR [ Total : 3017 Processed : 0 Difference : 3017 ]' },
    { value: '7', viewValue: 'Dang Ahwa [ Total : 270 Processed : 0 Difference : 270 ] ' },
    { value: '8', viewValue: 'Gandhinagar [ Total : 8612 Processed : 0 Difference : 8612 ] ' },
    { value: '9', viewValue: 'Jamnagar [ Total : 2788 Processed : 0 Difference : 2788 ]' },
    { value: '10', viewValue: 'Junagadh [ Total : 3566 Processed : 0 Difference : 3566 ]' },
    { value: '11', viewValue: 'Rajkot [ Total : 9476 Processed : 0 Difference : 9476 ] ' },
    { value: '12', viewValue: 'Surat [ Total : 3234 Processed : 0 Difference : 3234 ]' },
  ];

  constructor(public dialog: MatDialog, private fb: FormBuilder) { }


  ngOnInit() {
    this.yearEndProcessData();
  }

  yearEndProcessData() {
    this.yearEndProcessForm = this.fb.group({
      district: [''],
    });
  }

  // Open GoDialog
  goTopage() {
    const dialogRef = this.dialog.open(GoDialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.passwordInfo = true;
      this.editable = false;
    });
  }
}
