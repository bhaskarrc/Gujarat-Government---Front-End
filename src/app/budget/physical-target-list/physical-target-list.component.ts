import { AttachmentType } from './../../model/promotion-forgo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
const ELEMENT_DATA = [
  {
    physicalTargetFinancialYear: '2019-2020', physicalTargetSchemeType: '100% State Sponsored Scheme',
    physicalTargetDepartment: 'Agriculture, Famers welfare and Co-operation Department', action: '-'
  },
  {
    physicalTargetFinancialYear: '2019-2020', physicalTargetSchemeType: '100% Centrally Sponsored Scheme',
    physicalTargetDepartment: 'Energy & Petrochemicals Department', action: '-'
  },
  {
    physicalTargetFinancialYear: '2019-2020', physicalTargetSchemeType: 'Partially Centrally Sponsored Scheme',
    physicalTargetDepartment: 'Gujarat Legislature Secretariat Department', action: '-'
  },
  {
    physicalTargetFinancialYear: '2019-2020', physicalTargetSchemeType: '100% State Sponsored Scheme',
    physicalTargetDepartment: 'Narmada, Water Resources, Water Supply & Kalpsar Department', action: '-'
  },
];

@Component({
  selector: 'app-physical-target-list',
  templateUrl: './physical-target-list.component.html',
  styleUrls: ['./physical-target-list.component.css']
})
export class PhysicalTargetListComponent implements OnInit {
  isSearch: Boolean = true;
  codeCtrl = new FormControl();
  private _onDestroy = new Subject<void>();
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  physicalTargetListCtrl: FormControl = new FormControl();
  physicalTargetListDepartmentCtrl: FormControl = new FormControl();
  physicalTargetListFinancialYearCtrl: FormControl = new FormControl();
  bpnDepartmentCtrl: FormControl = new FormControl();

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  displayedColumns: string[] = [
    'srNo', 'physicalTargetFinancialYear', 'physicalTargetSchemeType',
    'physicalTargetDepartment', 'action'
  ];
  // fin year
  filteredphysicalTargetListFinancialYearList_list: any[] = [
    { value: '1', viewValue: '2021-2022' },
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

   
  filteredPhysicalTargetSchemeType_list: any[] = [
    { value: '0', viewValue: '100% State Sponsored Scheme' },
    { value: '1', viewValue: '100% Centrally Sponsored Scheme' },
    { value: '2', viewValue: 'Partially Centrally Sponsored Scheme' },
  ];

  bpnDepartment_List:any[]=[
    {value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department '},
    {value: '2', viewValue: '04:Education Department'},
    {value: '3', viewValue: '05:Energy and Petro-Chemicals Department'},
    {value: '4', viewValue: '06:Finance Department'},
    {value: '5', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department'},
    

  ];

  physicalTargetDepartment_List: any[] = [
    {value: '00', viewValue: 'Agriculture, Famers welfare and Co-operation Department'},
    {value: '01', viewValue: 'Education Department'},
    {value: '02', viewValue: 'Energy & Petrochemicals Department'},
    {value: '03', viewValue: 'Finance Department'},
    {value: '04', viewValue: 'Food, Civil Supplies & Consumer Affairs Department'},
    {value: '05', viewValue: 'Forest & Environment Department'},
    {value: '06', viewValue: 'General Administration Department'},
    {value: '07', viewValue: 'Gujarat Legislature Secretariat Department'},
    {value: '08', viewValue: 'Health & Family Welfare Department'},
    {value: '09', viewValue: 'Home Department'},
    {value: '10', viewValue: 'Industries & Mines Department'},
    {value: '11', viewValue: 'Information & Broadcasting Department'},
    {value: '12', viewValue: 'Labour & Employment Department'},
    {value: '13', viewValue: 'Legal Department'},
    {value: '14', viewValue: 'Legislative & Parliamentary Affairs Department'},
    {value: '15', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department'},
    {value: '16', viewValue: 'Panchayat, Rural Housing & Rural Development Department'},
    {value: '17', viewValue: 'Ports & Transport Department'},
    {value: '18', viewValue: 'Revenue Department'},
    {value: '19', viewValue: 'Roads & Buildings Department'},
    {value: '20', viewValue: 'Science & Technology Department'},
    {value: '21', viewValue: 'Social Justice & Empowerment Department'},
    {value: '22', viewValue: 'Tribal Development Department'},
    {value: '23', viewValue: 'Sports, Youth & Cultural Activities Department'},
    {value: '24', viewValue: 'Urban Development & Urban Housing Department'},
    {value: '25', viewValue: 'Women & Child Development Department'},
    {value: '26', viewValue: 'Climate Change Department'},
  ];

  macroPubNumberList: any[] = [
    { value: '56', viewValue: '56' },
    { value: '57', viewValue: '57' },
    { value: '58', viewValue: '58' },
  ];
  
  physicalTargetListForm: FormGroup;
  private paginator: MatPaginator;
  private sort: MatSort;
  date: Date = new Date();
  private endDate: Date = new Date;
  private startDate: Date = new Date;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  constructor(private fb: FormBuilder, private router: Router, ) { }
  ngOnInit() {
    this.physicalTargetListForm = this.fb.group({
      physicalTargetFinancialYear: [''],
      physicalTargetSchemeType: [''],
      physicalTargetDepartment: [''],
      bpnNumber: [''],
      disclaimerFinYear: [''],
      attatchmentType: [''],
      physicalTargetListCtrl: [''],
      physicalTargetListDepartmentCtrl: [''],
      bpnDepartmentCtrl: [''],
      physicalTargetListSchemeType: [''],
      physicalTargetListDepartment: [''],
      macroPubNumber : [''],
      physicalTargetListFinancialYear: ['1'],
      physicalTargetListFinancialYearCtrl: [''],
    });
  }


  createForm() {
    throw new Error(' Method not implemented. ');
  }
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
  leaveSubmit() {
    let p_data = this.physicalTargetListForm;
    console.log(p_data);
  }
  clearForm() {
    this.physicalTargetListForm.reset();
  }
  search() {
    this.isSearch = false;
  }


}



