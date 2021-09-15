import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatDialogRef, MatDialog } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { EmployeeEligibleTable, ExcludeEmployeeList, Summary } from 'src/app/model/increment';
import { BehaviorSubject } from 'rxjs';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
@Component({
    selector: 'app-increment',
    templateUrl: './increment.component.html',
    styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {
    public show = false;
    errorMessage;
    initiatiomdate: any = Date();
    showSeventhPayCommField = false;
    showSixthPayCommField = false;
    showFifthPayCommField = false;
    incrementFormGroup: any;
    currentDetailsCols = 3;
    revisedDetailsCols  = 5;
    ClassCtrl: FormControl = new FormControl();
    incrementForCtrl: FormControl = new FormControl();
    designationCtrl: FormControl = new FormControl();
    financialYearCtrl: FormControl = new FormControl();
    date = new FormControl(new Date());
    incrementFor_list: CommonListing[] = [
        { value: '1', viewValue: '7th Pay commission' },
        { value: '2', viewValue: '6th Pay commission' },
        { value: '3', viewValue: '5th Pay commission' },
    ];
    Class: CommonListing[] = [
        { value: '1', viewValue: 'Class I' },
        { value: '2', viewValue: 'Class II' },
        { value: '3', viewValue: 'Class III' },
        { value: '4', viewValue: 'Class IV' },
        { value: '5', viewValue: 'All' },
    ];
    designation: CommonListing[] = [
        { value: '1', viewValue: 'All' },
        { value: '2', viewValue: 'Actuary' },
        { value: '3', viewValue: 'Artist' },
        { value: '4', viewValue: 'Stuff Nurse' },
        { value: '5', viewValue: 'Tailor' },
        { value: '6', viewValue: 'Tutor' },
    ];
    financialYear_list: CommonListing[] = [
        { value: '1', viewValue: '2019' },
        { value: '2', viewValue: '2020' },
        { value: '3', viewValue: '2021' },
        { value: '4', viewValue: '2022' },
        { value: '5', viewValue: '2023' },
        { value: '6', viewValue: '2024' },

    ];

    // Employee Eligible for Increment
    ELEMENT_DATA: EmployeeEligibleTable[] = [{
        employeeNumber: 1248975395, employeeName: 'Dhruvil Panchal', cpfgpfno: 8569,
        class: 'Class III', designation: 'Assistant', dateOfJoining: '10-05-2004',
        payLevel: 'Level4', cellId: '2',
        payBand: '5200', payBandValue: '1200', gradePay: '1600', grade: 'S-4', scale: '2750-70-3800-75-4400', basicPay: '7500',
        effectiveDate: '01-07-2018', nextIncrementDate: '01-07-2019', payBand2: '5200',
        payBandValue2: '2400', gradePay2: '1800', grade2: 'S-4', scale2: '2750-70-3800-75-4400', payLevel2: 'Level4', cellId2: '2', basicPay2: '8000.00',
        differenceAmount: '500.00', fromDate: '08-07-2019', toDate: '08-09-2019',
        fromDate2: '08-07-2019', toDate2: '08-09-2019', remarks: ''
    },
    ];
    payComissionColms = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'cpfgpfno', 'class', 'designation',
    'dateOfJoining', 'payLevel', 'cellId', 'basicPay', 'payLevel2', 'cellId2',
    'basicPay2', 'effectiveDate', 'nextIncrementDate', 'differenceAmount', 'fromDate', 'toDate', 'fromDate2', 'toDate2', 'remarks'];
    displayedColumns = new BehaviorSubject(this.payComissionColms);
    eligIncrement = new MatTableDataSource<EmployeeEligibleTable>(this.ELEMENT_DATA);
    displayedColumns7th: string[] = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'cpfgpfno', 'class', 'designation',
    'dateOfJoining', 'payLevel', 'cellId', 'basicPay', 'payLevel2', 'cellId2',
    'basicPay2', 'effectiveDate', 'nextIncrementDate', 'differenceAmount', 'fromDate', 'toDate', 'fromDate2', 'toDate2', 'remarks'];
    displayedColumns6th: string[] = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'cpfgpfno', 'class', 'designation',
    'dateOfJoining', 'payBand', 'payBandValue', 'gradePay', 'basicPay', 'payBand2', 'payBandValue2', 'gradePay2',
    'basicPay2', 'effectiveDate', 'nextIncrementDate', 'differenceAmount', 'fromDate', 'toDate', 'fromDate2', 'toDate2', 'remarks'];
    displayedColumns5th: string[] = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'cpfgpfno', 'class', 'designation',
    'dateOfJoining', 'grade', 'scale', 'basicPay', 'grade2', 'scale2',
    'basicPay2', 'effectiveDate', 'nextIncrementDate', 'differenceAmount', 'fromDate', 'toDate', 'fromDate2', 'toDate2', 'remarks'];
    ELEMENT_LIST_DATA: ExcludeEmployeeList[] = [
        {
            employeeNumber: 1248975395, employeeName: 'Dhruvil Panchal', class: 'Class III',
            designation: 'Assistant', dateOfJoining: '10-05-2004', payLevel: 'Level 5', cellId: '1', payBand: '5200', payBandValue: '2400',
            gradePay: '1600', grade: 'S-4', scale: '2750-70-3800-75-4400',
            basicPay: '7500', reasonForExclusion: 'Joining date is within 6 months of benefit effective date ',
        },
        {
            employeeNumber: 1248975395, employeeName: 'Amit Pandey', class: 'Class I',
            designation: 'Assistant', dateOfJoining: '10-05-2004', payLevel: 'Level 2', cellId: '2', payBand: '5200', payBandValue: '2400',
            gradePay: '1600', grade: 'S-4', scale: '2750-70-3800-75-4400',
            basicPay: '7500', reasonForExclusion: 'Suspended ',
        },
        {
            employeeNumber: 1248975395, employeeName: 'Pankaj Gupta', class: 'Class II',
            designation: 'Assistant', dateOfJoining: '10-05-2004', payLevel: 'Level 3', cellId: '3', payBand: '5200', payBandValue: '2400',
            gradePay: '1600', grade: 'S-4', scale: '2750-70-3800-75-4400',
            basicPay: '7500', reasonForExclusion: 'Employee On EOL ',
        },
        {
            employeeNumber: 1248975395, employeeName: 'Dhruvil Panchal', class: 'Class III',
            designation: 'Assistant', dateOfJoining: '10-05-2004', payLevel: 'Level 5', cellId: '4', payBand: '5200', payBandValue: '2400',
            gradePay: '1600', grade: 'S-4', scale: '2750-70-3800-75-4400',
            basicPay: '7500', reasonForExclusion: 'Employee On Probational Period ',
        }
    ];
    dataSourceList = new MatTableDataSource<ExcludeEmployeeList>(this.ELEMENT_LIST_DATA);
    excludeListData = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'class', 'designation',
    'dateOfJoining', 'payLevel', 'cellId', 'basicPay', 'reasonForExclusion', 'remarks'];
    excludeListColumns = new BehaviorSubject(this.excludeListData);
    displayedList7thPay = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'class', 'designation',
    'dateOfJoining', 'payLevel', 'cellId', 'basicPay', 'reasonForExclusion', 'remarks'];
    displayedList6thPay = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'class', 'designation',
    'dateOfJoining', 'payBand', 'payBandValue', 'gradePay', 'basicPay', 'reasonForExclusion', 'remarks'];
    displayedList5thPay = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'class', 'designation',
    'dateOfJoining', 'grade', 'scale', 'basicPay', 'reasonForExclusion', 'remarks'];
    ELEMENT_SUMMARY_DATA: Summary[] = [
        {
            class: 'Class I', includeCount: '0', excludeCount: '0', totalCount: '0',
        },
        {
            class: 'Class II', includeCount: '0', excludeCount: '0', totalCount: '0',
        },
        {
            class: 'Class IV', includeCount: '0', excludeCount: '0', totalCount: '0',
        },
        {
            class: 'Class III', includeCount: '0', excludeCount: '0', totalCount: '0',
        },

    ];
    dataSourceSummary = new MatTableDataSource<Summary>(this.ELEMENT_SUMMARY_DATA);
    displayedSummaryColumns: string[] = ['class', 'includeCount', 'excludeCount', 'totalCount'];

    constructor(public fb: FormBuilder, private dialog: MatDialog) { }

    ngOnInit() {
        this.errorMessage = pvuMessage;
        this.incrementFormGroup = this.fb.group({
            Class: [''],
            incrementFor: ['1'],
            designation: [''],
            financialYear: ['1'],
            incrementType: [''],
            incrementeffectiveDate: [''],
            dateOfNextIncrement: [''],
            officeName: [''],
            incrementOrderNo: [''],
            cpfGpfPpanNo: [''],
            employeeNumber: ['']
        });
    }
    promotionChange(change) {
        // tslint:disable-next-line:no-unused-expression
        this.incrementFormGroup.controls.incrementFor.setValue['1'];
        if (change.value == '1') {
            this.displayedColumns.next(this.displayedColumns7th);
            this.excludeListColumns.next(this.displayedList7thPay);
            this.currentDetailsCols = 3;
            this.revisedDetailsCols = 5;
         } else if (change.value == '2') {
            this.displayedColumns.next(this.displayedColumns6th);
            this.excludeListColumns.next(this.displayedList6thPay);
            this.currentDetailsCols = 4;
            this.revisedDetailsCols = 6;
         } else if (change.value == '3') {
            this.displayedColumns.next(this.displayedColumns5th);
            this.excludeListColumns.next(this.displayedList5thPay);
            this.currentDetailsCols = 3;
            this.revisedDetailsCols = 5;
         }
    }
    toggle() {
        this.show = !this.show;
    }
    resetForm() {
    }
    saveMapping() {
    }
    showToaster() {
    }
    goToDashboard() {
    }
    onExcludeClick() {
      const dialogRef = this.dialog.open(ExcludeOptionComponent, {
        width: '800px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if(result != "") {
          this.eligIncrement.data = [];
          const p_data = this.dataSourceList.data['index'];
          let reason;
          let effect = '';
          if(result.reason == '01') {
            reason = 'Absent';
          } else {
            reason = 'Stop Increment';
          }
          if(result.stopIncrement == '01') {
            effect = 'With Future Effect';
          } else if(result.stopIncrement == '02') {
            effect = 'Without Future Effect';
          }
          p_data.push({
            employeeNumber: 1235432568,
            employeeName: 'Dhruvil Panchal',
            class: 'Class III',
            designation: 'Assistant',
            dateOfJoining: '10-05-2004',
            payBand: '5200',
            payBandValue: '2200',
            grade: 'S-4',
            scale: '3800',
            gradePay: '1600',
            payLevel: 'Level I',
            cellId: '12',
            differenceAmount: '1200',
            frmDate: result['fromDate'],
            toDate: result['toDate'],
            nextIncrementDate: result['nextIncrementDate'],
            effect: effect,
            basicPay: '7500',
            reasonForExclusion: 'reason'
        });
            this.dataSourceList.data = p_data;
        }
      });
    }
}
@Component({
    selector: 'app-exclude-option',
    templateUrl: './exclude.option.dialog.html',
})
export class ExcludeOptionComponent implements OnInit {
    @ViewChild(IncrementComponent) incComp: IncrementComponent;
    constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ExcludeOptionComponent>) {
    }
    excludeForm: FormGroup;
    reasonDrp: Number;
    stopIncrementDrp: Number;
    reasonCtrl: FormControl = new FormControl();
    fromDate: FormControl = new FormControl();
    toDate: FormControl = new FormControl();
    stopIncrementCtrl: FormControl = new FormControl();

    reason_list = [
        { value: '01', viewValue: 'Absent' },
        { value: '02', viewValue: 'Stop Increment' }
    ];

    stopIncrement_list = [
        { value: '01', viewValue: 'With Future Effect' },
        { value: '02', viewValue: 'Without Future Effect' }
    ];

    ngOnInit() {
        this.excludeForm = this.fb.group({
            reason: [''],
            stopIncrement: [''],
            fromDate: [''],
            toDate: [''],
            nextIncrementDate: ['']
        });
    }

    onClickExcludeDialog() {
        this.dialogRef.close(this.excludeForm.value);
    }
}