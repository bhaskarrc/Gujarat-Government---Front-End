import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { MedicalAllowance } from 'src/app/model/ppo';

@Component({
  selector: 'app-medical-allowance-master',
  templateUrl: './medical-allowance-master.component.html',
  styleUrls: ['./medical-allowance-master.component.css']
})
export class MedicalAllowanceMasterComponent implements OnInit {
  // variables
  medicalAllowancesForm: FormGroup;
  errorMessages = ppoMessage;

  medicalAllowanceDATA: MedicalAllowance[] = [
    { startDate: new Date('05-OCT-2019'), endDate: new Date('06-JUL-2019'), headCode: '1', amount: '5000.00', enterBy: 'Gujarat' },
    { startDate: new Date('07-JUL-2019'), endDate: new Date('21-NOV-2019'), headCode: '1', amount: '7500.00', enterBy: 'Gujarat' },
    { startDate: new Date('22-NOV-2019'), endDate: new Date(''), headCode: '1', amount: '8900.00', enterBy: 'Gujarat' }
  ];

  medicalAllowanceColumns: string[] = [
    'srNo', 'startDate', 'endDate', 'enterBy', 'headCode', 'amount'
  ];

  enterBy_list: ListValue[] = [
    { value: '1', viewValue: 'Gujarat' },
    { value: '2', viewValue: 'Other states' }
  ];
  headCode_list: ListValue[] = [
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

  medicalAllowanceDATASource = new MatTableDataSource<MedicalAllowance>(this.medicalAllowanceDATA);
  headCodeCtrl: FormControl = new FormControl();
  enterByCtrl: FormControl = new FormControl();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.medicalAllowancesFormData();
  }

  medicalAllowancesFormData() {
    this.medicalAllowancesForm = this.fb.group({
      startDate: [''],
      headCode: [''],
      amount: [''],
      enterBy: ['']
    });
  }
  // adds new medical data
  addMedicalData() {

    const newStartDate = this.medicalAllowancesForm.controls.startDate.value;
    const newEndDate = new Date(newStartDate.getFullYear(), newStartDate.getMonth(), newStartDate.getDate() - 1);
    const newHeadCode = this.medicalAllowancesForm.controls.headCode.value;
    const newAmount = this.medicalAllowancesForm.controls.amount.value;

    if ((newStartDate !== '') && (newHeadCode !== '') && (newAmount !== '')) {
      const temp = this.medicalAllowanceDATA.pop();
      temp['endDate'] = newEndDate;
      this.medicalAllowanceDATA.push(temp);
      this.medicalAllowanceDATA.push({
        startDate: newStartDate, headCode: newHeadCode,
        amount: newAmount, endDate: new Date(''), enterBy: ''
      });
    }

    this.medicalAllowanceDATASource = new MatTableDataSource<any>(this.medicalAllowanceDATA);
    this.resetForm();
  }
  // resets form
  resetForm() {
    this.medicalAllowancesForm.reset();
  }

}
