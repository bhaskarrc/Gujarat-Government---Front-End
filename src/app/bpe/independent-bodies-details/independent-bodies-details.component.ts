import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { bpeMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-independent-bodies-details',
  templateUrl: './independent-bodies-details.component.html',
  styleUrls: ['./independent-bodies-details.component.css']
})
export class IndependentBodiesDetailsComponent implements OnInit {

  // form group
  annexureOneForm: FormGroup;
  independentBodiesForm: FormGroup;
  annexureTwoForm: FormGroup;
  annexureThreeForm: FormGroup;
  annexureFourForm: FormGroup;
  annexureFiveForm: FormGroup;

  // form control
  nameOfTheCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  bodyNameCtrl: FormControl = new FormControl();
  sec80GRegCtrl: FormControl = new FormControl();
  sec12ARegCtrl: FormControl = new FormControl();
  administrativeDepartmentCtrl: FormControl = new FormControl();
  bodyNameSecondCtrl: FormControl = new FormControl();
  headOfDepartmentCtrl: FormControl = new FormControl();
  nameofBankCtrl: FormControl = new FormControl();
  accountTypeCtrl: FormControl = new FormControl();
  isAccountsAuditedCtrl: FormControl = new FormControl();
  isAccountsPreparedCtrl: FormControl = new FormControl();

  // variables
  isSelectedNameOfThe = false;
  tabDisable: Boolean = true;
  selectedIndex: number;
  fileBrowseIndex: number;
  todayDate = new Date();
  totalAmount: number;
  errorMessages = bpeMessage;

  // lists
  financialYearList: ListValue[] = [
    { value: '1', viewValue: '2017-18' },
    { value: '2', viewValue: '2018-19' },
    { value: '3', viewValue: '2019-20' },
    { value: '4', viewValue: '2020-21' }
  ];

  bodyNameList: ListValue[] = [
    { value: '1', viewValue: 'U.N. Mehta Institute of Cardiology & Research Centre' },
    { value: '2', viewValue: 'XYZ' }
  ];

  nameOfTheList: ListValue[] = [
    { value: '1', viewValue: 'Society' },
    { value: '2', viewValue: 'Trust' },
    { value: '3', viewValue: 'Mission' },
    { value: '4', viewValue: 'Independent Bodies' },
    { value: '5', viewValue: 'Government Authority' }
  ];
  sec80GRegList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  sec12ARegList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  administrativeDepartmentList: ListValue[] = [
    { value: '1', viewValue: 'Additional Director Health, Medical Education & Research Gandhinagar' },
    { value: '2', viewValue: 'Department 1' }
  ];

  headOfDepartmentList: ListValue[] = [
    { value: '1', viewValue: 'Health & Family Welfare Department Government of Gujarat Gandhinagar' },
    { value: '2', viewValue: '2' }
  ];


  nameofBankList: ListValue[] = [
    { value: '1', viewValue: 'Bank of Baroda' },
    { value: '2', viewValue: 'State Bank of India' },
    { value: '3', viewValue: 'IDFC First Bank' }
  ];

  accountTypeList: ListValue[] = [
    { value: '1', viewValue: 'Saving Account' },
    { value: '2', viewValue: 'Current Account' }
  ];


  yesNoList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // independent bodies form
    this.independentBodiesForm = this.fb.group({
      financialYear: [''],
      nameOfThe: [''],
    });

    // annexure 1 form
    this.annexureOneForm = this.fb.group({
      bodyName: [{ value: '', disabled: false }],
      abbrName: [{ value: '', disabled: false }],
      regNo: [{ value: '', disabled: false }],
      regYear: [{ value: '', disabled: false }],
      regAct: [{ value: '', disabled: false }],
      sec12AReg: [''],
      sec80GReg: [''],
      panNo: [''],
      place: [{ value: '', disabled: false }],
      controllingAdmindept: [{ value: '', disabled: false }],
      controllingBranch: [''],
      deputySecName: [''],
      noOfOffices: [''],
      address: [{ value: '', disabled: false }],
      telNo: [''],
      isAccountsPrepared: [''],
      isAccountsAudited: [''],
      remarks: ['']
    });

