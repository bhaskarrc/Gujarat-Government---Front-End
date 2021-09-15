import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { CommonList } from 'src/app/model/common-listing';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
import { CCCEXAM, DEPARTMENTEXAM, LANGUAGEEXAM } from 'src/app/model/promotion-departmental-exam';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    payCommission_list: CommonList[] = [
        { id: '1', name: '7th Pay Commission' },
        { id: '2', name: '6th Pay Commission' },
        { id: '3', name: '5th Pay Commission' },
    ];

    eventList_list: CommonList[] = [
        { id: '1', name: 'Promotion' },
        { id: '2', name: 'Reversion' },
        { id: '3', name: 'Deemed Date' },
        { id: '4', name: 'Promotion with Forgo' },
        { id: '5', name: 'Change of Scale' },
    ];
    class_list: CommonList[] = [
        { id: '1', name: 'Class I' },
    ];
    designation_list: CommonList[] = [
        { id: '1', name: 'Manager' },
        { id: '2', name: 'Asst. Manager' },
    ];
    optionAvailed_list: CommonList[] = [
        { id: '1', name: 'Yes' },
        { id: '2', name: 'No' },
    ];
    empPostPayLevel_list: CommonList[] = [
        { id: '1', name: 'Level 5' },
        { id: '2', name: 'Level 6' },
        { id: '3', name: 'Level 7' },
        { id: '4', name: 'Level 8' },
        { id: '5', name: 'Level 9' },
        { id: '6', name: 'Level 10' },
        { id: '7', name: 'Level 11' },
        { id: '8', name: 'Level 12' },
        { id: '9', name: 'Level 13' },
        { id: '10', name: 'Level 14' },
        { id: '11', name: 'Level 15' },
        { id: '12', name: 'Level 16' },
        { id: '13', name: 'Level 17' },
        { id: '14', name: 'Level 18' },
    ];
    empPostCellId_list: CommonList[] = [
    ];
    empPostPayBand: CommonList[] = [
        { id: '1', name: '5200' },
        { id: '2', name: '2200' },
    ];
    empPostGradePay_list: CommonList[] = [
        { id: '1', name: '1800' },
        { id: '2', name: '2200' },
    ];
    empPostGrade_list: CommonList[] = [
        { id: '1', name: 'S-4' },
    ];
    empPostScale_list: CommonList[] = [
        { id: '1', name: '2750-70-3800-75-4400' },
    ];

    eventsForm: FormGroup;
    errorMessage;
    showSeventhPayCommField = false;
    showSixthPayCommField = false;
    showFifthPayCommField = false;

    payCommissionCtrl: FormControl = new FormControl();
    eventListCtrl: FormControl = new FormControl();
    classCtrl: FormControl = new FormControl();
    designationCtrl: FormControl = new FormControl();
    optionAvailedCtrl: FormControl = new FormControl();
    empPostPayLevelCtrl: FormControl = new FormControl();
    empPostCellIdCtrl: FormControl = new FormControl();
    empPostPayBandCtrl: FormControl = new FormControl();
    empPostGradePayCtrl: FormControl = new FormControl();
    empPostGradeCtrl: FormControl = new FormControl();
    empPostScaleCtrl: FormControl = new FormControl();
    date: Date = new Date();

    cccExam: CCCEXAM[] = [
        { examName: 'Auto Populated', examBody: 'Auto Populated', dateOfPassing: 'Auto Populated', status: 'Auto Populated' }
    ];
    departmental: DEPARTMENTEXAM[] = [
        { examName: '', examBody: 'Auto Populated', dateOfPassing: 'Auto Populated', status: 'Auto Populated' }
    ];
    languageExam: LANGUAGEEXAM[] = [
        { langName: '', examBody: 'Auto Populated', dateOfPassing: 'Auto Populated', status: 'Auto Populated' }
    ];

    dataSourcecccEaxam = new MatTableDataSource<CCCEXAM>(this.cccExam);
    displayedColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

    dataSourceDept = new MatTableDataSource<DEPARTMENTEXAM>(this.departmental);
    displayedDeptColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

    dataSourceLang = new MatTableDataSource<LANGUAGEEXAM>(this.languageExam);
    displayedLangColumns = ['langName', 'examBody', 'dateOfPassing', 'status'];

    constructor(
        private fb: FormBuilder,
        public dialog: MatDialog,
    ) {
        for (let startCount = 1, idValue = 1; startCount <= 40; startCount++ , idValue++) {
            const objData = {
                'id': idValue, 'name': startCount.toString()
            };
            this.empPostCellId_list.push(objData);
        }
    }

    ngOnInit() {
        this.errorMessage = pvuMessage;
        this.eventsForm = this.fb.group({
            officeName: [''],
            eventOrderNumber: [''],
            eventOrderDate: [''],
            eventEffectiveDate: [''],
            payCommission: [''],
            eventList: [''],
            empNo: [''],
            empName: [''],
            empClass: [''],
            empDesignation: [''],
            empOfficeName: [''],
            empCurrentPayLevel: [''],
            empCurrentCellId: [''],
            empCurrentPayBand: [''],
            empCurrentPayBandValue: [''],
            empCurrentGradePay: [''],
            empCurrentGrade: [''],
            empCurrentScale: [''],
            empCurrentBasicPay: [''],
            empDoj: [''],
            dateOfRetirement: [''],
            nextIncrementCurrentDate: [''],
            examNameCcc: [''],
            examBodyCcc: [''],
            dateOfPassingCcc: [''],
            departmentStatus: [''],
            departmentExamName: [''],
            departmentExamBody: [''],
            departmentDateOfPassing: [''],
            ExamLangName: [''],
            LanguageExamBody: [''],
            LanguageDateOfPassing: [''],
            class: [''],
            designation: [''],
            optionAvailed: [''],
            optionDate: [''],
            empPostPayLevel: [''],
            empPostCellId: [''],
            empPostPayBand: [''],
            empPostPayBandValue: [''],
            empPostGradePay: [''],
            empPostGrade: [''],
            empPostScale: [''],
            empPostBasicPay: [''],
            effectiveDate: [''],
            dateOfNextIncrement: [''],
        });
    }

    promotionChange() {
        const eventsFormValue = this.eventsForm.value;
        console.log(eventsFormValue);
        this.showSixthPayCommField = false;
        this.showSeventhPayCommField = false;
        this.showFifthPayCommField = false;
        switch (eventsFormValue.payCommission) {
            case '1':
                this.showSeventhPayCommField = true;
                break;
            case '2':
                this.showSixthPayCommField = true;
                break;
            case '3':
                this.showFifthPayCommField = true;
                break;
        }
    }

    openDialogEmployeeNumber() {
        const dialogRef = this.dialog.open(SearchEmployeeComponent, {
            width: '800px',
        });

        dialogRef.afterClosed().subscribe(result => {
            this.eventsForm.patchValue({
                empNo: '1278456976',
                empName: 'Amit Pandey',
                empClass: 'Class I',
                empDesignation: 'Teacher',
                empOfficeName: 'Office 1',
                empCurrentPayLevel: 'Level 5',
                empCurrentCellId: '1',
                empCurrentPayBand: '2200',
                empCurrentPayBandValue: '2400',
                empCurrentGradePay: '5200',
                empCurrentGrade: 'S-4',
                empCurrentScale: '2750-70-3800-75-4400',
                empCurrentBasicPay: '4600',
                empDoj: '26/11/2019',
                nextIncrementCurrentDate: '26/11/2019',
                dateOfRetirement: '16/11/2025',
                examNameCcc: 'CCC+ Theory',
                examBodyCcc: 'Exam Body 1',
                dateOfPassingCcc: '22/10/2019',
                departmentStatus: 'Pass',
                departmentExamName: 'Exam 1',
                departmentExamBody: 'Exam Body 1',
                departmentDateOfPassing: '22/10/2019',
                ExamLangName: 'Gujarati',
                LanguageExamBody: 'Exam Body 1',
                LanguageDateOfPassing: '22/10/2019',
            });
        });
    }

    goToDashboard() {

    }

    resetForm() {
        this.eventsForm.reset();
    }

    submitDetails() {

    }

    saveEstimate() {

    }
}
