import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PpnoListInterface, PpoAutoFill, RecoveryDetail } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Element_DataInDailog, PpoDialogBoxComponent } from '../ppo-dialog-box/ppo-dialog-box.component';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-recovery-details-listing',
  templateUrl: './recovery-details-listing.component.html',
  styleUrls: ['./recovery-details-listing.component.css']
})
export class RecoveryDetailsListingComponent implements OnInit {

  // variables
  maxDate = new Date();
  optionCtrl = true;
  RecoverySearchForm: FormGroup;
  ppoNoVal: string;
  ppoNo_list: PpnoListInterface[] = [];
  ppoData;
  dataFromDailogComponent: PpoAutoFill[];
  filteredppoNo: Observable<PpnoListInterface[]>;
  directiveObj = new CommonDirective(this.router);

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  deathDateOfCtrl: FormControl = new FormControl();
  // table data
  recoveryDetailsData: RecoveryDetail[] = [
    {
      ppoNo: '', pensionerName: '', dateOfRetirement: '', deathDate: '', recoveryAmount: '', deathDateOfFiled: ''
    }
  ];

  recoveryDetailsDataColumns: string[] = [
    'srno', 'ppoNo', 'pensionerName', 'dateOfRetirement', 'deathDate', 'recoveryAmount', 'action'];
  recoveryDetailsDataSource = new MatTableDataSource<RecoveryDetail>(this.recoveryDetailsData);

  // lists
  deathDateOf_list: CommonListing[] = [
    { value: 'Pensioner', viewValue: 'Pensioner' },
    { value: 'FamilyMember', viewValue: 'Family' }
  ];


  constructor(private fb: FormBuilder, public dialogRef: MatDialog, private router: Router) { }

  ngOnInit() {
    this.optionCtrl = true;
    this.ppoNoVal = 'PPO No.';
    this.RecoverySearchForm = this.fb.group({
      ppoNo: [''],
      dor: [''],
      deathDateOf: [''],
      deadthDateFamilyMember: [''],
      deadthDatePensinor: ['']
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
