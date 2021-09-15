import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { SearchCardexDppfNpsComponent } from '../search-cardex-dppf-nps/search-cardex-dppf-nps.component';
import { InwardDetailsListing } from 'src/app/model/dppf-nps';


@Component({
  selector: 'app-nps-inward-details-listing',
  templateUrl: './nps-inward-details-listing.component.html',
  styleUrls: ['./nps-inward-details-listing.component.css']
})
export class NpsInwardDetailsListingComponent implements OnInit {
  // Date
  maxDate = new Date();
  todayDate = new Date();
  // Form Gorup
  inwardDetailFormList: FormGroup;
  inwardDetails = true;
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();

  // List
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
    { value: '11', viewValue: 'Miss Match' }
  ];

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
  errorMessage;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  // Table Content
  Element_Data: InwardDetailsListing[] = [
    {
      srno: '1',
      inwardNo: '92345/02/2019',
      inwardDate: '12-Jan-2020',
      inwardType: 'Top Schedule',
      district: 'Ahmedabad',
      treasuryPaoName: 'Raman Patel',
      CardexNo: 624,
      status: 'Pending',
      lyingWith: 'Rajiv Razdan'
    },

    {
      srno: '2',
      inwardNo: '62345/05/2019',
      inwardDate: '12-Jan-2020',
      inwardType: 'Final Payment Register',
      district: 'Vadodara',
      treasuryPaoName: 'Mukul Singh',
      CardexNo: 911,
      status: 'Pending',
      lyingWith: 'Tushar Aher'
    },

    {
      srno: '3',
      inwardNo: '22345/07/2019',
      inwardDate: '12-Jan-2020',
      inwardType: 'Final Payment Register',
      district: 'Vadodara',
      treasuryPaoName: 'Raman Singh',
      CardexNo: 323,
      status: 'Pending',
      lyingWith: 'Rajiv Rastogi'
    },

    {
      srno: '4',
      inwardNo: '32345/01/2019',
      inwardDate: '12-Jan-2020',
      inwardType: 'Class 4/DW/WC',
      district: 'Mahisagar',
      treasuryPaoName: 'Raman Singh',
      CardexNo: 763,
      status: 'Pending',
      lyingWith: 'Tushar Aher'
    },
  ];
  // Table Source
  displayedColumns: any[] = [
    // 'select',
    'srno',
    'inwardNo',
    'inwardDate',
    'inwardType',
    'district',
    'treasuryPaoName',
    'CardexNo',
    'status',
    'lyingWith',
    'action',

  ];

  dataSource = new MatTableDataSource<InwardDetailsListing>(this.Element_Data);
  // Directive
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
      typeOfInward: [Validators.required],
      district: [Validators.required],
      treasuryPao: [Validators.required],
      CardexNumber: '',
    });
  }


  // Search Inward No Dppf-Nps
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
  // Search Cardex Dppf-Nps
  openDialogCardexNumber() {
    const dialogRef = this.dialog.open(SearchCardexDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.inwardDetailFormList.patchValue({
          cardexNo: result[0].cardexNo,
          ddoName: result[0].ddoName,
        });
      }
    });
  }

}
