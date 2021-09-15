import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsLfComponent } from '../workflow-details-lf/workflow-details-lf.component';
import { DistrictMahekamRegister } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-district-mahekam-register',
  templateUrl: './district-mahekam-register.component.html',
  styleUrls: ['./district-mahekam-register.component.css']
})
export class DistrictMahekamRegisterComponent implements OnInit {
  directiveObject = new LocalFundDirective(this.dialog);
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  distMahekam: FormGroup;
  errorMessages = lfMessage;
  isSubmitted = false;
  perPosVal = 0;
  contraPosVal = 0;


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
    'action',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.distMahekam = this.fb.group({
      id: ['21'],
      district: ['Ahmedabad'],
      instituteType: ['2'],
      instituteName: ['District Panchayat - Ahmedabad'],
      posName: ['Class 1', Validators.required],
      perPos: ['', Validators.required],
      contrPos: ['', Validators.required],
      totPos: ['', Validators.required],
      filledPos: ['', Validators.required],
      vacantPos: ['', Validators.required],
      vacantDate: ['', Validators.required],
      vacPosReason: ['', Validators.required],
      vacEmpName: ['', Validators.required],
      retEmpName: [''],
      appointDate: [''],
      retDate: [''],
      pensionDet: [''],
      remarks: [''],
    });
  }

  // reset form
  resetForm() {
    this.distMahekam.reset();
  }

  // on click on edit icon
  updateValue() {
    this.distMahekam.patchValue({
      instituteType: '1',
      perPos: '2',
      contrPos: '2',
      filledPos: '3',
      vacantPos: '2',
      vacantDate: new Date(2019, 4, 1),
      vacPosReason: 'Vacant',
      vacEmpName: 'NA',
      retEmpName: 'Mr A C Patel	',
      appointDate: new Date(2019, 4, 31),
      retDate: new Date(2019, 5, 31),
      pensionDet: 'Auditor',
      remarks: 'Remarks',
    });

  }

  // on clcik on add buton
  add() {

    if (this.distMahekam.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
    const id = this.distMahekam.value.id;
    const district = this.distMahekam.value.district;
    const posName = this.distMahekam.value.posName;
    const perPos = this.distMahekam.value.perPos;
    const contrPos = this.distMahekam.value.contrPos;
    const totPos = this.distMahekam.value.totPos;
    const filledPos = this.distMahekam.value.filledPos;
    const vacantPos = this.distMahekam.value.vacantPos;
    const vacPosReason = this.distMahekam.value.vacPosReason;
    const vacEmpName = this.distMahekam.value.vacEmpName;
    const retEmpName = this.distMahekam.value.retEmpName;
    const pensionDet = this.distMahekam.value.pensionDet;

    this.ElementData.push({
      id: id,
      district: district,
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      posName: posName,
      perPos: perPos,
      contrPos: contrPos,
      totPos: totPos,
      filledPos: filledPos,
      vacantPos: vacantPos,
      vacantDate: '31-Apr-2020',
      vacPosReason: vacPosReason,
      vacEmpName: vacEmpName,
      retEmpName: retEmpName,
      appointDate: '31-Apr-2020',
      retDate: '6-Jun-2020',
      pensionDet: pensionDet,
      remarks: this.distMahekam.value.remarks
    });

    this.dataSource.data = this.dataSource.data;
  }
}
