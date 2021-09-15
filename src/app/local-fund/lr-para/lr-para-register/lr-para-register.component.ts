import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { LrParaRegister } from 'src/app/model/local-fund';



@Component({
  selector: 'app-lr-para-register',
  templateUrl: './lr-para-register.component.html',
  styleUrls: ['./lr-para-register.component.css']
})
export class LrParaRegisterComponent implements OnInit {

  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  filterElementData: LrParaRegister[];
  // date
  todayDate = Date.now();
  // form group
  searchForm: FormGroup;
  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  submittedByCtrl: FormControl = new FormControl();
  proposedByCtrl: FormControl = new FormControl();
  // list value start
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
    { value: '2', viewValue: 'District Panchayat - Gandhinagar' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Village Panchayat' },
    { value: '6', viewValue: 'District Panchayat - Ahmedabad' },
  ];
  submittedByList: ListValue[] = [
    { value: '0', viewValue: '1' },
    { value: '1', viewValue: '2' },
    { value: '2', viewValue: '3' },
    { value: '3', viewValue: '4' },
    { value: '4', viewValue: '5' },
    { value: '5', viewValue: '6' },
    { value: '6', viewValue: '7' },
    { value: '7', viewValue: '8' },
    { value: '8', viewValue: '9' },
    { value: '9', viewValue: '10' },
    { value: '10', viewValue: '11' },
  ];
  proposedByList: ListValue[] = [
    { value: '0', viewValue: '1' },
    { value: '1', viewValue: '2' },
    { value: '2', viewValue: '3' },
    { value: '3', viewValue: '4' },
  ];
  // list value end

  // table data start
  elementData: LrParaRegister[] = [
    {
      district: 'Ahmedabad',
      id: 1,
      instituteName: 'Village Panchayat -Daskoi',
      instituteType: 'District Panchayat',
      auditYear: '2019',
      paraNo: '4',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'R&B',
      majorHead: '4675',
      lrParaByDistrictCreator: 1,
      lrParaByHQCreator: 0,
      lrParaByHQVerifier: 1,
      lrParaByHQApprover: 1,
      finalPara: 1,
      remarks: 'NA',

    },
    {

      district: 'Ahmedabad',
      id: 2,
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2019',
      paraNo: '9',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'Health Department',
      majorHead: '6688',
      lrParaByDistrictCreator: 0,
      lrParaByHQCreator: 1,
      lrParaByHQVerifier: 0,
      lrParaByHQApprover: 1,
      finalPara: 0,
      remarks: 'NA',


    },
    {

      district: 'Ahmedabad',
      id: 3,
      instituteName: 'Nagar Palika -Bopal',
      instituteType: 'Taluka Panchayat',
      auditYear: '2019',
      paraNo: '11',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'Agriculture',
      majorHead: '7846',
      lrParaByDistrictCreator: 1,
      lrParaByHQCreator: 0,
      lrParaByHQVerifier: 0,
      lrParaByHQApprover: 0,
      finalPara: 1,
      remarks: 'NA',

    },
    {

      district: 'Ahmedabad',
      id: 4,
      instituteName: 'Nagar Palika -Guma',
      instituteType: 'Taluka Panchayat',
      auditYear: '2019',
      paraNo: '9',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'R & B',
      majorHead: '4569',
      lrParaByDistrictCreator: 0,
      lrParaByHQCreator: 0,
      lrParaByHQVerifier: 0,
      lrParaByHQApprover: 1,
      finalPara: 0,
      remarks: 'NA',

    },
    {

      district: 'Gandhinagar',
      id: 5,
      instituteName: 'Village Panchayat -Kolavada',
      instituteType: 'District Panchayat',
      auditYear: '2019',
      paraNo: '4',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'R & B',
      majorHead: '4675',
      lrParaByDistrictCreator: 1,
      lrParaByHQCreator: 0,
      lrParaByHQVerifier: 1,
      lrParaByHQApprover: 0,
      finalPara: 1,
      remarks: 'NA',


    },
    {

      district: 'Gandhinagar',
      id: 6,
      instituteName: 'Village Panchayat - Dahegam',
      instituteType: 'District Panchayat',
      auditYear: '2019',
      paraNo: '9',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'Health Department',
      majorHead: '6688',
      lrParaByDistrictCreator: 1,
      lrParaByHQCreator: 1,
      lrParaByHQVerifier: 0,
      lrParaByHQApprover: 1,
      finalPara: 1,
      remarks: 'NA',


    },
    {

      district: 'Gandhinagar',
      id: 7,
      instituteName: 'Nagar Palika -Kudasan',
      instituteType: 'Taluka Panchayat',
      auditYear: '2019',
      paraNo: '11',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'Agriculture',
      majorHead: '7846',
      lrParaByDistrictCreator: 1,
      lrParaByHQCreator: 0,
      lrParaByHQVerifier: 1,
      lrParaByHQApprover: 0,
      finalPara: 0,
      remarks: 'NA',



    },
    {

      district: 'Gandhinagar',
      id: 8,
      instituteName: 'Nagar Palika -Randesan',
      instituteType: 'Taluka Panchayat',
      auditYear: '2019',
      paraNo: '9',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'R&B',
      majorHead: '4569',
      lrParaByDistrictCreator: 0,
      lrParaByHQCreator: 1,
      lrParaByHQVerifier: 1,
      lrParaByHQApprover: 1,
      finalPara: 1,
      remarks: 'NA',



    },
    {

      district: 'Rajkot',
      id: 9,
      instituteName: 'Village Panchayat -Metoda',
      instituteType: 'District Panchayat',
      auditYear: '2019',
      paraNo: '4',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'R&B',
      majorHead: '4675',
      lrParaByDistrictCreator: 0,
      lrParaByHQCreator: 0,
      lrParaByHQVerifier: 1,
      lrParaByHQApprover: 0,
      finalPara: 0,
      remarks: 'NA',



    },
    {

      district: 'Rajkot',
      id: 10,
      instituteName: 'Village Panchayat - Vajdi',
      instituteType: 'District Panchayat',
      auditYear: '2019',
      paraNo: '9',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'Health Department',
      majorHead: '6688',
      lrParaByDistrictCreator: 1,
      lrParaByHQCreator: 1,
      lrParaByHQVerifier: 1,
      lrParaByHQApprover: 1,
      finalPara: 1,
      remarks: 'NA',



    },
    {

      district: 'Rajkot',
      id: 11,
      instituteName: 'Nagar Palika -Shapar',
      instituteType: 'Taluka Panchayat',
      auditYear: '2019',
      paraNo: '11',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'Agriculture',
      majorHead: '7846',
      lrParaByDistrictCreator: 1,
      lrParaByHQCreator: 0,
      lrParaByHQVerifier: 0,
      lrParaByHQApprover: 0,
      finalPara: 0,
      remarks: 'NA',



    },
    {

      district: 'Rajkot',
      id: 12,
      instituteName: 'Nagar Palika - kalavad',
      instituteType: 'Taluka Panchayat',
      auditYear: '2019',
      paraNo: '9',
      auditParaSubject: 'Subject of Para',
      administrativeDepartment: 'R&B',
      majorHead: '4569',
      lrParaByDistrictCreator: 1,
      lrParaByHQCreator: 1,
      lrParaByHQVerifier: 1,
      lrParaByHQApprover: 1,
      finalPara: 1,
      remarks: 'NA',



    },

  ];
  dataSource = new MatTableDataSource<LrParaRegister>(this.elementData);
  displayedColumns: string[] = [
    'serialNo',
    'district',
    'id',
    'instituteType',
    'instituteName',
    'auditYear',
    'paraNo',
    'auditParaSubject',
    'administrativeDepartment',
    'majorHead',
    'lrParaByDistrictCreator',
    'lrParaByHQCreator',
    'lrParaByHQVerifier',
    'lrParaByHQApprover',
    'finalPara',
    'remarks',
    'action'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchFormData();
  }