    // annexure 2 form
    this.annexureTwoForm = this.fb.group({
      bodyName: [''],
      administrativeDepartment: [''],
      headOfDepartment: [''],
      establishmentObject: [''],
      remarks: ['']
    });

    // annexure 3 form
    this.annexureThreeForm = this.fb.group({
      nameOfOfficer: [''],
      tenure: [''],
      contactNo: [''],
      nameChief: [''],
      tenureChief: [''],
      contactNoChief: [''],
      nameInternal: [''],
      tenureInternal: [''],
      contactNoInternal: [''],
      nameStatutory: [''],
      tenureStatuory: [''],
      contactNoStatuory: [''],
      remarks: [''],
    });

    // annexure 4 form
    this.annexureFourForm = this.fb.group({
      nameOfBank: [''],
      srNo: [{ value: '1', disabled: true }],
      accountNo: [''],
      closingBalance: [''],
      tenure: [''],
      rateOfInterest: [''],
      interestInLakh: [''],
      remarks: [''],
      accountType: ['']
    });

    // annexure 5 form
    this.annexureFiveForm = this.fb.group({
      unspentBalance: [''],
      srNo: [{ value: '1', disabled: true }],
      grantReceived: [''],
      grantReceivedCentral: [''],
      grantReceivedState: [''],
      grantTotal: [''],
      miscellaneous: [''],
      assistance: [''],
      interestReceived: [''],
      loansDeposits: [''],
      grantReceivedSociety: [''],
      totalFundAvailable: [''],
      schemeExpenditure: [''],
      closingBalance: [''],
      components: [''],
      targets: [''],
      achieved: [''],
      variants: [''],
      remarks: [''],
      certificate: [''],
      checksExcercised: [''],
      grantReceivedDate: ['']
    });
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

  // on selecting value in name of the display annexures
  onSelectingNameOfThe(event) {
    this.isSelectedNameOfThe = true;
  }

  // on selecting name patch values
  onSelectingName(event) {
    this.annexureOneForm.patchValue({
      abbrName: 'UNMICRC',
      regNo: 'Trust Reg. No. F/2878/Ahmedabad',
      regYear: '1992',
      regAct: 'Under Bombay Public Trust Act, 1950 Under Society Registration Act, 1860',
      place: 'Civil Hospital Campus, Asarwa, Ahmedabad – 380016',
      controllingAdmindept: 'Additional Director',
      address: 'Civil Hospital Campus, Asarwa, Ahmedabad – 380016',
      panNo: 'AAATU0329E'
    });
  }

  // on selecting name in annexure 2 form
  onSelectingNameSecond(event) {
    this.annexureTwoForm.patchValue({
      administrativeDepartment: '1'
    });
  }

  // calucate total
  calculateTotal() {
    let amount = 0;
    amount = (
      Number(this.annexureFiveForm.value.grantReceived) + Number(this.annexureFiveForm.value.grantReceivedDate) +
      Number(this.annexureFiveForm.value.grantReceivedCentral) + Number(this.annexureFiveForm.value.grantReceivedState)
    );
    this.totalAmount = amount;
    return amount;
  }

  // calculate total fund amount
  calculateTotalFundAvailable() {
    let amount = 0;
    amount = (Number(this.annexureFiveForm.value.unspentBalance) + Number(this.annexureFiveForm.value.miscellaneous) +
      Number(this.annexureFiveForm.value.assistance) + Number(this.annexureFiveForm.value.interestReceived) + this.totalAmount
      + Number(this.annexureFiveForm.value.loansDeposits) + Number(this.annexureFiveForm.value.grantReceivedSociety));

    return amount;
  }
}
