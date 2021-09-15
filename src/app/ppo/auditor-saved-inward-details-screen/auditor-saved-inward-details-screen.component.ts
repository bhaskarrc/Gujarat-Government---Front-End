import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';


@Component({
  selector: 'app-auditor-saved-inward-details-screen',
  templateUrl: './auditor-saved-inward-details-screen.component.html',
  styleUrls: ['./auditor-saved-inward-details-screen.component.css']
})
export class AuditorSavedInwardDetailsScreenComponent implements OnInit {
  constructor(private fb: FormBuilder, public dailog: MatDialog) { }
  // variables
  ppoNo_list: PpnoListInterface[] = [];
  ppoNoVal: string;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoData;
  todayDate = new Date();
  auditorSavedInwardDetails: FormGroup;
  solution_list: CommonListing[] = [];
  errMsg = ppoMessage;
  dataFromDailogComponent: PpoAutoFill[];

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  solutionCtrl: FormControl = new FormControl();

  ngOnInit() {

    this.auditorSavedInwardDetails = this.fb.group({
      ppoNo: [''],
      fName: [''],
      mName: [''],
      lName: [''],
      desc: [''],
      solution: [''],
      remarks: [''],

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

  workflowDetails() { }
  goToSavedBillList() { }
  onSubmit() { }
  resetForm() { }

}
