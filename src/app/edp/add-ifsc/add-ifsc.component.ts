import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { MatPaginator, MatSort } from '@angular/material';

export interface PeriodicElement {
    bankname: string;
    position: number;
    ifscCode: number;
    bankadd: string;
  }

  const ELEMENT_DATA: PeriodicElement[] = [
    // tslint:disable-next-line: max-line-length
    {position: 1, bankname: 'Bank of Baroda', ifscCode: 1.0079, bankadd: 'Near Udhyog Bhavan, G Rd, Sector 11, Gandhinagar, Gujarat 382011'},
  ];

@Component({
    selector: 'app-add-ifsc',
    templateUrl: './add-ifsc.component.html',
    styleUrls: ['./add-ifsc.component.css']
})
export class AddIfscComponent implements OnInit {
    displayedColumns: string[] = ['position', 'bankname', 'ifscCode', 'bankadd', 'action'];
    addIfsc = ELEMENT_DATA;

  isSearch = true;
    ifscForm: FormGroup;
    todayDate = Date.now();
    dataSourcePayHead: any;
    filterObjValue: any;
    _onDestroy: Observable<any>;
    router: any;
    constructor(
        private fb: FormBuilder,
    ) { }

    bankNameList: any[] = [
        { value: '1', viewValue: 'Bank of Baroda' },
        { value: '2', viewValue: 'State Bank of India' },
    ];


    bankctr: FormControl = new FormControl();


    ngOnInit() {
        this.ifscFormData();
    }



    ifscFormData() {
        this.ifscForm = this.fb.group({
            ifscCode: [''],
            bankName: [''],
            bankAddress: ['']
        });
    }

    search() {
        this.isSearch = false;
   }


}
