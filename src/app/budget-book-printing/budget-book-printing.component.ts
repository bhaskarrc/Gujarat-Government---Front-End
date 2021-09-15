import { Component, OnInit, ViewChild, OnDestroy, Inject, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { startWith, map, takeUntil } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSelect, MatPaginator, MatSort } from '@angular/material';
import { ReplaySubject, Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-budget-book-printing',
  templateUrl: './budget-book-printing.component.html',
  styleUrls: ['./budget-book-printing.component.css']
})
export class BudgetBookPrintingComponent implements OnInit, OnDestroy {
  filteredinddo: any;

  constructor(public dialog: MatDialog,private fb : FormBuilder,private toastr: ToastrService,private el: ElementRef) { }
  budgetprintingform: FormGroup;
  uploadExcelStep : FormGroup;
  newWorkEstimate : FormGroup;
  filteredCodes: Observable<string[]>;
  tabDisable: Boolean = true;
  date: any = new Date();
  doneHeader: Boolean = false;
  selectedIndex: number;

  private _onDestroy = new
   Subject<void>();

  private paginator: MatPaginator;
  private sort: MatSort;

  ngOnInit() {
    this.budgetprintingform = this.fb.group({
      departmentCode : ['', Validators.required],
      finYear : ['', Validators.required],
    });
    this.filteredFinYear.next(this.finYear_list.slice());

    (this.finYearCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.finYear_list, this.finYearCtrl.value, this.filteredFinYear);
      }));

    this.filteredDepartmentCode.next(this.department_list.slice());
    (this.departmentCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.department_list, this.departmentCodeCtrl.value, this.filteredDepartmentCode);
      }));
  }
  filterEstimationFor(arrValue,searchValue) {
    const search = searchValue;
    if (!arrValue) {
      return;
    }
    const filterArray = arrValue.filter(function(number) { 
      return (number.value == search)
    });
    return filterArray;
  }

  // tslint:disable-next-line:member-ordering
  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
  };


  // tslint:disable-next-line:member-ordering
  finYear_list: any[] = [
    {value: '2019-2020', viewValue: '2019-2020'},
    {value: '2020-2021', viewValue: '2020-2021'},
  ];

  // tslint:disable-next-line:member-ordering
  department_list: any[] = [
    {value: '1', viewValue: 'Home Department'},
    {value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'},
    {value: '3', viewValue: 'Health and Family Welfare Department'},
  ];
  // tslint:disable-next-line:member-ordering
  finYearCtrl: FormControl = new FormControl();
  // tslint:disable-next-line:member-ordering
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  // tslint:disable-next-line:member-ordering
  departmentCodeCtrl: FormControl = new FormControl();
  // tslint:disable-next-line:member-ordering
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  // tslint:disable-next-line:member-ordering
  @ViewChild('singleSelect') singleSelect: MatSelect;

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
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


  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
    // if (this.createEstimateForm.invalid) {
    //   this.toastr.error('Please fill all the details.');
    //   this.tabDisable = true;
    // } else {
    //   this.tabDisable = false;
    //   this.selectedIndex = 1;
    //   this.doneHeader = true;
    // }
  }
  decimalPoint(data, key) {
    // debugger
    data[key] = Number(data[key]).toFixed(2);
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

  }

}

