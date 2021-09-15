import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDatepickerInputEvent, MatDialog, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatPaginator } from '@angular/material';
import { ListValue, ManualEntryListing } from 'src/app/model/epaoModel';
import { EPaoDirectives } from 'src/app/common/directive/epao';


@Component({
  selector: 'app-manual-entry-master-listing',
  templateUrl: './manual-entry-master-listing.component.html',
  styleUrls: ['./manual-entry-master-listing.component.css']
})
export class ManualEntryMasterListingComponent implements OnInit {

  ELEMENT_DATA: ManualEntryListing[] = [
    {
      tNo: ' 19-20/E-PAO/ME/001',
      cIn: '565689783354899',
      amt: '2000.00',
      eDate: '15-May-2018',
      vDate: '10-Aug-2019',
      type: 'Amount not from GST',
    },
    {
      tNo: ' 19-20/E-PAO/ME/002',
      cIn: '565689783354898',
      amt: '2000.00',
      eDate: '15-May-2018',
      vDate: '10-Aug-2019',
      type: 'Amount not received from RBI',
    },
    {
      tNo: ' 19-20/E-PAO/ME/003',
      cIn: '565689783354856',
      amt: '2000.00',
      eDate: '15-May-2018',
      vDate: '10-Aug-2019',
      type: 'Amount mismatched from RBI',
    },
  ];
  maxDate = new Date();
  // FormGroup
  entryMasterForm: FormGroup;
  selection = new SelectionModel<any>(true, []);
  typeCtrl: FormControl = new FormControl();
  // Table Source
  displayedColumns = ['checkBox', 'tNo', 'cIn', 'amt', 'eDate', 'vDate', 'type', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  type_list: ListValue[] = [
    { value: '1', viewValue: 'Amount not from GST' },
    { value: '2', viewValue: 'Amount not received from RBI' },
    { value: '3', viewValue: 'Amount mismatched from RBI' },
    { value: '4', viewValue: 'Amount mismatched from GST' },
  ];

  constructor(private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }
  directiveObject = new EPaoDirectives(this.router, this.dialog);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.entryMasterForm = this.fb.group({
      code: [''],
      lapse: ['1'],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      refNo: [''],
      date: [''],
      cinNo: [''],
      type: [''],
    });
  }


  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }


}