  // form data
  searchFormData() {
    this.searchForm = this.fb.group({
      auditYear: [''],
      districtName: [''],
      instituteType: [''],
      instituteName: [''],
      submittedBy: [''],
      proposedBy: ['']

    });
  }

  // search data on basis of search fields
  onSearch() {
    const formVal = this.searchForm.value;
    const instituteTypeValue = formVal.instituteType;
    const instituteNameValue = formVal.instituteName;
    const auditYearValue = formVal.auditYear;
    const districtNameValue = formVal.districtName;

    if (formVal.instituteType !== '' && formVal.instituteType != null) {
      const instituteType = this.instituteTypeList[instituteTypeValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.instituteType.toLowerCase() === instituteType.toLowerCase());
      this.dataSource = new MatTableDataSource<LrParaRegister>(this.filterElementData);
    }

    if (formVal.instituteName !== '' && formVal.instituteName != null) {
      const instituteName = this.instituteNameList[instituteNameValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.instituteName.toLowerCase() === instituteName.toLowerCase());
      this.dataSource = new MatTableDataSource<LrParaRegister>(this.filterElementData);
    }

    if (formVal.auditYear !== '' && formVal.auditYear != null) {
      const auditYear = this.auditYearList[auditYearValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.auditYear.toLowerCase() === auditYear.toLowerCase());
      this.dataSource = new MatTableDataSource<LrParaRegister>(this.filterElementData);
    }

    if (formVal.districtName !== '' && formVal.districtName != null) {
      const districtName = this.districtNameList[districtNameValue].viewValue;
      this.filterElementData = this.elementData.filter(
        searchBy => searchBy.district.toLowerCase() === districtName.toLowerCase());
      this.dataSource = new MatTableDataSource<LrParaRegister>(this.filterElementData);
    }
    if (
      (formVal.instituteName === '' || formVal.instituteName == null) &&
      (formVal.instituteType === '' || formVal.instituteType == null) &&
      (formVal.auditYear === '' || formVal.auditYear == null) &&
      (formVal.districtName === '' || formVal.districtName == null)


    ) {
      this.dataSource = new MatTableDataSource<LrParaRegister>(this.elementData);
    }

  }

  // reset form
  clearForm() {
    this.searchForm.reset();
  }

}
