import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AcceptanceCriteria } from 'src/app/model/emd';

// Columns Data
const ELEMENT_DATA: AcceptanceCriteria[] = [
  {

    uniqueNo: '10113',
    tokenNo: '192000001',
    dist: 'Gandhinagar',
    toSto: 'District Treasury Office , Gandhinagar',
    majorHead: '8443',
    billType: 'Refund of Lapse Deposit',
    ddo: '1234',
    cardex: '4',
    office: 'District Treasury Office , Gandhinagar',
    billdate: '05-May-2018',
    grossAmount: '10000.00',
    netAmount: '40000.00',
  },
  {
    uniqueNo: '10113',
    tokenNo: '192000001',
    dist: 'Ahemadabad',
    toSto: 'District Treasury Office, Ahemadabad',
    majorHead: '2071',
    billType: 'Refund of Lapse Deposit',
    ddo: '1235',
    cardex: '5',
    office: 'District Treasury Office , Gandhinagar',
    billdate: '05-May-2018',
    grossAmount: '50000.00',
    netAmount: '40000.00',
  },
];

@Component({
  selector: 'app-acceptance-criteria',
  templateUrl: './acceptance-criteria.component.html',
  styleUrls: ['./acceptance-criteria.component.css']
})
export class AcceptanceCriteriaComponent implements OnInit {

  // FormGroup
  auditAuditorChallanForm: FormGroup;
  // FormGroup
  acceptanceCriteriaForm: FormGroup;
  // FormControl
  noOfChallanCtrl: FormControl = new FormControl();
  // Table Source
  dataSource = new MatTableDataSource<AcceptanceCriteria>(ELEMENT_DATA);

  // Display Columns
  displayedColumns: string[] = ['srNo', 'uniqueNo', 'tokenNo', 'dist', 'toSto', 'majorHead', 'billType', 'ddo',
    'cardex', 'office', 'billdate', 'grossAmount', 'netAmount', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AcceptanceCriteriaComponent>,
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.acceptanceCriteriaData();
    this.auditAuditorChallanForm = this.fb.group({
      challanamount: [''],
      amounttoa: [''],
      entries: ['']
    });
  }
  acceptanceCriteriaData() {
    this.acceptanceCriteriaForm = this.fb.group({
    });
  }

}
