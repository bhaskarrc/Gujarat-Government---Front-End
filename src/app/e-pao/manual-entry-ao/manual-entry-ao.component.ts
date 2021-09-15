
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WorkFlowEPaoComponent } from '../work-flow-e-pao/work-flow-e-pao.component';


@Component({
  selector: 'app-manual-entry-ao',
  templateUrl: './manual-entry-ao.component.html',
  styleUrls: ['./manual-entry-ao.component.css']
})
export class ManualEntryAoComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();

  isSubmitted: boolean = false;
  entryMasterAoForm: FormGroup;


  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {

    this.entryMasterAoForm = this.fb.group({
      refNo: ['100000001'],
      eDate: ['13-Apr-2019'],
      vDate: ['12-May-2018'],
      cinNo: ['5566334898799'],
      type: ['AD'],

      amt: ['2000.00'],

    });
  }

  clearForm() {
    this.entryMasterAoForm.reset();
  }

  onSave() {
    if (this.entryMasterAoForm.valid) {
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



