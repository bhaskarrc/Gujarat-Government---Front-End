
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { DeleteDialogBoxComponent } from '../../delete-dialog-box/delete-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';

// Display Element Data
const ELEMENT_DATA: any[] = [
  {
    mhead: '2054',
    cardexno: '4',

    billtype: 'Pay Bill',

    officers: ' ',

    section_s: ''
  },
];

const ELEMENT_DATAN: any[] = [{
  mhead: ' ',
  cardexno: ' ',
  billtype: ' ',
  officers: ' ',
  section_s: '',



}];
@Component({
  selector: 'app-update-auditor-name-major-head',
  templateUrl: './update-auditor-name-major-head.component.html',
  styleUrls: ['./update-auditor-name-major-head.component.css']
})
export class UpdateAuditorNameMajorHeadComponent implements OnInit {
  initiatiomdate = new Date((new Date()));

  // FormGroup
  updateAuditorMajorForm: FormGroup;
  public toggleButton = true;
  // FormControl
  majorheadCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  directiveObject = new EaDirectives(this.dialog);
  isSearch: Boolean = false;
  selection = new SelectionModel<any>(true, []);
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }
  // Display Columns
  newdisplayedColumns: string[] = ['select', 'mhead', 'section_s', 'action'];
  insertisplayedColumns: string[] = ['select', 'mhead', 'section_s', 'action'];

  // Table Source
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  insertataSource = new MatTableDataSource<any>(ELEMENT_DATAN);
  // List values
  billtype_list: any[] = [
    { value: '1', viewValue: 'GTR 30 Pay Bill' },
    { value: '2', viewValue: 'GTR 45 TA Bill' },
    { value: '3', viewValue: 'GTR 40 Grant In Bill' },
    { value: '4', viewValue: 'GTR 12 Advance Bill' }
  ];
  officercategory_list: any[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IPS/IAS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' }
  ];
  section_list: any[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Admin Branch' },
    { value: '3', viewValue: 'Inward' },
    { value: '4', viewValue: 'Record Branch' }
  ];

  major_list: any[] = [{
    value: '1',
    viewValue: '2011'
  },
  {
    value: '2',
    viewValue: '2012'
  },
  {
    value: '3',
    viewValue: '2014'
  },
  {
    value: '3',
    viewValue: '2029'
  },
  {
    value: '3',
    viewValue: '2030'
  },
  {
    value: '3',
    viewValue: '2039'
  },
  {
    value: '3',
    viewValue: '2040'
  },
  {
    value: '4',
    viewValue: '2015'
  }
  ];
  autior_list: any[] = [{
    value: '1',
    viewValue: 'Shri. Pratik Shah'
  },
  {
    value: '2',
    viewValue: 'F C Gohil'
  },
  {
    value: '3',
    viewValue: 'V J Mehta'
  },
  ];

  ngOnInit() {
    this.updateAuditorMajorFormData();
  }

  updateAuditorMajorFormData() {
    this.updateAuditorMajorForm = this.fb.group({
      // FormGroup Fields
      mhead: [],
      billtype: [],
      officers: [1],
      autiorctrlk: ['1'],
      sections: ['1'],
      sectionns: ['']
    });
  }





  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.newdataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.newdataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addBrowse() {
    this.isSearch = true;
  }
  enabledata() {

    if (this.toggleButton === true) {
      this.toggleButton = false;
    } else {
      this.toggleButton = true;
    }
  }
  // function to delete row from table
  deleteEntry(element) {
    let isYes = false;
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
      width: '500px', data: isYes
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      isYes = result.data;
      if (isYes) {
        this.newdataSource.data.splice(element, 1);
        this.newdataSource = new MatTableDataSource(this.newdataSource.data);
      }

    });
  }
}

