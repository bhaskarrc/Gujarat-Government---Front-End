import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

const ELEMENT_DATA: any[] = [
  {
    referenceNo: 1200064595,
    referenceDate: Date.now(),
    ppoNo: 'PR-1/03/2011/211441',
    firstName: 'Mukeshbhai ',
    middleName: 'Prahaladbhai',
    lastName: 'Patel',
    pensionerType: 'Govt Gazzeted',
    typeOfPension: 'Retiring',
    retirementDate: '31-03-2011',
    department: 'Finance Department',
  }
];

@Component({
  selector: 'app-search-reference-number-dppf',
  templateUrl: './search-reference-number-dppf.component.html',
  styleUrls: ['./search-reference-number-dppf.component.css']
})
export class SearchReferenceNumberDppfComponent implements OnInit {

  displayedColumnsArray = new BehaviorSubject(['noData']);
  searchInwardNo: FormGroup;

  public listshow: Boolean = false;
  public autopopulated: Boolean = false;
  array: any = [];
  typeOfPensionerCTRL: FormControl = new FormControl();
  districtCTRL: FormControl = new FormControl();
  treasutyCTRL: FormControl = new FormControl();
  pensionCTRL: FormControl = new FormControl();
  departmentCTRL: FormControl = new FormControl();
  disabledEmpSearch = new BehaviorSubject<boolean>(true);
  dataSourceEmploSearch = new MatTableDataSource(ELEMENT_DATA);

  displayedColumnsEmpSearch = [
    'referenceNo',
    'referenceDate',
    'ppoNo',
    'firstName',
    'middleName',
    'lastName',
    'pensionerType',
    'typeOfPension',
    'retirementDate',
    'department',
  ];

  typeOfPensioner_list: any[] = [
    { value: '1', viewValue: 'Govt Gazzeted' },
    { value: '2', viewValue: 'Govt Non Gazzeted' },
    { value: '3', viewValue: 'Non Govt Teaching Staff' },
    { value: '4', viewValue: 'Non Govt Non Teaching Staff' },
    { value: '5', viewValue: 'Non Govt Non Teaching Staff' },
    { value: '6', viewValue: 'IAS' },
    { value: '7', viewValue: 'High Court Judges' },
    { value: '8', viewValue: 'Judges' },
    { value: '9', viewValue: 'Public Prosecutor' },
    { value: '10', viewValue: 'Class 4' },
    { value: '11', viewValue: 'Rojmadar' },
    { value: '12', viewValue: 'Kotwal' },
    { value: '13', viewValue: 'Doctor / Veterinary Doctor' },
    { value: '14', viewValue: 'Panchayat Teacher' },
    { value: '15', viewValue: 'Panchayat Employees' },
    { value: '16', viewValue: 'Freedom Fighter' },
    { value: '16', viewValue: 'Navnirman' },
    { value: '17', viewValue: 'Others' },
    { value: '18', viewValue: 'NON GOVERNMENT PRIMARY TEACHER' },
    { value: '19', viewValue: 'MUNICIPALITY EMPLOYEES' },
    { value: '20', viewValue: 'IPS' },
    { value: '21', viewValue: 'IFS' },
    { value: '22', viewValue: 'Private Primary Teaching Staff' },
    { value: '23', viewValue: 'MSB' },
  ];

  pension_list: any[] = [
    { value: '1', viewValue: ' Retiring' },
    { value: '2', viewValue: 'Absorption' },
    { value: '3', viewValue: ' Compensation' },
    { value: '4', viewValue: 'Compassionate' },
    { value: '5', viewValue: ' Family' },
    { value: '6', viewValue: ' Family Lost' },
    { value: '7', viewValue: ' Invalid' },
    { value: '8', viewValue: 'Other' },
    { value: '9', viewValue: ' Superannuation' },
    { value: '10', viewValue: 'Voluntary' },
    { value: '11', viewValue: ' Wound and Injury' }
  ];

  departmentPAO_list: any[] = [
    { value: '1', viewValue: 'Finance Department' },
    { value: '2', viewValue: 'Forest Department' },
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

  constructor(public dialogRef: MatDialogRef<SearchReferenceNumberDppfComponent>, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchInwardNo = this.fb.group({
      inwardNo: [''],
      inwardDate: [''],
      ppoNo: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      pensionerType: [''],
      typeOfPension: [''],
      retirementDate: [''],
      department: [''],
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
