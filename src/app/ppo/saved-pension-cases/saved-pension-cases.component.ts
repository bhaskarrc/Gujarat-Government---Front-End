import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs';
import { PpnoListInterface, PpoAutoFill, SavedPension } from 'src/app/model/ppo';
import { map, startWith } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-saved-pension-cases',
  templateUrl: './saved-pension-cases.component.html',
  styleUrls: ['./saved-pension-cases.component.css']
})
export class SavedPensionCasesComponent implements OnInit {
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  savedPensioCasesForm: FormGroup;
  directiveObj = new CommonDirective(this.router);

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  pensionCaseCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

  pensionType_list: ListValue[] = [
    { value: '1', viewValue: 'Final' },
    { value: '2', viewValue: 'Provisional' }
  ];
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved' },
    { value: '2', viewValue: 'Forwarded to Verifier' },
    { value: '3', viewValue: 'Forwarded to Approver' },
    { value: '4', viewValue: 'Approved' },
  ];

  headCode_list: ListValue[] = [
    { value: '1', viewValue: '1: 2071 Pension And Other Retirement Benefits To Civil Pensioner' },
    { value: '2', viewValue: '2: 2071 Pension And Other Retirement Benefits To Civil, Family Pensioner' },
    { value: '3', viewValue: '3: 2071 Pension And Other Retirement Benefits To Family Pensioner' },
    { value: '4', viewValue: '4: 2071 Pension And Other Retirement Benefits To School & College Pensioner' },
    { value: '5', viewValue: '5: 2071 Provisional Pension To School And College Pensioner' },
    { value: '6', viewValue: '6: 2071 Provisional Pension To Civil Pensioner' },
    { value: '7', viewValue: '7: 2071 Provisional Pension To Civil Family Pensioner' },
    { value: '8', viewValue: '8: 2071 Pension And Other Retirement Benefits Civil Pensioner Fixed Pension' },
    { value: '9', viewValue: '9: 2071 Pension Old Pensioner' },
    { value: '10', viewValue: '10: 2071 Pension State Pensioner' },
    { value: '11', viewValue: '11: 2071 Pension To Primary Teachers' },
    { value: '12', viewValue: '12: 2071 Family Pension To Primary Teachers' },
    { value: '13', viewValue: '13: 2071 Pension To Panchayat Employees' },
    { value: '14', viewValue: '14: 2071 Family Pension To Panchayat Employees' },
    { value: '15', viewValue: '15: 2071 Pension Fixed To Panchayat Employees' },
  ];
  // table data
  SavedPension_DATA: SavedPension[] = [
    {
      ppoNo: 'PR-1/05/2016/277322', name: 'Rahul Patel', pensionCaseType: 'Final',
      inwardDate: '29-May-2018', commencementDate: '02-Jun-2016'
    },
    {
      ppoNo: 'PR-1/05/2016/277320', name: 'Vijay Shah', pensionCaseType: 'Final',
      inwardDate: '21-Aug-2017', commencementDate: '15-Mar-2015'
    },
    {
      ppoNo: 'PR-1/05/2016/277321', name: 'Jigar Patel', pensionCaseType: 'Provisional',
      inwardDate: '02-Nov-2016', commencementDate: '22-Sep-2014'
    }
  ];

  savedPensionColumns: string[] = [
    'select', 'srno', 'ppoNo', 'name', 'pensionCaseType', 'inwardDate', 'commencementDate', 'action'
  ];

  savedPensionDataSource = new MatTableDataSource<SavedPension>(this.SavedPension_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.savedPensioCasesFormData();

    this.savedPensionDataSource.sort = this.sort;
    this.savedPensionDataSource.paginator = this.paginator;

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

  savedPensioCasesFormData() {
    this.savedPensioCasesForm = this.fb.group({
      ppoNo: [''],
      pensionCaseType: [''],
      headCode: [''],
      firstName: [''],
      middleName: [''],
      lastName: ['']
    });
  }

  search() {
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
