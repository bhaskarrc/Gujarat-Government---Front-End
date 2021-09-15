import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { PpoAutoFill, PpnoListInterface, InwardMrData } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-inward-mr-request',
  templateUrl: './inward-mr-request.component.html',
  styleUrls: ['./inward-mr-request.component.css']
})
export class InwardMrRequestComponent implements OnInit {
  // list
  paymentMode_list: ListValue[] = [
    { value: '1', viewValue: 'Bank Payment Scheme' },
    { value: '2', viewValue: 'Counter' },
    { value: '3', viewValue: 'Money Order Scheme' }
  ];

  medicalAllowance_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  status_list: ListValue[] = [
    { value: '1', viewValue: 'Pending' },
    { value: '2', viewValue: 'Approved' },
    { value: '2', viewValue: 'Rejected' }
  ];

  // table data
  inwardMRDATA: InwardMrData[] = [
    { inwardNo: '', reimbursementAmount: '', grantedAmount: '', inwardDate: '', status: '' }
  ];

  inwardMRColumns: string[] = [
    'select', 'srno', 'inwardNo', 'reimbursementAmount', 'grantedAmount', 'inwardDate', 'status'
  ];
  inwardMRRequestDataSource = new MatTableDataSource<any>(this.inwardMRDATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // form controls
  paymentModeCtrl: FormControl = new FormControl();
  medicalAllowanceCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();

  // variables
  inwardMRRequstForm: FormGroup;
  ppoData;
  todayDate = new Date();
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  directiveObj = new CommonDirective(this.router);
  directiveObject = new PpoDirectives(this.dialog);

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.inwardMRRequestDataSource.sort = this.sort;
    this.inwardMRRequestDataSource.paginator = this.paginator;
    this.inwardMRRequstFormData();
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

  inwardMRRequstFormData() {
    this.inwardMRRequstForm = this.fb.group({
      financialYear: [''],
      inwardDate: [''],
      inwardNo: [''],
      ppoNo: [''],
      nameOfPensioner: [''],
      bankCode: [''],
      branch: [''],
      paymentMode: ['1'],
      headCode: [''],
      medicalAllowance: ['1'],
      reimbursementAmount: [''],
      auditorName: [''],
      medicalAllowanceAmount: [''],
      status: ['']
    });
  }

  reset() {
    this.inwardMRRequstForm.patchValue({
      financialYear: '2019-2020',
      inwardDate: this.todayDate,
      inwardNo: '10055/032020/000003',
      ppoNo: '',
      nameOfPensioner: '',
      bankCode: '',
      branch: '',
      paymentMode: '1',
      headCode: '',
      medicalAllowance: '1',
      reimbursementAmount: '0.00',
      auditorName: '',
      medicalAllowanceAmount: '',
      status: ''
    });
  }

}
