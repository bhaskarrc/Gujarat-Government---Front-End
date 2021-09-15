import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { SelectionModel } from '@angular/cdk/collections';
import { ListingInward } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-inward-screen-listing',
  templateUrl: './inward-screen-listing.component.html',
  styleUrls: ['./inward-screen-listing.component.css']
})


export class InwardScreenListingComponent implements OnInit {
  // DAte
  maxDate = new Date();
  todayDate = new Date();
  // Form Group
  inwardDetailFormList: FormGroup;
  // Form Control
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
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
    { value: '1', viewValue: 'District Treasury Office, Gandhinagar ' },
    { value: '2', viewValue: 'District Treasury Office, Ahmedabad ' },


  ];
  errorMessage;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  selection = new SelectionModel<ListingInward>(true, []);

  // Table Source
  Element_Data: ListingInward[] = [
    {
      srno: '1',
      inwardNo: '92345/02/2019',
      inwardDate: '12/01/2020',
      inwardType: 'Top Schedule',
      district: 'Ahmedabad',
      treasuryPaoName: 'District Treasury Office,Ahmedabad',
      CardexNo: 624,
      status: 'Pending',
      lyingWith: 'Rajiv Razdan'
    },

    {
      srno: '2',
      inwardNo: '62345/05/2019',
      inwardDate: '12/01/2020',
      inwardType: 'Final Payment Register',
      district: 'Vadodara',
      treasuryPaoName: 'District Treasury Office,Ahmedabad',
      CardexNo: 911,
      status: 'Pending',
      lyingWith: 'Tushar Aher'
    },

    {
      srno: '3',
      inwardNo: '22345/07/2019',
      inwardDate: '12/01/2020',
      inwardType: 'Final Payment Register',
      district: 'Vadodara',
      treasuryPaoName: 'District Treasury Office,Gandhinagar',
      CardexNo: 323,
      status: 'Pending',
      lyingWith: 'Rajiv Rastogi'
    },

    {
      srno: '4',
      inwardNo: '32345/01/2019',
      inwardDate: '12/01/2020',
      inwardType: 'Class 4/DW/WC',
      district: 'Mahisagar',
      treasuryPaoName: 'District Treasury Office,Gandhinagar',
      CardexNo: 763,
      status: 'Pending',
      lyingWith: 'Tushar Aher'
    },
  ];

  displayedColumns: any[] = [
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

  dataSource = new MatTableDataSource<ListingInward>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.inwardDetailFormList = this.fb.group({
      inwardNumber: '',
      inwardDate: '',
      typeOfInward: ['', Validators.required],
      district: ['', Validators.required],
      treasuryPao: ['', Validators.required],
      CardexNumber: '',
    });
  }

  clearForm() {
    this.inwardDetailFormList.reset();
  }

  openInwardNoDialog() { }
  resetForm() {
    this.inwardDetailFormList.reset();
  }

  deleteRowRecovery(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  searchBill() { }

}
