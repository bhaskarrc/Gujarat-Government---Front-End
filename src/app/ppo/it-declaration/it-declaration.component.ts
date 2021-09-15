import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { Observable } from 'rxjs';
import { PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { startWith, map } from 'rxjs/operators';
import { Element_DataInDailog, PpoDialogBoxComponent } from '../ppo-dialog-box/ppo-dialog-box.component';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
  selector: 'app-it-declaration',
  templateUrl: './it-declaration.component.html',
  styleUrls: ['./it-declaration.component.css']
})

export class ItDeclarationComponent implements OnInit {
  todayDate = Date.now();
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  pensionerDetails: FormGroup;
  eightyCForm: FormGroup;
  eightyDForm: FormGroup;
  eightyGForm: FormGroup;
  eightyEForm: FormGroup;
  eightyUForm: FormGroup;
  eightyTTForm: FormGroup;
  showAction: Boolean = true;
  show = false;
  subtotalU = 0;
  subtotalC = 0;
  subtotalD = 0;
  subtotalG = 0;
  subtotalE = 0;
  subtotalT = 0;
  fileBrowseIndex: number;
  isdropdown;
  isamount;
  eightyTTdata = [];
  eightyUData = [];
  eightyGdata = [];
  eightyEdata = [];
  eightyDdata = [];
  eightyCdata = [];
  isAdd = false;
  dropdownU: string;
  dropdownG: string;
  dropdownC: string;
  dropdownD: string;
  dropdownT: string;
  dropdownE: string;
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  attachment = [
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
  ];
  itDeclarationTypeCtrl: FormControl = new FormControl;
  eightyDTypeCtrl: FormControl = new FormControl;
  eightyCCtrl: FormControl = new FormControl;
  eightyDCtrl: FormControl = new FormControl;
  eightyECtrl: FormControl = new FormControl;
  eightyGCtrl: FormControl = new FormControl;
  eightyTCtrl: FormControl = new FormControl;
  eightyUCtrl: FormControl = new FormControl;
  subtotalDeductionTT: FormControl = new FormControl;
  subtotalDeductionU: FormControl = new FormControl;
  subtotalDeductionG: FormControl = new FormControl;
  subtotalDeductionE: FormControl = new FormControl;
  subtotalDeductionD: FormControl = new FormControl;
  subtotalDeductionC: FormControl = new FormControl;
  totalDeduction: FormControl = new FormControl;
  yearCtrl: FormControl = new FormControl();

  amount_eightyC;
  amount_eightyD;
  amount_eightyE;
  amount_eightyTT;
  amount_eightyG;
  amount_eightyU;
  // lists
  year_list: CommonListing[] = [
    { value: '1', viewValue: '2012' },
    { value: '2', viewValue: '2013' },
    { value: '3', viewValue: '2014' },
    { value: '4', viewValue: '2015' },
    { value: '5', viewValue: '2016' },
    { value: '6', viewValue: '2017' },
    { value: '7', viewValue: '2018' },
    { value: '8', viewValue: '2019' },
    { value: '9', viewValue: '2020' },
    { value: '10', viewValue: '2021' },
    { value: '11', viewValue: '2022' },
  ];
  eightyC_list: ListValue[] = [
    {
      value: '80C',
      viewValue:
        // tslint:disable-next-line: max-line-length
        '80C - Life insurance premium, deferred annuity, contributions to provident fund, subscription to certain equity shares or debentures, etc.'
    },
    {
      value: '80CCC',
      viewValue:
        '80CCC- Payment in respect Pension Fund'
    },
    {
      value: '80CCD(1)',
      viewValue:
        '80CCD(1) - Contribution to pension scheme of Central Government'
    },
    {
      value: '80CCD(1B)',
      viewValue:
        '80CCD(1B) - Contribution to pension scheme of Central Government'
    },
    {
      value: '80CCD(2)',
      viewValue:
        '80CCD(2) - Contribution to pension scheme of Central Government by employer'
    },
    {
      value: '80CCG',
      viewValue:
        '80CCG - Investment made under an equity savings scheme'
    },
  ];

  eightyD_list: ListValue[] = [
    {
      value: '80D(A)',
      viewValue:
        '80D(A)-Health insurance premium'
    },
    {
      value: '80D(B)',
      viewValue:
        '80D(B)-Medical expenditure'
    },
    {
      value: '80D(C)',
      viewValue:
        '80D(C)-Preventive health check-up'
    },
    {
      value: '80DD',
      viewValue:
        '80DD - Maintenance including medical treatment of a dependent who is a person with disability'
    },
    {
      value: '80DDB',
      viewValue:
        '80DDB - Medical treatment of specified diseases'
    },
  ];

