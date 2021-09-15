import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CommonListing } from 'src/app/model/common-listing';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsAuditorMappingComponent } from '../workflow-details-auditor-mapping/workflow-details-auditor-mapping.component';
import { NomineeData, AccountGenerationDialog } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-account-generation-details',
  templateUrl: './account-generation-details.component.html',
  styleUrls: ['./account-generation-details.component.css']
})
export class AccountGenerationDetailsComponent implements OnInit {
  // Variable
  errorMessage;
  // Date
  maxDate = new Date();
  // Form Group
  public gpfAccountGenerationDetailsForm: FormGroup;
  // Form Control
  typeOfDepartmentCtrl: FormControl = new FormControl();
  typeOfHodCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfGenderCtrl: FormControl = new FormControl();
  typeOfEmployeeClassCtrl: FormControl = new FormControl();
  typeOfEmployeeTypeCtrl: FormControl = new FormControl();
  relationshipCtrl: FormControl = new FormControl();
  // List
  classTypeOfDepartment: ListValue[] = [
    { value: '1', viewValue: 'Agriculture and CO-Operation Department ' },
    { value: '2', viewValue: 'Education Department' },
    { value: '3', viewValue: 'Energy and Petrochemicals Deaprtment' },
    { value: '4', viewValue: 'Finance Department' },
    { value: '5', viewValue: 'Home Department' },
    { value: '6', viewValue: 'Legal Department' },
  ];


