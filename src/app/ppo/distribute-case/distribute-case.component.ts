import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PpnoListInterface, DistributeCase } from 'src/app/model/ppo';
import { PpoDialogBoxComponent } from '../ppo-dialog-box/ppo-dialog-box.component';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { ListValue } from '../../model/treasury-bill';
const ELEMENT_DATA: DistributeCase[] = [
  {
    ppoNo: 'L/GNR/STATE/CL-IV/P/011941', name: 'Pushpa Ajit Jani', schemeType: '1',
    branchCode: '140014', bank: 'State Bank Of India', branch: 'Sector 21', accountNo: '12345678901', auditor: 'A M Pandit'
  },
];

@Component({
  selector: 'app-distribute-case',
  templateUrl: './distribute-case.component.html',
  styleUrls: ['./distribute-case.component.css']
})
export class DistributeCaseComponent implements OnInit {
  // variables
  directiveObj = new CommonDirective(this.router);
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  distributedCase: FormGroup;

  // lists
  schemeType: ListValue[] = [
    { value: '1', viewValue: 'IRLA ' },
    { value: '2', viewValue: 'Counter ' }
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
  // form controls
  schemeCtrl: FormControl = new FormControl();
  AuditorCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();

  // table data
  displayedColumns: string[] = ['select', 'ppoNo', 'name', 'schemeType', 'branchCode', 'bank', 'branch', 'accountNo', 'auditor'];
  distributeDataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.distributedCase = this.fb.group({
      bankCode: [''],
      headCode: ['']
    });

    this.ppoNoVal = 'PPO No.';
  }
  // ppo no related methods
  sendPPOData(data) {
    this.ppoData = data;
  }
  displayFn(ppoNo_list: PpnoListInterface): string {
    return ppoNo_list && ppoNo_list.ppoNo ? ppoNo_list.ppoNo : '';
  }
  fwdInwardData() {
    console.log(this.distributeDataSource.data);
  }

  // routing
  goToDashboard() {
    console.log('data');
  }

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
      }
    });
  }
}

