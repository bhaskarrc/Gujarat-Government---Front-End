import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonListing } from 'src/app/model/common-listing';
import { Delegation } from 'src/app/model/budget';

// Listing table data
const ELEMENT_DATA: Delegation[] = [
  {position: 1, name: 'Additional Chief Secretary', amount: '', readonly: false},
  {position: 2, name: 'Secretary', amount: '', readonly: false},
  {position: 3, name: 'Joint Secretary', amount: '', readonly: false},
  {position: 4, name: 'Deputy Secretary', amount: '', readonly: false},
  {position: 5, name: 'OSD & EX-Officio Deputy Secretary', amount: '', readonly: false},
  {position: 6, name: 'Under Secretary', amount: '', readonly: false}
];

export interface datasource {
  name: string;
  position: number;
  amount: string;
  readonly: boolean;
}

@Component({
  selector: 'app-delegation',
  templateUrl: './delegation.component.html',
  styleUrls: ['./delegation.component.css']
})
export class DelegationComponent implements OnInit {

  date = new Date();
  amountValue: number;
  module: number;

  departmentCtrl: FormControl = new FormControl();
  moduleCtrl: FormControl = new FormControl();
  subModuleCtrl: FormControl = new FormControl();
  finYearCtrl: FormControl = new FormControl();
// EntryTable
  displayedColumns: string[] = ['position', 'name', 'amountCell', 'action'];

  dataSource = ELEMENT_DATA;
  datasource: any[] = [{
    amount: '',
  }];
// Entry Field Details

  departmentList1: CommonListing[] = [
    {value: '1', viewValue: 'Finance Department'},
  ];

  moduleList: CommonListing[] = [
    {value: '00', viewValue: 'EDP'},
    {value: '01', viewValue: 'Pay Fixation & Pay Verification Functionalities'},
    {value: '03', viewValue: 'Budget'},
    {value: '04', viewValue: 'Grant Distribution'},
    {value: '05', viewValue: 'Contract Management Functionalities'},
  ];

  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
];

  subModuleList: CommonListing[] = [
    {value: '00', viewValue: 'Standing Charges Estimates - Form B'},
    {value: '01', viewValue: 'Item Continuous Estimates - Form E'},
    {value: '02', viewValue: 'New Item Estimates - Form C/F'},
    {value: '03', viewValue: 'New Work Estimates -Form G/H'},
    {value: '04', viewValue: 'Work-in-progress Estimates - Form I'},

  ];

  data: any;

  constructor(private fb: FormBuilder, private toastr: ToastrService, public router: Router) { }
  delegationForm: FormGroup;
  isReadOnly: boolean;
  isEdit: boolean;

  ngOnInit() {
    this.createForm();
  }
  gotoListing() {
    this.router.navigate(['./budget/delegation-list']);

  }
  createForm() {
    this.delegationForm = this.fb.group({
      financialYear: ['2'],
      departmentName: [''],
      moduleName: [''],
      subModuleName: [''],
    });
  }
// only numbers
  numericOnly(event): boolean {
    const patt = /^([0-9])$/;
    const result = patt.test(event.key);
    return result;
}
// two point decimal
decimalPoint(data, key) {
  data[key] = Number(data[key]).toFixed(2);
}

goToDashboard() {
  this.router.navigate(['./budget']);
}

// On save click
  deligation() {
    const p_data = this.dataSource;
    console.log(this.dataSource);
    for (const value of p_data) {
     if (value.amount != '') {
      value['readonly'] = true;
      this.isEdit = true;
     } else {
      this.toastr.error('Please fill the amount');
     }
    }
  }

}
