import { group } from '@angular/animations';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { paoMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-bill-fro-mla',
  templateUrl: './bill-fro-mla.component.html',
  styleUrls: ['./bill-fro-mla.component.css']
})
export class BillFroMlaComponent implements OnInit {
  errorMessages = paoMessage;
  createMLAForm: FormGroup;
  mlaNameCtrl: FormControl = new FormControl();
  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog, ) { }
  
  mlaName_list: any = [
    {value: '1', viewValue: ' Mr. Saurabh Patel'},
  ];

  ngOnInit() {
    this.createMLAeData();
  }

  createMLAeData() {
    this.createMLAForm = this.fb.group({
      mlaNo: [''],
      mlaName: ['']
    });

  }

}
