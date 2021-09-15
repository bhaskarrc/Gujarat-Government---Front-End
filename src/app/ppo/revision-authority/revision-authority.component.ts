import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { RevisionAuthTable, PpoAutoFill, PpnoListInterface } from 'src/app/model/ppo';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-revision-authority',
  templateUrl: './revision-authority.component.html',
  styleUrls: ['./revision-authority.component.css']
})
export class RevisionAuthorityComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }
  // form controls
  auditorCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();

  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  directiveObj = new CommonDirective(this.router);
  revisionForm: FormGroup;

  // lists
  auditor_list: CommonListing[] = [
    { value: 'M.P. Patel', viewValue: 'M.P. Patel' },
  ];

  // table data
  Element_Data: RevisionAuthTable[] = [
    {
      ppoNo: 'ppo1', fName: 'pratik', mName: '', lName: 'k', dateFromRevision: new Date('02/04/2020'),
      accNo: '111000191010', auditorName: 'm. p. patel'
    },
    {
      ppoNo: 'ppo2', fName: 'pratik', mName: '', lName: 'k', dateFromRevision: new Date('02/04/2020'),
      accNo: '111000191010', auditorName: 'm. p. patel'
    },
    {
      ppoNo: 'ppo3', fName: 'pratik', mName: '', lName: 'k', dateFromRevision: new Date('02/04/2020'),
      accNo: '111000191010', auditorName: 'm. p. patel'
    },
  ];

  displayedColumns = [
    'checkbox', 'srno', 'ppoNo', 'name', 'dateFromRevision', 'accNo', 'auditorName', 'action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<RevisionAuthTable>(this.Element_Data);
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
  onSubmit() { }
  resetForm() { }

  ngOnInit() {
    this.revisionForm = this.fb.group({
      ppoNo: [''],
      revisionDate: [''],
      accountNumber: [''],
      auditor: [''],
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
  goToRevisionAuthorityView() {
    this.router.navigate(['/ppo/revision-authority-view']);
  }
}

