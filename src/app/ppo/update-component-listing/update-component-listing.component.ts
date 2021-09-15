import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PpnoListInterface, UpdateComponentListing, PpoAutoFill } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-update-component-listing',
  templateUrl: './update-component-listing.component.html',
  styleUrls: ['./update-component-listing.component.css']
})
export class UpdateComponentListingComponent implements OnInit {

  // variables
  optionCtrl = true;
  RecoverySearchForm: FormGroup;
  ppoNoVal: string;
  ppoNo_list: PpnoListInterface[] = [];
  ppoData;
  dataFromDailogComponent: PpoAutoFill[];
  filteredppoNo: Observable<PpnoListInterface[]>;
  directiveObj = new CommonDirective(this.router);

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  payComponentCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

  // table data
  Element_Data: UpdateComponentListing[] = [
    {
      ppoNo: 'ppo1', pensionerName: 'Pratik K', effectiveDate: '12-Aug-2000', refNo: '19-20/PPO/APC/001',
      refdate: '12-Aug-2000', payComponent: 'Pension Cut'
    },
    {
      ppoNo: 'ppo2', pensionerName: 'M P Patel', effectiveDate: '13-Jun-2015', refNo: '19-20/PPO/APC/002',
      refdate: '12-Aug-2000', payComponent: 'Pension Cut'
    }
  ];

  columns: string[] = ['select',
    'srno', 'refNo', 'refdate', 'ppoNo', 'pensionerName', 'effectiveDate', 'payComponent', 'action'];
  dataSource = new MatTableDataSource<UpdateComponentListing>(this.Element_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // lists
  pay_list: ListValue[] = [
    { value: '1', viewValue: 'Pension Cut' },
    { value: '2', viewValue: 'Other Cut' },
    { value: '3', viewValue: 'Special Cut' },

  ];
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved' },
    { value: '2', viewValue: 'Forwarded to Verifier' },
    { value: '3', viewValue: 'Forwarded to Approver' },
    { value: '4', viewValue: 'Approved' },
  ];

  constructor(private fb: FormBuilder, public dialogRef: MatDialog, private router: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.optionCtrl = true;
    this.ppoNoVal = 'PPO No.';
    this.RecoverySearchForm = this.fb.group({
      ppoNo: [''],
      payComponent: [''],
      effectiveDate: [''],
      refNo: [''],
      status: ['']
    });

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
    return this.ppoNo_list.filter(option => option.ppoNo.indexOf(filterValue) === 0);
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
}
