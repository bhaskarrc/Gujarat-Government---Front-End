import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { ChequeInventoryDirective } from 'src/app/common/directive/cheque-inventory';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-signature-verification',
  templateUrl: './signature-verification.component.html',
  styleUrls: ['./signature-verification.component.css']
})
export class SignatureVerificationComponent implements OnInit {
  // variables
  todayDate = new Date();
  isSearch: boolean;
  pdplaAdviceCardexVerificationForm: FormGroup;
  directiveObj = new CommonDirective(this.router);
  ciDirectiveObj = new ChequeInventoryDirective(this.dialog);
  signVerifyCtrl: FormControl = new FormControl();

  // lists
  signVerifyList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  // table data
  ElementData: any[] = [
    {
      accNo: 'EE1', indentNo: '19-20/CI/YI/001', cardexNo: '986', indentDate: '4-July-2020',
      cardexOfficer: '',
      signVerify: ''
    },
    {
      accNo: 'EE10', indentNo: '19-20/CI/YI/002', cardexNo: '986', indentDate: '3-July-2020',
      cardexOfficer: '',
      signVerify: ''
    }
  ];

  column: string[] = [
    'select', 'srno', 'accNo', 'indentNo', 'indentDate', 'cardexNo',
    'cardexOfficer', 'signVerify',
    'sign'
  ];
  dataSource = new MatTableDataSource<any>(this.ElementData);

  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.lcAdviceCardexVerificationFormData();
  }

  lcAdviceCardexVerificationFormData() {
    this.pdplaAdviceCardexVerificationForm = this.fb.group({
      indentNumber: [''],
      indentDate: [''],
      adviceDate: [''],
      accNo: [''],
      cardexNo: [''],
    });
  }

}
