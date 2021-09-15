import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkflowDetailsLfComponent } from 'src/app/local-fund/workflow-details-lf/workflow-details-lf.component';
import { DistrictAuditPlanningListing } from 'src/app/model/local-fund';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';




@Component({
  selector: 'app-district-audit-planning-listing',
  templateUrl: './district-audit-planning-listing.component.html',
  styleUrls: ['./district-audit-planning-listing.component.css']
})
export class DistrictAuditPlanningListingComponent implements OnInit {
  searchForm: FormGroup;
  totalManDaysTableValue = 0;
  filterElementData: any[];

  directiveObj = new CommonDirective(this.route);
  directiveObject = new LocalFundDirective(this.dialog);


  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();

  monthList: ListValue[] = [
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
  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
    { value: '2', viewValue: 'Gandhinagar-District Panchayat' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Village Panchayat' },
    { value: '6', viewValue: 'Ahmedabad - District Panchayat' },
  ];

  // table data
  ElementData: DistrictAuditPlanningListing[] = [
    {

      month: 'NA',
      auditYear: '2017-18',
      instituteType: 'District Panchayat',
      instituteName: 'Gandhinagar - District Panchayat',
      villagePanchayatUnit: 'NA',
      sanctionedMandays: 250,
      auditStartDate: new Date('04/01/2017'),
      auditEndDate: new Date('05/01/2017'),
      workingDays: 30,
      allocatedNoAuditor: 4,
      status: 'Verify'

    },
    {

      month: 'NA',
      auditYear: '2017-18',
      instituteType: 'Municipal Corporation',
      instituteName: 'GMC',
      villagePanchayatUnit: 'NA',
      sanctionedMandays: 100,
      auditStartDate: new Date('05/14/2017'),
      auditEndDate: new Date('06/15/2017'),
      workingDays: 30,
      allocatedNoAuditor: 2,
      status: 'Pending For Verify'

    },
    {

      month: 'NA',
      auditYear: '2018-19',
      instituteType: 'Board Corporation',
      instituteName: 'GPCB',
      villagePanchayatUnit: 'NA',
      sanctionedMandays: 150,
      auditStartDate: new Date('02/10/2018'),
      auditEndDate: new Date('03/30/2018'),
      workingDays: 40,
      allocatedNoAuditor: 4,
      status: 'Approved'

    },
    {

      month: 'NA',
      auditYear: '2019-20',
      instituteType: 'Nagarpalika',
      instituteName: 'Dahegam NagarPalika',
      villagePanchayatUnit: 'NA',
      sanctionedMandays: 100,
      auditStartDate: new Date('02/01/2019'),
      auditEndDate: new Date('03/31/2019'),
      workingDays: 35,
      allocatedNoAuditor: 3,
      status: 'Verify'

    },
    {

      month: 'NA',
      auditYear: '2019-20',
      instituteType: 'District Panchayat',
      instituteName: 'Ahmedabad - District Panchayat',
      villagePanchayatUnit: 'NA',
      sanctionedMandays: 300,
      auditStartDate: new Date('10/7/2019'),
      auditEndDate: new Date('01/15/2020'),
      workingDays: 45,
      allocatedNoAuditor: 10,
      status: 'Pending For Verify'

    },
    {

      month: 'May',
      auditYear: '2019-20',
      instituteType: 'Village Panchayat',
      instituteName: 'Village Panchayat',
      villagePanchayatUnit: '500',
      sanctionedMandays: 500,
      auditStartDate: new Date('06/01/2019'),
      auditEndDate: new Date('07/01/2019'),
      workingDays: 500,
      allocatedNoAuditor: 1,
      status: 'Pending For Verify'

    },
    {

      month: 'June',
      auditYear: '2019-20',
      instituteType: 'Village Panchayat',
      instituteName: 'Village Panchayat',
      villagePanchayatUnit: '200',
      sanctionedMandays: 150,
      auditStartDate: new Date('07/12/2019'),
      auditEndDate: new Date('08/10/2019'),
      workingDays: 35,
      allocatedNoAuditor: 3,
      status: 'Approved'

    },
    {

      month: 'July',
      auditYear: '2019-20',
      instituteType: 'Village Panchayat',
      instituteName: 'Village Panchayat',
      villagePanchayatUnit: '100',
      sanctionedMandays: 100,
      auditStartDate: new Date('08/10/2019'),
      auditEndDate: new Date('09/05/2019'),
      workingDays: 31,
      allocatedNoAuditor: 2,
      status: 'Verify'

    },
    {

      month: 'August',
      auditYear: '2019-20',
      instituteType: 'Village Panchayat',
      instituteName: 'Village Panchayat',
      villagePanchayatUnit: '50',
      sanctionedMandays: 50,
      auditStartDate: new Date('10/01/2019'),
      auditEndDate: new Date('11/15/2019'),
      workingDays: 45,
      allocatedNoAuditor: 1,
      status: 'Pending For Verify'

    },
  ];
  dataSource = new MatTableDataSource<DistrictAuditPlanningListing>(this.ElementData);
  displayedColumns: any[] = [
    'select',
    'serialNo',
    'month',
    'auditYear',
    'instituteType',
    'instituteName',
    'villagePanchayatUnit',
    'sanctionedMandays',
    'auditStartDate',
    'auditEndDate',
    'workingDays',
    'allocatedNoAuditor',
    'totalMandays',
    'status',
    'action'
  ];

  selection = new SelectionModel<DistrictAuditPlanningListing>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private route: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      month: [''],
      sanctionedMandays: [''],
      auditStartDate: [''],
      auditEndDate: [''],

    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;
    const instituteTypeValue = formVal.instituteType;
    const instituteNameValue = formVal.instituteName;
    const auditYearValue = formVal.auditYear;
    const monthValue = formVal.month;
    const startDate = formVal.auditStartDate;
    const endDate = formVal.auditEndDate;

    if (formVal.instituteType !== '' && formVal.instituteType != null) {
      const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.instituteName !== '' && formVal.instituteName != null) {
      const instituteName = this.instituteNameList[instituteNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.instituteName.toLowerCase() === instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.auditYear !== '' && formVal.auditYear != null) {
      const auditYear = this.auditYearList[auditYearValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.auditYear.toLowerCase() === auditYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.month !== '' && formVal.month != null) {
      const month = this.monthList[monthValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.month.toLowerCase() === month.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }
    if (formVal.auditStartDate !== '' && formVal.auditStartDate != null) {
      const auditStartDate = new Date(startDate).toLocaleDateString();
    }

    if ((formVal.month === '' || formVal.month == null) &&
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null) &&
      (formVal.auditYear === '' || formVal.auditYear == null) &&
      (formVal.auditStartDate === '' || formVal.auditStartDate == null)
    ) {
      this.dataSource = new MatTableDataSource<any>(this.ElementData);
    }
  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

  // reset common button
  reset() { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;

  }


  // calculate total mandays for table
  calculatetotalMandaysTable(index) {
    this.totalManDaysTableValue = Number(this.dataSource.data[index].workingDays) * Number(this.dataSource.data[index].allocatedNoAuditor);
    return this.totalManDaysTableValue;
  }
}
