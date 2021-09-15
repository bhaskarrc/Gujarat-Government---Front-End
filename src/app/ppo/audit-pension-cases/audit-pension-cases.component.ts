import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { PpnoListInterface, PpoAutoFill, AuditCases } from 'src/app/model/ppo';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { ListValue } from '../../model/treasury-bill';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-audit-pension-cases',
  templateUrl: './audit-pension-cases.component.html',
  styleUrls: ['./audit-pension-cases.component.css']
})
export class AuditPensionCasesComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  directiveObj = new CommonDirective(this.router);
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  auditPensionForm: FormGroup;
  errMsg = ppoMessage;
  directiveObject = new PpoDirectives(this.dialogRef);

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();
  pensionCaseTypeCtrl: FormControl = new FormControl();
  bankBranchCtrl: FormControl = new FormControl();
  auditorCtrl: FormControl = new FormControl();

  // lists
  pensionCaseType_list: CommonListing[] = [
    { value: 'Final', viewValue: 'Final' },
    { value: 'Provisional', viewValue: 'Provisional' }
  ];

  bankBranch_list: CommonListing[] = [
    { value: '1', viewValue: 'State Bank of India CHARADA' },
  ];


  auditor_list: CommonListing[] = [
    { value: '1', viewValue: 'M.P. Patel' },
  ];

  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved' },
    { value: '2', viewValue: 'Forwarded to Verifier' },
    { value: '3', viewValue: 'Forwarded to Approver' },
    { value: '4', viewValue: 'Approved' },
  ];

  headCodeType: ListValue[] = [
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
  Element_Data: AuditCases[] = [
    {
      ppoNo: 'L/SRN/PT/000481', name: 'SMT SHARDABEN M PATEL', pensionCaseType: 'Final',
      inwardDate: new Date('11/29/2008'), commencementDate: new Date('01/06/1997'),
      caseStatus: 'Approved', auditorName: 'm p patel', ledgerNo: '', pageNo: ''
    },
    {
      ppoNo: 'G/FPS/062981', name: 'LATE SHRI A R THAKAR . ', pensionCaseType: 'Final ',
      inwardDate: new Date('11/29/2008'), commencementDate: new Date('01/02/1981'),
      caseStatus: 'Approved', auditorName: 'm p patel', ledgerNo: '', pageNo: ''
    },
    {
      ppoNo: 'DPP/P/049917', name: 'MOHANBHAI VISHANDAS JEEVNANI',
      pensionCaseType: 'Provisional', inwardDate: new Date('11/29/2008'),
      commencementDate: new Date('11/29/2008'), caseStatus: 'Approved', auditorName: 'm p patel',
      ledgerNo: '', pageNo: ''
    },
  ];

  dataSource = new MatTableDataSource<AuditCases>(this.Element_Data);

  displayedColumns = [
    'checkbox', 'srno', 'ppoNo', 'name', 'pensionCaseType', 'inwardDate', 'commencementDate',
    'caseStatus', 'auditorName', 'ledgerNo', 'pageNo', 'action'
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.auditPensionForm = this.fb.group({
      ppoNo: [''],
      pensionCaseType: [''],
      inwardDate: [''],
      commencementDate: [''],
      bankCode: [''],
      accountNo: [''],
      bankBranch: [''],
      auditor: [''],
      retirementDate: [''],
      name: [''],
      adharCardNumber: [''],
      headCode: [''],
      status: [''],
      bankBranchCode: ['']
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

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
  // clears form
  clearForm() {
    this.auditPensionForm.reset();
    this.dataSource = new MatTableDataSource<AuditCases>(this.Element_Data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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




  resetForm() { }
  onSearch() { }

}
