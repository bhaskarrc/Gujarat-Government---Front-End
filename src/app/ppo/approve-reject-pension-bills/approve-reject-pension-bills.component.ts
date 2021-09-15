import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ApproveRejectPensionBill, PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { ListValue } from '../../model/treasury-bill';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-approve-reject-pension-bills',
  templateUrl: './approve-reject-pension-bills.component.html',
  styleUrls: ['./approve-reject-pension-bills.component.css']
})
export class ApproveRejectPensionBillsComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  approveRejectPensionBills: FormGroup;
  netAmountToVal: string;
  netAmountFromVal: string;
  directiveObject = new PpoDirectives(this.dialog);
  directiveObj = new CommonDirective(this.router);

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  pensionBillTypeCtrl: FormControl = new FormControl();
  billCategoryCtrl: FormControl = new FormControl();
  auditorNameCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();

  // lists
  headCodeType: ListValue[] = [
    { value: '1', viewValue: '1: 2071 Pension And Other Retirement Benefits To Civil Pensioner' },
    { value: '2', viewValue: '2: 2071 Pension And Other Retirement Benefits To Civil, Family Pensioner' },
    { value: '3', viewValue: '3: 2071 Pension And Other Retirement Benefits To Family Pensioner' },
    { value: '4', viewValue: '4: 2071 Pension And Other Retirement Benefits To School & College Pensioner' },
    { value: '5', viewValue: '5: 2071 Provisional Pension To School And College Pensioner' },
    { value: '6', viewValue: '6: 2071 Provisional Pension To Civil Pensioner' },
    { value: '7', viewValue: '7: 2071 Provisional Pension To Civil Family Pensioner' },
    { value: '8', viewValue: '8: 2071 Pension And Other Retirement Benefits Civil Pensioner Fixed Pension' },
    { value: '9', viewValue: '9: 2071 Pension Old Pensioner' },
    { value: '10', viewValue: '10: 2071 Pension State Pensioner' },
    { value: '11', viewValue: '11: 2071 Pension To Primary Teachers' },
    { value: '12', viewValue: '12: 2071 Family Pension To Primary Teachers' },
    { value: '13', viewValue: '13: 2071 Pension To Panchayat Employees' },
    { value: '14', viewValue: '14: 2071 Family Pension To Panchayat Employees' },
    { value: '15', viewValue: '15: 2071 Pension Fixed To Panchayat Employees' },
  ];
  pensionBillType_list: CommonListing[] = [
    { value: '1', viewValue: 'CVP Bill' },
    { value: '2', viewValue: 'DCRG Bill' },
    { value: '3', viewValue: 'Relief Bill' },
    { value: '4', viewValue: 'Pension Bill' },
    { value: '5', viewValue: 'Medical Reimbursement Bill' },
    { value: '6', viewValue: 'Monthly Pension Bill' },
  ];

  billCategory_list: CommonListing[] = [
    { value: '1', viewValue: 'Regular Bill' },
    { value: '2', viewValue: 'Nil Bill' },
  ];

  auditorName_list: CommonListing[] = [
    { value: '1', viewValue: 'm p patel' },
  ];
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved' },
    { value: '2', viewValue: 'Forwarded to Verifier' },
    { value: '3', viewValue: 'Forwarded to Approver' },
    { value: '4', viewValue: 'Approved' },
  ];

  // table data
  Element_Data: ApproveRejectPensionBill[] = [
    {
      billRefNo: '1', tokenNo: '12', majorHead: '2071', ppoNo: 'L/SRN/PT/000481',
      partyName: 'Pratik K', billType: 'CVP Bill', netAmount: '100.00',
      billDate: '11-Feb-2020', billCategory: 'Regular Bill', auditorName: 'm p patel', status: 'Approved'
    },
    {
      billRefNo: '1', tokenNo: '12', majorHead: '2071', ppoNo: 'L/SRN/PT/000481',
      partyName: 'Pratik K', billType: 'CVP Bill', netAmount: '100.00',
      billDate: '11-Feb-2020', billCategory: 'Regular Bill', auditorName: 'm p patel', status: 'Approved'
    },
    {
      billRefNo: '1', tokenNo: '12', majorHead: '2071', ppoNo: 'L/SRN/PT/000481',
      partyName: 'Pratik K', billType: 'CVP Bill', netAmount: '100.00',
      billDate: '11-Feb-2020', billCategory: 'Regular Bill', auditorName: 'm p patel', status: 'Approved'
    },
  ];


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<ApproveRejectPensionBill>(this.Element_Data);
  displayedColumns = [
    'checkbox', 'srno', 'billRefNo', 'tokenNo', 'majorHead', 'ppoNo', 'partyName',
    'billType', 'netAmount', 'billDate', 'auditorName', 'status', 'action'
  ];

  ngOnInit() {
    this.approveRejectPensionBills = this.fb.group({
      billControlNo: [''],
      tokenNo: [''],
      majorHead: [''],
      ppoNo: [''],
      partyName: [''],
      pensionBillType: [''],
      billDateFrom: [''],
      billDateTo: [''],
      netAmountFrom: [''],
      netAmountTo: [''],
      auditorName: [''],
      headCode: [''],
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

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

  // net amt to related function
  netAmountToValFunc(data) {
    this.netAmountToVal = data;
  }
  // net amt from related function
  netAmountFromValFunc(data) {
    this.netAmountFromVal = data;
  }
  // opens dialog
  openDailog(element) { }

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

  resetForm() { }
  goToSavedBillList() { }
  onSearch() { }
  clearForm() { }

}
