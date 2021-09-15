import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-emd-master-view',
  templateUrl: './emd-master-view.component.html',
  styleUrls: ['./emd-master-view.component.css']
})
export class EmdMasterViewComponent implements OnInit {
  // FormGroup
  emdMasterForm: FormGroup;
  // FormControl
  lapseCtrl: FormControl = new FormControl();

  initiatiomdate = new Date();
  // List values
  lapse_list: any[] = [
    { value: '1', viewValue: 'YES' },
    { value: '2', viewValue: 'NO' },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  ngOnInit() {
    this.emdMasterViewData();
  }
  emdMasterViewData() {
    this.emdMasterForm = this.fb.group({
      // FormGroup Fields
      code: ['TD'],
      lapse: ['1'],
      majorHead: ['8443'],
      subMajorHead: ['00'],
      minorHead: ['101'],
      subHead: ['02'],
    });
  }



}

