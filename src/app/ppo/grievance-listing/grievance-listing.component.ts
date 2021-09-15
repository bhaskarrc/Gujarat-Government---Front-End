import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PpoAutoFill, PpnoListInterface, GrievanceData } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { ListValue } from '../../model/treasury-bill';

@Component({
  selector: 'app-grievance-listing',
  templateUrl: './grievance-listing.component.html',
  styleUrls: ['./grievance-listing.component.css']
})
export class GrievanceListingComponent implements OnInit {
  // variables
  ppoNoCtrl: FormControl = new FormControl();
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  grievanceListingForm: FormGroup;
  maxDate = Date.now();

  // lists
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Open' },
    { value: '2', viewValue: 'Close' },
    { value: '3', viewValue: 'No Action Required' }
  ];

  // table data
  grievenceData: GrievanceData[] = [
    {
      registrationNo: '', ppoNo: 'DPP/P/004148', pensionerName: 'Indra Nooyi', mobile: '9428234266',
      reminder: '', feedback: '', status: 'Open', remarks: ''
    }
  ];

  grievenceColumn: string[] = [
    'position', 'ppoNo', 'pensionerName', 'mobile', 'reminder', 'feedback', 'status', 'action'
  ];
  grievenceDataSource = new MatTableDataSource(this.grievenceData);

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.grievanceListingFormData();
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
  grievanceListingFormData() {
    this.grievanceListingForm = this.fb.group({
      ppoNo: [''],
      fromDate: [''],
      toDate: ['']
    });
  }

}
