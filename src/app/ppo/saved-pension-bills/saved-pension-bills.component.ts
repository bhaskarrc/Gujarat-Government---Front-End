import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SavedPensionBill } from 'src/app/model/saved-pension-bill';
import { Observable } from 'rxjs';
import { PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { map, startWith } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { ListValue } from '../../model/treasury-bill';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-saved-pension-bills',
  templateUrl: './saved-pension-bills.component.html',
  styleUrls: ['./saved-pension-bills.component.css']
})
export class SavedPensionBillsComponent implements OnInit {
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  searchSavedPensionBills: FormGroup;
  directiveObject = new PpoDirectives(this.dialogRef);

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();
  billTypeCtrl: FormControl = new FormControl();

  // lists

  billType_list: CommonListing[] = [
    { value: 1, viewValue: 'Monthly Bill' },
    { value: 2, viewValue: 'DCRG Bill' },
    { value: 3, viewValue: 'CVP Bill' },
    { value: 4, viewValue: 'Pension Bill' },
    { value: 5, viewValue: 'MR Bill' }
  ];

  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved' },
    { value: '2', viewValue: 'Forwarded to Verifier' },
    { value: '3', viewValue: 'Forwarded to Approver' },
    { value: '4', viewValue: 'Approved' },
  ];

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

  constructor(private dialogRef: MatDialog,
    private fb: FormBuilder) { }
  // table data
  Element_Data: SavedPensionBill[] = [
    {
      auditorName: 'Prita', billControlNo: '123', billDate: '10-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '990.00', partyName: 'abc', ppoNo: '230'
    },
    {
      auditorName: 'Nita', billControlNo: '124', billDate: '11-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '991.00', partyName: 'pqr', ppoNo: '231'
    }, {
      auditorName: 'Rita', billControlNo: '125', billDate: '12-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '992.00', partyName: 'xyz', ppoNo: '232'
    }, {
      auditorName: 'Mita', billControlNo: '126', billDate: '13-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '993.00', partyName: 'lmn', ppoNo: '233'
    }, {
      auditorName: 'Gita', billControlNo: '127', billDate: '14-Feb-2020', billType: 'Pension Bill', majorHead: '2054'
      , netAmount: '994.00', partyName: 'def', ppoNo: '234'
    },
  ];

  dataSource = new MatTableDataSource<SavedPensionBill>(this.Element_Data);
  displayedColumns: any[] = ['checkbox', 'position', 'billControlNo', 'majorHead', 'ppoNo',
    'partyName', 'billType', 'netAmount', 'billDate', 'auditorName', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.searchSavedPensionBills = this.fb.group({
      billCreatedFrom: [''],
      billCreatedTo: [''],
      majorHead: [''],
      netAmount: [''],
      ppoNo: [''],
      billType: ['Bill Type'],
      bankCode: [''],
      headCode: [''],
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
    this.searchSavedPensionBills.reset();
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

