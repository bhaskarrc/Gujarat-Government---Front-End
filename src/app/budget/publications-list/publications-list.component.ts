import { CommonListing } from './../../model/common-listing';
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
    financialYear: '2019-2020', atttType: 'Budget Speech ', uploadDateTime: '27-12-2019 18:37',
    uploadOfficeName: 'Office 1', status: 'Pending', action: '-'
  },

  {
    financialYear: '2019-2020', atttType: 'Socio-Economic Development Factor Wise Classification ',
    uploadDateTime: '25-12-2019 15:37', uploadOfficeName: 'Office 2',
    status: 'Approved', action: '-'
  },

  {
    financialYear: '2019-2020', atttType: 'Human Development Indicator Wise Classification ',
    uploadDateTime: '22-12-2019 16:37', uploadOfficeName: 'Office 3',
    status: 'Rejected', action: '-'
  },

  {
    financialYear: '2019-2020', atttType: 'Leverage Position (Debt Sustainability) Wise Classification '
    , uploadDateTime: '20-12-2019', uploadOfficeName: 'Office 4',
    status: 'Pending', action: '-'
  },

  {
    financialYear: '2019-2020', atttType: 'Sustainable Development Goal Wise Classification',
    uploadDateTime: '18-12-2019 18:37', uploadOfficeName: 'Office 5',
    status: 'Pending', action: '-'
  },

  {
    financialYear: '2019-2020', atttType: 'Budget Speech', uploadDateTime: '15-12-2019 18:37', uploadOfficeName: 'Office 6',
    status: 'Approved', action: '-'
  },

  {
    financialYear: '2019-2020', atttType: 'Socio-Economic Development Factor Wise Classification',
    uploadDateTime: '15-11-2019 19:37', uploadOfficeName: 'Office 7',
    status: 'Rejected', action: '-'
  },

  {
    financialYear: '2019-2020', atttType: 'Sustainable Development Goal Wise Classification',
    uploadDateTime: '16-11-2019 20:37', uploadOfficeName: 'Office 8',
    status: 'Pending', action: '-'
  },


  {
    financialYear: '2019-2020', atttType: 'Leverage Position (Debt Sustainability) Wise Classification',
    uploadDateTime: '10-10-2019 18:37', uploadOfficeName: 'Office 8',
    status: 'Pending', action: '-'
  },

  {
    financialYear: '2019-2020', atttType: 'Leverage Position (Debt Sustainability) Wise Classification',
    uploadDateTime: '02-10-2019 20:22', uploadOfficeName: 'Office 8',
    status: 'Approved', action: '-'
  },
];

@Component({
  selector: 'app-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.css']
})
export class PublicationsListComponent implements OnInit {
  isSearch: Boolean = true;
  codeCtrl = new FormControl();
  private _onDestroy = new Subject<void>();
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // fin yer
  finYearCtrl: FormControl = new FormControl();
  filteredfinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  //  AttachmentType
  attatchmentTypeCtrl: FormControl = new FormControl();
  filteredAttatchmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  // Staus
  statusTypeCtrl: FormControl = new FormControl();
  filteredStatusType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  displayedColumns: string[] = [
    'srNo', 'financialYear', 'atttType', 'uploadDateTime', 'uploadOfficeName', 'status', 'action'
  ];
  // fin year
  finYearList: CommonListing[] = [
    { value: '2019-2020', viewValue: '2019-2020' },
    { value: '2020-2021', viewValue: '2020-2021' },
  ];

  // attatchment type
  attatchmentTypeList: CommonListing[] = [
    {
      value: 'Budget Speech',
      viewValue: 'Budget Speech'
    },
    {
      value: 'Socio-Economic Development Factor Wise Classification',
      viewValue: 'Socio-Economic Development Factor Wise Classification'
    },
    {
      value: 'Human Development Indicator Wise Classification',
      viewValue: 'Human Development Indicator Wise Classification'
    },
    {
      value: 'Leverage Position (Debt Sustainability) Wise Classification',
      viewValue: 'Leverage Position (Debt Sustainability) Wise Classification'
    },
    {
      value: 'Sustainable Development Goal Wise Classification',
      viewValue: 'Sustainable Development Goal Wise Classification'
    },
  ];

  statusList: CommonListing[] = [
    { value: 'Pending', viewValue: 'Pending' },
    { value: 'Approved', viewValue: 'Approved' },
    { value: 'Rejected', viewValue: 'Rejected' },
  ];
  publicationsListForm: FormGroup;
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
    this.publicationsListForm = this.fb.group({
      financialYear: [''],
      uploadDateTime: [''],
      uploadOfficeName: [''],
      atttType: [''],
      finYear: [''],
      attatchmentType: [''],
      statusType: [''],
    });
    // fin year
    this.filteredfinYear.next(this.finYearList.slice());
    (this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYearList, this.finYearCtrl.value, this.filteredfinYear);
      }));
    // attatchment type
    this.filteredAttatchmentType.next(this.attatchmentTypeList.slice());
    (this.attatchmentTypeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attatchmentTypeList, this.attatchmentTypeCtrl.value, this.filteredAttatchmentType);
      }));
    // Status
    this.filteredStatusType.next(this.statusList.slice());
    (this.statusTypeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.statusList, this.statusTypeCtrl.value, this.filteredStatusType);
      }));
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
  toDateChange(endDate) {
    console.log(endDate);
    return this.endDate = endDate;
  }
  fromDateChange(startDate) {
    console.log(startDate);
    return this.startDate = startDate;
  }

  leaveSubmit() {
    let p_data = this.publicationsListForm;
    console.log(p_data);
  }
  clearForm() {
    this.publicationsListForm.reset();
  }
  search() {
    this.isSearch = false;
  }

  goToDashboard() {
    this.router.navigate(['./']);
  }

}


