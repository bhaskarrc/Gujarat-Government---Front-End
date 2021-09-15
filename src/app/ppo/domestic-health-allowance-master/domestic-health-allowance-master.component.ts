import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from '../../model/treasury-bill';
import { DistributePension } from 'src/app/model/ppo';

@Component({
  selector: 'app-domestic-health-allowance-master',
  templateUrl: './domestic-health-allowance-master.component.html',
  styleUrls: ['./domestic-health-allowance-master.component.css']
})
export class DomesticHealthAllowanceMasterComponent implements OnInit {

  medicalAllowancesForm: FormGroup;

  medicalAllowanceDATA: DistributePension[] = [
    { startDate: '05-OCT-2019', endDate: new Date('06-JUL-2019'), headCode: '69', amount: '5000.00' },
    { startDate: '07-JUL-2019', endDate: new Date('21-NOV-2019'), headCode: '69', amount: '7500.00' },
    { startDate: '22-NOV-2019', endDate: new Date(), headCode: '69', amount: '8900.00' }
  ];

  medicalAllowanceColumns: string[] = ['srNo', 'startDate', 'endDate', 'headCode', 'amount'];

  headCode_list: ListValue[] = [
    { value: '1', viewValue: '69' },
    { value: '2', viewValue: '70' }
  ];

  medicalAllowanceDATASource = new MatTableDataSource<DistributePension>(this.medicalAllowanceDATA);
  headCodeCtrl: FormControl = new FormControl();
  constructor(private fb: FormBuilder) { }
  errorMessages = ppoMessage;

  ngOnInit() {
    this.medicalAllowancesFormData();
  }

  medicalAllowancesFormData() {
    this.medicalAllowancesForm = this.fb.group({
      startDate: [''],
      headCode: [''],
      amount: [''],
    });
  }
  // adds medical data
  addMedicalData() {
    const newStartDate = this.medicalAllowancesForm.controls.startDate.value;
    const newEndDate = new Date(newStartDate.getFullYear(), newStartDate.getMonth(), newStartDate.getDate() - 1);
    const newHeadCode = this.medicalAllowancesForm.controls.headCode.value;
    const newAmount = this.medicalAllowancesForm.controls.amount.value;

    if ((newStartDate !== '') && (newHeadCode !== '') && (newAmount !== '')) {
      const temp = this.medicalAllowanceDATA.pop();
      temp['endDate'] = newEndDate;
      this.medicalAllowanceDATA.push(temp);
      this.medicalAllowanceDATA.push({ startDate: newStartDate, headCode: newHeadCode, amount: newAmount, endDate: new Date() });
    }

    this.medicalAllowanceDATASource = new MatTableDataSource<any>(this.medicalAllowanceDATA);
    this.resetForm();
  }
  // resets form
  resetForm() {
    this.medicalAllowancesForm.reset();
  }

}