  eightyE_list: ListValue[] = [
    {
      value: '80E',
      viewValue:
        '80E-Interest on loan taken for higher education'
    },
    {
      value: '80EE',
      viewValue:
        '80EE-Interest on loan taken for residential house property'
    },
  ];

  eightyG_list: ListValue[] = [
    {
      value: '80G',
      viewValue:
        // tslint:disable-next-line: max-line-length
        '80G - Donations to certain funds, charitable institutions, etc. (Please fill 80G Schedule. This field is auto-populated from schedule.)'
    },
    {
      value: '80GG',
      viewValue:
        '80GG - Rent paid'
    },
    {
      value: '80GGA',
      viewValue:
        // tslint:disable-next-line: max-line-length
        '80GGA - Certain donations for scientific research or rural development (Please fill 80GGA Schedule. This field is auto-populated from schedule.)'
    },
    {
      value: '80GGC',
      viewValue:
        '80GGC - Donation to Political party'
    },
  ];

  eightyT_list: ListValue[] = [
    {
      value: '80TTA',
      viewValue:
        '80TTA - Interest on saving bank Accounts in case of other than Resident senior citizens'
    },
    {
      value: '80TTB',
      viewValue:
        '80TTB- Interest on deposits in case of Resident senior citizens'
    },
  ];
  eightyU_list: ListValue[] = [
    {
      value: '80U',
      viewValue:
        '80U - In case of a person with disability'
    }
  ];

