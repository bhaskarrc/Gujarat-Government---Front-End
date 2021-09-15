import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import {
    EmployeeEventsList, EmployeementHistory, QualificationData,
    NomineeData, DeptExamData, SpclExamData, LanguageExamData, DialogData
} from '../../model/employee-creation';
import { CommonListing, HeaderElement } from 'src/app/model/common-listing';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { Observable, Subject, ReplaySubject } from 'rxjs';

@Component({
    selector: 'app-employee-creation',
    templateUrl: './employee-creation.component.html',
    styleUrls: ['./employee-creation.component.css']
})
export class EmployeeCreationComponent implements OnInit {
    data: any;

    ELEMENT_DATA: EmployeeEventsList[] = [
        {
            empNumber: 1100100012, empName: 'Event 1', caseNo: '19-05-2019',
            empPayBand: 'PB1 (5200-20200)', empPayLevel: 'Level 1', empBasicPay: 10000,
            dateOfNextIncrement: '19-05-2001', empDesignation: 'Dy. Manager', optionOpted: 'Yes', dateOfAudit: '19-11-2019'
        },
    ];

    displayedEventsColumns: string[] = ['srNo', 'transacNumber', 'eventName', 'eventEffectiveDate', 'employeeName',
    'payScale', 'gradePay', 'payBandValue', 'empBasicPay', 'designation', 'dateOfAudit', 'status'];


    EMP_HISTORY: EmployeementHistory[] = [
        {
            employeeStatus: 'Center', deptName: 'Department 1',
            officeName: 'Office 1', officeAddress: 'Gandhi Nagar', empDesignation: 'Full Time',
            fromDate: '12-11-2019', toDate: '12-11-2019', lastPayDrawn: 2000.00,
        },
    ];

    displayedColumns = ['employeeStatus', 'deptName', 'officeName', 'officeAddress', 'empDesignation',
        'fromDate', 'toDate', 'lastPayDrawn'];

    selectedIndex: number;
    showActionBtn: Boolean = true;
    showMenuTab: Boolean = true;
    tabDisable: Boolean = true;
    doneHeader: Boolean = false;

    phCategory: Boolean = false;
    serviceOrderNo: Boolean = false;

    isDeptExamApplicable: Boolean = false;
    isCCCExamApplicable: Boolean = false;
    isEmployeementApplicable: Boolean = false;

    sameAsNativeAddr: Boolean = false;
    sameAsPermanentAddr: Boolean = false;

    fileDetailsNomi: Boolean = false;

    fileDetailsGenForm: Boolean = false;

    fileDetailsNpsForm: Boolean = false;

    fileDetailsEmp: Boolean = false;
    fileBrowseEmp: Boolean = true;
    listshow: Boolean = false;

    createEmployeeForm: FormGroup;
    createPayDetails: FormGroup;
    departmentalDetails: FormGroup;
    examDetails: FormGroup;

    salutation_list: CommonListing[] = [
        { value: '1', viewValue: 'Mr.' },
        { value: '2', viewValue: 'Miss' },
        { value: '3', viewValue: 'Mrs.' },
        { value: '4', viewValue: 'Mx' },
        { value: '5', viewValue: 'Dr.' },
        { value: '6', viewValue: 'Honorable' },
        { value: '7', viewValue: 'Late' },
        { value: '8', viewValue: 'Ms.' },
    ];

    gender_list: CommonListing[] = [
        { value: '1', viewValue: 'Male' },
        { value: '2', viewValue: 'Female' },
        { value: '3', viewValue: 'Transgender' },
    ];

    nationality_list: CommonListing[] = [
        { value: '1', viewValue: 'Indian' },
        { value: '2', viewValue: 'Nepal' },
        { value: '3', viewValue: 'Bhutan' },
    ];

    maritalStatus_list: CommonListing[] = [
        { value: '1', viewValue: 'Unmarried' },
        { value: '2', viewValue: 'Married' },
        { value: '3', viewValue: 'Divorce' },
        { value: '4', viewValue: 'Separated' },
        { value: '5', viewValue: 'Widow' },
        { value: '6', viewValue: 'Widower' },
    ];

    category_list: CommonListing[] = [
        { value: '1', viewValue: 'General' },
        { value: '2', viewValue: 'OBC/ SEBC' },
        { value: '3', viewValue: 'SC' },
        { value: '4', viewValue: 'ST' },
    ];

    bloodGroup_list: CommonListing[] = [
        { value: '1', viewValue: 'A+' },
        { value: '2', viewValue: 'A-' },
        { value: '3', viewValue: 'B+' },
        { value: '4', viewValue: 'B-' },
        { value: '5', viewValue: 'AB+' },
        { value: '6', viewValue: 'AB-' },
        { value: '7', viewValue: 'O+' },
        { value: '8', viewValue: 'O-' },
        { value: '9', viewValue: 'Hh' },
    ];

    phStatus_list: CommonListing[] = [
        { value: 1, viewValue: 'Yes' },
        { value: 2, viewValue: 'No' },
    ];

    phType_list: CommonListing[] = [
        { value: '1', viewValue: 'PH-1' },
        { value: '2', viewValue: 'PH-2' },
        { value: '3', viewValue: 'PH-3' },
        { value: '4', viewValue: 'PH-4' },
    ];

    height_list: CommonListing[] = [
        { value: '4', viewValue: '4 Feet - 1 Inch' },
        { value: '5', viewValue: '5 Feet - 0 Inch' },
        { value: '5', viewValue: '5 Feet - 1 Inch' },
        { value: '5', viewValue: '5 Feet - 2 Inch' },
        { value: '5', viewValue: '5 Feet - 3 Inch' },
        { value: '5', viewValue: '5 Feet - 4 Inch' },
        { value: '5', viewValue: '5 Feet - 5 Inch' },
        { value: '5', viewValue: '5 Feet - 6 Inch' },
        { value: '5', viewValue: '5 Feet - 7 Inch' },
        { value: '6', viewValue: '6 Feet - 1 Inch' },
        { value: '7', viewValue: '7 Feet - 0 Inch' },
        { value: '8', viewValue: '8 Feet - 1 Inch' },
        { value: '9', viewValue: '9 Feet - 1 Inch' },
    ];

    nState_list: CommonListing[] = [
        { value: '1', viewValue: 'Andhra Pradesh' },
        { value: '2', viewValue: 'Arunachal Pradesh' },
        { value: '3', viewValue: 'Assam' },
        { value: '4', viewValue: 'Bihar' },
        { value: '5', viewValue: 'Chhattisgarh' },
        { value: '6', viewValue: 'Goa' },
        { value: '7', viewValue: 'Gujarat' },
        { value: '8', viewValue: 'Haryana' },
        { value: '9', viewValue: 'Himachal Pradesh' },
    ];

    nDistrict_list: CommonListing[] = [
        { value: '1', viewValue: 'Ahmedabad' },
        { value: '2', viewValue: 'Amreli' },
        { value: '3', viewValue: 'Anand' },
        { value: '4', viewValue: 'Banaskantha' },
        { value: '5', viewValue: 'Bharuch' },
        { value: '6', viewValue: 'Bhavnagar' },
        { value: '7', viewValue: 'Dahod' },
        { value: '8', viewValue: 'Dang' },
        { value: '9', viewValue: 'Gandhinagar' },
    ];

