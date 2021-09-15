import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  // variables
  forgotPasswordForm: FormGroup;
  userCodeError: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createforgotPasswordForm();
  }

  // form
  createforgotPasswordForm() {
    const self = this;
    this.forgotPasswordForm = this.fb.group({
      userCode: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
    });
    this.forgotPasswordForm.valueChanges.subscribe(res => {
      self.userCodeError = '';
    });
  }

}
