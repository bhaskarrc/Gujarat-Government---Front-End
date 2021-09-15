import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import { WorkflowDetailsGrantComponent } from 'src/app/treasury-bill/workflow-details-grant/workflow-details-grant.component';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';
import { ToLevel, ListValue } from 'src/app/model/treasury-bill';


@Component({
  selector: 'app-signature-dialog',
  templateUrl: 'signature-dialog.html',
})

export class ToSignatureDialogComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ToSignatureDialogComponent>
  ) { }

  vitocancel(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'app-to-level',
  templateUrl: './to-level.component.html',
  styleUrls: ['./to-level.component.css']
})
export class ToLevelComponent implements OnInit {
  Element_Data: ToLevel[] = [
    {
      ddoNo: '552',
      cardexNo: '4',
      ddoName: '	Collector Office, Gandhinagar',
      status: 'Approved',
      fromDate: '12-Jan-2019',
      toDate: '02-Mar-2020',
      type: 'Primary'
    },
    {
      ddoNo: '431',
      cardexNo: '3',
      ddoName: '	Accounts Officer,DISTRICT INDUSTRIES OFFICE, BHUJ, Bhuj, Kachchha ',
      status: 'Pending for verification',
      fromDate: '12-Jan-2019',
      toDate: '02-Mar-2020',
      type: 'Secondary'
    },
    {
      ddoNo: '416',
      cardexNo: '4',
      ddoName: '	Collector OFFICE, BHUJ, Bhuj, Kachchha  ',
      status: 'Approved',
      fromDate: '12-Jan-2019',
      toDate: '02-Mar-2020',
      type: 'Primary'
    },

  ];
  // Date
  todayDate = new Date();
  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  statusctrl: FormControl = new FormControl();
  // Form Group
  toverificationFrom: FormGroup;
  // Variable
  isSearch: Boolean = true;
  fileBrowseIndex: number;
  fileData;
  // Table Source
  newdisplayedColumns: string[] = ['srno', 'ddoNo', 'cardexNo', 'ddoName',
    'fromDate', 'toDate', 'type', 'view_image', 'view_delete_image', 'status'];
  newdataSource = new MatTableDataSource(this.Element_Data);
  selection = new SelectionModel<any>(true, []);
  // List
  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	Collector Office, Gandhinagar' },
  ];

  status_list: ListValue[] = [
    { value: '1', viewValue: '	Approved' },
    { value: '2', viewValue: '	Collector Office, Gandhinagar' },
  ];
  constructor(private router: Router, private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  ngOnInit() {
    this.toverificationData();
  }


  toverificationData() {
    this.toverificationFrom = this.fb.group({
      ddoNo: [''],
      cardexNo: [''],
      ddoName: [''],
      statu: ['']
    });

  }

  // File Upload On Click Upload
  openFileSelector2() {
    this.el.nativeElement.querySelector('#fileBrowse-nominee').click();
  }
  onFileSelection2(fileSelected, item) {
    if (fileSelected.target && fileSelected.target.files) {
      this.fileData = fileSelected.target.files[0];

      item.fileBrowseNomi = false;
    }

  }


  // TO signature Dialog
  openDialog() {
    const dialogRef = this.dialog.open(ToSignatureDialogComponent, {
      width: 'auto',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }
}


