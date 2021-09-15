import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-generate-life-certificate',
  templateUrl: './generate-life-certificate.component.html',
  styleUrls: ['./generate-life-certificate.component.css']
})
export class GenerateLifeCertificateComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  // variables
  searchForm: FormGroup;
  errMsg = ppoMessage;

  // form controls
  bankCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();
  auditorCtrl: FormControl = new FormControl();

  // lists
  headCode_list: CommonListing[] = [
    { value: '1', viewValue: '1: 2071 Pension And Other Retirement Benefits To Civil Pensioner' },
    { value: '2', viewValue: '2: 2071 Pension And Other Retirement Benefits To Civil, Family Pensioner' },
    { value: '3', viewValue: '3: 2071 Pension And Other Retirement Benefits To Family Pensioner' },
    { value: '4', viewValue: '4: 2071 Pension And Other Retirement Benefits To School & College Pensioner' },
    { value: '5', viewValue: '5: 2071 Provisional Pension To School And College Pensioner' },
    { value: '6', viewValue: '6: 2071 Provisional Pension To Civil Pensioner' },
    { value: '7', viewValue: '7: 2071 Provisional Pension To Civil Family Pensioner' },
    { value: '8', viewValue: '8: 2071 Pension And Other Retirement Benefits Civil Pensioner Fixed Pension' },
    { value: '9', viewValue: '9: 2071 Pension Old Pensioner' },
    { value: '10', viewValue: '10: 2071 Pension State Pensioner' },
    { value: '11', viewValue: '11: 2071 Pension To Primary Teachers' },
    { value: '12', viewValue: '12: 2071 Family Pension To Primary Teachers' },
    { value: '13', viewValue: '13: 2071 Pension To Panchayat Employees' },
    { value: '14', viewValue: '14: 2071 Family Pension To Panchayat Employees' },
    { value: '15', viewValue: '15: 2071 Pension Fixed To Panchayat Employees' },
  ];

  auditor_list: CommonListing[] = [
    { value: '1', viewValue: 'M.P. Patel' },
  ];

  bank_list: CommonListing[] = [
    { value: '1', viewValue: 'State Bank of India' },
  ];

  branch_list: CommonListing[] = [
    { value: '1', viewValue: 'Kabir Chowk (Sabarmati)' },
    { value: '2', viewValue: 'Naranpura' },
    { value: '3', viewValue: 'Narayan Nagar' },
  ];

  ngOnInit() {
    this.searchForm = this.fb.group({
      auditor: [''],
      bank: [''],
      branch: [''],
      headCode: [''],
      description: [''],
      month: [''],
      year: [''],
      bankCode: ['']
    });
  }

  // routing
  goToPensionerDetails() {
    this.router.navigate(['/ppo/pensioner-details']);
  }
  clearForm() { }

}
