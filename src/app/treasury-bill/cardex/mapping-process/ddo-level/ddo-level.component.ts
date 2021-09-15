import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { ToastrService } from 'ngx-toastr';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsGrantComponent } from 'src/app/treasury-bill/workflow-details-grant/workflow-details-grant.component';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';
import { DDOLEVEL, ListValue } from 'src/app/model/treasury-bill';


@Component({
  selector: 'app-ddo-level',
  templateUrl: './ddo-level.component.html',
  styleUrls: ['./ddo-level.component.css']
})
export class DdoLevelComponent implements OnInit {
  Element_Data: DDOLEVEL[] = [
    {
      ddoNo: '552',
      cardexNo: '4',
      ddoName: '	Collector Office, Gandhinagar',
      fromDate: '12-Jan-2019',
      toDate: '02-Mar-2020',
      type: 'Primary'
    }
  ];

  // Date
  todayDate = new Date();
  // Form Group
  ddoverificationForm: FormGroup;
  // Variable
  fileBrowseIndex: number;
  fileData;
  isSearch: Boolean = true;
  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  // Table Source
  newdisplayedColumns: string[] = ['srno', 'ddoNo', 'cardexNo', 'ddoName',
    'fromDate', 'toDate', 'type', 'view_image', 'view_delete_image',];
  newdataSource = new MatTableDataSource(this.Element_Data);
  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	Collector Office, Gandhinagar' },
  ];
  selection = new SelectionModel<any>(true, []);
  constructor(private router: Router, private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  ngOnInit() {
    this.ddoverificationData();
  }
  ddoverificationData() {
    this.ddoverificationForm = this.fb.group({
      cardexNo: [''],
      ddoName: [''],
    });
  }
  openFileSelector2() {
    this.el.nativeElement.querySelector('#fileBrowse-nominee').click();
  }
  onFileSelection2(fileSelected, item) {
    if (fileSelected.target && fileSelected.target.files) {
      this.fileData = fileSelected.target.files[0];
      item.fileBrowseNomi = false;
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.newdataSource.data.length;
    return numSelected === numRows;
  }

  // Signature Diloag
  openDialog() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(siignaturedialogComponent, {
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
// signature-dialog Content and ts 
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'signature-dialog',
  templateUrl: 'signature-dialog.html',
})

export class siignaturedialogComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<siignaturedialogComponent>
  ) { }

  vitocancel(): void {
    this.dialogRef.close();
  }

}
