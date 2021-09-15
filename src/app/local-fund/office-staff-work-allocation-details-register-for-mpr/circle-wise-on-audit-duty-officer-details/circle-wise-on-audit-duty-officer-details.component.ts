import { Component, OnInit, ViewChild } from '@angular/core';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { CircleWiseOnAuditDutyOfficerDetails } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';



@Component({
  selector: 'app-circle-wise-on-audit-duty-officer-details',
  templateUrl: './circle-wise-on-audit-duty-officer-details.component.html',
  styleUrls: ['./circle-wise-on-audit-duty-officer-details.component.css']
})
export class CircleWiseOnAuditDutyOfficerDetailsComponent implements OnInit {
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  errorMessages = lfMessage;
  isSubmitted = false;
  circleWiseOnAuditDutyOfficerDetails: FormGroup;
  isYes = false;
  id = 2;
  directiveObject = new LocalFundDirective(this.dialog);

  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  employeeNameCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  acpDetailsCtrl: FormControl = new FormControl();
  acpDetailsYesCtrl: FormControl = new FormControl();
  isAcpCtrl: FormControl = new FormControl();

  isAcpist: ListValue[] = [
    { value: '0', viewValue: 'No' },
    { value: '1', viewValue: 'Yes' },
  ];

  acpDetailsList: ListValue[] = [
    { value: '0', viewValue: 'No' },
    { value: '1', viewValue: 'Yes' },
  ];

  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Gir Somnath District Office' },
  ];
  employeeNameList: ListValue[] = [
    { value: '0', viewValue: 'D.N. Parmar' },
    { value: '1', viewValue: 'S N Dabhi' },
    { value: '2', viewValue: 'K S Patel' },
    { value: '3', viewValue: 'R P Zala' },
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


  ElementData: CircleWiseOnAuditDutyOfficerDetails[] = [
    {
      district: 'Gir Somnath',
      id: '1',
      instituteType: 'District Office',
      instituteName: 'Gir Somnath District Office',
      circleNo: '1',
      employeeName: 'D.N. Parmar',
      designation: 'Auditor',
      isAcp: 'No',
      acpDetails: 'NA',
      remarks: 'NA'

    },
    {
      district: 'Gir Somnath',
      id: '4',
      instituteType: 'District Office',
      instituteName: 'Gir Somnath District Office',
      circleNo: '1',
      employeeName: 'S N Dabhi',
      designation: 'Auditor',
      isAcp: 'No',
      acpDetails: 'NA',
      remarks: 'NA'

    },
    {
      district: 'Gir Somnath',
      id: '5',
      instituteType: 'District Office',
      instituteName: 'Gir Somnath District Office',
      circleNo: '3',
      employeeName: 'K S Patel',
      designation: 'Auditor',
      isAcp: 'No',
      acpDetails: 'NA',
      remarks: 'NA'

    },
    {
      district: 'Gir Somnath',
      id: '8',
      instituteType: 'District Office',
      instituteName: 'Gir Somnath District Office',
      circleNo: '4',
      employeeName: 'R P Zala',
      designation: 'Auditor',
      isAcp: 'Yes',
      acpDetails: 'ACP Detail',
      remarks: 'NA'

    },
  ];

  dataSource = new MatTableDataSource<CircleWiseOnAuditDutyOfficerDetails>(this.ElementData);
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'instituteType',
    'instituteName',
    'id',
    'circleNo',
    'employeeName',
    'designation',
    'isAcp',
    'acpDetails',
    'remarks',
    'action'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.circleWiseOnAuditDutyOfficerDetails = this.fb.group({
      districtName: [''],
      id: [''],
      instituteType: [''],
      others: [''],
      circleNo: [''],
      instituteName: [''],
      employeeName: [''],
      designation: [''],
      acpDetailsYes: [''],
      acpDetails: [''],
      isAcp: [''],
      remarks: [''],
    });
  }

  // add new entry
  add() {
    if (this.circleWiseOnAuditDutyOfficerDetails.valid) {
      this.isSubmitted = false;

      this.ElementData.push({
        district: 'Gir Somnath',
        id: String(this.id),
        instituteType: this.instituteTypeList[this.circleWiseOnAuditDutyOfficerDetails.value.instituteType].viewValue,
        instituteName: this.instituteNameList[this.circleWiseOnAuditDutyOfficerDetails.value.instituteName].viewValue,
        circleNo: this.circleWiseOnAuditDutyOfficerDetails.value.circleNo,
        employeeName: this.employeeNameList[this.circleWiseOnAuditDutyOfficerDetails.value.employeeName].viewValue,
        designation: this.designationList[this.circleWiseOnAuditDutyOfficerDetails.value.designation].viewValue,
        isAcp: this.isAcpist[this.circleWiseOnAuditDutyOfficerDetails.value.isAcp].viewValue,
        acpDetails: this.acpDetailsList[this.circleWiseOnAuditDutyOfficerDetails.value.acpDetails].viewValue,
        remarks: this.circleWiseOnAuditDutyOfficerDetails.value.remarks
      });

      this.dataSource = new MatTableDataSource<CircleWiseOnAuditDutyOfficerDetails>(this.ElementData);
      this.id = Number(this.id) + 1;
    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  clearForm() {
    this.circleWiseOnAuditDutyOfficerDetails.reset();
    const id = this.id;
    this.circleWiseOnAuditDutyOfficerDetails.patchValue({
      districtName: 'Gir Somnath',
      id: id,
    });
  }

  // common reset function
  reset() { }

  // is acpdetails Yes option selected show acp details mandatory field
  isYesSelected(event) {

    if (this.circleWiseOnAuditDutyOfficerDetails.value.acpDetails === '1') {
      this.isYes = true;
      return this.isYes;
    } else {
      this.isYes = false;
      return this.isYes;
    }

  }

  // is acpdetails mandatory No option selected show acp details non mandatory field
  isNoSelected(event) {

    if (this.circleWiseOnAuditDutyOfficerDetails.value.acpDetailsYes === '0') {
      this.isYes = false;
      return this.isYes;
    } else {
      this.isYes = true;
      return this.isYes;
    }

  }
}
