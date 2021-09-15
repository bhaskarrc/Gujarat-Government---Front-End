import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/pdpla';

@Component({
  selector: 'app-reconciliation-modified',
  templateUrl: './reconciliation-modified.component.html',
  styleUrls: ['./reconciliation-modified.component.css']
})
export class ReconciliationModifiedComponent implements OnInit {

  // Form Group
  reconciliationForm: FormGroup;
  // Date
  date = Date.now();
  // variable
  isSelectedDdo = false;
  isSelectedST = false;
  // form control
  reconcileCtrl: FormControl = new FormControl();
  // list
  reconcile_list: ListValue[] = [
    { value: '1', viewValue: 'All' },
    { value: '2', viewValue: 'AG' },
    { value: '3', viewValue: 'Bank' },
    { value: '4', viewValue: 'DDO' },
    { value: '5', viewValue: 'Sub Treasury' }
  ];
  subTreasuryList: ListValue[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Kalol' },
    { value: '2', viewValue: 'Sub Treasury Office, Dahegam' },
    { value: '3', viewValue: 'Sub Treasury Office, Gandhinagar' }
  ];
  subTreasuryCtrl: FormControl = new FormControl();
  reconciliation = 'All';
  constructor(private fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.reconciliationForm = this.fb.group({
      // Formfields
      fromDate: [''],
      toDate: [''],
      reconcileWith: [''],
      pdplaAccNo: [''],
      subTreasury: ['']
    });
  }

  // sets value on selection of reconciliation
  selectReconciliation(data) {
    switch (data.value) {
      case '1':
        this.reconciliation = 'All'; this.isSelectedDdo = false; this.isSelectedST = false;
        break;
      case '2':
        this.reconciliation = 'AG'; this.isSelectedDdo = false; this.isSelectedST = false;
        break;
      case '3':
        this.reconciliation = 'Bank'; this.isSelectedDdo = false; this.isSelectedST = false;
        break;
      case '4':
        this.reconciliation = 'DDO'; this.isSelectedDdo = true; this.isSelectedST = false;
        break;
      case '5':
        this.reconciliation = 'SubTreasury'; this.isSelectedDdo = false; this.isSelectedST = true;
    }
  }


  // routing
  generateReport() {
    this.router.navigate(['./pdpla/reconciliation-proper', this.reconciliation]);
  }
}
