import { eaMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CloseDialogBoxComponent } from 'src/app/expenditure-accounting/close-dialog-box/close-dialog-box.component';
import { EaDirectives } from 'src/app/common/directive/ea-directive';
@Component({
  selector: 'app-payment-receipt-jotting-list',
  templateUrl: './payment-receipt-jotting-list.component.html',
  styleUrls: ['./payment-receipt-jotting-list.component.css']
})
export class PaymentReceiptJottingListComponent implements OnInit {
  directiveObject = new EaDirectives(this.dialog);
  initiatiomdate = new Date((new Date()));
  // FormGroup
  prJottingListForm: FormGroup;
  maxDate = new Date();
  isSubmitted = false;
  subTreasuryYes = false;
  // FormControl
  typeCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  subTreasuryNameCtrl: FormControl = new FormControl();

  errorMessages = eaMessage;

  // List values
  type_list: any[] = [
    { value: '1', viewValue: 'Payment' },
    { value: '1', viewValue: 'Receipt' }
  ];

  subTreasury_list: any[] = [
    { value: '1', viewValue: ' Sub Treasury Office Kalol' },
    { value: '2', viewValue: 'Sub Treasury Office Mansa' },
  ];

  subTreasuryName_list: any[] = [
    { value: '1', viewValue: 'Payment' },
    { value: '1', viewValue: 'Receipt' }
  ];
  bank_list: any[] = [
    { value: '1', viewValue: 'Bank Of Baroda' },
    { value: '2', viewValue: 'State Bank Of India' }
  ];
  bankNameCtrl: FormControl = new FormControl();
  isDelete = false;
  // Display Element Data
  Element_Data: any[] = [
    {
      scDate: '08-Mar-2019',
      majorHead: '2055',
      amount: '100.00',
      tcAmount: '2000.00',
      pgNo: '123',
      document: '1',
      bank: 'Bank Of Baroda',
      type: 'Receipt'
    }
  ];
  // Table Source
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  // Display Columns
  displayedColumns: any[] = ['srNo', 'scDate', 'majorHead', 'bank', 'type', 'amount', 'tcAmount', 'pgNo', 'document', 'action'];
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.prJottingListForm = this.fb.group({
      // FormGroup Fields
      type: [''],
      subTreasury: [''],
      scrollDate: [''],
      branchCode: [''],
      bank: ['Oriental bank Of Commerce'],
      branch: [''],
      pgNo: [''],
      subTreasuryName: [''],

      majorHead: [''],
      amount: [''],
      tc: ['0'],
      documents: ['1'],


    });

  }
  // function to clear form
  clearForm() {
    this.prJottingListForm.reset();
  }

  add() {
    const p_data = this.dataSource.data;

    this.isDelete = true;
    p_data.push({
      budgetCode: '',
      description: '',
      edpCode: '',
      amount: '0.00'
    });
    this.dataSource.data = p_data;
  }



  selectYes(yes) {
    if (yes === 1) {
      this.subTreasuryYes = true;
    } else if (yes === 2) {
      this.subTreasuryYes = false;
    }
  }



  onSave() {
    if (this.prJottingListForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }

  }
}
