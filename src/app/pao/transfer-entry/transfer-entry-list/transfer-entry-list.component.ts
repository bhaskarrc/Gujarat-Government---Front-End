
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TransferEntryList } from 'src/app/model/paoModel';

@Component({
  selector: 'app-transfer-entry-list',
  templateUrl: './transfer-entry-list.component.html',
  styleUrls: ['./transfer-entry-list.component.css'],
})
export class TransferEntryListComponent implements OnInit {
  // Form Group
  TransferEntryForm: FormGroup;

  // Variable
  isMergeEnable: Boolean = false;
  istransferBranch: Boolean = false;
  checkbox: Boolean = false;
  // Date
  maxDate = new Date();

  Element_Data: TransferEntryList[] = [
    {
      checkbox: false,
      teNo: '1000',
      trasnferEntryDate: '04-Feb-2020 10:00 AM',
      fromMajorHead: '2054',
      toMajorHead: '2056',
      teTypeFrom: 'Payment',
      teTypeTo: 'Payment',
      teAmount: '1000',
    },
  ];
  // Table Source
  dataSource = new MatTableDataSource<TransferEntryList>(this.Element_Data);
  displayedColumns: any[] = [
    'position',
    'teNo',
    'trasnferEntryDate',
    'fromMajorHead',
    'toMajorHead',
    'teTypeFrom',
    'teTypeTo',
    'teAmount',
    'action',
  ];
  constructor(private fb: FormBuilder) { }
  // Listing
  te_list: any[] = [
    { value: '1', viewValue: 'Payment ' },
    { value: '2', viewValue: 'Receipt' },
  ];
  // Form Control
  teTypeCtrl: FormControl = new FormControl();

  ngOnInit() {
    this.TransferEntryForm = this.fb.group({
      teNo: [''],
      teType: [''],
      fromTransferDate: [''],
      toTransferDate: [''],
      fromMajorHead: [''],
      fromCardexNo: [''],
      transferAmount: [''],
    });
  }



  clearForm() {
    this.TransferEntryForm.reset();
  }


  deleteEntry() { }
  searchEntries() { }
}
