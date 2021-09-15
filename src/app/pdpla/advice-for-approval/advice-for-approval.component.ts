import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { ApprovalListAdvice } from 'src/app/model/pdpla';

@Component({
  selector: 'app-advice-for-approval',
  templateUrl: './advice-for-approval.component.html',
  styleUrls: ['./advice-for-approval.component.css']
})
export class AdviceForApprovalComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date();
  // Variavle
  selectedIndex: number;
  errorMessages = pdplaMessage;
  // Form Group
  adviceForApprovalform: FormGroup;
  selection = new SelectionModel<any>(true, []);

  constructor(private fb: FormBuilder, public dialog: MatDialog) {

  }

  Element_Data: ApprovalListAdvice[] = [
    {
      class: '1',
      fund: '3',
      expType: 'Standing Charges',
      budgetType: '1',
      schemeNo: '000000',
      demandNo: '999',
      majorHead: '8448',
      subMajorHead: '01',
      minorHead: '104',
      subHead: '01',
      detailHead: '00',
      objectHead: 'C1',
      amt: '1000.00',
      availAmount: '39988999.00'
    },
    {
      class: '2',
      fund: '4',
      expType: 'Standing Charges',
      budgetType: '2',
      schemeNo: '000000',
      demandNo: '999',
      majorHead: '8443',
      subMajorHead: '00',
      minorHead: '105',
      subHead: '03',
      detailHead: '00',
      objectHead: 'C2',
      amt: '2000.00',
      availAmount: '49988999.00'
    },

  ];
  dataSourcesplitProcess = new MatTableDataSource<ApprovalListAdvice>(this.Element_Data);
  displayedColumnssplitisting: any[] = [

    'srNo',
    'class',
    'fund',
    'expType',
    'budgetType',
    'schemeNo',
    'demandNo',
    'majorHead',
    'subMajorHead',
    'minorHead',
    'subHead',
    'detailHead',
    'objectHead',
    'amt',
    'availAmount',

  ];


  ngOnInit() {
    this.adviceForApprovalform = this.fb.group({
      // Formfields
      divisionCode: [''],
      adviceNo: [''],
      expAmount: [''],
      deductions: [''],
      netTotal: [''],
      openingBalance: [''],
      closingBalance: [''],


    });
  }

}
