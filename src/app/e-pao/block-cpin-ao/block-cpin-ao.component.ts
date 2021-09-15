
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { MatDialog } from '@angular/material';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';
@Component({
  selector: 'app-block-cpin-ao',
  templateUrl: './block-cpin-ao.component.html',
  styleUrls: ['./block-cpin-ao.component.css']
})
export class BlockCpinAoComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  errorMessages = EPOAMessage;
  isSubmitted: boolean = false;
  blockCpinAoForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }


  ngOnInit() {
    this.blockCpinAoForm = this.fb.group({
      tId: ['1000000001'],
      cinNo: ['10000000002'],
      cin: ['1000000003'],
      status: ['Yes'],
      fDate: ['12-May-2019'],
      fNo: ['564'],

    });
  }

  onSave() {
    if (this.blockCpinAoForm.valid) {
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

