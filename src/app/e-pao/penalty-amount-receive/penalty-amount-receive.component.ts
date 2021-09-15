
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EPOAMessage } from 'src/app/common/error-message/common-message.constants';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ListValue, PanaltyAmountReceive } from 'src/app/model/epaoModel';
import { EPaoDirectives } from 'src/app/common/directive/epao';
import { Router } from '@angular/router';


@Component({
  selector: 'app-penalty-amount-receive',
  templateUrl: './penalty-amount-receive.component.html',
  styleUrls: ['./penalty-amount-receive.component.css']
})
export class PenaltyAmountReceiveComponent implements OnInit {
  // date
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();
  // Error messgae
  errorMessages = EPOAMessage;
  // variable
  isSubmitted = false;
  // FormGroup
  penaltyAmountForm: FormGroup;

  // FormControl
  bankTypeCtrl: FormControl = new FormControl();
  morCtrl: FormControl = new FormControl();

  // List
  bankType_list: ListValue[] = [
    { value: '1', viewValue: 'Bank Of Baroda, Baroda' },
    { value: '2', viewValue: 'State bank of India' },

  ];
  rMonth_list: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'March' },
    { value: '3', viewValue: 'April' },
  ];

  mor_list: ListValue[] = [
    { value: '1', viewValue: 'Cheque' },
    { value: '2', viewValue: 'NEFT/RTGS' },
    { value: '3', viewValue: 'RBI' },
    { value: '4', viewValue: 'Draft' },
    { value: '5', viewValue: 'Challan/Cash' }
  ];
  year_list: ListValue[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];
  month_list: ListValue[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },

  ];
  Element_Data: PanaltyAmountReceive[] = [
    { year: '', month: '', claimAmt: '', oldAmt: '', remainingAmt: '', currentAmt: '' }
  ];
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  columns: string[] = ['position', 'year', 'month', 'claimAmt', 'oldAmt', 'remainingAmt', 'currentAmt', 'action'];
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);

  ngOnInit() {

    this.penaltyAmountForm = this.fb.group({
      date: [''],
      creditDate: [''],
      bankType: [''],
      bank: ['Bank Of Baroda, Baroda'],
      penaltyAmount: ['200.00'],
      recoveredAmount: ['0.00'],
      rMonth: [''],
      rYear: [''],
      amt: [''],
      refNo: [''],
      mor: ['']
    });
  }

  addRow() {
    if (this.dataSource) {
      this.dataSource = new MatTableDataSource(this.Element_Data);
      const p_data = this.dataSource.data;
      p_data.push({ year: '', month: '', claimAmt: '', oldAmt: '', remainingAmt: '', currentAmt: '' });
      this.dataSource.data = p_data;
    }
  }

  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  onSave() {
    if (this.penaltyAmountForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }

  clearForm() {
    this.penaltyAmountForm.reset();
  }

}


