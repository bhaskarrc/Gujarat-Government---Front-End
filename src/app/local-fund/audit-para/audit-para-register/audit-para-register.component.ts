import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { ActivatedRoute } from '@angular/router';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { AuditParaRegister } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';



@Component({
  selector: 'app-audit-para-register',
  templateUrl: './audit-para-register.component.html',
  styleUrls: ['./audit-para-register.component.css']
})
export class AuditParaRegisterComponent implements OnInit {
  directiveObject = new LocalFundDirective(this.dialog);
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  auditPara: FormGroup;
  errorMessages = lfMessage;
  isSubmitted = false;
  pendingAmount = null;

  // form controls
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  administrativeDepartmentCtrl: FormControl = new FormControl();


  administrativeDepartmentList: ListValue[] = [
    { value: '0', viewValue: 'Panchayat' },
    { value: '1', viewValue: 'Education	' },
    { value: '2', viewValue: 'Agriculture' },
    { value: '3', viewValue: 'Health	' },
    { value: '4', viewValue: 'Construction' },

  ];
  majorHeadList: ListValue[] = [
    { value: '0', viewValue: '4434' },
    { value: '1', viewValue: '7687	' },
    { value: '2', viewValue: '8694' },
    { value: '3', viewValue: '2637' },
    { value: '4', viewValue: '4758' },
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

  instituteTypeList: ListValue[] = [
    { value: '0', viewValue: 'MahaNagar Palika' },
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
  ];

  auditYearList: ListValue[] = [
    { value: '0', viewValue: '2017' },
    { value: '1', viewValue: '2018' },
    { value: '2', viewValue: '2019' },
    { value: '3', viewValue: '2020' },
    { value: '4', viewValue: '2021' },
    { value: '5', viewValue: '2022' },
  ];

  // table data
  ElementData: AuditParaRegister[] = [
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 1,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Panchayat',
      majorHead: '4434',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date(),
      clearanceDetails: '',
      clearedBy: '',
      remarks: ''
    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 2,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Education',
      majorHead: '7687',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date(),
      clearanceDetails: '',
      clearedBy: '',
      remarks: ''
    },
    {

      district: 'Ahmedabad',
      instituteName: 'District Panchayat - Ahmedabad',
      instituteType: 'District Panchayat',
      auditYear: '2018-19',
      auditReportIssueDate: new Date('04/18/2018'),
      paraNo: 3,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Agriculture',
      majorHead: '8694',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date(),
      clearanceDetails: '',
      clearedBy: '',
      remarks: ''

    },
    {
      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 1,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Agriculture',
      majorHead: '8767',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date(),
      clearanceDetails: '',
      clearedBy: '',
      remarks: ''
    },
    {
      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 2,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Education',
      majorHead: '9856',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date(),
      clearanceDetails: '',
      clearedBy: '',
      remarks: ''

    },
    {

      district: 'Gandhinagar',
      instituteName: 'District Panchayat - Gandhinagar',
      instituteType: 'District Panchayat',
      auditYear: '2019-20',
      auditReportIssueDate: new Date('08/26/2018'),
      paraNo: 3,
      auditParaSubject: 'Subject of Para',
      paraDescription: 'Details of the Para',
      administrativeDepartment: 'Health',
      majorHead: '1986',
      objectAmount: 0,
      recoverableAmount: 0,
      receivedAmount: 0,
      pendingAmount: 0,
      clearanceDate: new Date(),
      clearanceDetails: '',
      clearedBy: '',
      remarks: ''

    },


  ];

  // table datasource
  dataSource = new MatTableDataSource<AuditParaRegister>(this.ElementData);

  // table columns
  displayedColumns: any[] = [
    'serialNo',
    'district',
    'instituteType',
    'instituteName',
    'auditYear',
    'auditReportIssueDate',
    'paraNo',
    'auditParaSubject',
    'paraDescription',
    'administrativeDepartment',
    'majorHead',
    'objectAmount',
    'recoverableAmount',
    'receivedAmount',
    'pendingAmount',
    'clearanceDate',
    'clearanceDetails',
    'clearedBy',
    'remarks',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.submitFormData();
  }

  // form data
  submitFormData() {
    this.auditPara = this.fb.group({
      districtName: [''],
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      auditReportIssueDate: [''],
      paraNo: [''],
      paraDescription: [''],
      administrativeDepartment: [''],
      majorHead: [''],
      objectAmount: [''],
      recoverableAmount: [''],
      receivedAmount: [''],
      pendingAmount: [''],
      clearanceDate: [''],
      clearanceDetails: [''],
      clearedBy: [''],
      remarks: [''],
      paraSubject: [''],
      others: ['']
    });
  }

  // calculate pending amount
  calculatePendingAmount($event?: any): number {
    if (this.auditPara.value.recoverableAmount !== null && this.auditPara.value.receivedAmount !== null) {
      this.pendingAmount = (Number(this.auditPara.value.recoverableAmount) - Number(this.auditPara.value.receivedAmount));
    }
    return this.pendingAmount;
  }

  // reset form data
  resetForm() {
    this.auditPara.reset();
  }

  // add form data into table
  add() {

    if (this.auditPara.valid) {
      this.isSubmitted = false;

      const districtValue = this.auditPara.value.districtName;
      const instituteNameValue = this.auditPara.value.districtName;
      const instituteTypeValue = this.auditPara.value.districtName;
      const auditYearValue = this.auditPara.value.districtName;
      const administrativeDepartmentValue = this.auditPara.value.districtName;
      const majorHeadValue = this.auditPara.value.districtName;
      const date = this.auditPara.value.auditReportIssueDate;
      const clearanceDate = this.auditPara.value.clearanceDate;

      this.ElementData.push({
        district: this.districtNameList[districtValue].viewValue,
        instituteName: this.instituteNameList[instituteNameValue].viewValue,
        instituteType: this.instituteTypeList[instituteTypeValue].viewValue,
        auditYear: this.auditYearList[auditYearValue].viewValue,
        auditReportIssueDate: new Date(date),
        paraNo: this.auditPara.value.paraNo,
        auditParaSubject: this.auditPara.value.paraSubject,
        paraDescription: this.auditPara.value.paraDescription,
        administrativeDepartment: this.administrativeDepartmentList[administrativeDepartmentValue].viewValue,
        majorHead: this.majorHeadList[majorHeadValue].viewValue,
        objectAmount: this.auditPara.value.objectAmount,
        recoverableAmount: this.auditPara.value.recoverableAmount,
        receivedAmount: this.auditPara.value.receivedAmount,
        pendingAmount: this.auditPara.value.pendingAmount,
        clearanceDate: new Date(clearanceDate),
        clearanceDetails: this.auditPara.value.clearanceDetails,
        clearedBy: this.auditPara.value.clearedBy,
        remarks: this.auditPara.value.remarks
      });

      this.dataSource = new MatTableDataSource<AuditParaRegister>(this.ElementData);
    } else {
      this.isSubmitted = true;
    }

  }

  // reset form
  reset() { }
}

