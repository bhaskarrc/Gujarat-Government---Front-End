import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { PpoAutoFill, PpnoListInterface } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';

@Component({
  selector: 'app-grievance-registration-form',
  templateUrl: './grievance-registration-form.component.html',
  styleUrls: ['./grievance-registration-form.component.css']
})
export class GrievanceRegistrationFormComponent implements OnInit {
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  ppoNo_list: PpnoListInterface[] = [];
  grievanceRegistrationForm: FormGroup;
  errorMessage = ppoMessage;
  jeevanPramanForm: FormGroup;
  dataFromDailogComponent: PpoAutoFill[];

  // form control
  ppoNoCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  grievanceCtrl: FormControl = new FormControl();
  departmentListFromWhichRetiredCtrl: FormControl = new FormControl();
  nameOfTreasuryOfficeCtrl: FormControl = new FormControl();
  stateCtrl: FormControl = new FormControl();
  countryCtrl: FormControl = new FormControl();

  // lists
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  departmentListFromWhichRetired_list: ListValue[] = [
    { value: '1', viewValue: 'Department 1' },
    { value: '2', viewValue: 'Department 2' }
  ];

  nameOfTreasuryOffice_list: ListValue[] = [
    { value: '1', viewValue: 'Treasury List 1' },
    { value: '2', viewValue: 'Treasury List 2' }
  ];

  state_list: ListValue[] = [
    { value: '1', viewValue: 'Gujarat' },
    { value: '2', viewValue: 'Maharashtra' }
  ];

  country_list: ListValue[] = [
    { value: '1', viewValue: 'India' },
    { value: '2', viewValue: 'US' }
  ];

  grievance_list: ListValue[] = [
    { value: '1', viewValue: 'Pensioner related' },
    { value: '2', viewValue: 'Family pension related' }
  ];
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {

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
    this.grievanceRegistrationFormData();
  }

  grievanceRegistrationFormData() {
    this.grievanceRegistrationForm = this.fb.group({
      departnameNameFromWhichRetired: [''],
      nameOfTreasuryOffice: [''],
      pensionerName: [''],
      address: [''],
      pincode: [''],
      grievanceState: [''],
      grievanceCountry: [''],
      mobile: [''],
      phone: [''],
      email: ['', Validators.required, Validators.email],
      ppoNo: [''],
      grievanceDescription: [''],
      remarks: [''],
      classification: ['']
    });
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

}
