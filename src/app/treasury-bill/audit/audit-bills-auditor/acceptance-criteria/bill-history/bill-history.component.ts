import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';



const ELEMENT_DATA: any[] = [
  {
  refNo: '2',
  regNo: '552',
  tokenNo: '10113',
  party: 'CHANDRESHWAR VISHWANATH BHAGAT',
  majorHead: '2071',
  ddoNo: '115',
  cardexNo: '4',
  billAmount: '200.00',
  billGrossAmount: '200.00',
  chequeamount: '50.00',
  chequeePayment: 'Cheque',
  billdate: '25-Feb-2019',
  inwarddate: '25-Feb-2019',
  challanNo: '1920003',
  ddoname: '	collector Office, Gandhinagar',
  billcat: 'Regular',
  billtype: 'Pay Bill',
  chequeno: 'TRY61-286971',
  paidAmount: '20.00',
  coded: 'TDS',
  department: 'Finance Department'},
];

@Component({
  selector: 'app-bill-history',
  templateUrl: './bill-history.component.html',
  styleUrls: ['./bill-history.component.css']
})
export class BillHistoryComponent implements OnInit {
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  displayedColumns: string[] = [ 'checkBox','tokenNo', 'billdate','inwarddate',
  'ddoNo', 'cardexNo', 'ddoname','billtype','majorHead','billGrossAmount','billAmount',
  ];

  constructor(public dialogRef: MatDialogRef < BillHistoryComponent > , private fb: FormBuilder, ) {}


  ngOnInit() {}
  goToDashboard(): void {
    this.dialogRef.close('no');
  }

}
