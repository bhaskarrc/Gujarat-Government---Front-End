import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { bpeMessage } from 'src/app/common/error-message/common-message.constants';
@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.css']
})
export class InvestmentDetailsComponent implements OnInit {

  isSelected = false;
  tabDisable: Boolean = true;
  selectedIndex: number;
  errorMessages = bpeMessage;
  isSubmitted = false;
  investmentDetailsForm: FormGroup;
  financialYearCtrl: FormControl = new FormControl();
  nameOfCorporationCtrl: FormControl = new FormControl();
  typeOfCorporationCtrl: FormControl = new FormControl();
  yearsOfInvestmentCtrl: FormControl = new FormControl();
  typeOfInvestmentCtrl: FormControl = new FormControl();
  todayDate = new Date();
  isRemarksRequired = false;

  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];

  financialYearList: CommonListing[] = [
    { value: '1', viewValue: '2017-18' },
    { value: '2', viewValue: '2018-19' },
    { value: '3', viewValue: '2019-20' },
    { value: '4', viewValue: '2020-21' }
  ];
  nameOfCorporationList: CommonListing[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' }
  ];
  typeOfCorporationList: CommonListing[] = [
    { value: '1', viewValue: 'Statutory Corporation' },
    { value: '2', viewValue: 'Working Corporation' },
    { value: '3', viewValue: 'Non Working Corporation' },
    { value: '4', viewValue: 'Govt. Companies' },
    { value: '5', viewValue: 'Working Companies' },
    { value: '6', viewValue: 'Non Working Companies' },
    { value: '7', viewValue: 'Joint Stock Companies' },
    { value: '8', viewValue: 'Partnership Concerns' },
    { value: '9', viewValue: 'Credit co-operative societies/banks' }
  ];
  yearsOfInvestmentList: CommonListing[] = [
    { value: '1', viewValue: '2010-11' },
    { value: '2', viewValue: '2011-12' },
    { value: '3', viewValue: '2012-13' },
    { value: '1', viewValue: '2013-14' },
    { value: '2', viewValue: '2014-15' },
    { value: '3', viewValue: '2015-16' },
    { value: '4', viewValue: '2016-17' },
    { value: '1', viewValue: '2017-18' },
    { value: '2', viewValue: '2018-19' },
    { value: '3', viewValue: '2019-20' },
    { value: '4', viewValue: '2020-21' }
  ];
  typeOfInvestmentList: CommonListing[] = [
    { value: '1', viewValue: 'Contribution' },
    { value: '2', viewValue: 'Equity' },
    { value: '3', viewValue: 'Debenture' },
    { value: '4', viewValue: 'Preference' },
    { value: '5', viewValue: 'Others' }
  ];

  constructor(private _fb: FormBuilder, private el: ElementRef) { }
  ngOnInit() {
    this.investmentDetailsForm = this._fb.group({
      financialYear: [''],
      id: ['1'],
      nameOfCorporation: [''],
      typeOfCorporation: [''],
      yearsOfInvestment: [''],
      typeOfInvestment: [''],
      noOfShares: [''],
      faceValue: [''],
      amount: [''],
      amountInvestment: [''],
      govtInvestment: [''],
      interestReceived: [''],
      interestNotCredited: [''],
      remarks: [''],
      remarksRequired: [''],
      total: [''],
    });
  }

  // on selecting financial yaer
  selectFinancialYear(event) {
    if (event) {
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

  // on Submit
  onSubmit() {
    if (this.investmentDetailsForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

  // calculate total
  calculateTotal() {
    let amount = 0;
    amount = Number(this.investmentDetailsForm.value.amount) + Number(this.investmentDetailsForm.value.amountInvestment) +
      Number(this.investmentDetailsForm.value.interestReceived) + Number(this.investmentDetailsForm.value.interestNotCredited);

    return amount;
  }

  // on selecting type of payment select remark is mandatory or not
  onSelectingTypeOfInvestment(event) {
    console.log(event.value);
    if (event.value === '5') {
      this.isRemarksRequired = true;
    } else {
      this.isRemarksRequired = false;
    }
  }
}
