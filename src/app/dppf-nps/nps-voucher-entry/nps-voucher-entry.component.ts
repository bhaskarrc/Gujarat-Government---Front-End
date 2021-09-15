import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SearchCardexDppfNpsComponent } from '../search-cardex-dppf-nps/search-cardex-dppf-nps.component';
import { Router } from '@angular/router';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { VoucherEntry } from 'src/app/model/dppf-nps';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-nps-voucher-entry',
  templateUrl: './nps-voucher-entry.component.html',
  styleUrls: ['./nps-voucher-entry.component.css']
})
export class NpsVoucherEntryComponent implements OnInit {
  // List
  headList: CommonListing[] = [
    { value: '1', viewValue: '2014' }
  ];

  headAmountList: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];

  detailsData: VoucherEntry[] = [
    {
      voucherNo: '',
      cardexNo: '',
      ddo: '',
      amount: '',
    }
  ];
  // Table Source
  detailsColumn: string[] = [
    'voucherNo', 'cardexNo', 'ddo', 'amount', 'action'
  ];
  // Date
  todayDate = new Date();
  // Variable
  errormsg = DppfNpsMessage;
  inwardDetails = true;
  // Form Group
  voucherEntryForm: FormGroup;
  // Form COntrol
  headCTRL: FormControl = new FormControl();
  headAmountCTRL: FormControl = new FormControl();
  detailsDataSource = new MatTableDataSource<VoucherEntry>(this.detailsData);
  // Directive
  directiveObj = new CommonDirective();
  // Constructor
  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.voucherEntryFormData();
  }

  voucherEntryFormData() {
    this.voucherEntryForm = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      treasuryPAO: [''],
      year: [''],
      month: [''],
      group: [''],
      groupHead: [''],
      creditDebit: [''],
      tcChallan: [''],
      majorHead: [''],
      majorHeadAmount: [''],
      head: [''],
      headAmount: [''],
    });
  }
  // Reset Form
  resetForm() {
    this.voucherEntryForm.reset();
  }
  // Work FLow Details
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Routing
  goToListing() {
    this.router.navigate(['/dppf-nps/nps-voucher-entry-listing']);
  }

  //  Dialog Search InwardNo DppfNps
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.voucherEntryForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }
  // Dialog Search Cardex DppfNps
  openDialogCardexNumber() {
    const dialogRef = this.dialog.open(SearchCardexDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.voucherEntryForm.patchValue({
          cardexNo: result[0].cardexNo,
          ddoName: result[0].ddoName,
        });
      }
    });
  }

  // addDetails
  addDetails() {
    const Col_Data = this.detailsDataSource.data;
    Col_Data.push({
      voucherNo: '', cardexNo: '', ddo: '', amount: '',
    });
    this.detailsDataSource.data = Col_Data;
  }


}
