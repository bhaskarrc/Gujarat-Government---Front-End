import { OutwardDetailsList } from './../../model/dppf-hba';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outward-details-listing-hba',
  templateUrl: './outward-details-listing-hba.component.html',
  styleUrls: ['./outward-details-listing-hba.component.css']
})
export class OutwardDetailsListingHbaComponent implements OnInit {
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  outwardDetailsListingForm: FormGroup;
  typeOfDeliveryModeCtrl: FormControl = new FormControl();
  typeOfOutwardToCtrl: FormControl = new FormControl();
  typeOfStateCtrl: FormControl = new FormControl();

  // Lists

  classTypeOfDeliveryMode: ListValue[] = [
    { value: '1', viewValue: 'Courier ' },
    { value: '2', viewValue: 'Speed Post' },
    { value: '3', viewValue: 'Post' },
    { value: '4', viewValue: 'Hand Delivery' },
    { value: '5', viewValue: 'Other' },
  ];

  classTypeOfOutwardTo: ListValue[] = [
    { value: '1', viewValue: 'Treasury/PAO ' },
    { value: '2', viewValue: 'DDO' },
    { value: '3', viewValue: 'AO' },
    { value: '4', viewValue: 'AG ' },
    { value: '5', viewValue: 'Other' },
  ];

  classTypeOfState: ListValue[] = [
    { value: '1', viewValue: 'Andaman and Nicobar Island ' },
    { value: '2', viewValue: 'Andhra Pradesh' },
    { value: '3', viewValue: 'Arunachal Pradesh ' },
    { value: '4', viewValue: 'Assam' },
    { value: '5', viewValue: 'Bihar ' },
    { value: '6', viewValue: 'Chandigarh' },
    { value: '7', viewValue: 'Chhattisgarh ' },
    { value: '8', viewValue: 'Delhi' },
    { value: '9', viewValue: 'Goa ' },
    { value: '10', viewValue: 'Gujarat' },
    { value: '11', viewValue: 'Haryana ' },
    { value: '12', viewValue: 'Jharkhand' },
  ];

  // Error message variable
  errorMessage;
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  // Table Source
  Element_Data: OutwardDetailsList[] = [
    {
      srno: '1',
      inwardNo: '42345/05/2019',
      inwardDate: '02-Mar-2020',
      letterNo: '12345',
      letterDate: '08-Mar-2019	',
      deliveryMode: 'Post',
      outwardTo: 'DDO',
      state: 'Gujarat',
    },
    {
      srno: '2',
      inwardNo: '32345/05/2019',
      inwardDate: '02-Mar-2020',
      letterNo: '12345',
      letterDate: '08-Mar-2019	',
      deliveryMode: 'Courier',
      outwardTo: 'DDO',
      state: 'Gujarat',
    },
    {
      srno: '3',
      inwardNo: '92345/05/2019',
      inwardDate: '02-Mar-2020',
      letterNo: '42345',
      letterDate: '08-Mar-2019	',
      deliveryMode: 'Courier',
      outwardTo: 'AG',
      state: 'Gujarat',
    },
    {
      srno: '4',
      inwardNo: '72345/05/2019',
      inwardDate: '01-Mar-2020',
      letterNo: '52369',
      letterDate: '08/02/2020',
      deliveryMode: 'Speed Post',
      outwardTo: 'DDO',
      state: 'Gujarat',
    },
  ];

  displayedColumns: string[] = [
    'srno',
    'inwardNo',
    'inwardDate',
    'letterNo',
    'letterDate',
    'deliveryMode',
    'outwardTo',
    'state',
    'action'
  ];

  dataSource = new MatTableDataSource<OutwardDetailsList>(this.Element_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.outwardDetailsListingForm = this.fb.group({
      inwardNumber: '',
      dateInward: undefined,
      letterNumber: '',
      letterDate: '',
      deliveryMode: '',
      outwardTo: '',
      state: '',
    });
  }

  // clears form
  clearForm() {
    this.outwardDetailsListingForm.reset();
  }

  // deletes row
  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
  // routing
  navigate() {
    this.router.navigate(['./dppf-hba/outward-details']);
  }


}
