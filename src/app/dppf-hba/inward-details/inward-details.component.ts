import { EmployeeDialogBoxComponent } from './../employee-dialog-box/employee-dialog-box.component';
import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { HbaMcaNoDialogComponent } from '../hba-mca-no-dialog/hba-mca-no-dialog.component';
import { CardexNoDialogComponent } from './cardex-no-dialog/cardex-no-dialog.component';
import { ListingDialogComponent } from '../listing-dialog/listing-dialog.component';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';

@Component({
  selector: 'app-inward-details',
  templateUrl: './inward-details.component.html',
  styleUrls: ['./inward-details.component.css']
})
export class InwardDetailsComponent implements OnInit {
  // Variable
  isSubmitted;
  inwardType: number;
  isSelectedCredit = true;
  fileBrowseIndex: number;
  directiveObject = new DPPFHbaDirectives(this.dialog);

  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  inwardDetailsForm: FormGroup;
  // Form Control
  inwardTypeCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  treaspaoCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  hbaMcaCtrl: FormControl = new FormControl();
  hbaMcaControlCtrl: FormControl = new FormControl();
  creditDebitCtrl: FormControl = new FormControl();
  tcChallanCtrl: FormControl = new FormControl();
  tcChallanForVoucherCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  // Lists
  inwarde_list: CommonListing[] = [
    { value: '1', viewValue: 'Top Schedule' },
    { value: '4', viewValue: 'Cheque / Demand Draft' },
    { value: '5', viewValue: 'Request for Account Generation' },
    { value: '6', viewValue: 'Demand for Interest Conformation Letter' },
    { value: '7', viewValue: 'Demand for NDC' },
    { value: '8', viewValue: 'Demand for refund order' },
    { value: '9', viewValue: 'AGTE Misclassified Entry' },
    { value: '10', viewValue: 'AGTE Clearance Entry(Sent by DPPF)' },
    { value: '11', viewValue: 'Debit/Credit Correction Entry' },
    { value: '12', viewValue: 'AG CA Figure' },
    { value: '3', viewValue: 'Others' },
  ];
  TESPAO_list: CommonListing[] = [
    { value: '1', viewValue: ' ' },
  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  hbaMca_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' }
  ];
  hbaMcaControl_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA1' },
    { value: '2', viewValue: 'HBA2' },
    { value: '3', viewValue: 'HBA3' },
    { value: '4', viewValue: 'MCA1' },
    { value: '5', viewValue: 'MCA2' },
    { value: '6', viewValue: 'Control' }
  ];
  creditDebit_list: CommonListing[] = [
    { value: '1', viewValue: 'Credit' },
    { value: '2', viewValue: 'Debit' }
  ];
  tcChallan_list: CommonListing[] = [
    { value: '1', viewValue: 'TC' },
    { value: '2', viewValue: 'Challan' },
    { value: '3', viewValue: 'Gross Amount' }
  ];
  tcChallanForVoucher_list: CommonListing[] = [
    { value: '1', viewValue: 'Voucher' }
  ];
  monthList: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'Sepetember' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];
  yearList: CommonListing[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];

  // Variable
  public errorMessages;
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.errorMessages = dppfHbaMessage;
    this.inwardDetailsData();
  }
  inwardDetailsData() {
    this.inwardDetailsForm = this.fb.group({
      inwardNo: [{ value: '', disabled: true }],
      inwardDate: [new Date()],
      letterNo: [''],
      letterDate: [''],
      inwardType: [''],
      empNo: [''],
      empName: [{ value: '', disabled: true }],
      other: [''],
      district: [''],
      ddoName: [''],
      address: [''],
      remark: [''],
      cardexNo: [''],
      mobileNo: [''],
      treaspao: [''],
      contactNo: [''],
      hbaMca: [''],
      hbaMcaControl: [''],
      creditDebit: ['1'],
      tcChallan: ['1'],
      tcChallanForVoucher: [''],
      challanAmt: [{ value: '', disabled: true }],
      tcAmt: [{ value: '', disabled: false }],
      grossAmt: [{ value: '', disabled: true }],
      year: [''],
      month: [''],
      hbaMcaNo: [''],
      loanHolderName: [''],
      designation: [''],
      chequeDemandDraftNo: [''],
      chequeDemandDraftDate: [''],
      chequeDemandDraftAmt: [''],
      chequeDemandDraftFrom: [''],
      bankName: [''],
      branch: [''],
      agAccAmt: [''],
      agCaAmt: [''],
      voucherAmt: ['']
    });
  }



  selectInwardType(type) {
    this.inwardType = Number(type);
  }

  selectCreditDebit(type) {
    if (type === '1') {
      this.isSelectedCredit = true;
    } else {
      this.isSelectedCredit = false;
    }
  }

  selectTcChallan(type) {
    if (type === '1') {
      this.inwardDetailsForm.controls['tcAmt'].enable();
      this.inwardDetailsForm.controls['challanAmt'].disable();
      this.inwardDetailsForm.controls['challanAmt'].patchValue('0');
      this.calGrossAmount();
    } else if (type === '2') {
      this.inwardDetailsForm.controls['challanAmt'].enable();
      this.inwardDetailsForm.controls['tcAmt'].disable();
      this.inwardDetailsForm.controls['tcAmt'].patchValue('0');
      this.calGrossAmount();
    } else if (type === '3') {
      this.inwardDetailsForm.controls['tcAmt'].enable();
      this.inwardDetailsForm.controls['challanAmt'].enable();
    }
  }

  // to calculate gross amount
  calGrossAmount() {
    const tcChallanForVoucher = Number(this.inwardDetailsForm.controls['challanAmt'].value);
    const challanAmt = Number(this.inwardDetailsForm.controls['tcAmt'].value);
    let gross = 0;
    gross = tcChallanForVoucher + challanAmt;
    this.inwardDetailsForm.controls['grossAmt'].patchValue('' + gross);
  }


  // Inward No popup
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  // Hba No popup

  hbaMcaNo() {
    const dialogRef = this.dialog.open(HbaMcaNoDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  // Emp No popup
  onEmpNo() {
    const dialogRef = this.dialog.open(EmployeeDialogBoxComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  onClickListing() {
    const dialogRef = this.dialog.open(ListingDialogComponent, {
      width: '300px',
      height: 'auto',
      data: ''
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'No') {
        this.navigate();
      }
    });
  }

  navigate() {
    this.router.navigate(['./dppf-hba/inward-details-listing']);
  }
  // cardex no
  cardexNo() {
    const dialogRef = this.dialog.open(CardexNoDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
