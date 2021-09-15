import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';


export interface PeriodicElement {
  district: string;
  position: number;
  ddoNO: number;
  cardexsNo: number;
  ddoOfcName: string;
  billType: string;
  headStructure: string;
  effectiveFrDate: string;
  effectiveToDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, district: 'Ahmedabad',  ddoNO: 23, cardexsNo: 5437 , ddoOfcName: 'DDO Ahmedabad', billType: 'GTR 30 - Pay Bill',  headStructure: '017-2054-00-097-01-00-C1',  effectiveFrDate: '18/11/2019', effectiveToDate: '18/11/2019', },
]

@Component({
  selector: 'app-grant-exemption-list',
  templateUrl: './grant-exemption-list.component.html',
  styleUrls: ['./grant-exemption-list.component.css']
})
export class GrantExemptionListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'district', 'ddoNO', 'cardexsNo', 'ddoOfcName', 'billType',  'headStructure', 'effectiveFrDate',    'effectiveToDate', 'action'];
  grantExemption = ELEMENT_DATA;


  grantExemptionForm: FormGroup;
  todayDate = Date.now();
  ddoOfficeName: string;
  isSelected: boolean;

  effectivefromdate = new FormControl();
  effectivetodate = new FormControl();

  districtCtrl: FormControl = new FormControl();

  minDateefd = new Date(2019, 11, 8);
  minDateetd = new Date(2019, 11, 9);


  
  districtNameList: any[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Bharuch' },
    { value: '4', viewValue: 'Bhavnagar' },
    { value: '5', viewValue: 'Bhuj' },
    { value: '6', viewValue: 'Dahod' }
];

billTypeList: any[] = [
    { value: 'all', viewValue: 'All' },
    { value: 'selected', viewValue: 'Selected' },
    { value: 'bills_not_mapped', viewValue: 'Bills Not Mapped' }
];

billSelectedTypeList: any[] = [
    { value: '1', viewValue: 'GTR 30 - Pay Bill' },
    { value: '2', viewValue: 'GTR 45 - TA Bill' },
    { value: '3', viewValue: 'GTR 40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR 12 - Advanced Bill' },
    { value: '5', viewValue: 'GTR 13 - Medical Bill' }
];


selectedBillCtrl: FormControl = new FormControl();

_onDestroy = new Subject<void>();


  constructor(private fb: FormBuilder, ) { }

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

  ngOnInit() {
    this.grantExemptionData();
    this.effectivefromdate.patchValue(new Date('12/8/2019'));
    this.effectivetodate.patchValue(new Date('12/9/2019'));
  }

  grantExemptionData() {
    this.grantExemptionForm = this.fb.group({
      district: [''],
      ddoNo: [''],
      cardexNo: [''],
      ddoOfficeName: [''],
      selected: [''],
    });
}

}
