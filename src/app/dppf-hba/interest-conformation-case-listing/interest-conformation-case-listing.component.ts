import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { InterestConformationCaseListing } from 'src/app/model/dppf-hba';


@Component({
  selector: 'app-interest-conformation-case-listing',
  templateUrl: './interest-conformation-case-listing.component.html',
  styleUrls: ['./interest-conformation-case-listing.component.css']
})
export class InterestConformationCaseListingComponent implements OnInit {
  // Table Source
  Element_Data: InterestConformationCaseListing[] = [
    {
      employeeNo: '1200064595',
      hbaNo: '84846854',
      name: 'A H Mehta',
      districtName: 'District Treasury Office,Gandhinagar',
      ddo: '00',
      cardex: '5000',
      interestAmount: '3000.0000',
      officeName: '-',
      status: 'Approval in Progress',
      workFlowStatus: '',
    },
    {
      employeeNo: '1200064596',
      hbaNo: '46854',
      name: 'R K Mehta',
      districtName: 'District Treasury Office,Gandhinagar',
      ddo: '01',
      cardex: '5000',
      interestAmount: '3000.0000',
      officeName: '-',
      status: 'Approved',
      workFlowStatus: '',
    },
  ];
  dataSource = new MatTableDataSource<InterestConformationCaseListing>(this.Element_Data);
  displayedColumns: string[] = ['srno',
    'employeeNo',
    'hbaNo',
    'name',
    'districtName',
    'ddo',
    'cardex',
    'officeName',
    'interestAmount',
    'status',
    'workFlowStatus',
    'action',

  ];
  // Form Group
  searchForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Control
  loanFornCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  workFlowStatusCtrl: FormControl = new FormControl();
  // List
  load_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];
  statusList: CommonListing[] = [
    { value: '1', viewValue: 'Approval in Progress' },
    { value: '2', viewValue: 'Send Back' },
    { value: '3', viewValue: 'Approved' },
    { value: '3', viewValue: 'Rejected' },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      employeeNo: [''],
      hbaAcountNo: [''],
      name: [''],
      loanFor: [''],
      district: [''],
      ddo: [''],
      cardex: [''],
      interestAmount: [''],
      officeName: [''],
      status: [''],
      workFlowStatus: [''],

    });
  }
}
