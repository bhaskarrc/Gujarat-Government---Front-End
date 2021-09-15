
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {  Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
@Component({
  selector: 'app-ppr-approve-reject',
  templateUrl: './ppr-approve-reject.component.html',
  styleUrls: ['./ppr-approve-reject.component.css']
})
export class PprApproveRejectComponent implements OnInit {
  isSearch: Boolean = true;
  dataLists: any;
  childdata: any;
  childdata1: any;
  private _onDestroy = new Subject<void>();
  pprApprRejeectIdCtrl: FormControl = new FormControl();
  pprApprRejeectTypeCtrl: FormControl = new FormControl();
  pprApprRejeectPnameCtrl: FormControl = new FormControl();
  todayDate = Date.now();

  pprApprRej_pprid_list: CommonListing[] = [
    { value: '10747', viewValue: '10747' },
    { value: '10848', viewValue: '10848' },
  ];

  pprApprRej_pprtype_list: CommonListing[] = [
    { value: 'Central Selector', viewValue: 'Central Selector' },
    { value: 'State Selector', viewValue: 'State Selector' },
  ];
  pprApprRej_ptype_list: CommonListing[] = [
    { value: 'Surat Metro Rail 1', viewValue: 'Surat Metro Rail 1' },
    { value: 'Surat Metro Rail 2', viewValue: 'Surat Metro Rail 2' },
  ];
  approveRejectDetails: any[] = [

  ];
  // reject record
  rejectDataSourceDetails: any[] = [
    {srNo : '' , pprId: '', createDate: '', projName: '', agency: '', area: '', type: '', status: '', action : '' , },
  ];
  // reject
  dataSourceReject = new MatTableDataSource([this.rejectDataSourceDetails]);
  displayedRejectColumns = ['srNo', 'pprId', 'createDate', 'projName', 'agency', 'area', 'type', 'status', ];
  displayedapproveRejectColumns = ['srNo', 'pprId', 'createDate', 'projName', 'agency', 'area', 'type', 'status', 'action'];

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  pprApprRejeectForm: FormGroup;
  private paginator: MatPaginator;
  private sort: MatSort;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  constructor(private fb: FormBuilder, private router: Router, ) { }
  ngOnInit() {
    this.pprApprRejeectForm = this.fb.group({
      pprApprRejeectId: ['', Validators.required],
      pprApprRejeectType: ['', Validators.required],
      pprApprRejeectPname: ['', Validators.required],
    });
  }

  showData(data) {
    this.childdata = data;
  }
  showData1(data) {
    this.childdata1 = data;
  }

  createForm() {

  }
  setDataSourceAttributes() {
  }
  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
    filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }

  // submit leave
  leaveSubmit() {
    const p_data = this.pprApprRejeectForm;
    console.log(p_data);
  }

  // reset the form
  clearForm() {
    this.pprApprRejeectForm.reset();
  }

  // search form
  search() {
    this.isSearch = false;
  }

  submitDetails() {

  }

}




