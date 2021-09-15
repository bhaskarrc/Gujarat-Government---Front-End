import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { LrParaVerificationRegister } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-lr-para-verification-register',
  templateUrl: './lr-para-verification-register.component.html',
  styleUrls: ['./lr-para-verification-register.component.css']
})
export class LrParaVerificationRegisterComponent implements OnInit {

  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);
  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  filterElement_Data: LrParaVerificationRegister[];
  isSubmitted = false;
  errorMessages = lfMessage;
  // date
  todayDate = Date.now();
  maxDate = new Date();
  // form group
  laParaVariReg: FormGroup;
  // form control
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtNameCtrl: FormControl = new FormControl();
  isAllRecordProvidedCtrl: FormControl = new FormControl();
  isProvidedRecordCtrl: FormControl = new FormControl();
  isPendingMoreCtrl: FormControl = new FormControl();

  // lists start
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
    { value: '0', viewValue: '1990-1991' },
    { value: '1', viewValue: '1991-1992' },
    { value: '2', viewValue: '1992-1993' },
    { value: '3', viewValue: '1993-1994' },
    { value: '4', viewValue: '1994-1995' },
    { value: '5', viewValue: '1995-1996' },
    { value: '6', viewValue: '1996-1997' },
    { value: '7', viewValue: '1997-1998' },
    { value: '8', viewValue: '1998-1999' },
    { value: '9', viewValue: '1999-2000' },
    { value: '10', viewValue: '2000-2001' },
    { value: '11', viewValue: '2001-2002' },
    { value: '12', viewValue: '2002-2003' },
    { value: '13', viewValue: '2003-2004' },
    { value: '14', viewValue: '2004-2005' },
    { value: '15', viewValue: '2005-2006' },
    { value: '16', viewValue: '2006-2007' },
    { value: '17', viewValue: '2007-2008' },
    { value: '18', viewValue: '2008-2009' },
    { value: '19', viewValue: '2009-2010' },
    { value: '20', viewValue: '2010-2011' },
    { value: '21', viewValue: '2011-2012' },
    { value: '22', viewValue: '2012-2013' },
    { value: '23', viewValue: '2013-2014' },
    { value: '24', viewValue: '2014-2015' },
    { value: '25', viewValue: '2015-2016' },
    { value: '26', viewValue: '2016-2017' },
    { value: '27', viewValue: '2017-2018' },
    { value: '28', viewValue: '2018-2019' },
    { value: '29', viewValue: '2019-2020' },
    { value: '30', viewValue: '2020-2021' },
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
  isAllRecordProvidedList: ListValue[] = [
    { value: '0', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
  ];
  isPendingMoreList: ListValue[] = [
    { value: '0', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
  ];
  isProvidedRecordList: ListValue[] = [
    { value: '0', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
  ];
  proposedByList: ListValue[] = [
    { value: '0', viewValue: '1' },
    { value: '1', viewValue: '2' },
    { value: '2', viewValue: '3' },
    { value: '3', viewValue: '4' },
  ];
  // lists end

  // table data start
  elementData: LrParaVerificationRegister[] = [
    {
      id: '1202',
      district: 'Ahmedabad',
      instituteType: '2',
      instituteName: 'Ahmedabad District Panchayat',
      auditYear: '26',
      auditReportIssueDate: new Date('03/24/2017'),
      paraNo: '3',
      dateOfLetter: new Date('3/10/2017'),
      isAllRecordProvided: '1',
      dateOfInform: new Date('3/10/2017'),
      dateOfReportRec: new Date('3/10/2017'),
      dateOfReportSend: new Date('3/25/2017'),
      isPendingMore: '1',
      planingIfPending: 'Na',
      isProvidedRecord: '1',
      actionByAssistantExaminer: 'NA',
      remarks: 'NA',
      edit: true
    },
    {
      id: '1203',
      district: 'Ahmedabad',
      instituteType: '2',
      instituteName: 'Ahmedabad District Panchayat',
      auditYear: '27',
      auditReportIssueDate: new Date('5/10/2018'),
      paraNo: '12',
      dateOfLetter: new Date('05/31/2018'),
      isAllRecordProvided: '1',
      dateOfInform: new Date('05/31/2018'),
      dateOfReportRec: new Date('05/31/2018'),
      dateOfReportSend: new Date('5/12/2018'),
      isPendingMore: '1',
      planingIfPending: 'NA',
      isProvidedRecord: '1',
      actionByAssistantExaminer: 'NA',
      remarks: 'NA',
      edit: true
    },
    {
      id: '1204',
      district: 'Ahmedabad',
      instituteType: '2',
      instituteName: 'Ahmedabad District Panchayat',
      auditYear: '28',
      auditReportIssueDate: new Date('9/9/2019'),
      paraNo: '8',
      dateOfLetter: new Date('8/31/2017'),
      isAllRecordProvided: '1',
      dateOfInform: new Date('8/31/2017'),
      dateOfReportRec: new Date('8/31/2017'),
      dateOfReportSend: new Date('9/12/2017'),
      isPendingMore: '1',
      planingIfPending: 'NA',
      isProvidedRecord: '0',
      actionByAssistantExaminer: 'Provide necessary information ',
      remarks: 'NA',
      edit: true
    },
    {
      id: '1205',
      district: 'Ahmedabad',
      instituteType: '2',
      instituteName: 'Ahmedabad District Panchayat',
      auditYear: '26',
      auditReportIssueDate: new Date('3/1/2017'),
      paraNo: '7',
      dateOfLetter: new Date('2/15/2017'),
      isAllRecordProvided: '0',
      dateOfInform: new Date('2/15/2017'),
      dateOfReportRec: new Date('2/15/2017'),
      dateOfReportSend: new Date('3/3/2017'),
      isPendingMore: '1',
      planingIfPending: '1',
      isProvidedRecord: '1',
      actionByAssistantExaminer: 'NA',
      remarks: 'NA',
      edit: true
    },

  ];
  dataSource = new MatTableDataSource<LrParaVerificationRegister>(this.elementData);
  displayedColumns: string[] = [
    'serialNo',
    'id',
    'district',
    'instituteType',
    'instituteName',
    'auditYear',
    'auditReportIssueDate',
    'paraNo',
    'dateOfLetter',
    'isAllRecordProvided',
    'dateOfInform',
    'dateOfReportRec',
    'dateOfReportSend',
    'isPendingMore',
    'planingIfPending',
    'isProvidedRecord',
    'actionByAssistantExaminer',
    'remarks',
    'action'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.laParaVariReg = this.fb.group({
      id: ['1202'],
      districtName: ['Ahmedabad'],
      instituteType: [''],
      instituteName: ['Ahmedabad District Panchayat'],
      auditReportIssueDate: [''],
      auditYear: [''],
      lrParaNo: ['3'],
      dateOfLetter: [''],
      isAllRecordProvided: [''],
      dateOfInform: [''],
      dateOfReportRec: [''],
      dateOfReportSend: [''],
      isPendingMore: [''],
      actionByAssistantExaminer: [''],
      planingIfPending: [''],
      isProvidedRecord: [''],
      remarks: [''],
    });
  }


  // on click on add button
  onAdd() {
    if (this.laParaVariReg.valid) {
      this.isSubmitted = false;
      this.dataSource.data.push({
        id: this.laParaVariReg.get('id').value,
        district: this.laParaVariReg.get('districtName').value,
        instituteType: this.laParaVariReg.get('instituteType').value,
        instituteName: this.laParaVariReg.get('instituteName').value,
        auditReportIssueDate: this.laParaVariReg.get('auditReportIssueDate').value,
        auditYear: this.laParaVariReg.get('auditYear').value,
        paraNo: this.laParaVariReg.get('lrParaNo').value,
        dateOfLetter: this.laParaVariReg.get('dateOfLetter').value,
        isAllRecordProvided: this.laParaVariReg.get('isAllRecordProvided').value,
        dateOfInform: this.laParaVariReg.get('dateOfInform').value,
        dateOfReportRec: this.laParaVariReg.get('dateOfReportRec').value,
        dateOfReportSend: this.laParaVariReg.get('dateOfReportSend').value,
        isPendingMore: this.laParaVariReg.get('isPendingMore').value,
        actionByAssistantExaminer: this.laParaVariReg.get('actionByAssistantExaminer').value,
        planingIfPending: this.laParaVariReg.get('planingIfPending').value,
        isProvidedRecord: this.laParaVariReg.get('isProvidedRecord').value,
        remarks: this.laParaVariReg.get('remarks').value,
        edit: true
      });
      this.dataSource.data = this.dataSource.data;
      this.clearForm();
    } else {
      this.isSubmitted = true;
    }

  }

  // reset form
  clearForm() {
    this.laParaVariReg.reset();
  }

  // on click on edit icon in table
  onEdit(element) {
    element.edit = !element.edit;
  }

}
