import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { emdMessage } from 'src/app/common/error-message/common-message.constants';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-emd-master',
  templateUrl: './emd-master.component.html',
  styleUrls: ['./emd-master.component.css']
})
export class EmdMasterComponent implements OnInit {
  // FormGroup
  emdMasterForm: FormGroup;
  // FormControl
  lapseCtrl: FormControl = new FormControl();
  // variables
  errorMessages = emdMessage;
  isSubmitted = false;
  initiatiomdate = new Date();

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  directiveObject = new EmdDirectives(this.router, this.dialog);

  // List values
  lapse_list: ListValue[] = [
    { value: '1', viewValue: 'YES' },
    { value: '2', viewValue: 'NO' },
  ];

  ngOnInit() {
    this.emdMasterData();
  }
  emdMasterData() {
    this.emdMasterForm = this.fb.group({
      // FormGroup Fields
      code: [''],
      lapse: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
    });
  }
  // closeConfirmation popup
  closeConfirmationPopup() {
    const dialogRef = this.dialog.open(CloseConfirmCommonDialogComponent, {
      width: '400px'
    });

  }
}

