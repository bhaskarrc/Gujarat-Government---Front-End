import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { AttachmentDetails } from 'src/app/model/deemed-data';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
    selector: 'app-deemed-date',
    templateUrl: './deemed-date.component.html',
    styleUrls: ['./deemed-date.component.css']
})
export class DeemedDateComponent implements OnInit {
    containers = [];
    selectedIndex: number;
    tabDisable: Boolean = true;
    doneHeader: Boolean = false;
    currentDetails: Boolean = false;
    deemeedDateForm: FormGroup;
    currentDetailsForm: FormGroup;
    emplyeeeDataListShow: Boolean = false;
    errorMessage;
    date: Date = new Date();
    showDate: Boolean = false;
    showFifthPayCommField = false;
    showSeventhPayCommField = false;
    showSixthPayCommField = false;
    displayedAry: string[] = [];

    promotionFor_list: CommonListing[] = [
        { value: '1', viewValue: '7th Pay Commission' },
        { value: '2', viewValue: '6th Pay Commission' },
        { value: '3', viewValue: '5th Pay Commission' },
    ];
    type_list: CommonListing[] = [
        { value: '1', viewValue: 'Deemed Date' },
    ];
    class_list: CommonListing[] = [
        { value: '1', viewValue: 'Class I' },
        { value: '2', viewValue: 'Class II' },
        { value: '3', viewValue: 'Class III' },
        { value: '4', viewValue: 'Class IV' },
    ];
    designation_list: CommonListing[] = [
        { value: '1', viewValue: 'Teacher' },
        { value: '2', viewValue: 'Accountent' },
    ];
    grade_list: CommonListing[] = [
        { value: '1', viewValue: 'S-1' },
        { value: '2', viewValue: 'S-2' },
        { value: '3', viewValue: 'S-2A' },
        { value: '4', viewValue: 'S-3' },
    ];
    payScale_list: CommonListing[] = [
        { value: '1', viewValue: '2550-55-2660-60-3200' },
        { value: '2', viewValue: '2610-60-3150-65-3540' },
        { value: '3', viewValue: '2610-60-2910-65-3300-70-4000' },
        { value: '4', viewValue: '2650-65-3300-70-4000' },
    ];

    cellId_list: CommonListing[] = [
    ];

    payLevel_list: CommonListing[] = [
        { value: '1', viewValue: 'Level 1' },
        { value: '2', viewValue: 'Level 2' },
        { value: '3', viewValue: 'Level 3' },
        { value: '4', viewValue: 'Level 4' },
        { value: '5', viewValue: 'Level 5' },
        { value: '6', viewValue: 'Level 6' },
        { value: '7', viewValue: 'Level 7' },
        { value: '8', viewValue: 'Level 8' },
        { value: '9', viewValue: 'Level 9' },
        { value: '10', viewValue: 'Level 10' },
        { value: '11', viewValue: 'Level 11' },
        { value: '12', viewValue: 'Level 12' },
        { value: '13', viewValue: 'Level 13' },
        { value: '14', viewValue: 'Level 14' },
        { value: '15', viewValue: 'Level 15' },
        { value: '16', viewValue: 'Level 16' },
        { value: '17', viewValue: 'Level 17' },
        { value: '18', viewValue: 'Level 18' },
    ];
    incrementAmt_list: CommonListing[] = [
        { value: '1', viewValue: '15' },
        { value: '2', viewValue: '24' },
        { value: '3', viewValue: '30' },
    ];

    empClass_list: CommonListing[] = [
        { value: '1', viewValue: 'Class I' },
        { value: '2', viewValue: 'Class II' },
        { value: '3', viewValue: 'Class III' },
    ];

    district_list: CommonListing[] = [
        { value: '1', viewValue: 'Ahmedabad' },
        { value: '2', viewValue: 'Vadodara' },
        { value: '3', viewValue: 'Anand' },
        { value: '4', viewValue: 'Chhota Udaipur' },
        { value: '5', viewValue: 'Dahod' },
        { value: '6', viewValue: 'Kheda' },
        { value: '7', viewValue: 'Mahisagar' },
        { value: '8', viewValue: 'Panchmahal' }
    ];

