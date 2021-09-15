import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PpnoListInterface, PpoAutoFill, PensionerSeen } from 'src/app/model/ppo';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';


@Component({
  selector: 'app-jeevan-praman-pensioner-seen-details',
  templateUrl: './jeevan-praman-pensioner-seen-details.component.html',
  styleUrls: ['./jeevan-praman-pensioner-seen-details.component.css']
})
export class JeevanPramanPensionerSeenDetailsComponent implements OnInit {
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  jeevanPramanForm: FormGroup;
  directiveObj = new CommonDirective(this.router);
  // form controls
  headCodeCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();
  forwardToCtrl: FormControl = new FormControl();
  pensionCaseCtrl: FormControl = new FormControl();


  //  table data
  PensionerSeen_DATA: PensionerSeen[] = [
    {
      pramanId: '335455345', date: '29-Apr-2018', ppoNo: 'DPP/P/123', name: 'Rahul Patel', seenDate: '29/05/2018',
      seenFlag: 'Yes', accountNo: '123456789456123', branchCode: '', auditorName: 'M R Dravid',
      remarks: '', reEmployeementStatus: 'No', reMerit: 'No'
    },
    {
      pramanId: '335474582', date: '29-Apr-2018', ppoNo: 'DPP/P/124', name: 'Vijay Shah', seenDate: '29/05/2018',
      seenFlag: 'Yes', accountNo: '784511255455889', branchCode: '', auditorName: 'P K Verma', remarks: '',
      reEmployeementStatus: 'No', reMerit: 'No'
    },
    {
      pramanId: '335497263', date: '29-Apr-2018', ppoNo: 'DPP/P/125', name: 'Jigar Patel', seenDate: '29/05/2018',
      seenFlag: 'Yes', accountNo: '368784621689878', branchCode: '', auditorName: 'S R Patel', remarks: ''
      , reEmployeementStatus: 'No', reMerit: 'No'
    }
  ];

  pensionSeenColumns: string[] = [
    'select', 'srno', 'pramanId', 'date', 'ppoNo', 'name', 'seenDate', 'seenFlag',
    'reEmployeementStatus', 'reMerit', 'accountNo', 'branchCode', 'auditorName'
  ];
  pensionSeenDataSource = new MatTableDataSource<any>(this.PensionerSeen_DATA);

  // lists
  pensionType_list: ListValue[] = [
    { value: '1', viewValue: 'Final' },
    { value: '2', viewValue: 'Provisional' }
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

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router
  ) { }

  ngOnInit() {
    this.jeevanPramanFormData();

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

  jeevanPramanFormData() {
    this.jeevanPramanForm = this.fb.group({
      forwardTo: [''],
      ppoNo: [''],
      pensionCaseType: [''],
      accountNo: [''],
      ledgerNo: [''],
      pageNo: [''],
      pramanId: [''],
      fromDate: [''],
      toDate: [''],
      headCode: [''],
    });
  }

  // ppono related methods
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



}
