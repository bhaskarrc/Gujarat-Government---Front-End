import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { DeleteConfirmDialogComponent } from '../../wireframe-of-establishment-details/wireframe-of-establishment-details.component';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { FdGroupMappingList } from 'src/app/model/budget';


// Listing table Data
const ELEMENT_DATA: FdGroupMappingList[] = [
  {
    groupName: 'Group 1',
   },
   {
    groupName: 'Group 2',
   }
];
@Component({
  selector: 'app-fd-group-mapping-list',
  templateUrl: './fd-group-mapping-list.component.html',
  styleUrls: ['./fd-group-mapping-list.component.css']
})
export class FdGroupMappingListComponent implements OnInit {

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

  // Listing Table
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['position', 'groupName', 'action'];

  finYearCtrl: FormControl = new FormControl();

  fdgrpMappingList: FormGroup;
  errorMessages = budgetMessage;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.fdgrpMappingList = this.fb.group({
      finYear: ['10'],
      groupName: [''],
    });
  }

  clearForm() {
    this.fdgrpMappingList.reset();
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
