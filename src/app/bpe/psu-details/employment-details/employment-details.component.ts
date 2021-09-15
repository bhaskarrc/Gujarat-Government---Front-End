import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { bpeMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css']
})
export class EmploymentDetailsComponent implements OnInit {

  employmentDetailsForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  psuNameCtrl: FormControl = new FormControl();
  idValue: '1';
  isSelected = false;
  tabDisable: Boolean = true;
  selectedIndex: number;
  errorMessages = bpeMessage;
  isSubmitted = false;
  todayDate = new Date();

  financialYearList: CommonListing[] = [
    { value: '1', viewValue: '2017-18' },
    { value: '2', viewValue: '2018-19' },
    { value: '3', viewValue: '2019-20' },
    { value: '4', viewValue: '2020-21' }
  ];

  psuNameList: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' }
  ];

  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  constructor(private _fb: FormBuilder, private el: ElementRef) { }

  ngOnInit() {

    this.employmentDetailsForm = this._fb.group({
      financialYear: [''],
      psuName: [''],
      id: ['1'],
      executives: [''],
      supervisors: [''],
      workmenOthers: [''],
      total: [''],
      sc: [''],
      st: [''],
      obc: [''],
      remarks: [''],
    });
  }

  calculateTotal() {
    let amount = 0;
    amount = Number(this.employmentDetailsForm.value.executives) + Number(this.employmentDetailsForm.value.supervisors) +
      Number(this.employmentDetailsForm.value.workmenOthers);
    return amount;
  }

  onSelectingPsuName(event) {
    if ((this.employmentDetailsForm.value.financialYear && event.value) !== '') {
      this.isSelected = true;
    }
  }

  // get tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  // go to next
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  onSubmit() {
    if (this.employmentDetailsForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

}
