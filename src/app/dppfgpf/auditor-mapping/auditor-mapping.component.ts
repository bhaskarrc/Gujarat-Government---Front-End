import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


const ELEMENT_DATA: any[] = [
  {
    empType: '0',
    district: ['1'],
    section: '0',
    edit: true
  },
];

const ELEMENT_DATAN: any[] = [{
  empType: '',
  districtInsertData: [''],
  sectionInsertData: '',
}];

@Component({
  selector: 'app-auditor-mapping',
  templateUrl: './auditor-mapping.component.html',
  styleUrls: ['./auditor-mapping.component.css']
})
export class AuditorMappingComponent implements OnInit {
  // Date
  todayDate = Date.now();
  // Form Group
  mappingAuditorFrom: FormGroup;
  // Variable
  public toggleButton = true;
  isSelected = true;
  isEditClicked = false;
  isSaveClicked = false;
  // Form COntrol
  majorheadCtrl: FormControl = new FormControl();
  employeeTypeAuditCtrl: FormControl = new FormControl();

  employeeTypeCtrl: FormControl = new FormControl();
  isSearch: Boolean = false;
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }
  // Table Source
  newdisplayedColumns: string[] = ['select', 'empType', 'district', 'section', 'action'];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  insertisplayedColumns: string[] = ['empType', 'districtInsertData', 'sectionInsertData', 'action'];
  insertataSource = new MatTableDataSource<any>(ELEMENT_DATAN);
  selection = new SelectionModel<any>(true, []);
  // List
  billtype_list: any[] = [
    { value: '1', viewValue: 'GTR 30 Pay Bill' },
    { value: '2', viewValue: 'GTR 45 TA Bill' },
    { value: '3', viewValue: 'GTR 40 Grant In Bill' },
    { value: '4', viewValue: 'GTR 12 Advance Bill' }
  ];

  emp_list: any[] = [
    { value: '0', viewValue: 'Class IV ' },
    { value: '1', viewValue: 'Daily Wages' },
    { value: '2', viewValue: 'Work Charge' },
  ];

  officercategory_list: any[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IPS/IAS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' }
  ];

  section_list: any[] = [
    { value: '0', viewValue: 'All' },
    { value: '1', viewValue: 'Admin Branch' },
    { value: '2', viewValue: 'Inward' },
    { value: '3', viewValue: 'Record Branch' }
  ];

  sectionInsertData_list: any[] = [
    { value: '0', viewValue: 'All' },
    { value: '1', viewValue: 'Admin Branch' },
    { value: '2', viewValue: 'Inward' },
    { value: '3', viewValue: 'Record Branch' }
  ];

  major_list: any[] = [
    {
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

  district_list: any[] = [{
    value: '1',
    viewValue: 'Ahmedabad'
  },
  {
    value: '2',
    viewValue: 'Gandhinagar'
  },
  {
    value: '3',
    viewValue: 'Rajkot'
  },
  {
    value: '4',
    viewValue: 'Surat'
  },
  {
    value: '5',
    viewValue: 'Anand'
  },
  ];
  ngOnInit() {
    this.mappingAuditorFromData();
  }

  mappingAuditorFromData() {
    this.mappingAuditorFrom = this.fb.group({
      autiorctrlk: ['1'],
      section: ['0'],
      sectionInsertData: [''],
      empType: '',
      districtInsertData: [''],
      district: ['1']
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


  deleteRowRecovery(index) {
    this.insertataSource.data.splice(index, 1);
    this.insertataSource = new MatTableDataSource(
      this.insertataSource.data
    );
  }

  deleteRowRecoveryAct(index) {
    this.newdataSource.data.splice(index, 1);
    this.newdataSource = new MatTableDataSource(
      this.newdataSource.data
    );
  }

  onSave() {
    this.isSaveClicked = true;
    const data = this.newdataSource.data;
    data.push({
      empType: this.emp_list[this.insertataSource.data[0].empType].value,
      district: this.insertataSource.data[0].districtInsertData,
      section: this.section_list[this.insertataSource.data[0].sectionInsertData].value,
      edit: true
    });
    this.newdataSource.data = data;
  }

  onSelectingEmployeeType(event) {
    if (event.value === '0') {
      this.isSelected = false;
    } else {
      this.isSelected = true;
    }
  }

  onEdit(element) {
    element.edit = !element.edit;
    this.isEditClicked = true;
  }

  onSaveClick(element) {
    element.edit = !element.edit;
  }
}

