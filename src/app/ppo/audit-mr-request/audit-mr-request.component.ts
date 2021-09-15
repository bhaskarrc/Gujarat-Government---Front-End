import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { PpnoListInterface, PpoAutoFill, AuditMRRequestTable } from 'src/app/model/ppo';
import { MedicalReimbursementDetailsComponent } from '../medical-reimbursement-details/medical-reimbursement-details.component';
import { Observable } from 'rxjs';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-audit-mr-request',
  templateUrl: './audit-mr-request.component.html',
  styleUrls: ['./audit-mr-request.component.css']
})
export class AuditMrRequestComponent implements OnInit {

  constructor(private fb: FormBuilder, private dailogRef: MatDialog, private dialogRef: MatDialog, private router: Router) { }
  // variables
  ppoData;
  optionCtrl = true;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNoVal: string;
  dataFromDailogComponent: PpoAutoFill[];
  ppoNo_list: PpnoListInterface[] = [];
  auditMRRequest: FormGroup;
  directiveObj = new CommonDirective(this.router);
  directiveObject = new PpoDirectives(this.dialogRef);

  // lists
  auditorName_list: CommonListing[] = [
    { value: 'm. p. patel', viewValue: 'm. p. patel' }
  ];

  // form controls
  ppoNoCtrl: FormControl = new FormControl();
  auditorNameCtrl: FormControl = new FormControl();

  // table data

  displayedColumns = [
    'checkbox', 'inwardNo', 'inwardDate', 'ppoNo', 'pensionerName', 'reimbursementAmount', 'auditorName', 'grantedAmount', 'action'
  ];
  Element_Data: AuditMRRequestTable[] = [
    {
      inwardNo: '10055/012020/000002', inwardDate: new Date('02/21/2020'),
      ppoNo: 'PR-5/12/2017/306989', pensionerName: 'JANAKKUMAR BHOGILAL PATEL',
      reimbursementAmount: '10000.00', auditorName: 'smt m p patel', grantedAmount: '0.00'
    },
    {
      inwardNo: '10055/082018/000005', inwardDate: new Date('07/08/2018'),
      ppoNo: 'PR-1/01/2018/312673', pensionerName: 'HIREN BHALCHANDRA TRIVEDI ',
      reimbursementAmount: '1000.00', auditorName: 'smt m p patel', grantedAmount: '0.00'
    },
  ];
  dataSource = new MatTableDataSource<AuditMRRequestTable>(this.Element_Data);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
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


  ngOnInit() {
    this.auditMRRequest = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      ppoNo: [''],
      accountNo: ['']
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

  goToSavedBillList() { }

  // opens medical reimbursement dialog
  openMedicalReimbursementDailog(elementData) {
    const dialog = this.dailogRef.open(MedicalReimbursementDetailsComponent, {
      width: '1400px', height: '800px', data: elementData
    });
  }

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
