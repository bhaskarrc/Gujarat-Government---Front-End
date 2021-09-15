import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { StandingChargeForwardDialogComponent1 } from '../new-item-estimate/new-item-estimates/new-item-estimates.component';
import { StandingChargeForwardDialogComponent, StadingChargeConfirmDialogComponent } from '../standing-charge/standalone-charge/standalone-charge.component';



const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Administrative Approval' },
];

@Component({
  selector: 'app-admin-approval-view',
  templateUrl: './admin-approval-view.component.html',
  styleUrls: ['./admin-approval-view.component.css']
})
export class AdminApprovalViewComponent implements OnInit {
  selectedindex: number;
  fileBrowseIndex: number;
  adminAppForm: FormGroup;
  date: any = new Date();
 errorMessages = budgetMessage;

  yesNo_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  yesNo7_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  yesNo8_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];

  attachmentlist: CommonListing[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Others' },
  ];

  headerJson: any[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Department', value: 'Education Department' },
    { label: 'Branch Name', value: 'Section V' },
    { label: 'Budget Publication Number', value: '04: Education Department' },
    { label: 'Demand', value: '009 Education' },
    { label: 'Major Head', value: '4202-Capital Outlay on Education,Sports,Art and Culture' },
    { label: 'Sector', value: 'B Capital Account of Social and Community Services' },
    { label: 'Sub Sector', value: '(a) Education, Sports, Art and Culture' },
    { label: 'Sub Major Head', value: '01-General Education ' },
    { label: 'Minor Head', value: '201: Elementary Education' },
    { label: 'Sub Head', value: '04-EDN-88 Water Harvesting of primary Schools' },
    { label: 'Detail Head', value: '00-EDN-88 Water Harvesting of primary Schools' },
    { label: 'Charged/Voted', value: 'Voted' },
    { label: 'Item No. and Name of Item', value: 'Construction of Building' },
    { label: 'CSS', value: 'No' },
    { label: 'State of Percentage Share ', value: '100.00%' }
  ];

  browseData: any[] = [
    { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
    { attachmentType: 'Sanction Order', fileName: 'AadharCard.pdf' },
  ];
  attachmentTypeCtrl: FormControl = new FormControl();
  yesNoCtrl: FormControl = new FormControl();
  yesNo7Ctrl: FormControl = new FormControl();
  yesNo8Ctrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();

  displayedBrowseColumns = ['position', 'attachmentType', 'fileName', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.browseData);

  itemViewCatogary: string[] = ['position', 'checklist', 'action'];
  ViewCatogarySourceData = ELEMENT_DATA;


  constructor(
    private el: ElementRef,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder,
    public dialog: MatDialog, ) { }

  ngOnInit() {

    this.createForm();
  }
  createForm() {
    this.adminAppForm = this.fb.group({
      refLetNo: ['19-20/BUD/AA/001'],
      referenceDate: ['10-Apr-2020'],
      reason: ['Reason for Expenditure Remarks'],
      yesNo: ['1'],
      yesNoSeven: ['1'],
      yesNoEight: ['2'],
      point1: ['Administrative Approval'],
      point2: ['Ahmedabad'],
      point3_1: ['Name'],
      point3_2: ['5000.00'],
      point3_3: ['5000.00'],
      point3_4: ['2.00'],
      point3_5: ['10'],
      point3_6: ['2.00'],
      point4: ['Details'],
      point5: ['Details'],
      point6: ['Arrangements'],
      point7: ['Details'],
      point8: [''],
      point10_1: ['1000.00'],
      point10_2: ['1000.00'],
      point11_1: ['5'],
      point11_2: ['Details'],
      point11_3: ['Details'],
      point11_4: ['Details'],
      pointA: ['Details'],
      pointB: ['Details'],
      point13: ['Details'],
    });
  }

  decimalPoint2($event) {
    $event.target.value = parseFloat($event.target.value).toFixed(2);
  }
  gotoListing() {
    this.router.navigate(['./budget/admin-approval-list']);
  }
  goToDashboard() { this.router.navigate(['']);
  }

}
