
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { MatDialog } from '@angular/material';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';

@Component({
  selector: 'app-manual-entry-ha',
  templateUrl: './manual-entry-ha.component.html',
  styleUrls: ['./manual-entry-ha.component.css']
})
export class ManualEntryHaComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  errorMessages = EPOAMessage;
  isSubmitted: boolean = false;
  entryMasterHaForm: FormGroup;


  forwardCtrl: FormControl = new FormControl();

  forwardCtrl_list: any[] = [
    { value: '1', viewValue: 'SA' },
    { value: '2', viewValue: 'DA' },
    { value: '3', viewValue: 'AO' },

  ];


  constructor(private fb: FormBuilder, public dialog: MatDialog, ) { }

  ngOnInit() {

    this.entryMasterHaForm = this.fb.group({
      refNo: ['1000000002'],
      eDate: ['12-May-2019'],
      vDate: ['12-May-2018'],
      cinNo: ['5555897416555'],
      type: ['AD'],
      forward: ['1'],
      amt: ['1000.00'],

    });
  }

  clearForm() {
    this.entryMasterHaForm.reset();
  }

  onSave() {
    if (this.entryMasterHaForm.valid) {
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


