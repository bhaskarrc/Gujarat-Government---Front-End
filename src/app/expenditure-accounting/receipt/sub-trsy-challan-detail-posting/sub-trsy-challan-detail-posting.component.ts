import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { SaveDialogBoxComponent } from '../../save-dialog-box/save-dialog-box.component';
import { CloseDialogBoxComponent } from '../../close-dialog-box/close-dialog-box.component';
import { DeleteDialogBoxComponent } from '../../delete-dialog-box/delete-dialog-box.component';

const ELEMENT_DATA = [{}];

@Component({
  selector: 'app-sub-trsy-challan-detail-posting',
  templateUrl: './sub-trsy-challan-detail-posting.component.html',
  styleUrls: ['./sub-trsy-challan-detail-posting.component.css']
})
export class SubTrsyChallanDetailPostingComponent implements OnInit {
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  isSubmitted = false;
  isDelete = false;
  errorMessages = eaMessage;
  maxDate = new Date();
  isSelectedLc = false;
  isSelectedMajorHead = false;
  isSelectedNps = false;
  isSelectedSalesTax = false;
  isSelectedStamp = false;
  isSelectedVat = false;
  isSeletedOther = false;
  isSelectedProfessional = false;
  isSelectedRto = false;

  // FormGroup
  challanDetailPostingForm: FormGroup;

  // FormControl
  challanTypeCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  insertMinorheadCtrl: FormControl = new FormControl();
  budgetCtrl: FormControl = new FormControl();
  insertSubMajorheadCtrl: FormControl = new FormControl();
  insertSubHeadCtrl: FormControl = new FormControl();
  fundCtrl: FormControl = new FormControl();
  tcCtrl: FormControl = new FormControl();
  submajorHeadCtrl: FormControl = new FormControl();
  expClassCtrl: FormControl = new FormControl();
  bankCtrl: FormControl = new FormControl();
  vendorCtrl: FormControl = new FormControl();
  // List values
  challanType_list: any[] = [
    { value: '1', viewValue: 'LC' },
    { value: '2', viewValue: 'MajorHead 8009 / 8011 / 8658 / 7610' },
    { value: '3', viewValue: 'NPS' },
    { value: '4', viewValue: 'Others' },
    { value: '5', viewValue: 'Professional Tax' },
    { value: '6', viewValue: 'RTO Tax' },
    { value: '7', viewValue: 'SalesTax' },
    { value: '8', viewValue: 'Stamp' },
    { value: '9', viewValue: 'Vat Tax' },
  ];
  subMajorHead_list: any[] = [
    { value: '1', viewValue: '00' }
  ];
  expClass_list: any[] = [
    { value: '1', viewValue: '1 - Voted' },
    { value: '2', viewValue: '2 - Charged' },
  ];
  demand_list: any[] = [
    { value: '1', viewValue: '999' }
  ];
  majorHead_list: any[] = [
    { value: '1', viewValue: '2054 : Treasury and Accounts Administration' }
  ];
  vendor_list: any[] = [
    { value: '1', viewValue: 'No' },
    { value: '2', viewValue: 'Yes' }
  ];

  minorHead_list: any[] = [
    { value: '1', viewValue: '097 : Pay and Accounts Offices' },
  ];

  budget_list: any[] = [
    { value: '1', viewValue: 'Plan Budget 15 %' },
    { value: '2', viewValue: 'Plan Budget 80 %' },
    { value: '3', viewValue: 'State Plan' },
  ];

  subHead_list: any[] = [
    { value: '1', viewValue: '01 : Pay and Accounts offices' }
  ];

  fund_list: any[] = [
    { value: '1', viewValue: '3 - Consolidated' },
    { value: '2', viewValue: '4 - Contigancy' },
    { value: '3', viewValue: '5 - Public Accounts' }
  ];

  tc_list: any[] = [
    { value: '1', viewValue: 'No' },
    { value: '2', viewValue: 'Yes' },

  ];

  bank_list: any[] = [
    { value: '1', viewValue: 'Bank Of Baroda' },
    { value: '2', viewValue: 'State Bank Of India' }
  ];
  // Display Columns
  insertDisplayedColumns: string[] = ['srNo', 'insertSubMajorheads', 'insertMinorheads', 'insertSubHeads', 'insertAmount', 'action'];
  // Table Source
  insertDataSource = new MatTableDataSource<any>(ELEMENT_DATA);


