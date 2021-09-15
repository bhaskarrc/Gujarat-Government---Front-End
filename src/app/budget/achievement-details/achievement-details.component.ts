import { AttachmentType } from './../../model/promotion-forgo';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
import { MacroOutcomeDetTab, MacroOutcomeList } from 'src/app/model/budget';
declare function SetEnglish();
declare function SetGujarati();

@Component({
  selector: 'app-achievement-details',
  templateUrl: './achievement-details.component.html',
  styleUrls: ['./achievement-details.component.css']
})
export class AchievementDetailsComponent implements OnInit {

  // Listing table Data
  ELEMENT_DATA: MacroOutcomeList[] = [
    {
      financialYear: '2020-2021', department: 'Agriculture, Farmers Welfare & Co-Operation Department', bpnCode: '03:Agriculture, Farmers Welfare & Co-Operation Department',
      refNum: '19-20/BUD/MO/003', refDate: '20-Apr-2020', status: 'Draft'
    },
    {
      financialYear: '2019-2020', department: 'Agriculture, Farmers Welfare & Co-Operation Department', bpnCode: '03:Agriculture, Farmers Welfare & Co-Operation Department',
      refNum: '19-20/BUD/MO/002', refDate: '20-Apr-2020', status: 'Submitted'
    },
    {
      financialYear: '2018-2019', department: 'Agriculture, Farmers Welfare & Co-Operation Department', bpnCode: '03:Agriculture, Farmers Welfare & Co-Operation Department',
      refNum: '19-20/BUD/MO/001', refDate: '20-Apr-2020', status: 'Submitted'
    },
  ];
  // Listing table
  ELEMENT_DATAColumn: string[] = [
    'srno', 'financialYear', 'department', 'bpnCode', 'refNum', 'refDate', 'status', 'action'
  ];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  gujaratiType: Boolean = true;
  engAtiveClass: Boolean = false;
  gujAtiveClass: Boolean = false;
  expendCharges: boolean;
  isSearch: Boolean = true;
  codeCtrl = new FormControl();
  private _onDestroy = new Subject<void>();

  MacroOutcomeListingDataSource = new MatTableDataSource(this.ELEMENT_DATA);
  // fin yer
  finYearCtrl: FormControl = new FormControl();
  filteredfinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  // department
  macroDepartmentCtrl: FormControl = new FormControl();
  // bpn
  bpnYearCtrl: FormControl = new FormControl();

  macroPubNumberCtrl: FormControl = new FormControl();

  filteredMacroPubNumber: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  // disclaimerFinYearCtrl
  disclaimerFinYearCtrl: FormControl = new FormControl();
  filtereddisclaimerFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  pressTypeCtrl: FormControl = new FormControl();
  filteredPressType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  // Staus
  statusTypeCtrl: FormControl = new FormControl();
  filteredStatusType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  @ViewChild('codeGJ') codeGJ: ElementRef;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  displayedColumnsMacroOutcome: string[] = [
    'srNo', 'macroDemandNumber', 'macroDemandDetail', 'provision', 'outcomeEnglish', 'outcomeGujrati'
  ];
  // Entry Field Details
  disclaimerFinYearList: any[] = [
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2021-2022' },
    { value: '4', viewValue: '2011-2012' },
    { value: '5', viewValue: '2012-2013' },
    { value: '6', viewValue: '2013-2014' },
    { value: '7', viewValue: '2014-2015' },
    { value: '8', viewValue: '2015-2016' },
    { value: '9', viewValue: '2016-2017' },
    { value: '10', viewValue: '2017-2018' },
    { value: '11', viewValue: '2018-2019' },
  ];


