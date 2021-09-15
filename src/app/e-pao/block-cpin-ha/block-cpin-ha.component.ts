
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-block-cpin-ha',
  templateUrl: './block-cpin-ha.component.html',
  styleUrls: ['./block-cpin-ha.component.css']
})
export class BlockCpinHaComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  errorMessages = EPOAMessage;
  isSubmitted: boolean = false;
  blockCpinhaForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }


  ngOnInit() {
    this.blockCpinhaForm = this.fb.group({
      tId: ['1000000001'],
      cinNo: ['10000000002'],
      cin: ['1000000003'],
      status: ['Yes'],
      fDate: ['12-May-2019'],
      fNo: ['564'],

    });
  }

  onSave() {
    if (this.blockCpinhaForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
  commentEpaoDetails(): void {
    const dialogRef = this.dialog.open(WorkFlowEPaoComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}

