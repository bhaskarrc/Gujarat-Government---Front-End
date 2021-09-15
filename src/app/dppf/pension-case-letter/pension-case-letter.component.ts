import { Component, OnInit } from '@angular/core';
import { FamilyMember } from 'src/app/model/dppf';

@Component({
  selector: 'app-pension-case-letter',
  templateUrl: './pension-case-letter.component.html',
  styleUrls: ['./pension-case-letter.component.css']
})
export class PensionCaseLetterComponent implements OnInit {

  constructor() { }
  // Variables
  resolutionNo = 'DPP/2006/d0201/P';
  letterNo = 1000;
  resolutionDate = new Date(2007, 3, 3);
  transformPercentage = 35;
  masterCodeNumber = 45455;
  addressOfSentOffice = 'District Office, Gandhinagar';

  pinCode = '382010';
  todayDate = new Date();
  dateOfBirth = this.todayDate;
  dateOfJoining = this.todayDate;
  dateOfRetirement = this.todayDate;
  districtHelperAddressLine1 = 'પેન્શન અને પ્રોવિડન્ટ ફંડ નિયામકશ્રીની કચેરી, ';
  districtHelperAddressLine2 = '‘વીમા અને લેખા ભવન’';
  districtHelperAddressLine3 = 'બ્લોક નં.૧૮, ડૉ. જીવરાજ મહેતા ભવન, ';
  designationOfPensioner = 'Junior Clerk';
  employeeType = 'સરકારી બીન રાજ્યપત્રિત';
  districtName = 'ગાંધીનગર';
  designationOfApprover = 'સરકારી રાજ્યપત્રિત';
  // PEnsionCase 1
  employeeName = 'કખગ ધનપફભાઈ ચછજ';

  employeeSurname = 'ચછજ';

  employeeMiddleName = 'કખગ';

  employeeLastName = 'ધનપફભાઈ';

  officeAddress1 = 'District Officer';
  officeAddress2 = 'District Office, Gandhinagar';
  salaryBand = 25000;
  payInPayMatrix = 25000;
  officePhone = '1234567890';
  pensionerAddress = '10/22, Sector 16-B, Sector 16, Gandhinagar';
  homePinCode = 382016;
  designationInEnglish = 'Govt. Non Gazzetted';
  aadhaarCardNo = 111122223333;

  officerName = 'MAINOF';
  addressOfGurdian = 'Sector 16-B, Sector 16, Gandhinagar';
  relationWithGuardian = 'Brother';
  memberNameWithDisability = 'ABCDEF';
  talukaName = 'Gandhinagar';
  guardianName = 'ASDFGH';
  employeeSurnameEnglish = 'ChaChhaja';
  nomineeSurnameEnglish = 'ChaChhaja';
  employeeNameEnglish = 'KaKhaGa';
  nomineeNameEnglish = 'KaKhaGa';
  typeOfPension = 'સ્વૈચ્છિક નિવૃત્તિ પેન્શન ';
  place = 'Gandhinagar';
  termEndDate = new Date();
  employeeMiddleNameEnglish = 'dhanapafbhai';
  nomineeMiddleNameEnglish = 'dhanapafbhai';
  isVoluntaryRetirement = true;
  employeeEmailID = 'abc@mail.cpm';
  employeeGPFNo = 'GPF10001';
  officeEmail = 'office@mail.com';
  officeFaxNo = 12345678;
  headOfDepartment = 'Head Of Department';
  hodCodeNo = 11111;
  departmentName = 'Sub Treasury Office, Gandhinagar';
  departmentCodeNo = 11122;
  approvedDate = new Date(); // provisional
  provisionalPension = 10000;
  provisionalGratuity = 10000;
  provisionalFamilyPension = 10000;
  nomineeSurname = 'ચછજ';
  nomineeMiddleName = 'કખગ';
  nomineeLastName = 'ધનપફભાઈ';
  nomineeName = 'કખગ ધનપફભાઈ ચછજ';
  applicationDateForTransf = this.todayDate;
  percentageForTansformation = '40';
  // Date
  extraOrdinaryLeaveFromDate = this.todayDate;
  extraOrdinaryLeaveToDate = this.todayDate;
  suspensionToDate = this.todayDate;
  suspensionFromDate = this.todayDate;

  // List
  familyMemberList: FamilyMember[] = [
    { memberName: 'ABCDEF', dateOfBirth: new Date(), relation: 'Son', remarks: 'Note' },
    { memberName: 'QWERTY', dateOfBirth: new Date(), relation: 'Daughter', remarks: 'Note' },
    { memberName: 'ZXCVBB', dateOfBirth: new Date(), relation: 'Son', remarks: 'Note' },
  ];
  nomineeNameList: any[] = [
    {
      nomineeSurname: 'ચછજ',
      nomineeMiddleName: 'કખગ',
      nomineeLastName: 'ધનપફભાઈ'
    },
    {
      nomineeSurname: 'ખછફ',
      nomineeMiddleName: 'ચકગ',
      nomineeLastName: 'જનધભાઈ'
    },
  ];


