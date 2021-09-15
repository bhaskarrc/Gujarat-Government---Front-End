import { SearchEmployeeComponent } from './../search-employee/search-employee.component';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDatepickerInputEvent } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CommonListing } from '../../model/common-listing';
import { pvuMessage } from '../../common/error-message/common-message.constants';

@Component({
    selector: 'app-suspension-create',
    templateUrl: './suspension-create.component.html',
    styleUrls: ['./suspension-create.component.css']
})
export class SuspensionCreateComponent implements OnInit {

    public errorMessages;
    suspensionForm: FormGroup;
    date: any = new Date();
    show6thPC: Boolean = false;
    show7thPC: Boolean = false;
    show5thPC: Boolean = false;


    filteredPayCommission: CommonListing[] = [
        { value: '1', viewValue: '7th Pay Commission' },
        { value: '2', viewValue: '6th Pay Commission' },
        { value: '3', viewValue: '5th Pay Commission' },
    ];

    ReasonForSuspensionList: CommonListing[] = [
        { value: '1', viewValue: 'Act of Indiscipline' },
        { value: '2', viewValue: 'Other' }
    ];

    type_of_punishment_list: CommonListing[] = [
        { value: '1', viewValue: 'Type of Punishment ' }
    ];

    filteredAttachmentType: CommonListing[] = [
        { value: 'Supporting Document', viewValue: 'Supporting Document' },
    ];

    reasonForSuspensionCtrl: FormControl = new FormControl();
    payCommissionCtrl: FormControl = new FormControl();
    attachmentTypeCtrl: FormControl = new FormControl();


    dataSource6thPC = new MatTableDataSource;
    displayed6thPCColumns = ['srNo', 'fromDate', 'currentPayBand', 'payBandValue', 'currentGradePay', 'payablePercentOfGradePay', 'payableAmountOfGradePay', 'payablePercentOfPayBandValue', 'payableAmountOfPayBandValue', 'Action'];



    dataSource5thPC = new MatTableDataSource;

    displayed5thPCColumns = ['srNo', 'fromDate', 'currentGrade', 'currentScale', 'currentBasicPay', 'payablePercentOfBasicPay', 'payableAmountOfBasicPay', 'Action'];


    dataSource7thPC = new MatTableDataSource;
    displayed7thPCColumns = ['srNo', 'fromDate', 'currentPayLevel', 'currentCellId', 'currentBasicPay', 'payablePercentOfBasicPay', 'payableAmountOfBasicPay', 'Action'];

    fileBrowseIndex: number;
    brwoseData: any[] = [{
        name: undefined,
        file: undefined,
    }];

    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

    constructor(
        private fb: FormBuilder,
        private toastr: ToastrService,
        private el: ElementRef,
        public dialog: MatDialog,
        public router: Router
    ) { }

    ngOnInit() {
        this.errorMessages = pvuMessage;
        this.createForm();
        this.onPayCommissionSelect(event);

    }

    createForm() {
        this.suspensionForm = this.fb.group({
            transactionNo: [''],
            initiationDate: [''],
            officeName: [''],
            payCommission: ['1', Validators.required],
            suspensionOrderNo: ['', Validators.required],
            suspensionOrderDate: ['', Validators.required],
            suspensionEventDate: ['', Validators.required],
            employeeNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            employeeName: [''],
            class: [''],
            designation: [''],
            employeeOfficeName: [''],
            payBand: [''],
            payBandValue: [''],
            gradePay: [''],
            payLevel: [''],
            cellId: [''],
            gradePayfith: [''],
            basicPay: [''],
            dateOfJoining: [''],
            donExtIncrement: [''],
            dateOfRetirement: [''],
            reasonForSuspension: ['', Validators.required],
            suspensionStartDate: ['', Validators.required],
            description: ['', Validators.required],
            scale: [''],
            remarks: ['', Validators.required],
            payablePercentOfGradePay: ['', Validators.required],
            fromDate: ['', Validators.required],
            payablePercentOfPayBandValue: ['', Validators.required],
            payablePercentOfBasicPay: ['', Validators.required],
        });

    }

