import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  hide = true;
  passwordsetPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  errorMessages = edpMessage;

  ngOnInit() {
    this.passwordsetPasswordForm = this.fb.group({
      currentPassword: [''],
      newPassword: [''],
      confirmPassword: [''],
    });
  }





}
