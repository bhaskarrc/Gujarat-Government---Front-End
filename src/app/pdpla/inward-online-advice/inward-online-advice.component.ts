import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PDPLAInward, ListValue } from 'src/app/model/pdpla';
import { Router } from '@angular/router';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';

@Component({
  selector: 'app-inward-online-advice',
  templateUrl: './inward-online-advice.component.html',
  styleUrls: ['./inward-online-advice.component.css']
})
export class InwardOnlineAdviceComponent implements OnInit {

  pdplaInwardOnlineAdviceData: PDPLAInward[] = [
    {
      adviceNo: '5', pdplaAccNo: 'DDO', officeName: 'District Panchayat', cardexNo: '986',
      virtualTokenNo: '1', adviceAmount: '500.00', adviceDate: '11-Apr-2010', depositBranchUser: '1'
    },
    {
      adviceNo: '10', pdplaAccNo: 'DDO', officeName: 'District Panchayat', cardexNo: '986',
      virtualTokenNo: '2', adviceAmount: '500.00', adviceDate: '11-Apr-2010', depositBranchUser: '1'
    }
  ];

  columns: string[] = [
    'select', 'srno', 'adviceNo', 'pdplaAccNo', 'officeName', 'cardexNo', 'virtualTokenNo', 'adviceAmount',
    'adviceDate', 'depositBranchUser'
  ];

  depositBranchList: ListValue[] = [
    { value: '1', viewValue: 'Mr. V.R.Patel' }
  ];

  todayDate = new Date();
  isSearch: boolean;
  selection = new SelectionModel<any>(true, []);
  pdplaInwardOnlineAdviceForm: FormGroup;
  depositBranchCtrl: FormControl = new FormControl();
  dataSource = new MatTableDataSource<any>(this.pdplaInwardOnlineAdviceData);
  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }
  directiveObject = new PdplaDirectives(this.router, this.dialog);

  ngOnInit() {
    this.pdplaInwardOnlineAdviceFormData();
  }

  pdplaInwardOnlineAdviceFormData() {
    this.pdplaInwardOnlineAdviceForm = this.fb.group({
      // Formfields
      adviceNumber: [''],
      adviceDate: [''],
      pdplaAccNo: [''],
      cardexNo: [''],
      totalAmount: ['']
    });
  }


  // resets form
  resetForm() {
    this.pdplaInwardOnlineAdviceForm.reset();
  }

}
