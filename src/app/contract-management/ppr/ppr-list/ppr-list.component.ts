
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';

// table data
const approveRejectDetails = [
  {
    pprId: '10690',
    createDate: '30-11-2019',
    projName: 'Surat Metro rail Project Phase -1 ',
    agency: 'Gujrat Metro Rail Corporation (GMRC) Limited',
    area: 'Transport and Logistics',
    type: 'Central Sector',
    status: 'Approved',
    action: '',
  },
  {
    pprId: '10690',
    createDate: '30-11-2019',
    projName: 'Surat Metro rail Project Phase -1 ',
    agency: 'Gujrat Metro Rail Corporation (GMRC) Limited',
    area: 'Transport and Logistics',
    type: 'Central Sector',
    status: 'Rejected',
    action: '',
  },
  {
    pprId: '10690',
    createDate: '30-11-2019',
    projName: 'Surat Metro rail Project Phase -1 ',
    agency: 'Gujrat Metro Rail Corporation (GMRC) Limited',
    area: 'Transport and Logistics',
    type: 'Central Sector',
    status: 'Approved',
    action: '',
  },
  {
    pprId: '10690',
    createDate: '30-11-2019',
    projName: 'Surat Metro rail Project Phase -1 ',
    agency: 'Gujrat Metro Rail Corporation (GMRC) Limited',
    area: 'Transport and Logistics',
    type: 'Central Sector',
    status: 'Approved',
    action: '',
  },

  {
    pprId: '10690',
    createDate: '30-11-2019',
    projName: 'Surat Metro rail Project Phase -1 ',
    agency: 'Gujrat Metro Rail Corporation (GMRC) Limited',
    area: 'Transport and Logistics',
    type: 'Central Sector',
    status: 'Rejected',
    action: '',
  },
  {
    pprId: '10690',
    createDate: '30-11-2019',
    projName: 'Surat Metro rail Project Phase -1 ',
    agency: 'Gujrat Metro Rail Corporation (GMRC) Limited',
    area: 'Transport and Logistics',
    type: 'Central Sector',
    status: 'Rejected',
    action: '',
  },

];

@Component({
  selector: 'app-ppr-list',
  templateUrl: './ppr-list.component.html',
  styleUrls: ['./ppr-list.component.css']
})
export class PprListComponent implements OnInit {
  isSearch: Boolean = true;
  hideData: Boolean = false;
  private _onDestroy = new Subject<void>();
  pprApprRejeectIdCtrl: FormControl = new FormControl();
  pprApprRejeectTypeCtrl: FormControl = new FormControl();
  pprApprRejeectPnameCtrl: FormControl = new FormControl();

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
  // reject record
  rejectDataSourceDetails: any[] = [
    { srNo: '', pprId: '', createDate: '', projName: '', agency: '', area: '', type: '', status: '', action: '', },
  ];
  dataSourceapproveReject = approveRejectDetails;
  displayedapproveRejectColumns = ['srNo', 'pprId', 'createDate', 'projName', 'agency', 'area', 'type', 'status', 'action'];

  @Output() clickedData = new EventEmitter();
  @Output() clickedData1 = new EventEmitter();
  pprApprRejeectForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,) { }
  ngOnInit() {
    this.pprApprRejeectForm = this.fb.group({
      pprApprRejeectId: ['', Validators.required],
      pprApprRejeectType: ['', Validators.required],
      pprApprRejeectPname: ['', Validators.required],
    });
  }

  // emit dataSourceapproveReject data
  dataToSubmit(event) {
    this.clickedData.emit(this.dataSourceapproveReject);

  }

  // emit dataSourceapproveReject data
  dataToSubmit1(event) {
    this.clickedData1.emit(this.dataSourceapproveReject);

  }

  createForm() {
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

  // leave submit
  leaveSubmit() {
    const p_data = this.pprApprRejeectForm;
    console.log(p_data);
  }
  // clear form
  clearForm() {
    this.pprApprRejeectForm.reset();
  }

  // search
  search() {
    this.isSearch = false;
  }
}





