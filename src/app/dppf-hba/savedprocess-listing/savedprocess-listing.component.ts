import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SavedprocessListing } from 'src/app/model/dppf-hba';
import { ListValue } from 'src/app/model/treasury-bill';


@Component({
  selector: 'app-savedprocess-listing',
  templateUrl: './savedprocess-listing.component.html',
  styleUrls: ['./savedprocess-listing.component.css']
})
export class SavedprocessListingComponent implements OnInit {

  // table Source
  Element_Data: SavedprocessListing[] = [
    {
      employeId: '1000000001',
      name: 'A H Mehta',
      hbaMcaNo: '',
      districtName: 'Gandhinagar',
      ddo: '00',
      cardex: '5000',
      loanFor: 'HBA',
      loanAmount: '50000',
      status: 'Save as Draft',
      workFlowStatus: '',
    },
    {
      employeId: '1000000002',
      name: 'R K Mehta',
      hbaMcaNo: '',
      districtName: 'Gandhinagar',
      ddo: '01',
      cardex: '5000',
      loanFor: 'MCA',
      loanAmount: '50000',
      status: 'Approval in Progress',
      workFlowStatus: '',
    },
  ];

  dataSource = new MatTableDataSource<SavedprocessListing>(this.Element_Data);
  displayedColumns: string[] = ['srno', 'employeId', 'name', 'hbaMcaNo', 'districtName', 'loanFor', 'loanAmount',
    'status', 'workFlowStatus', 'action'];
  // Form Group
  searchForm: FormGroup;
  // date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Control
  hbaMcaCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  // Lists
  hbaMcaList: ListValue[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  districtList: ListValue[] = [
    { value: '1', viewValue: 'Gandhinagar' },
    { value: '2', viewValue: 'Ahmedabad' },
    { value: '3', viewValue: 'Rajkot' },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      employeId: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      hbaMca: [''],
      district: [''],
      ddo: [''],
      cardex: [''],
    });
  }
  searchBill() { }

  // On Edit
  onEdit() {
    this.router.navigate(['./dppf-hba/saved-process']);
  }
}
