import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { PrepareOnlineFinalPaymentListing } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-prepare-online-final-payment-case-listing',
  templateUrl: './prepare-online-final-payment-case-listing.component.html',
  styleUrls: ['./prepare-online-final-payment-case-listing.component.css']
})
export class PrepareOnlineFinalPaymentCaseListingComponent implements OnInit {
  todayDate = new Date();
  finalPaymentListForm: FormGroup;
  typeOfStatusCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfReasonCtrl: FormControl = new FormControl();

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Mahisagar' },
    { value: '3', viewValue: 'Panchmahal' },
    { value: '4', viewValue: 'Vadodara' },

  ];
  classTypeOfReason: ListValue[] = [
    { value: '1', viewValue: 'Retirement' },
    { value: '2', viewValue: 'Death' },
    { value: '3', viewValue: 'Transfer Outside DPPF To District Panchayat' },
    { value: '4', viewValue: 'Transfer Inside DPPF' },

  ];
  classTypeOfStatus: ListValue[] = [
    { value: '1', viewValue: ' Approved ' },
    { value: '2', viewValue: 'Pending ' },


  ];
  errorMessage;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  selection = new SelectionModel<PrepareOnlineFinalPaymentListing>(true, []);


  Element_Data: PrepareOnlineFinalPaymentListing[] = [
    {
      srno: '1',
      requestNo: '134',
      employeeNo: '45',
      gpfNo: 'PW/DAT/5673',
      name: 'Rajiv',
      disrict: 'Ahmedabad',
      reason: 'Retirement',
      status: 'Pending',
      lyingWith: 'Simran Razdan'



    },

    {
      srno: '2',
      requestNo: '765',
      employeeNo: '17',
      gpfNo: 'PW/DAT/5673',
      name: 'Dinesh',
      disrict: 'Vadodara',
      reason: 'Death',
      status: 'Pending',
      lyingWith: 'Arun Zala'
    },

    {
      srno: '3',
      requestNo: '234',
      employeeNo: '25',
      gpfNo: 'PW/DAT/1673',
      name: 'Rajiv',
      disrict: 'Gandhinagar',
      reason: 'Death',
      status: 'Pending',
      lyingWith: 'Aman Patel'
    },


  ];

  displayedColumns: any[] = [

    'srno',
    'requestNo',
    'employeeNo',
    'gpfNo',
    'name',
    'disrict',
    'reason',
    'status',
    'lyingWith',
    'action',

  ];

  dataSource = new MatTableDataSource<PrepareOnlineFinalPaymentListing>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.finalPaymentListForm = this.fb.group({
      requestNo: '',
      employeeNo: '',
      gpfNo: '',
      name: '',
      district: '',
      reason: '',
      status: '',
      lyingWith: '',
    });
  }

  clearForm() {
    this.finalPaymentListForm.reset();
  }

  openInwardNoDialog() { }
  resetForm() {
    this.finalPaymentListForm.reset();
  }

  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  searchBill() { }

}

