import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { CommonListing } from 'src/app/model/common-listing';
import { SearchEmployeeDppfNpsComponent } from './../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { FamilyDetails } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-annexure-two-k',
  templateUrl: './annexure-two-k.component.html',
  styleUrls: ['./annexure-two-k.component.css']
})
export class AnnexureTwoKComponent implements OnInit {


  // List Attcment
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  // List
  departmentList: CommonListing[] = [
    { value: ' ', viewValue: '' }
  ];


  payBandList: CommonListing[] = [
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' },
  ];

  gradPayList: CommonListing[] = [
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' },
  ];

  payLevelList: CommonListing[] = [
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' },
  ];

  maritalStatus_list: CommonListing[] = [
    { value: '1', viewValue: 'Unmarried' },
    { value: '2', viewValue: 'Married' },
    { value: '3', viewValue: 'Divorce' },
    { value: '4', viewValue: 'Separated' },
    { value: '5', viewValue: 'Widow' },
    { value: '6', viewValue: 'Widower' },
  ];

  cellIdList: CommonListing[] = [
    { value: '1', viewValue: '' },
  ];

  relation_lists: CommonListing[] = [
    { value: '1', viewValue: 'Spouce' },
    { value: '2', viewValue: 'Son' },
    { value: '3', viewValue: 'Daughter' },
    { value: '4', viewValue: 'Father' },
    { value: '5', viewValue: 'Other' },
    { value: '6', viewValue: 'Brother' },
    { value: '7', viewValue: 'Sister' },
    { value: '8', viewValue: 'Grand Father' },
    { value: '9', viewValue: 'Grand Mother' },
    { value: '10', viewValue: 'Mother-in-Law' },
    { value: '11', viewValue: 'Sister-in-Law' },
    { value: '12', viewValue: 'Uncle' },
    { value: '13', viewValue: 'Cousin' },
    { value: '14', viewValue: 'Nephew' },
    { value: '15', viewValue: 'Aunty' },
    { value: '16', viewValue: 'Niece' },
  ];

  headOfDepartmentList: CommonListing[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  officeNameList: CommonListing[] = [
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' },
  ];
  classList: CommonListing[] = [
    { value: '1', viewValue: 'Class 1' },
    { value: '2', viewValue: 'Class 2' },
    { value: '3', viewValue: 'Class 3' },
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

  payCommissionList: CommonListing[] = [
    { value: '1', viewValue: '5th' },
    { value: '2', viewValue: '6th' },
    { value: '3', viewValue: '7th' },
  ];

  salaryList: CommonListing[] = [

    { value: '1', viewValue: '' }
  ];


  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
  ];

  familyDetailData: FamilyDetails[] = [
    { name: 'Karan', dateOfBirth: '12-MAR-1997', age: '22', percentage: '50', relation: 'Son' },
    { name: 'Komal', dateOfBirth: '20-FEB-2000', age: '19', percentage: '50', relation: 'Daughter' },
  ];

  familyDetailColumns = [
    'name', 'dateOfBirth', 'age', 'percentage', 'relation',
  ];


  departmentHeadList: CommonListing[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  categoryList: CommonListing[] = [
    { value: '1', viewValue: 'Government Gazzeted' },
  ];

  payScaleList: CommonListing[] = [
    { value: '1', viewValue: '5000-200-7000' },
    { value: '2', viewValue: '5500-250-9000' },
    { value: '3', viewValue: '8500-300-12000' },
  ];
  // Date
  todayDate = new Date();
  // Variable
  errorMessages = DppfNpsMessage;
  selectedIndex: number;
  tabDisable: Boolean = true;
  isSubmitted = false;
  // Form Gorup
  annexuryTwoKForm: FormGroup;
  // FormControl
  designationCTRL: FormControl = new FormControl();
  deparmentCTRL: FormControl = new FormControl();
  paycommissionCTRL: FormControl = new FormControl();
  salaryCTRL: FormControl = new FormControl();
  originalSalaryCTRL: FormControl = new FormControl();
  isNomineeCTRL: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  relationCTRL: FormControl = new FormControl();
  headOfDeparmentCTRL: FormControl = new FormControl();
  officeNameCTRL: FormControl = new FormControl();
  payBandCTRL: FormControl = new FormControl();
  gradPayCTRL: FormControl = new FormControl();
  payLevelCTRL: FormControl = new FormControl();
  cellIdCTRL: FormControl = new FormControl();
  maritalStatusCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  classCTRL: FormControl = new FormControl();
  categoryCtrl: FormControl = new FormControl();
  payScaleCtrl: FormControl = new FormControl();
  familDetailsDataSource = new MatTableDataSource<FamilyDetails>(this.familyDetailData);
  // Directive
  directiveObj = new CommonDirective(this.router);
  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.annexuryTwoKFormData();
  }

  annexuryTwoKFormData() {
    this.annexuryTwoKForm = this.fb.group({
      payFixationEmployeeNumber: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      designation: [''],
      department: [''],
      headOfDepartment: [''],
      officeName: [''],
      ddoName: [''],
      ddoEmailId: [''],
      payCommission: ['3'],
      salary: [''],
      dateOfBirth: [''],
      category: [''],
      joiningDateFix: [''],
      joiningDateFull: [''],
      dateOfRetirement: [''],
      originalSalary: [''],
      serialNo: [''],
      isNominee: [''],
      employeeMobileNumber: [''],
      payBand: [''],
      payBandValue: [''],
      gradPay: [''],
      basicPay: [''],
      payLevel: [''],
      cellId: [''],
      ragNumber: [''],
      class: [''],
      maritalStatus: [''],
      district: [''],
      codeNumberByEDPCell: [''],
      codeNumberGivenToDepartmentByEDPCell: [''],
      specialNote: [''],
      aadharNo: [''],
      panNo: [''],
      bankName: [''],
      branchAddress: [''],
      accountNumber: [''],
      ifscCode: [''],
      payScale: [''],
      basic: [''],
    });
  }

  // Open Emoloyee Number dialog
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.annexuryTwoKForm.patchValue({
          payFixationEmployeeNumber: result[0].employeeNumber,
          firstName: result[0].firstName,
          middleName: result[0].middleName,
          lastName: result[0].lastName,
          designation: result[0].designation,
        });
      }
    });
  }

  // Open workflow dialog
  workflowDetails(): void {
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
