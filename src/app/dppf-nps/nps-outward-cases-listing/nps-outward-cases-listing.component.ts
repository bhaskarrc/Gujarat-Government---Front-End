import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { SavedCasesInterface } from 'src/app/model/dppf-nps';



@Component({
  selector: 'app-nps-outward-cases-listing',
  templateUrl: './nps-outward-cases-listing.component.html',
  styleUrls: ['./nps-outward-cases-listing.component.css']
})
export class NpsOutwardCasesListingComponent implements OnInit {
  // Variable
  errormsg = DppfNpsMessage;
  inwardDetails = true;
  // Form Group
  outwardCasesForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Control
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();
  // List Of Class Type of
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
  // List of class Type Of District
  classTypeOfDistrict: ListValue[] = [
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

  // class Type Of Inward
  classTypeOfInward: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule' },
    { value: '2', viewValue: 'AGTE Misclassified Entry' },
    { value: '3', viewValue: 'Request for Account Generation' },
    { value: '4', viewValue: 'Other' },
    { value: '5', viewValue: 'Debit/Credit Correction Entry' },
    { value: '6', viewValue: 'AGTE Clearance Entry' },
    { value: '7', viewValue: 'Request for account details Modification' },
    { value: '8', viewValue: 'E-mail' },
    { value: '9', viewValue: 'Final Withdrawal' },
    { value: '10', viewValue: 'Partial Withdrawal' },
    { value: '11', viewValue: 'Miss Match' },
  ];
  // List class Type Of Month
  classTypeOfMonth: ListValue[] = [
    { value: '1', viewValue: 'January' },
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
  // List class Type Of Year
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2005' },
    { value: '2', viewValue: '2006' },
    { value: '3', viewValue: '2007' },
    { value: '4', viewValue: '2008' },
    { value: '5', viewValue: '2009' },
    { value: '6', viewValue: '2010' },
    { value: '7', viewValue: '2011' },
    { value: '8', viewValue: '2012' },
    { value: '9', viewValue: '2013' },
    { value: '10', viewValue: '2014' },
    { value: '11', viewValue: '2015' },
    { value: '12', viewValue: '2016' },
    { value: '13', viewValue: '2017' },
    { value: '14', viewValue: '2018' },
    { value: '15', viewValue: '2019' },
    { value: '16', viewValue: '2020' },
  ];
  // Table Source Element Date
  Element_Data: SavedCasesInterface[] = [

    {
      outwardNo: '115772/11/03/2019',
      outwardDate: '22-FEB-2019',
      inwardNo: '4134/01/2019',
      inwardDate: '12-FEB-2020',
      inwardType: 'Class 4 Final Payment Register',
      gpfNo: 'PW/DAT/10234',
      status: 'Objected',
    },

    {
      outwardNo: '315772/11/03/2019',
      outwardDate: '10-FEB-2019',
      inwardNo: '1157/12/04/2019',
      inwardDate: '26-JAN-2020',
      inwardType: 'Class 4 Final Payment Register',
      gpfNo: 'PW/DAT/18773',
      status: 'Objected',
    },

    {
      outwardNo: '615772/11/03/2020',
      outwardDate: '11-JAN-2019',
      inwardNo: '5134/01/2019',
      inwardDate: '12-FEB-2020',
      inwardType: 'Class 4 Final Payment Register',
      gpfNo: 'PW/DAT/19876',
      status: 'Objected',
    },

    {
      outwardNo: '215772/11/03/2019',
      outwardDate: '12-FEB-2020',
      inwardNo: '3157/12/04/2019',
      inwardDate: '26-JAN-2020',
      inwardType: 'Class 4 Final Payment Register',
      gpfNo: 'PW/DAT/12345',
      status: 'Objected',
    },
  ];
  // Table Source
  displayedColumns: any[] = [
    'select',
    'srno',
    'outwardNo',
    'outwardDate',
    'inwardNo',
    'inwardDate',
    'inwardType',
    'gpfNo',
    'status',
  ];

  dataSource = new MatTableDataSource<SavedCasesInterface>(this.Element_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // Directive Common
  directiveObj = new CommonDirective();

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.outwardCasesForm = this.fb.group({
      search: '',
      inwardNo: '',
      inwardDate: '',
      typeOfInward: '',
      district: '',
      treasuryPao: '',
      year: '',
      month: '',
    });
  }
  // Work FLow Data
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // search Inward Dialog
  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.outwardCasesForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }


}
