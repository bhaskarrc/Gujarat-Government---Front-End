import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { ScheduleSix } from 'src/app/model/local-fund';



@Component({
  selector: 'app-schedule-six-listing',
  templateUrl: './schedule-six-listing.component.html',
  styleUrls: ['./schedule-six-listing.component.css']
})
export class ScheduleSixListingComponent implements OnInit {

  searchForm: FormGroup;
  filterElementData: any[];


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
    { value: '0', viewValue: '2017-18' },
    { value: '1', viewValue: '2018-19' },
    { value: '2', viewValue: '2019-20' },
    { value: '3', viewValue: '2020-21' },
  ];

  // listing data
  ElementData: ScheduleSix[] = [
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2202  Education',
      paraNo: '2',
      objectedAmount: '20000'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2210 Health',
      paraNo: '1',
      objectedAmount: '34000'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '2403 Animal Compliance',
      paraNo: '12',
      objectedAmount: '6000'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: '3054 Road and bridge',
      paraNo: '32',
      objectedAmount: '63366626'
    },
    {
      financialYear: '2013-14',
      district: 'Rajkot',
      majorHead: 'Small irrigation',
      paraNo: '33',
      objectedAmount: '156310'
    }
  ];

  // listing datasource
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

  // total column
  displayedColumnsTotal: any[] = [
    'footer1',
    'objectedAmount',
    'action'

  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
  }

  searchFormData() {
    this.searchForm = this.fb.group({
      financialYear: [''],
      districtName: [''],
    });
  }
  // search data on basis of saerch fields
  onSearch() {
    const formVal = this.searchForm.value;
    const financialYearValue = formVal.financialYear;
    const districtNameValue = formVal.districtName;

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

    if ((formVal.financialYear === '' || formVal.financialYear == null) &&
      (formVal.districtName === '' || formVal.districtName == null)
    ) {
      this.dataSource = new MatTableDataSource<any>(this.ElementData);
    }

  }

  // reset form data
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

}
