import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { doiMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/doiModel';

@Component({
  selector: 'app-challan-register',
  templateUrl: './challan-register.component.html',
  styleUrls: ['./challan-register.component.css']
})
export class ChallanRegisterComponent implements OnInit {
  // list
  bank_list: ListValue[] = [
    { value: '1', viewValue: 'Bank of Baroda    ' },
    { value: '2', viewValue: 'Bank of India' },
    { value: '3', viewValue: 'Canara Bank' },
    { value: '4', viewValue: ' Central Bank of India' },
    { value: '5', viewValue: 'Indian Bank' },
    { value: '6', viewValue: 'Indian Overseas Bank' },
    { value: '7', viewValue: 'Punjab National Bank' },
    { value: '8', viewValue: ' State Bank of India' },
    { value: '9', viewValue: ' Union Bank of India' },
    { value: '10', viewValue: 'Axis Bank' },
    { value: '11', viewValue: 'HDFC Bank' },
    { value: '12', viewValue: 'ICICI Bank' },
    { value: '13', viewValue: 'IDBI Bank' },
    { value: '14', viewValue: 'IDFC First Bank' },
    { value: '15', viewValue: ' IndusInd Bank' },
    { value: '16', viewValue: 'Jammu & Kashmir Bank ' },
    { value: '17', viewValue: 'Karnataka Bank' },
    { value: '18', viewValue: 'Karur Vysya Bank' },
    { value: '19', viewValue: ' South Indian Bank' },
    { value: '20', viewValue: ' Tamilnad Mercantile Bank' },
    { value: '20', viewValue: 'Axis Bank' },
    { value: '21', viewValue: 'Yes Bank' },
  ];
  todayDate = new Date();
  // Form Group
  challanRegiserForm: FormGroup;
  errorMessage: any;
  bankCtrl: FormControl = new FormControl();
  constructor(private router: Router, private el: ElementRef,
    public dialog: MatDialog, private fb: FormBuilder, private toastr: ToastrService,) { }

  ngOnInit() {
    this.errorMessage = doiMessage;

    this.challanRegiserForm = this.fb.group({
      seriakNo: [''],
      date: [''],
      challanNo: [''],
      chequeDDno: [''],
      dateCheque: [''],
      banName: [''],
      btrDate: [''],
      amount: [''],
    });
  }

}
