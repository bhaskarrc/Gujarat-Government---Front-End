import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { SelectionModel } from '@angular/cdk/collections';
import { CardexnoPaoComponent } from '../inward-physical-bill/dialog/cardexno/cardexno.component';
import { TokenSearchDialogComponent } from '../../token-search-dialog/token-search-dialog.component';
import { ListValue } from 'src/app/model/paoModel';

const ELEMENT_DATA = [
  {
    object_descr: 'બીલ સાથે સામેલ તફાવતના પત્રકમા વાવચર નબર લખવામા આવેલ નથી ',
    module_name: 'Treasury Bill Processing '
  },]
@Component({
  selector: 'app-inward-cheque',
  templateUrl: './inward-cheque.component.html',
  styleUrls: ['./inward-cheque.component.css']
})
export class InwardChequeComponent implements OnInit {
  // form Group
  inwarChequeForm: FormGroup;
  // Form Control
  chequetypeCtrl: FormControl = new FormControl();
  ddonameCtrl: FormControl = new FormControl();
  chequeCtrl: FormControl = new FormControl();
  // Table Source
  newdisplayedColumns: string[] = ['srno', 'chequepayment', 'actionstype', 'action'];
  newdataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,) { }
  // Lists
  ddoname_list: ListValue[] = [
    { value: '1', viewValue: '	Collector Office, Gandhinagar' },
  ];
  action_list: ListValue[] = [
    { value: '1', viewValue: 'Cancel' },
    { value: '2', viewValue: 'Duplicate' },
  ]

  format_list: ListValue[] = [
    { value: '1', viewValue: 'CTS2010' },
    { value: '2', viewValue: 'Regular' },

  ];
  ngOnInit() {
    this.inwarChequeData();
  }

  inwarChequeData() {
    this.inwarChequeForm = this.fb.group({
      Tokenno: [''],
      format: ['1'],
      cardexno: [''],
      ddoname: [''],
      ddoNo: [''],
      chequetypeCtrl: [''],
      chequepayment: [''],
      actionstype: ['1']
    });
  }
  // Add row in table
  addrow() {
    this.newdataSource.data.push(['srno', 'chequepayment', 'actionstype', 'action'])
    this.newdataSource = new MatTableDataSource(this.newdataSource.data);
  }
  // delete row in table
  delete(element) {
    this.newdataSource.data.splice(element, 1);
    this.newdataSource = new MatTableDataSource(this.newdataSource.data)
  }

  // token no dialog
  tokenNo() {
    const dialogRef = this.dialog.open(TokenSearchDialogComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Cardex no dialog

  cardexNo() {
    const dialogRef = this.dialog.open(CardexnoPaoComponent, {
      width: '800px'
    });
  }

}
