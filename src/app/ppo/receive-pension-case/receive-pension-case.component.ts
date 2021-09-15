import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { PpnoListInterface, PpoAutoFill, ReceivePension } from 'src/app/model/ppo';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { ListValue } from '../../model/treasury-bill';

@Component({
  selector: 'app-receive-pension-case',
  templateUrl: './receive-pension-case.component.html',
  styleUrls: ['./receive-pension-case.component.css']
})
export class ReceivePensionCaseComponent implements OnInit {
  // variables
  ppoData;
  ppoNoVal: string;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNo_list: PpnoListInterface[] = [];
  dataFromDailogComponent: PpoAutoFill[];
  directiveObj = new CommonDirective(this.router);
  receivePensionCaseForm: FormGroup;
  // lists

  bank_list: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad District Cooperative bank' },
  ];

  branch_list: ListValue[] = [
    { value: '1', viewValue: 'Akhbarnagar' },
    { value: '2', viewValue: 'Chandkheda' },
    { value: '3', viewValue: 'Kalupur' },
  ];

  auditor_list: ListValue[] = [
    { value: '1', viewValue: '' },
  ];

  treasury_list: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Bharuch' },
    { value: '2', viewValue: 'District Treasury Office, Arvalli' },
    { value: '3', viewValue: 'District Treasury Office, Mahisagar' },
  ];
  // table data
  receivePension_DATA: ReceivePension[] = [
    {
      ppoNo: 'PR-1/05/2016/277322', pensionerName: 'Rahul Patel',
      oldTreasury: 'District Treasury Office, Bharuch', branch: '', bank: '',
      bankBranch: '', accountNo: ''
    },
    {
      ppoNo: 'PR-2/11/2014/277320', pensionerName: 'Vijay Shah',
      oldTreasury: 'District Treasury Office, Arvalli', branch: '', bank: '', bankBranch: '', accountNo: ''
    },
    {
      ppoNo: 'PR-3/08/2017/277321', pensionerName: 'Jigar Patel',
      oldTreasury: 'District Treasury Office, Mahisagar', branch: '', bank: '', bankBranch: '', accountNo: ''
    }
  ];
  receivePensionDataSource = new MatTableDataSource<ReceivePension>(this.receivePension_DATA);

  receivePensionColumns: string[] = [
    'select', 'srno', 'ppoNo', 'pensionerName', 'oldTreasury', 'branch', 'bank', 'bankBranch', 'accountNo', 'auditor'
  ];
  // form controls
  auditorCtrl: FormControl = new FormControl();
  bankCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();
  stateCtrl: FormControl = new FormControl();
  auditorCTRL: FormControl = new FormControl();
  newTreasuryCtrl: FormControl = new FormControl();
  oldTreasuryCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();


  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.receivePensionCaseFormData();
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
        this.receivePensionCaseForm.patchValue({
          ppoNo: dataArray[0].ppoNo,
          firstName: dataArray[0].fName,
          middleName: dataArray[0].mName,
          lastName: dataArray[0].lName,
        });
      }
    });
  }

  receivePensionCaseFormData() {
    this.receivePensionCaseForm = this.fb.group({
      bankCode: [''],
      ppoNo: [''],
      auditor: [''],
      bank: [''],
      branch: [''],
      bankBranch: [''],
      state: [''],
      newTreasury: [''],
      oldTreasury: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      auditorName: ['']
    });
  } search() { }

}
