import { Component, OnInit, ViewChild } from '@angular/core';
import { PpoAutoFill, PpnoListInterface, DistributeCase } from 'src/app/model/ppo';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { ListValue } from '../../model/treasury-bill';
const ELEMENT_DATA: DistributeCase[] = [
  {
    ppoNo: 'L/GNR/STATE/CL-IV/P/011941', name: 'Pushpa Ajit Jani', schemeType: '1',
    branchCode: '140014', bank: 'State Bank Of India', branch: 'Sector 21', accountNo: '12345678901', auditor: 'A M Pandit'
  },
];


@Component({
  selector: 'app-distribute-pension-case',
  templateUrl: './distribute-pension-case.component.html',
  styleUrls: ['./distribute-pension-case.component.css']
})
export class DistributePensionCaseComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }

  // variables
  directiveObj = new CommonDirective(this.router);
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  irlaSelected = false;
  distributePensionCase: FormGroup;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();
  statusNameCtrl: FormControl = new FormControl();
  schemeCtrl: FormControl = new FormControl();
  bankCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();
  AuditorCtrl: FormControl = new FormControl();

  // lists
  statusName_list: CommonListing[] = [
    { value: '1', viewValue: 'Approved' },
    { value: '2', viewValue: 'Distributed' }
  ];
  scheme_list: CommonListing[] = [
    { value: '1', viewValue: 'IRLA' },
    { value: '2', viewValue: 'Counter' },
    { value: '2', viewValue: 'Money Order' },
    { value: '2', viewValue: 'Counter' }
  ];
  bank_list: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad District Cooperative bank' },
  ];

  auditors: ListValue[] = [
    { value: '1', viewValue: 'auditors ' },
    { value: '2', viewValue: 'auditors ' }
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

  branch_list: ListValue[] = [
    { value: '1', viewValue: 'Akhbarnagar' },
    { value: '2', viewValue: 'Chandkheda' },
    { value: '3', viewValue: 'Kalupur' },
  ];
  // table data
  displayedColumns: string[] = ['select', 'ppoNo', 'name', 'schemeType', 'branchCode', 'bank', 'branch', 'accountNo', 'auditor'];
  distributeDataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
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

  ngOnInit() {
    this.distributePensionCase = this.fb.group({
      ppoNo: [''],
      headCode: [''],
      registrationDate: [''],
      status: [''],
      scheme: [''],
      bank: [''],
      bankBranchCode: [''],
      branch: [''],
      accountNo: ['']
    });

    this.distributeDataSource.sort = this.sort;
    this.distributeDataSource.paginator = this.paginator;

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

  // selects scheme
  schemeSelection(data) {
    if (data.value === '1') {
      this.irlaSelected = true;
    } else {
      this.irlaSelected = false;
    }
  }
  openDailog(element) { }
  onSearch() { }
  resetForm() { }


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

