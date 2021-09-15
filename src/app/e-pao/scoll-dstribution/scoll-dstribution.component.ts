import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { ScrollDistribution } from 'src/app/model/epaoModel';
import { SelectionModel } from '@angular/cdk/collections';
import { EPaoDirectives } from 'src/app/common/directive/epao';

@Component({
  selector: 'app-scoll-dstribution',
  templateUrl: './scoll-dstribution.component.html',
  styleUrls: ['./scoll-dstribution.component.css']
})
export class ScollDstributionComponent implements OnInit {
  ELEMENT_DATA: ScrollDistribution[] = [
    {
      scrollNo: 'ENV87484165118421',
      noOfChallan: '100',
      amount: '10000.00',
    },
    {
      scrollNo: 'ENV84165118421',
      noOfChallan: '200',
      amount: '20000.00',
    }
  ];
  // FormGroup
  scrollForm: FormGroup;
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // FormControl
  branchCtrl: FormControl = new FormControl();
  // Table Source
  newdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  newdisplayedColumns: string[] = ['srNo', 'scrollNo', 'noOfChallan', 'amount', 'branch', 'newaction'];
  newdisplayedFooterColumns: string[] = ['scrollNo', 'noOfChallan', 'amount', 'branch', 'newaction'];
  selection = new SelectionModel<any>(true, []);
  // Listi Deatils
  branch_list: any[] = [{
    value: '1', viewValue: ' Receipt Branch 1',
  },
  {
    value: '2', viewValue: 'Receipt Branch 2',
  }
    ,
  {
    value: '2', viewValue: 'Receipt Branch 3',
  }
  ];
  challan = '0';
  amt = 0;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  directiveObject = new EPaoDirectives(this.router, this.dialog);
  // Error Message
  public errorMessages;
  ngOnInit() {
    this.errorMessages = EPOAMessage;
    this.scrollData();
    this.newdataSource.sort = this.sort;

  }
  scrollData() {
    this.scrollForm = this.fb.group({
      fromDate: [''],
      toDate: ['']
    });
  }

  isAllSelected() {

    // shows value as per row selected
    if (this.selection.selected.length === 1) {
      this.amt = this.selection.selected[0].amount;
      this.challan = this.selection.selected[0].noOfChallan;
    } else if (this.selection.selected.length === 2) {
      this.challan = '300';
      this.amt = 30000;
    } else if (this.selection.selected.length === 0) {
      this.challan = '';
      this.amt = 0;
    }

    const numSelected = this.selection.selected.length;
    const numRows = this.newdataSource.data.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.newdataSource.data.forEach(row => this.selection.select(row));
  }


  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  // Navigation
  navigate() {
    this.router.navigate(['./e-pao/scroll-distribution-listing']);
  }


  totalChallan(): number {
    let amountExp = 0;
    this.newdataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.noOfChallan);
    });
    return amountExp;
  }

  totalAmmount(): number {
    let amountExp = 0;
    this.newdataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.amount);
    });
    return amountExp;
  }

}
