import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { ListValue } from '../../model/treasury-bill';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-saved-mr-request',
  templateUrl: './saved-mr-request.component.html',
  styleUrls: ['./saved-mr-request.component.css']
})
export class SavedMrRequestComponent implements OnInit {

  // variables
  savedMRForm: FormGroup;
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  directiveObj = new CommonDirective(this.router);
  directiveObject = new PpoDirectives(this.dialog);

  // form controls
  statusCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();

  // table data
  savedMRDATA: any[] = [
    {
      inwardNo: '',
      refNo: '',
      inwardDate: '',
      ppoNo: '',
      pensionerName: '',
      reimbursementAmount: '',
      auditorName: '',

    }
  ];

  savedMRColumns: string[] = [
    'select',
    'srno',
    'inwardNo',
    'inwardDate',
    'ppoNo',
    'pensionerName',
    'reimbursementAmount',
    'auditorName',
  ];
  savedMRDataSource = new MatTableDataSource<any>(this.savedMRDATA);

  // lists
  auditor_list: ListValue[] = [
    {
      value: '1',
      viewValue: 'Shri. Pratik Shah'
    }
  ];

  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved' },
    { value: '2', viewValue: 'Forwarded to Verifier' },
    { value: '3', viewValue: 'Forwarded to Approver' },
    { value: '4', viewValue: 'Approved' },
  ];
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog, private router: Router) { }


  ngOnInit() {
    this.savedMRFormData();
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

  savedMRFormData() {
    this.savedMRForm = this.fb.group({
      referenceNo: [''],
      inwardNo: [''],
      inwardDate: [''],
      ppoNo: [''],
      reimbursementAmount: [''],
      grantedAmount: [''],
      auditorName: [''],
      auditorname: [''],
      status: ['']
    });
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


  search() { }

}