    nTaluka_list: CommonListing[] = [
        { value: '1', viewValue: 'Gandhinagar' },
        { value: '2', viewValue: 'Kalol' },
        { value: '3', viewValue: 'Dehgam' },
        { value: '4', viewValue: 'Mansa' },
    ];

    nCity_list: CommonListing[] = [
        { value: '1', viewValue: 'Gandhinagar' },
        { value: '2', viewValue: 'Kalol' },
        { value: '3', viewValue: 'Dehgam' },
        { value: '4', viewValue: 'Mansa' },
    ];

    pState_list: CommonListing[] = [
        { value: '1', viewValue: 'Andhra Pradesh' },
        { value: '2', viewValue: 'Arunachal Pradesh' },
        { value: '3', viewValue: 'Assam' },
        { value: '4', viewValue: 'Bihar' },
        { value: '5', viewValue: 'Chhattisgarh' },
        { value: '6', viewValue: 'Goa' },
        { value: '7', viewValue: 'Gujarat' },
        { value: '8', viewValue: 'Haryana' },
        { value: '9', viewValue: 'Himachal Pradesh' },
    ];

    pDistrict_list: CommonListing[] = [
        { value: '1', viewValue: 'Ahmedabad' },
        { value: '2', viewValue: 'Amreli' },
        { value: '3', viewValue: 'Anand' },
        { value: '4', viewValue: 'Banaskantha' },
        { value: '5', viewValue: 'Bharuch' },
        { value: '6', viewValue: 'Bhavnagar' },
        { value: '7', viewValue: 'Dahod' },
        { value: '8', viewValue: 'Dang' },
        { value: '9', viewValue: 'Gandhinagar' },
    ];

    pTaluka_list: CommonListing[] = [
        { value: '1', viewValue: 'Gandhinagar' },
        { value: '2', viewValue: 'Kalol' },
        { value: '3', viewValue: 'Dehgam' },
        { value: '4', viewValue: 'Mansa' },
    ];
    pCity_list: CommonListing[] = [
        { value: '1', viewValue: 'Gandhinagar' },
        { value: '2', viewValue: 'Kalol' },
        { value: '3', viewValue: 'Dehgam' },
        { value: '4', viewValue: 'Mansa' },
    ];

    cState_list: CommonListing[] = [
        { value: '1', viewValue: 'Andhra Pradesh' },
        { value: '2', viewValue: 'Arunachal Pradesh' },
        { value: '3', viewValue: 'Assam' },
        { value: '4', viewValue: 'Bihar' },
        { value: '5', viewValue: 'Chhattisgarh' },
        { value: '6', viewValue: 'Goa' },
        { value: '7', viewValue: 'Gujarat' },
        { value: '8', viewValue: 'Haryana' },
        { value: '9', viewValue: 'Himachal Pradesh' },
    ];

    cDistrict_list: CommonListing[] = [
        { value: '1', viewValue: 'Ahmedabad' },
        { value: '2', viewValue: 'Amreli' },
        { value: '3', viewValue: 'Anand' },
        { value: '4', viewValue: 'Banaskantha' },
        { value: '5', viewValue: 'Bharuch' },
        { value: '6', viewValue: 'Bhavnagar' },
        { value: '7', viewValue: 'Dahod' },
        { value: '8', viewValue: 'Dang' },
        { value: '9', viewValue: 'Gandhinagar' },
    ];

    deptDistrict_list: CommonListing[] = [
        { value: '1', viewValue: 'Ahmedabad' },
        { value: '2', viewValue: 'Amreli' },
        { value: '3', viewValue: 'Anand' },
        { value: '4', viewValue: 'Banaskantha' },
        { value: '5', viewValue: 'Bharuch' },
        { value: '6', viewValue: 'Bhavnagar' },
        { value: '7', viewValue: 'Dahod' },
        { value: '8', viewValue: 'Dang' },
        { value: '9', viewValue: 'Gandhinagar' },
    ];

    cTaluka_list: CommonListing[] = [
        { value: '1', viewValue: 'Gandhinagar' },
        { value: '2', viewValue: 'Kalol' },
        { value: '3', viewValue: 'Dehgam' },
        { value: '4', viewValue: 'Mansa' },
    ];

    deptTaluka_list: CommonListing[] = [
        { value: '1', viewValue: 'Gandhinagar' },
        { value: '2', viewValue: 'Kalol' },
        { value: '3', viewValue: 'Dehgam' },
        { value: '4', viewValue: 'Mansa' },
    ];
    cCity_list: CommonListing[] = [
        { value: '1', viewValue: 'Gandhinagar' },
        { value: '2', viewValue: 'Kalol' },
        { value: '3', viewValue: 'Dehgam' },
        { value: '4', viewValue: 'Mansa' },
    ];

    cOfficeDist_list: CommonListing[] = [
        { value: '1', viewValue: 'less than 1' },
        { value: '2', viewValue: 'greater than & Equal to 1' },
    ];

    empCategory_list: CommonListing[] = [
        { value: '1', viewValue: 'GO' },
        { value: '2', viewValue: 'NGO' },
        { value: '3', viewValue: 'AIS' },
    ];

    empStatus_list: CommonListing[] = [
        { value: '1', viewValue: 'Substantive' },
        { value: '2', viewValue: 'Officiating' },
    ];

    empType_list: CommonListing[] = [
        { value: '1', viewValue: 'Regular' },
        { value: '2', viewValue: 'Fix Pay' },
        { value: '3', viewValue: 'Contractual' },
        { value: '4', viewValue: 'Re-Appointed' },
        { value: '4', viewValue: 'Adhoc/ Bonded' },
    ];

    empDesignation_list: CommonListing[] = [
        { value: '1', viewValue: 'Assistant Manager' },
        { value: '2', viewValue: 'Director' },
        { value: '3', viewValue: 'Dy.Manager ' },
        { value: '4', viewValue: 'Senior Assistant' },
    ];

    parentAdminDept_list: CommonListing[] = [
        { value: '1', viewValue: 'Climate Change Department' },
        { value: '2', viewValue: 'Finance Department' },
    ];

    parentHeadDept_list: CommonListing[] = [
        { value: '1', viewValue: 'Gujrat Sales tax, Commission Ahmedabad' },
        { value: '2', viewValue: 'Commissioner of Sales Tax' },
        { value: '3', viewValue: 'Examiner, Local Fund Account' },
    ];

    presentOffice_list: CommonListing[] = [
        { value: '1', viewValue: 'Gujrat Sales tax, Commission Ahmedabad' },
        { value: '2', viewValue: 'Commissioner of Sales Tax' },
        { value: '3', viewValue: 'Examiner, Local Fund Account' },
    ];

    subOffice_list: CommonListing[] = [
        { value: '1', viewValue: 'NA' },
    ];

    empClass_list: CommonListing[] = [
        { value: '1', viewValue: 'Class I' },
        { value: '2', viewValue: 'Class II' },
        { value: '3', viewValue: 'Class III' },
        { value: '4', viewValue: 'Class IV' },
        { value: '5', viewValue: 'No Grade' },
    ];

    departmentalCategory_list: CommonListing[] = [
        { value: '1', viewValue: 'Government Employee' },
        { value: '2', viewValue: 'Panchayat' },
        { value: '3', viewValue: 'GSRTC' },
        { value: '4', viewValue: 'IPS' },
    ];

