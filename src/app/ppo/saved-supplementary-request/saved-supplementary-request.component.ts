import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { PpoAutoFill, PpnoListInterface, SavedSupplementaryRequestTable } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { CommonListing } from 'src/app/model/common-listing';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { PpoDirectives } from 'src/app/common/directive/ppo';


@Component({
  selector: 'app-saved-supplementary-request',
  templateUrl: './saved-supplementary-request.component.html',
  styleUrls: ['./saved-supplementary-request.component.css']
})
export class SavedSupplementaryRequestComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  todayDate = new Date();
  dataFromDailogComponent: PpoAutoFill[];
  directiveObj = new CommonDirective(this.router);
  ppoNo_list: PpnoListInterface[] = [];
  directiveObject = new PpoDirectives(this.dialogRef);

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  savedSupplementaryRequest: FormGroup;
  bankNameCtrl: FormControl = new FormControl();
  branchNameCtrl: FormControl = new FormControl();
  statusNameCtrl: FormControl = new FormControl();
  // lists
  bankName_list: CommonListing[] = [
    { value: '1', viewValue: 'ICICI Bank' },
    { value: '2', viewValue: 'HDFC Bank' },
    { value: '3', viewValue: 'AXIS Bank' }
  ];

  branchName_list: CommonListing[] = [
    { value: '1', viewValue: 'Vadodara' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Surat' }
  ];
  statusName_list: CommonListing[] = [
    { value: '1', viewValue: 'Approved' },
    { value: '2', viewValue: 'Rejected' },
    { value: '3', viewValue: 'Archived' }
  ];
  // table data
  Element_Data: SavedSupplementaryRequestTable[] = [
    {
      ppoNo: 'PR-1/05/2016/277322', billType: 'Pension', partyName: 'ABC',
      grossAmount: '1200.00', recoveryAmount: '100.00', netAmount: '1100.00'
    },
    {
      ppoNo: 'PR-1/05/2016/277323', billType: 'DCRG', partyName: 'DEF',
      grossAmount: '1200.00', recoveryAmount: '100.00', netAmount: '1100.00'
    }
  ];

  dataSource = new MatTableDataSource<SavedSupplementaryRequestTable>(this.Element_Data);
  displayedColumns = [
    'checkbox', 'srno', 'ppoNo', 'partyName', 'billType', 'grossAmount', 'recoveryAmount', 'netAmount', 'action'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // ppo no reated methods
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

  ngOnInit() {
    this.savedSupplementaryRequest = this.fb.group({
      ppoNo: [''],
      bankBranchCode: [''],
      bank: [''],
      branch: [''],
      status: ['']
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
  onSearch() { }
  resetForm() { }

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