  classTypeOfHod: ListValue[] = [
    { value: '1', viewValue: 'Agriculture and CO-Operation Department ' },
    { value: '2', viewValue: 'Director Of Agriculture, Gandhinagar' },
    { value: '3', viewValue: 'Director Of Animal Husbandry, Gandhinagar' },
    { value: '4', viewValue: 'Director Of Sugar Co-Operative Department, Gandhinagar' },
  ];


  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Mahisagar' },
    { value: '3', viewValue: 'Panchmahal' },
    { value: '4', viewValue: 'Vadodara ' },


  ];



  classTypeOfGender: ListValue[] = [
    { value: '1', viewValue: 'Male ' },
    { value: '2', viewValue: 'Female' },

  ];

  classTypeOfEmployeeClass: ListValue[] = [
    { value: '1', viewValue: 'Class IV ' },
    { value: '2', viewValue: 'Daily Wages' },
    { value: '3', viewValue: 'Work Charge' },

  ];


  classTypeOfEmployeeType: ListValue[] = [
    { value: '1', viewValue: 'AGR ' },
    { value: '2', viewValue: 'AJ' },
    { value: '3', viewValue: 'COP' },
    { value: '4', viewValue: 'ED' },
    { value: '5', viewValue: 'EXC ' },
    { value: '6', viewValue: 'F' },
    { value: '7', viewValue: 'GA' },
    { value: '8', viewValue: 'IND' },
    { value: '9', viewValue: 'J ' },
    { value: '10', viewValue: 'LR' },
    { value: '11', viewValue: 'M' },
    { value: '12', viewValue: 'MIS' },
  ];
  // Table SOurce
  nomineeData: NomineeData[] = [
    {
      relationship: '', nomineeName: '', nomineeAddress: '',
      nomineeDOB: '', nomineeShare: '',
      photoOfNominee: '', genNomiForm: '', npsNomiForm: '', fileBrowseNomi: true,
      fileBrowseGenForm: true, fileBrowseNpsForm: true,
    }
  ];
  displayedNomineeColumns = [
    'relationship', 'nomineeName', 'nomineeAddress', 'nomineeDOB',
    'nomineeShare', 'photoOfNominee', 'genNomiForm', 'npsNomiForm', 'Action'
  ];
  relationship_list: CommonListing[] = [
    { value: '1', viewValue: 'Father' },
    { value: '2', viewValue: 'Mother' },
    { value: '3', viewValue: 'Widow Sister' },
    { value: '4', viewValue: 'Unmarried Sister' },
    { value: '5', viewValue: 'Brother (age < 18 years)' },
    { value: '6', viewValue: 'Spouse' },
    { value: '7', viewValue: 'Son' },
    { value: '8', viewValue: 'Daughter' },
    { value: '9', viewValue: 'Childeren of Dead Son' },
    { value: '10', viewValue: 'Widow Daughter' },
    { value: '11', viewValue: 'Widow of Dead Son' },
    { value: '12', viewValue: 'Adopted child' },
    { value: '13', viewValue: 'Other' },
  ];
  dataSourceNominee = new MatTableDataSource<NomineeData>(this.nomineeData);
  fileData: any;

  constructor(private fb: FormBuilder, private el: ElementRef, private toastr: ToastrService, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = DppfgpfMessage;


    this.gpfAccountGenerationDetailsForm = this.fb.group({

      inwardNumber: '',
      dateInward: '',
      employeeNo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      dateOfJoining: '',
      batchNo: '',
      basicPay: '',
      officeName: '',
      department: '',
      hod: '',
      district: '',
      gender: '',
      employeeClass: '',
      employeeType: '',
      officeAddress: '',
      orderNo: '',
      sanctionDate: '',
      majorHead: '',
      authorityName: '',
      authorityDesignation: '',
      authorityAddress: '',
    });
  }

  openFileSelector2() {
    this.el.nativeElement.querySelector('#fileBrowse-nominee').click();
  }

  onFileSelection2(fileSelected, item) {
    if (fileSelected.target && fileSelected.target.files) {
      this.fileData = fileSelected.target.files[0];
      item.fileBrowseNomi = false;
    }
  }

  onFileGenForm(fileSelected, item) {
    if (fileSelected.target && fileSelected.target.files) {
      this.fileData = fileSelected.target.files[0];
      item.fileBrowseGenForm = false;
    }
  }

  openFileGenForm() {
    this.el.nativeElement.querySelector('#fileBrowse-genform').click();
  }

  // Browse NPS Nomination Form
  onFileNpsForm(fileSelected, item) {
    if (fileSelected.target && fileSelected.target.files) {
      this.fileData = fileSelected.target.files[0];
      item.fileBrowseNpsForm = false;
    }
  }

  openFileNpsForm() {
    this.el.nativeElement.querySelector('#fileBrowse-npsform').click();
  }

  // add row
  addNominee() {
    if (this.dataSourceNominee) {
      this.dataSourceNominee.data.forEach((element, index) => {
        if ((this.dataSourceNominee.data.length === (index + 1)) && element && element.relationship &&
          element.nomineeName && element.nomineeAddress && element.nomineeDOB && element.nomineeShare &&
          !element.fileBrowseNpsForm && !element.fileBrowseGenForm && !element.fileBrowseNomi) {
          const p_data = this.dataSourceNominee.data;
          p_data.push({
            relationship: '', nomineeName: '', nomineeAddress: '', nomineeDOB: '', nomineeShare: '',
            photoOfNominee: '', genNomiForm: '', npsNomiForm: '', fileBrowseNpsForm: true, fileBrowseNomi: true,
            fileBrowseGenForm: true
          });
          this.dataSourceNominee.data = p_data;
        } else if (this.dataSourceNominee.data.length === (index + 1)) {
          this.toastr.error('Please fill the Nominee detail.');
        }
      });
    }
  }

  // delete row
  deleteNominee(index) {
    this.dataSourceNominee.data.splice(index, 1);
    this.dataSourceNominee = new MatTableDataSource(this.dataSourceNominee.data);
  }

  // open wfd dialog
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsAuditorMappingComponent, {
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // reset form
  resetForm() {
    this.gpfAccountGenerationDetailsForm.reset();
  }

  // Open GPFAccountDetailsDialog
  openInwardDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GPFAccountDetailsDialog, {
      width: '1200px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.gpfAccountGenerationDetailsForm.patchValue({
        inwardNumber: '123/456/7',
        employeeNo: '1005678456',
        firstName: 'Raman',
        middleName: 'Kuman',
        lastName: 'Singh',
        dateOfBirth: new Date('07/12/1987'),
        dateOfJoining: new Date('06/01/2005'),
        basicPay: '25000',
        officeName: 'XYZ Office',
        department: '1',
        hod: '1',
        district: '1',
        gender: '1',
        employeeClass: '1',
        employeeType: '1',
        officeAddress: 'ABC',
      });
      this.gpfAccountGenerationDetailsForm.get('dateInward').patchValue(new Date());

      this.dataSourceNominee.data.splice(0, 1, {
        relationship: '6', nomineeName: 'Radhika Kumar Singh', nomineeAddress: 'Sector-2,GautamNagar Colony,Ahmedabad',
        nomineeDOB: '02-July-1988', nomineeShare: 50,
        photoOfNominee: '', genNomiForm: '', npsNomiForm: '', fileBrowseNomi: true,
        fileBrowseGenForm: true, fileBrowseNpsForm: true,
      });

      this.dataSourceNominee.data = this.dataSourceNominee.data;
    });
  }

  enterInwardNo() {
    this.gpfAccountGenerationDetailsForm.patchValue({
      inwardNumber: '123/456/7',
      employeeNo: '1005678456',
      firstName: 'Raman',
      middleName: 'Kuman',
      lastName: 'Singh',
      dateOfBirth: new Date('07/12/1987'),
      dateOfJoining: new Date('06/01/2005'),
      basicPay: '25000',
      officeName: 'XYZ Office',
      department: '1',
      hod: '1',
      district: '1',
      gender: '1',
      employeeClass: '1',
      employeeType: '1',
      officeAddress: 'ABC',
    });
    this.gpfAccountGenerationDetailsForm.get('dateInward').patchValue(new Date());

    this.dataSourceNominee.data.splice(0, 1, {
      relationship: '6', nomineeName: 'Radhika Kumar Singh', nomineeAddress: 'Sector-2,GautamNagar Colony,Ahmedabad',
      nomineeDOB: '02-July-1988', nomineeShare: 50,
      photoOfNominee: '', genNomiForm: '', npsNomiForm: '', fileBrowseNomi: true,
      fileBrowseGenForm: true, fileBrowseNpsForm: true,
    });

    this.dataSourceNominee.data = this.dataSourceNominee.data;

  }

}


