import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialog
} from '@angular/material';
import { ListingPension2 } from '../../model/dppf';
import { SelectionModel } from '@angular/cdk/collections';
import { DppfMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
// import { SavedBill } from 'src/app/model/saved-bill';


@Component({
  selector: 'app-inward-outward-listing',
  templateUrl: './inward-outward-listing.component.html',
  styleUrls: ['./inward-outward-listing.component.css']
})
export class InwardOutwardListingComponent implements OnInit {
  // Variable
  errorMessage;
  inwardtype = 'Letter';
  // Form Group
  inwardOutwardListingForm: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) { }
  // Date
  todaysDate = new Date();
  // Form Control
  statusTypeCtrl: FormControl = new FormControl();
  brancchType: FormControl = new FormControl();
  pensionType: FormControl = new FormControl();
  pensionnType: FormControl = new FormControl();
  hbaMcaType: FormControl = new FormControl();
  hbaMcaaType: FormControl = new FormControl();
  npsType: FormControl = new FormControl();
  gpfType: FormControl = new FormControl();
  npssType: FormControl = new FormControl();
  districType: FormControl = new FormControl();
  statussType: FormControl = new FormControl();
  inwardType: FormControl = new FormControl();
  prrType: FormControl = new FormControl();
  keepWithTheFileCtrl: FormControl = new FormControl();
  // Lists
  workFlowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Approval In Progress' },
    { value: '2', viewValue: 'Send Back ' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Rejected' },
  ];


  classKeepWithTheFile: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  classBrancchType: ListValue[] = [
    { value: '1', viewValue: 'Pension' },
    { value: '2', viewValue: 'HBA/MCA' },
    { value: '3', viewValue: 'NPS' },
    { value: '4', viewValue: 'GPF' }
  ];
  classDistricType: ListValue[] = [
    { value: '1', viewValue: 'District 1' },
    { value: '2', viewValue: 'District 2' },
    { value: '3', viewValue: 'District 3' },
    { value: '4', viewValue: 'District 4' }
  ];

  classStatussType: ListValue[] = [
    { value: '1', viewValue: 'Forward' }
  ];

  classInwardType: ListValue[] = [
    { value: '1', viewValue: 'Letter' },
    { value: '2', viewValue: 'RTI' }
  ];

  classPensionType: ListValue[] = [
    { value: '1', viewValue: 'PR 1 to PR 8' },
    { value: '2', viewValue: ' PA Computer' },
    { value: '3', viewValue: 'Internal Audit' },
    { value: '4', viewValue: ' PA 12' },
    { value: '5', viewValue: 'LM' },
    { value: '6', viewValue: ' Vigilance' },
    { value: '7', viewValue: '  ADM' }
  ];
  classPensionnType: ListValue[] = [
    { value: '1', viewValue: 'PR 1 to PR 8' },
    { value: '2', viewValue: ' PA Computer' },
    { value: '3', viewValue: 'Internal Audit' },
    { value: '4', viewValue: ' PA 12' },
    { value: '5', viewValue: 'LM' },
    { value: '6', viewValue: ' Vigilance' },
    { value: '7', viewValue: '  ADM' }
  ];

  classHbaMcaType: ListValue[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: ' MCA' },
    { value: '3', viewValue: 'Control' }
  ];

  classHbaMcaaType: ListValue[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: ' MCA' },
    { value: '3', viewValue: 'Control' }
  ];

  classNpsType: ListValue[] = [
    { value: '1', viewValue: 'Registry' },
    { value: '2', viewValue: ' NPS Control' }
  ];
  classGpfType: ListValue[] = [
    { value: '1', viewValue: 'Control' },
    { value: '2', viewValue: ' Inward' },
    { value: '3', viewValue: 'Outward' },
    { value: '4', viewValue: ' PFC 1 to 5' }
  ];
  classNpssType: ListValue[] = [
    { value: '1', viewValue: 'Registry' },
    { value: '2', viewValue: ' NPS Control' }
  ];
  classGpffType: ListValue[] = [
    { value: '1', viewValue: 'Control' },
    { value: '2', viewValue: ' Inward' },
    { value: '3', viewValue: 'Outward' },
    { value: '4', viewValue: ' PFC 1 to 5' }
  ];
  classPrrType: ListValue[] = [
    { value: '1', viewValue: 'PR1' },
    { value: '2', viewValue: 'PR2' },
    { value: '3', viewValue: 'PR3' },
    { value: '4', viewValue: 'PR4' },
    { value: '5', viewValue: 'PR5' },
    { value: '6', viewValue: 'PR6' },
    { value: '7', viewValue: 'PR7' },
    { value: '8', viewValue: 'PR8' }
  ];
  // Table Source
  selection = new SelectionModel<ListingPension2>(true, []);
  Element_Data: ListingPension2[] = [
    {
      inwardNo: '12345/05/2019',
      inwardDate: '12-Jan-2020',
      inwardType: 'Letter',
      name: 'RAJOSHI SRIVASTAV',
      letterNo: 123422,
      letterDate: '22-Feb-2020',
      receivedFrom: 'Person',
      branch: 'Pension'
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '12-Feb-2020',
      inwardType: 'Letter',
      name: 'RAJ SRINATH',
      letterNo: 123421,
      letterDate: '12-Jan-2020',
      receivedFrom: 'Courier',
      branch: 'Pension'
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '22-Feb-2020',
      inwardType: 'Letter',
      name: 'RATTAN LAL',
      letterNo: 123455,
      letterDate: '12-Feb-2020',
      receivedFrom: 'Person',
      branch: 'Pension'
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '10-Dec-2018',
      inwardType: 'Letter',
      name: 'A.D. PATEL',
      letterNo: 123459,
      letterDate: '12-Feb-2020',
      receivedFrom: 'Courier',
      branch: 'Pension'
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '12-Aug-2019',
      inwardType: 'Letter',
      name: 'GUNJAN TYAGI',
      letterNo: 123456,
      letterDate: '10-Dec-2018',
      receivedFrom: 'Courier',
      branch: 'Pension'
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '12-Mar-2017',
      inwardType: 'Letter',
      name: 'JENNY DSOUZA',
      letterNo: 123453,
      letterDate: '12-Aug-2019',
      receivedFrom: 'Person',
      branch: 'Pension'
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '12/09/2015',
      inwardType: 'Letter',
      name: 'RIDHIMA RAZDAN',
      letterNo: 123450,
      letterDate: '12-Mar-2017',
      receivedFrom: 'Courier',
      branch: 'Pension'
    }
  ];

  displayedColumns: any[] = [
    'select',
    'serialNo',
    'inwardNo',
    'inwardDate',
    'inwardType',
    'name',
    'letterNo',
    'letterDate',
    'receivedFrom',
    'branch'
  ];
  dataSource = new MatTableDataSource<ListingPension2>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.errorMessage = DppfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.inwardOutwardListingForm = this.fb.group({
      inwardNumber: [''],
      inwardFDate: [''],
      letterNumber: [''],
      inward: ['', Validators.required],
      inwardToDate: [''],
      outwardToDate: [''],
      outwardFromDate: [''],
      retirementDate: [''],
      letterDate: [''],
      brancch: ['', Validators.required],
      distric: [''],
      statuss: [''],
      pension: ['', Validators.required],
      pensionn: ['', Validators.required],
      hbaMca: ['', Validators.required],
      hbaMcaa: ['', Validators.required],
      nps: ['', Validators.required],
      npss: ['', Validators.required],
      gpf: ['', Validators.required],
      gpff: ['', Validators.required],
      prr: [''],
      inwardLetterDate: [''],
      status: [''],
      keepWithTheFile: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
    });
  }

  resetForm() { }
  searchBill() { }
  workflowDetails() { }
  gotoListing() { }
  goToDashboard() { }
  goToSavedBillList() { }
  clearForm() {
    this.inwardOutwardListingForm.reset();
  }

  onInwardChange(event) {
    if (event === '1') {
      this.displayedColumns = [
        'select',
        'serialNo',
        'inwardNo',
        'inwardDate',
        'inwardType',
        'name',
        'letterNo',
        'letterDate',
        'receivedFrom',
        'branch'
      ];
      this.inwardtype = 'Letter';
    } else {
      this.displayedColumns = [
        'select',
        'serialNo',
        'inwardNo',
        'inwardDate',
        'inwardType',
        'name',
        'branch'
      ];
      this.inwardtype = 'RTI';

    }
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }
  //  Inward Details  popup
  openInwardNoDialog() {
    this.router.navigate(['./dppf/inward-outward-letter-screen-list-inwardno']);
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: ListingPension2): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  // Navigation Route

  gotoObjection() {
    this.router.navigate(['./dppf/objection']);
  }
  goToPage() {

  }
}
