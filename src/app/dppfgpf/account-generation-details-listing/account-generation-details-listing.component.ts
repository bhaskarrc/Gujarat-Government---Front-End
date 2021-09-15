import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { ListingInwardScreen } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-account-generation-details-listing',
  templateUrl: './account-generation-details-listing.component.html',
  styleUrls: ['./account-generation-details-listing.component.css']
})
export class AccountGenerationDetailsListingComponent implements OnInit {
  // Form Group
  inwardDetailFormList: FormGroup;
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form COntrol
  typeOfEmployeeTypeCtrl: FormControl = new FormControl();
  typeOfEmployeeClassCtrl: FormControl = new FormControl();
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  // List
  classTypeOfInward: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule ' },
    { value: '2', viewValue: 'Class 4/DW/WC' },
    { value: '3', viewValue: 'Final Payment Register' },
    { value: '4', viewValue: 'Transfer Balance' },
    { value: '5', viewValue: ' Supplementary Payment Transfer' },
    { value: '6', viewValue: 'AGCA ' },
    { value: '7', viewValue: 'AGTA Misclassified Entry' },

  ];

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Vadodara ' },
    { value: '2', viewValue: 'Ahmedabad' },
    { value: '3', viewValue: 'Panchmahal' },
    { value: '4', viewValue: 'Mahisagar' },

  ];
  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: '1 ' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },

  ];

  classTypeOfEmployeeType: ListValue[] = [
    { value: '1', viewValue: '1 ' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },

  ];

  classTypeOfEmployeeClass: ListValue[] = [
    { value: '1', viewValue: 'Class IV ' },
    { value: '2', viewValue: 'Daily Wages' },
    { value: '3', viewValue: 'Work Charge' },

  ];

  // Table Data
  Element_Data: ListingInwardScreen[] = [
    {
      srno: '1',
      inwardNo: '12345/05/2020',
      inwardDate: '12/04/2020',
      name: 'Pulkit Samrat',
      employeeClass: 'Class IV',
      employeeType: 'Permanent',
      dob: '12-02-1981',
      doj: '13-02-2007',
      status: 'Pending',
      lyingWith: 'Saksham Patel ',
    },

    {
      srno: '2',
      inwardNo: '12567/05/2019',
      inwardDate: '12/03/2020',
      name: 'Raj Damani',
      employeeClass: 'Daily Wages',
      employeeType: 'Contract',
      dob: '12-02-1980',
      doj: '13-02-2005',
      status: 'Pending',
      lyingWith: 'R.S. Rastogi',
    },

    {
      srno: '3',
      inwardNo: '16349/05/2019',
      inwardDate: '12/02/2020',
      name: 'Ashish Nikam',
      employeeClass: 'Work Change',
      employeeType: 'Permanent',
      dob: '12-02-1980',
      doj: '13-02-2009',
      status: 'Pending',
      lyingWith: 'Rajiv Rastogi',
    },

    {
      srno: '4',
      inwardNo: '12345/05/2019',
      inwardDate: '12/02/2020',
      name: 'Rajesh Razdan',
      employeeClass: 'Daily Wages',
      employeeType: 'Permanent',
      dob: '12-02-1980',
      doj: '13-02-2005',
      status: 'Pending',
      lyingWith: 'R.S. Rastogi',
    },

    {
      srno: '5',
      inwardNo: '12345/05/2020',
      inwardDate: '11/02/2020',
      name: 'Rakesh Srivastav',
      employeeClass: 'Class IV',
      employeeType: 'Contract',
      dob: '12-02-1981',
      doj: '13-02-2007',
      status: 'Pending',
      lyingWith: 'Saksham Patel ',
    },
  ];
  // Table Source
  displayedColumns: any[] = [
    'srno',
    'inwardNo',
    'inwardDate',
    'name',
    'employeeClass',
    'employeeType',
    'dob',
    'doj',
    'status',
    'lyingWith',
    'action',
  ];

  dataSource = new MatTableDataSource<ListingInwardScreen>(this.Element_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.inwardDetailFormList = this.fb.group({
      inwardNumber: '',
      inwardDate: undefined,
      name: '',
      employeeClass: [Validators.required],
      employeeType: [Validators.required],
      dob: undefined,
      doj: undefined,
      status: '',
      lyingWith: '',
    });
  }


  resetForm() {
    this.inwardDetailFormList.reset();
  }
  // delete row
  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
}
