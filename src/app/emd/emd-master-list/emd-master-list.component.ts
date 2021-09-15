import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmdMasterList } from 'src/app/model/emd';
// Display Element Data
const ELEMENT_DATA: EmdMasterList[] = [
  {
    emdCode: 'TD',
    mHead: '8443',
    subMhead: '00',
    minHead: '101',
    sHead: '01',
    lapse: 'YES',
    location: 'District Treasury Office, Gandhinagar'
  },
  {
    emdCode: 'RD',
    mHead: '8443',
    subMhead: '00',
    minHead: '101',
    sHead: '02',
    lapse: 'YES',
    location: 'District Treasury Office, Gandhinagar'
  },
  {
    emdCode: 'SD',
    mHead: '8443',
    subMhead: '00',
    minHead: '103',
    sHead: '00',
    lapse: 'YES',
    location: 'District Treasury Office, Gandhinagar'
  },
  {
    emdCode: 'WDPB',
    mHead: '8443',
    subMhead: '00',
    minHead: '117',
    sHead: '01',
    lapse: 'YES',
    location: 'District Treasury Office, Gandhinagar'
  },
];

@Component({
  selector: 'app-emd-master-list',
  templateUrl: './emd-master-list.component.html',
  styleUrls: ['./emd-master-list.component.css']
})
export class EmdMasterListComponent implements OnInit {
  // FormGroup
  emdMasterListForm: FormGroup;
  // Display Columns
  displayedBrowseColumns = ['srno', 'emdCode', 'mHead', 'subMhead', 'minHead', 'sHead', 'lapse', 'location', 'action'];
  // Table Source
  dataSourceBrowse = new MatTableDataSource(ELEMENT_DATA);


  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  ngOnInit() {
    this.emdMasterDataList();
  }
  emdMasterDataList() {
    this.emdMasterListForm = this.fb.group({
      code: [''],
      lapse: ['1'],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
    });
  }
  // function to delete row from table
  delete(element) {
    this.dataSourceBrowse.data.splice(element, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    // tslint:disable-next-line: no-use-before-declare

    // Delete popup
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DeleteAction, {
      width: '400px',
      height: '250px',
    });

  }
  // CarryForward popup
  details() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(ForwardAction, {
      width: '450px',
      height: '250px',
    });
  }
}


// CarryForward .ts popup
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'forward-dialogbox',
  templateUrl: 'forward-dialogbox.html',
})
// tslint:disable-next-line: component-class-suffix
export class ForwardAction {
  constructor(
    public dialogRef: MatDialogRef<ForwardAction>
  ) { }
  // closes dialog
  cancel(): void {
    this.dialogRef.close();
  }
  // closes dialog
  ok(): void {
    this.dialogRef.close();
  }
}


// delete .ts popup

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'delete-dialogbox',
  templateUrl: 'delete-dialogbox.html',
})
// tslint:disable-next-line:component-class-suffix
export class DeleteAction {
  constructor(
    public dialogRef: MatDialogRef<DeleteAction>
  ) { }

  // closes dialog
  cancel(): void {
    this.dialogRef.close();
  }
}