  extraOrdinaryLeaveList: PensionToFromDate[] = [
    { fromDate: this.todayDate, toDate: this.todayDate, period: '03-08-15' },
    { fromDate: this.todayDate, toDate: this.todayDate, period: '04-02-15' },
  ];
  pensionBreakList: PensionToFromDate[] = [
    { fromDate: this.todayDate, toDate: this.todayDate, period: '00-08-15' },
    { fromDate: this.todayDate, toDate: this.todayDate, period: '01-02-15' },
  ];
  suspensionLeaveList: PensionToFromDate[] = [
    { fromDate: this.todayDate, toDate: this.todayDate, period: '00-03-15' },
    { fromDate: this.todayDate, toDate: this.todayDate, period: '01-00-15' },
  ];
  othersLeaveList: PensionToFromDate[] = [
    { fromDate: this.todayDate, toDate: this.todayDate, period: '00-03-15' },
    { fromDate: this.todayDate, toDate: this.todayDate, period: '01-00-15' },
  ];
  totalService = '30-02-10';
  totalLeaveCount = '12-06-00';
  netServiceCount = '17-06-10';
  notionalServiceForJustice = '20-02-10';
  totalEmploymentPeriod = '18-00-00';
  lastSalary = '25500';
  fromDateOfRealPension = this.todayDate;
  toDateOfRealPension = this.todayDate;
  payBandAtRetirement = 122;
  payBandlist: any[] = [
    { month: '18', payInPayMatrix: '10000', gradePay: '10000', nonPracticingAllowance: '5000', totalRupees: '25000' },
    { month: '38', payInPayMatrix: '10000', gradePay: '10000', nonPracticingAllowance: '5000', totalRupees: '25000' },
    { month: '48', payInPayMatrix: '10000', gradePay: '10000', nonPracticingAllowance: '5000', totalRupees: '25000' },
    { month: '18', payInPayMatrix: '10000', gradePay: '10000', nonPracticingAllowance: '5000', totalRupees: '25000' },
    { month: '38', payInPayMatrix: '10000', gradePay: '10000', nonPracticingAllowance: '5000', totalRupees: '25000' },
    { month: '48', payInPayMatrix: '10000', gradePay: '10000', nonPracticingAllowance: '5000', totalRupees: '25000' },
    { month: '18', payInPayMatrix: '10000', gradePay: '10000', nonPracticingAllowance: '5000', totalRupees: '25000' },
    { month: '38', payInPayMatrix: '10000', gradePay: '10000', nonPracticingAllowance: '5000', totalRupees: '25000' },
    { month: '48', payInPayMatrix: '10000', gradePay: '10000', nonPracticingAllowance: '5000', totalRupees: '25000' },
    { month: '38', payInPayMatrix: '10000', gradePay: '10000', nonPracticingAllowance: '5000', totalRupees: '25000' },
  ];
  totalMonth = 100;
  totalPayInPayMatrix = 100000;
  totalGradePay = 100000;
  totlNonPracticingAllowance = 100000;
  totalTotalRupees = 100000;
  salaryForPension = 25000;
  lastPay = 35000;
  pensionAmount = this.lastPay / 2;
  payInPayMatrixSurPlus = this.payInPayMatrix * 0.3;
  lastPayPlus = this.lastPay * 0.3;
  lastPayPlusGradePay = 50000;
  DA = 12;
  gradePay = '10000'; // this
  yearOfEmployment = 30;
  pensionAtRetirementforSixth = 21000;
  pensionAtRetirementforSeven = 21000;
  temp = '___________________';
  transforPensionListFrom20To40: any[] = [
    { ageFromDate: '૨૦', rate: '૯.૧૮૮' },
    { ageFromDate: '૨૧', rate: '૯.૧૮૭' },
    { ageFromDate: '૨૨', rate: '૯.૧૮૬' },
    { ageFromDate: '૨૩', rate: '૯.૧૮૫' }, // ૨૩	૯.૧૮૫
    { ageFromDate: '૨૪', rate: '૯.૧૮૪' },
    { ageFromDate: '૨૫', rate: '૯.૧૮૩' },
    { ageFromDate: '૨૬', rate: '૯.૧૮૨' },
    { ageFromDate: '૨૭', rate: '૯.૧૮૦' },
    { ageFromDate: '૨૮', rate: '૯.૧૭૮' },
    { ageFromDate: '૨૯', rate: '૯.૧૭૬' },
    { ageFromDate: '૩૦', rate: '૯.૧૭૩' },
    { ageFromDate: '૩૧', rate: '૯.૧૬૯' },
    { ageFromDate: '૩૨', rate: '૯.૧૬૪' },
    { ageFromDate: '૩૩', rate: '૯.૧૫૯' },
    { ageFromDate: '૩૪', rate: '૯.૧૫૨' },
    { ageFromDate: '૩૫', rate: '૯.૧૪૫' },
    { ageFromDate: '૩૬', rate: '૯.૧૩૬' },
    { ageFromDate: '૩૭', rate: '૯.૧૨૬' },
    { ageFromDate: '૩૮', rate: '૯.૧૧૬' },
    { ageFromDate: '૩૯', rate: '૯.૧૦૩' },
    { ageFromDate: '૪૦', rate: '૯.૦૯૦' },


  ];
  transforPensionListFrom41To61: any[] = [
    { ageFromDate: '૪૧', rate: '૯.૦૭૫' },
    { ageFromDate: '૪૨', rate: '૯.૦૫૯' },
    { ageFromDate: '૪૩', rate: '૯.૦૪૦' },
    { ageFromDate: '૪૪', rate: '૯.૦૧૯' },
    { ageFromDate: '૪૫', rate: '૮.૯૯૬' },
    { ageFromDate: '૪૬', rate: '૮.૯૭૧' },
    { ageFromDate: '૪૭', rate: '૮.૯૪૩' },
    { ageFromDate: '૪૮', rate: '૮.૯૧૩' },
    { ageFromDate: '૪૯', rate: '૮.૮૮૧' },
    { ageFromDate: '૫૦', rate: '૮.૮૪૬' },
    { ageFromDate: '૫૧', rate: '૮.૮૦૮' },
    { ageFromDate: '૫૨', rate: '૮.૯૯૬' },
    { ageFromDate: '૫૩', rate: '૮.૭૨૪' },
    { ageFromDate: '૫૪', rate: '૮.૬૭૮' },
    { ageFromDate: '૫૫', rate: '૮.૬૨૭' },
    { ageFromDate: '૫૬', rate: '૮.૫૭૨' },
    { ageFromDate: '૫૭', rate: '૮.૫૧૨' },
    { ageFromDate: '૫૮', rate: '૮.૪૪૬' },
    { ageFromDate: '૫૯', rate: '૮.૩૭૧' },
    { ageFromDate: '૬૦', rate: '૮.૨૮૭' },
    { ageFromDate: '૬૧', rate: '૮.૧૯૪' },

  ];
  transforPensionListFrom62To81: any[] = [
    { ageFromDate: '૬૨', rate: '૮.૦૯૩' },
    { ageFromDate: '૬૩', rate: '૭.૯૮૨' },
    { ageFromDate: '૬૪', rate: '૭.૮૬૨' },
    { ageFromDate: '૬૫', rate: '૭.૭૩૧' },
    { ageFromDate: '૬૬', rate: '૭.૫૯૧' },
    { ageFromDate: '૬૭', rate: '૭.૪૩૧' },
    { ageFromDate: '૬૮', rate: '૭.૨૬૨' },
    { ageFromDate: '૬૯', rate: '૭.૦૮૩' },
    { ageFromDate: '૭૦', rate: '૬.૮૯૭' },
    { ageFromDate: '૭૧', rate: '૬.૭૦૩' },
    { ageFromDate: '૭૨', rate: '૬.૫૦૨' },
    { ageFromDate: '૭૩', rate: '૬.૨૯૬' },
    { ageFromDate: '૭૪', rate: '૬.૦૮૫' },
    { ageFromDate: '૭૫', rate: '૫.૮૭૨' },
    { ageFromDate: '૭૬', rate: '૫.૬૫૭' },
    { ageFromDate: '૭૭', rate: '૫.૪૪૩' },
    { ageFromDate: '૭૮', rate: '૫.૨૨૯' },
    { ageFromDate: '૭૯', rate: '૫.૦૧૮' },
    { ageFromDate: '૮૦', rate: '૪.૮૧૨' },
    { ageFromDate: '૮૧', rate: '૪.૬૧૧' },
  ];
  transformPensionPart = 100001;
  rate = 8.371;

