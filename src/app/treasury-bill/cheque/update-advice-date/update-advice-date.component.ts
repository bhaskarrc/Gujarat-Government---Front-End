import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';

@Component({
  selector: 'app-update-advice-date',
  templateUrl: './update-advice-date.component.html',
  styleUrls: ['./update-advice-date.component.css']
})
export class UpdateAdviceDateComponent implements OnInit {
  ELEMENT_DATA = [
    {

      cheque: 'PAOGNR-436832',
      party: 'TEST',
      ammount: '90000.00',
      chequeDate: '18-Feb-2020',
      advice: '200207',
      newAdvice: '',
    }
  ]
  // form group
  updateadvice: FormGroup;
  // form control
  formatCtrl: FormControl = new FormControl();
  // table source
  updateDisplayedColumns: string[] = ['select', 'cheque', 'party', 'ammount', 'chequeDate', 'advice', 'newAdvice', 'action'];
  updateDataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  // Variable
  isShown: boolean = false;
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);
  // Lists
  formatCtrl_list: any[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'CTC2010' },
  ];

  ngOnInit() {
    this.updateadviceData();
  }
  updateadviceData() {
    this.updateadvice = this.fb.group({
      chequenofrom: [''],
      chequenoto: [''],
      tokenno: [''],
      adviceDate: [''],
      formatch: ['']
    });
  }


  search() {
    this.isShown = true;

  }

  // navigate
  gotopage() {
    this.router.navigate(['/treasury-bill/saved-bill/bill-prepration-fom']);
  }
}
