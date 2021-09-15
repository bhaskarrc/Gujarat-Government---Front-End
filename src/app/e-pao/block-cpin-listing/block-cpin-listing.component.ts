import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BlokPinListing } from 'src/app/model/epaoModel';
const ELEMENT_DATA: BlokPinListing[] = [
  {
    status: 'Pending',
    cpIn: '10000000002',
    refDate: '28-Jun-2019',
    refNo: '1241234',
    amount: '10000.00'
  },

];
@Component({
  selector: 'app-block-cpin-listing',
  templateUrl: './block-cpin-listing.component.html',
  styleUrls: ['./block-cpin-listing.component.css']
})
export class BlockCpinListingComponent implements OnInit {
  // Form Group
  blockCpinForm: FormGroup;
  // Date
  initiatiomdate = Date.now();
  maxDate = new Date();
  // Table Source
  displayedColumns = ['position', 'refNo', 'refDate', 'cpIn', 'amount', 'status', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.blockCpinForm = this.fb.group({
      cpin: [''],
      cin: [''],
      cpinDate: [''],
      amt: [''],
      amtDate: [''],
      refDate: ['']
    });
  }

}
