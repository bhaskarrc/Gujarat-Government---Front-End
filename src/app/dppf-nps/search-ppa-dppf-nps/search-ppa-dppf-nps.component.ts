import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { SearchPpaDppfNps } from 'src/app/model/dppf-nps';


const ELEMENT_DATA: SearchPpaDppfNps[] = [
  {
    ppaNo: 746,
    firstName: 'Jigar',
    middleName: 'Yogeshbhai',
    lastName: 'Patel',
    shortName: 'Jigar',
    district: 'Gandhinagar',
  }
];

@Component({
  selector: 'app-search-ppa-dppf-nps',
  templateUrl: './search-ppa-dppf-nps.component.html',
  styleUrls: ['./search-ppa-dppf-nps.component.css']
})
export class SearchPpaDppfNpsComponent implements OnInit {

  displayedColumnsArray = new BehaviorSubject(['noData']);
  searchPPANo: FormGroup;

  public listshow: Boolean = false;
  public autopopulated: Boolean = false;
  array: any = [];
  typeOfPPACTRL: FormControl = new FormControl();
  districtCTRL: FormControl = new FormControl();
  treasutyCTRL: FormControl = new FormControl();
  disabledEmpSearch = new BehaviorSubject<boolean>(true);
  dataSourceEmploSearch = new MatTableDataSource<SearchPpaDppfNps>(ELEMENT_DATA);

  displayedColumnsEmpSearch = [
    'ppaNo',
    'firstName',
    'middleName',
    'lastName',
    'shortName',
    'district',
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

  constructor(public dialogRef: MatDialogRef<SearchPpaDppfNpsComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchPPANo = this.fb.group({
      ppaNo: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      shortName: [''],
      district: [''],
    });

    this.searchPPANo.valueChanges.subscribe(val => {
      this.disabledEmpSearch.next(true);
      for (const key in this.searchPPANo.value) {
        if (this.searchPPANo.value[key] !== '') {
          this.disabledEmpSearch.next(false);
        }
      }
    });

  }

  savePPANumber(ppaNo) {

  }

  searchPPA() {
    this.displayedColumnsArray.next(this.displayedColumnsEmpSearch);
    if (this.searchPPANo.controls.ppaNo.value !== '') {
      this.dataSourceEmploSearch.data[0]['ppaNo'] = this.searchPPANo.controls.ppaNo.value;
    } else {
      this.dataSourceEmploSearch.data[0]['ppaNo'] = 752;
    }
  }

  onClickPPANo() {
    this.dialogRef.close(this.dataSourceEmploSearch.data);
  }

}
