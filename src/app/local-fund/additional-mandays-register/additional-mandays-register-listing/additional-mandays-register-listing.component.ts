import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AdditionalMandaysRegister } from 'src/app/model/local-fund';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-additional-mandays-register-listing',
  templateUrl: './additional-mandays-register-listing.component.html',
  styleUrls: ['./additional-mandays-register-listing.component.css']
})
export class AdditionalMandaysRegisterListingComponent implements OnInit {

  // variables
  searchForm: FormGroup;
  filterElementData: AdditionalMandaysRegister[];
  selection = new SelectionModel<AdditionalMandaysRegister>(true, []);

  // directive object for checkbox
  directiveObj = new CommonDirective(this.route);

  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);


  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  auditorNameCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  auditTypeCtrl: FormControl = new FormControl();

  // lists
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
    { value: '2', viewValue: 'RMC' },
  ];

  auditYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
    { value: '4', viewValue: '2021-22' },
    { value: '5', viewValue: '2022-22' },
  ];

  auditorNameList: ListValue[] = [
    { value: '0', viewValue: 'M J Patel' },
    { value: '1', viewValue: 'Mr. M.K.Shah' },

  ];


  districtNameList: ListValue[] = [
    { value: '0', viewValue: 'Ahmedabad' },
    { value: '1', viewValue: 'Amreli' },
    { value: '2', viewValue: 'Anand' },
    { value: '3', viewValue: 'Aravalli' },
    { value: '4', viewValue: 'Banaskantha' },
    { value: '5', viewValue: 'Bharuch' },
    { value: '6', viewValue: 'Bhavnagar' },
    { value: '7', viewValue: 'Botad' },
    { value: '8', viewValue: 'Chhota Udaipur' },
    { value: '9', viewValue: 'Dahod' },
    { value: '10', viewValue: 'Dang' },
    { value: '11', viewValue: 'Devbhoomi Dwarka' },
    { value: '12', viewValue: 'Gandhinagar' },
    { value: '13', viewValue: 'Gir Somnath' },
    { value: '14', viewValue: 'Jamnagar' },
    { value: '15', viewValue: 'Junagadh' },
    { value: '16', viewValue: 'Kutch' },
    { value: '17', viewValue: 'Kheda' },
    { value: '18', viewValue: 'Mahisagar' },
    { value: '19', viewValue: 'Mehsana' },
    { value: '20', viewValue: 'Morbi' },
    { value: '21', viewValue: 'Narmada' },
    { value: '22', viewValue: 'Navsari' },
    { value: '23', viewValue: 'Panchmahal' },
    { value: '24', viewValue: 'Patan' },
    { value: '25', viewValue: 'Porbandar' },
    { value: '26', viewValue: 'Rajkot' },
    { value: '27', viewValue: 'Sabarkantha' },
    { value: '28', viewValue: 'Surat' },
    { value: '29', viewValue: 'Surendranagar' },
    { value: '30', viewValue: 'Tapi' },
    { value: '31', viewValue: 'Vadodara' },
    { value: '32', viewValue: 'Valsad' },
  ];

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

  auditTypeList: ListValue[] = [
    { value: '0', viewValue: 'Chargable' },
    { value: '1', viewValue: 'Non-Chargable' },
  ];
  // lists end

  // table data
  ElementData: AdditionalMandaysRegister[] = [
    {
      district: 'Rajkot',
      auditYear: '2018-19',
      month: 'April',
      instituteType: 'Municipal Corporation',
      instituteName: 'RMC',
      auditType: 'Chargable',
      auditorName: 'Mr. M.K.Shah',
      auditStartDate: new Date('04/08/2018'),
      sanctionedMandays: '20',
      requestedAdditionalMandays: '10',
      reason: 'Sanctioned Mandays are not enough for audit',
      status: 'Pending for Verify'
    }
  ];

  // table datasource
  dataSource = new MatTableDataSource<AdditionalMandaysRegister>(this.ElementData);

  // table columns
  displayedColumns: string[] = [
    'select',
    'serialNo',
    'district',
    'auditYear',
    'month',
    'instituteType',
    'instituteName',
    'auditType',
    'auditorName',
    'auditStartDate',
    'sanctionedMandays',
    'requestedAdditionalMandays',
    'reason',
    'status',
    'action'
  ];

  // paginator
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
      auditorName: [''],
      auditType: [''],
      month: [''],
      districtName: ['']
    });
  }

  // allow search on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;

    const instituteTypeValue = formVal.instituteType;
    const instituteNameValue = formVal.instituteName;
    const auditYearValue = formVal.auditYear;
    const auditorNameValue = formVal.auditorName;
    const districtNameValue = formVal.districtName;
    const monthValue = formVal.month;
    const auditTypeValue = formVal.auditType;

    if (formVal.instituteType !== '' && formVal.instituteType != null) {
      const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
      this.dataSource = new MatTableDataSource<AdditionalMandaysRegister>(this.filterElementData);

    }

    if (formVal.instituteName !== '' && formVal.instituteName != null) {

      const instituteName = this.instituteNameList[instituteNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.instituteName.toLowerCase() === instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<AdditionalMandaysRegister>(this.filterElementData);

    }

    if (formVal.auditYear !== '' && formVal.auditYear != null) {

      const auditYear = this.auditYearList[auditYearValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.auditYear.toLowerCase() === auditYear.toLowerCase());
      this.dataSource = new MatTableDataSource<AdditionalMandaysRegister>(this.filterElementData);

    }



    if (formVal.auditorName !== '' && formVal.auditorName !== null) {

      const auditorName = this.auditorNameList[auditorNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.auditorName.toLowerCase() === auditorName.toLowerCase());
      this.dataSource = new MatTableDataSource<AdditionalMandaysRegister>(this.filterElementData);

    }

    if (formVal.districtName !== '' && formVal.districtName !== null) {

      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<AdditionalMandaysRegister>(this.filterElementData);

    }

    if (formVal.auditType !== '' && formVal.auditType !== null) {

      const auditType = this.auditTypeList[auditTypeValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.auditType.toLowerCase() === auditType.toLowerCase());
      this.dataSource = new MatTableDataSource<AdditionalMandaysRegister>(this.filterElementData);

    }

    if (formVal.month !== '' && formVal.month !== null) {

      const month = this.monthList[monthValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.month.toLowerCase() === month.toLowerCase());
      this.dataSource = new MatTableDataSource<AdditionalMandaysRegister>(this.filterElementData);

    }

    if ((formVal.auditorName === '' || formVal.auditorName == null) &&
      (formVal.auditYear === '' || formVal.auditYear == null) &&
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null) &&
      (formVal.districtName === '' || formVal.districtName == null) &&
      (formVal.auditType === '' || formVal.auditType == null) &&
      (formVal.month === '' || formVal.month == null)
    ) {
      this.dataSource = new MatTableDataSource<AdditionalMandaysRegister>(this.ElementData);
    }

  }

  // resets search form
  clearForm() {
    this.searchForm.reset();
  }


  // delete table row
  delete(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }


  // checkbox related data
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

  // reset form
  resetForm() { }

}