@Component({
  selector: 'app-account-detail-dialog',
  templateUrl: './account-detail-dialog.html',
  styleUrls: ['./account-generation-details.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class GPFAccountDetailsDialog implements OnInit {
  searchVariable = false;
  accountDetailDialogForm: FormGroup;
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPaoCtrl: FormControl = new FormControl();
  typeOfYearCtrl: FormControl = new FormControl();
  typeOfMonthCtrl: FormControl = new FormControl();

  classTypeOfTreasuryPao: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar ' },
    { value: '2', viewValue: 'District Treasury Office,Gandhinagar' },


  ];

  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodra' },

  ];


  classTypeOfInward: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule ' },
    { value: '2', viewValue: 'Class 4/DW/WC' },
    { value: '3', viewValue: 'Final Payment Register' },
    { value: '4', viewValue: 'Transfer Balance' },
    { value: '5', viewValue: ' Supplementary Payment Transfer' },
    { value: '6', viewValue: 'AGCA ' },
    { value: '7', viewValue: 'AGTA Misclassified Entry' },

  ];

  classTypeOfMonth: ListValue[] = [
    { value: '1', viewValue: 'January' },
    { value: '2', viewValue: 'February' },
    { value: '3', viewValue: 'March' },
    { value: '4', viewValue: 'April' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'June' },
    { value: '7', viewValue: 'July' },
    { value: '8', viewValue: 'August' },
    { value: '9', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },

  ];
  classTypeOfYear: ListValue[] = [
    { value: '1', viewValue: '2010' },
    { value: '2', viewValue: '2011' },
    { value: '3', viewValue: '2012' },
    { value: '4', viewValue: '2013' },
    { value: '5', viewValue: '2014' },
    { value: '6', viewValue: '2015' },
    { value: '7', viewValue: '2016' },
    { value: '8', viewValue: '2017' },
    { value: '9', viewValue: '2018' },
    { value: '10', viewValue: '2019' },
    { value: '11', viewValue: '2020' },

  ];
  selection = new SelectionModel<AccountGenerationDialog>(true, []);

  Element_Data: AccountGenerationDialog[] = [
    {
      inwardNo: '32345/01/2019',
      inwardDate: '12/01/2020',
      typeOfInward: 'Class 4/DW/WC',
      district: 'Mahisagar',
      treasuryPao: 'Raman Singh',
      year: '2020',
      month: 'January',
    },
  ];

  displayedColumns: any[] = [
    'select',
    'inwardNo',
    'inwardDate',
    'typeOfInward',
    'district',
    'treasuryPao',
    'year',
    'month',

  ];

  dataSource = new MatTableDataSource<AccountGenerationDialog>(this.Element_Data);

  constructor(

    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GPFAccountDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.accountDetailDialogForm = this.fb.group({
      inwardNumber: '',
      inwardDate: '',
      typeOfInward: '',
      district: '',
      treasuryPao: '',
      year: '',
      month: '',
    });
  }



  okClick($event?) {
    this.dialogRef.close();
  }



  resetForm() {
    this.accountDetailDialogForm.reset();
  }


  checkboxLabel(row?: AccountGenerationDialog): string {
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

  searchInwardNo() {
    if (this.accountDetailDialogForm.controls.inwardNumber.value.length > 0) {
      this.searchVariable = true;
    }
  }

}




