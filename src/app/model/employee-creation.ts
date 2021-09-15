export class EmployeeCreationForm {
    officeName: string;
    caseNo: string;
    employeeCode: string;
    salutation: string;
    employeeName: string;
    employeeMiddleName: string;
    employeeSurname: string;
    gender: string;
    nationality: string;
    emailID: string;
    dateOfBirth: string;
    mobileNo: number;
    fathername: string;
    mothername: string;
    maritalStatus: string;
    category: string;
    religion: string;
    caste: string;
    bloodGroup: string;
    phStatus: string;
    phType: string;
    dateOfMedFitnessCert: string;
    height: string;
    identificationMark: string;
    electionCardNo: string;
    aadhaarNo: string;
    panNo: string;
    passportNo: string;
    passportExpiryDate: string;
    buckleNo: string;
    nAddress1: string;
    nAddress2: string;
    nState: string;
    nDistrict: string;
    nTaluka: string;
    nCity: string;
    nPincode: number;
    pAddress1: string;
    pAddress2: string;
    pState: string;
    pDistrict: string;
    pTaluka: string;
    pCity: string;
    pPincode: number;
    cAddress1: string;
    cAddress2: string;
    cState: string;
    cDistrict: string;
    cTaluka: string;
    cCity: string;
    cPincode: number;
    cOfficeDist: string;
    nomineeName: string;
    degree: string;
    passingYear: string;
    schoolCollege: string;
    universityBorad: string;
    marksObtained: string;
    remarks: string;
    empDesignationAsOn: string;
    empOtherDesignation: string;
    preRevisedPayScale: string;
    preRevisedBasicPay: string;
    revisedPayBand: string;
    gradePay: string;
    dateOfPreRevisedNextIncrement: string;
    npaAmount: string;
    dateOfOption: string;
    dateOfStagnational: string;
    incrementAmount: string;
    payLevel: string;
    cellId: string;
    basicPay: string;
    dateOfBenefitEffective: string;
    dateOfNextIncrement: string;
    dateOfJoiningGovt: string;
    dateOfRetirement: string;
    empCategory: string;
    empStatus: string;
    empType: string;
    empDesignation: string;
    parentAdminDept: string;
    parentHeadDept: string;
    deptDistrict: string;
    presentOffice: string;
    subOffice: string;
    empClass: string;
    departmentalCategory: string;
    station: string;
    deptTaluka: string;
    officeAddress: string;
    gpfNo: string;
    pranAccNo: string;
    ppoNo: string;
    deathTerminationDate: string;
    ppnNo: string;
    employementType: string;
    deptName: string;
    previousOfficeName: string;
    officeAdd: string;
    empDesignationHist: string;
    fromDate: string;
    toDate: string;
    lastPayDrawn: string;
    empServiceContinuation: string;
    orderNoDate: string;
}


export class EmployeeEventsList {
    empNumber: number | '';
    empName: string | '';
    caseNo: string | '';
    empPayBand: string | '';
    empPayBandValue?: number;
    empPayLevel: string | '';
    empBasicPay: number;
    dateOfNextIncrement: string | '';
    empDesignation: string | '';
    optionOpted: string | '';
    dateOfAudit: string;
}

export class EmployeementHistory {
    employeeStatus: string | '';
    deptName: string | '';
    officeName: string | '';
    officeAddress: string | '';
    empDesignation: string | '';
    fromDate: string | '';
    toDate: string | '';
    lastPayDrawn: number | '';
}

export class QualificationData {
    degree: string | '';
    courseName: string | '';
    passingYear: string | '';
    schoolCollege: string | '';
    universityBorad: string | '';
    marksObtained: number | '';
    remarks: string | '';
}
export class NomineeData {
    relationship: string | '';
    nomineeName: string | '';
    nomineeAddress: string | '';
    nomineeDOB: string | '';
    nomineeShare: number | '';
    photoOfNominee: string | '';
    genNomiForm: string | '';
    npsNomiForm: string | '';
    fileBrowseNpsForm: Boolean;
    fileBrowseGenForm: Boolean;
    fileBrowseNomi: Boolean;
}
export class DeptExamData {
    deptExamName: string | '';
    examBody: string | '';
    dateOfPassing: string | '';
    examStatus: string;
    examAttempts: number | '';
    remarks: string | '';
}
export class SpclExamData {
    deptExamName: string | '';
    examBody: string | '';
    dateOfExam: string | '';
    dateOfPassing: string | '';
    examStatus: string | '';
    examAttempts: number | '';
    remarks: string | '';
}
export class LanguageExamData {
    langName: string | '';
    examBody: string | '';
    examType: string | '';
    dateOfPassing: string | '';
    seatNo: number | '';
    examStatus: string | '';
    remarks: string | '';
}
export class LanguageExamDataPao {
    langName: string | '';
    examBody: string | '';
    examType: string | '';
    dateOfPassing: string | '';
    seatNo: number | '';
    examStatus: string | '';
    remarks: string | '';
    notificationNo: string | '';
}

export class DialogData {
}
