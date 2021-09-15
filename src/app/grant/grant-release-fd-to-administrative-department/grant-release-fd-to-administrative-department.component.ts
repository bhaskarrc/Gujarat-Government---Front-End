
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PeriodicElement } from 'src/app/model/grant-order';
import { grantMessage } from 'src/app/common/error-message/common-message.constants';
import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { element } from '@angular/core/src/render3/instructions';

@Component({
    selector: 'app-grant-calculation-dialog',
    templateUrl: './grant-calculation-dialog.html'
})
export class GrantCalculateDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<GrantCalculateDialogComponent>) { }
    calcPer: number;
    ngOnInit() {
    }
    onCancel(): void {
        this.dialogRef.close('cancel');
    }
    calculatePer(): void {
        this.dialogRef.close(this.calcPer);
    }
}
@Component({
    selector: 'app-grant-release-fd-to-administrative-department',
    templateUrl: './grant-release-fd-to-administrative-department.component.html',
    styleUrls: ['./grant-release-fd-to-administrative-department.component.css']
})
export class GrantReleaseFdToAdministrativeDepartmentComponent implements OnInit {
    searchGrantDistribution: FormGroup;
    public toggleButton = true;
    errorMessages;
    Property = false;
    date = new Date();

    // Search section - Dropdown value
    toMonth_list: any[] = [
        { value: '1', viewValue: 'April' },
        { value: '2', viewValue: 'May' },
        { value: '3', viewValue: 'June' },
        { value: '4', viewValue: 'July' },
        { value: '5', viewValue: 'August' },
        { value: '6', viewValue: 'September' },
        { value: '7', viewValue: 'October' },
        { value: '8', viewValue: 'November' },
        { value: '9', viewValue: 'December' },
        { value: '10', viewValue: 'January' },
        { value: '11', viewValue: 'February' },
        { value: '12', viewValue: 'March' }
    ];
    finYear_list: any[] = [
        { value: '1', viewValue: '2020-2021' },
    ];
    revenueCapital_list: any[] = [
        { value: '1', viewValue: 'Revenue' },
        { value: '2', viewValue: 'Capital' },
    ];
    fromMonth_list: any[] = [
        { value: '1', viewValue: 'April' },
        { value: '2', viewValue: 'May' },
        { value: '3', viewValue: 'June' },
        { value: '4', viewValue: 'July' },
        { value: '5', viewValue: 'August' },
        { value: '6', viewValue: 'September' },
        { value: '7', viewValue: 'October' },
        { value: '8', viewValue: 'November' },
        { value: '9', viewValue: 'December' },
        { value: '10', viewValue: 'January' },
        { value: '11', viewValue: 'February' },
        { value: '12', viewValue: 'March' }
    ];
    departments: any[] = [
        { value: 'Finance Department', viewValue: 'Finance Department' },
        { value: 'Education Department', viewValue: 'Education Department' },
        { value: 'Home Department', viewValue: 'Home Department' }
    ];

    fromTo_list: any[] = [
        { value: '1', viewValue: 'April' },
        { value: '2', viewValue: 'May' },
        { value: '3', viewValue: 'June' },
        { value: '4', viewValue: 'July' },
        { value: '5', viewValue: 'August' },
        { value: '6', viewValue: 'September' },
        { value: '7', viewValue: 'October' },
        { value: '8', viewValue: 'November' },
        { value: '9', viewValue: 'December' },
        { value: '10', viewValue: 'January' },
        { value: '11', viewValue: 'February' },
        { value: '12', viewValue: 'March' }
    ];
    // End Search section - Dropdown value

    // Code for Attachment Tab
    attachmentTypeCode: any[] = [
        { value: '01', viewValue: 'Supporting Document' },
        { value: '02', viewValue: 'Sanction Order' },
        { value: '03', viewValue: 'Others' }
    ];

    brwoseData: any[] = [{
        name: undefined,
        file: undefined,
        uploadedBy: ''
    }];

    fileBrowseIndex: number;
    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

    // End Code for Attachment Tab

