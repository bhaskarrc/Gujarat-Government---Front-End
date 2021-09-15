import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { PpnoListInterface, PpoAutoFill, AuditMRTable, Update, HeaderJson } from 'src/app/model/ppo';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { ListValue } from 'src/app/model/common-grant';
import { Router } from '@angular/router';

const ELEMENT_DATA: Update[] = [{
  duration: '',
  fromMonth: '',
  fromYear: '',
  toMonth: '',
  toYear: '',
  amount: '',
}];

@Component({
  selector: 'app-update-component-details',
  templateUrl: './update-component-details.component.html',
  styleUrls: ['./update-component-details.component.css']
})
export class UpdateComponentDetailsComponent implements OnInit {

  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  todayDate = new Date();
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];

  // lists

  headerJson: HeaderJson[] = [
    { label: 'Pensioner Name', value: 'Govt Gazzeted' },
    { label: 'Head Code', value: '1: 2071 Pension And Other Retirement Benefits To Civil Pensioner' },
    { label: 'Retirement Date', value: '10-Feb-2020' },
    { label: 'Commencement Date', value: '20-Feb-2020' },
    { label: 'Pension Drawn', value: '009 Education' },
    { label: 'Last Paid Date', value: '30-Feb-2020' },
    { label: 'Duration', value: 'Permanent' },
    { label: 'From Date', value: '15-Jan-2020' },
    { label: 'To Date', value: '25-Feb-2020 ' },
    { label: 'Current amount', value: '500.00' },

  ];
  year_list: ListValue[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];
  month_list: ListValue[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },

  ];

  pay_list: ListValue[] = [
    { value: '1', viewValue: 'Pension Cut' },
    { value: '2', viewValue: 'Other Cut' },
    { value: '3', viewValue: 'Special Cut' },

  ];
  duration_list: ListValue[] = [
    { value: '1', viewValue: 'Temporary' },
    { value: '2', viewValue: 'Permanent' },

  ];



  arrearRecoverBy_list: ListValue[] = [
    { value: '1', viewValue: 'Arrear' },
    { value: '2', viewValue: 'Recovery' }];
  payRecoverBy_list: ListValue[] = [
    { value: '1', viewValue: 'Supplementary' },
    { value: '2', viewValue: 'Monthly' }
  ];
  partialFull_list: ListValue[] = [
    { value: '1', viewValue: 'Partial' },
    { value: '2', viewValue: 'Full' }];

  // Form Group
  updatePayment: FormGroup;
  // Control
  ppoNoCtrl: FormControl = new FormControl();
  arrearRecoverByCtrl: FormControl = new FormControl();
  payRecoverByCtrl: FormControl = new FormControl();
  partialFullCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  durationCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  paycompontnCtrl: FormControl = new FormControl();
  // Table Source
  Element_Data: AuditMRTable[] = [
    {
      inwardNo: '10055/012020/000002', refNo: '1', inwardDate: new Date('02/21/2020'),
      ppoNo: 'PR-5/12/2017/306989', pensionerName: 'JANAKKUMAR BHOGILAL PATEL',
      reimbursementAmount: '10000.00', auditorName: 'smt m p patel', grantedAmount: '0.00'
    },
    {
      inwardNo: '10055/082018/000005', refNo: '1', inwardDate: new Date('07/08/2018'),
      ppoNo: 'PR-1/01/2018/312673', pensionerName: 'HIREN BHALCHANDRA TRIVEDI ',
      reimbursementAmount: '1000.00', auditorName: 'smt m p patel', grantedAmount: '0.00'
    },
  ];
  newdisplayedColumns: string[] = ['duration', 'fromMonth', 'fromYear', 'toMonth', 'toYear', 'amount', 'action'];
  newdisplayedColumns2: string[] = ['fromMonth', 'fromYear', 'toMonth', 'toYear', 'amount', 'action'];
  dataSource = new MatTableDataSource<AuditMRTable>(this.Element_Data);
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  isTokentable = false;
  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.updatePaymentData();

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

  updatePaymentData() {
    this.updatePayment = this.fb.group({
      orderNo: [''],
      orderDate: [''],
      paycompontn: [''],
      effectiveDate: [''],
      ppoNo: [''],
      amt: [''],
      arrearRecovery: [''],
      payRecoverBy: [''],
      fullPartial: ['']
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

  // sets isTokentable value
  ontoken(index) {

    if (index.value === '2' || index.value === '1') {
      this.isTokentable = true;

    } else {
      this.isTokentable = false;
    }
  }

  // adds enw row
  addRow() {
    if (this.newdataSource) {
      this.newdataSource = new MatTableDataSource(ELEMENT_DATA);
      const p_data = this.newdataSource.data;

      p_data.push({
        fromMonth: '',
        fromYear: '',
        toMonth: '',
        toyear: '',
        amt: '',
        duartion: ''
      });
      this.newdataSource.data = p_data;
    }

  }

  goToListing() {
    this.router.navigate(['/ppo/update-component-listing']);
  }
}
