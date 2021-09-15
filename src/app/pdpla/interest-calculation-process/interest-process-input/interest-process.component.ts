import { Component, OnInit } from '@angular/core';
import { pdplaMessage } from 'src/app/common/error-message/common-message.constants';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/pdpla';

@Component({
  selector: 'app-interest-process',
  templateUrl: './interest-process.component.html',
  styleUrls: ['./interest-process.component.css'],
})
export class InterestProcessComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date(new Date());
  // Variable
  selectedIndex: number;
  errorMessages = pdplaMessage;
  // Form Group
  pdplaform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '8448:Civil Deposits' },

  ];
  // Form Control
  majorCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.pdplaform = this.fb.group({
      // formfields
      fromDate: [''],
      todat: [''],
      majorHead: ['1'],
      pdplaNo: [''],
    });
  }

  // routing
  gotooutput() {
    this.router.navigate(['./pdpla/interest-calculation-output']);
  }
}
