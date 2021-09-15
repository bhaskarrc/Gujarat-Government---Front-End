import { Component, OnInit, ViewChild } from '@angular/core';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { OfficeStaffWorkAllocationDetails } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-office-staff-work-allocation-details',
  templateUrl: './office-staff-work-allocation-details.component.html',
  styleUrls: ['./office-staff-work-allocation-details.component.css']
})
export class OfficeStaffWorkAllocationDetailsComponent implements OnInit {

  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);
  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  errorMessages = lfMessage;
  isSubmitted = false;
  id = 5;
  // date
  todayDate = Date.now();
  // form group
  officeStaffWorkAllocationDetails: FormGroup;
  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  employeeNameCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();

  // lists start
  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Gir Somnath District Office' },
  ];
  employeeNameList: ListValue[] = [
    { value: '0', viewValue: 'C.P. Chavda' },
    { value: '1', viewValue: 'K P Patel' },
    { value: '2', viewValue: 'L M Suthar' },
    { value: '3', viewValue: 'S P Zala' },
  ];

  designationList: ListValue[] = [
    { value: '0', viewValue: 'Sub Auditor' },
    { value: '1', viewValue: 'Examiner' },
    { value: '2', viewValue: 'Auditor' },
  ];
  instituteTypeList: ListValue[] = [
    { value: '0', viewValue: 'Maha Nagar Palika' },
    { value: '1', viewValue: 'Nagarpalika' },
    { value: '2', viewValue: 'District Panchayat' },
    { value: '3', viewValue: 'Taluka Panchayat' },
    { value: '4', viewValue: 'University' },
    { value: '5', viewValue: 'Municiple School Board' },
    { value: '6', viewValue: 'Village Panchayat' },
    { value: '7', viewValue: 'Police Welfare Fund' },
    { value: '8', viewValue: 'Provident Fund of District Panchayat' },
    { value: '9', viewValue: 'Provident Fund of Secondary Education office' },
    { value: '10', viewValue: 'Ambaji Temple Trust' },
    { value: '11', viewValue: 'Others' },
  ];
  // lists end

  // table data start
  elementData: OfficeStaffWorkAllocationDetails[] = [
    {
      district: 'Gir Somnath',
      id: '1',
      instituteType: 'District Office',
      instituteName: 'Gir Somnath District Office',
      employeeName: 'C.P. Chavda',
      designation: 'Sub Auditor',
      workDetails: 'Mahekam, Cashier, Store, Library',
      remarks: 'NA'

    },
    {
      district: 'Gir Somnath',
      id: '4',
      instituteType: 'District Office',
      instituteName: 'Gir Somnath District Office',
      employeeName: 'K P Patel',
      designation: 'Sub Auditor',
      workDetails: 'Mahekam, Cashier, Store, Library',
      remarks: 'NA'

    },
    {
      district: 'Gir Somnath',
      id: '5',
      instituteType: 'District Office',
      instituteName: 'Gir Somnath District Office',
      employeeName: 'L M Suthar',
      designation: 'Examiner',
      workDetails: 'Audit Examiner',
      remarks: 'NA'

    },
    {
      district: 'Gir Somnath',
      id: '8',
      instituteType: 'District Office',
      instituteName: 'Gir Somnath District Office',
      employeeName: 'S P Zala',
      designation: 'Auditor',
      workDetails: 'Auditor',
      remarks: 'NA'

    },
  ];
  dataSource = new MatTableDataSource<OfficeStaffWorkAllocationDetails>(this.elementData);
  displayedColumns: string[] = [
    'serialNo',
    'district',
    'id',
    'instituteType',
    'instituteName',
    'employeeName',
    'designation',
    'workDetails',
    'remarks',
    'action'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.officeStaffWorkAllocationDetails = this.fb.group({
      districtName: [''],
      id: [''],
      instituteType: [''],
      others: [''],
      instituteName: [''],
      employeeName: [''],
      designation: [''],
      workDetails: [''],
      remarks: [''],
    });
  }

  // add table entry
  add() {
    if (this.officeStaffWorkAllocationDetails.valid) {
      this.isSubmitted = false;

      this.elementData.push({
        district: 'Gir Somnath',
        id: String(this.id),
        instituteType: this.instituteTypeList[this.officeStaffWorkAllocationDetails.value.instituteType].viewValue,
        instituteName: this.instituteNameList[this.officeStaffWorkAllocationDetails.value.instituteName].viewValue,
        employeeName: this.employeeNameList[this.officeStaffWorkAllocationDetails.value.employeeName].viewValue,
        designation: this.designationList[this.officeStaffWorkAllocationDetails.value.designation].viewValue,
        workDetails: this.officeStaffWorkAllocationDetails.value.workDetails,
        remarks: this.officeStaffWorkAllocationDetails.value.remarks
      });

      this.dataSource = new MatTableDataSource<OfficeStaffWorkAllocationDetails>(this.elementData);
      this.id = Number(this.id) + 1;
    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  clearForm() {
    this.officeStaffWorkAllocationDetails.reset();
    const id = this.id;
    this.officeStaffWorkAllocationDetails.patchValue({
      districtName: 'Gir Somnath',
      id: id,
    });
  }

  // on click on common reset button
  reset() { }
}
