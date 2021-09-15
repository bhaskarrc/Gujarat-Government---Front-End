import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DistrictMahekamRegister } from 'src/app/model/local-fund';

@Component({
  selector: 'app-district-mahekam-register-view',
  templateUrl: './district-mahekam-register-view.component.html',
  styleUrls: ['./district-mahekam-register-view.component.css']
})
export class DistrictMahekamRegisterViewComponent implements OnInit {
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  distMahekam: FormGroup;
  perPosVal = 2;
  contraPosVal = 3;


  instituteTypeCtrl: FormControl = new FormControl();

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
    // 'action',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.distMahekam = this.fb.group({
      id: ['21'],
      district: ['Ahmedabad'],
      instituteType: ['1'],
      instituteName: ['Dahegam Nagarpalika'],
      posName: ['Class 1'],
      perPos: [''],
      contrPos: [''],
      totPos: [''],
      filledPos: ['4'],
      vacantPos: ['2'],
      vacantDate: ['13-Apr-2020'],
      vacPosReason: ['NA'],
      vacEmpName: ['NA'],
      retEmpName: ['Mr P D Patel'],
      appointDate: ['20-Apr-2020'],
      retDate: ['31-Apr-2020'],
      pensionDet: ['Auditor'],
      remarks: ['NA'],
    });
  }

  // on click on edit icon
  updateValue() {
    this.distMahekam.patchValue({
      instituteType: '1',
      perPos: '2',
      contrPos: '2',
      filledPos: '3',
      vacantPos: '2',
      vacantDate: '01/05/2020',
      vacPosReason: 'Vacant',
      vacEmpName: '',
      retEmpName: 'Mr A C Patel	',
      appointDate: '31/05/2020',
      retDate: '02/06/2020',
      pensionDet: 'Auditor',
      remarks: 'Remarks',
    });

  }
}
