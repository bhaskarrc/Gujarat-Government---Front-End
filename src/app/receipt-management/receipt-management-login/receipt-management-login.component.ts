import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { receiptManagement } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-receipt-management-login',
  templateUrl: './receipt-management-login.component.html',
  styleUrls: ['./receipt-management-login.component.css']
})
export class ReceiptManagementLoginComponent implements OnInit {

  receiptLoginForm: FormGroup;
  errorMessages = receiptManagement;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.receiptLoginFormData();
  }

  receiptLoginFormData() {
    this.receiptLoginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

}
