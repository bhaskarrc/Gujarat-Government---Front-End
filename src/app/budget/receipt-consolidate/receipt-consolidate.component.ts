import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmDialogModel, StandingChargeHistoryComponent } from '../standing-charge/standing-charge-history/standing-charge-history.component';
import { FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { ToastrService } from 'ngx-toastr';
import { ReceiptEstimateConfirmDialogComponent, ReceiptEstimateDialogComponent } from '../receipt-estimate/receipt-estimates/receipt-estimates.component';
import { StandingChargeConsolidateHistoryComponent } from '../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';

const ELEMENT_DATA: any[] = [
  {
    subMajorHead: '00', minoeHead: '090', subHead: '01', detaileHead: '00', objecthead: '0431',
    subMajorHeadToolTip: '00:Secretariat-Economic Services', minoeHeadToolTip: '090:Secretariat',
     subHeadToolTip: '01:Agricultural and Co-operation Department',
    detaileHeadToolTip: '00:AGR-15 Information & Technology', objectheadToolTip: '0431:National Mission on Oil seeds and Oil Palm (NMOOP)',
    accountReceipt: '200.00', accountReceipt1: '250.00', accountReceipt2: '251.00', accountDisbursement1: '356.00',
     accountDisbursement2: '457.00', accountDisbursement: '789.00', bReceipt: '21.00', bDisbursement: '25.00',
    pReceipt: '452.00', pDisbursement: '0.00', pReceiptFd: '552.00', pDisbursementFd: '0.00', remarks: 'remarks', deduct: '10.00'
  },
  {
    subMajorHead: '00', minoeHead: '01', subHead: '01', detaileHead: '00', objecthead: '0331',
    subMajorHeadToolTip: '00:Crop Husbandry', minoeHeadToolTip: '01:IND-48 Government Presses',
     subHeadToolTip: '01:Direcorate of Agriculture',
    detaileHeadToolTip: '00:AGR-Renovation Of The Department', objectheadToolTip: '0331:National Mission for Sustainable',
     accountReceipt: '20.00', accountReceipt1: '25.00', accountReceipt2: '251.00', accountDisbursement1: '346.00',
      accountDisbursement2: '447.00', accountDisbursement: '749.00', bReceipt: '', bDisbursement: '',
    pReceipt: '442.00', pDisbursement: '0.00', pReceiptFd: '642.00', pDisbursementFd: '0.00', remarks: 'remarks', deduct: '10.00'
  },
];

export interface HeaderElement {
  label: string | '';
  value: string | '';
}

@Component({
  selector: 'app-receipt-consolidate',
  templateUrl: './receipt-consolidate.component.html',
  styleUrls: ['./receipt-consolidate.component.css']
})
export class ReceiptConsolidateComponent implements OnInit {
  date: any = new Date();
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = ['seno', 'subMajorHead', 'minoeHead', 'subHead', 'detaileHead', 'objecthead', 'accountReceipt', 'accountReceipt1',
    'accountReceipt2', 'accountDisbursement', 'accountDisbursement1', 'accountDisbursement2',
    'bReceipt', 'bDisbursement', 'pReceipt', 'pDisbursement', 'pReceiptfd', 'pDisbursementfd', 'deduct', 'remarks'];

  headerJson: HeaderElement[] = [
    { label: 'Name of Department', value: 'Agriculture , Famers welfare and Co-operation Department' },
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Major Head', value: '0005:Central Goods and Services Tax' },
    { label: 'Sector', value: 'A-General Services' },
    { label: 'Sub Sector', value: '(a) Organs of State' },
    { label: 'Major Head Receipt Amount', value: '5000' },
    { label: 'Major Head Disbursement Amount', value: '1000' },
  ];
  filteredAttachmentList: CommonListing[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Other' },
  ];
  brwoseData: any[] = [{
      name: undefined,
      file: undefined,
  }];

  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  attachmentTypeCtrl: FormControl = new FormControl();
  fileBrowseIndex: any;

  constructor(private router: Router,
    public dialog: MatDialog,
    private el: ElementRef,
    private toastr: ToastrService,) { }

  ngOnInit() {
  }

  listing() {
    this.router.navigate(['/budget/receipt-consolidate-list']);
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  onFileSelection(fileSelected) {
      if (fileSelected.target && fileSelected.target.files) {
          this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
      }
  }

  openFileSelector(index) {
      this.el.nativeElement.querySelector('#fileBrowse').click();
      this.fileBrowseIndex = index;
  }
  addBrowse() {
      if (this.dataSourceBrowse) {
          const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
          if (data && data.name && data.file) {
              const p_data = this.dataSourceBrowse.data;
              p_data.push({
                  name: undefined,
                  file: undefined,
              });
              this.dataSourceBrowse.data = p_data;
          } else {
            this.toastr.error('Please fill the detail.');
        }
      }
  }

  deleteBrowse(index) {
      this.dataSourceBrowse.data.splice(index, 1);
      this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  showHistoryDialog(): void {

    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(StandingChargeConsolidateHistoryComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }
  submitToNextLevel(): void {
    const dialogRef = this.dialog.open(ReceiptEstimateDialogComponent, {
      width: '2700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
        this.showConfirmationPopup();
      }
    });
  }
  showConfirmationPopup() {
    const dialogRef = this.dialog.open(ReceiptEstimateConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log(result);
      } else if (result === 'save') {
        console.log(result);
      }
    });
  }
  decimalPoint(data, key) {
    data[key] = Number(data[key]).toFixed(2);
  }
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }

  }
  calcAccountReceipt() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountReceipt);
      });
      return  sum;
  }
  calcAccountReceipt1() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountReceipt1);
      });
      return  sum;
  }
  calcAccountReceipt2() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountReceipt2);
      });
      return  sum;
  }
  calcAccountDisbursement() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountDisbursement);
      });
      return  sum;
  }
  calcAccountDisbursement1() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountDisbursement1);
      });
      return  sum;
  }
  calcAccountDisbursement2() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.accountDisbursement2);
      });
      return  sum;
  }
  calcbReceipt() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.bReceipt);
      });
      return  sum;
  }
  calcbDisbursement() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.bDisbursement);
      });
      return  sum;
  }
  calcpReceipt() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.pReceipt);
      });
      return  sum;
  }
  calcpDisbursement() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.pDisbursement);
      });
      return  sum;
  }
  calcpReceiptFd() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.pReceiptFd);
      });
      return  sum;
  }
  calcpDisbursementFd() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.pDisbursementFd);
      });
      return  sum;
  }
  calcDeduct() {
    let sum = 0;
      this.dataSource.data.forEach((element, index) => {
          sum =
          sum + Number(element.deduct);
      });
      return  sum;
  }

}