    degree_list: CommonListing[] = [
        { value: '1', viewValue: 'Primary' },
        { value: '2', viewValue: 'Junior Secondary' },
        { value: '3', viewValue: 'Secondary' },
        { value: '4', viewValue: 'Higher Secondary' },
        { value: '5', viewValue: 'Diploma' },
        { value: '6', viewValue: 'Bachelor' },
        { value: '7', viewValue: 'Master' },
        { value: '8', viewValue: 'PhD' },
        { value: '9', viewValue: 'Illiterate' },
    ];

    passingYear_list: CommonListing[] = [
    ];

    empDesignationAsOn_list: CommonListing[] = [
        { value: '1', viewValue: 'Assistant Manager' },
        { value: '2', viewValue: 'Director' },
        { value: '3', viewValue: 'Dy.Manager ' },
        { value: '4', viewValue: 'Senior Assistant' },
    ];
    empDesignationHist_list: CommonListing[] = [
        { value: '1', viewValue: 'Assistant Manager' },
        { value: '2', viewValue: 'Director' },
        { value: '3', viewValue: 'Dy.Manager ' },
        { value: '4', viewValue: 'Senior Assistant' },
    ];

    preRevisedPayScale_list: CommonListing[] = [
        { value: '1', viewValue: '2550-25-2660-60-3200 (S1-1S)' },
        { value: '2', viewValue: '2550-25-2660-60-3200 (S1-PB1)' },
        { value: '3', viewValue: '2610-60-3150-65-3540 (S1-1S)' },
        { value: '4', viewValue: '2550-25-2660-60-3200 (S1-1S)' },
    ];

    payLevel_list: CommonListing[] = [
        { value: '1', viewValue: 'Level - 1' },
        { value: '2', viewValue: 'Level - 2' },
        { value: '3', viewValue: 'Level - 3' },
        { value: '4', viewValue: 'Level - 4' },
        { value: '5', viewValue: 'Level - 5' },
        { value: '6', viewValue: 'Level - 6' },
        { value: '7', viewValue: 'Level - 7' },
        { value: '8', viewValue: 'Level - 8' },
        { value: '9', viewValue: 'Level - 9' },
        { value: '10', viewValue: 'Level - 10' },
        { value: '11', viewValue: 'Level - 11' },
        { value: '12', viewValue: 'Level - 12' },
        { value: '13', viewValue: 'Level - 13' },
        { value: '14', viewValue: 'Level - 14' },
        { value: '15', viewValue: 'Level - 15' },
        { value: '16', viewValue: 'Level - 16' },
        { value: '17', viewValue: 'Level - 17' },
        { value: '18', viewValue: 'Level - 18' },
    ];

    revisedPayBand_list: CommonListing[] = [
        { value: '1', viewValue: 'PB-1 (5200-20200)' },
        { value: '2', viewValue: 'PB-2 (9300-34800)' },
        { value: '3', viewValue: 'PB-3 (15600-39100)' },
        { value: '4', viewValue: 'PB-4 (37400-67000)' },
        { value: '5', viewValue: '(67000-79000)' },
        { value: '6', viewValue: '(75500-80000)' },
        { value: '7', viewValue: '(80000)' },
        { value: '8', viewValue: '(90000)' },
    ];

    gradePay_list: CommonListing[] = [
        { value: '1', viewValue: '1600' },
        { value: '2', viewValue: '1800' },
        { value: '3', viewValue: '2000' },
        { value: '4', viewValue: '2400' },
        { value: '5', viewValue: '2800' },
    ];

