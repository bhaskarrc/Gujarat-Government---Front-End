import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PpoAutoFill, PpnoListInterface, InwardPensionBill } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { ListValue } from '../../model/treasury-bill';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-inward-pension-bill',
  templateUrl: './inward-pension-bill.component.html',
  styleUrls: ['./inward-pension-bill.component.css']
})
export class InwardPensionBillComponent implements OnInit {

  // variables
  directiveObj = new CommonDirective(this.router);
  inwardPensionBillForm: FormGroup;
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  directiveObject = new PpoDirectives(this.dialog);

  // form controls
  headCodeCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();

  // table data
  InwardPensionBillDATA: InwardPensionBill[] = [
    {
      billRefNo: '2',
      tokenNo: '2307',
      majorHead: '2071',
      ppoNO: 'L/GNR/STATE/CL-IV/P/01194',
      partyName: 'A.B Sharma',
      billType: 'Pension Bill',
      netAmount: '874063.00',
      billdate: '29/04/2019',
      authorName: 'A M Pandit'
    }
  ];

  inwardPensionBillColumns: string[] = [
    'select',
    'srno',
    'billRefNo',
    'tokenNo',
    'majorHead',
    'ppoNO',
    'partyName',
    'billType',
    'netAmount',
    'billdate',
    'authorName',
    'action'
  ];
  inwardPensionBillDataSource = new MatTableDataSource<any>(this.InwardPensionBillDATA);
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

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog, private router: Router
  ) { }

  ngOnInit() {
    this.inwardPensionBillFormData();
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

  inwardPensionBillFormData() {
    this.inwardPensionBillForm = this.fb.group({
      billControlNo: [''],
      majorHead: [''],
      ppoNo: [''],
      partyName: [''],
      billType: [''],
      billDate: [''],
      tokenNo2: [''],
      bankCode: [''],
      headCode: [''],
    });
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

  // sets value on token enter
  enterToken(row) {
    if (row.checkbox) {
      this.inwardPensionBillForm.controls['tokenNo2'].setValue('2307');
    } else {
      this.inwardPensionBillForm.controls['tokenNo2'].setValue('');
    }
  }


}
