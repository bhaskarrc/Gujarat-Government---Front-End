import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { Attachment, FamilyDetails } from 'src/app/model/dppf-nps';
@Component({
  selector: 'app-annexure-two-k-nps',
  templateUrl: './annexure-two-k-nps.component.html',
  styleUrls: ['./annexure-two-k-nps.component.css']
})
export class AnnexureTwoKNpsComponent implements OnInit {
  // List
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  designationList: CommonListing[] = [
    { value: '1', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '2', viewValue: 'Climate Change Department' },
    { value: '3', viewValue: 'Education Department' },
    { value: '4', viewValue: 'Energy & Petrochemicals Department' },
    { value: '5', viewValue: 'Finance Department' },
    { value: '6', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '7', viewValue: 'Forest & Environment Department' },
    { value: '8', viewValue: 'General Administration Department' },
    { value: '9', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '10', viewValue: 'Health & Family Welfare Department' },
  ];

  departmentHeadList: CommonListing[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  departmentList: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];

  salaryList: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];
  familyDetailData: FamilyDetails[] = [
    { name: '', dateOfBirth: '', age: '', percentage: '', relation: '' },
  ];

  // Table Source
  familyDetailColumns = [
    'name', 'age', 'percentage', 'relation',
  ];
  // Date
  todayDate = new Date();
  // From Gorup
  annexuryTwoKForm: FormGroup;
  // Form COntrol
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  deparmentCTRL: FormControl = new FormControl();
  deparmentHeadCTRL: FormControl = new FormControl();
  designationCTRL: FormControl = new FormControl();
  paycommissionCTRL: FormControl = new FormControl();
  originalSalaryCTRL: FormControl = new FormControl();
  // Table Source
  familDetailsDataSource = new MatTableDataSource<FamilyDetails>(this.familyDetailData);
  // Variable
  selectedIndex: number;
  tabDisable: Boolean = true;
  isSubmitted = false;
  errorMessages = DppfNpsMessage;
  // Directive
  directiveObj = new CommonDirective(this.router);
  // Constructor
  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.annexuryTwoKFormData();
  }

  annexuryTwoKFormData() {
    this.annexuryTwoKForm = this.fb.group({
      department: [''],
      codeNumberByEDPCell: [''],
      departmentHead: [''],
      codeNumberGivenToDepartmentByEDPCell: [''],
      ragNumber: [''],
      employeeName: [''],
      designation: [''],
      branchNameAndAddress: [''],
      payCommission: [''],
      originalSalary: [''],
      dateOfBirth: [''],
      joiningDate: [''],
      specialNote: [''],
      permanentPensionAccountNumber: [''],
      todayDate: [''],
    });
  }
  // Open workFlow dialog
  onSubmit() {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // get mat tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }
  // goto next tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

}
