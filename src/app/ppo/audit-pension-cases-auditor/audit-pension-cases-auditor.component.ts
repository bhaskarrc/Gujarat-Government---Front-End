import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { AuditCasesTbl, PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-audit-pension-cases-auditor',
  templateUrl: './audit-pension-cases-auditor.component.html',
  styleUrls: ['./audit-pension-cases-auditor.component.css']
})
export class AuditPensionCasesAuditorComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }
  // variables
  auditPensionForm: FormGroup;
  selection = new SelectionModel<AuditCasesTbl>(true, []);
  todayDate = new Date();
  directiveObj = new CommonDirective(this.router);
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];

  // form controls
  pensionCaseTypeCtrl: FormControl = new FormControl();
  bankBranchCtrl: FormControl = new FormControl();
  exactSearchCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();

  // lists
  pensionCaseType_list: CommonListing[] = [
    { value: 'Final', viewValue: 'Final' },
    { value: 'Provisional', viewValue: 'Provisional' }
  ];

  bankBranch_list: CommonListing[] = [
    { value: '1', viewValue: 'State Bank of India CHARADA' },
  ];

  exact_search: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  // table data
  Element_Data: AuditCasesTbl[] = [
    {
      ppoNo: 'L/SRN/PT/000481', name: 'SMT SHARDABEN M PATEL', pensionCaseType: 'Final',
      inwardDate: new Date('11/29/2008'), commencementDate: new Date('01/06/1997'),
      caseStatus: 'Approved', auditorName: 'm p patel', approvalAuthority: '', ledgerNo: '', pageNo: ''
    },
    {
      ppoNo: 'G/FPS/062981', name: 'LATE SHRI A R THAKAR . ', pensionCaseType: 'Final ',
      inwardDate: new Date('11/29/2008'), commencementDate: new Date('01/02/1981'),
      caseStatus: 'Approved', auditorName: 'Approved', approvalAuthority: '', ledgerNo: '', pageNo: ''
    },
    {
      ppoNo: 'DPP/P/049917', name: 'MOHANBHAI VISHANDAS JEEVNANI', pensionCaseType: 'Provisional',
      inwardDate: new Date('11/29/2008'), commencementDate: new Date('11/29/2008'),
      caseStatus: 'Approved', auditorName: 'Approved', approvalAuthority: '', ledgerNo: '', pageNo: ''
    },
  ];

  dataSource = new MatTableDataSource<AuditCasesTbl>(this.Element_Data);

  displayedColumns = [
    'checkbox', 'srno', 'ppoNo', 'name', 'pensionCaseType', 'inwardDate', 'commencementDate',
    'caseStatus', 'auditorName', 'approvalAuthority', 'ledgerNo', 'pageNo', 'action'
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
      exactSearch: [''],
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
  // clears from
  clearForm() {
    this.auditPensionForm.reset();
    this.dataSource = new MatTableDataSource<AuditCasesTbl>(this.Element_Data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSubmit() { }
  workflowDetails() { }
  resetForm() { }
  onSearch() { }

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
}