  constructor(private fb: FormBuilder, private _dialog: MatDialog) { }

  ngOnInit() {
    this.challanDetailPostingForm = this.fb.group({
      // FormGroup Fields
      bwMajorHeadTotal: ['214467.00'],
      total: ['1'],
      receiptNo: [''],
      totalByUser: ['1'],
      receivedByBankDate: [''],
      scrollDate: [''],
      challanType: [''],
      branchCode: [''],
      bank: [''],
      branch: [''],
      demand: ['1'],
      majorHead: [''],
      particulars: [''],
      desi: [''],
      acNo: [''],
      deductMonth: [''],
      ddoName: [''],
      schdNo: [''],
      salesTax: [''],
      enfacNo: [''],
      bankNo: [''],
      venderCode: [''],
      venderName: [''],
      regiNo: [''],
      grossAmount: [''],
      discountAmount: [''],
      vendor: ['1'],
      schdAmt: [{ value: '', disabled: true }],
      fromDate: [''],
      toDate: [''],
      tinNo: [''],
      partyNameLc: [''],
      partyNameMajorHead: [''],
      partyNameOthers: [''],
      partyNameProfessionalTax: [''],
      partyNameRtoTax: [''],
      partyNameSalesTax: [{ value: '', disabled: true }],
      partyNameStamp: [''],
      partyNameVatTax: [''],
      challanValue: [''],
      lcCode: [''],
      lcDesc: [{ value: '', disabled: true }],
      insertMinorhead: [''],
      insertSubMajorhead: [''],
      insertSubHead: [''],
      insertAmount: [''],
      submajorHead: [''],
      expClass: [''],
      budget: [''],
      fund: [''],
      tc: ['1'],
      partyName: [''],
      partyNameNps: ['']
    });
  }


