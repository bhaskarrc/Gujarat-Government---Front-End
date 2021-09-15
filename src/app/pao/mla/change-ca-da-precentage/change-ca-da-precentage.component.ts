import { paoMessage } from './../../../common/error-message/common-message.constants';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-ca-da-precentage',
  templateUrl: './change-ca-da-precentage.component.html',
  styleUrls: ['./change-ca-da-precentage.component.css']
})
export class ChangeCaDaPrecentageComponent implements OnInit {
  // Form Group
  changeCaOrDaPercentageForm: FormGroup;
  // Variable
  errorMessages = paoMessage;
  isSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.changeCaOrDaPercentageForm = this.fb.group({
      currentCaOrDaPercentage: ['9.00'],
      enterNewCaOrDaPercentage: ['']
    });
  }
  goToDashboard() {

  }
  onSubmit() {
    if (this.changeCaOrDaPercentageForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
}
