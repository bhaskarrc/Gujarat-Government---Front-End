import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { PpoAutoFill, PpnoListInterface, ApprovedFpCases } from 'src/app/model/ppo';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';


@Component({
  selector: 'app-approved-fp-cases',
  templateUrl: './approved-fp-cases.component.html',
  styleUrls: ['./approved-fp-cases.component.css']
})
export class ApprovedFpCasesComponent implements OnInit {
  // variables
  provisionalCasesForm: FormGroup;
  errorMessage = ppoMessage;
  isSearch: boolean;
  selection = new SelectionModel<any>(true, []);
  todayDate = new Date();
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  directiveObj = new CommonDirective(this.router);
  ppoNo_list: PpnoListInterface[] = [];

  // form controls
  statusCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();

  // lists
  status_list: any = [
    { value: '1', viewValue: 'Continue' },
    { value: '2', viewValue: 'Close' },
    { value: '3', viewValue: 'Withheld' }
  ];

  // table data
  approvedFP_DATA: ApprovedFpCases[] = [
    { ppoNo: '', name: '', caseType: '', inwardDate: '', commenecementDate: '' }
  ]
    ;

  approvedFPColumn: string[] = [
    'select', 'srno', 'ppoNo', 'name', 'caseType', 'inwardDate', 'commenecementDate'
  ];

  approvedFPDataSource = new MatTableDataSource<any>(this.approvedFP_DATA);

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.provisionalCasesFormData();

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
  provisionalCasesFormData() {
    this.provisionalCasesForm = this.fb.group({
      status: [''],
      ppoNo: [''],
      inwardDate: [''],
      commenecementDate: [''],
      bankCode: [''],
      headCode: [''],
      accountNo: ['']
    });
  }

  // opens ppo no dialog box
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

  // on search button
  search() {
    this.isSearch = false;
  }

}
