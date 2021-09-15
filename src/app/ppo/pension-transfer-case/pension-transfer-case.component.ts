import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { PpnoListInterface, PpoAutoFill, PensionerTransferData } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { ListValue } from '../../model/treasury-bill';

@Component({
  selector: 'app-pension-transfer-case',
  templateUrl: './pension-transfer-case.component.html',
  styleUrls: ['./pension-transfer-case.component.css']
})
export class PensionTransferCaseComponent implements OnInit {
  // variables
  pensionTransferCaseForm: FormGroup;
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  todayDate = Date.now();
  directiveObj = new CommonDirective(this.router);

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  newTreasuryCTRL: FormControl = new FormControl();

  // lists
  treasury_list: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office, Arvalli' },
    { value: '2', viewValue: 'District Treasury Office, Mahisagar' },
    { value: '3', viewValue: 'District Treasury Office, Vadodara' },
    { value: '4', viewValue: 'District Treasury Office, Godhra' }
  ];

  // table data
  pensionTransfer_DATA: PensionerTransferData[] = [
    {
      ppoNo: 'PR-1/05/2016/277322',
      name: 'Rahul Patel',
      accountNo: '745213654789877',
      state: 'Gujarat',
      oldTreasury: 'District Treasury Office, Arvalli'
    },
    {
      ppoNo: 'PR-1/05/2016/277320',
      name: 'Vijay Shah',
      accountNo: '85523658987412',
      state: 'Gujarat',
      oldTreasury: 'District Treasury Office, Arvalli'
    },
    {
      ppoNo: 'PR-1/05/2016/277321',
      name: 'Jigar Patel',
      accountNo: '154793654782126',
      state: 'Gujarat',
      oldTreasury: 'District Treasury Office, Arvalli'
    }
  ];

  pensionTransferColumns: string[] = [
    'select',
    'ppoNo',
    'name',
    'accountNo',
    'state',
    'oldTreasury'
  ];

  pensionTransferDataSource = new MatTableDataSource<PensionerTransferData>(
    this.pensionTransfer_DATA
  );

  constructor(private fb: FormBuilder, public dialog: MatDialog, private dialogRef: MatDialog, private router: Router) { }

  ngOnInit() {
    this.pensionTransferCaseFormData();

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

  pensionTransferCaseFormData() {
    this.pensionTransferCaseForm = this.fb.group({
      ppoNo: [''],
      newTreasury: [''],
      accountNo: ['']
    });
  }
  // ppo no related methods
  private _filter(ppoNo: string): PpnoListInterface[] {
    const filterValue = ppoNo;

    return this.ppoNo_list.filter(option => option.ppoNo.indexOf(filterValue) === 0);
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
