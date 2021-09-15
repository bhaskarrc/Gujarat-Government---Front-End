import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonListing } from 'src/app/model/common-listing';
import { budgetMessage } from '../../common/error-message/common-message.constants';

@Component({
  selector: 'app-administrative-approval',
  templateUrl: './administrative-approval.component.html',
  styleUrls: ['./administrative-approval.component.css']
})
export class AdministrativeApprovalComponent implements OnInit {

  expendCharges: boolean;
  public errorMessages;
  
  filteredFinYear: CommonListing[] = [
    {value: '2019-2020', viewValue: '2019-2020'},
    {value: '2020-2021', viewValue: '2020-2021'},
  ];

  departmentlist: CommonListing[] = [
    {value: '1', viewValue: 'Home Department'},
    {value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'},
    {value: '3', viewValue: 'Health and Family Welfare Department'},
  ];

  appNamelist: CommonListing[] = [
    {value: '1', viewValue: 'Standing Charges Estimates - Form B & G-i-A'},
    {value: '2', viewValue: 'New Item Estimates - Form C/F'},
    {value: '3', viewValue: 'Item Continuous Estimates - Form E'},
    {value: '4', viewValue: 'New Work Estimates -Form G/H'},
    {value: '5', viewValue: 'Work-in-progress Estimates - Form I'},
    {value: '6', viewValue: 'Work-in-progress Estimates - Form I'},
    {value: '7', viewValue: 'Receipt Estimates'},
    {value: '8', viewValue: 'Revised Receipt Estimates'},
    {value: '9', viewValue: 'Revised Expenditure Estimates'},
  ];

  timeLimitlist: CommonListing[] = [
    {value: '1', viewValue: '15-Sep-2020'},
    {value: '2', viewValue: '20-Nov-2020'},
    {value: '3', viewValue: '10-Dec-2020'},
    {value: '4', viewValue: '15-Dec-2020'},
    {value: '5', viewValue: '15-Dec-2020'},
  ];

  aministrativeApprovalForm: FormGroup;

  finYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  appNameCodeCtrl: FormControl = new FormControl();
  timeLimitCodeCtrl: FormControl = new FormControl();

  constructor(
    private fb: FormBuilder
  ) { }

  date: any = new Date();

  ngOnInit() {
    this.createForm();
    this.errorMessages = budgetMessage;
  }

  createForm() {
    this.aministrativeApprovalForm = this.fb.group({
      finYear: ['', Validators.required],
      departmentAdmin: ['', Validators.required],
      appName: ['', Validators.required],
      timeLimit: ['', Validators.required],
    });
  }

  saveAdministrativeApproval() {
    console.log(this.aministrativeApprovalForm.value);
  }

}
