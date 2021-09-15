import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { WorkflowDetailsLfComponent } from 'src/app/local-fund/workflow-details-lf/workflow-details-lf.component';
import { FinancialYearAuditPlanning, HodAuditReport } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-hod-audit-planning',
  templateUrl: './hod-audit-planning.component.html',
  styleUrls: ['./hod-audit-planning.component.css']
})
export class HodAuditPlanningComponent implements OnInit {

  directiveObject = new LocalFundDirective(this.dialog);
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  filterElement_Data: any[];

  // financial year audit planning data
  ElementData: FinancialYearAuditPlanning[] = [
    {
      instituteType: 'District Panchayat',
      auditUnit: 33,
      proposedAuditUnit: 37,
      suggestedAuditUnit: 35
    },
    {
      instituteType: 'Taluka Panchayat',
      auditUnit: 247,
      proposedAuditUnit: 247,
      suggestedAuditUnit: 250
    },
    {
      instituteType: 'Village Panchayat',
      auditUnit: 500,
      proposedAuditUnit: 450,
      suggestedAuditUnit: 500
    },
    {
      instituteType: 'Municipal',
      auditUnit: 162,
      proposedAuditUnit: 162,
      suggestedAuditUnit: 150
    },
    {
      instituteType: 'Municipal corporation',
      auditUnit: 8,
      proposedAuditUnit: 11,
      suggestedAuditUnit: 10
    },
    {
      instituteType: 'University',
      auditUnit: 19,
      proposedAuditUnit: 25,
      suggestedAuditUnit: 20
    },
    {
      instituteType: 'Secondary education board',
      auditUnit: 1,
      proposedAuditUnit: 2,
      suggestedAuditUnit: 2
    },
    {
      instituteType: 'other audit',
      auditUnit: 234,
      proposedAuditUnit: 295,
      suggestedAuditUnit: 250
    },


  ];

  // financial year audit planning dataSource
  dataSource = new MatTableDataSource<FinancialYearAuditPlanning>(this.ElementData);

  // financial year audit planning column
  displayedColumns: any[] = [
    'serialNo',
    'instituteType',
    'auditUnit',
    'proposedAuditUnit',
    'suggestedAuditUnit',
  ];

  hodAuditPlanning: FormGroup;

  financialYearCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();

  financialYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
    { value: '4', viewValue: '2021-22' },
    { value: '5', viewValue: '2022-23' },
  ];

  instituteTypeList: ListValue[] = [
    { value: '0', viewValue: 'Maha Nagarpalika' },
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

  // hod audit report data
  ElementData1: HodAuditReport[] = [
    {
      instituteType: 'District Panchayat',
      auditReportSubmitToAssembly: '2018-19'
    },
    {
      instituteType: 'Taluka Panchayat',
      auditReportSubmitToAssembly: '2019-20'
    },
    {

      instituteType: 'Municipal Corporation',
      auditReportSubmitToAssembly: '2019-20'
    },

  ];

  // hod audit report dataSource
  dataSourceAuditReport = new MatTableDataSource<HodAuditReport>(this.ElementData1);

  // hod audit report column
  displayedColumnAuditReport: any[] = [
    'serialNo',
    'instituteType',
    'auditReportSubmitToAssembly'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.hodAuditPlanning = this.fb.group({
      financialYear: [''],
      instituteType: [''],
      others: [''],
    });
  }

  // calculate total audit unit
  totalAuditUnit(): number {
    let totalAuditUnit = 0;
    this.dataSource.data.forEach((element1) => {
      totalAuditUnit = totalAuditUnit + Number(element1.auditUnit);
    });
    return totalAuditUnit;
  }

  // calculate total proposed audit unit
  totalProposedAuditUnit(): number {
    let totalProposedAuditUnit = 0;
    this.dataSource.data.forEach((element1) => {
      totalProposedAuditUnit = totalProposedAuditUnit + Number(element1.proposedAuditUnit);
    });
    return totalProposedAuditUnit;
  }

  // calculate total suggested units
  totalSuggestedUnit(): number {
    let totalSuggestedtUnit = 0;
    this.dataSource.data.forEach((element1) => {
      totalSuggestedtUnit = totalSuggestedtUnit + Number(element1.suggestedAuditUnit);
    });
    return totalSuggestedtUnit;
  }

  // add new table entry
  add() {
    const financialYearValue = this.hodAuditPlanning.value.financialYear;
    const instituteTypeValue = this.hodAuditPlanning.value.instituteType;

    this.ElementData1.push({
      instituteType: this.instituteTypeList[instituteTypeValue].viewValue,
      auditReportSubmitToAssembly: this.financialYearList[financialYearValue].viewValue
    });

    this.dataSourceAuditReport.data = this.dataSourceAuditReport.data;

  }

  // reset form
  resetForm() {
    this.hodAuditPlanning.reset();
  }

  // reset common button
  reset() { }
}
