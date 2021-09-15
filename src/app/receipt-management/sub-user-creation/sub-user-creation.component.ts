
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { receiptManagement } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-sub-user-creation',
  templateUrl: './sub-user-creation.component.html',
  styleUrls: ['./sub-user-creation.component.css']
})
export class SubUserCreationComponent implements OnInit {
  // variables
  initiatiomdate = new Date();
  subUserCreationForm: FormGroup;
  isSubmitted = false;
  errorMessages = receiptManagement;

  // form controls
  designationCtrl: FormControl = new FormControl();
  roleCtrl: FormControl = new FormControl();

  // lists
  designation_list: any[] = [
    { value: '1', viewValue: 'Deputy Secretary' },
    { value: '2', viewValue: 'Section Officer' },
    { value: '3', viewValue: 'Deputy Section Officer' }
  ];

  role_list: any[] = [
    { value: '1', viewValue: 'Creator' },
    { value: '2', viewValue: 'Verifier' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.subUserCreationForm = this.fb.group({
      designation: [''],
      role: [''],
      userName: [''],
      userId: [''],
      email: [''],
      phone: [''],

    });
  }

  // clears form
  clearForm() {
    this.subUserCreationForm.reset();
  }

  // saves form
  onSave() {
    if (this.subUserCreationForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
}
