import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { Observable } from 'rxjs';
import { PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { startWith, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';

@Component({
  selector: 'app-pension-payment-slip',
  templateUrl: './pension-payment-slip.component.html',
  styleUrls: ['./pension-payment-slip.component.css']
})
export class PensionPaymentSlipComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private dialogRef: MatDialog) { }
  // variables
  todayDate = new Date();
  searchForm: FormGroup;
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  // form controls
  monthCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();
  monthCTRL: FormControl = new FormControl();
  yearCTRL: FormControl = new FormControl();
  // lists
  month_list: CommonListing[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' }
  ];

  year_list: CommonListing[] = [
    { value: '1', viewValue: '2012' },
    { value: '2', viewValue: '2013' },
    { value: '3', viewValue: '2014' },
    { value: '4', viewValue: '2015' },
    { value: '5', viewValue: '2016' },
    { value: '6', viewValue: '2017' },
    { value: '7', viewValue: '2018' },
    { value: '8', viewValue: '2019' },
    { value: '9', viewValue: '2020' },
    { value: '10', viewValue: '2021' },
    { value: '11', viewValue: '2022' },
  ];

  ngOnInit() {
    this.searchForm = this.fb.group({
      month: ['4'],
      year: ['1'],
      ppoNo: ['DPPF/171474'],

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
  // routing
  goToPensionerDetails() {
    this.router.navigate(['/ppo/pensioner-details']);
  }
  clearForm() { }
}
