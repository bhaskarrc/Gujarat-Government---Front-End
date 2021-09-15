import { Component, OnInit, ViewChild } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { ScheduleSix } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-schedule-six-annual-report',
  templateUrl: './schedule-six-annual-report.component.html',
  styleUrls: ['./schedule-six-annual-report.component.css']
})
export class ScheduleSixAnnualReportComponent implements OnInit {

  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  searchForm: FormGroup;
  directiveObject = new LocalFundDirective(this.dialog);

  financialYearCtrl: FormControl = new FormControl();
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

  financialYearList: ListValue[] = [
    { value: '0', viewValue: '2013-14' },
    { value: '1', viewValue: '2015-16' },
    { value: '2', viewValue: '2016-17' },
    { value: '3', viewValue: '2017-18' },
    { value: '4', viewValue: '2018-19' },
    { value: '5', viewValue: '2019-20' },
    { value: '6', viewValue: '2020-21' },
  ];

  // listing data
  ElementData: ScheduleSix[] = [
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2202  Education',
      paraNo: '2',
      objectedAmount: ''
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2210 Health',
      paraNo: '1',
      objectedAmount: ''
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2403 Animal Compliance',
      paraNo: '12',
      objectedAmount: ''
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '3054 Road and bridge',
      paraNo: '32',
      objectedAmount: ''
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: 'Small irrigation',
      paraNo: '33',
      objectedAmount: ''
    }
  ];

  // listing daatSource
  dataSource = new MatTableDataSource<ScheduleSix>(this.ElementData);

  // listing column
  displayedColumns: any[] = [
    'serialNo',
    'financialYear',
    'district',
    'majorHead',
    'paraNo',
    'objectedAmount',
    'action'
  ];

  // total footer column
  displayedColumnsTotal: any[] = [
    'footer1',
    'objectedAmount',
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
    this.searchForm = this.fb.group({
      financialYear: [''],
      districtName: [''],
    });
  }

  // common reset button
  reset() { }

  // add form data into table
  onAdd() {
    this.ElementData.push({
      financialYear: this.financialYearList[this.searchForm.value.financialYear].viewValue,
      district: this.districtNameList[this.searchForm.value.districtName].viewValue,
      majorHead: '3054 Road and bridge',
      paraNo: '32',
      objectedAmount: ''
    });
    this.dataSource = new MatTableDataSource<ScheduleSix>(this.ElementData);
  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

  // calculate objected amount
  calculateObjectedAmount() {
    let objectedAmount = 0;
    this.dataSource.data.forEach((element1) => {
      objectedAmount = Number(objectedAmount) + Number(element1.objectedAmount);
    });

    return objectedAmount;
  }

  // for enabling editing show respective row data into form
  edit(index) {
    const financialYearValue = this.ElementData[index].financialYear;
    const districtNameValue = this.ElementData[index].district;
    const length = Object.keys(this.financialYearList).length;
    const length1 = Object.keys(this.districtNameList).length;
    let financialYear;
    let districtName;

    for (let i = 0; i < length1; i++) {
      if (districtNameValue === this.districtNameList[i].viewValue) {
        districtName = this.districtNameList[i].value;
      }
    }
    for (let i = 0; i < length; i++) {
      if (financialYearValue === this.financialYearList[i].viewValue) {
        financialYear = this.financialYearList[i].value;
      }

      this.searchForm.patchValue({
        financialYear: financialYear,
        districtName: districtName
      });
    }
  }

}
