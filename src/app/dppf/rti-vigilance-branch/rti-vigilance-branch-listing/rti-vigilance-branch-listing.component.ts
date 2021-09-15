import { DataService } from '.././../../common/data.service';
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
import { ListingPension } from '../../../model/dppf';
import { SelectionModel } from '@angular/cdk/collections';
import { DppfMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rti-vigilance-branch-listing',
  templateUrl: './rti-vigilance-branch-listing.component.html',
  styleUrls: ['./rti-vigilance-branch-listing.component.css']
})
export class RtiVigilanceBranchListingComponent implements OnInit {
  // Variable
  errorMessage;
  inwardtype = 'Letter';
  // Form Group
  rtiVigilanceBranchListingForm: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router, private dataService: DataService) { }
  // Date
  todaysDate = new Date();
  // Form Control
  statusTypeCtrl: FormControl = new FormControl();
  brancchType: FormControl = new FormControl();
  pensionType: FormControl = new FormControl();
  hbaMcaType: FormControl = new FormControl();
  npsType: FormControl = new FormControl();
  gpfType: FormControl = new FormControl();
  inwardType: FormControl = new FormControl();
  prrType: FormControl = new FormControl();
  // Lists
  workFlowStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Approval In Progress' },
    { value: '2', viewValue: 'Send Back ' },
    { value: '3', viewValue: 'Approved' },
    { value: '4', viewValue: 'Rejected' },
  ];

  classBrancchType: ListValue[] = [
    { value: '1', viewValue: 'Pension' },
    { value: '2', viewValue: 'HBA/MCA' },
    { value: '3', viewValue: 'NPS' },
    { value: '4', viewValue: 'GPF' }
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

  classHbaMcaType: ListValue[] = [
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
  selection = new SelectionModel<ListingPension>(true, []);
  Element_Data: ListingPension[] = [
    {
      inwardNo: '12345/05/2019',
      inwardDate: '12-Jan-2020',
      inwardType: 'Letter',
      name: 'RAJOSHI SRIVASTAV',
      letterNo: 123422,
      letterDate: '22-Feb-2020',
      receivedFrom: 'Person',
      branch: 'Pension',
      status: '',
      wfStatus: '',
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '12-Feb-2020',
      inwardType: 'Letter',
      name: 'RAJ SRINATH',
      letterNo: 123421,
      letterDate: '12-Jan-2020',
      receivedFrom: 'Courier',
      branch: 'Pension',
      status: '',
      wfStatus: '',
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '22-Feb-2020',
      inwardType: 'Letter',
      name: 'RATTAN LAL',
      letterNo: 123455,
      letterDate: '12-Feb-2020',
      receivedFrom: 'Person',
      branch: 'Pension',
      status: '',
      wfStatus: '',
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '10-Dec-2018',
      inwardType: 'Letter',
      name: 'A.D. PATEL',
      letterNo: 123459,
      letterDate: '12-Feb-2020',
      receivedFrom: 'Courier',
      branch: 'Pension',
      status: '',
      wfStatus: '',
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '12-Aug-2019',
      inwardType: 'Letter',
      name: 'GUNJAN TYAGI',
      letterNo: 123456,
      letterDate: '10-Dec-2018',
      receivedFrom: 'Courier',
      branch: 'Pension',
      status: '',
      wfStatus: '',
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '12-Mar-2017',
      inwardType: 'Letter',
      name: 'JENNY DSOUZA',
      letterNo: 123453,
      letterDate: '12-Aug-2019',
      receivedFrom: 'Person',
      branch: 'Pension',
      status: '',
      wfStatus: '',
    },

    {
      inwardNo: '12345/05/2019',
      inwardDate: '12/09/2015',
      inwardType: 'Letter',
      name: 'RIDHIMA RAZDAN',
      letterNo: 123450,
      letterDate: '12-Mar-2017',
      receivedFrom: 'Courier',
      branch: 'Pension',
      status: '',
      wfStatus: '',
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
    'status',
    'wfStatus'
  ];
  dataSource = new MatTableDataSource<ListingPension>(this.Element_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.errorMessage = DppfMessage;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.rtiVigilanceBranchListingForm = this.fb.group({
      inwardNumber: [''],
      inwardFDate: [''],
      letterNumber: [''],
      inward: ['', Validators.required],
      retirementDate: [''],
      inwardToDate: [''],
      letterDate: [''],
      brancch: ['', Validators.required],
      pension: ['', Validators.required],
      hbaMca: ['', Validators.required],
      nps: ['', Validators.required],
      gpf: ['', Validators.required],
      prr: [''],
      inwardLetterDate: [''],
      status: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
    });
  }

  clearForm() {
    this.rtiVigilanceBranchListingForm.reset();
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
        'branch',
        'status',
        'wfStatus'
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
        'branch',
        'status',
        'wfStatus'
      ];
      this.inwardtype = 'RTI';

    }
  }

  //  Inward Details  popup
  openInwardNoDialog() {
    this.router.navigate(['./dppf/rti-vigilance-branch']);
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: ListingPension): string {
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