    openDialogEmployeeNumber() {
        const dialogRef = this.dialog.open(SearchEmployeeComponent, {
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != '') {
                this.suspensionForm.patchValue({
                    employeeNumber: '1278456976',
                    employeeName: result[0].employeeName,
                    class: 'Class I',
                    designation: 'Teacher',
                    employeeOfficeName: 'Office 1',
                    payLevel: 'Level 5',
                    cellId: '1',
                    payBand: '-1S(4440 - 7440)',
                    payBandValue: '4440',
                    gradePay: '4400',
                    basicPay: '4600',
                    scale: '2550-55-2660-60-3200',
                    gradePayfith: 'S-2',
                    cellIdfith: 'S-1',
                    donExtIncrement: '09/12/2022',
                    dateOfJoining: '07/12/2019',
                    dateOfRetirement: '01/11/2036'
                });
            }

            const data5th = this.dataSource5thPC.data;
            data5th.push({
                fromDate: '11/05/2019',
                currentGrade: 'S-2',
                currentScale: '2550-55-2660-60-3200',
                currentBasicPay: '4600',
                payablePercentOfBasicPay: '50',
                payableAmountOfBasicPay: '2300',
            });
            this.dataSource5thPC.data = data5th;

            const dataSix = this.dataSource6thPC.data;
            dataSix.push({
                fromDate: '01/02/2016',
                currentPayBand: '-1S(4440 - 7440)',
                payBandValue: '4440',
                currentGradePay: '4400',
                payablePercentOfGradePay: '50',
                payableAmountOfGradePay: '2200',
                payablePercentOfPayBandValue: '50',
                payableAmountOfPayBandValue: '2220‬'
            });
            this.dataSource6thPC.data = dataSix;

            const dataSeven = this.dataSource7thPC.data;
            dataSeven.push({
                fromDate: '01/02/2016',
                currentPayLevel: 'Level 5',
                currentCellId: '1',
                currentBasicPay: '4600',
                payablePercentOfBasicPay: '50',
                payableAmountOfBasicPay: '2300',
            });
            this.dataSource7thPC.data = dataSeven;
        });
        this.dataSource7thPC.data = [];
        this.dataSource6thPC.data = [];
        this.dataSource5thPC.data = [];
    }

    

    pay = '';
    onPayCommissionSelect(event) {
        const pay = this.suspensionForm.value;
        this.show5thPC = false
        this.show6thPC = false;
        this.show7thPC = false;
        this.formvalueNull();
        switch (pay.payCommission) {
            case '1':
                this.show7thPC = true;
                     this.dataSource6thPC.data = [];
                     this.dataSource5thPC.data = [];
                break;
            case '2':
                this.show6thPC = true;
                    this.dataSource5thPC.data = [];
                    this.dataSource7thPC.data = [];
                break;
            case '3':
                this.show5thPC = true;
                    this.dataSource5thPC.data = [];
                   this.dataSource6thPC.data = [];
                break;
        }
    }

    formvalueNull() {
        this.suspensionForm.patchValue({
            employeeNumber: '',
            employeeName: '',
            class: '',
            designation: '',
            employeeOfficeName: '',
            payLevel: '',
            cellId: '',
            payBand: '',
            payBandValue: '',
            gradePay: '',
            basicPay: '',
            scale: '',
            gradePayfith: '',
            cellIdfith: '',
            donExtIncrement: '',
            dateOfJoining: '',
            dateOfRetirement: '',
        });
    }

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        return this.suspensionForm.controls.fromDate.patchValue(new Date(event.value.toDateString()));
    }

    decimalKeyPress(event: any) {
        const pattern = /^\d+(\.\d{0,2})?$/;
        const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        let tempstr = event.target.value;
        tempstr += inputChar;

        if (!pattern.test(tempstr)) {
            // invalid character, prevent input
            event.preventDefault();
            return false;
        }
    }

    decimalPoint(data, key) {
        if (data[key]) {
            data[key] = Number(data[key]).toFixed(2);
        }
    }

    integerKeyPress(event: any) {
        const pattern = /^\d{0,5}?$/;
        const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
        if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
            return true;
        }
        if (event.target.value.length > 5) {
            event.preventDefault();
            return false;
        }

        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
            return false;
        }
        return true;
    }

    add5thPC() {
        if (this.dataSource5thPC) {
            this.dataSource5thPC.data.forEach((element, index) => {
                const data5th = this.dataSource5thPC.data;
                data5th.push({
                    fromDate: '11/05/2019',
                    currentGrade: 'S-2',
                    currentScale: '2550-55-2660-60-3200',
                    currentBasicPay: '4600',
                    payablePercentOfBasicPay: '50',
                    payableAmountOfBasicPay: '2300',

                });
                this.dataSource5thPC.data = data5th;
            });
        }
    }
    delete5thPC(index) {
        this.dataSource5thPC.data.splice(index, 1);
        this.dataSource5thPC = new MatTableDataSource(this.dataSource5thPC.data);
    }

    add6thPC() {
        if (this.dataSource6thPC) {
            this.dataSource6thPC.data.forEach((element, index) => {
                const dataSix = this.dataSource6thPC.data;
                dataSix.push({
                    fromDate: '01/02/2016',
                    currentPayBand: '-1S(4440 - 7440)',
                    payBandValue: '4440',
                    currentGradePay: '4400',
                    payablePercentOfGradePay: '50',
                    payableAmountOfGradePay: '2200',
                    payablePercentOfPayBandValue: '50',
                    payableAmountOfPayBandValue: '2220‬'
                });
                this.dataSource6thPC.data = dataSix;
            });
        }
    }

    delete6thPC(index) {
        this.dataSource6thPC.data.splice(index, 1);
        this.dataSource6thPC = new MatTableDataSource(this.dataSource6thPC.data);
    }

    add7thPC() {
        if (this.dataSource7thPC) {
            this.dataSource7thPC.data.forEach((element, index) => {
                const dataSeven = this.dataSource7thPC.data;
                dataSeven.push({
                    fromDate: '01/02/2016',
                    currentPayLevel: 'Level 5',
                    currentCellId: '1',
                    currentBasicPay: '4600',
                    payablePercentOfBasicPay: '50',
                    payableAmountOfBasicPay: '2300',
                });
                this.dataSource7thPC.data = dataSeven;
            });
        }
    }

    delete7thPC(index) {
        this.dataSource7thPC.data.splice(index, 1);
        this.dataSource7thPC = new MatTableDataSource(this.dataSource7thPC.data);
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
            if (data && data.file) {
                const p_data = this.dataSourceBrowse.data;
                p_data.push({
                    dropDown: undefined,
                    name: undefined,
                    file: undefined
                });
                this.dataSourceBrowse.data = p_data;
            } else {
                // this.toastr.error('Please fill the detail.');
            }
        }
    }

    deleteBrowse(index) {
        this.dataSourceBrowse.data.splice(index, 1);
        this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    }

    reset() {
        this.suspensionForm.reset();
    }

    goToDashboard() {
        this.router.navigate(['']);
    }

    saveSuspension() {

    }

    calculatePayableSeven(item) {
        let returnData = 0;
        if (item.currentBasicPay || item.payablePercentOfBasicPay) {
            returnData = (Number(item.currentBasicPay) * Number(item.payablePercentOfBasicPay)) / 100;
        }
        return returnData;
    }

    calculatePayableGP(item) {
        let returnData = 0;
        if (item.currentGradePay || item.payablePercentOfGradePay) {
            returnData = (Number(item.currentGradePay) * Number(item.payablePercentOfGradePay)) / 100;
        }
        return returnData;
    }

    calculatePayablePBV(item) {
        let returnData = 0;
        if (item.payBandValue || item.payablePercentOfPayBandValue) {
            returnData = (Number(item.payBandValue) * Number(item.payablePercentOfPayBandValue)) / 100;
        }
        return returnData;
    }

}
