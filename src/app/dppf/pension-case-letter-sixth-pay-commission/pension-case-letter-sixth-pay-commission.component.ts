import { Component, OnInit } from '@angular/core';
import { FamilyDetail, PensionToFromDate } from '../pension-case-letter/pension-case-letter.component';
import { FamilyMember } from 'src/app/model/dppf';

@Component({
  selector: 'app-pension-case-letter-sixth-pay-commission',
  templateUrl: './pension-case-letter-sixth-pay-commission.component.html',
  styleUrls: ['./pension-case-letter-sixth-pay-commission.component.css']
})
export class PensionCaseLetterSixthPayCommissionComponent implements OnInit {
  // List
  familyMemberList: FamilyMember[] = [
    { memberName: 'ABCDEF', dateOfBirth: new Date(), relation: 'Son', remarks: 'Note' },
    { memberName: 'QWERTY', dateOfBirth: new Date(), relation: 'Daughter', remarks: 'Note' },
    { memberName: 'ZXCVBB', dateOfBirth: new Date(), relation: 'Son', remarks: 'Note' },
  ];
  constructor() { }
  // variable
  jobForPension: any;
  gradePay: any;
  serialNo: any;

  resolutionNo = 'DPP/2006/d0201/P';
  letterNo = 1000;
  resolutionDate = new Date(2007, 3, 3);
  transformPercentage = 35;
  masterCodeNumber = 45455;
  addressOfSentOffice = 'District Office, Gandhinagar';

  pinCode = '382010';
  // Date
  todayDate = new Date();
  dateOfBirth = this.todayDate;
  dateOfJoining = this.todayDate;
  dateOfRetirement = this.todayDate;
  // Variable
  districtHelperAddressLine1 = 'પેન્શન અને પ્રોવિડન્ટ ફંડ નિયામકશ્રીની કચેરી, ';
  districtHelperAddressLine2 = '‘વીમા અને લેખા ભવન’';
  districtHelperAddressLine3 = 'બ્લોક નં.૧૮, ડૉ. જીવરાજ મહેતા ભવન, ';
  designationOfPensioner = 'Junior Clerk';
  employeeType = 'સરકારી બીન રાજ્યપત્રિત';
  districtName = 'ગાંધીનગર';
  designationOfApprover = 'સરકારી રાજ્યપત્રિત';
  // PensionCase 1
  employeeName = 'કખગ ધનપફભાઈ ચછજ';

  employeeSurname = 'ચછજ';

  employeeMiddleName = 'કખગ';

