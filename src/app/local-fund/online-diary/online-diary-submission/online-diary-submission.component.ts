import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatDialog } from '@angular/material';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-online-diary-submission',
  templateUrl: './online-diary-submission.component.html',
  styleUrls: ['./online-diary-submission.component.css']
})
export class OnlineDiarySubmissionComponent implements OnInit {

  // variables
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  onlineDairySubmissionList: any[] = [];
  totalMandaysValue = 0;
  errorMessages = lfMessage;
  isSubmitted = false;
  // directive object for workflow dialogF
  directiveObject = new LocalFundDirective(this.dialog);
  // date
  todayDate = Date.now();
  // form group
  onlineDairySubmission: FormGroup;
  dairyCalculation: FormGroup;
  // form control
  auditorNameCtrl: FormControl = new FormControl();
  activityCtrl: FormControl = new FormControl();
  otherCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  auditYearCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  auditorProgressCtrl: FormControl = new FormControl();
  // lists start
  activityList: ListValue[] = [
    { value: '0', viewValue: 'Audit Activity' },
    { value: '1', viewValue: 'Public Holiday' },
    { value: '2', viewValue: 'Other than Audit Work' },
  ];
  otherList: ListValue[] = [
    { value: '0', viewValue: 'On leave' },
    { value: '1', viewValue: 'Due to Transit' },
    { value: '2', viewValue: 'Due to Treasury Work' },
    { value: '3', viewValue: 'Due to strike' },
    { value: '4', viewValue: 'Due to joining time' },
    { value: '5', viewValue: 'Due to office work' },
    { value: '6', viewValue: 'Due to performance grant certificate' },
    { value: '7', viewValue: 'Due to pre. Audit Work' },
    { value: '8', viewValue: 'Due to disposal Para camp' },
    { value: '9', viewValue: 'Due to Training/Exam' },
    { value: '10', viewValue: 'Due to accounts of organisation are not ready' },
    { value: '11', viewValue: 'Due to other reason' },
  ];
  auditorNameList: ListValue[] = [{ value: '0', viewValue: 'Shri Pratik K Shah' }];
  instituteTypeList: ListValue[] = [
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
  auditorProgressList: ListValue[] = [];

  districtList: ListValue[] = [
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
  // lists end

  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.onlineDairySubmission = this.fb.group({
      auditorName: [''],
      date: [''],
      activity: [''],
      other: [''],
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      detailOfWork: [''],
      district: [''],
      dairySubmissionDate: new Date(),
    });

    this.dairyCalculation = this.fb.group({
      auditorProgress: [''],
      instituteType: [''],
      instituteName: [''],
      auditYear: [''],
      auditStartDate: [''],
      auditEndDate: [''],
      sanctionedMandays: [''],
      additionalMandays: [''],
      totalMandays: [''],
      usedMandays: [''],
      remarks: [''],
      halfMarginIssued: [''],
      answersReceived: [''],
      receivedAmount: [''],
      workingAuditorNumber: [''],
      weeklyWorkingDaysNumber: [''],
      actualWorkingDays: [''],
      lostDaysWithReason: [''],
    });
  }

  // add new table entry
  submitForm() {
    const auditorNameValue = this.onlineDairySubmission.value.auditorName;
    const instituteTypeValue = this.onlineDairySubmission.value.instituteType;
    const instituteNameValue = this.onlineDairySubmission.value.instituteName;
    const auditYearValue = this.onlineDairySubmission.value.auditYear;
    const districtValue = this.onlineDairySubmission.value.district;

    this.onlineDairySubmissionList.push({
      auditorName: this.auditorNameList[auditorNameValue].viewValue,
      date: this.onlineDairySubmission.value.date,
      instituteType: this.instituteTypeList[instituteTypeValue].viewValue,
      instituteName: this.instituteNameList[instituteNameValue].viewValue,
      auditYear: this.auditYearList[auditYearValue].viewValue,
      detailOfWork: this.onlineDairySubmission.value.detailOfWork,
      district: this.districtList[districtValue].viewValue,
      dairySubmissionDate: this.onlineDairySubmission.value.dairySubmissionDate,

    });

  }

  // reset form
  reset() {
    this.onlineDairySubmission.reset();
    this.dairyCalculation.reset();
  }

  // rset form common button function
  resetForm(){}

  // calculate total mandays
  calculateTotalMandays($event?: any) {
    this.totalMandaysValue = (Number(this.dairyCalculation.value.sanctionedMandays)
      + Number(this.dairyCalculation.value.additionalMandays));

    return this.totalMandaysValue;
  }

  // add method for diary calculation
  addCalculation() {
    if (this.dairyCalculation.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

  // reset form
  resetCalculationForm() { }

  // add method for diary submission
  add() {
    if (this.onlineDairySubmission.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }
}
