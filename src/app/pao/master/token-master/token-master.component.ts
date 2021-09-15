import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { Router} from '@angular/router';
import {CommonListing} from 'src/app/model/common-listing';
import { WorkflowDetailsGrantComponent } from '../../../grant/workflow-details-grant/workflow-details-grant.component';
import { WorkflowDetailsGrantPaoComponent } from '../../cheque/cheque-for-correction/workflow-details-grant-pao/workflow-details-grant-pao.component';
// import { WorkflowDetailsGrantComponent } from '../../workflow-details-grant/workflow-details-grant.component';

const ELEMENT_DATA: any[] = [{
    select: '',
    tokennumber: 552,
    tokenstatus: 'Lost',
  },


];


@Component({
  selector: 'app-token-master',
  templateUrl: './token-master.component.html',
  styleUrls: ['./token-master.component.css']
})



export class TokenMasterComponent implements OnInit {
  isSearch: Boolean = true;
  isSearchshow: Boolean = false;
  tokenMasterForm: FormGroup;
  tokenstatusCtrl: FormControl = new FormControl();
  tokenstatuslabelCtrl: FormControl = new FormControl();
  newdisplayedColumns: string[] = ['srno', 'tokennumber', 'tokenstatus', 'action'];
  newdataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  tokenstatus_list: any[] = [{
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
    }
    ,
    {
      value: '4',
      viewValue: 'Used'
    }
  ];
  tokenstatuslabel_list: any[] = [{
      value: '1',
      viewValue: 'Lost'
    },
    {
      value: '2',
      viewValue: 'Available'
    }
  ];



  errorMessages = {
    tokenstatus: 'Please select token status',
    tokenumber: 'Please Enter Token Number',
  };

  constructor(private fb: FormBuilder, public dialog: MatDialog, ) {}

  ngOnInit() {
    this.tokenMasterFormData();
  }

  tokenMasterFormData() {
    this.tokenMasterForm = this.fb.group({
      tokentatus: [''],
      tokenstatus: [''],
      tokenumber: [''],
      tokenstatuslabel: ['1'],
      tokeTonumber:[''],
      tokeFromnumber:['']
    });
  }

  editclick() {
    this.isSearch = false;
    this.isSearchshow = true;
  }

  saveclick(){
    this.isSearch = true;
    this.isSearchshow = false;
  }
  submitToNextLevel(){
    const dialogRef = this.dialog.open(WorkflowDetailsGrantPaoComponent, {
      width: '1200px'
    });
  }
}
