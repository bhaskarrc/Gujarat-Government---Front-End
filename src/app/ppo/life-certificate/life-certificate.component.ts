import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';


@Component({
  selector: 'app-life-certificate',
  templateUrl: './life-certificate.component.html',
  styleUrls: ['./life-certificate.component.css']
})
export class LifeCertificateComponent implements OnInit {
  // variables
  todayDate = new Date();
  ppoNoVal: string;
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  lifeCertificate: FormGroup;
  errorMessages = ppoMessage;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  yearCTRL: FormControl = new FormControl();

  // lists
  year_list: ListValue[] = [
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

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }

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
    this.lifeCertificateData();

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

  lifeCertificateData() {
    this.lifeCertificate = this.fb.group({
      ppoNo: [''],
      accountNo: [''],
      year: ['']
    });

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
  goToReport() {
    this.router.navigate(['/ppo/life-certificate-report']);
  }
}
