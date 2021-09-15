
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsLfComponent } from '../workflow-details-lf/workflow-details-lf.component';
import { DistrictOfficeImportantParaRegister } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';
@Component({
  selector: 'app-district-office-important-para-register',
  templateUrl: './district-office-important-para-register.component.html',
  styleUrls: ['./district-office-important-para-register.component.css']
})
export class DistrictOfficeImportantParaRegisterComponent implements OnInit {
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  districtOfficeParaRegister: FormGroup;
  errorMessages = lfMessage;
  isSubmitted = false;
  maxDate = new Date();
  directiveObject = new LocalFundDirective(this.dialog);

  districtNameCtrl: FormControl = new FormControl();

  districtNameList: any[] = [
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

  ElementData: DistrictOfficeImportantParaRegister[] = [
    {
      id: '1000001',
      distName: 'Gandhinagar',
      positivePara: 'ABC',
      negativePara: 'ABC',
      officeRelated: 'ABC',
    },
  ];

  dataSource = new MatTableDataSource<DistrictOfficeImportantParaRegister>(this.ElementData);
  displayedColumns: any[] = [
    'serialNo',
    'id',
    'distName',
    'positivePara',
    'negativePara',
    'officeRelated',
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
    this.districtOfficeParaRegister = this.fb.group({
      id: [''],
      districtName: [''],
      positiveParaDetails: [''],
      negativeParaDetails: [''],
      officeRelatedParaDetails: [''],
    });
  }

  // reset form
  resetForm() {
    this.districtOfficeParaRegister.reset();
  }

}

