import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { startWith, map } from 'rxjs/operators';
import { PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pension-letter-inward',
  templateUrl: './pension-letter-inward.component.html',
  styleUrls: ['./pension-letter-inward.component.css']
})
export class PensionLetterInwardComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, public router: Router) { }
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  todayDate = Date.now();
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  pensionLetterForm: FormGroup;
  errMsg = ppoMessage;
  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  auditorCtrl: FormControl = new FormControl();

  // lists
  auditor_list: CommonListing[] = [
    { value: '1', viewValue: 'M.P. Patel' },
  ];

  ngOnInit() {
    this.pensionLetterForm = this.fb.group({
      ppoNo: [''],
      fName: [''],
      mName: [''],
      lName: [''],
      date: [''],
      auditor: [''],
      desc: ['']
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

  // allows only alphabet and numbers as input
  alphabetNumberic(event: any) {
    const pattern = /^[a-zA-Z0-9/\s\r\n._]+$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
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

  clearForm() { }
  onSearch() { }
  workflowDetails() { }
  resetForm() { }

  // routing
  goToSavedBillList() {
    this.router.navigate(['../ppo/pensioner-letter-inward-listing']);
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
