import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { DeleteConfirmDialogComponent } from '../wireframe-of-establishment-details/wireframe-of-establishment-details.component';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { StadingChargeConfirmDialogComponent, StandingChargeViewCommentsComponent } from '../standing-charge/standalone-charge/standalone-charge.component';
import { AdminApprovalList } from 'src/app/model/budget';
import { BudgetDirectives } from 'src/app/common/directive/budget-directive';

// Listing table Data
const ELEMENT_DATA: AdminApprovalList[] = [
  {
    bHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted',
    estType: 'Item Continious Estimate – Form E',
    iName:  'To rent vehicles from outsourced. ',
    fdAmt:  '1200.00',
    refNo:  '-',
    recFromOn:  '-',
    sentFromOn:  '-',
    lying:  '-',
    status:  '-',
    workFlowstatus:  'Forwarded to Approver',
   },
  {
    bHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted',
    estType: 'New Item Estimate – Form C / F',
    iName:  'Organic Farming Cell Staff ',
    fdAmt:  '2800.00',
    refNo:  '19-20/BUD/AA/001',
    recFromOn:  'Rajesh 10/2/2020  10:30:00 AM',
    sentFromOn:  'Rajesh 10/2/2020  10:30:00 AM',
    lying:  'Mr. Rajput',
    status:  'Draft',
    workFlowstatus:  'Forwarded to Approver',
   },
  {
    bHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted',
    estType: 'Work in Progress – Form I',
    iName:  'New Construction programme for Education ',
    fdAmt:  '2800.00',
    refNo:  '19-20/BUD/AA/002',
    recFromOn:  'Rajesh 10/2/2020  10:30:00 AM',
    sentFromOn:  'Rajesh 10/2/2020  10:30:00 AM',
    lying:  'Mr. Rajput',
    status:  'Pending',
    workFlowstatus:  'Forwarded to Approver',
   },
  {
    bHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted',
    estType: 'New Work Estimates – Form G/H',
    iName:  'Modernization of Veterinary Polyclinics ',
    fdAmt:  '3400.00',
    refNo:  '19-20/BUD/AA/003',
    recFromOn:  'Rajesh 10/2/2020  10:30:00 AM',
    sentFromOn:  'Rajesh 10/2/2020  10:30:00 AM',
    lying:  'Mr. Kumar',
    status:  'Approved',
    workFlowstatus:  'Cancelled',
   },
  {
    bHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted',
    estType: 'Item Continious Estimate – Form E',
    iName:  'Karuna Animal Ambulance-1962 ',
    fdAmt:  '5400.00',
    refNo:  '-',
    recFromOn:  '-',
    sentFromOn:  '-',
    lying:  '-',
    status:  '-',
    workFlowstatus:  'Cancelled',
   },
];
@Component({
  selector: 'app-admin-approval-list',
  templateUrl: './admin-approval-list.component.html',
  styleUrls: ['./admin-approval-list.component.css']
})
export class AdminApprovalListComponent implements OnInit {
  directiveObject = new BudgetDirectives(this.dialog);

// Search Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2011-2012' },
    { value: '2', viewValue: '2012-2013' },
    { value: '3', viewValue: '2013-2014' },
    { value: '4', viewValue: '2014-2015' },
    { value: '5', viewValue: '2015-2016' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2017-2018' },
    { value: '8', viewValue: '2018-2019' },
    { value: '9', viewValue: '2019-2020' },
    { value: '10', viewValue: '2020-2021' },
  ];
  estType_list: CommonListing[] = [
    { value: '1', viewValue: 'Standing Charges Estimates - Form B' },
    { value: '2', viewValue: 'New Item Estimates – Form C / F' },
    { value: '3', viewValue: 'Item Continuous Estimates – Form E' },
    { value: '4', viewValue: 'New Work Estimates – Form G/H' },
    { value: '5', viewValue: 'Work in Progress – Form I' }
  ];
  demand_list: CommonListing[] = [
    {value: '1', viewValue: '70 : Community Development'},
    {value: '2', viewValue: '71 : Rural Housing and Rural Development'},
    {value: '3', viewValue: '76 : Revenue Department'},
    {value: '4', viewValue: '79 : Relief on account Natural Calamities'},
    {value: '5', viewValue: '81 : Compensation and Assignment'},
    {value: '6', viewValue: '87 : Gujarat Capital Construction Scheme'},
  ];
  majHead_list: CommonListing[] = [
    { value: '1', viewValue: '2251 : Secretariat-Social Services' },
    { value: '2', viewValue: '2049 : Interest Payments' },
    { value: '3', viewValue: '2215 : Water Supply and Sanitation' },
    { value: '4', viewValue: '3435 : Ecology and Environment' },
    { value: '5', viewValue: '4217 : Capital Outlay on Urban Development' },
    { value: '6', viewValue: '2202 : General Education' },
  ];
  subMajHead_list: CommonListing[] = [
    { value: '1', viewValue: '8 : Other Transfer/Grants to States'},
    { value: '2', viewValue: '6 : Centrally Sponsored Schemes'},
  ];
  minorHead_list: CommonListing[] = [
    { value: '1', viewValue: '101 : Forest Conservation, Development and Regeneration'},
    { value: '2', viewValue: '102 : Small Scale Industries'},
    { value: '3', viewValue: '105 : Forest Produce'},
  ];
  subHead_list: CommonListing[] = [
    { value: '1', viewValue: '12 : Welfare of Schedule Castes' },
    { value: '2', viewValue: '13 : Welfare of Scheduled Tribes' },
    { value: '3', viewValue: '15 : Soil and Water Conservation' },
    { value: '4', viewValue: '16 : Community Development' },
    { value: '5', viewValue: '19 : Technical Education Polytechnics' },
  ];
  detailHead_list: CommonListing[] = [
    { value: '1', viewValue: '0 : HLT-28  Leprosy Control Programme' },
    { value: '2', viewValue: '0 : VKY-311 Post Metric State Scholarship for S.T. girls Students'},
    { value: '3', viewValue: '0 : VKY-9 Umbrella Scheme' },
  ];
  status_list: CommonListing[] = [
    { value: '1', viewValue: 'Draft'},
    { value: '2', viewValue: 'Pending'},
    { value: '3', viewValue: 'Approved'},
  ];

  refNo_list: CommonListing[] = [
    { value: '1', viewValue: '19-20/BUD/AA/001'},
    { value: '2', viewValue: '19-20/BUD/AA/002'},
    { value: '3', viewValue: '19-20/BUD/AA/003'},
  ];

// Listing Table
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = ['position', 'bHead', 'estType', 'iName', 'fdAmt',
   'refNo', 'recFromOn', 'sentFromOn', 'workFlowstatus', 'lying', 'status', 'action'];

  finYearCtrl: FormControl = new FormControl();
  estTypeCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majHeadCtrl: FormControl = new FormControl();
  subMajHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  refNoCtrl: FormControl = new FormControl();

  annexureListForm: FormGroup;
  errorMessages = budgetMessage;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.annexureListForm = this.fb.group({
      finYear: [''],
      estType: [''],
      demand: [''],
      majHead: [''],
      subMajHead: [''],
      minorHead: [''],
      subHead: [''],
      detailHead: [''],
      status: [''],
      refNo: [''],
    });
  }

  clearForm() {
    this.annexureListForm.reset();
  }
  // Delete Popup
  deleteConfirmPopup(index) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteRec(index);
      }
    });
  }
// Delete
  deleteRec(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

}
