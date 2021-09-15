import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-send-reminder',
  templateUrl: './send-reminder.component.html',
  styleUrls: ['./send-reminder.component.css']
})
export class SendReminderComponent implements OnInit {
  // variables
  todayDate = new Date();
  grievanceSendReminderForm: FormGroup;
  errorMessage = ppoMessage;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.grievanceSendReminderFormData();
  }

  grievanceSendReminderFormData() {
    this.grievanceSendReminderForm = this.fb.group({
      registrationNo: [''],
      remarks: ['']
    });
  }

}
