import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { TopScheduleEntryListing } from 'src/app/model/dppf-nps';



@Component({
  selector: 'app-nps-top-schedule-entry-listing',
  templateUrl: './nps-top-schedule-entry-listing.component.html',
  styleUrls: ['./nps-top-schedule-entry-listing.component.css']
})
export class NpsTopScheduleEntryListingComponent implements OnInit {
  // Date
  todayDate = new Date();
  maxDate = new Date();
  // Variable
  inwardDetails = true;
  errorMessage;
  // Form GRoup
  topScheduleEntryListForm: FormGroup;
  // Form Gorup
  typeOfPaymentCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  // List
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2020 ' },
    { value: '2', viewValue: '2021' },
    { value: '3', viewValue: '2022' },
    { value: '1', viewValue: '2023 ' },
    { value: '2', viewValue: '2024' },
    { value: '3', viewValue: '2025' },
  ];

  classTypeOfMonth: ListValue[] = [
    { value: '1', viewValue: 'January ' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },

  ];


  classTypeOfPayment: ListValue[] = [
    { value: '1', viewValue: 'Credit ' },
    { value: '2', viewValue: 'Debit' },

  ];
  classTypeOfTreasuryPao: ListValue[] = [
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


  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  // Table Content Data

  Element_Data: TopScheduleEntryListing[] = [
    {
      srno: '1',
      inwardNo: '12345/05/2020',
      dateInward: '22-FEB-2020',
      treasuryPao: 'Treasury',
      year: '2020',
      month: '02-JAN-2020',
      paymentType: 'Credit',
    },

    {
      srno: '2',
      inwardNo: '42345/05/2019',
      dateInward: '12-JAN-2020',
      treasuryPao: 'PAO',
      year: '2020',
      month: '02-JAN-2020',
      paymentType: 'Debit',
    },

    {
      srno: '3',
      inwardNo: '32345/05/2019',
      dateInward: '02-JAN-2020',
      treasuryPao: 'Treasury',
      year: '2020',
      month: '02-JAN-2020',
      paymentType: 'Credit',
    },

    {
      srno: '4',
      inwardNo: '62345/05/2019',
      dateInward: '19-JAN-2020',
      treasuryPao: 'PAO',
      year: '2020',
      month: '02-JAN-2020',
      paymentType: 'Debit',
    },


  ];
  // Table Source
  displayedColumns: any[] = [
    'srno',
    'inwardNo',
    'dateInward',
    'treasuryPao',
    'year',
    'month',
    'paymentType',
    'action'

  ];

  dataSource = new MatTableDataSource<TopScheduleEntryListing>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.topScheduleEntryListForm = this.fb.group({
      inwardNo: '',
      dateInward: undefined,
      treasuryPao: '',
      year: '',
      month: '',
      paymentType: '',
    });
  }
  // Clear FOrm
  clearForm() {
    this.topScheduleEntryListForm.reset();
  }
  // Reset FOrm
  resetForm() {
    this.topScheduleEntryListForm.reset();
  }
  // Delete Row
  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }
  // Search Inward No DppfNps
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.topScheduleEntryListForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }

}