  employeeLastName = 'ધનપફભાઈ';
  gazzettOrNonGazzetted = 'બિન​રાજ્યાપત્રિત';
  officeAddress1 = 'District Officer';
  officeAddress2 = 'District Office, Gandhinagar';
  salaryBand = 25000;
  payInPayMatrix = 25000;
  officePhone = '1234567890';
  pensionerAddress = '10/22, Sector 16-B, Sector 16, Gandhinagar';
  homePinCode = 382016;
  designationInEnglish = 'Govt. Non Gazzetted';
  aadhaarCardNo = 111122223333;
  minSalary = 66000;

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
  // Date
  extraOrdinaryLeaveFromDate = this.todayDate;
  extraOrdinaryLeaveToDate = this.todayDate;
  suspensionToDate = this.todayDate;
  suspensionFromDate = this.todayDate;
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
  payBandAtRetirement = '122';
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
  yearOfEmployment = 30;
  pensionAtRetirementforSixth = 21000;
  pensionAtRetirementforSeven = 21000;
  temp = '___________________';
  // List
  transforPensionListFrom29To48: any[] = [
    { ageFromDate: '૨૯', rate: '૧૭.૯૩' },
    { ageFromDate: '૩૦', rate: '૧૭.૭૮' },
    { ageFromDate: '૩૧', rate: '૧૭.૬૨' },
    { ageFromDate: '૩૨', rate: '૧૭.૪૬' },
    { ageFromDate: '૩૩', rate: '૧૭.૨૯' },
    { ageFromDate: '૩૪', rate: '૧૭.૧૧' },
    { ageFromDate: '૩૫', rate: '૧૬.૯૨' },
    { ageFromDate: '૩૬', rate: '૧૬.૭૨' },
    { ageFromDate: '૩૭', rate: '૧૬.૫૨' },
    { ageFromDate: '૩૮', rate: '૧૬.૩૧' },
    { ageFromDate: '૩૯', rate: '૧૬.૦૯' },
    { ageFromDate: '૪૦', rate: '૧૫.૮૭' },
    { ageFromDate: '૪૧', rate: '૧૫.૬૪' },
    { ageFromDate: '૪૨', rate: '૧૫.૪૦' },
    { ageFromDate: '૪૩', rate: '૧૫.૧૫' },
    { ageFromDate: '૪૪', rate: '૧૪.૦૯' },
    { ageFromDate: '૪૫', rate: '૧૪.૬૧' },
    { ageFromDate: '૪૬', rate: '૧૪.૩૮' },
    { ageFromDate: '૪૭', rate: '૧૪.૦૧' },
    { ageFromDate: '૪૮', rate: '૧૪.૮૨' },

  ];
  transforPensionListFrom49To68: any[] = [
    { ageFromDate: '૪૯', rate: '૧૩.૫૪' },
    { ageFromDate: '૫૦', rate: '૧૩.૨૫ ' },
    { ageFromDate: '૫૧', rate: '૧૨.૯૫' },
    { ageFromDate: '૫૨', rate: '૧૨.૬૬' },
    { ageFromDate: '૫૩', rate: '૧૨.૩૫' },
    { ageFromDate: '૫૪', rate: '૧૨.૦૫' },
    { ageFromDate: '૫૫', rate: '૧૧.૭૩' },
    { ageFromDate: '૫૬', rate: '૧૧.૪૨' },
    { ageFromDate: '૫૭', rate: '૧૧.૦૧' },
    { ageFromDate: '૫૮', rate: '૧૦.૭૮' },
    { ageFromDate: '૫૯', rate: '૧૦.૪૬' },
    { ageFromDate: '૬૦', rate: '૧૦.૧૩' },
    { ageFromDate: '૬૧', rate: '૯.૮૧' },
    { ageFromDate: '૬૨', rate: '૯.૪૮' },
    { ageFromDate: '૬૩', rate: '૯.૧૫' },
    { ageFromDate: '૬૪', rate: '૮.૮૨' },
    { ageFromDate: '૬૫', rate: '૮.૫૦' },
    { ageFromDate: '૬૬', rate: '૮.૧૭' },
    { ageFromDate: '૬૭', rate: '૭.૮૫' },
    { ageFromDate: '૬૮', rate: '૭.૫૦' },

  ];
  transforPensionListFrom69To85: any[] = [

    { ageFromDate: '૬૯', rate: '૭.૨૨' },
    { ageFromDate: '૭૦', rate: '૬.૯૧' },
    { ageFromDate: '૭૧', rate: '૬.૬૦' },
    { ageFromDate: '૭૨', rate: '૬.૩૦' },
    { ageFromDate: '૭૩', rate: '૬.૦૧' },
    { ageFromDate: '૭૪', rate: '૫.૭૨' },
    { ageFromDate: '૭૫', rate: '૫.૪૪' },
    { ageFromDate: '૭૬', rate: '૫.૧૭' },
    { ageFromDate: '૭૭', rate: '૪.૯૦' },
    { ageFromDate: '૭૮', rate: '૪.૬૫' },
    { ageFromDate: '૭૯', rate: '૪.૪૦' },
    { ageFromDate: '૮૦', rate: '૪.૧૭' },
    { ageFromDate: '૮૧', rate: '૩.૯૪' },
    { ageFromDate: '૮૨', rate: '૩.૭૨' },
    { ageFromDate: '૮૩', rate: '૩.૫૨' },
    { ageFromDate: '૮૪', rate: '૩.૩૨' },
    { ageFromDate: '૮૫', rate: '૩.૧૩' },
  ];



  transformPensionPart = 100001;
  rate = 8.371;

  deductionFromPension = '32000';
  // DAte
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
  cpfFromDate = this.todayDate;
  gratuityAmount = 12000;
  cpfNontoDate = this.todayDate;
  cpfNonfromDate = this.todayDate;
  cpfToDate = this.todayDate;
  cpfInterestTillDate = this.todayDate;
  headForCpf = this.headOfDepartment;
  cpfNotFromDate = this.todayDate;
  cpfCutFromDate = this.todayDate;
  cpfCutToDate = this.todayDate;
  cpfNotToDate = this.todayDate;
  cpfCreditedDate = this.todayDate;
  labourFromDate = this.todayDate;
  labourToDate = this.todayDate;
  oldSchoolNameNonGov = 'Old School Without Government Name';
  oldSchoolName = 'Ols School Name';
  applicantName = 'Applicant Name';
  applicantAddress = 'Address 12, Ch-road, Sector 10, Gandhinagar';
  ngOnInit() {
  }

}
