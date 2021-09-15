import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ScheduleThree } from 'src/app/model/local-fund';

@Component({
  selector: 'app-schedule-three-report',
  templateUrl: './schedule-three-report.component.html',
  styleUrls: ['./schedule-three-report.component.css']
})
export class ScheduleThreeReportComponent implements OnInit {

  scheduleThree: FormGroup;
  searchForm: FormGroup;
  filterElementData: any[];
  talukaPanchayatAllotmentValue = 1295000;
  receivedStatutaryGrant = 0;

  financialYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  typesOfGrantCtrl: FormControl = new FormControl();

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

  financialYearList: ListValue[] = [
    { value: '0', viewValue: '2013-14' },
    { value: '1', viewValue: '2014-15' },
    { value: '2', viewValue: '2015-16' },
    { value: '3', viewValue: '2016-17' },
    { value: '4', viewValue: '2017-18' },
    { value: '5', viewValue: '2018-19' },
    { value: '6', viewValue: '2019-20' },
    { value: '7', viewValue: '2020-21' },
  ];
  typesOfGrantList: ListValue[] = [
    { value: '0', viewValue: 'Water cess' },
    { value: '1', viewValue: 'House Vera surcharge' },
    { value: '2', viewValue: 'Stamp Duty' },
    { value: '3', viewValue: 'Land revenue cess (Village)' },
    { value: '4', viewValue: 'Small Farmers Forgive Land' },
    { value: '5', viewValue: 'Depreciation of duty grant' },
    { value: '6', viewValue: 'Forest yield' },
    { value: '7', viewValue: 'Sand stone quarry fee' },
  ];


  // listing data
  ElementData: ScheduleThree[] = [
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Water cess',
      panchayatSectionOrderNo: 'As per water cess',
      legislativeGrant: '10000',
      receivedStatutaryGrant: '5000',
      remarks: 'NA'

    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'House Vera surcharge',
      panchayatSectionOrderNo: 'According to the resolution of the government',
      legislativeGrant: '20000',
      receivedStatutaryGrant: '8000',
      remarks: 'NA'
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Stamp Duty',
      panchayatSectionOrderNo: 'G.P.Off. According to  207,209',
      legislativeGrant: '35000',
      receivedStatutaryGrant: '10000',
      remarks: 'NA'
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Land revenue cess (Village)',
      panchayatSectionOrderNo: 'G.P.Off. According to  207,209',
      legislativeGrant: '50000',
      receivedStatutaryGrant: '15000',
      remarks: 'NA'
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Sand stone quarry fee',
      panchayatSectionOrderNo: 'According to the resolution of the government',
      legislativeGrant: '25000',
      receivedStatutaryGrant: '6000',
      remarks: 'NA'
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Small Farmers Forgive Land',
      panchayatSectionOrderNo: 'According to the resolution of the government',
      legislativeGrant: '45000',
      receivedStatutaryGrant: '15000',
      remarks: 'NA'
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Depreciation of duty grant',
      panchayatSectionOrderNo: 'According to the resolution of the government',
      legislativeGrant: '70000',
      receivedStatutaryGrant: '19000',
      remarks: 'NA'
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Forest yield',
      panchayatSectionOrderNo: 'G.P.Off. According to  224',
      legislativeGrant: '100000',
      receivedStatutaryGrant: '20000',
      remarks: 'NA'
    },

  ];

  // listing datasource
  dataSource = new MatTableDataSource<ScheduleThree>(this.ElementData);

  // listing columns
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'financialYear',
    'typesOfGrant',
    'panchayatSectionOrderNo',
    'legislativeGrant',
    'receivedStatutaryGrant',
    'grantDifference',
    'remarks',

  ];

  // total footer
  displayedColumnsTotal: any[] = [
    'footer',
    'receivedStatutaryGrant',
    'grantDifference',
    'remarks',

  ];

  // talukaamount footer
  displayedColumnsTaluka: any[] = [
    'footer1',
    'talukaPanchayatValue',
    'grantDifference',
    'remarks',

  ];

  // districtamount footer
  displayedColumnsDistrictAmount: any[] = [
    'footer2',
    'districtAmount',
    'grantDifference',
    'remarks',

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
      financialYear: [''],
      districtName: [''],
      typesOfGrant: ['']

    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;
    const financialYearValue = formVal.financialYear;
    const districtNameValue = formVal.districtName;
    const typesOfGrantValue = formVal.typesOfGrant;



    if (formVal.financialYear !== '' && formVal.financialYear != null) {

      const financialYear = this.financialYearList[financialYearValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.financialYear.toLowerCase() === financialYear.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.districtName !== '' && formVal.districtName != null) {

      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (formVal.typesOfGrant !== '' && formVal.typesOfGrant != null) {

      const typesOfGrant = this.typesOfGrantList[typesOfGrantValue].viewValue;
      this.filterElementData = this.ElementData.filter(
        searchBy => searchBy.typesOfGrant.toLowerCase() === typesOfGrant.toLowerCase());
      this.dataSource = new MatTableDataSource<any>(this.filterElementData);

    }

    if (
      (formVal.typesOfGrant === '' || formVal.typesOfGrant == null) &&
      (formVal.financialYear === '' || formVal.financialYear == null) &&
      (formVal.districtName === '' || formVal.districtName == null)


    ) {
      this.dataSource = new MatTableDataSource<any>(this.ElementData);
    }

  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

  // calculate grant difference
  calculateGrantDifference(index): number {
    let grantDifference = 0;
    const legislativeGrant = this.dataSource.data[index].legislativeGrant;
    const receivedStatutaryGrant = this.dataSource.data[index].receivedStatutaryGrant;
    grantDifference = Number(legislativeGrant) - Number(receivedStatutaryGrant);
    return grantDifference;

  }

  // calculate received grant
  calculateReceivedGrant() {
    let receivedStatutaryGrant = 0;
    this.dataSource.data.forEach((element1) => {

      receivedStatutaryGrant = Number(receivedStatutaryGrant) + Number(element1.receivedStatutaryGrant);
    });
    this.receivedStatutaryGrant = receivedStatutaryGrant;

    return receivedStatutaryGrant;

  }

  // return talukaPanchayatAllotment Value
  talukaPanchayatAllotment() {
    return this.talukaPanchayatAllotmentValue;
  }

  // calculate district amount
  calculateDistrictAmount(): number {
    let districtAmount = 0;
    const talukaPanchayatAllotment = this.talukaPanchayatAllotmentValue;
    districtAmount = talukaPanchayatAllotment - this.receivedStatutaryGrant;
    return districtAmount;

  }

  // on click on generate report
  goToReport() { }

  // on click on export to pdf
  captureScreen() { }



}