  deductionFromPension = '32000';
  deductionFromDate = this.todayDate;
  deductionToDate = this.todayDate;
  deductionPermanentDate = this.todayDate;
  deductionPermanent = 15000;
  educationOrderNo = '1234';
  educationOrderDate = this.todayDate;
  recoveryFromEmployeeList: any[] = [
    { serialNo: '૧.', details: 'વાહન પેશગી', accountNo: '', p: '', interest: '', total: '', estimateLetter: '' },
    { serialNo: '૨.', details: 'મકાન પેશગી', accountNo: '', p: '', interest: '', total: '', estimateLetter: '' },
    { serialNo: '૩.', details: 'પગારભથ્થાંની વસૂલાત', accountNo: '', p: '', interest: '', total: '', estimateLetter: '' },
    { serialNo: '૪.', details: 'અન્ય વસૂલાત', accountNo: '', p: '', interest: '', total: '', estimateLetter: '' },
  ];
  serialNo = '1'; // this
  pensionApproverName = 'કાનવ વલાશ પેશવા';
  designationOfOfficer = this.designationOfApprover;
  nameOfOfficer = this.pensionApproverName;
  nameOfPensionApprover = this.pensionApproverName;
  applicaantRelationWithEmployee = 'Wife';
  officeName = 'Treasury Office,Gandhinagar';
  familyDetailList: FamilyDetail[] = [
    { memberName: 'DFGHJK', isMarried: 'પરણિત', dateOfBirth: new Date(), relation: 'Wife', remarks: 'Note' },
    { memberName: 'ABCDEF', isMarried: 'અપરણિત', dateOfBirth: new Date(), relation: 'Son', remarks: 'Note' },
    { memberName: 'QWERTY', isMarried: 'પરણિત', dateOfBirth: new Date(), relation: 'Daughter', remarks: 'Note' },
    { memberName: 'ZXCVBB', isMarried: 'અપરણિત', dateOfBirth: new Date(), relation: 'Son', remarks: 'Note' },
  ];
  serialNoOfdisabled = 3;
  toPPO = 'Treasury Office';
  subTO = 'sub treasury Office';
  nomineeAddress = '12, This and that Society, Near Those Cross Road, These Area, That City ';
  guardianAddress = '12, This and that Society, Near Those Cross Road, These Area, That City ';
  nomineDateOfBirth = this.todayDate;
  secondNomineeName = 'ABCDEF';
  secondNomineeDOB = this.todayDate;
  relationOfNominee = 'Wife';
  secondNomineeAddress = '12, This and that Society, Near Those Cross Road, These Area, That City ';
  secondNomineeRelation = 'Son';
  fpName = 'POIJNM';
  motherOrFather = 'Mother Or Father Name';
  disabledName = 'DISABLED NAME';
  dateOfDeath = this.todayDate;
  schoolName = 'ZXC High School';
  schoolList: any[] = [
    { instituteName: 'ABC School', fromDate: new Date(), toDate: new Date(), totalJobDays: '11-02-12', jobForPension: '10-01-10' },
    { instituteName: 'XYZ School', fromDate: new Date(), toDate: new Date(), totalJobDays: '10-02-12', jobForPension: '10-01-10' },
    { instituteName: 'ZXC High School', fromDate: new Date(), toDate: new Date(), totalJobDays: '09-02-12', jobForPension: '09-01-10' },
  ];
  workedCollegeList: any[] = [
    { collegeName: 'MNB College', fromDate: new Date(), toDate: new Date(), cpffromDate: new Date(), cpftoDate: new Date() },
    { collegeName: 'PLN College', fromDate: new Date(), toDate: new Date(), cpffromDate: new Date(), cpftoDate: new Date() },
    { collegeName: 'MNP College', fromDate: new Date(), toDate: new Date(), cpffromDate: new Date(), cpftoDate: new Date() },
  ];
  cpfAccountNo = '123123';
  cpfJoiningDate = this.todayDate;
  employeeContribution = 100000;
  employerContribution = 100000;
  governmentContribution = 25000;
  passbookPrintDate = this.todayDate;
  rupeesPrintInPassbook = 250000;
  otherRupees = 50000;
  cpfPayGovernment = 12300;
  cpfAmount = 10000;
  challanNo = 1133;
  // cpfAmount =0;
  // Date
  cpfFromDate = this.todayDate;
  gratuityAmount = 12000;
  cpfNontoDate = this.todayDate;
  cpfNonfromDate = this.todayDate;
  cpfToDate = this.todayDate;
  cpfInterestTillDate = this.todayDate;
  headForCpf = this.headOfDepartment;
  cpfNotFromDate = this.todayDate;
  cpfNotToDate = this.todayDate;
  cpfCreditedDate = this.todayDate;
  oldSchoolNameNonGov = 'Old School Without Government Name';
  oldSchoolName = 'Ols School Name';
  cpfCutFromDate = this.todayDate; // this
  cpfCutToDate = this.todayDate; // this
  labourFromDate = this.todayDate; // this
  labourToDate = this.todayDate; // this
  applicantName = 'Applicant Name';
  applicantAddress = 'Address 12, Ch-road, Sector 10, Gandhinagar';

  ngOnInit() {
  }

}
export interface PensionToFromDate {
  fromDate: Date;
  toDate: Date;
  period: string;
}
export interface FamilyDetail {
  isMarried: string;
  memberName: string;
  dateOfBirth: Date;
  relation: string;
  remarks: string;
}
