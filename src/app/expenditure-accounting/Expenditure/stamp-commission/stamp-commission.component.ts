import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';

/** AcceptDialogComponent start */
@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.component.html',
})
export class AcceptDialogComponent implements OnInit {
  acceptDialogForm: FormGroup;
  isYes = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AcceptDialogComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.acceptDialogForm = this.fb.group({

    });
  }

  // on no
  onNo(event?) {
    this.dialogRef.close();
  }

  // on yes
  onYes() {
    this.dialogRef.close();
    this.router.navigate(['ea/expenditure/voucher-stamp-commission']);
  }

  // on close click
  onClose() {
    this.dialogRef.close();
  }

}
/** AcceptDialogComponent end */


/** StampCommissionComponent start */
@Component({
  selector: 'app-stamp-commission',
  templateUrl: './stamp-commission.component.html',
  styleUrls: ['./stamp-commission.component.css']
})
export class StampCommissionComponent implements OnInit {

  // Date
  maxDate = new Date();
  todayDate = new Date();


  // variables
  isDataFetched = false;
  isAddClicked = false;
  isSubmitted = false;
  errorMessages = eaMessage;

  // directive object for checkbox
  directiveObj = new CommonDirective(this.route);

  // form group
  stampComission: FormGroup;

  // table data for fetched details
  displayedColumns: string[] = [
    'checkBox',
    'srNo',
    'challanNo',
    'challanDate',
    'cardexNo',
    'stampType',
    'headChargable',
    'grossAmount',
    'deductionAmount',
    'netAmount'
  ];
  elementData = [];
  dataSource = new MatTableDataSource<any>(this.elementData);
  // table data for fetched details end

  // table data for fetched details voucher
  displayedColumnsPostVoucher: string[] = [
    'checkBox',
    'srNo',
    'challanNo',
    'challanDate',
    'cardexNo',
    'stampType',
    'headChargable',
    'grossAmount',
    'deductionAmount',
    'netAmount',
    'action'
  ];
  elementData1 = [];
  postVoucherDataSource = new MatTableDataSource<any>(this.elementData1);
  // table data for fetched details voucher end

  // constructor
  constructor(private fb: FormBuilder, private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.stampComission = this.fb.group({
      challanDate: ['']
    });
  }

  // reset form
  clearForm() {
    this.stampComission.reset();
  }

  // on click on fetch data button
  onFetchDataClick() {
    if (this.stampComission.valid) {
      this.isSubmitted = false;
      this.isDataFetched = true;
      this.elementData.push({
        challanNo: '1920003',
        challanDate: '28-May-2020',
        cardexNo: '1',
        stampType: 'Non Judicial Stamp',
        headChargable: '077-2030-01-102-02-C5',
        grossAmount: '44073.00',
        deductionAmount: '44073.00',
        netAmount: '0.00'
      },
        {
          challanNo: '1920004',
          challanDate: '28-May-2020',
          cardexNo: '4',
          stampType: 'Non Judicial Stamp',
          headChargable: '077-0030-02-102-00-C5',
          grossAmount: '54073.00',
          deductionAmount: '54073.00',
          netAmount: '0.00'
        },
        {
          challanNo: '1920005',
          challanDate: '28-May-2020',
          cardexNo: '8',
          stampType: 'Non Judicial Stamp',
          headChargable: '077-0030-01-101-01-C5',
          grossAmount: '74073.00',
          deductionAmount: '74073.00',
          netAmount: '0.00'
        });
      this.dataSource = new MatTableDataSource<any>(this.elementData);
      this.stampComission = this.fb.group({
        challanDate: ['']
      });
    } else {
      this.isSubmitted = true;
      this.isDataFetched = false;
    }

  }

  // on click on add data button
  addData() {
    this.isDataFetched = true;
    const dataLength = this.dataSource.data.length;
    const filterData = [];
    const length = this.directiveObj.selection.selected.length;
    if (length) {

      this.isAddClicked = true;
      for (let j = 0; j < dataLength; j++) {
        for (let i = 0; i < length; i++) {
          if (this.dataSource.data[j].challanNo === this.directiveObj.selection.selected[i].challanNo) {
            this.elementData1.push({
              challanNo: this.dataSource.data[j].challanNo,
              challanDate: this.dataSource.data[j].challanDate,
              cardexNo: this.dataSource.data[j].cardexNo,
              stampType: this.dataSource.data[j].stampType,
              headChargable: this.dataSource.data[j].headChargable,
              grossAmount: this.dataSource.data[j].grossAmount,
              deductionAmount: this.dataSource.data[j].deductionAmount,
              netAmount: this.dataSource.data[j].netAmount,
            });
            filterData.push(j);
          }
        }
      }
      for (let i = dataLength - 1; i >= 0; i--) {
        for (let j = 0; j < filterData.length; j++) {
          this.dataSource.data.splice(filterData[j], 1);
        }
      }
      this.dataSource.data = this.dataSource.data;
      this.postVoucherDataSource = new MatTableDataSource(this.elementData1);
      this.directiveObj.selection.clear();
    }

  }

  // on click on delete icon
  delete(element, index) {
    this.postVoucherDataSource.data.splice(index, 1);
    this.postVoucherDataSource.data = this.postVoucherDataSource.data;
    this.dataSource.data.push({
      challanDate: element.challanDate,
      challanNo: element.challanNo,
      cardexNo: element.cardexNo,
      stampType: element.stampType,
      headChargable: element.headChargable,
      grossAmount: element.grossAmount,
      deductionAmount: element.deductionAmount,
      netAmount: element.netAmount,
    });
    this.dataSource.data = this.dataSource.data;
    this.directiveObj.selection1.clear();
  }

  // on clcik on Post Voucher button
  onPostVouchersClick() {
    this.postVoucherDataSource.data.forEach(() => {
      if (this.directiveObj.selection1.selected.length > 0) {
        const dialogRef = this.dialog.open(AcceptDialogComponent, {
          width: '500px'
        });

        dialogRef.afterClosed().subscribe(result => {
        });
      }
    });

  }

}
/** StampCommissionComponent end */

