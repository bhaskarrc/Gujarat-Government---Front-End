import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsLfComponent } from 'src/app/local-fund/workflow-details-lf/workflow-details-lf.component';
import { VillagePanchayatAudit } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-village-panchayat-audit-planning',
  templateUrl: './village-panchayat-audit-planning.component.html',
  styleUrls: ['./village-panchayat-audit-planning.component.css']
})
export class VillagePanchayatAuditPlanningComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  villagePanchayatAuditPlanningForm: FormGroup;
  villagePanchayatAuditPlanningFormInfo = 'Village Panchayat Audit Planning';
  totalManDaysValue = 0;
  totalManDaysTableValue = 0;
  isEditClicked = false;
  indexValue = 0;
  workingDays = 0;
  mindate = new Date();
  isSubmitted = false;
  errorMessages = lfMessage;

  auditYearCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();

  // table dat
  ElementData: VillagePanchayatAudit[] = [
    {

      month: 'May',
      auditYear: '2019-20',
      villagePanchayatUnit: 500,
      sanctionedMandays: 500,
      auditStartDate: '1/6/2019',
      auditEndDate: '1/7/2019',
      workingDays: 500,
      allocatedNoAuditor: 1

    }
  ];

  monthList: any[] = [
    { value: '0', viewValue: 'January' },
    { value: '1', viewValue: 'February' },
    { value: '2', viewValue: 'March' },
    { value: '3', viewValue: 'April' },
    { value: '4', viewValue: 'May' },
    { value: '5', viewValue: 'June' },
    { value: '6', viewValue: 'July' },
    { value: '7', viewValue: 'August' },
    { value: '8', viewValue: 'September' },
    { value: '9', viewValue: 'October' },
    { value: '10', viewValue: 'November' },
    { value: '11', viewValue: 'December' }
  ];

  auditYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
  ];

  dataSource = new MatTableDataSource<VillagePanchayatAudit>(this.ElementData);
  displayedColumns: any[] = [
    'serialNo',
    'month',
    'auditYear',
    'villagePanchayatUnit',
    'sanctionedMandays',
    'auditStartDate',
    'auditEndDate',
    'workingDays',
    'allocatedNoAuditor',
    'totalMandays',
    'action'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.villagePanchayatAuditPlanningForm = this.fb.group({
      month: [''],
      villagePanchayatUnit: [''],
      sanctionedMandays: [''],
      auditStartDate: [''],
      auditEndDate: [''],
      workingDays: [''],
      allotedNoOfAuditors: [''],
      totalMandays: [''],
      auditYear: ['']
    });
  }

  // calculate total mandays
  calculateTotalMandays() {
    this.totalManDaysValue = 0;

    const auditorsNumber = Number(this.villagePanchayatAuditPlanningForm.value.allotedNoOfAuditors);
    if (auditorsNumber !== null) {
      this.totalManDaysValue = this.workingDays * auditorsNumber;
    }

    return this.totalManDaysValue;
  }

  // calculate total mandays for table
  calculatetotalMandaysTable(index) {
    this.totalManDaysTableValue = Number(this.dataSource.data[index].workingDays) * Number(this.dataSource.data[index].allocatedNoAuditor);

    return this.totalManDaysTableValue;
  }

  // add table entry
  add() {
    const monthValue = this.villagePanchayatAuditPlanningForm.value.month;
    const auditYearValue = this.villagePanchayatAuditPlanningForm.value.auditYear;

    // replaces data entry if table entry is edited
    if (this.isEditClicked) {
      this.ElementData.splice(this.indexValue, 1, {
        month: this.monthList[monthValue].viewValue,
        auditYear: this.auditYearList[auditYearValue].viewValue,
        villagePanchayatUnit: this.villagePanchayatAuditPlanningForm.value.villagePanchayatUnit,
        sanctionedMandays: this.villagePanchayatAuditPlanningForm.value.sanctionedMandays,
        auditStartDate: this.villagePanchayatAuditPlanningForm.value.auditStartDate,
        auditEndDate: this.villagePanchayatAuditPlanningForm.value.auditEndDate,
        workingDays: this.workingDays,
        allocatedNoAuditor: this.villagePanchayatAuditPlanningForm.value.allotedNoOfAuditors
      });
      this.dataSource = new MatTableDataSource<VillagePanchayatAudit>(this.ElementData);

    } else {

      // add new table data
      this.ElementData.push({
        month: this.monthList[monthValue].viewValue,
        auditYear: this.auditYearList[auditYearValue].viewValue,
        villagePanchayatUnit: this.villagePanchayatAuditPlanningForm.value.villagePanchayatUnit,
        sanctionedMandays: this.villagePanchayatAuditPlanningForm.value.sanctionedMandays,
        auditStartDate: this.villagePanchayatAuditPlanningForm.value.auditStartDate,
        auditEndDate: this.villagePanchayatAuditPlanningForm.value.auditEndDate,
        workingDays: this.workingDays,
        allocatedNoAuditor: this.villagePanchayatAuditPlanningForm.value.allotedNoOfAuditors
      });

      this.dataSource.data = this.dataSource.data;
    }

  }

  // show respective row data into form
  editRow(index) {

    this.isEditClicked = true;
    this.indexValue = index;

    const monthValue = this.ElementData[index].month;
    const auditYearValue = this.ElementData[index].auditYear;

    const length1 = Object.keys(this.monthList).length;
    const length2 = Object.keys(this.auditYearList).length;

    let month;
    let auditYear;

    for (let i = 0; i < length1; i++) {

      if (monthValue === this.monthList[i].viewValue) {
        month = this.monthList[i].value;
      }
    }

    for (let i = 0; i < length2; i++) {

      if (auditYearValue === this.auditYearList[i].viewValue) {
        auditYear = this.auditYearList[i].value;

      }
    }
    this.villagePanchayatAuditPlanningForm.setValue({

      month: month,
      villagePanchayatUnit: this.ElementData[index].villagePanchayatUnit,
      sanctionedMandays: this.ElementData[index].sanctionedMandays,
      auditStartDate: new Date(this.ElementData[index].auditStartDate),
      auditEndDate: new Date(this.ElementData[index].auditEndDate),
      workingDays: this.workingDays,
      allotedNoOfAuditors: this.ElementData[index].allocatedNoAuditor,
      totalMandays: this.totalManDaysTableValue,
      auditYear: auditYear,

    });

  }

  // delete row from table
  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  // reset form
  resetForm() { }

  // reset common button
  reset() { }


  // calculate working days
  calculateWorkingDays() {

    this.workingDays = 0;

    const startDate = this.villagePanchayatAuditPlanningForm.value.auditStartDate;
    const endDate = this.villagePanchayatAuditPlanningForm.value.auditEndDate;

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