  // ppo no related variables
  ppoNoCtrl: FormControl = new FormControl();
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];

  ngOnInit() {
    this.pensionerDetails = this.fb.group({
      ppoNo: [''],
      year: ['5'],
      name: ['S R Mishra'],
      commDate: new Date('2/2/2020'),
      retirementDate: new Date('2/2/2055'),
      accNo: ['1324214324'],
      pensionToBePaid: ['10000.00'],
      pensionPaid: ['5000.00']
    });
    this.eightyCForm = this.fb.group({
      eightyCDropDown: [''],
      amountEightyC: ['']
    });

    this.eightyDForm = this.fb.group({
      eightyDDropDown: [''],
      amountEightyD: ['']
    });

    this.eightyEForm = this.fb.group({
      eightyEDropDown: [''],
      amountEightyE: ['']
    });

    this.eightyGForm = this.fb.group({
      eightyGDropdown: [''],
      amountEightyG: ['']
    });

    this.eightyUForm = this.fb.group({
      eightyUDropdown: [''],
      amountEightyU: ['']
    });

    this.eightyTTForm = this.fb.group({
      eightyTTDropDown: [''],
      amountEightyTT: ['']
    });
    this.optionCtrl = true;
    this.ppoNoVal = 'PPO No.';
    this.dataFromDailogComponent = Element_DataInDailog;
    for (let i = 0; i < this.dataFromDailogComponent.length; i++) {
      this.ppoNo_list.push({ ppoNo: this.dataFromDailogComponent[i].ppoNo });
    }

    this.filteredppoNo = this.ppoNoCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value),
        map(ppoNo => ppoNo ? this._filter(ppoNo) : this.ppoNo_list.slice())
      );
  }

  // ppo no related methods
  private _filter(ppoNo: string): PpnoListInterface[] {
    const filterValue = ppoNo;
    return this.ppoNo_list.filter(option => option.ppoNo.includes(filterValue));
  }
  displayFn(ppoNo_list: PpnoListInterface): string {
    return ppoNo_list && ppoNo_list.ppoNo ? ppoNo_list.ppoNo : '';
  }
  sendPPOData(data) {
    this.ppoData = data;
  }
  // function for 80TT start
  addRowTT() {
    this.isdropdown = this.eightyTTForm.value.eightyTTDropDown;
    this.isamount = this.eightyTTForm.value.amountEightyTT;
    if (this.isdropdown !== '' && this.isamount !== undefined) {
      if (this.isdropdown === '80TTB') {
        this.dropdownT = '80TTB- Interest on deposits in case of Resident senior citizens';
      }
      if (this.isdropdown === '80TTA') {
        this.dropdownT = '80TTA - Interest on saving bank Accounts in case of other than Resident senior citizens';
      }
      const Data = {
        dropDown: this.dropdownT,
        amount: this.eightyTTForm.value.amountEightyTT
      };
      this.eightyTTdata.push(Data);
      this.isAdd = true;
      this.eightyTTForm.reset();
    }

  }

  // deletes it row
  deleteRowTT(index) {
    this.eightyTTdata.splice(index, 1);
  }

  // changes AmountT
  changeAmountT(element, index) {
    this.eightyTTdata[index].amount = element.target.value;
  }

  // calculates subdeductionTT
  subdeductionTT() {
    let amount = 0;
    for (let i = 0; i < this.eightyTTdata.length; i++) {
      const sectionAmount = Number(this.eightyTTdata[i].amount);
      amount = amount + sectionAmount;
    }
    this.subtotalT = amount;
    return amount;
  }

  // function for 80C start
  addRowC() {
    this.isdropdown = this.eightyCForm.value.eightyCDropDown;
    if (this.isdropdown !== '' && this.isamount !== undefined) {
      if (this.isdropdown === '80C') {
        // tslint:disable-next-line: max-line-length
        this.dropdownT = '80C - Life insurance premium, deferred annuity, contributions to provident fund, subscription to certain equity shares or debentures, etc.';
      }
      if (this.isdropdown === '80CCC') {
        this.dropdownT = '80CCC- Payment in respect Pension Fund';
      }
      if (this.isdropdown === '80CCD(1)') {
        this.dropdownT = '80CCD(1) - Contribution to pension scheme of Central Government';
      }
      if (this.isdropdown === '80CCD(1B)') {
        this.dropdownT = '80CCD(1B) - Contribution to pension scheme of Central Government';
      }
      if (this.isdropdown === '80CCD(2)') {
        this.dropdownT = '80CCD(2) - Contribution to pension scheme of Central Government by employer';
      }
      if (this.isdropdown === '80CCG') {
        this.dropdownT = '80CCG - Investment made under an equity savings scheme';
      }
      const Data = {
        dropDown: this.dropdownT,
        amount: this.eightyCForm.value.amountEightyC
      };
      this.eightyCdata.push(Data);
      this.isAdd = true;
      this.eightyCForm.reset();
    }

  }

  // deletes row c
  deleteRowC(index) {
    this.eightyCdata.splice(index, 1);
  }

  // chanes amount c
  changeAmountC(element, index) {
    this.eightyCdata[index].amount = element.target.value;
  }

  // calculates subdeduction c
  subdeductionC() {
    let amount = 0;
    for (let i = 0; i < this.eightyCdata.length; i++) {
      const sectionAmount = Number(this.eightyCdata[i].amount);
      amount = amount + sectionAmount;
    }
    this.subtotalC = amount;
    return amount;
  }

  // function for 80D start
  addRowD() {
    this.isdropdown = this.eightyDForm.value.eightyDDropDown;
    this.isamount = this.eightyDForm.value.amountEightyD;
    if (this.isdropdown !== '' && this.isamount !== undefined) {
      if (this.isdropdown === '80D(A)') {
        this.dropdownD = '80D(A)-Health insurance premium';
      }
      if (this.isdropdown === '80D(B)') {
        this.dropdownD = '80D(B)-Medical expenditure';
      }
      if (this.isdropdown === '80D(C)') {
        this.dropdownD = '80D(C)-Preventive health check-up';
      }
      if (this.isdropdown === '80DD') {
        this.dropdownD = '80DD - Maintenance including medical treatment of a dependent who is a person with disability';
      }
      if (this.isdropdown === '80DDB') {
        this.dropdownD = '80DDB - Medical treatment of specified diseases';
      }
      const Data = {
        dropDown: this.dropdownD,
        amount: this.eightyDForm.value.amountEightyD
      };
      this.eightyDdata.push(Data);
      this.isAdd = true;
      this.eightyDForm.reset();
    }

  }
  // deletes row d
  deleteRowD(index) {
    this.eightyDdata.splice(index, 1);
  }

  // changes amount d
  changeAmountD(element, index) {
    this.eightyDdata[index].amount = element.target.value;
  }
  // calculates subdeductionD
  subdeductionD() {
    let amount = 0;
    for (let i = 0; i < this.eightyDdata.length; i++) {
      const sectionAmount = Number(this.eightyDdata[i].amount);
      amount = amount + sectionAmount;
    }
    this.subtotalD = amount;

    return amount;
  }

  // function for 80E start
  addRowE() {
    this.isdropdown = this.eightyEForm.value.eightyEDropDown;
    this.isamount = this.eightyEForm.value.amountEightyE;
    if (this.isdropdown !== '' && this.isamount !== undefined) {
      if (this.isdropdown === '80E') {
        this.dropdownE = '80E-Interest on loan taken for higher education';
      }
      if (this.isdropdown === '80EE') {
        this.dropdownE = '80EE-Interest on loan taken for residential house property';
      }
      const Data = {
        dropDown: this.dropdownE,
        amount: this.eightyEForm.value.amountEightyE
      };
      this.eightyEdata.push(Data);
      this.isAdd = true;
      this.eightyEForm.reset();
    }
  }

  deleteRowE(index) {
    this.eightyEdata.splice(index, 1);
  }

  changeAmountE(element, index) {
    this.eightyEdata[index].amount = element.target.value;
  }

  subdeductionE() {
    let amount = 0;
    for (let i = 0; i < this.eightyEdata.length; i++) {
      const sectionAmount = Number(this.eightyEdata[i].amount);
      amount = amount + sectionAmount;
    }
    this.subtotalE = amount;

    return amount;
  }
  // end

  // function for 80G start
  addRowG() {
    this.isdropdown = this.eightyGForm.value.eightyGDropdown;
    this.isamount = this.eightyGForm.value.amountEightyG;
    if (this.isdropdown !== '' && this.isamount !== undefined) {
      if (this.isdropdown === '80G') {
        // tslint:disable-next-line: max-line-length
        this.dropdownG = '80G - Donations to certain funds, charitable institutions, etc. (Please fill 80G Schedule. This field is auto-populated from schedule.)';
      }
      if (this.isdropdown === '80GG') {
        this.dropdownG = '80GG - Rent paid';
      }
      if (this.isdropdown === '80GGA') {
        // tslint:disable-next-line: max-line-length
        this.dropdownG = '80GGA - Certain donations for scientific research or rural development (Please fill 80GGA Schedule. This field is auto-populated from schedule.)';
      }
      if (this.isdropdown === '80GGC') {
        this.dropdownG = '80GGC - Donation to Political party';
      }
      const Data = {
        dropDown: this.dropdownG,
        amount: this.eightyGForm.value.amountEightyG
      };
      this.eightyGdata.push(Data);
      this.isAdd = true;
      this.eightyGForm.reset();
    }

  }

  deleteRowG(index) {
    this.eightyGdata.splice(index, 1);
  }

  changeAmountG(element, index) {
    this.eightyGdata[index].amount = element.target.value;
  }

  subdeductionG() {
    let amount = 0;
    for (let i = 0; i < this.eightyGdata.length; i++) {
      const sectionAmount = Number(this.eightyGdata[i].amount);
      amount = amount + sectionAmount;
    }
    this.subtotalG = amount;
    return amount;
  }
  // end

  // function for 80U start
  addRowU() {
    this.isdropdown = this.eightyUForm.value.eightyUDropdown;
    this.isamount = this.eightyUForm.value.amountEightyU;
    if (this.isdropdown !== '' && this.isamount !== undefined) {
      if (this.isdropdown === '80U') {
        this.dropdownU = '80U - In case of a person with disability';
      }
      const Data = {
        dropDown: this.dropdownU,
        amount: this.eightyUForm.value.amountEightyU
      };
      this.eightyUData.push(Data);
      this.isAdd = true;
      this.eightyUForm.reset();
    }

  }

  deleteRowU(index) {
    this.eightyUData.splice(index, 1);
  }

  changeAmountU(element, index) {
    this.eightyUData[index].amount = element.target.value;
  }
  subdeductionU() {
    let amount = 0;
    for (let i = 0; i < this.eightyUData.length; i++) {
      const sectionAmount = Number(this.eightyUData[i].amount);
      amount = amount + sectionAmount;
    }
    this.subtotalU = amount;
    return amount;
  }
  // end

  // calculates deduction amount
  deduction() {
    let amount = 0;
    if (this.subtotalU > 0) {
      amount = amount + Number(this.subtotalU);
    }
    if (this.subtotalC > 0) {
      amount = amount + Number(this.subtotalC);
    }
    if (this.subtotalD > 0) {
      amount = amount + Number(this.subtotalD);
    }
    if (this.subtotalG > 0) {
      amount = amount + Number(this.subtotalG);
    }
    if (this.subtotalE > 0) {
      amount = amount + Number(this.subtotalE);
    }
    if (this.subtotalT > 0) {
      amount = amount + Number(this.subtotalT);
    }

    return amount;
  }

  // checks file
  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
        }
      } else if (data.fileType === 'pdf') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
      }
      if (this.show === false) {
        this.showAction = true;
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
  }

  workflowDetails() { }
  resetForm() { }

  // opens dialog and selects ppo no
  openPPODialog() {
    this.optionCtrl = false;
    if (this.ppoData == null || this.ppoData === undefined || this.ppoData === '') {
      this.ppoData = 'Please Provide PPO No.';
    }
    const dailogRef = this.dialog.open(PpoDialogBoxComponent,
      {
        width: '1000px',
        height: '500px',
        data: this.ppoData
      });

    dailogRef.afterClosed().subscribe(result => {
      const dataArray = result;
      this.optionCtrl = true;
      if (dataArray !== '' && dataArray != null) {
        this.ppoNoCtrl.patchValue(dataArray[0].ppoNo);
        this.ppoNoVal = this.ppoNoCtrl.value;
        this.pensionerDetails.patchValue({
          accNo: dataArray[0].accountNo,
          name: dataArray[0].fName + ' ' + dataArray[0].mName + ' ' + dataArray[0].lName
        });
      }
    });
  }
}
