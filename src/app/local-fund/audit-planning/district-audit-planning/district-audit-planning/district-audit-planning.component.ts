import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsLfComponent } from 'src/app/local-fund/workflow-details-lf/workflow-details-lf.component';
import { DistrictAudit, EstablishmentDetail, AuditPlanning } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';



@Component({
  selector: 'app-district-audit-planning',
  templateUrl: './district-audit-planning.component.html',
  styleUrls: ['./district-audit-planning.component.css']
})
export class DistrictAuditPlanningComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  isSubmitted = false;
  errorMessages = lfMessage;
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  districtAuditPlanningForm: FormGroup;
  auditPlanningForm: FormGroup;
  auditPlanningFormInfo = 'Audit Planning';
  districtAuditPlanningFormInfo = 'District Audit Planning';
  totalManDaysValue = 0;
  totalManDaysTableValue = 0;
  districtName = 'Gandhinagar';
  workingDays = 0;
  mindate = new Date();
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();

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
  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
    { value: '2', viewValue: 'Gandhinagar-District Panchayat' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Dahegam Nagar Palika' },
    { value: '6', viewValue: 'Ahmedabad - District Panchayat' },
  ];
  auditYearList: ListValue[] = [
    { value: '2017-18', viewValue: '2017-18' },
    { value: '2018-19', viewValue: '2018-19' },
    { value: '2019-20', viewValue: '2019-20' },
    { value: '2020-21', viewValue: '2020-21' },
    { value: '2021-', viewValue: '2021' },

  ];


  // district audit  planning data
  ElementData: DistrictAudit[] = [
    {
      auditYear: '2017-18',
      district: 'Gandhinagar',
      instituteType: 'District Panchayat',
      instituteName: 'Gandhinagar-District Panchayat',
      sanctionedManDays: 250,
      auditStartDate: new Date('04/01/2017'),
      auditEndDate: new Date('05/01/2017'),
      workingDays: 30,
      noOfAuditor: 4

    },
    {
      auditYear: '2017-18',
      district: 'Gandhinagar',
      instituteType: 'Municipal Corporation',
      instituteName: 'GMC',
      sanctionedManDays: 100,
      auditStartDate: new Date('05/14/2017'),
      auditEndDate: new Date('06/15/2017'),
      workingDays: 30,
      noOfAuditor: 2

    },
    {
      auditYear: '2018-19',
      district: 'Gandhinagar',
      instituteType: 'Board Corporation',
      instituteName: 'GPCB',
      sanctionedManDays: 150,
      auditStartDate: new Date('02/10/2018'),
      auditEndDate: new Date('03/30/2018'),
      workingDays: 40,
      noOfAuditor: 4

    },
    {
      auditYear: '2019-20',
      district: 'Gandhinagar',
      instituteType: 'Nagar Palika',
      instituteName: 'Dahegam Nagar Palika',
      sanctionedManDays: 100,
      auditStartDate: new Date('02/01/2019'),
      auditEndDate: new Date('03/31/2019'),
      workingDays: 35,
      noOfAuditor: 3
    },
    {
      auditYear: '2019-20',
      district: 'Gandhinagar',
      instituteType: 'District Panchayat',
      instituteName: 'Gandhinagar - District Panchayat',
      sanctionedManDays: 300,
      auditStartDate: new Date('10/07/2019'),
      auditEndDate: new Date('01/15/2020'),
      workingDays: 45,
      noOfAuditor: 10

    },
  ];

  // district audit planning dataSource
  dataSource = new MatTableDataSource<DistrictAudit>(this.ElementData);

  // district audit planning column
  displayedColumns: any[] = [
    'serialNo',
    'auditYear',
    'district',
    'instituteType',
    'instituteName',
    'sanctionedManDays',
    'auditStartDate',
    'auditEndDate',
    'workingDays',
    'noOfAuditor',
    'totalMandays',
    'action'
  ];

  establishmentDetails = 'Establishment Detail';

  // establishment details data
  ElementData1: EstablishmentDetail[] = [
    {
      employeeType: 'Auditor',
      noOfOfficers: 10,
      workingDays: 30,
      availableManDays: 300
    },
  ];

  // establishment details dataSource
  dataSourceEstablishmentDetails = new MatTableDataSource<EstablishmentDetail>(this.ElementData1);

  // establishment details column
  displayedColumnsEstablishment: any[] = [
    'serialNo',
    'employeeType',
    'noOfOfficers',
    'workingDays',
    'availableManDays',
  ];

  // audit planning data
  ElementData2: AuditPlanning[] = [
    {

      instituteType: 'Municipal Corporation',
      instituteName: 'RMC',
      noOfUnit: 35,
      sanctionedManDays: 25
    },
    {

      instituteType: 'Municipal Corporation',
      instituteName: 'BMC',
      noOfUnit: 45,
      sanctionedManDays: 30
    },
  ];

  // audit planning dataSource
  dataSourceAuditPlanning = new MatTableDataSource<AuditPlanning>(this.ElementData2);

  // audit planning column
  displayedColumnsAuditPlanning: any[] = [
    'serialNo',
    'instituteType',
    'instituteName',
    'noOfUnit',
    'sanctionedManDays'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceAuditPlanning.paginator = this.paginator;
    this.dataSourceEstablishmentDetails.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.districtAuditPlanningForm = this.fb.group({
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      sanctionedMandays: [''],
      auditStartDate: [''],
      auditEndDate: [''],
      workingDays: [''],
      allotedNoOfAuditors: [''],
      totalMandays: [''],
      districtName: ['']
    });
  }

  // calculate total mandays
  calculateTotalMandays() {

    const auditorsNumber = Number(this.districtAuditPlanningForm.value.allotedNoOfAuditors);
    if (auditorsNumber !== null) {
      this.totalManDaysValue = this.workingDays * auditorsNumber;
    }

    return this.totalManDaysValue;
  }

  // add table entry
  add() {
    const instituteTypeValue = this.districtAuditPlanningForm.value.instituteType;
    const instituteNameValue = this.districtAuditPlanningForm.value.instituteName;
    const startDate = this.districtAuditPlanningForm.value.auditStartDate;
    this.ElementData.push({
      auditYear: this.districtAuditPlanningForm.value.auditYear,
      district: 'Gandhinagar',
      instituteType: this.instituteTypeList[instituteTypeValue].viewValue,
      instituteName: this.instituteNameList[instituteNameValue].viewValue,
      sanctionedManDays: this.districtAuditPlanningForm.value.sanctionedMandays,
      auditStartDate: startDate,
      auditEndDate: this.districtAuditPlanningForm.value.auditEndDate,
      workingDays: this.workingDays,
      noOfAuditor: this.districtAuditPlanningForm.value.allotedNoOfAuditors
    });

    this.dataSource = new MatTableDataSource<DistrictAudit>(this.ElementData);

  }

  // enable table data entry editing
  editRow(index) {

    const instituteTypeValue = this.ElementData[index].instituteType;
    const instituteNameValue = this.ElementData[index].instituteName;
    const auditYearValue = this.ElementData[index].auditYear;
    const length = Object.keys(this.instituteNameList).length;
    const length1 = Object.keys(this.instituteTypeList).length;
    const length2 = Object.keys(this.auditYearList).length;

    let instituteName;
    let instituteType;
    let auditYear;

    for (let i = 0; i < length1; i++) {

      if (instituteTypeValue === this.instituteTypeList[i].viewValue) {
        instituteType = this.instituteTypeList[i].value;

      }
    }
    for (let i = 0; i < length; i++) {

      if (instituteNameValue === this.instituteNameList[i].viewValue) {
        instituteName = this.instituteNameList[i].value;

      }
    }
    for (let i = 0; i < length2; i++) {

      if (auditYearValue === this.auditYearList[i].viewValue) {
        auditYear = this.auditYearList[i].value;

      }
    }
    this.districtAuditPlanningForm.setValue({
      instituteType: instituteType,
      instituteName: instituteName,
      auditYear: auditYear,
      sanctionedMandays: this.ElementData[index].sanctionedManDays,
      auditStartDate: this.ElementData[index].auditStartDate,
      auditEndDate: this.ElementData[index].auditEndDate,
      workingDays: this.workingDays,
      allotedNoOfAuditors: this.ElementData[index].noOfAuditor,
      totalMandays: this.totalManDaysTableValue
    });

  }

  // delete row from table
  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  // calculate total no of units
  totalNoOfUnits(): number {
    let noOfUnits = 0;
    this.dataSourceAuditPlanning.data.forEach((element1) => {
      noOfUnits = noOfUnits + Number(element1.noOfUnit);
    });
    return noOfUnits;
  }

  // calculate sanction mandays
  totalSanctiondManDays(): number {
    let sanctionDays = 0;
    this.dataSourceAuditPlanning.data.forEach((element1) => {
      sanctionDays = sanctionDays + Number(element1.sanctionedManDays);
    });
    return sanctionDays;
  }

  // reset form
  resetForm() {
    this.districtAuditPlanningForm.reset();
  }

  // reset form
  reset() { }

  // calculate working days
  calculateWorkingDays() {

    const startDate = this.districtAuditPlanningForm.value.auditStartDate;
    const endDate = this.districtAuditPlanningForm.value.auditEndDate;

    const startDateValue = new Date(startDate);
    const endDateValue = new Date(endDate);

    this.mindate = startDateValue;
    let workingDays = 0;

    if (startDate !== '' && endDate !== '') {
      workingDays = Number(endDateValue.getDate()) - Number(startDateValue.getDate());
      this.workingDays = workingDays;
    }

    return workingDays;
  }

}
