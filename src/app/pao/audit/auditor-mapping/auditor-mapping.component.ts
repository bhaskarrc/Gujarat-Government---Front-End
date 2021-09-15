import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
// import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';
import { AuditorMapingA, AuditorMaping } from 'src/app/model/treasury-bill';
import { PaoDirectives } from 'src/app/common/directive/pao';
import { ListValue } from 'src/app/model/paoModel';
const ELEMENT_DATA: any[] = [
  {

    billRefNo: '368',
    tokenno: '552',
    mhead: '2054',
    cardexNo: '4',
    billregno: '331',
    billamount: '10000.00',
    billType: 'Pay Bill',
    billdate: '25-Feb-2019',
    ddoName: '	Collector Office, Gandhinagar',
    officers: ' ',
    authiorname: 'Shri Pratik K Shah',
    section_s: ''
  },
];

const ELEMENT_DATAN: any[] = [{

  mhead: ' ',
  cardexNo: ' ',
  billType: ' ',
  officers: ' ',
  section_s: '',



}];



@Component({
  selector: 'app-auditor-mapping',
  templateUrl: './auditor-mapping.component.html',
  styleUrls: ['./auditor-mapping.component.css']
})
export class AuditorMappingComponent implements OnInit {
  ELEMENT_DATA: AuditorMaping[] = [
    {

      billRefNo: '368',
      tokenno: '552',
      mhead: '2054',
      cardexNo: '4',
      billregno: '331',
      billAmount: '10000.00',
      billType: 'Pay Bill',
      billdate: '25-Feb-2019',
      ddoName: '	Collector Office, Gandhinagar',
      officers: ' ',
      authiorName: 'Shri Pratik K Shah',
      section_s: ''
    },
  ];
  ELEMENT_DATAN: AuditorMapingA[] = [{

    mhead: ' ',
    cardexNo: ' ',
    billType: ' ',
    officers: ' ',
    section_s: '',

  }];

  // Lists
  billtype_list: ListValue[] = [

    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }

  ];

  officercategory_list: ListValue[] = [
    { value: '1', viewValue: 'GO' },
    { value: '2', viewValue: 'IPS/IAS/IFS' },
    { value: '3', viewValue: 'NGO' },
    { value: '4', viewValue: 'MLA' }
  ];
  section_list: ListValue[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'Admin Branch' },
    { value: '3', viewValue: 'Inward' },
    { value: '4', viewValue: 'Record Branch' }
  ];

  major_list: ListValue[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2', viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
    { value: '6 : Secretariat-Social Services', viewValue: '2251 : Secretariat-Social Services' },
    { value: '7 : Interest Payments', viewValue: '2049 : Interest Payments' },
    { value: '8 : Water Supply and Sanitation', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '9 : Ecology and Environment', viewValue: '3435 : Ecology and Environment' },
    { value: '10 : Capital Outlay on Urban Development', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '11 : General Education', viewValue: '2202 : General Education' },

  ];


  autior_list: ListValue[] = [{
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
  // Form Group
  mappingAuditorFrom: FormGroup;
  // Variable
  isSearch: Boolean = false;
  public toggleButton: boolean = true;
  // Form COntrol
  majorheadCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  directiveObject = new PaoDirectives(this.router, this.dialog);
  // Table Source
  newdisplayedColumns: string[] = ['select', 'cardexNo', 'officers', 'billType', 'mhead', 'section_s', 'action'];
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  insertisplayedColumns: string[] = ['cardexNo', 'officers', 'billType', 'mhead', 'section_s', 'action'];
  insertataSource = new MatTableDataSource<AuditorMapingA>(this.ELEMENT_DATAN);


  ngOnInit() {
    this.mappingAuditorFromData();
  }

  mappingAuditorFromData() {
    this.mappingAuditorFrom = this.fb.group({
      officercategory: ['1'],
      officercategoryn: [''],
      autiorctrlk: ['1'],
      sections: ['1'],
      sectionns: ['']
    });
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

  // Navigation
  gotopage() {
    this.router.navigate(['/pao/saved-bill/bill-prepration-fom']);
  }
}
