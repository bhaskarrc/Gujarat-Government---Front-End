import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { OutwardDetailsList } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-outward-details-listing',
  templateUrl: './outward-details-listing.component.html',
  styleUrls: ['./outward-details-listing.component.css']
})
export class OutwardDetailsListingComponent implements OnInit {
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form Gorup
  outwardDetailsListingForm: FormGroup;
  // Form COntrol
  typeOfDeliveryModeCtrl: FormControl = new FormControl();
  typeOfOutwardToCtrl: FormControl = new FormControl();
  typeOfStateCtrl: FormControl = new FormControl();
  // List
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

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  // Table SOurce

  Element_Data: OutwardDetailsList[] = [
    {
      srno: '1',
      inwardNo: '42345/05/2019',
      inwardDate: '02/01/2020',
      letterNo: '12345',
      letterDate: '08/03/2019',
      deliveryMode: 'Post',
      outwardTo: 'DDO',
      state: 'Gujarat',

    },

    {
      srno: '2',
      inwardNo: '32345/05/2019',
      inwardDate: '02/01/2020',
      letterNo: '12345',
      letterDate: '08/03/2019',
      deliveryMode: 'Courier',
      outwardTo: 'DDO',
      state: 'Gujarat',
    },

    {
      srno: '3',
      inwardNo: '92345/05/2019',
      inwardDate: '02/01/2020',
      letterNo: '42345',
      letterDate: '08/03/2019',
      deliveryMode: 'Courier',
      outwardTo: 'AG',
      state: 'Gujarat',
    },

    {
      srno: '4',
      inwardNo: '72345/05/2019',
      inwardDate: '01/01/2020',
      letterNo: '52369',
      letterDate: '08/02/2020',
      deliveryMode: 'Speed Post',
      outwardTo: 'DDO',
      state: 'Gujarat',
    }
  ];

  displayedColumns: any[] = [
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

  clearForm() {
    this.outwardDetailsListingForm.reset();
  }

  openInwardNoDialog() { }
  resetForm() {
    this.outwardDetailsListingForm.reset();
  }

  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

}
