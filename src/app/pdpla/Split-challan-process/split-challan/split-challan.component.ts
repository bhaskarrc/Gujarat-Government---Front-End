import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { CreateasplitListSplit, ListValue } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';




@Component({
  selector: 'app-split-challan',
  templateUrl: './split-challan.component.html',
  styleUrls: ['./split-challan.component.css']
})
export class SplitChallanComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  // Variable
  selectedIndex: number;
  selection = new SelectionModel<any>(true, []);
  errorMessages = pdplaMessage;
  // Form Group
  pdplaform: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) {

  }

  // Directive of pdpla
  directiveObject = new PdplaDirectives(this.router, this.dialog);
  Element_Data: CreateasplitListSplit[] = [
    {
      Code: 'SD',
      srNo: '1920035',
      paryName: 'Mr ABC',
      department: 'Account',
      entryDate: '08-May-2015',
    },
  ];
  dataSourcesplitProcess = new MatTableDataSource<CreateasplitListSplit>(this.Element_Data);
  displayedColumnssplitisting: any[] = [

    'checked',
    'Code',
    'srNo',
    'paryName',
    'department',
    'entryDate',
    'action',
  ];

  attachmentTypeCode: ListValue[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Others' }
  ];

  attachmentTypeCodeCtrl: FormControl = new FormControl();

  challan_list: ListValue[] = [
    { value: '1', viewValue: 'Single' },
    { value: '2', viewValue: 'Multiple' },
  ];

  challanCtrl: FormControl = new FormControl();


  ngOnInit() {
    this.pdplaform = this.fb.group({
      amt: [''],

    });
  }

  // sets tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // routing
  gotoListing() {
    this.router.navigate(['./pdpla/create-account-closing-request-listing']);
  }


}