  totalExpeAmount(): number {
    let amountExp = 0;
    this.insertDataSource.data.forEach((element) => {
      amountExp = amountExp + Number(element.insertAmount);
    });
    return amountExp;
  }
  // function to add row into table
  add() {
    const p_data = this.insertDataSource.data;

    this.isDelete = true;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amountExp: '0.00'
    });
    this.insertDataSource.data = p_data;
  }
  // function to delete row from table
  delete(index) {
    let isYes = false;
    const dialogRef = this._dialog.open(DeleteDialogBoxComponent, {
      width: '500px', data: isYes
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      isYes = result.data;
      if (isYes) {
        this.insertDataSource.data.splice(index, 1);
        this.insertDataSource = new MatTableDataSource(
          this.insertDataSource.data
        );
      }

    });
  }

  branchCode(inputBranchCode) {

    if (inputBranchCode === 1000) {
      this.challanDetailPostingForm.patchValue({
        bank: '1',
        branch: 'Vidhansabha',
      });
    }

    if (inputBranchCode === 12000) {
      this.challanDetailPostingForm.patchValue({
        bank: '2',
        branch: 'Medical Campus',
      });
    }
  }
  bankChange(inputBank) {
    if (inputBank.value === 1) {
      this.challanDetailPostingForm.patchValue({
        branchCode: '1000',
        branch: 'Vidhansabha',
      });
    }

    if (inputBank.value === 2) {
      this.challanDetailPostingForm.patchValue({
        branchCode: '12000',
        branch: 'Medical Campus',
      });
    }
  }

  onSave() {
    if (this.challanDetailPostingForm.valid) {
      this.isSubmitted = false;

      const dialogRef = this._dialog.open(SaveDialogBoxComponent, {
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(data => {

      });
    } else {
      this.isSubmitted = true;
    }

  }

  onClose() {
    const dialogRef = this._dialog.open(CloseDialogBoxComponent, {
      width: '500px',
    }
    );
    dialogRef.afterClosed().subscribe(result => { });
  }

  // challlan type value selection
  selectChallan(type) {
    if (type == 1) {
      this.isSelectedLc = true;
      this.challanDetailPostingForm.patchValue({
        majorHead: '8782'
      });
      this.isSelectedMajorHead = false;
      this.isSelectedNps = false;
      this.isSelectedSalesTax = false;
      this.isSelectedStamp = false;
      this.isSelectedVat = false;
      this.isSeletedOther = false;
      this.isSelectedProfessional = false;
      this.isSelectedRto = false;
    } else if (type == 2) {
      this.challanDetailPostingForm.patchValue({
        majorHead: '8009'
      });
      this.isSelectedMajorHead = true;
      this.isSelectedLc = false;
      this.isSelectedNps = false;
      this.isSelectedSalesTax = false;
      this.isSelectedStamp = false;
      this.isSelectedVat = false;
      this.isSeletedOther = false;
      this.isSelectedProfessional = false;
      this.isSelectedRto = false;
    } else if (type == 3) {
      this.challanDetailPostingForm.patchValue({
        majorHead: '8342'
      });

      this.isSelectedNps = true;
      this.isSelectedLc = false;
      this.isSelectedMajorHead = false;
      this.isSelectedSalesTax = false;
      this.isSelectedStamp = false;
      this.isSelectedVat = false;
      this.isSeletedOther = false;
      this.isSelectedProfessional = false;
      this.isSelectedRto = false;
    } else if (type == 4) {
      this.challanDetailPostingForm.patchValue({
        majorHead: ''
      });
      this.isSelectedLc = false;
      this.isSelectedMajorHead = false;
      this.isSelectedNps = false;
      this.isSelectedSalesTax = false;
      this.isSelectedStamp = false;
      this.isSelectedVat = false;
      this.isSeletedOther = true;
      this.isSelectedProfessional = false;
      this.isSelectedRto = false;
    } else if (type == 5) {
      this.challanDetailPostingForm.patchValue({
        majorHead: '0028'
      });
      this.isSelectedLc = false;
      this.isSelectedMajorHead = false;
      this.isSelectedNps = false;
      this.isSelectedSalesTax = false;
      this.isSelectedStamp = false;
      this.isSelectedVat = false;
      this.isSeletedOther = false;
      this.isSelectedProfessional = true;
      this.isSelectedRto = false;
    } else if (type == 6) {
      this.challanDetailPostingForm.patchValue({
        majorHead: '0041'
      });
      this.isSelectedLc = false;
      this.isSelectedMajorHead = false;
      this.isSelectedNps = false;
      this.isSelectedSalesTax = false;
      this.isSelectedStamp = false;
      this.isSelectedVat = false;
      this.isSeletedOther = false;
      this.isSelectedProfessional = false;
      this.isSelectedRto = true;
    } else if (type == 7) {
      this.challanDetailPostingForm.patchValue({
        majorHead: '0040'
      });

      this.isSelectedSalesTax = true;
      this.isSelectedLc = false;
      this.isSelectedMajorHead = false;
      this.isSelectedNps = false;
      this.isSelectedStamp = false;
      this.isSelectedVat = false;
      this.isSeletedOther = false;
      this.isSelectedProfessional = false;
      this.isSelectedRto = false;
    } else if (type == 8) {
      this.challanDetailPostingForm.patchValue({
        majorHead: '0030'
      });
      this.isSelectedStamp = true;
      this.isSelectedLc = false;
      this.isSelectedMajorHead = false;
      this.isSelectedNps = false;
      this.isSelectedSalesTax = false;
      this.isSelectedVat = false;
      this.isSeletedOther = false;
      this.isSelectedProfessional = false;
      this.isSelectedRto = false;
    } else if (type == 9) {
      this.challanDetailPostingForm.patchValue({
        majorHead: '0040'
      });
      this.isSelectedVat = true;
      this.isSelectedLc = false;
      this.isSelectedMajorHead = false;
      this.isSelectedNps = false;
      this.isSelectedSalesTax = false;
      this.isSelectedStamp = false;
      this.isSeletedOther = false;
      this.isSelectedProfessional = false;
      this.isSelectedRto = false;
    }
  }

  enterLcDescription() {
    this.challanDetailPostingForm.patchValue({
      lcDesc: 'Eng C P Div No 1, Gandhinagar'
    });
  }
  enterScheduleAmount() {
    this.challanDetailPostingForm.patchValue({
      schdAmt: '11895.00'
    });
  }

  enterPartyName() {
    this.challanDetailPostingForm.patchValue({
      partyNameSalesTax: 'TEST FIRM'
    });
  }
}
