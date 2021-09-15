import { ToastrService } from 'ngx-toastr';
import { CommonListing } from './../../model/common-listing';
import { CommonDirective } from './../../common/directive/validation.directive';
import { SearchEmployeeDppfNpsComponent } from './../search-employee-dppf-nps/search-employee-dppf-nps.component';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { SearchInwardNoDppfNpsComponent } from '../search-inward-no-dppf-nps/search-inward-no-dppf-nps.component';
import { DppfNpsMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsDppfNpsComponent } from '../workflow-details-dppf-nps/workflow-details-dppf-nps.component';
import { Attachment, FamilyDetails } from 'src/app/model/dppf-nps';
import { error } from 'console';

@Component({
  selector: 'app-account-generation',
  templateUrl: './account-generation.component.html',
  styleUrls: ['./account-generation.component.css']
})
export class AccountGenerationComponent implements OnInit {
  // Attachment
  brwoseData: Attachment[] = [
    {
      attachmentType: '',
      name: undefined,
      file: undefined,
      uploadedBy: ''
    }
  ];
  // Variable
  fileBrowseIndex: number;
  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];

  // List
  familyDetailData: FamilyDetails[] = [
    { name: '', dateOfBirth: '', age: '', percentage: '', relation: '' }
  ];

  familyDetailColumns = [
    'name', 'dateOfBirth', 'age', 'percentage', 'relation', 'action'
  ];

  attachmentTypeCode: any[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' },
  ];


  departmentList: CommonListing[] = [
    { value: ' ', viewValue: ' ' }
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
    { value: '11', viewValue: 'Other' },

  ];

  departmentHeadList: CommonListing[] = [
    { value: '1', viewValue: '' }
  ];
  salaryList: CommonListing[] = [
    { value: ' ', viewValue: ' ' }
  ];
  cellIdList: CommonListing[] = [
    { value: ' ', viewValue: ' ' }
  ];

  headOfDepartmentList: CommonListing[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  districtList: CommonListing[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
  ];

  categoryList: CommonListing[] = [
    { value: '1', viewValue: 'Government Gazzeted' },
  ];

  genderList: CommonListing[] = [
    { value: '1', viewValue: 'Male' },
    { value: '2', viewValue: 'Female' }
  ];

  payScaleList: CommonListing[] = [
    { value: '1', viewValue: '5th Pay' },
    { value: '2', viewValue: '6th Pay' },
    { value: '3', viewValue: '7th Pay' }
  ];

  employeeClassList: CommonListing[] = [
    { value: '1', viewValue: 'Class - I' },
    { value: '2', viewValue: 'Class - II' },
    { value: '3', viewValue: 'Class - III' },
    { value: '4', viewValue: 'Class - IV' },
    { value: '5', viewValue: 'OTHER' }
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
  // Date
  todayDate = new Date();
  // Variable
  isSubmitted = false;
  inwardDetails = true;
  selectedIndex: number;
  tabDisable: Boolean = true;
  errorMessages = DppfNpsMessage;
  // FormGroup
  accountGenerationForm: FormGroup;
  // FormControl
  attachmentTypeCodeCtrl: FormControl = new FormControl();
  deparmentCTRL: FormControl = new FormControl();
  headOfDeparmentCTRL: FormControl = new FormControl();
  districtCTRL: FormControl = new FormControl();
  categoryCTRL: FormControl = new FormControl();
  genderCTRL: FormControl = new FormControl();
  gradPayCTRL: FormControl = new FormControl();
  payScaleCTRL: FormControl = new FormControl();
  payBandCTRL: FormControl = new FormControl();
  payLevelCTRL: FormControl = new FormControl();
  cellIdCTRL: FormControl = new FormControl();
  employeeClassCTRL: FormControl = new FormControl();
  designationCTRL: FormControl = new FormControl();
  relationCTRL: FormControl = new FormControl();
  familDetailsDataSource = new MatTableDataSource<FamilyDetails>(this.familyDetailData);
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  // Directive
  directiveObj = new CommonDirective(this.router);
  constructor(private fb: FormBuilder, private el: ElementRef, public dialog: MatDialog,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.accountGenerationFormData();
  }

  accountGenerationFormData() {
    this.accountGenerationForm = this.fb.group({
      inwardNo: [''],
      ragNumber: [''],
      employeeNo: [''],
      ppanNO: [''],
      pranNo: [''],
      ddoRegNo: [''],
      inwardDate: [''],
      shortName: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      dateOfBirth: [''],
      joiningDate: [''],
      department: [''],
      headOfDepartment: [''],
      district: [''],
      category: [''],
      gender: [''],
      payScale: [''],
      employeeClass: [''],
      monthOfStartOfSubscription: [''],
      designation: [''],
      year: [''],
      otherDesignation: [''],
      orderNumber: [''],
      sanctionDate: [''],
      majorHead: [''],
      approvedDate: [''],
      authorityName: [''],
      authorityDesignation: [''],
      authorityAddress: [''],
      dateOfBirthT: [''],
      payBand: [''],
      payBandValue: [''],
      gradPay: [''],
      basicPay: [''],
      payLevel: [''],
      cellId: [''],
    });
  }

  resetForm() {
    this.accountGenerationForm.reset();
  }
  // WorkFlow
  onSubmit() {
    const dialogRef = this.dialog.open(WorkflowDetailsDppfNpsComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // Routing
  goToListing() {
    this.router.navigate(['/dppf-nps/nps-account-generation-details-listing']);
  }



  addFamilyRow() {
    this.familDetailsDataSource.data.push(
      {
        name: '',
        age: '',
        dateOfBirth: '',
        percentage: '',
        relation: '',
      }
    );
    this.familDetailsDataSource.data = this.familDetailsDataSource.data;
  }


  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file && data.attachmentType) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          attachmentType: '',
          name: undefined,
          file: '',
          uploadedBy: '',
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }

  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }

  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
  }

  openDialogInwardNumber() {
    const dialogRef = this.dialog.open(SearchInwardNoDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.inwardDetails = true;
        this.accountGenerationForm.patchValue({
          inwardNo: result[0].inwardNo,
          inwardDate: result[0].inwardDate,
        });
      }
    });
  }

  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeDppfNpsComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.accountGenerationForm.patchValue({
          payFixationEmployeeNumber: result[0].employeeNumber,
          firstName: result[0].firstName,
          middleName: result[0].middleName,
          lastName: result[0].lastName,
          designation: result[0].designation,
        });
      }
    });
  }

}
