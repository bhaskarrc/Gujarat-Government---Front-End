import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { ScheduleThree } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-schedule-three',
  templateUrl: './schedule-three-statutory-grant.component.html',
  styleUrls: ['./schedule-three-statutory-grant.component.css']
})
export class ScheduleThreeComponent implements OnInit {
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  scheduleThree: FormGroup;
  directiveObject = new LocalFundDirective(this.dialog);


  financialYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  typesOfGrantCtrl: FormControl = new FormControl();

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

  // listing data
  ElementData: ScheduleThree[] = [
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Water cess',
      panchayatSectionOrderNo: 'As per water cess',
      legislativeGrant: '10000',
      receivedStatutaryGrant: '5000',
      remarks: 'Text',

    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'House Vera surcharge',
      panchayatSectionOrderNo: 'According to the resolution of the government',
      legislativeGrant: '0',
      receivedStatutaryGrant: '0',
      remarks: 'Text',
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Stamp Duty',
      panchayatSectionOrderNo: 'G.P.Off. According to  207,209',
      legislativeGrant: '0',
      receivedStatutaryGrant: '0',
      remarks: 'Text',
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Land revenue cess (Village)',
      panchayatSectionOrderNo: 'G.P.Off. According to  207,209',
      legislativeGrant: '0',
      receivedStatutaryGrant: '0',
      remarks: 'Text',
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Sand stone quarry fee',
      panchayatSectionOrderNo: 'According to the resolution of the government',
      legislativeGrant: '0',
      receivedStatutaryGrant: '0',
      remarks: 'Text',
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Small Farmers Forgive Land',
      panchayatSectionOrderNo: 'According to the resolution of the government',
      legislativeGrant: '0',
      receivedStatutaryGrant: '0',
      remarks: 'Text',
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Depreciation of duty grant',
      panchayatSectionOrderNo: 'According to the resolution of the government',
      legislativeGrant: '0',
      receivedStatutaryGrant: '0',
      remarks: 'Text',
    },
    {

      district: 'Rajkot',
      financialYear: '2013-14',
      typesOfGrant: 'Forest yield',
      panchayatSectionOrderNo: 'G.P.Off. According to  224',
      legislativeGrant: '0',
      receivedStatutaryGrant: '0',
      remarks: 'Text',
    },

  ];

  // listing datasource
  dataSource = new MatTableDataSource<ScheduleThree>(this.ElementData);

  // listing column
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
    'action'
  ];

  // columns for Taluka panchayat allotment footer
  displayedColumnsTaluka: any[] = [
    'footer1',
    'district',
    'financialYear',
    'typesOfGrant',
    'panchayatSectionOrderNo',
    'legislativeGrant',
    'receivedStatutaryGrant',
    'grantDifference',
    'remarks',
    'action'
  ];

  // columns for District's net amount (income) footer
  displayedColumnsDistrictAmount: any[] = [
    'footer2',
    'district',
    'financialYear',
    'typesOfGrant',
    'panchayatSectionOrderNo',
    'legislativeGrant',
    'receivedStatutaryGrant',
    'grantDifference',
    'remarks',
    'action'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.scheduleThree = this.fb.group({
      financialYear: [''],
      districtName: [''],
      typesOfGrant: ['']
    });
  }

  // add form data into table
  add() {
    const districtNameValue = this.scheduleThree.value.districtName;
    const financialYearValue = this.scheduleThree.value.financialYear;
    const typesOfGrantValue = this.scheduleThree.value.typesOfGrant;
    this.ElementData.push({
      district: this.districtNameList[districtNameValue].viewValue,
      financialYear: this.financialYearList[financialYearValue].viewValue,
      typesOfGrant: this.typesOfGrantList[typesOfGrantValue].viewValue,
      panchayatSectionOrderNo: 'According to the resolution of the government',
      legislativeGrant: '0',
      receivedStatutaryGrant: '0',
      remarks: 'Text',
    });
    this.dataSource = new MatTableDataSource<ScheduleThree>(this.ElementData);
  }

  // clear form
  clearForm() {
    this.scheduleThree.reset();
  }

  // common reset button
  reset() {

  }

  // for enabling editing show respective row data into form
  edit(index) {
    const financialYearValue = this.ElementData[index].financialYear;
    const districtNameValue = this.ElementData[index].district;
    const typeOfGrantValue = this.ElementData[index].typesOfGrant;
    const length = Object.keys(this.financialYearList).length;
    const length1 = Object.keys(this.districtNameList).length;
    const length2 = Object.keys(this.typesOfGrantList).length;
    let financialYear;
    let districtName;
    let typeOfGrant;

    for (let i = 0; i < length1; i++) {

      if (districtNameValue === this.districtNameList[i].viewValue) {
        districtName = this.districtNameList[i].value;

      }
    }
    for (let i = 0; i < length; i++) {

      if (financialYearValue === this.financialYearList[i].viewValue) {
        financialYear = this.financialYearList[i].value;

      }
    }
    for (let i = 0; i < length2; i++) {

      if (typeOfGrantValue === this.typesOfGrantList[i].viewValue) {
        typeOfGrant = this.typesOfGrantList[i].value;
      }
    }

    this.scheduleThree.setValue({
      financialYear: financialYear,
      districtName: districtName,
      typesOfGrant: typeOfGrant
    });
  }

  // remarks
  remarks() { }

  // calculate grant difference
  calculateGrantDifference(index): number {

    let grantDifference = 0;
    const legislativeGrant = this.dataSource.data[index].legislativeGrant;
    const receivedStatutaryGrant = this.dataSource.data[index].receivedStatutaryGrant;
    grantDifference = Number(legislativeGrant) - Number(receivedStatutaryGrant);
    return grantDifference;

  }

  // on change on Legislative grants by audit field valueF
  legislativeGrant() { }



}
