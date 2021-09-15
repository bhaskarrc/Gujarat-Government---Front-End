import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ScheduleTwo } from 'src/app/model/local-fund';



@Component({
  selector: 'app-schedule-two',
  templateUrl: './schedule-two.component.html',
  styleUrls: ['./schedule-two.component.css']
})
export class ScheduleTwoComponent implements OnInit {


  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  searchForm: FormGroup;
  filterElementData: any[];

  financialYearCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();

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

  auditYearList: ListValue[] = [
    { value: '0', viewValue: '2017' },
    { value: '1', viewValue: '2018' },
    { value: '2', viewValue: '2019' },
    { value: '3', viewValue: '2020' },
  ];

  financialYearList: ListValue[] = [
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-20' },
  ];

  departmentList: ListValue[] = [
    { value: '0', viewValue: 'Road & Building' },
    { value: '1', viewValue: 'Agriculture' },
    { value: '2', viewValue: 'Finance Department' },
    { value: '3', viewValue: 'Panchayat' },
  ];

  majorHeadList: ListValue[] = [
    { value: '0', viewValue: '2216 Village House Development' },
    { value: '1', viewValue: '2401 Crop Husbandry' },
    { value: '2', viewValue: '2054 Treasury & Account ' },
    { value: '3', viewValue: '3606 Panchayati Raj' },
  ];

  // listing data
  ElementData: ScheduleTwo[] = [
    {
      financialYear: '2019-20',
      district: 'Ahmedabad',
      department: 'Road & Building',
      majorHead: '2216 Village House Development',
      recoverableAmount: 100000,
      receivedAmount: 20000,
      pendingAmount: 80000,

    },
    {
      financialYear: '2019-20',
      district: 'Gandhinagar',
      department: 'Agriculture',
      majorHead: '2401 Crop Husbandry',
      recoverableAmount: 100000,
      receivedAmount: 30000,
      pendingAmount: 70000,

    },
    {
      financialYear: '2019-20',
      district: 'Rajkot',
      department: 'Finance Department',
      majorHead: '2054 Treasury & Account ',
      recoverableAmount: 250000,
      receivedAmount: 150000,
      pendingAmount: 100000,

    },
    {
      financialYear: '2019-20',
      district: 'Bhavnagar',
      department: 'Panchayat',
      majorHead: '3606 Panchayati Raj',
      recoverableAmount: 300000,
      receivedAmount: 250000,
      pendingAmount: 50000,

    }
  ];

  // listing dataSource
  dataSource = new MatTableDataSource<ScheduleTwo>(this.ElementData);

  // listing column
  displayedColumns: any[] = [
    'serialNo',
    'financialYear',
    'district',
    'department',
    'majorHead',
    'recoverableAmount',
    'receivedAmount',
    'pendingAmount',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      districtName: [''],
      financialYear: [''],
      instituteName: [''],
      department: [''],
      majorHead: ['']

    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;

    const financialYearValue = formVal.financialYear;
    const majorHeadValue = formVal.majorHead;
    const districtNameValue = formVal.districtName;
    const departmentValue = formVal.department;



    if (formVal.financialYear !== '' && formVal.financialYear != null) {
      const financialYear = this.financialYearList[financialYearValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.financialYear.toLowerCase() === financialYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);
    }

    if (formVal.majorHead !== '' && formVal.majorHead != null) {

      const majorHead = this.majorHeadList[majorHeadValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.majorHead.toLowerCase() === majorHead.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }


    if (formVal.districtName !== '' && formVal.districtName != null) {

      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }
    if (formVal.department !== '' && formVal.department != null) {

      const department = this.departmentList[departmentValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.department.toLowerCase() === department.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (
      (formVal.department === '' || formVal.department == null) &&
      (formVal.majorHead === '' || formVal.majorHead == null) &&
      (formVal.financialYear === '' || formVal.financialYear == null) &&
      (formVal.districtName === '' || formVal.districtName == null)


    ) {
      this.dataSource = new MatTableDataSource<any>(this.ElementData);
    }

  }


  // reset form data
  clearForm() {
    this.searchForm.reset();
  }

  reset() {

  }

  // on click on generate report button
  goToReport() { }

  // on click on export to pdf button
  captureScreen() { }


}