    desi_list: CommonListing[] = [
        { value: '1', viewValue: 'Manager' },
        { value: '2', viewValue: 'Dy. Manager' },
        { value: '3', viewValue: 'Auditor' },
        { value: '4', viewValue: 'Director' },
    ];
    basicPay_list: CommonListing[] = [
        { value: '1', viewValue: '1800' },
        { value: '2', viewValue: '2200' },
    ];
    gradePay_list: CommonListing[] = [
        { value: '1', viewValue: '1800' },
        { value: '2', viewValue: '2200' },
    ];
    payBand_list: CommonListing[] = [
        { value: '1', viewValue: '5200' },
        { value: '2', viewValue: '2200' },
    ];
    optionAvailed_list: CommonListing[] = [
        { value: 1, viewValue: 'Yes' },
        { value: 2, viewValue: 'No' },
    ];
    attachment_type_list: CommonListing[] = [
        { value: 'Supporting Document', viewValue: 'Supporting Document' },
    ];

    promotionForCtrl: FormControl = new FormControl();
    typeCtrl: FormControl = new FormControl();
    payScaleCtrl: FormControl = new FormControl();
    incrementAmtCtrl: FormControl = new FormControl();
    districtCtrl: FormControl = new FormControl();
    empClassCtrl: FormControl = new FormControl();
    cardexNumberCtrl: FormControl = new FormControl();
    ddoNumberCtrl: FormControl = new FormControl();
    desiCtrl: FormControl = new FormControl();
    basicPayCtrl: FormControl = new FormControl();
    payBandCtrl: FormControl = new FormControl();
    gradePayCtrl: FormControl = new FormControl();
    optionAvailedCtrl: FormControl = new FormControl();
    attachmentTypeCtrl: FormControl = new FormControl();
    cellIdCtrl: FormControl = new FormControl();
    payLevelCtrl: FormControl = new FormControl();
    gradeCtrl: FormControl = new FormControl();

