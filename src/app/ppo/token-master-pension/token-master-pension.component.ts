import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ListValue } from '../../model/treasury-bill';

const ELEMENT_DATA: any[] = [{
  select: '',
  tokennumber: 552,
  tokenstatus: 'Lost',
}];

@Component({
  selector: 'app-token-master-pension',
  templateUrl: './token-master-pension.component.html',
  styleUrls: ['./token-master-pension.component.css']
})
export class TokenMasterPensionComponent implements OnInit {
  // variables
  isSearch: Boolean = true;
  isSearchshow: Boolean = false;
  tokenMasterForm: FormGroup;
  // form controls
  tokenstatusCtrl: FormControl = new FormControl();
  tokenstatuslabelCtrl: FormControl = new FormControl();
  // lists
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
  }
    ,
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
  }
  ];
  // table data
  newdisplayedColumns: string[] = ['srno', 'tokennumber', 'tokenstatus', 'action'];
  newdataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.tokenMasterFormData();
    this.newdataSource.sort = this.sort;
    this.newdataSource.paginator = this.paginator;
  }

  tokenMasterFormData() {
    this.tokenMasterForm = this.fb.group({
      tokenumber: [''],
      tokenstatuslabel: ['1'],
      tokeTonumber: [''],
      tokeFromnumber: ['']
    });
  }
  // on click edit
  editclick() {
    this.isSearch = false;
    this.isSearchshow = true;
  }
  // on click save
  saveclick() {
    this.isSearch = true;
    this.isSearchshow = false;
  }

}
