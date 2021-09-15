import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PpnoListInterface, PpoAutoFill, DaDifference } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { ListValue } from '../../model/treasury-bill';


@Component({
  selector: 'app-da-difference-listing',
  templateUrl: './da-difference-listing.component.html',
  styleUrls: ['./da-difference-listing.component.css']
})

export class DaDifferenceListingComponent implements OnInit {
  // variables
  daDifferenceListingForm: FormGroup;
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  directiveObj = new CommonDirective(this.router);

  // form controls
  branchCTRL: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();

  // lists
  branchList: ListValue[] = [
    { value: '1', viewValue: 'ABC' }
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
  daDifferenceData: DaDifference[] = [
    { ppoNo: '', name: '', commencementDate: '', bank: '', paidAmount: '', status: '' }
  ];

  daDifferenceDataColumn: string[] = [
    'select', 'srno', 'ppoNo', 'name', 'commencementDate', 'bank', 'paidAmount', 'status', 'action'
  ];
  daDifferenceDataSource = new MatTableDataSource<DaDifference>(this.daDifferenceData);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }

  ngOnInit() {
    this.daDifferenceListingFormData();

    this.daDifferenceDataSource.sort = this.sort;
    this.daDifferenceDataSource.paginator = this.paginator;
  }

  daDifferenceListingFormData() {
    this.daDifferenceListingForm = this.fb.group({
      inwardFronDate: [''],
      branchCode: [''],
      inwardToDate: [''],
      headCode: [''],
      retirementDate: ['']
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
  // ppo no related method
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
  goToEdit() {
    this.router.navigate(['/ppo/pension-detail/supplementary-bill/supplementary-bill-dcrg']);
  }
  onSearch() { }
  clearForm() { }
}
