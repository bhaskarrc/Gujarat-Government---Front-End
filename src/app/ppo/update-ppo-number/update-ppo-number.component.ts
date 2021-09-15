import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { ListValue } from '../../model/treasury-bill';

@Component({
  selector: 'app-update-ppo-number',
  templateUrl: './update-ppo-number.component.html',
  styleUrls: ['./update-ppo-number.component.css']
})
export class UpdatePpoNumberComponent implements OnInit {
  // lists
  pensionClass_list: ListValue[] = [
    { value: '1', viewValue: 'Final' },
    { value: '2', viewValue: 'Provisional' }
  ];

  fpPensionMonthly_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  // variables
  todayDate = new Date();
  updatePPONumberForm: FormGroup;
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  name = '';
  ppoNo_list: PpnoListInterface[] = [];
  // form controls
  pensionClassCtrl: FormControl = new FormControl;
  fpPensionMonthlyCtrl: FormControl = new FormControl;
  ppoNoCtrl: FormControl = new FormControl();

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.updatePPONumberFormData();
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
    this.name = 'S R Mishra';
    return ppoNo_list && ppoNo_list.ppoNo ? ppoNo_list.ppoNo : '';
  }
  sendPPOData(data) {
    this.name = 'S R Mishra';
    this.ppoData = data;
  }

  updatePPONumberFormData() {
    this.updatePPONumberForm = this.fb.group({
      oldPPONo: [''],
      newPPONo: [''],
      pensionClass: [''],
      name: ['']
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
        this.name = dataArray[0].fName + ' ' + dataArray[0].mName + ' ' + dataArray[0].lName;
      }
    });
  }

}
