import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-budget-book-print',
  templateUrl: './budget-book-print.component.html',
  styleUrls: ['./budget-book-print.component.css']
})
export class BudgetBookPrintComponent implements OnInit {
  budgetBookPrient: FormGroup;
  finYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  bpnCodeCtrl:FormControl = new FormControl();

  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

  filteredDepartmentList: CommonListing[] = [
    { value: '1', viewValue: 'Education Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' }
  ];

  bpnList: CommonListing[] = [
    { value: '1', viewValue: '03: Agriculture, Farmers Welfare and Co-operation Department' },
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.budgetBookPrient = this.fb.group({
      financialYear: ['2'],
      department: [''],
      bpnCode: ['1']
    })
  }
  generateBook() { }
  goToDashboard() { }
  isBpnCode: boolean = false;
  selectDepartment(event: any) {
    if (event !== '') {
      this.isBpnCode = true;
    }

  }
  savePrintbudget() {}
}
