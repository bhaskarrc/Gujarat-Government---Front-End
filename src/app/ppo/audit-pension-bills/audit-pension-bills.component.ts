import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { Observable } from 'rxjs';
import { PpnoListInterface, PpoAutoFill, AuditPension } from 'src/app/model/ppo';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-audit-pension-bills',
  templateUrl: './audit-pension-bills.component.html',
  styleUrls: ['./audit-pension-bills.component.css']
})
export class AuditPensionBillsComponent implements OnInit {
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  searchAuditPensionBills: FormGroup;
  errorMessages = ppoMessage;
  directiveObj = new CommonDirective(this.router);
  directiveObject = new PpoDirectives(this.dialogRef);

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();

  // lists
  status_list: CommonListing[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
  ];
  billType_list: CommonListing[] = [
    { value: 1, viewValue: 'Abstract Bill for Contingent Changes' },
    { value: 2, viewValue: 'Advance Bill' },
    { value: 3, viewValue: 'Bill for Withdrawal of Final/DAV/Other Gpf (Class - IV)' },
    { value: 4, viewValue: 'Bill for Withdrawal of Final/DAV/Other Gpf (Other than Class - IV)' },
    { value: 5, viewValue: 'Court Fee Refund' },
    { value: 6, viewValue: 'Detailed Bill for Contingent Changes' },
    { value: 7, viewValue: 'G I S Insu & Savings Fund OnOnce Demise' },
    { value: 8, viewValue: 'G I S Savings Fund On Ones Retirement & Resi' },
    { value: 9, viewValue: 'Grant in Aid Bill' },
    { value: 10, viewValue: 'Grant in Aid Local Bodies' },
    { value: 11, viewValue: 'Grant in Aid Others' },
    { value: 12, viewValue: 'Grant in Aid Panchayat' },
    { value: 13, viewValue: 'Group Insu Scheme' },
    { value: 14, viewValue: 'Medical Bill' },
    { value: 15, viewValue: 'Pay Bill' },
    { value: 16, viewValue: 'Refund of Deposit' },
    { value: 17, viewValue: 'Refund of Lapsed Deposit' },
    { value: 18, viewValue: 'Refund of Revenue' },
    { value: 19, viewValue: 'Scholarship/Stipend' },
  ];

  // table data
  Element_Data: AuditPension[] = [
    {
      tokenNo: '101', auditorName: 'Prita', billControlNo: '123', billDate: '10-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '990.00', partyName: 'abc', ppoNo: '230', status: 'Approved'
    },
    {
      tokenNo: '102', auditorName: 'Nita', billControlNo: '124', billDate: '11-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '991.00', partyName: 'pqr', ppoNo: '231', status: 'Approved'
    }, {
      tokenNo: '103', auditorName: 'Rita', billControlNo: '125', billDate: '12-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '992.00', partyName: 'xyz', ppoNo: '232', status: 'Approved'
    }, {
      tokenNo: '104', auditorName: 'Mita', billControlNo: '126', billDate: '13-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '993.00', partyName: 'lmn', ppoNo: '233', status: 'Approved'
    }, {
      tokenNo: '105', auditorName: 'Gita', billControlNo: '127', billDate: '14-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '994.00', partyName: 'def', ppoNo: '234', status: 'Approved'
    },
    {
      tokenNo: '105', auditorName: 'Gita', billControlNo: '127', billDate: '14-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '994.00', partyName: 'def', ppoNo: '234', status: 'Pending'
    },
  ];

  dataSource = new MatTableDataSource<AuditPension>(this.Element_Data);

  displayedColumns: string[] = ['checkbox', 'srno', 'tokenNo', 'billControlNo', 'majorHead', 'ppoNo',
    'partyName', 'billType', 'netAmount', 'billDate', 'auditorName', 'status', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialogRef: MatDialog, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.searchAuditPensionBills = this.fb.group({
      billCreatedFrom: [''],
      billCreatedTo: [''],
      majorHead: [''],
      netAmount: [''],
      ppoNo: [''],
      billType: [''],
      tokenNo: [''],
      status: ['']
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

  searchBill() { }
  // clears form
  clearForm() {
    this.searchAuditPensionBills.reset();
  }

  // opens dialog and selects ppo no
  openPPODialog() {
    this.optionCtrl = false;
    if (this.ppoData == null || this.ppoData === undefined || this.ppoData === '') {
      this.ppoData = 'Please Provide PPO No.';
    }
    const dailogRef = this.dialogRef.open(PpoDialogBoxComponent,
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

      }
    });
  }




}
