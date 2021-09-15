import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { PartyDetailsComponent } from 'src/app/pao/party-details/party-details.component';
import { ListValue, ChequePrintingTable } from 'src/app/model/pdpla';
import { PdplaDirectives } from 'src/app/common/directive/pdpla';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheque-printing',
  templateUrl: './cheque-printing.component.html',
  styleUrls: ['./cheque-printing.component.css']
})
export class ChequePrintingComponent implements OnInit {
  // form  Group
  chequePrintinglistForm: FormGroup;
  chequePrintingForm: FormGroup;
  searchListForm: FormGroup;

  // Form Control
  ddonameCtrl: FormControl = new FormControl();
  auditornameCtrl: FormControl = new FormControl();
  billtypeCtrl: FormControl = new FormControl();
  majorheadCtrl: FormControl = new FormControl();
  chequeCtrl: FormControl = new FormControl();
  // List
  ELEMENT_DATA: ChequePrintingTable[] =
    [{
      chequeNo: 'GNR-2321232',
      adviceNo: '1',
      adviceDate: '05-Jun-2020',
      adviceAmt: '3,000.00',
      chequeAmt: '3,000.00',
      partyName: 'Mr. Abc',
    }];
  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	District Treasury Office, Gandhinagar' },
  ];

  auditor_list: ListValue[] = [{
    value: '1', viewValue: 'Shri. Pratik Shah'
  }];

  billtype_list: ListValue[] = [
    { value: '1', viewValue: 'GTR 30 Pay Bill' },
    { value: '2', viewValue: 'GTR 45 TA Bill' },
    { value: '3', viewValue: 'GTR 40 Grant In Bill' },
    { value: '4', viewValue: 'GTR 12 Advance Bill' }];

  billcategory_list: ListValue[] = [
    { value: '1', viewValue: 'Regular' },
    { value: '2', viewValue: 'TC' },
    { value: '3', viewValue: 'NIL' },
    { value: '4', viewValue: 'Regular/Challan' }];

  major_list: ListValue[] = [
    { value: '1', viewValue: '2011' },
    { value: '2', viewValue: '2012' },
    { value: '3', viewValue: '2014' },
    { value: '4', viewValue: '2029' },
    { value: '5', viewValue: '2030' },
    { value: '6', viewValue: '2039' },
    { value: '7', viewValue: '2040' },
    { value: '8', viewValue: '2015' }
  ];
  startingCheque_list: ListValue[] = [
    { value: '1', viewValue: 'TRY61-286971' }];

  format_list: ListValue[] = [
    { value: '1', viewValue: 'CTS2010' },
    { value: '2', viewValue: 'Regular' }];
  // Date
  todayDate = Date.now();



  stroy = new Subject<void>();
  // Table Source

  displayedColumns: string[] = ['checkBox', 'srno', 'chequeNo', 'adviceNo', 'adviceDate', 'adviceAmt', 'chequeAmt', 'partyName'];

  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  private paginator: MatPaginator;
  private sort: MatSort;

  showTable: Boolean = false;
  selection = new SelectionModel<any>(true, []);
  selectedAll = false;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }
  directiveObject = new PdplaDirectives(this.router, this.dialog);

  ngOnInit() {
    this.chequePrintingFormData();
  }

  chequePrintingFormData() {
    this.chequePrintingForm = this.fb.group({
      // Formfields
      Billrefernum: [''],
      tokenno: [''],
      majorhead: [''],
      chequeamount: [''],
      billamount: [''],
      netamount: [''],
      partyName: [''],
      auditorname: [''],
      billcategory: [''],
      billtypes: [''],
      ddono: [''],
      cardexno: [''],
      ddoname: [''],
      billate: [''],
      tokenNo: [''],
      regBill: ['']
    });
    this.chequePrintinglistForm = this.fb.group({
      startingCheque: ['1'],
      format: ['1'],
    });
  }

  // opens party details diaog box
  commentGrantDetails(): void {
    const dialogRef = this.dialog.open(PartyDetailsComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // sets datasource attributes
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onclickStatus(data) {
    if (data.active) {
      data.active = false;
    } else {
      data.active = true;
    }
    return data;
  }

  // clears form
  clearForm() {
    this.searchListForm.reset();
  }

  // shows table on search
  search() {
    this.showTable = true;
  }



}
