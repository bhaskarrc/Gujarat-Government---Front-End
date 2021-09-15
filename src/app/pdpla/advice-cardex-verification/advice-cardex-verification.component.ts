import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PDPLACarex, ListValue } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advice-cardex-verification',
  templateUrl: './advice-cardex-verification.component.html',
  styleUrls: ['./advice-cardex-verification.component.css']
})
export class AdviceCardexVerificationComponent implements OnInit {
  // Table Source
  pdplaAdviceCardexVerificationData: PDPLACarex[] = [
    {
      adviceNo: '5', pdplaAccNo: 'DDO', officeName: 'District Panchayat', cardexNo: '986',
      virtualTokenNo: '1', adviceAmount: '500.00', adviceDate: '11-Apr-2010', tokenDate: '10-Apr-2009',
      depositBranchUser: '1', signVerify: ''
    },
    {
      adviceNo: '5', pdplaAccNo: 'DDO', officeName: 'District Panchayat', cardexNo: '986',
      virtualTokenNo: '2', adviceAmount: '500.00', adviceDate: '11-Apr-2010', tokenDate: '10-Apr-2009', depositBranchUser: '1',
      signVerify: ''
    }
  ];

  column: string[] = [
    'select', 'srno', 'adviceNo', 'pdplaAccNo', 'officeName', 'cardexNo',
    'virtualTokenNo', 'adviceAmount', 'adviceDate', 'depositBranchUser', 'signVerify',
    'sign'
  ];
  // List
  depositBranchList: ListValue[] = [
    { value: '1', viewValue: 'Mr. V.R.Patel' }
  ];
  depositBranchCtrl: FormControl = new FormControl();

  signVerifyList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  // Date
  todayDate = new Date();
  // Variable
  isSearch: boolean;
  selection = new SelectionModel<any>(true, []);
  // Form Group
  pdplaAdviceCardexVerificationForm: FormGroup;
  // Form Control
  signVerifyCtrl: FormControl = new FormControl();
  dataSource = new MatTableDataSource<any>(this.pdplaAdviceCardexVerificationData);

  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }
  directiveObject = new PdplaDirectives(this.router, this.dialog);

  ngOnInit() {
    this.lcAdviceCardexVerificationFormData();
  }

  lcAdviceCardexVerificationFormData() {
    this.pdplaAdviceCardexVerificationForm = this.fb.group({
      // Formfields
      adviceNumber: [''],
      adviceDate: [''],
      pdplaAccNo: [''],
      cardexNo: [''],
      totalAmount: [''],
      virtualTokenNo: ['']
    });
  }

  search() { }

  resetForm() { }

}
