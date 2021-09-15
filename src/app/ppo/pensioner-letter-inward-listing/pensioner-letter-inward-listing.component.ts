import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Element_DataInDailog, PpoDialogBoxComponent } from '../ppo-dialog-box/ppo-dialog-box.component';
import { PpnoListInterface, PpoAutoFill, PensionerDetail } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatDialog, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pensioner-letter-inward-listing',
  templateUrl: './pensioner-letter-inward-listing.component.html',
  styleUrls: ['./pensioner-letter-inward-listing.component.css']
})
export class PensionerLetterInwardListingComponent implements OnInit {
  // variables
  pensionerListingForm: FormGroup;
  ppoNoVal: string;
  ppoNo_list: PpnoListInterface[] = [];
  ppoData;
  optionCtrl = true;
  dataFromDailogComponent: PpoAutoFill[];
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoCtrl: FormControl = new FormControl();

  // table data
  columns: string[] = ['position', 'refNo', 'refDate', 'ppoNo', 'name', 'accNo', 'retirementDate', 'action'];
  Element_Data: PensionerDetail[] = [{
    refNo: '1231242', refDate: '2-Aug-2020', ppoNo: '2134234', name: 'S R Mishra', accNo: '1342342345', retirementDate: '3-Jul-2055'
  }
  ];
  dataSource = new MatTableDataSource<PensionerDetail>(this.Element_Data);

  constructor(public fb: FormBuilder, public dialogRef: MatDialog, public dailog: MatDialog) { }

  ngOnInit() {
    this.pensionerListingForm = this.fb.group({
      ppoNo: [''],
      accNo: [''],
      date: ['']
    });
    this.ppoNoVal = 'PPO No.';
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
  sendPPOData(data) {
    this.ppoData = data;
  }
  displayFn(ppoNo_list: PpnoListInterface): string {
    return ppoNo_list && ppoNo_list.ppoNo ? ppoNo_list.ppoNo : '';
  }
  private _filter(ppoNo: string): PpnoListInterface[] {
    const filterValue = ppoNo;
    return this.ppoNo_list.filter(option => option.ppoNo.includes(filterValue));
  }
  // opens dialog and selects ppo no
  openPPODialog() {
    this.optionCtrl = false;
    if (this.ppoData == null || this.ppoData === undefined || this.ppoData === '') {
      this.ppoData = 'Please Provide PPO No.';
    }
    const dailogRef = this.dailog.open(PpoDialogBoxComponent,
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
