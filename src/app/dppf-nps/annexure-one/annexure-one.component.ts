import { ToastrService } from 'ngx-toastr';
import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SearchEmployeeDppfNpsComponent } from '../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { Router } from '@angular/router';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { FamilyDetails } from 'src/app/model/dppf-nps';

@Component({
  selector: 'app-annexure-one',
  templateUrl: './annexure-one.component.html',
  styleUrls: ['./annexure-one.component.css']
})
export class AnnexureOneComponent implements OnInit {
  // List
  designationList: CommonListing[] = [
    { value: ' ', viewValue: '' }
  ];

  departmentList: CommonListing[] = [
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
    { value: '1', viewValue: '' },
    { value: '2', viewValue: '' },
  ];

  yesNoList: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  // Table Resource
  familyDetailData: FamilyDetails[] = [
    { name: '', dateOfBirth: '', age: '', percentage: '', relation: '' }
  ];

  familyDetailColumns = [
    'name', 'dateOfBirth', 'age', 'percentage', 'relation', 'action'
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

  cellIdList: CommonListing[] = [
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


  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
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
  // VAriable
  isSubmitted = false;
  selectedIndex: number;
  tabDisable: Boolean = true;
  errorMessages = DppfNpsMessage;
  empdetails = true;
  // FOrm Group
  annexuryOneForm: FormGroup;
  // FOrm COntrol
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
  // Table SOurce
  familDetailsDataSource = new MatTableDataSource<FamilyDetails>(this.familyDetailData);
  // Directive
  directiveObj = new CommonDirective(this.router);
  // Constructor
  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.annexuryOneFormData();
  }

  annexuryOneFormData() {
    this.annexuryOneForm = this.fb.group({
      payFixationEmployeeNumber: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      designation: [''],
      department: [''],
      headOfDepartment: [''],
      officeName: [''],
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
  // Reset FOrm
  resetForm() {
    this.annexuryOneForm.reset();
  }
  // Dialog Of WorkFLow
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Routing
  goToSavedAnnexureOne() {
    this.router.navigate(['/dppf-nps/annexure-one-listing']);
  }
  // Get Tab Index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }
  // Move to Tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  addFamilyRow() {
    this.familDetailsDataSource.data.push(
      {
        name: ' ',
        dateOfBirth: '',
        age: '',
        percentage: '',
        relation: ''
      }
    );
    this.familDetailsDataSource.data = this.familDetailsDataSource.data;
  }
  // Search Employee DppfNps 
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.empdetails = true;
        this.annexuryOneForm.patchValue({
          payFixationEmployeeNumber: result[0].employeeNumber,
          firstName: result[0].firstName,
          middleName: result[0].middleName,
          lastName: result[0].lastName,
          designation: result[0].designation,
        });
      }
    });
  }
  // Workflow Details DppfNps
  onSubmit() {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
