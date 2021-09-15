import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { LockingUnlockingTime, Attachment } from '../../../model/lockingunlocking';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';


const ELEMENT_DATA: LockingUnlockingTime[] = [
  { position: 1, name: 'Standing Charges Estimates - Form B & G-i-A', date: '' },
  { position: 2, name: 'New Item Estimates – Form C / F', date: '' },
  { position: 3, name: 'Item Continuous Estimates – Form E ', date: '' },
  { position: 4, name: 'New Work Estimates – Form G/H ', date: '' },
  { position: 5, name: 'Work in Progress – Form I ', date: '' },
  { position: 6, name: 'Revised Expenditure Estimates ', date: '' },
  { position: 7, name: 'Receipt Estimates', date: '' },
  { position: 8, name: 'Revised Receipt Estimates', date: '' },
];

@Component({
  selector: 'app-lockingunlocking',
  templateUrl: './lockingunlocking.component.html',
  styleUrls: ['./lockingunlocking.component.css']
})



export class LockingunlockingComponent implements OnInit {
  tabDisable: Boolean = true;
  selectedIndex: number;

  displayedColumns: string[] = ['position', 'name', 'date'];
  dataSource = ELEMENT_DATA;

  filteredFinYear: CommonListing[] = [
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2018-2019' },
    { value: '4', viewValue: '2017-2018' },
    { value: '5', viewValue: '2018-2017' },
    { value: '6', viewValue: '2016-2015' },
    { value: '7', viewValue: '2015-2014' },
    { value: '8', viewValue: '2014-2013' },
    { value: '9', viewValue: '2013-2012' },
    { value: '10', viewValue: '2012-2011' },

  ];


  createLockUnlickForm: FormGroup;

  finYearCtrl: FormControl = new FormControl();

  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

  Forwardto_list: CommonListing[] = [
    { value: '1', viewValue: 'Mr. K A Trivedi (Office Suprintendent)' }
  ];

  browseData: Attachment[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  fileBrowseIndex: any;
  toastr: any;

  dataSourceBrowse = new MatTableDataSource(this.browseData);


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private myElement: ElementRef,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  date: any = new Date();
  expendCharges: boolean;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.createLockUnlickForm = this.fb.group({
      finYear: ['1'],
      grNotificationNumber: [''],
      grNotificationDate: [''],
      refNO: [''],
      refDate: [''],
    });
  }

  saveLockUnlock() {
    console.log(this.createLockUnlickForm.value);
  }




  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.myElement.nativeElement.querySelector('#fileBrowse1').click();
    this.fileBrowseIndex = index;
  }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  gotoListing() {
    this.router.navigate(['./budget/lockingunlockinglisting']);
  }

  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }

  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }
  submitDialog() {
    const dialogRef = this.dialog.open(SubmitConfirmCommonDialigComponent1, {
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "yes") {

      }
    });
  }
}

@Component({
  selector: 'app-submit-confirm-common-dialig',
  templateUrl: './submit-confirm-common-dialig.component.html',
  // styleUrls: ['./submit-confirm-common-dialig.component.css']
  styleUrls: ['./lockingunlocking.component.css']
})
export class SubmitConfirmCommonDialigComponent1 implements OnInit {

  constructor(public dialogRef: MatDialogRef<SubmitConfirmCommonDialigComponent1>) { }

  ngOnInit() {
  }

  onCancel() {
    this.closeDialog('no');
  }

  onyes() {
    this.closeDialog('yes');
  }

  closeDialog(popup: 'no' | 'yes') {
    this.dialogRef.close(popup);
  }
}