    fileBrowseIndex: number;
    brwoseData: AttachmentDetails[] = [{
        name: undefined,
        file: undefined,
        attachment: 'Final Order'
    }];
    dataSourceBrowse = new MatTableDataSource<AttachmentDetails>(this.brwoseData);
    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];


    constructor(
        public fb: FormBuilder,
        private toastr: ToastrService,
        public dialog: MatDialog,
        private el: ElementRef) {

        for (let startCount = 1, idValue = 1; startCount <= 40; startCount++ , idValue++) {
            const objData = {
                'value': idValue, 'viewValue': startCount.toString()
            };
            this.cellId_list.push(objData);
        }
    }

    ngOnInit() {
        this.errorMessage = pvuMessage;
        this.deemeedDateForm = this.fb.group({
            officeName: [''],
            promotionFor: ['1'],
            orderNumber: [''],
            orderDate: [''],
            effectiveDate: [''],
            type: [''],
            employeeNumber: [''],
            employeeName: [''],
            employeeClass: [''],
            employeeDesignation: [''],
            seniorEmpGrade: [''],
            seniorEmpScale: [''],
            seniorEmpPayLevel: [''],
            seniorEmpCellId: [''],
            seniorEmpPayBand: [''],
            seniorEmpPayBandValue: [''],
            seniorEmpGradePay: [''],
            employeeBasicPay: [''],
            dateOfJoining: [''],
            dateOfRetirement: [''],
            benefitEffictiveDate: [''],
            employeeOfficeName: [''],
            searchEmpJunior: [''],
            employeeNameJun: [''],
            employeeClassJun: [''],
            employeeDesignationJun: [''],
            employeeOfficeNameJun: [''],
            juniorEmpGrade: [''],
            juniorEmpScale: [''],
            juniorEmpPayLevel: [''],
            juniorEmpCellId: [''],
            juniorEmpPayBand: [''],
            juniorEmpPayBandValue: [''],
            juniorEmpGradePay: [''],
            employeeBasicPayJun: [''],
            benefitEffictiveDateJun: [''],
            empClass: [''],
            designation: [''],
            optionAvailed: [''],
            optionAvailedDate: [''],
            grade: [''],
            payScale: [''],
            payBand: [''],
            payBandValue: [''],
            gradePay: [''],
            payLevel: [''],
            cellId: [''],
            basicPay: [''],
            dateOfNextIncrement: [''],
            benefitDate: [''],
            notionalFromDate: [''],
            notionalToDate: [''],
            duration: ['']
        });
        this.containers.push(this.containers.length);

        this.promotionChange();
    }

    promotionChange() {
        const deemeedDateFormValue = this.deemeedDateForm.value;
        this.showFifthPayCommField = false;
        this.showSixthPayCommField = false;
        this.showSeventhPayCommField = false;
        this.displayedAry = ['employeeNumber', 'employeeName', 'employeeClass', 'employeeDesignation', 'seniorEmpGrade',
        'seniorEmpScale', 'seniorEmpPayLevel', 'seniorEmpCellId', 'seniorEmpPayBand', 'seniorEmpPayBandValue',
        'seniorEmpGradePay', 'employeeBasicPay', 'dateOfJoining', 'dateOfRetirement', 'employeeOfficeName', 'benefitEffictiveDate',
        'searchEmpJunior', 'employeeNameJun', 'employeeClassJun', 'employeeDesignationJun', 'employeeOfficeNameJun',
        'juniorEmpGrade', 'juniorEmpScale', 'juniorEmpPayLevel', 'juniorEmpCellId', 'juniorEmpPayBand',
        'juniorEmpPayBandValue', 'juniorEmpGradePay', 'employeeBasicPayJun', 'benefitEffictiveDateJun'];
        switch (deemeedDateFormValue.promotionFor) {
            case '1':
                this.showSeventhPayCommField = true;
                this.resetFields(this.deemeedDateForm, this.displayedAry);
                break;
            case '2':
                this.showSixthPayCommField = true;
                this.resetFields(this.deemeedDateForm, this.displayedAry);
                break;
            case '3':
                this.showFifthPayCommField = true;
                this.resetFields(this.deemeedDateForm, this.displayedAry);
                break;
        }
    }

    resetFields(form, formFields) {
        formFields.forEach(element => {
            form.controls[element].reset();
        });
    }

    saveEstimate(data) {

    }
    openDialogSenEmployeeNumber() {
        const dialogRef = this.dialog.open(SearchEmployeeComponent, {
            width: '800px',
        });

        dialogRef.afterClosed().subscribe(result => {
            this.deemeedDateForm.patchValue({
                employeeNumber: '1278456976',
                employeeName: 'Amit Pandey',
                employeeClass: 'Class I',
                employeeDesignation: 'Teacher',
                seniorEmpPayLevel: 'Level 1',
                seniorEmpCellId: '1',
                seniorEmpPayBand: '2400',
                seniorEmpPayBandValue: '1800',
                seniorEmpGradePay: '5200',
                seniorEmpGrade: 'S-1',
                seniorEmpScale: '2550-55-2660-60-3200',
                employeeBasicPay: '7600',
                dateOfJoining: '26/11/2019',
                dateOfRetirement: '26/11/2019',
                employeeOfficeName: 'Office 1',
                benefitEffictiveDate: '26/11/2019',
            });
        });
    }

    openDialogJunEmployeeNumber() {
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(SearchEmployeeComponent, {
            width: '800px',
        });

        dialogRef.afterClosed().subscribe(result => {
            this.deemeedDateForm.patchValue({
                searchEmpJunior: '1008006000',
                employeeNameJun: 'Pankaj Gupta',
                employeeClassJun: 'Class III',
                employeeDesignationJun: 'Junior Accountant',
                employeeOfficeNameJun: 'Office 1',
                juniorEmpGrade: 'S-1',
                juniorEmpScale: '2550-55-2660-60-3200',
                juniorEmpPayLevel: 'Level 1',
                juniorEmpCellId: '1',
                juniorEmpPayBand: '2400',
                juniorEmpPayBandValue: '1800',
                juniorEmpGradePay: '5200',
                employeeBasicPayJun: '7600',
                benefitEffictiveDateJun: '26/11/2019',
            });


        });
    }
    emplyeeeDataList() {
        this.emplyeeeDataListShow = !this.emplyeeeDataListShow;
    }
    showCurrentDetails(event) {
        if (event.value === '3') {
            this.currentDetails = true;
        } else {
            this.currentDetails = false;
        }
    }
    submitDetails() {
        this.toastr.success('Data  Uploaded Successfully');
    }
    add() {
        this.containers.push(this.containers.length);
    }
    deleteRow(index) {
        this.containers.splice(index, 1);
    }
    modalboxPopup() {
    }
    goToDashboard() { }
    changeEvent(changeval) {
        if (changeval.value === 1) {
            this.showDate = true;
        } else {
            this.showDate = false;
        }
    }

    calcBasicPay() {
        const gradePay = this.gradePay_list.filter(gP => {
            return gP.value === this.deemeedDateForm.value.gradePay;
        });
        // tslint:disable-next-line: max-line-length
        this.deemeedDateForm.controls.basicPay.setValue(Number(gradePay[0]['viewValue']) + Number(this.deemeedDateForm.value.payScaleValue));
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

    addBrowse() {
        if (this.dataSourceBrowse) {
            const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
            if (data && data.file) {
                const p_data = this.dataSourceBrowse.data;
                p_data.push({
                    name: undefined,
                    file: undefined,
                    attachment: 'Supporting Document'
                });
                this.dataSourceBrowse.data = p_data;
            } else {
            }
        }
    }

    deleteBrowse(index) {
        this.dataSourceBrowse.data.splice(index, 1);
        this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    }
}





