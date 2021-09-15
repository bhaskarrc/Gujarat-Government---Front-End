import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-roll-mapping',
  templateUrl: './user-roll-mapping.component.html',
  styleUrls: ['./user-roll-mapping.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRollMappingComponent implements OnInit {
  role: any[] = [
    {value: 'creator', viewvalue: 'Creator'},
    {value: 'verifier', viewvalue: 'Verifier'},
    {value: 'approver', viewvalue: 'Approver'},
  ];
  sub_activity: any[] = [
    {value: '01', viewvalue: 'New Item  Estimate'},
    {value: '02', viewvalue: 'Item Continuous Estimate'},
    {value: '03', viewvalue: 'New Work Estimate'},
    {value: '04', viewvalue: 'Receipt Estimate'},
    {value: '05', viewvalue: 'Standing Charge'},
    {value: '06', viewvalue: 'Revised Receipt Estimate'},
    {value: '07', viewvalue: 'Revised Expenditure'},
  ];
  allSubMapped: any[] = [
    {value: '01', viewvalue: 'Under Secretary'},
    {value: '02', viewvalue: 'Deputy Secretary'},
    {value: '03', viewvalue: 'Secretary'},
    {value: '04', viewvalue: 'Joint Secretary'},
    {value: '05', viewvalue: 'Assistant Secretary'},
    {value: '06', viewvalue: 'Section Officer'},
    {value: '07', viewvalue: 'Deputy Section Officer'},
    {value: '08', viewvalue: 'Additional Secretary'},
    {value: '09', viewvalue: 'DYSO'},
    {value: '10', viewvalue: 'Additional Chief Secretary'},
    {value: '11', viewvalue: 'Principal Secretary'},
    {value: '12', viewvalue: 'Clerk'},
  ];
  department_list: any[] = [
    {value: '1', viewValue: 'Agriculture,Farmers Welfare & Co-operation Department'},
    {value: '2', viewValue: 'Revenue Department'},
    {value: '3', viewValue: 'Gujarat Legislature Secretariat'},
    {value: '4', viewValue: 'Science and Technology Department'},
    {value: '5', viewValue: 'Gujarat Forest Service Officers'},
    {value: '6', viewValue: 'Sports,Youth and Cultural Activities Department'},
    {value: '7', viewValue: 'Women and Child Development Department'},
    {value: '8', viewValue: 'Urban Development and Urban Housing Department'},
    {value: '9', viewValue: 'Roads And Buildings Department'},
    {value: '10', viewValue: 'Climate Change Department'},
    {value: '11', viewValue: 'Tribal Development Department'},
    {value: '12', viewValue: 'Chief Minister Office'},
    {value: '13', viewValue: 'Information and Broadcasting Department'},
    {value: '14', viewValue: 'Education Department'},
  ];
  hod_list: any[] = [
    {value: '1', viewValue: 'Navrangpura Road & Building Division,Ahmedabad'},
    {value: '1', viewValue: 'Store Road & Building Division,Ahmedabad'},
    {value: '1', viewValue: 'Mechenical Circle (R & B), Ahmedabad'},
    {value: '1', viewValue: 'National Highway Division, Ahmedabad'},
  ];
  office_list: any[] = [
    {value: '1', viewValue: 'Pay & Accounts Office Ahmedabad'},
    {value: '1', viewValue: 'Pension Payment Office, Ahmedabad'},
    {value: '1', viewValue: 'District Asst Examiner Local Fund Accounts, Ahmedabad'},
    {value: '1', viewValue: 'District Treasury Office, Ahmedabad'},
    {value: '1', viewValue: 'Sub Treasury Office, Dholka, Ahmedabad'},
    {value: '1', viewValue: 'Sub Treasury Office, Dhandhuka, Ahmedabad'},
    {value: '1', viewValue: 'Sub Treasury Office, Sanand, Ahmedabad'},
    {value: '1', viewValue: 'Sub Treasury Office, Viramgam, Ahmedabad'},
    {value: '1', viewValue: 'Sub Treasury Office, Bavla, Ahmedabad'},
    {value: '1', viewValue: 'Sub Treasury Office, Sola, Ahmedabad'},
    {value: '1', viewValue: 'Navrangpura Road & Building Division,Ahmedabad'},
    {value: '1', viewValue: 'Store Road & Building Division,Ahmedabad'},
    {value: '1', viewValue: 'Mechenical Circle (R & B), Ahmedabad'},
    {value: '1', viewValue: 'National Highway Division, Ahmedabad'},
  ];
  activities_list: any[] = [
    {value: 'budget', viewValue: 'budget'},
    {value: 'budget', viewValue: 'budget'},
  ];
  items: any[] = [
    {value: 'budget', viewValue: 'Pratik S Shah'},
  ];
  userMappingForm: FormGroup;
  departmentCtrl: FormControl = new FormControl();
  hodCtrl: FormControl = new FormControl();
  officeCtrl: FormControl = new FormControl();
  activitiesCtrl: FormControl = new FormControl();
  AddUser2: any;
  array: any = [];
  designation = 'Default Designation 10';
  // userLoginName: any;
  constructor(private fb: FormBuilder) {

  }
  searchText : any;
  ngOnInit() {
    this.userMappingForm = this.fb.group({
      department: [''],
      hod: [''],
      office: [''],
      activities: [''],
      userLoginName: [''],
      addUser: [''],
    });
  }
  onSubmit(data) {
      this.array.push({
        AddUser2: this.userMappingForm.value.addUser,
      });
  }
  cancelSearch() {
    this.userMappingForm.reset();
  }
  clearForm(){

  }
}
