import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { DelegationList } from 'src/app/model/budget';

// Listing table Data

const ELEMENT_DATA: DelegationList[] = [
  {financialYear: '2020-2021', departMent: 'Revenue Department', module: 'Budget', subModule: 'New-Item'},

];

@Component({
  selector: 'app-delegation-list',
  templateUrl: './delegation-list.component.html',
  styleUrls: ['./delegation-list.component.css']
})
export class DelegationListComponent implements OnInit {

  delegationListForm: FormGroup;
  date: any = new Date();
// Listing table
  displayedColumns: string[] = ['position', 'financialYear', 'department', 'module', 'subModule', 'action'];
  dataSource = new MatTableDataSource<DelegationList>(ELEMENT_DATA);

  constructor(private fb: FormBuilder, ) { }
  finYearCtrl: FormControl = new FormControl();
  departMentCtrl: FormControl = new FormControl();
  moduleCtrl: FormControl = new FormControl();
  subModuleCtrl: FormControl = new FormControl();

// Search Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
];

departMentList: CommonListing[] = [
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
moduleList: CommonListing[] = [
  {value: '00', viewValue: 'EDP'},
    {value: '01', viewValue: 'Pay Fixation & Pay Verification Functionalities'},
    {value: '03', viewValue: 'Budget'},
    {value: '04', viewValue: 'Grant Distribution'},
    {value: '05', viewValue: 'Contract Management Functionalities'},
];
subModuleList: CommonListing[] = [
  {value: '00', viewValue: 'Standing Charges Estimates - Form B'},
  {value: '01', viewValue: 'Item Continuous Estimates - Form E'},
  {value: '02', viewValue: 'New Item Estimates - Form C/F'},
  {value: '03', viewValue: 'New Work Estimates -Form G/H'},
  {value: '04', viewValue: 'Work-in-progress Estimates - Form I'},
];


  ngOnInit() {
    this.delegationListForm = this.fb.group({
      financialYear: [''],
      departMent: [''],
      module: [''],
      subModule: [''],
      referenceNumber: [''],
      referenceDate: [''],
    });
  }

  clearForm() {}
  saveEstimate() {}
}