    // Grant Order tab - Table Data
    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    ELEMENT_DATA: any[] = [
        {
            position: 1, divisionName: ' Agriculture, farmers welfare Deprt', budgetStateScheme: '200', budgetStateShare: 100,
            budgetCssShare: 50, grantRelease: 10, grantReleaseWithAutho: 110, addAuthorizeState: 100, addAuthorizeCss: 50,
            revisedStateScheme: 200, revisedStateShare: 100, revisedCssShare: 50,
            // tslint:disable-next-line: max-line-length
            availableGrant: '', grantReleaseInProgress: '0', grantToBeReleaseProgress: '0', remainingGrant: 0, tooltip: 'Available Grant : 20Lacs'
        },
        {
            position: 2, divisionName: 'Education department', budgetStateScheme: '200', budgetStateShare: 100,
            budgetCssShare: 50, grantRelease: 10, grantReleaseWithAutho: 110, addAuthorizeState: 100, addAuthorizeCss: 50,
            revisedStateScheme: 200, revisedStateShare: 100, revisedCssShare: 50,
            // tslint:disable-next-line: max-line-length
            availableGrant: '', grantReleaseInProgress: '0', grantToBeReleaseProgress: '0', remainingGrant: 0, tooltip: 'Available Grant : 20Lacs'
        },
        {
            position: 3, divisionName: 'Legal department', budgetStateScheme: '200', budgetStateShare: 100,
            budgetCssShare: 50, grantRelease: 10, grantReleaseWithAutho: 100, addAuthorizeState: 100, addAuthorizeCss: 50,
            revisedStateScheme: 200, revisedStateShare: 100, revisedCssShare: 50,
            // tslint:disable-next-line: max-line-length
            availableGrant: '', grantReleaseInProgress: '0', grantToBeReleaseProgress: '0', remainingGrant: 0, tooltip: 'Available Grant : 20Lacs'
        },
        {
            position: 4, divisionName: 'Administrative Reforms & Training Division	', budgetStateScheme: '200', budgetStateShare: 100,
            // tslint:disable-next-line: max-line-length
            budgetCssShare: 50, grantRelease: 10, grantReleaseWithAutho: 110, addAuthorizeState: 100, grantToBeReleaseProgress: '0', addAuthorizeCss: 50,
            revisedStateScheme: 200, revisedStateShare: 100, revisedCssShare: 50,
            availableGrant: '', grantReleaseInProgress: '0', remainingGrant: 0, tooltip: 'Available Grant : 20Lacs'
        },
    ];

    // Header Section name of Table
    displayedGrantColumns: string[] = [
        'position', 'divisionName',
        'budgetStateScheme', 'budgetCssScheme', 'budgetStateShare', 'budgetCssShare',
        'addAuthorizeState', 'addAuthorizeCss',
        'revisedStateScheme', 'revisedCssScheme', 'revisedStateShare', 'revisedCssShare',
        'grantRelease', 'grantReleaseWithAutho',
        'availableGrant', 'grantReleaseInProgress', 'grantToBeReleaseProgress', 'remainingGrant'];

    // End Grant Order tab - Table Data

    // Search Section - Search variable's name of Dropdown field
    grantdataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
    finYearCtrl: FormControl = new FormControl;
    revenueCapitalCtrl: FormControl = new FormControl;
    fromMonthCtrl: FormControl = new FormControl;
    toMonthCtrl: FormControl = new FormControl;
    attachmentTypeCtrl: FormControl = new FormControl();
    departmentNameCtrl: FormControl = new FormControl();
    // End Search Section - Search variable's name of Dropdown field

    constructor(
        private el: ElementRef,
        private toastr: ToastrService,
        public dialog: MatDialog,
        private fb: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.errorMessages = grantMessage;

        // Search Section - New Grant order
        this.searchGrantDistribution = this.fb.group({
            finYear: ['1', Validators.required],
            revenueCapital: ['', Validators.required],
            fromMonth: ['', Validators.required],
            toMonth: ['', Validators.required],
            orderNo: ['', Validators.required],
            departmentName: ['', Validators.required],
        });
        // End Search Section - New Grant order

        const self = this;

        // Column M
        this.grantdataSource.data.forEach(grandData => {
            grandData.availableGrant = self.calAvailableGrant(grandData);
        });
    }

