import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { RecoveryDetails, PpoAutoFill, PpnoListInterface } from 'src/app/model/ppo';
import { Element_DataInDailog, PpoDialogBoxComponent } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-pensioner-recovery-details',
  templateUrl: './pensioner-recovery-details.component.html',
  styleUrls: ['./pensioner-recovery-details.component.css']
})
export class PensionerRecoveryDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }
  // variables
  todayDate = Date.now();
  pensionerRecoveryForm: FormGroup;
  optionCtrl = true;
  ppoNoVal: string;
  errMsg = ppoMessage;
  ppoData;
  filteredppoNo: Observable<PpnoListInterface[]>;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  directiveObject = new PpoDirectives(this.dialogRef);

  // form controls
  deathDateOfCtrl: FormControl = new FormControl();
  forwardToCtrl: FormControl = new FormControl();
  deductTypeCtrl: FormControl = new FormControl();
  recoveryThroughCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();
  familyCtrl: FormControl = new FormControl();

  // lists
  family_list: ListValue[] = [
    { value: '1', viewValue: '' }
  ];
  deductType_list: CommonListing[] = [
    { value: 'A', viewValue: 'A' },
    { value: 'B', viewValue: 'B' },
  ];
  recoveryThrough_list: CommonListing[] = [
    { value: 'Monthly', viewValue: 'Monthly' },
    { value: 'Cheque', viewValue: 'Cheque' },
    { value: 'Challan', viewValue: 'Challan' },
  ];

  forwardTo_list: CommonListing[] = [
    { value: '1', viewValue: 'm p patel' },
  ];

  deathDateOf_list: CommonListing[] = [
    { value: 'Pensioner', viewValue: 'Pensioner' },
    { value: 'FamilyMember', viewValue: 'Family' }
  ];
  // table data
  ElementData: RecoveryDetails[] = [
    {
      recoveryThrough: '', chequeChallanNo: '', chequeChallanDate: '', EDPCode: '',
      majorHead: '', subMajorHead: '', minorHead: '', subHead: '', deductType: '', amount: ''
    },
  ];

  ElementData1: RecoveryDetails[] = [
    {
      recoveryThrough: 'Challan', chequeChallanNo: '454545454',
      chequeChallanDate: '12/04/0219', EDPCode: '9999', majorHead: '0071',
      subMajorHead: '01', minorHead: '800', subHead: '01', deductType: 'A', amount: '5000.00'
    },
  ];

  recoveryDataSource = new MatTableDataSource<RecoveryDetails>(this.ElementData);
  recoveryColumn = ['position',
    'recoveryThrough', 'chequeChallanNo', 'chequeChallanDate', 'EDPCode', 'majorHead',
    'subMajorHead', 'minorHead', 'subHead', 'deductType', 'amount', 'action'
  ];

  alreadyRecoveredColumn = ['position',
    'recoveryThrough', 'chequeChallanNo', 'chequeChallanDate', 'EDPCode', 'majorHead',
    'subMajorHead', 'minorHead', 'subHead', 'deductType', 'amount'
  ];

  alreadyRecoveredDataSource = new MatTableDataSource<RecoveryDetails>(this.ElementData1);

  ngOnInit() {
    this.optionCtrl = true;
    this.ppoNoVal = 'PPO No.';
    this.pensionerRecoveryForm = this.fb.group({
      pensionerName: [''],
      bankAndBranch: [''],
      accountNumber: [''],
      pensionerExpiryDate: [''],
      totalAmountToBeRecovered: [''],
      amountRecovered: [''],
      balanceAmountToBeRecovered: [''],
      forwardTo: [''],
      pensionerFamilyExpiryDate: ['']
    });
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
  // adds new row
  addRecoveryDetailRow() {
    const push_data = this.recoveryDataSource.data;
    push_data.push({
      recoveryThrough: '',
      chequeChallanNo: '',
      chequeChallanDate: '',
      EDPCode: '',
      majorHead: '',
      subMajorHead: '',
      minorHead: '',
      subHead: '',
      deductType: '',
      amount: '',
    });
    this.recoveryDataSource.data = push_data;
  }

  // deletes row
  deleteRecoveryRow(index) {
    this.recoveryDataSource.data.splice(index, 1);
    this.recoveryDataSource = new MatTableDataSource(
      this.recoveryDataSource.data
    );
  }

  // calculates recovery amt
  totalRecoveryAmount(): number {
    let amount = 0;
    this.recoveryDataSource.data.forEach(element => {
      amount = amount + Number(element.amount);
    });
    return amount;
  }

  // routing
  goToRecoveryDetails() {
    this.router.navigate(['/ppo/recovery-details-listing']);
  }

  resetForm() { }
  onSubmit() { }


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
