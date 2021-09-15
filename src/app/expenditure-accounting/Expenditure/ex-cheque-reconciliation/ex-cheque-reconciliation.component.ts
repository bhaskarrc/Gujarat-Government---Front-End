import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SaveDialogBoxComponent } from '../../save-dialog-box/save-dialog-box.component';
@Component({
  selector: 'app-ex-cheque-reconciliation',
  templateUrl: './ex-cheque-reconciliation.component.html',
  styleUrls: ['./ex-cheque-reconciliation.component.css']
})
export class ExChequeReconciliationComponent implements OnInit {

  ChequeTypeCtrl: FormControl = new FormControl();

  ChequeType_list: any[] = [
    { value: '1', viewValue: 'CTS2010' },
    { value: '2', viewValue: 'Regular' },
  ];
  // Display Columns
  chequeReconcilationColumns: string[] = [
    'srNo',
    'adviceNo',
    'chkNo',
    'paidDate',
    'chkAmount',
    'action'

  ];
  // Display Element Data
  cheque_Data: any[] = [
    {
      adviceNo: '458787465',
      chkNo: '3451458',
      paidDate: new Date('03/05/2020'),
      chkAmount: '1000.00',

    },
  ];
  // Table Source
  chequeReconcilationDataSource = new MatTableDataSource<any>(this.cheque_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  initiatiomdate = new Date((new Date()));
  chequeTypeValue = true;
  // FormGroup
  expanditureForm: FormGroup;

  numberShow = false;
  isSearchJotting = false;
  today = new Date();
  threemonths = new Date();
  isSubmitted = false;
  constructor(private fb: FormBuilder, private _dialog: MatDialog) {
    this.today.setDate(this.today.getDate());
    this.threemonths.setDate(this.threemonths.getDate() - 90);
  }

  errorMessages = eaMessage;

  ngOnInit() {


    this.expanditureFormData();
  }

  expanditureFormData() {
    this.chequeReconcilationDataSource.paginator = this.paginator;
    this.chequeReconcilationDataSource.sort = this.sort;
    this.expanditureForm = this.fb.group({
      // FormGroup Fields
      ChequeType: [''],
      accountName: [''],
      ChequeNo: [''],
      AdviceNo: [''],
      chkaMT: [''],
      cNo: [''],
      cAmount: [''],

    });
  }

  checkNo() {
    this.numberShow = true;
  }

  search() {
    this.isSearchJotting = true;
  }
  // function to clear form
  clearForm() {
    this.expanditureForm.reset();
  }
  onSave() {
    if (this.expanditureForm.valid) {
      this.isSubmitted = false;
      const dialogRef = this._dialog.open(SaveDialogBoxComponent, {
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(data => {

      });
    } else {
      this.isSubmitted = true;
    }

  }
  onEdit(element) {
    element.edit = !element.edit;
  }

  selectChequeType() {
    console.log(this.expanditureForm.value.ChequeType);
    if (this.expanditureForm.value.ChequeType === '2') {
      this.chequeTypeValue = false;
    } else {
      this.chequeTypeValue = true;
    }
  }
}
