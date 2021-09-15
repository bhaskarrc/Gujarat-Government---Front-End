import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSelect } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-branch-master',
  templateUrl: './branch-master.component.html',
  styleUrls: ['./branch-master.component.css']
})
export class BranchMasterComponent implements OnInit {

  branchMasterForm: FormGroup;
  dataList:any [] = [] ;
  constructor(
    private toastr: ToastrService,
    private fb : FormBuilder,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }
  
    departmentList: any[] = [
      {value: 'agriculture_farmers_welfare_co-operation_department', viewValue: 'Agriculture,Farmers Welfare & Co-operation Department'},
      {value: 'revenue_department', viewValue: 'Revenue Department'},
      {value: 'education_department', viewValue: 'Education Department'},
      {value: 'energy_petrochemicals_department', viewValue: 'Energy & Petrochemicals Department'},
      {value: 'finance_department', viewValue: 'Finance Department'},
      {value: 'food_civil_supplies_department', viewValue: 'Food & Civil Supplies Department'},
      {value: 'forest_enviroment_department', viewValue: 'Forest & Environment Department'}
    ];


    hodNamelist: any[] = [
      {value: 'pay_accounts_office_ahemdabad', viewValue: 'Pay & Accounts Office Ahmedabad'},
      {value: 'pension_payment_office_ahmedabad', viewValue: 'Pension Payment Office, Ahmedabad'},
      {value: 'district_aast_examinar_local_fund_accounts_ahmedabad', viewValue: 'District Asst Examiner Local Fund Accounts, Ahmedabad'},
      {value: 'sub_treasury_office_dholka_ahmedabad', viewValue: 'Sub Treasury Office, Dholka, Ahmedabad'},
      {value: 'sub_treasury_office_dhandhuka_ahmedabad', viewValue: 'Sub Treasury Office, Dhandhuka, Ahmedabad'},
      {value: 'sub_treasury_office_sanand_ahmedabad', viewValue: 'Sub Treasury Office, Sanand, Ahmedabad'}
    ];


  errorMessages = edpMessage;

  displayedBrowseColumns = ['branch_name', 'default_branch', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.dataList);
  ngOnInit() {
    this.createForm();
    this.dataList = localStorage.getItem('branch_master') ? JSON.parse(localStorage.getItem('branch_master')) : [];
    this.dataSourceBrowse.data = this.dataList;
  }

  createForm(){
    this.branchMasterForm = this.fb.group({
      branch_name: ['', Validators.required],
      administrator_department: ['', Validators.required],
      hod_list:['', Validators.required]
    });
  }

  saveBranch() {
    this.dataList.push({
      branch_name: this.branchMasterForm.value['branch_name'],
      administrator_department: this.branchMasterForm.value['administrator_department'],
      hod_list: this.branchMasterForm.value['hod_list'],
    });

    localStorage.setItem('branch_master', JSON.stringify(this.dataList));
    this.dataSourceBrowse.data = this.dataList;
    this.branchMasterForm.reset();
  }

  deletebranchData(index) {
      this.dataSourceBrowse.data.splice(index, 1);
      this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);

  }
  addFormCStmt1() {
    
  }
}
