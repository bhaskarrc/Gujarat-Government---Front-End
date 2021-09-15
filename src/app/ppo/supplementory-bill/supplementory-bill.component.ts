import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PpnoListInterface, PpoAutoFill, SavedSupplementary } from 'src/app/model/ppo';
import { ListValue } from '../../model/treasury-bill';

@Component({
  selector: 'app-supplementory-bill',
  templateUrl: './supplementory-bill.component.html',
  styleUrls: ['./supplementory-bill.component.css']
})
export class SupplementoryBillComponent implements OnInit {
  // variables
  todayDate = new Date();
  supplemenatryBillComponentForm: FormGroup;
  isSearch: boolean;
  selectedBill: string;
  ppoData;
  optionCtrl = true;
  ppoNoVal: string;
  ppoNo_list: PpnoListInterface[] = [];
  filteredppoNo: Observable<PpnoListInterface[]>;
  dataFromDailogComponent: PpoAutoFill[];


  // form controls
  supplementaryPaymentModeCtrl: FormControl = new FormControl();
  supplementaryBillTypeCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();

  supplementaryPaymentMode_list: ListValue[] = [
    { value: '1', viewValue: 'Party (Cheque)' },
  ];

  supplementaryBillType_list: ListValue[] = [
    { value: '1', viewValue: 'Pension' },
    { value: '2', viewValue: 'CVP' },
  ];

  // table data
  savedSupplementaryRequests_DATA: SavedSupplementary[] = [
    {
      ppoNo: '', partyName: '', billType: '', paymentMode: '', totalDifferenceAmount: '',
      grossAmount: '', deductionAmount: '', netAmount: '', status: ''
    },
  ];

  savedSupplementaryColumn: string[] = [
    'select', 'srno', 'ppoNo', 'partyName', 'billType', 'paymentMode', 'totalDifferenceAmount', 'grossAmount',
    'deductionAmount', 'netAmount', 'status'
  ];
  savedSupplementaryDataSource = new MatTableDataSource<SavedSupplementary>(this.savedSupplementaryRequests_DATA);

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.supplemenatryBillComponentFormData();
    this.optionCtrl = true;
    this.ppoNoVal = 'PPO No.';
    this.supplemenatryBillComponentForm = this.fb.group({
      supplementaryPaymentMode: [],
      supplementaryBillType: [],
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
  sendPPOData(data) {
    this.ppoData = data;
  }
  displayFn(ppoNo_list: PpnoListInterface): string {
    return ppoNo_list && ppoNo_list.ppoNo ? ppoNo_list.ppoNo : '';
  }

  supplemenatryBillComponentFormData() {
    this.supplemenatryBillComponentForm = this.fb.group({
      supplementaryPaymentMode: ['1'],
      supplementaryBillType: [''],
    });
  }



  // selects bill
  selectBill(data) {
    switch (data.value) {
      case '1': { this.selectedBill = 'supplementary-bill-pension'; break; }
      case '2': { this.selectedBill = 'supplementary-bill-cvp'; break; }
      case '3': { this.selectedBill = 'supplementary-bill-dcrg'; break; }
      default: { this.selectedBill = 'none'; }
    }
  }

  search() {
    this.isSearch = false;
  }

  // routing
  goToArrearScreen() {
    this.router.navigate(['/ppo/pension-detail/revised-arrear-calculation']);
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
