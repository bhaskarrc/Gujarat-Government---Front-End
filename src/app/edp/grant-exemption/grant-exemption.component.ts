import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  Subject } from 'rxjs';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
    selector: 'app-grant-exemption',
    templateUrl: './grant-exemption.component.html',
    styleUrls: ['./grant-exemption.component.css']
})
export class GrantExemptionComponent implements OnInit {
    grantExemptionForm: FormGroup;
    todayDate = Date.now();
    ddoOfficeName: string;
    isSelected: boolean;

    minDateefd = new Date(2019, 11, 8);
    minDateetd = new Date(2019, 11, 9);

    errorMessages = edpMessage;

    districtNameList: any[] = [
        { value: '1', viewValue: 'Ahmedabad' },
        { value: '2', viewValue: 'Amreli' },
        { value: '3', viewValue: 'Bharuch' },
        { value: '4', viewValue: 'Bhavnagar' },
        { value: '5', viewValue: 'Bhuj' },
        { value: '6', viewValue: 'Dahod' }
    ];

    billTypeList: any[] = [
        { value: '1', viewValue: 'GTR 30 - Pay Bill' },
        { value: '2', viewValue: 'GTR 45 - TA Bill' },
        { value: '3', viewValue: 'GTR 40 - Grant In Bill' },
        { value: '4', viewValue: 'GTR 12 - Advanced Bill' },
        { value: '5', viewValue: 'GTR 13 - Medical Bill' }
    ];


    effectivefromdate = new FormControl();
    effectivetodate = new FormControl();
    districtCtrl = new FormControl();

    _onDestroy = new Subject<void>();

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.grantExemptionData();
        this.effectivefromdate.patchValue(new Date('12/8/2019'));
        this.effectivetodate.patchValue(new Date('12/9/2019'));
    }

    grantExemptionData() {
        this.grantExemptionForm = this.fb.group({
            district: ['', Validators.required],
            ddoNo: ['', Validators.required],
            cardexNo: ['', Validators.required],
            ddoOfficeName: ['', Validators.required],
            selected: [''],
            billType: ['', Validators.required],
        });

    }


    gotoListing() {
        this.router.navigate(['./edp/grant-exemption-list']);
      }
    showOfficeName(value) {
        console.log(value);
    }

    selectBill(bill) {
        if (bill == 'selected') {
            this.isSelected = true;
        } else {
            this.isSelected = false;
        }
    }

    filterObjValue(arrValue, searchValue, filteredValue) {
        if (!arrValue) {
            return;
        }
        // get the search keyword
        let search = searchValue;
        if (!search) {
            filteredValue.next(arrValue.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the values
        filteredValue.next(
            arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
        );
    }

     ddofficenameenter() {
        this.grantExemptionForm.controls.ddoOfficeName.patchValue('District Panchayat Office');
    }

}
