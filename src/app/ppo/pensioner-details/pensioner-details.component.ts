import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PensionerDetails, PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';

@Component({
  selector: 'app-pensioner-details',
  templateUrl: './pensioner-details.component.html',
  styleUrls: ['./pensioner-details.component.css']
})
export class PensionerDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private router: Router) { }
  // variables
  searchForm: FormGroup;
  ppoNoCtrl: FormControl = new FormControl();
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  todayDate = Date.now();
  directiveObj = new CommonDirective(this.router);
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];

  // table data
  Element_Data: PensionerDetails[] = [
    { ppoNo: 'DPP/P/004173', pensionerName: 'Kartik K', accountNo: '1122111121112', bankBranch: 'State Bank of India CHARADA' },
    { ppoNo: 'DPP/P/007119', pensionerName: 'Pratik K', accountNo: '1122111121112', bankBranch: 'State Bank of India CHARADA' },
    { ppoNo: 'DPP/P/001174', pensionerName: 'Pankaj Gupta', accountNo: '1122111121112', bankBranch: 'State Bank of India CHARADA' },
  ];

  dataSource: MatTableDataSource<PensionerDetails> = new MatTableDataSource<PensionerDetails>(this.Element_Data);
  displayedColumns = [
    'checkbox', 'srno', 'ppoNo', 'pensionerName', 'accountNo', 'bankBranch'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.searchForm = this.fb.group({
      ppoNo: [''],
      fname: [''],
      mname: [''],
      lname: [''],
      accountNo: [''],
      bankBranch: [''],
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

  clearForm() { }

  resetForm() { }

  // allows only alphabet and numbers as input
  alphabetNumberic(event: any) {
    const pattern = /^[a-zA-Z0-9/\s\r\n._]+$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
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

}
