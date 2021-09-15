import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { PpoAutoFill, PpnoListInterface, ApprovedRejectedMRRequests } from 'src/app/model/ppo';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { ListValue } from '../../model/treasury-bill';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-approved-rejected-mr-requests',
  templateUrl: './approved-rejected-mr-requests.component.html',
  styleUrls: ['./approved-rejected-mr-requests.component.css']
})
export class ApprovedRejectedMrRequestsComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }

  // variables
  directiveObj = new CommonDirective(this.router);
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  rejectedApprovedMrRequests: FormGroup;
  errorMessages = ppoMessage;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  directiveObject = new PpoDirectives(this.dialogRef);

  // form controls
  auditorNameTypeCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();

  // lists
  auditorName_list: CommonListing[] = [
    { value: 1, viewValue: 'H H Metha' },
    { value: 2, viewValue: 'P P Patel' },
    { value: 3, viewValue: 'J H Shah' },
    { value: 4, viewValue: 'Pratik' },
    { value: 5, viewValue: 'Prerna' },
  ];

  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved' },
    { value: '2', viewValue: 'Forwarded to Verifier' },
    { value: '3', viewValue: 'Forwarded to Approver' },
    { value: '4', viewValue: 'Approved' },
  ];

  // table data
  Element_Data: ApprovedRejectedMRRequests[] = [
    {
      auditorName: 'HK Mehta', grantedAmount: '100.00', inwardDate: '12-Oct-2020',
      ppoNo: 'DPP/P/026325', inwardNo: '1081305/042019/0000041', namePensioner: 'Pratik',
      refNo: '1101', reimbursementAmount: '100.00', requestStatus: 'Approved'
    },
    {
      auditorName: 'M M Shah', grantedAmount: '1000.00', inwardDate: '13-Oct-2020',
      ppoNo: 'DPP/P/026326', inwardNo: '1081305/042019/0000042', namePensioner: 'Prerna',
      refNo: '2202', reimbursementAmount: '200.00', requestStatus: 'Rejected'
    },
    {
      auditorName: 'P P Patel', grantedAmount: '2002.10', inwardDate: '2-Feb-2002',
      ppoNo: 'DPP/P/026327', inwardNo: '1081305/042019/0000043', namePensioner: 'Priti',
      refNo: '3303', reimbursementAmount: '50.00', requestStatus: 'Approved'
    }
  ];
  dataSource = new MatTableDataSource<any>(this.Element_Data);

  displayedColumns: string[] = ['checkbox', 'srno', 'inwardNo', 'refNo', 'inwardDate', 'ppoNo',
    'namePensioner', 'reimbursementAmount', 'auditorName', 'grantedAmount', 'requestStatus', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

  searchRejectedApprovedMrRequests() {
    this.rejectedApprovedMrRequests = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      ppoNo: [''],
      status: [''],
      accountNo: ['']
    });
  }



  ngOnInit() {
    this.searchRejectedApprovedMrRequests();

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

}
