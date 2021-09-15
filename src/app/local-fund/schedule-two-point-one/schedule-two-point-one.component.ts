import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ScheduleTwoPointOne } from 'src/app/model/local-fund';




@Component({
  selector: 'app-schedule-two-point-one',
  templateUrl: './schedule-two-point-one.component.html',
  styleUrls: ['./schedule-two-point-one.component.css']
})
export class ScheduleTwoPointOneComponent implements OnInit {

  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  searchForm: FormGroup;
  filterElementData: any[];

  recoveryYearCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();

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
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
  ];

  recoveryYearList: ListValue[] = [
    { value: '0', viewValue: '1986-1987' },
    { value: '1', viewValue: '1987-1988' },
    { value: '2', viewValue: '1988-1989' },
    { value: '3', viewValue: '1989-1990' },
    { value: '4', viewValue: '1990-1991' },
    { value: '5', viewValue: '1991-1992' },
  ];


  // listing data
  ElementData: ScheduleTwoPointOne[] = [
    {
      auditYear: '2019-20',
      district: 'Ahmedabad',
      recoveryYear: '1986-1987',
      recoverableAmount: 838.56,
      receivedAmount: 37.44,
      pendingAmount: 801.12,

    },
    {
      auditYear: '2019-20',
      district: 'Ahmedabad',
      recoveryYear: '1987-1988',
      recoverableAmount: 908.7,
      receivedAmount: 7.47,
      pendingAmount: 901.23,
    },
    {

      auditYear: '2019-20',
      district: 'Ahmedabad',
      recoveryYear: '1988-1989',
      recoverableAmount: 1600.84,
      receivedAmount: 6.12,
      pendingAmount: 1594.72,
    },
    {

      auditYear: '2019-20',
      district: 'Ahmedabad',
      recoveryYear: '1989-1990',
      recoverableAmount: 1050.01,
      receivedAmount: 17.38,
      pendingAmount: 1032.63,
    },
    {

      auditYear: '2019-20',
      district: 'Ahmedabad',
      recoveryYear: '1990-1991',
      recoverableAmount: 1241.84,
      receivedAmount: 17.44,
      pendingAmount: 1224.4,
    },
    {

      auditYear: '2019-20',
      district: 'Ahmedabad',
      recoveryYear: '1991-1992',
      recoverableAmount: 2117.15,
      receivedAmount: 1.87,
      pendingAmount: 2115.28,
    },
  ];

  // listing dataSource
  dataSource = new MatTableDataSource<ScheduleTwoPointOne>(this.ElementData);

  // listing columns
  displayedColumns: any[] = [
    'serialNo',
    'auditYear',
    'district',
    'recoveryYear',
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
      auditYear: [''],
      recoveryYear: [''],
      districtName: [''],
    });
  }


  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;
    const recoveryYearValue = formVal.recoveryYear;
    const auditYearValue = formVal.auditYear;
    const districtNameValue = formVal.districtName;



    if (formVal.auditYear !== '' && formVal.auditYear != null) {

      const auditYear = this.auditYearList[auditYearValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.auditYear.toLowerCase() === auditYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.districtName !== '' && formVal.districtName != null) {

      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }
    if (formVal.recoveryYear !== '' && formVal.recoveryYear != null) {

      const recoveryYear = this.recoveryYearList[recoveryYearValue].viewValue;

      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.recoveryYear.toLowerCase() === recoveryYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (
      (formVal.auditYear === '' || formVal.auditYear == null) &&
      (formVal.recoveryYear === '' || formVal.recoveryYear == null) &&
      (formVal.districtName === '' || formVal.districtName == null)


    ) {
      this.dataSource = new MatTableDataSource<any>(this.ElementData);
    }

  }

  // reset form data
  clearForm() {
    this.searchForm.reset();
  }

  // calculate totalRecoverable amount
  totalRecoverableAmount(): number {
    let recoverableAmount = 0;
    this.dataSource.data.forEach((element1) => {
      recoverableAmount = recoverableAmount + Number(element1.recoverableAmount);
    });
    return recoverableAmount;
  }

  // calculate total received amount
  totalReceivedAmount() {
    let receivedAmount = 0;
    this.dataSource.data.forEach((element1) => {
      receivedAmount = receivedAmount + Number(element1.receivedAmount);
    });
    return receivedAmount;

  }

  // calculate pending amount
  totalPendingAmount() {
    let pendingAmount = 0;
    this.dataSource.data.forEach((element1) => {
      pendingAmount = pendingAmount + Number(element1.pendingAmount);
    });
    return pendingAmount;

  }

  // on click on generate report button
  goToReport() { }

  // on click on export to pdf
  captureScreen() { }


}
