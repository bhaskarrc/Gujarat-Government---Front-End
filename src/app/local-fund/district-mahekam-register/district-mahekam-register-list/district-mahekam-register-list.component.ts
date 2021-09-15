import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DistrictMahekamRegister } from 'src/app/model/local-fund';

@Component({
  selector: 'app-district-mahekam-register-list',
  templateUrl: './district-mahekam-register-list.component.html',
  styleUrls: ['./district-mahekam-register-list.component.css']
})
export class DistrictMahekamRegisterListComponent implements OnInit {
  searchForm: FormGroup;
  districtNameCtrl: FormControl = new FormControl();
  posNameCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();

  districtNameList: CommonListing[] = [
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

  posNameList: CommonListing[] = [
    { value: '0', viewValue: 'Class 1' },
    { value: '1', viewValue: 'Class 2' },
    { value: '2', viewValue: 'Class 3' },

  ];

  instituteTypeList: CommonListing[] = [
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

  instituteNameList: CommonListing[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
  ];

  ElementData: DistrictMahekamRegister[] = [
    {
      id: '1',
      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Office',
      posName: 'Class 1',
      perPos: '5',
      contrPos: '0',
      totPos: '5',
      filledPos: '4',
      vacantPos: '0',
      vacantDate: 'NA',
      vacPosReason: 'NA',
      vacEmpName: 'NA',
      retEmpName: 'Mr P D Patel',
      appointDate: '1-Apr-2016',
      retDate: '31-Apr-2020',
      pensionDet: 'Auditor',
      remarks: 'NA'

    },
    {
      id: '2',
      district: 'Bhavanagar',
      instituteName: 'Bhavnagar District Office',
      instituteType: 'District Office',
      posName: 'Class 1',
      perPos: '4',
      contrPos: '0',
      totPos: '4',
      filledPos: '3',
      vacantPos: '0',
      vacantDate: 'NA',
      vacPosReason: 'NA',
      vacEmpName: 'NA',
      retEmpName: 'NA',
      appointDate: 'NA',
      retDate: 'NA',
      pensionDet: 'NA',
      remarks: 'NA'
    },
    {
      id: '3',
      district: 'Bhavanagar',
      instituteName: 'Bhavnagar District Office',
      instituteType: 'District Office',
      posName: 'Class 1',
      perPos: '2',
      contrPos: '0',
      totPos: '2',
      filledPos: '1',
      vacantPos: '0',
      vacantDate: 'NA',
      vacPosReason: 'NA',
      vacEmpName: 'NA',
      retEmpName: 'Mr A C Patel',
      appointDate: '1-Apr-2016',
      retDate: '31-Apr-2020',
      pensionDet: 'Auditor',
      remarks: 'NA'
    },
    {
      id: '4',
      district: 'Amreli',
      instituteName: 'District Panchayat - Amreli',
      instituteType: 'District Office',
      posName: 'Class 2',
      perPos: '2',
      contrPos: '1',
      totPos: '3',
      filledPos: '2',
      vacantPos: '0',
      vacantDate: 'NA',
      vacPosReason: 'NA',
      vacEmpName: 'NA',
      retEmpName: 'NA',
      appointDate: 'NA',
      retDate: 'NA',
      pensionDet: 'NA',
      remarks: 'NA'
    },
    {
      id: '5',
      district: 'Ahmedabad',
      instituteName: 'Ahmedabad District office',
      instituteType: 'District Office',
      posName: 'Class 2',
      perPos: '1',
      contrPos: '1',
      totPos: '2',
      filledPos: '1',
      vacantPos: '0',
      vacantDate: 'NA',
      vacPosReason: 'NA',
      vacEmpName: 'NA',
      retEmpName: 'NA',
      appointDate: 'NA',
      retDate: 'NA',
      pensionDet: 'NA',
      remarks: 'NA'
    },
    {
      id: '6',
      district: 'Bhavanagar',
      instituteName: 'Bhavnagar District Office',
      instituteType: 'District Office',
      posName: 'Class 1',
      perPos: '1',
      contrPos: '1',
      totPos: '2',
      filledPos: '1',
      vacantPos: '0',
      vacantDate: 'NA',
      vacPosReason: 'NA',
      vacEmpName: 'NA',
      retEmpName: 'NA',
      appointDate: 'NA',
      retDate: 'NA',
      pensionDet: 'NA',
      remarks: 'NA'
    },

  ];
  dataSource = new MatTableDataSource<DistrictMahekamRegister>(this.ElementData);
  displayedColumns: any[] = [
    'serialNo',
    'id',
    'district',
    'instituteName',
    'instituteType',
    'posName',
    'perPos',
    'contrPos',
    'totPos',
    'filledPos',
    'vacantPos',
    'vacantDate',
    'vacPosReason',
    'vacEmpName',
    'retEmpName',
    'appointDate',
    'retDate',
    'pensionDet',
    'remarks',
    'action',
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
      id: [''],
      districtName: [''],
      posName: [''],
      instituteType: [''],
      instituteName: [''],
    });
  }


  // reset form
  clearForm() {
    this.searchForm.reset();
  }

}
