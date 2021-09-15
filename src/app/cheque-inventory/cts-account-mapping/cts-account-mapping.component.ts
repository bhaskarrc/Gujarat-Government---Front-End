
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';
import { ciMessage } from 'src/app/common/error-message/common-message.constants';
import { CtsAccountMapping } from 'src/app/model/cheque-inventory';
import { ChequeInventoryDirective } from 'src/app/common/directive/cheque-inventory';

@Component({
  selector: 'app-cts-account-mapping',
  templateUrl: './cts-account-mapping.component.html',
  styleUrls: ['./cts-account-mapping.component.css']
})
export class CtsAccountMappingComponent implements OnInit {
  // date
  maxDate = new Date();
  todayDate = Date.now();

  // variables
  ctsAccountMappingForm: FormGroup;
  isSubmitted = false;
  isAdded = false;
  errorMessages = ciMessage;
  chequeType = '';
  ciDirectiveObj = new ChequeInventoryDirective(this.dialog);

  // form controls
  ctsChequeTypeCtrl: FormControl = new FormControl();
  accountDetailsCtrl: FormControl = new FormControl();

  // ctsChequeType list
  ctsChequeType_list: ListValue[] = [
    { value: '1', viewValue: 'LC' },
    { value: '2', viewValue: 'Deposit' },
    { value: '3', viewValue: 'Treasury' }
  ];

  // accountDetailsType list
  accountDetailsTypeLC_list: ListValue[] = [
    { value: '1', viewValue: 'EE1' },
    { value: '2', viewValue: 'EE2' },
    { value: '3', viewValue: 'EE3' },
    { value: '4', viewValue: 'EE4' },
    { value: '5', viewValue: 'EE5' },
    { value: '6', viewValue: 'EE11' },
    { value: '7', viewValue: 'DCF1' },
    { value: '8', viewValue: 'DCF2' },
    { value: '9', viewValue: 'DCF3' },
    { value: '10', viewValue: 'DCF4' },
  ];
  accountDetailsTypeDeposit_list: ListValue[] = [
    { value: '1', viewValue: '002 GSRTC' },
    { value: '2', viewValue: '021 DIST SUPDT POLI' },
    { value: '3', viewValue: '022 SP. PRISON, BHUJ' },
    { value: '4', viewValue: '023 D.E.O. BHUJ' },
    { value: '5', viewValue: '027 DIST POULTRY EX' }
  ];

  // status list
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Saved as Draft' },
    { value: '2', viewValue: 'Submitted' }
  ];

  // table data
  Element_Data: CtsAccountMapping[] = [
    {
      financialYear: '2019-2020',
      refNo: '19-20/BUD/RE/001',
      refDate: new Date('12/08/2019'),
      ddoNo: '',
      cardexNo: '',
      status: '1',
      ctsChequeType: '1',
      minStock: '10',
      edit: true
    },
    {
      financialYear: '2019-2020',
      refNo: '19-20/BUD/RE/002',
      refDate: new Date('11/08/2019'),
      ddoNo: '',
      cardexNo: '',
      status: '2',
      ctsChequeType: '2',
      minStock: '9',
      edit: true
    },
    {
      financialYear: '2019-2020',
      refNo: '19-20/BUD/RE/003',
      refDate: new Date('11/08/2019'),
      ddoNo: '',
      cardexNo: '',
      status: '1',
      ctsChequeType: '3',
      minStock: '5',
      edit: true
    },
  ];

  dataSource = new MatTableDataSource<CtsAccountMapping>(this.Element_Data);
  // table columns
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['position', 'financialYear', 'refNo', 'refDate', 'ddoNo', 'cardexNo', 'ctsChequeType', 'minStock', 'status', 'action'];
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.ctsAccountMappingForm = this.fb.group({
      accountNumber: [''],
      ctsChequeType: [''],
      accountDetails: [''],
      accountShortName: [''],
      minStock: [''],
      email: ['', Validators.email],
    });
  }

  // to clear form
  clearForm() {
    this.ctsAccountMappingForm.reset();
  }

  // to delete row
  delete(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  // to edit row
  onEdit(element) {
    element.edit = !element.edit;
  }

  // to add row
  onAdd() {
    const ctsChequeType = this.ctsAccountMappingForm.get('ctsChequeType').value;
    const minStock = this.ctsAccountMappingForm.get('minStock').value;
    this.dataSource.data.push({
      financialYear: '2019-2020',
      refNo: '19-20/BUD/RE/003',
      refDate: new Date('11/08/2019'),
      ddoNo: '',
      cardexNo: '',
      status: '3',
      ctsChequeType: ctsChequeType,
      minStock: minStock,
      edit: true
    });
    this.dataSource.data = this.dataSource.data;
    this.isAdded = true;
    this.clearForm();
  }

  // selects cheque type
  selectChequeType(type) {
    console.log(type);
    this.chequeType = type;
  }
}
