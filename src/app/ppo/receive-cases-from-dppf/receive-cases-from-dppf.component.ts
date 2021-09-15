import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DppfTable, PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ListValue } from 'src/app/model/common-grant';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-receive-cases-from-dppf',
  templateUrl: './receive-cases-from-dppf.component.html',
  styleUrls: ['./receive-cases-from-dppf.component.css']
})
export class ReceiveCasesFromDppfComponent implements OnInit {
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  ppoForm: FormGroup;
  currentDate = Date.now();
  directiveObj = new CommonDirective(this.router);
  directiveObject = new PpoDirectives(this.dialogRef);

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  departmentCtrl: FormControl = new FormControl();
  caseTypeCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();
  // table data
  dataSource: MatTableDataSource<DppfTable>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = [
    'checkbox', 'srno', 'ppoNo', 'pensionerName', 'regNo', 'regDate', 'headCode', 'action'
  ];
  Element_Data: DppfTable[] = [
    { ppoNo: 'PPO_1', pensionerFName: 'Joel', pensionerMname: '', pensionerLname: 'Christian', caseType: 'Provisional' },
    { ppoNo: 'PPO_2', pensionerFName: 'Ravi', pensionerMname: '', pensionerLname: 'Akhouri', caseType: '' },
    { ppoNo: 'PPO_3', pensionerFName: 'Palak', pensionerMname: '', pensionerLname: 'Bharucha', caseType: 'Final' },
    { ppoNo: 'AMP/PT/356', pensionerFName: 'MR. A.B.', pensionerMname: '', pensionerLname: 'Sharma', caseType: '' },
  ];

  filterElement_Data: DppfTable[] = [];
  // lists
  caseType_list: CommonListing[] = [
    { value: 'Final', viewValue: 'Final' },
    { value: 'Provisional', viewValue: 'Provisional' }
  ];
  department_list: ListValue[] = [
    { value: '1', viewValue: 'Education Department' },
    { value: '1', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '2', viewValue: 'Industries and Mines Department' }
  ];
  headCode_list: CommonListing[] = [
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

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }

  ngOnInit() {
    this.ppoForm = this.fb.group({
      ppoNo: [''],
      caseType: [''],
      department: ['']
    });


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


    this.dataSource = new MatTableDataSource<DppfTable>(this.Element_Data);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // ppo no related data
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
    this.ppoForm.reset();
    this.dataSource = new MatTableDataSource<DppfTable>(this.Element_Data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSubmit() { }

  // search function
  searchCases() {
    const formValue = this.ppoForm.value;
    if (formValue.ppoNo !== '' && formValue.ppoNo != null) {
      this.filterByPPO_No(formValue);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    if (formValue.fname !== '' && formValue.fname != null) {
      this.filterByFName(formValue);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    if (formValue.mname !== '' && formValue.mname != null) {
      this.filterByMName(formValue);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    if (formValue.lname !== '' && formValue.lname != null) {
      this.filterByLName(formValue);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    if (formValue.caseType !== '' && formValue.caseType != null) {
      this.filterByCaseType(formValue);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    if ((formValue.ppoNo === '' || formValue.ppoNo == null) &&
      (formValue.fname === '' || formValue.fname == null) &&
      (formValue.lname === '' || formValue.lname == null) &&
      (formValue.mname === '' || formValue.mname == null) && (formValue.caseType === '' || formValue.caseType == null)) {
      this.dataSource = new MatTableDataSource<DppfTable>(this.Element_Data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }
  // filter data by ppo no
  filterByPPO_No(data) {
    if (!data) {
      this.filterElement_Data = this.Element_Data;
    } else {
      this.filterElement_Data = this.Element_Data.filter(searchPPO_No => searchPPO_No.ppoNo === data.ppoNo);
    }
    this.dataSource = new MatTableDataSource<DppfTable>(this.filterElement_Data);
  }
  // filter data by name
  filterByFName(data: any) {
    if (!data) {
      this.filterElement_Data = this.Element_Data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    } else {
      this.filterElement_Data = this.Element_Data.filter(searchFname => searchFname.pensionerFName === data.fname);
    }
    this.dataSource = new MatTableDataSource<DppfTable>(this.filterElement_Data);
  }
  // filter data by middle name
  filterByMName(data) {
    if (!data) {
      this.filterElement_Data = this.Element_Data;
    } else {
      this.filterElement_Data = this.Element_Data.filter(searchMname => searchMname.pensionerMname === data.mname);
    }
    this.dataSource = new MatTableDataSource<DppfTable>(this.filterElement_Data);
  }
  // filter data by last name
  filterByLName(data) {
    if (!data) {
      this.filterElement_Data = this.Element_Data;
    } else {
      this.filterElement_Data = this.Element_Data.filter(searchLname => searchLname.pensionerLname === data.lname);
    }
    this.dataSource = new MatTableDataSource<DppfTable>(this.filterElement_Data);
  }
  // filter data bycase
  filterByCaseType(data) {
    if (!data) {
      this.filterElement_Data = this.Element_Data;
    } else {
      this.filterElement_Data = this.Element_Data.filter(searchCaseType => searchCaseType.caseType === data.caseType);
    }
    this.dataSource = new MatTableDataSource<DppfTable>(this.filterElement_Data);
  }
  // deletes row
  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }


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