    npaAmount_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];

    cellId_list: CommonListing[] = [
    ];

    examBody_list: CommonListing[] = [
        { value: '1', viewValue: 'ExamBody-1' },
        { value: '2', viewValue: 'ExamBody-2' },
    ];

    examStatus_list: CommonListing[] = [
        { value: '1', viewValue: 'Pass' },
    ];

    langName_list: CommonListing[] = [
        { value: '1', viewValue: 'Hindi' },
        { value: '2', viewValue: 'Gujarati' },
    ];

    examType_list: CommonListing[] = [
        { value: '1', viewValue: 'Lower Level' },
        { value: '2', viewValue: 'Higher Level' },
    ];

    deptExamName_list: CommonListing[] = [
        { value: '1', viewValue: 'CCC Theory' },
        { value: '2', viewValue: 'CCC Practical' },
        { value: '3', viewValue: 'CCC+ Theory' },
        { value: '4', viewValue: 'CCC+ Practical' },
    ];

    relationship_list: CommonListing[] = [
        { value: '1', viewValue: 'Father' },
        { value: '2', viewValue: 'Mother' },
        { value: '3', viewValue: 'Widow Sister' },
        { value: '4', viewValue: 'Unmarried Sister' },
        { value: '5', viewValue: 'Brother (age < 18 years)' },
        { value: '6', viewValue: 'Spouse' },
        { value: '7', viewValue: 'Son' },
        { value: '8', viewValue: 'Daughter' },
        { value: '9', viewValue: 'Childeren of Dead Son' },
        { value: '10', viewValue: 'Widow Daughter' },
        { value: '11', viewValue: 'Widow of Dead Son' },
        { value: '12', viewValue: 'Adopted child' },
        { value: '13', viewValue: 'Other' },
    ];

    employementType_list: CommonListing[] = [
        { value: '1', viewValue: 'Government of Gujarat' },
        { value: '2', viewValue: 'Centeral' },
        { value: '3', viewValue: 'State' },
        { value: '4', viewValue: 'UT' },
    ];

    empServiceContinuation_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];

    deptTalukaCtrl: FormControl = new FormControl();
    salutationCtrl: FormControl = new FormControl();
    genderCtrl: FormControl = new FormControl();
    nationalityCtrl: FormControl = new FormControl();
    maritalStatusCtrl: FormControl = new FormControl();
    categoryCtrl: FormControl = new FormControl();
    bloodGroupCtrl: FormControl = new FormControl();
    phStatusCtrl: FormControl = new FormControl();
    phTypeCtrl: FormControl = new FormControl();
    nStateCtrl: FormControl = new FormControl();
    nDistrictCtrl: FormControl = new FormControl();
    nTalukaCtrl: FormControl = new FormControl();
    nCityCtrl: FormControl = new FormControl();
    pStateCtrl: FormControl = new FormControl();
    pDistrictCtrl: FormControl = new FormControl();
    pTalukaCtrl: FormControl = new FormControl();
    pCityCtrl: FormControl = new FormControl();
    cStateCtrl: FormControl = new FormControl();
    cDistrictCtrl: FormControl = new FormControl();
    cTalukaCtrl: FormControl = new FormControl();
    cCityCtrl: FormControl = new FormControl();
    cOfficeDistCtrl: FormControl = new FormControl();
    empCategoryCtrl: FormControl = new FormControl();
    empStatusCtrl: FormControl = new FormControl();
    empTypeCtrl: FormControl = new FormControl();
    empDesignationCtrl: FormControl = new FormControl();
    parentAdminDeptCtrl: FormControl = new FormControl();
    parentHeadDeptCtrl: FormControl = new FormControl();
    presentOfficeCtrl: FormControl = new FormControl();
    subOfficeCtrl: FormControl = new FormControl();
    empClassCtrl: FormControl = new FormControl();
    departmentalCategoryCtrl: FormControl = new FormControl();
    empDesignationAsOnCtrl: FormControl = new FormControl();
    preRevisedPayScaleCtrl: FormControl = new FormControl();
    revisedPayBandCtrl: FormControl = new FormControl();
    gradePayCtrl: FormControl = new FormControl();
    npaAmountCtrl: FormControl = new FormControl();
    degreeCtrl: FormControl = new FormControl();
    passingYearCtrl: FormControl = new FormControl();
    employementTypeCtrl: FormControl = new FormControl();
    empDesignationHistCtrl: FormControl = new FormControl();
    empServiceContinuationCtrl: FormControl = new FormControl();
    cellIdCtrl: FormControl = new FormControl();
    payLevelCtrl: FormControl = new FormControl();
    examStatusCtrl: FormControl = new FormControl();
    deptExamNameCtrl: FormControl = new FormControl();
    relationshipCtrl: FormControl = new FormControl();
    examBodyCtrl: FormControl = new FormControl();
    langNameCtrl: FormControl = new FormControl();
    examTypeCtrl: FormControl = new FormControl();
    deptDistrictCtrl: FormControl = new FormControl();

    qualificationData: QualificationData[] = [
        {
            degree: '', courseName: '', passingYear: '', schoolCollege: '', universityBorad: '',
            marksObtained: '', remarks: '',
        }
    ];

    displayedQualificationColumns = ['degree', 'courseName', 'passingYear', 'schoolCollege',
        'universityBorad', 'marksObtained', 'remarks', 'Action'];

    dataSourceQualification = new MatTableDataSource<QualificationData>(this.qualificationData);

    nomineeData: NomineeData[] = [
        {
            relationship: '', nomineeName: '', nomineeAddress: '', nomineeDOB: '', nomineeShare: '',
            photoOfNominee: '', genNomiForm: '', npsNomiForm: '', fileBrowseNomi: true,
            fileBrowseGenForm: true, fileBrowseNpsForm: true,
        }
    ];
    displayedNomineeColumns = [
        'relationship', 'nomineeName', 'nomineeAddress', 'nomineeDOB',
        'nomineeShare', 'photoOfNominee', 'genNomiForm', 'npsNomiForm', 'Action'
    ];
    dataSourceNominee = new MatTableDataSource<NomineeData>(this.nomineeData);

    deptExamData: DeptExamData[] = [
        {
            deptExamName: '', examBody: '', dateOfPassing: '', examStatus: '', examAttempts: '', remarks: '',
        }
    ];
    displayedDeptExamColumns = [
        'deptExamName', 'examBody', 'departmentHodName', 'dateOfPassing', 'examStatus',
        'examAttempts', 'remarks', 'Action'
    ];
    dataSourceDeptExam = new MatTableDataSource<DeptExamData>(this.deptExamData);

    spclExamData: SpclExamData[] = [
        {
            deptExamName: '', examBody: '', dateOfExam: '', dateOfPassing: '', examStatus: '', examAttempts: '',
            remarks: '',
        }
    ];
    displayedspclExamColumns = ['deptExamName', 'examBody', 'dateOfExam', 'dateOfPassing', 'examStatus',
        'examAttempts', 'remarks', 'Action'];
    dataSourceSpclExam = new MatTableDataSource<SpclExamData>(this.spclExamData);

    languageExamData: LanguageExamData[] = [
        {
            langName: '', examBody: '', examType: '', dateOfPassing: '', seatNo: '', examStatus: '', remarks: '',
        }
    ];
    displayedLangExamColumns = ['langName', 'examBody', 'examType', 'dateOfPassing', 'seatNo', 'examStatus', 'remarks', 'Action'];
    dataSourceLangExam = new MatTableDataSource<LanguageExamData>(this.languageExamData);

    dataSource = new MatTableDataSource<EmployeementHistory>(this.EMP_HISTORY);

    allEventsList: any[] = [
        {
            transacNumber: 1100100012, eventName: 'Employee Creation', eventEffectiveDate: '04-01-2020',
            employeeName: 'Hardik Nenuji', payScale: '', gradePay: '', payBandValue: '',
            empBasicPay: '', designation: 'Sub Accountant', dateOfAudit: '04-01-2020',
            status: 'Approved'
        }
    ];
    payComissionList: any[] = [
        {
            transacNumber: 1100100013, eventName: 'ROP 1998', eventEffectiveDate: '01-01-1996',
            payScale: '6500-200-10500', empBasicPay: 6700, incrementDate: '04-01-1996', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '04-01-2020',
            status: 'PVU_Approved', action: 'View', remarks: ''
        },
        {
            transacNumber: 1100100014, eventName: 'Regular Increment', eventEffectiveDate: '04-01-1996',
            payScale: '6500-200-10500', empBasicPay: 6900, incrementDate: '04-01-1996', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '04-01-2020',
            status: 'DDO Approved', action: 'View', remarks: 'Event name : Increment'
        }
    ];
    revisedPayComissionList: any[] = [
        {
            transacNumber: 1100100012, eventName: 'ROP 1998', eventEffectiveDate: '04-01-2020',
            payScale: '6500-200-10500', empBasicPay: 7300, incrementDate: '04-01-1996', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '04-01-2020',
            status: 'Approved', action: 'View', remarks: ''
        },
        {
            transacNumber: 1100100013, eventName: 'Regular Increment', eventEffectiveDate: '04-01-1996',
            payScale: '6500-200-10500', empBasicPay: 7500, incrementDate: '04-01-1996', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '04-01-2020',
            status: 'DDO Approved', action: 'View', remarks: 'Event name : Increment'
        }
    ];

    sixthPayComissionList: any[] = [
        {
            transacNumber: 1100100026, eventName: 'ROP 2009', eventEffectiveDate: '01-01-2006',
            payBand: '9300-34800', payBandValue: 16930, gradePay: 5400, basicPay: 22330,
            incrementDate: '07-01-2006', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '01-01-2006',
            status: 'PVU Approved', action: 'View'
        },
        {
            transacNumber: 1100100027, eventName: 'Regular Increment', eventEffectiveDate: '07-01-2006',
            payBand: '9300-34800', payBandValue: 17600, gradePay: 5400, basicPay: 23000,
            incrementDate: '04-01-1996', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '07-01-2006',
            status: 'DDO Approved', action: 'View'
        }
    ];
    revisedSixthPayComissionList: any[] = [
        {
            transacNumber: 1100100026, eventName: 'ROP 2009', eventEffectiveDate: '01-01-2006',
            payBand: '9300-34800', payBandValue: 17950, gradePay: 5400, basicPay: 23350,
            incrementDate: '07-01-2006', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '01-01-2006',
            status: 'PVU Approved', action: 'View'
        },
        {
            transacNumber: 1100100027, eventName: 'Regular Increment', eventEffectiveDate: '07-01-2006',
            payBand: '9300-34800', payBandValue: 18660, gradePay: 5400, basicPay: 24060,
            incrementDate: '07-01-2006', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '07-01-2006',
            status: 'DDO Approved', action: 'View'
        }
    ];
    seventhPayComissionList: any[] = [
        {
            transacNumber: 1100100126, eventName: 'ROP 2016', eventEffectiveDate: '01-01-2016',
            payLevel: 'LEVEL-9', cellId: 14, basicPay: '77900',
            incrementDate: '07-01-2016', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '01-01-2016',
            status: 'PVU Approved', action: 'View'
        },
        {
            transacNumber: 1100100127, eventName: 'Regular Increment', eventEffectiveDate: '07-01-2016',
            payLevel: 'LEVEL-9', cellId: 15, basicPay: '80200',
            incrementDate: '07-01-2017', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '07-01-2016',
            status: 'DDO Approved', action: 'View'
        }
    ];
    revisedSeventhPayComissionList: any[] = [
        {
            transacNumber: 1100100126, eventName: 'ROP', eventEffectiveDate: '01-01-1996',
            payLevel: 'LEVEL-9', cellId: 16, basicPay: 82600,
            incrementDate: '07-01-2016', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '01-01-2016',
            status: 'PVU Approved', action: 'View'
        },
        {
            transacNumber: 1100100127, eventName: 'Regular Increment', eventEffectiveDate: '04-01-1996',
            payLevel: 'LEVEL-9', cellId: 17, basicPay: 82100,
            incrementDate: '07-01-2016', designation: 'Sub Accountant',
            optionAvailed: '', optionDate: '', dateOfAudit: '07-01-2016',
            status: 'DDO Approved', action: 'View'
        }
    ];

    displayed5ThPayCommisionColumns: string[] = ['srNo', 'transacNumber', 'eventName', 'eventEffectiveDate',
        'payScale', 'empBasicPay', 'incrementDate', 'designation',
        'optionAvailed', 'optionDate', 'dateOfAudit', 'status', 'action', 'remarks'];
    displayed6ThPayCommisionColumns: string[] = ['srNo', 'transacNumber', 'eventName', 'eventEffectiveDate',
        'payBand', 'payBandValue', 'gradePay', 'basicPay', 'incrementDate', 'designation',
        'optionAvailed', 'optionDate', 'dateOfAudit', 'status', 'action'];
    displayedRevi6ThPayCommisionColumns: string[] = ['srNo', 'transacNumber', 'eventName', 'eventEffectiveDate',
        'payBand', 'payBandValue', 'gradePay', 'basicPay', 'incrementDate', 'designation',
        'optionAvailed', 'optionDate', 'dateOfAudit', 'status', 'action'];
    displayed7ThPayCommisionColumns: string[] = ['srNo', 'transacNumber', 'eventName', 'eventEffectiveDate',
        'payLevel', 'cellId', 'basicPay', 'incrementDate', 'designation',
        'optionAvailed', 'optionDate', 'dateOfAudit', 'status', 'action'];
    displayedRevise7ThPayCommisionColumns: string[] = ['srNo', 'transacNumber', 'eventName', 'eventEffectiveDate',
        'payLevel', 'cellId', 'basicPay', 'incrementDate', 'designation',
        'optionAvailed', 'optionDate', 'dateOfAudit', 'status', 'action'];
    displayedRevised5ThPayCommisionColumns: string[] = ['srNo', 'transacNumber', 'eventName', 'eventEffectiveDate',
        'payScale', 'empBasicPay', 'incrementDate', 'designation',
        'optionAvailed', 'optionDate', 'dateOfAudit', 'status', 'action', 'remarks'];

    dataSourceEvents = new MatTableDataSource<any>(this.allEventsList);
    dataSource5ThPayCommision = new MatTableDataSource<any>(this.payComissionList);

    dataSourceRevised5ThPayCommision = new MatTableDataSource<any>(this.revisedPayComissionList);

    dataSource6ThPayCommision = new MatTableDataSource<any>(this.sixthPayComissionList);

    dataSourceRevise6ThPayCommision = new MatTableDataSource<any>(this.revisedSixthPayComissionList);

    dataSource7ThPayCommision = new MatTableDataSource<any>(this.seventhPayComissionList);

    dataSourceRevise7ThPayCommision = new MatTableDataSource<any>(this.revisedSeventhPayComissionList);


    private paginator: MatPaginator;
    private sort: MatSort;

    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }

    fileData;
    errorMessage;
    constructor(
        private fb: FormBuilder,
        private toastr: ToastrService,
        private el: ElementRef,
        public dialog: MatDialog,
        private activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.params.subscribe(params => {
            if (params.index) {
                this.selectedIndex = params.index;
                this.showMenuTab = false;
                this.showActionBtn = false;
            }
        });
        const currentYear = new Date().getFullYear();
        for (let startYear = 1950, idx = 1; startYear <= currentYear; startYear++ , idx++) {
            const obj = {
                'value': idx, 'viewValue': startYear.toString()
            };
            this.passingYear_list.push(obj);
        }

        for (let startCount = 1, idValue = 1; startCount <= 40; startCount++ , idValue++) {
            const objData = {
                'value': idValue, 'viewValue': startCount.toString()
            };
            this.cellId_list.push(objData);
        }
    }

    ngOnInit() {
        this.errorMessage = pvuMessage;
        this.createForm();

        this.createEmployeeForm.patchValue({
            'nationality': '1',
            'revisedPayBand': '1',
            'gradePay': '4',
        });

        this.departmentalDetails.patchValue({
            'presentOffice': '1',
            'subOffice': '1',
        });
    }

    createForm() {
        this.createEmployeeForm = this.fb.group({
            officeName: [''],
            caseNo: [''],
            employeeCode: [''],
            salutation: [''],
            employeeName: ['', Validators.required],
            employeeMiddleName: [''],
            employeeSurname: [''],
            gender: ['', Validators.required],
            nationality: ['', Validators.required],
            emailID: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            mobileNo: ['', Validators.required],
            fathername: ['', Validators.required],
            mothername: ['', Validators.required],
            maritalStatus: ['', Validators.required],
            category: ['', Validators.required],
            religion: ['', Validators.required],
            caste: ['', Validators.required],
            bloodGroup: [''],
            phStatus: ['', Validators.required],
            phType: ['', Validators.required],
            dateOfMedFitnessCert: [''],
            height: ['', Validators.required],
            identificationMark: ['', Validators.required],
            electionCardNo: [''],
            aadhaarNo: [''],
            panNo: ['', Validators.required],
            passportNo: [''],
            passportExpiryDate: [''],
            buckleNo: [''],
            nAddress1: ['', Validators.required],
            nAddress2: ['', Validators.required],
            nState: ['', Validators.required],
            nDistrict: ['', Validators.required],
            nTaluka: ['', Validators.required],
            nCity: ['', Validators.required],
            nPincode: ['', Validators.required],
            pAddress1: ['', Validators.required],
            pAddress2: ['', Validators.required],
            pState: ['', Validators.required],
            pDistrict: ['', Validators.required],
            pTaluka: ['', Validators.required],
            pCity: ['', Validators.required],
            pPincode: ['', Validators.required],
            cAddress1: ['', Validators.required],
            cAddress2: ['', Validators.required],
            cState: ['', Validators.required],
            cDistrict: ['', Validators.required],
            cTaluka: ['', Validators.required],
            cCity: ['', Validators.required],
            cPincode: ['', Validators.required],
            cOfficeDist: ['', Validators.required],
            nomineeName: ['', Validators.required],
        });

        this.examDetails = this.fb.group({
            degree: ['', Validators.required],
            passingYear: ['', Validators.required],
            schoolCollege: ['', Validators.required],
            universityBorad: ['', Validators.required],
            marksObtained: ['', Validators.required],
            remarks: ['', Validators.required],
        });


        this.createPayDetails = this.fb.group({
            empDesignationAsOn: ['', Validators.required],
            empOtherDesignation: ['', Validators.required],
            preRevisedPayScale: ['', Validators.required],
            preRevisedBasicPay: ['', Validators.required],
            revisedPayBand: ['', Validators.required],
            gradePay: ['', Validators.required],
            dateOfPreRevisedNextIncrement: [''],
            npaAmount: ['', Validators.required],
            dateOfOption: ['', Validators.required],
            dateOfStagnational: ['', Validators.required],
            incrementAmount: ['', Validators.required],

            payLevel: ['', Validators.required],
            cellId: ['', Validators.required],
            basicPay: [''],
            dateOfBenefitEffective: ['', Validators.required],
            dateOfNextIncrement: ['', Validators.required],
        });

        this.departmentalDetails = this.fb.group({
            dateOfJoiningGovt: ['', Validators.required],
            dateOfRetirement: ['', Validators.required],
            empCategory: ['', Validators.required],
            empStatus: ['', Validators.required],
            empType: ['', Validators.required],
            empDesignation: ['', Validators.required],
            parentAdminDept: ['', Validators.required],
            parentHeadDept: ['', Validators.required],
            deptDistrict: ['', Validators.required],
            presentOffice: [''],
            subOffice: [''],
            empClass: ['', Validators.required],
            departmentalCategory: ['', Validators.required],
            station: ['', Validators.required],
            deptTaluka: ['', Validators.required],
            officeAddress: ['', Validators.required],
            gpfNo: [''],
            pranAccNo: [''],
            ppoNo: ['', Validators.required],
            deathTerminationDate: ['', Validators.required],
            ppnNo: ['', Validators.required],
            employementType: ['', Validators.required],
            deptName: ['', Validators.required],
            previousOfficeName: ['', Validators.required],
            officeAdd: ['', Validators.required],
            empDesignationHist: ['', Validators.required],
            fromDate: ['', Validators.required],
            toDate: ['', Validators.required],
            lastPayDrawn: ['', Validators.required],
            empServiceContinuation: ['', Validators.required],
            orderNoDate: ['', Validators.required],
        });
    }

    dobOnChange(data) {
        const retireYear = data.value.getFullYear() + 58;
        const selectedMonth = new Date(retireYear, data.value.getMonth() + 1, 0).getDate();
        console.log(selectedMonth, data.value.getMonth());
    }

    saveEstimate() { }

    decimalKeyPress(event: any) {
        const pattern = /^\d+(\.\d{0,2})?$/;
        const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);

        let tempstr = event.target.value;
        tempstr += inputChar;

        if (!pattern.test(tempstr)) {
            event.preventDefault();
            return false;
        }
    }

    decimalPoint(data, key) {
        // debugger
        if (data[key]) {
            data[key] = Number(data[key]).toFixed(2);
        }
    }

    integerKeyPress(event: any) {
        const pattern = /^\d{0,5}?$/;
        const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        // If the key is backspace, tab, left, right or delete
        const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
        if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
            return true;
        }
        if (event.target.value.length > 5) {
            event.preventDefault();
            return false;
        }

        if (!pattern.test(inputChar)) {
            event.preventDefault();
            return false;
        }
        return true;
    }

    onClick(data) {
        this.sameAsNativeAddr = !data;
        if (this.sameAsNativeAddr) {
            this.createEmployeeForm.patchValue({
                pAddress1: this.createEmployeeForm.value.nAddress1,
                pAddress2: this.createEmployeeForm.value.nAddress2,
                pState: this.createEmployeeForm.value.nState,
                pDistrict: this.createEmployeeForm.value.nDistrict,
                pCityTaluka: this.createEmployeeForm.value.nCityTaluka,
                pPincode: this.createEmployeeForm.value.nPincode
            });
        } else {
            this.createEmployeeForm.patchValue({
                pAddress1: '',
                pAddress2: '',
                pState: '',
                pDistrict: '',
                pCityTaluka: '',
                pPincode: ''
            });
        }
    }

    onClickAdd() {
        if (this.createEmployeeForm.value.abc === 'sameAsNativeAddr') {
            this.createEmployeeForm.patchValue({
                cAddress1: this.createEmployeeForm.value.nAddress1,
                cAddress2: this.createEmployeeForm.value.nAddress2,
                cState: this.createEmployeeForm.value.nState,
                cDistrict: this.createEmployeeForm.value.nDistrict,
                cTaluka: this.createEmployeeForm.value.nTaluka,
                cCity: this.createEmployeeForm.value.nCity,
                cPincode: this.createEmployeeForm.value.nPincode
            });
        } else if (this.createEmployeeForm.value.abc === 'sameAsPermanentAddr') {
            this.createEmployeeForm.patchValue({
                cAddress1: this.createEmployeeForm.value.pAddress1,
                cAddress2: this.createEmployeeForm.value.pAddress2,
                cState: this.createEmployeeForm.value.pState,
                cDistrict: this.createEmployeeForm.value.pDistrict,
                cTaluka: this.createEmployeeForm.value.pTaluka,
                cCity: this.createEmployeeForm.value.pCity,
                cPincode: this.createEmployeeForm.value.pPincode
            });
        }
    }
    getTabIndex(tabIndex) {
        this.selectedIndex = tabIndex;
        // const temp = this.selectedIndex;
        // debugger
        // if (confirm('Press a button!')) {
        //   debugger
        //   this.selectedIndex = tabIndex;
        // } else {
        //   debugger
        //   this.selectedIndex = temp;
        // }
    }

    addQualification() {
        if (this.dataSourceQualification) {
            this.dataSourceQualification.data.forEach((element, index) => {
                // debugger
                if ((this.dataSourceQualification.data.length === (index + 1)) && element && element.degree && element.courseName &&
                    element.passingYear && element.schoolCollege && element.universityBorad && element.marksObtained) {
                    const p_data = this.dataSourceQualification.data;
                    p_data.push({
                        degree: '', courseName: '', passingYear: '', schoolCollege: '',
                        universityBorad: '', marksObtained: '', remarks: ''
                    });
                    this.dataSourceQualification.data = p_data;
                } else if (this.dataSourceQualification.data.length === (index + 1)) {
                    this.toastr.error('Please fill the Qualification detail.');
                }
            });
        }
    }

    deleteQualification(index) {
        this.dataSourceQualification.data.splice(index, 1);
        this.dataSourceQualification = new MatTableDataSource(this.dataSourceQualification.data);
    }

    addDeptExam() {
        if (this.dataSourceDeptExam) {
            this.dataSourceDeptExam.data.forEach((element, index) => {
                if ((this.dataSourceDeptExam.data.length === (index + 1)) && element && element.deptExamName &&
                    element.examBody && element.dateOfPassing && element.examStatus && element.examAttempts) {
                    const p_data = this.dataSourceDeptExam.data;
                    p_data.push({
                        deptExamName: '', examBody: '', dateOfPassing: '', examStatus: '',
                        examAttempts: '', remarks: ''
                    });
                    this.dataSourceDeptExam.data = p_data;
                } else if (this.dataSourceDeptExam.data.length === (index + 1)) {
                    this.toastr.error('Please fill the Departmental Exam detail.');
                }
            });
        }
    }

    deleteDeptExam(index) {
        this.dataSourceDeptExam.data.splice(index, 1);
        this.dataSourceDeptExam = new MatTableDataSource(this.dataSourceDeptExam.data);
    }

    addNominee() {
        if (this.dataSourceNominee) {
            this.dataSourceNominee.data.forEach((element, index) => {
                if ((this.dataSourceNominee.data.length === (index + 1)) && element && element.relationship &&
                    element.nomineeName && element.nomineeAddress && element.nomineeDOB && element.nomineeShare &&
                    !element.fileBrowseNpsForm && !element.fileBrowseGenForm && !element.fileBrowseNomi) {
                    const p_data = this.dataSourceNominee.data;
                    p_data.push({
                        relationship: '', nomineeName: '', nomineeAddress: '', nomineeDOB: '', nomineeShare: '',
                        photoOfNominee: '', genNomiForm: '', npsNomiForm: '', fileBrowseNpsForm: true, fileBrowseNomi: true,
                        fileBrowseGenForm: true
                    });
                    this.dataSourceNominee.data = p_data;
                } else if (this.dataSourceNominee.data.length === (index + 1)) {
                    this.toastr.error('Please fill the Nominee detail.');
                }
            });
        }
    }

    deleteNominee(index) {
        this.dataSourceNominee.data.splice(index, 1);
        this.dataSourceNominee = new MatTableDataSource(this.dataSourceNominee.data);
    }

    addSpclExam() {
        if (this.dataSourceSpclExam) {
            this.dataSourceSpclExam.data.forEach((element, index) => {
                if ((this.dataSourceSpclExam.data.length === (index + 1)) && element && element.deptExamName &&
                    element.examBody && element.dateOfExam && element.dateOfPassing && element.examStatus &&
                    element.examAttempts && element.remarks) {
                    const p_data = this.dataSourceSpclExam.data;
                    p_data.push({
                        deptExamName: '', examBody: '', dateOfExam: '', dateOfPassing: '', examStatus: '', examAttempts: '',
                        remarks: ''
                    });
                    this.dataSourceSpclExam.data = p_data;
                } else if (this.dataSourceSpclExam.data.length === (index + 1)) {
                    this.toastr.error('Please fill the CCC/ CCC+ Exam detail.');
                }
            });
        }
    }

    deleteSpclExam(index) {
        this.dataSourceSpclExam.data.splice(index, 1);
        this.dataSourceSpclExam = new MatTableDataSource(this.dataSourceSpclExam.data);
    }

    addLangExam() {
        if (this.dataSourceLangExam) {
            this.dataSourceLangExam.data.forEach((element, index) => {
                if ((this.dataSourceLangExam.data.length === (index + 1)) && element && element.langName &&
                    element.examBody && element.examType && element.dateOfPassing && element.seatNo && element.examStatus
                    && element.remarks) {
                    const p_data = this.dataSourceLangExam.data;
                    p_data.push({ langName: '', examBody: '', examType: '', dateOfPassing: '', seatNo: '', examStatus: '', remarks: '' });
                    this.dataSourceLangExam.data = p_data;
                } else if (this.dataSourceLangExam.data.length === (index + 1)) {
                    this.toastr.error('Please fill the Language Exam detail.');
                }
            });
        }
    }

    deleteLangExam(index) {
        this.dataSourceLangExam.data.splice(index, 1);
        this.dataSourceLangExam = new MatTableDataSource(this.dataSourceLangExam.data);
    }

    onFileSelection1(fileSelected) {
        if (fileSelected.target && fileSelected.target.files) {
            this.fileData = fileSelected.target.files[0];
            this.fileDetailsEmp = true;
        }
        this.fileBrowseEmp = false;
    }

    openFileSelector1() {
        this.el.nativeElement.querySelector('#fileBrowse-emp').click();
    }

    onClickDeptExam(event) {
        this.isDeptExamApplicable = !this.isDeptExamApplicable;
    }

    onClickCCCExam(event) {
        this.isCCCExamApplicable = !this.isCCCExamApplicable;
    }

    onClickEmployeement(event) {
        this.isEmployeementApplicable = !this.isEmployeementApplicable;
    }

    // Nominee Photo Browse
    onFileSelection2(fileSelected, item) {
        if (fileSelected.target && fileSelected.target.files) {
            this.fileData = fileSelected.target.files[0];
            // this.fileDetailsNomi = true;
            item.fileBrowseNomi = false;
        }
        // this.fileBrowseNomi = false;
    }

    openFileSelector2() {
        this.el.nativeElement.querySelector('#fileBrowse-nominee').click();
    }

    // Browse General Nomination Form
    onFileGenForm(fileSelected, item) {
        if (fileSelected.target && fileSelected.target.files) {
            this.fileData = fileSelected.target.files[0];
            // this.fileDetailsGenForm = true;
            item.fileBrowseGenForm = false;
        }
        // this.fileBrowseGenForm = false;
    }

    openFileGenForm() {
        this.el.nativeElement.querySelector('#fileBrowse-genform').click();
    }

    // Browse NPS Nomination Form
    onFileNpsForm(fileSelected, item) {
        if (fileSelected.target && fileSelected.target.files) {
            this.fileData = fileSelected.target.files[0];
            // this.fileDetailsNpsForm = true;
            item.fileBrowseNpsForm = false;
        }
        // this.fileBrowseNpsForm = false;
    }

    openFileNpsForm() {
        this.el.nativeElement.querySelector('#fileBrowse-npsform').click();
    }

    onPhChange(schemeChange) {
        if (schemeChange.value === 1) {
            this.phCategory = true;
        } else {
            this.phCategory = false;
        }
    }

    onNationChange(nationChange) {
        console.log(nationChange.value);
        if (nationChange.value === 2 && nationChange.value === 3) {
            const field = ['nState', 'nDistrict'];
            this.disableForm(field);
        } else {
            this.phCategory = false;
        }
    }

    disableForm(fieldArr) {
        fieldArr.array.forEach(keyName => {
            if (keyName) {
                this.createEmployeeForm.controls.keyName.disable();
            }
        });
    }

    onEmpServiceChange(schemeChange) {
        if (schemeChange.value === '1') {
            this.serviceOrderNo = true;
        } else {
            this.serviceOrderNo = false;
        }
    }

    setDataSourceAttributes() {
        this.dataSourceEvents.paginator = this.paginator;
        this.dataSourceEvents.sort = this.sort;
    }

    goToDashboard() {

    }

    addEmployeementHistory() {
        this.listshow = true;
    }

    convertUppercase(data) {
        if (data.target.value) {
            data.target.value = data.target.value.toUpperCase();
        }
        return data;
    }

    submitDetails2(): void {
        // const employees: string[] = [
        //   'Satendra Zala',
        //   'Hardik Chaudhary',
        //   'C.K Brahmbhatt',
        // ];
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(EmployeeForwardDialogComponent, {

            // StandingChargeConsolidateForwardDialogComponent
            width: '2700px',
            height: '600px'
            // data: employees
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'no') {
                console.log('The dialog was closed', result);
            } else if (result === 'yes') {
                console.log('The dialog was closed', result);
                this.showConfirmationPopup();
            }
        });
    }
    showConfirmationPopup() {}
}

