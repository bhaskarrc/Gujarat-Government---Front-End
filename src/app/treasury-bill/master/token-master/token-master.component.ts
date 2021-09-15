import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';
import { TokenMaster, ListValue } from 'src/app/model/treasury-bill';
const ELEMENT_DATA: TokenMaster[] = [{
  select: '',
  tokenNumber: 552,
  tokenStatus: 'Lost',
},
];
@Component({
  selector: 'app-token-master',
  templateUrl: './token-master.component.html',
  styleUrls: ['./token-master.component.css']
})
export class TokenMasterComponent implements OnInit {
  // variable
  isSearch: Boolean = true;
  isSearchshow: Boolean = false;
  // form group
  tokenMasterForm: FormGroup;
  // Form Control
  tokenstatusCtrl: FormControl = new FormControl();
  tokenstatuslabelCtrl: FormControl = new FormControl();
  // Table Source
  newdisplayedColumns: string[] = ['srno', 'tokenNumber', 'tokenStatus', 'action'];
  newdataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tokenstatus_list: ListValue[] = [{
    value: '1',
    viewValue: 'All'
  },
  {
    value: '2',
    viewValue: 'Lost'
  },
  {
    value: '3',
    viewValue: 'Available'
  },
  {
    value: '4',
    viewValue: 'Used'
  }
  ];
  tokenstatuslabel_list: ListValue[] = [{
    value: '1',
    viewValue: 'Lost'
  },
  {
    value: '2',
    viewValue: 'Available'
  }];
  errorMessages = {
    tokenStatus: 'Please select token status',
    tokenumber: 'Please Enter Token Number',
  };
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  ngOnInit() {
    this.tokenMasterFormData();
  }
  tokenMasterFormData() {
    this.tokenMasterForm = this.fb.group({
      tokentatus: [''],
      tokenumber: [''],
      tokenstatuslabel: ['1'],
      tokeTonumber: [''],
      tokeFromnumber: ['2'],
      tokenStatus: [''],
      tokenStartRange: [''],
      tokenEndRange: ['']
    });
  }
  editclick() {
    this.isSearch = false;
    this.isSearchshow = true;
  }
  saveclick() {
    this.isSearch = true;
    this.isSearchshow = false;
  }

}