    // For Column C
    getbudgetStateScheme(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.budgetStateScheme);
        });
        return calcCurrentCss;
    }

    // For Column D
    // getbudgetCssScheme(): number {
    //     let calcCurrentCss = 0;
    //     // tslint:disable-next-line:no-shadowed-variable
    //     this.grantdataSource.data.forEach((element) => {
    //         calcCurrentCss = calcCurrentCss + Number(element.budgetStateScheme);
    //     });
    //     return calcCurrentCss;
    // }

    // For Column D
    getbudgetStateShare(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.budgetStateShare);
        });
        return calcCurrentCss;
    }

    // For Column E
    getbudgetCssShare(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.budgetCssShare);
        });
        return calcCurrentCss;
    }

    // getCSSStateShare(): number {
    //     let calcCurrentCss = 0;
    //     // tslint:disable-next-line:no-shadowed-variable
    //     this.grantdataSource.data.forEach((element) => {
    //         calcCurrentCss = calcCurrentCss + Number(element.budgetCssShare);
    //     });
    //     return calcCurrentCss;
    // }

    // getCSSCentralShare(): number {
    //     let calcCurrentCss = 0;
    //     // tslint:disable-next-line:no-shadowed-variable
    //     this.grantdataSource.data.forEach((element) => {
    //         calcCurrentCss = calcCurrentCss + Number(element.budgetCssShare);
    //     });
    //     return calcCurrentCss;
    // }

    // Event Click - On Create Button
    showdata() {
        this.Property = true;
    }

    // For Column F
    getaddAuthorizeState(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.addAuthorizeState);
        });
        return calcCurrentCss;
    }

    // For Column G
    getaddAuthorizeCss(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.addAuthorizeCss);
        });
        return calcCurrentCss;
    }

    // For Column H
    getrevisedStateScheme(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.revisedStateScheme);
        });
        return calcCurrentCss;
    }

    // getrevisedCssScheme(): number {
    //     let calcCurrentCss = 0;
    //     // tslint:disable-next-line:no-shadowed-variable
    //     this.grantdataSource.data.forEach((element) => {
    //         calcCurrentCss = calcCurrentCss + Number(element.revisedStateScheme);
    //     });
    //     return calcCurrentCss;
    // }

    // For Column I
    getrevisedStateShare(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.revisedStateShare);
        });
        return calcCurrentCss;
    }

    // For Column J
    getrevisedCssShare(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.revisedCssShare);
        });
        return calcCurrentCss;
    }

    // getrevisedCSSStateShare(): number {
    //     let calcCurrentCss = 0;
    //     // tslint:disable-next-line:no-shadowed-variable
    //     this.grantdataSource.data.forEach((element) => {
    //         calcCurrentCss = calcCurrentCss + Number(element.revisedCssShare);
    //     });
    //     return calcCurrentCss;
    // }

    // getrevisedCSSCentralShare(): number {
    //     let calcCurrentCss = 0;
    //     // tslint:disable-next-line:no-shadowed-variable
    //     this.grantdataSource.data.forEach((element) => {
    //         calcCurrentCss = calcCurrentCss + Number(element.revisedCssShare);
    //     });
    //     return calcCurrentCss;
    // }

    // For Column K
    getgrantRelease(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.grantRelease);
        });
        return calcCurrentCss;
    }

    // For Column L
    getgrantReleaseWithAutho(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.grantReleaseWithAutho);
        });
        return calcCurrentCss;
    }

    // For Column M
    getavailableGrant(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.availableGrant);
        });
        return calcCurrentCss;
    }

    // For Column N
    getgrantReleaseInProgress(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.grantReleaseInProgress);
        });
        return calcCurrentCss;
    }

    // For Column P
    getgrantToBeRelease(): number {
        let calcCurrentCss = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            calcCurrentCss = calcCurrentCss + Number(element.grantToBeReleaseProgress);
        });
        return calcCurrentCss;
    }

    // For Column O
    getremainingGrant(): number {
        let getValueOfRemaning = 0;
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach((element) => {
            getValueOfRemaning = getValueOfRemaning + Number(element.remainingGrant);
        });
        return getValueOfRemaning;
    }

    // Calculation Dialog Modal
    grantPercentageModel() {
        const dialogRef = this.dialog.open(GrantCalculateDialogComponent, {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== 'cancel' && result !== '') {
                this.grantdataSource.data.forEach(function (data) {
                    if (data[''] !== '') {
                        data['grantToBeReleaseProgress'] = Number(Number(data['budgetStateScheme']) * (result / 100)).toFixed(2);
                    }
                });
            }
        });
    }

    // For 4 Decimal number Automatically add
    decimalPoint(data, key) {
        if (data[key]) {
            data[key] = Number(data[key]).toFixed(4);
        }
    }
    decimalKeyPress(event: any) {
        const pattern = /^\d+(\.\d{0,4})?$/;
        const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        let tempstr = event.target.value;
        tempstr += inputChar;
        if (!pattern.test(tempstr)) {
            event.preventDefault();
            return false;
        }
    }

    // Attachment tab - upload File
    onFileSelection(fileSelected) {
        if (fileSelected.target && fileSelected.target.files) {
            this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
        }
    }
    openFileSelector(index) {
        this.el.nativeElement.querySelector('#fileBrowse').click();
        this.fileBrowseIndex = index;
    }

    addBrowse() {
        if (this.dataSourceBrowse) {
            const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
            if (data && data.name && data.file) {
                const p_data = this.dataSourceBrowse.data;
                p_data.push({
                    name: undefined,
                    file: undefined,
                    uploadedBy: undefined
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


    // Common Action button Event
    reset() {
        // tslint:disable-next-line:no-shadowed-variable
        this.grantdataSource.data.forEach(element => {
            element.grantReleaseInProgress = '';
        });
        this.searchGrantDistribution.reset();
    }

    // Calculation of Column M
    calAvailableGrant(data) {
        let returnDate = 0;
        returnDate = Number(data.budgetStateScheme) - Number(data.grantRelease);
        return returnDate;
    }

    // Workflow Dailog modal
    workflowDetails(): void {
        const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
            width: '1200px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    // goToDashboard() {
    // }

    formSubmit() {
    }
}
