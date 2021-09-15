import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { OutwardDetailsList } from 'src/app/model/dppf-nps';


@Component({
  selector: 'app-nps-outward-details-listing',
  templateUrl: './nps-outward-details-listing.component.html',
  styleUrls: ['./nps-outward-details-listing.component.css']
})
export class NpsOutwardDetailsListingComponent implements OnInit {
  // Date
  todayDate = new Date();
  maxDate = new Date();
  // Variable
  inwardDetails = true;
  errorMessage;
  // Form Group
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

  // Directive
  directiveObj = new CommonDirective();

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  // Table Content 
  Element_Data: OutwardDetailsList[] = [
    {
      srno: '1',
      inwardNo: '42345/05/2019',
      inwardDate: '02-JAN-2020',
      letterNo: '12345',
      letterDate: '08-MAR-2019',
      deliveryMode: 'Post',
      outwardTo: 'DDO',
      state: 'Gujarat',

    },

    {
      srno: '2',
      inwardNo: '32345/05/2019',
      inwardDate: '02-JAN-2020',
      letterNo: '12345',
      letterDate: '08-MAR-2019',
      deliveryMode: 'Courier',
      outwardTo: 'DDO',
      state: 'Gujarat',
    },

    {
      srno: '3',
      inwardNo: '92345/05/2019',
      inwardDate: '02-JAN-2020',
      letterNo: '42345',
      letterDate: '08-MAR-2019',
      deliveryMode: 'Courier',
      outwardTo: 'AG',
      state: 'Gujarat',
    },

    {
      srno: '4',
      inwardNo: '72345/05/2019',
      inwardDate: '01-JAN-2020',
      letterNo: '52369',
      letterDate: '08-FEB-2020',
      deliveryMode: 'Speed Post',
      outwardTo: 'DDO',
      state: 'Gujarat',
    },


  ];
  // Table SOurce
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

    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.outwardDetailsListingForm = this.fb.group({

      inwardNo: '',
      dateInward: undefined,
      letterNumber: '',
      letterDate: '',
      deliveryMode: '',
      outwardTo: '',
      state: '',
    });
  }
  // Dialog Inward No DppfNps 
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.outwardDetailsListingForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }

}
