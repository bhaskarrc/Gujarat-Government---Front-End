
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-payment-receipt-jotting',
  templateUrl: './payment-receipt-jotting.component.html',
  styleUrls: ['./payment-receipt-jotting.component.css']
})
export class PaymentReceiptJottingComponent implements OnInit {
  initiatiomdate = new Date((new Date()));
  // FormGroup
  prJottingForm: FormGroup;
  maxDate = new Date();
  isSubmitted = false;
  subTreasuryYes = false;
  // FormControl
  typeCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  subTreasuryNameCtrl: FormControl = new FormControl();
  errorMessages = eaMessage;
  // List values
  type_list: any[] = [
    { value: '1', viewValue: 'payment' },
    { value: '2', viewValue: 'Receipt' }
  ];

  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  subTreasuryName_list: any[] = [
    { value: '1', viewValue: 'Sub - Treasury Name 1' },
    { value: '2', viewValue: 'Sub - Treasury Name 2' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.prJottingForm = this.fb.group({
      // FormGroup Fields
      type: [''],
      subTreasury: [''],
      scrollDate: [''],
      branchCode: [''],
      bank: ['oriental bank Of Commerce'],
      branch: [''],
      pgNo: [''],
      subTreasuryName: [''],
      majorHead: [''],
      amount: [''],
      tc: ['0'],
      documents: ['1'],
    });
  }
  // function to clear form
  clearForm() {
    this.prJottingForm.reset();
  }

  selectYes(yes) {
    if (yes === 1) {
      this.subTreasuryYes = true;
    } else if (yes === 2) {
      this.subTreasuryYes = false;
    }
  }


  onSave() {
    if (this.prJottingForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
}
