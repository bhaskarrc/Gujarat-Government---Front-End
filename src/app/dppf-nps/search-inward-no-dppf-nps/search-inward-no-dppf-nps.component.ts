import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { SearchInwardNoDppfNps } from 'src/app/model/dppf-nps';

const ELEMENT_DATA: SearchInwardNoDppfNps[] = [
  {
    inwardNo: 1200064595,
    inwardDate: Date.now(),
    typeOfInward: 'Request for Account Generation',
    district: 'Gandhinagar',
    treasury: 'District Treasury Office, Gandhinagar'
  }
];

@Component({
  selector: 'app-search-inward-no-dppf-nps',
  templateUrl: './search-inward-no-dppf-nps.component.html',
  styleUrls: ['./search-inward-no-dppf-nps.component.css']
})
export class SearchInwardNoDppfNpsComponent implements OnInit {

  displayedColumnsArray = new BehaviorSubject(['noData']);
  searchInwardNo: FormGroup;

  public listshow: Boolean = false;
  public autopopulated: Boolean = false;
  array: any = [];
  typeOfInwardCTRL: FormControl = new FormControl();
  districtCTRL: FormControl = new FormControl();
  treasutyCTRL: FormControl = new FormControl();
  disabledEmpSearch = new BehaviorSubject<boolean>(true);
  dataSourceEmploSearch = new MatTableDataSource<SearchInwardNoDppfNps>(ELEMENT_DATA);

  displayedColumnsEmpSearch = [
    'inwardNo',
    'inwardDate',
    'typeOfInward',
    'district',
    'treasury',
  ];

  typeOfInward_list: any[] = [
    { value: '1', viewValue: 'Request For Account Generation' }
  ];

  district_list: any[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Rajkot' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Valsad' },
    { value: '9', viewValue: 'Navsari' },
    { value: '10', viewValue: 'Dang' },
  ];

  treasutyPAO_list: any[] = [
    { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
    { value: '2', viewValue: 'District Treasury Office, Gandhinagar' },
    { value: '3', viewValue: 'District Treasury Office, Vadodara' },
    { value: '4', viewValue: 'District Treasury Office, Surat' },
    { value: '5', viewValue: 'District Treasury Office, Rajkot' },
    { value: '6', viewValue: 'District Treasury Office, Anand' },
    { value: '7', viewValue: 'District Treasury Office, Bharuch' },
    { value: '8', viewValue: 'District Treasury Office, Valsad' },
    { value: '9', viewValue: 'District Treasury Office, Navsari' },
    { value: '10', viewValue: 'District Treasury Office, Dang' },
  ];

  constructor(public dialogRef: MatDialogRef<SearchInwardNoDppfNpsComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchInwardNo = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      typeOfInward: [''],
      district: [''],
      treasuryPAO: [''],
    });

    this.searchInwardNo.valueChanges.subscribe(val => {
      this.disabledEmpSearch.next(true);
      for (const key in this.searchInwardNo.value) {
        if (this.searchInwardNo.value[key] !== '') {
          this.disabledEmpSearch.next(false);
        }
      }
    });

  }

  saveInwardNumber(inwardNo) {

  }

  searchInward() {
    this.displayedColumnsArray.next(this.displayedColumnsEmpSearch);
    if (this.searchInwardNo.controls.inwardNo.value !== '') {
      this.dataSourceEmploSearch.data[0]['inwardNo'] = this.searchInwardNo.controls.inwardNo.value;
    }
  }

  onClickInwardNo() {
    this.dialogRef.close(this.dataSourceEmploSearch.data);
  }

}
