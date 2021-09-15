import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { DeputyDirectorListingInward } from 'src/app/model/dppfgpf';



@Component({
  selector: 'app-deputy-director-level-listing',
  templateUrl: './deputy-director-level-listing.component.html',
  styleUrls: ['./deputy-director-level-listing.component.css']
})
export class DeputyDirectorLevelListingComponent implements OnInit {
  // Form Group
  deputyDirectorLevelListingForm: FormGroup;
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form COntrols
  typeOfEmployeeTypeCtrl: FormControl = new FormControl();
  typeOfEmployeeClassCtrl: FormControl = new FormControl();
  // VAriable
  errorMessage: { INWARD_NUMBER: string; INWARD_DATE: string; };
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  // DropDown
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
  Element_Data: DeputyDirectorListingInward[] = [
    {

      inwardNo: '12345/05/2020',
      inwardDate: '12-APR-2020',
      gpfAccountNo: 'DPPF/254',
      name: 'Pulkit Samrat',
      employeeClass: 'Class IV',
      employeeType: 'Permanent',
      dob: '12-FEB-1981',
      doj: '13-FEB-2007',
      status: 'Approved',
      lyingWith: 'Saksham Patel ',
    },

    {

      inwardNo: '12567/05/2019',
      inwardDate: '12-MAR-2020',
      gpfAccountNo: 'DPPF/255',
      name: 'Raj Damani',
      employeeClass: 'Daily Wages',
      employeeType: 'Contract',
      dob: '12-FEB-1980',
      doj: '13-FEB-2005',
      status: 'Approved',
      lyingWith: 'R.S. Rastogi',
    },

  ];

  displayedColumns: any[] = [
    'srno',
    'inwardNo',
    'inwardDate',
    'gpfAccountNo',
    'name',
    'employeeClass',
    'employeeType',
    'dob',
    'doj',
    'status',
    'lyingWith',
    'action',
  ];

  dataSource = new MatTableDataSource<DeputyDirectorListingInward>(this.Element_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.deputyDirectorLevelListingForm = this.fb.group({
      inwardNumber: '',
      inwardDate: undefined,
      gpfAccountNo: '',
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
    this.deputyDirectorLevelListingForm.reset();
  }
  // delete row
  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }


}
