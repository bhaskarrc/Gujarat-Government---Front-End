import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DppfgpfMessage, DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue } from 'src/app/model/common-grant';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { ListingInwardScreen } from 'src/app/model/dppf-nps';


@Component({
  selector: 'app-nps-account-generation-details-listing',
  templateUrl: './nps-account-generation-details-listing.component.html',
  styleUrls: ['./nps-account-generation-details-listing.component.css']
})
export class NpsAccountGenerationDetailsListingComponent implements OnInit {
  // Variable
  inwardDetails = true;
  errorMessages = DppfNpsMessage;
  // Form Group
  inwardDetailFormList: FormGroup;
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form COntrol
  statusCTRL: FormControl = new FormControl();
  typeOfEmployeeTypeCtrl: FormControl = new FormControl();
  typeOfEmployeeClassCtrl: FormControl = new FormControl();
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
    { value: '1', viewValue: 'Permanent' },
    { value: '2', viewValue: 'Contract' }
  ];
  classTypeOfEmployeeClass: ListValue[] = [
    { value: '1', viewValue: 'Class - I' },
    { value: '2', viewValue: 'Class - II' },
    { value: '3', viewValue: 'Class - III' },
    { value: '4', viewValue: 'Class - IV' },
    { value: '5', viewValue: 'OTHER' }
  ];


  statusList: any[] = [
    { value: '1', viewValue: 'In Process' },
    { value: '2', viewValue: 'Approve' },
    { value: '3', viewValue: 'Reject' },
  ];

  errorMessage: { INWARD_NUMBER: string; INWARD_DATE: string; };
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  // Table Content 
  Element_Data: ListingInwardScreen[] = [
    {
      inwardNo: '12345/05/2020',
      inwardDate: '12-Apr-2020',
      name: 'Pulkit Samrat',
      employeeClass: 'A type',
      employeeType: 'Permanent',
      dob: '12-Feb-1981',
      doj: '13-Feb-2007',
      status: 'Pending',
      lyingWith: 'Saksham Patel ',
    },

    {
      inwardNo: '12567/05/2019',
      inwardDate: '12-Mar-2020',
      name: 'Raj Damani',
      employeeClass: 'A type',
      employeeType: 'Contract',
      dob: '12-Feb-1980',
      doj: '13-Feb-2005',
      status: 'Pending',
      lyingWith: 'R.S. Rastogi',
    },

    {
      inwardNo: '16349/05/2019',
      inwardDate: '12-Feb-2020',
      name: 'Ashish Nikam',
      employeeClass: 'A type',
      employeeType: 'Permanent',
      dob: '12-Feb-1980',
      doj: '13-Feb-2009',
      status: 'Pending',
      lyingWith: 'Rajiv Rastogi',
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '12-Feb-2020',
      name: 'Rajesh Razdan',
      employeeClass: 'A type',
      employeeType: 'Permanent',
      dob: '12-Feb-1980',
      doj: '13-Feb-2005',
      status: 'Pending',
      lyingWith: 'R.S. Rastogi',
    },

    {
      inwardNo: '12345/05/2020',
      inwardDate: '11-Feb-2020',
      name: 'Rakesh Srivastav',
      employeeClass: 'A type',
      employeeType: 'Contract',
      dob: '12-Feb-1981',
      doj: '13-Feb-2007',
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
  directiveObj = new CommonDirective();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.inwardDetailFormList = this.fb.group({
      inwardNo: '',
      inwardDate: undefined,
      ppanNo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      employeeClass: [Validators.required],
      employeeType: [Validators.required],
      dob: undefined,
      doj: undefined,
      status: '',
      inwardFromDate: '',
      inwardToDate: '',
    });
  }
  // open inwardnumber dialog
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.inwardDetailFormList.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }

}