@Component({
    selector: 'app-employee-forward-dialog',
    templateUrl: 'employee-forward-dialog.html',
    styleUrls: ['./employee-creation.component.css']
})
export class EmployeeForwardDialogComponent implements OnInit {

    showAction: Boolean = true;

    fileBrowseIndex: number;
    date: any = new Date();
    brwoseData: any[] = [{
        name: undefined,
        file: undefined,
    }];
    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'action'];
    headerJso: HeaderElement[] = [
        { label: 'Employee Name', value: 'Charul Patel' },
        { label: 'Employee Class', value: 'Class 1' },
        { label: 'Employee Designation', value: 'Director' },
        { label: 'Date of Joing', value: '22/11/2019' },
        { label: 'Date of Retainment', value: '22/11/2050' },
        { label: 'Applicable Pay Commission', value: '7th Pay commission' },
    ];

    displayData: boolean = false;

    attachment = [
        // {fileName:'Attachment 1', fileType:'image', filePath:'', imgStatus: false},
        { fileName: 'Attachment 1', fileType: 'image', filePath: '../../../assets/sample-attachments/image-sample.jpg', imgStatus: false },
        // {fileName:'Sample PDF', fileType:'pdf', filePath:'src/assets/img/OoPdfFormExample.pdf'},
        // {fileName:'Attachment 2', fileType:'pdf', filePath:'src/assets/img/pdf-test.pdf', pdfStatus: false},
        { fileName: 'Attachment 2', fileType: 'pdf', filePath: '../../../assets/sample-attachments/pdf-sample.pdf', pdfStatus: false },
        // {fileName:'Attachment 2', fileType:'pdf', filePath:'', pdfStatus: false},
    ]
    sample: string = 'src/assets/img/pdf-test.pdf';
    fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number)
    show: boolean = false;
    page: number = 1;
    totalPages: number;
    isLoaded: boolean = false;
    sampleFlag: boolean;
    tabDisable: Boolean = true;
    selectedIndex: number;

    actionForm: FormGroup;

    errorMessages = {
        FIN_YEAR: 'Please select any Financial Year',
        DEPARTMENT: 'Please select any Department',
    };

    forwardDialog_history_list: any[] = [
        // tslint:disable-next-line: max-line-length
        { id: 1, userName: 'Shri P M Shah', designation: 'Deputy Secretaryr', role: 'Approver', date: '11/11/2019', comment: 'We may approve', status: 'Reworked by Approver' },
        // tslint:disable-next-line: max-line-length
        { id: 2, userName: 'Shri C Patel', designation: 'Section Officer', role: 'Verifier', date: '10/11/2019', comment: 'We may approve', status: 'Varified by Verifier' },
        // tslint:disable-next-line: max-line-length
        { id: 3, userName: 'Shri S M Modi', designation: 'Deputy Section Officer', role: 'Creator', date: '1/11/2019', comment: 'Please correct standing charge estimate for object head and correct all the calculations.Please verify last 3 year account as well as CSS grant received till date.Ask cooncerned officer from respective office to send necessay details at the earliest to department.' },        
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
        // {userName: 'Shri S M modi', designation: 'HOD', date: '11/11/2019', comment: 'We may approve'},
    ];

    // transaction_By: any[] = [
    //     // tslint:disable-next-line: max-line-length
    //     { value: 1, viewValue: 'Rework by Approver'},
    // ];

    action_list: any[] = [
        { value: '1', viewValue: 'Forward'},
        { value: '1', viewValue: 'Verifier'},
        { value: '2', viewValue: 'Send Back'},
        { value: '3', viewValue: 'Return'},
        { value: '4', viewValue: 'Reject'},
        { value: '4', viewValue: 'Approved'},
    ];

    user_list: any[] = [
        { value: '1', viewValue: 'Satendra Zala (DDO)' },
        // { value: '2', viewValue: 'Hardik Chaudhary' },
        // { value: '3', viewValue: 'C.K Brahmbhatt' },
    ];

    attachmentType_list: any[] = [
        { value: '1', viewValue: 'WorkFlow' },
    ];

    actionCtrl: FormControl = new FormControl();
    filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    userCodeCtrl: FormControl = new FormControl();
    filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    attachmentTypeCodeCtrl: FormControl = new FormControl();
    filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    private _onDestroy = new Subject<void>();

    constructor(
        private toastr: ToastrService,
        private router: Router,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<EmployeeForwardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private el: ElementRef,
    ) { }

    filteredOptions: Observable<string[]>;
    options: any;
    myControl = new FormControl();
    additionalText = new FormControl();

    ngOnInit() {
        this.createForm();
        if (this.action_list) {
            this.filteredAction.next(this.action_list.slice());
        }
        this.actionCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.action_list, this.actionCtrl.value, this.filteredAction);
            });
        if (this.user_list) {
            this.filteredUserCode.next(this.user_list.slice());
        }
        this.userCodeCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.user_list, this.userCodeCtrl.value, this.filteredUserCode);
            });
        this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
        this.attachmentTypeCodeCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.attachmentType_list, this.attachmentTypeCodeCtrl.value, this.filteredAttachmentTypeCode);
            });
        console.log('data', this.data);
        this.options = this.data;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );

        this.actionForm.patchValue({
            'actionCode': '1',
            'userCode': '1'
        });
    }

    gotoListing() {
        this.router.navigate(['./budget/standing-charge-list']);
    }

    filterObjValue(arrValue, searchValue, filteredValue) {
        if (!arrValue) {
            return;
        }
        // get the search keyword
        let search = searchValue;
        if (!search) {
            filteredValue.next(arrValue.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the values
        filteredValue.next(
            arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
        );
    }
    uploadAttachment() {
        this.tabDisable = false;
        this.selectedIndex = 2;
    }
    createForm() {
        this.actionForm = this.fb.group({
            actionCode: ['', Validators.required],
            userCode: ['', Validators.required],
        });
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    onNoClick(): void {
        this.dialogRef.close('no');
    }

    forwardConsolidate() {
        console.log('forwardConsolidate');
        this.dialogRef.close('yes');
    }

    nextPage() {
        this.page += 1;
        if (this.page > this.totalPages) {
            this.page = this.totalPages;
        }
    }

    previousPage() {
        this.page -= 1;
        if (this.page < 1) {
            this.page = 1;
        }
    }

    afterLoadComplete(pdfData: any) {
        // console.log("pdfData",  pdfData)
        this.totalPages = pdfData.numPages;
        // this.isLoaded = true;
    }
    checkDisplayFile(data) {
        for (let i = 0; i < this.attachment.length; i++) {
            if (data.fileType === 'image') {
                if (this.showAction = true) {
                    this.showAction = false;
                }
                if (this.attachment[i].fileName == data.fileName) {
                    this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
                    this.show = this.attachment[i].imgStatus ? true : false;
                    // this.showAction = true;
                } else {
                    this.attachment[i].imgStatus = false;
                    // this.show = false;
                }
            } else if (data.fileType === 'pdf') {
                if (this.showAction = true) {
                    this.showAction = false;
                }
                if (this.attachment[i].fileName === data.fileName) {
                    this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
                    this.show = this.attachment[i].pdfStatus ? true : false;
                    // this.showAction = true;
                } else {
                    this.attachment[i].pdfStatus = false;
                }
            } else {
            }
            if (this.show === false) {
                this.showAction = true;
                if (this.attachment[i].fileType === 'image') {
                    this.attachment[i].imgStatus = false;
                } else if (this.attachment[i].fileType === 'pdf') {
                    this.attachment[i].pdfStatus = false;
                }
            }
        }
        console.log(data);
    }


    onFileSelection(fileSelected) {
        if (fileSelected.target && fileSelected.target.files) {
            this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
        }
    }

    openFileSelector(index) {
        this.el.nativeElement.querySelector('#fileBrowse').click();
        this.fileBrowseIndex = index;
    }

    onBrowseSelectChange() { }

    addBrowse() {
        if (this.dataSourceBrowse) {
            const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
            if (data && data.name && data.file) {
                const p_data = this.dataSourceBrowse.data;
                p_data.push({
                    name: undefined,
                    file: undefined,
                });
                this.dataSourceBrowse.data = p_data;
            } else {
                this.toastr.error('Please fill the detail.');
            }
        }
    }

    deleteBrowse(index) {
        this.dataSourceBrowse.data.splice(index, 1);
        this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    }
}