  bpnCodeList: any[] = [
    { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department ' },
    { value: '2', viewValue: '04:Education Department' },
    { value: '3', viewValue: '05:Energy and Petro-Chemicals Department' },
    { value: '4', viewValue: '06:Finance Department' },
    { value: '5', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department' },
  ];

  filteredMacroDepartment_list: any[] = [
    { value: '00', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '01', viewValue: 'Education Department' },
    { value: '02', viewValue: 'Energy & Petrochemicals Department' },
    { value: '03', viewValue: 'Finance Department' },
    { value: '04', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '05', viewValue: 'Forest & Environment Department' },
    { value: '06', viewValue: 'General Administration Department' },
    { value: '07', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '08', viewValue: 'Health & Family Welfare Department' },
    { value: '09', viewValue: 'Home Department' },
    { value: '10', viewValue: 'Industries & Mines Department' },
    { value: '11', viewValue: 'Information & Broadcasting Department' },
    { value: '12', viewValue: 'Labour & Employment Department' },
    { value: '13', viewValue: 'Legal Department' },
    { value: '14', viewValue: 'Legislative & Parliamentary Affairs Department' },
    { value: '15', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department' },
    { value: '16', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '17', viewValue: 'Ports & Transport Department' },
    { value: '18', viewValue: 'Revenue Department' },
    { value: '19', viewValue: 'Roads & Buildings Department' },
    { value: '20', viewValue: 'Science & Technology Department' },
    { value: '21', viewValue: 'Social Justice & Empowerment Department' },
    { value: '22', viewValue: 'Tribal Development Department' },
    { value: '23', viewValue: 'Sports, Youth & Cultural Activities Department' },
    { value: '24', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '25', viewValue: 'Women & Child Development Department' },
    { value: '26', viewValue: 'Climate Change Department' },
  ];
  macroPubNumber_List: any[] = [
    { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department ' },
    { value: '2', viewValue: '04:Education Department' },
    { value: '3', viewValue: '05:Energy and Petro-Chemicals Department' },
    { value: '4', viewValue: '06:Finance Department' },
    { value: '5', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department' },
  ];
  pressTypeList: any[] = [
    {
      value: '1',
      viewValue: 'Agricultural Department'
    },
    {
      value: '2',
      viewValue: 'printing Press 2'
    },
    {
      value: '3',
      viewValue: 'printing Press 3'
    },
  ];

  macroOutcomeForm: FormGroup;
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
  constructor(private fb: FormBuilder, private router: Router,) { }
  ngOnInit() {
    this.macroOutcomeForm = this.fb.group({
      financialYear: [''],
      macroOutcomeDetail: [''],
      macroDemandDetail: [''],
      provision: [''],
      disclaimerFinYear: ['1'],
      bpnCode: [''],
      macroDepartment: [''],
      macroPubNumber: [''],
      attatchmentType: [''],
      pressTypeCtrl: [''],
      pressType: [''],
      outcomeEnglish: [''],
      outcomeGujrati: [''],
    });

    //BPN
    // this.filteredMacroPubNumber.next(this.macroPubNumberList.slice());
    // (this.macroPubNumberCtrl.valueChanges
    //   .pipe(takeUntil(this._onDestroy))
    //   .subscribe(() => {
    //     this.filterObjValue(this.macroPubNumberList, this.macroPubNumberCtrl.value, this.filteredMacroPubNumber);
    //   }));

    //  financial year
    this.filtereddisclaimerFinYear.next(this.disclaimerFinYearList.slice());
    (this.disclaimerFinYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.disclaimerFinYearList, this.disclaimerFinYearCtrl.value, this.filtereddisclaimerFinYear);
      }));
    // press list
    this.filteredPressType.next(this.pressTypeList.slice());
    (this.pressTypeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.pressTypeList, this.pressTypeCtrl.value, this.filteredPressType);
      }));

  }
  createForm() {
    throw new Error(' Method not implemented. ');
  }
  setDataSourceAttributes() {
    this.MacroOutcomeListingDataSource.paginator = this.paginator;
    this.MacroOutcomeListingDataSource.sort = this.sort;
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
  submitDetails() { }
  fromDateChange(startDate) {
    console.log(startDate);
    return this.startDate = startDate;
  }

  leaveSubmit() {
    let p_data = this.macroOutcomeForm;
    console.log(p_data);
  }
  clearForm() {
    this.macroOutcomeForm.reset();
  }
  search() {
    this.isSearch = false;
  }

  goToDashboard() {
    this.router.navigate(['./']);
  }
  // Eng Gujarati Functions Starts
  nomenclatureGJFocus() {
    if (this.gujaratiType) {
      SetGujarati();
      this.engAtiveClass = false;
      this.gujAtiveClass = true;
    }
  }
  nomenclatureGJFocusOut() {
    SetEnglish();
    this.gujaratiType = true;
    this.engAtiveClass = false;
    this.gujAtiveClass = false;
  }

  setgujarati() {
    this.gujaratiType = false;
    this.engAtiveClass = false;
    this.gujAtiveClass = true;
    SetGujarati();
    this.codeGJ.nativeElement.focus();
  }

  setenglish() {
    this.gujaratiType = false;
    this.engAtiveClass = true;
    this.gujAtiveClass = false;
    SetEnglish();
    this.codeGJ.nativeElement.focus();
  }
  checkGujarati(data) {
    this.macroOutcomeForm.patchValue({
      writeUpGuj: data
    });
  }
  // Eng Gujarati Functions Ends

  goToScreen() {
    this.router.navigate(['/budget/achievement-against-targets']);
  }

}
