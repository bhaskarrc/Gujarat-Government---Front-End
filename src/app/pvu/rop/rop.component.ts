
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
import { TabelElement } from 'src/app/model/attatchment';


@Component({
  selector: 'app-rop',
  templateUrl: './rop.component.html',
  styleUrls: ['./rop.component.css']
})
export class RopComponent implements OnInit {
    ddoForm: FormGroup;
    isNonDDO: boolean = false;
    DDO: Boolean = true;
    tabDisable: Boolean = true;
    selectedIndex: number;
    fileBrowseIndex: number;
    department: String = 'Agriculture & Co-Operation Department';
    hod: String = 'Secretary to Legislative and Parliamentary Affairs Department';
    employeeName: String;
    containers = [];
    doneHeader: Boolean = false;
    currentDetails: Boolean = false;
    ropForm: FormGroup;
    currentDetailsForm: FormGroup;

    ELEMENT_DATA: TabelElement[] = [
        {
            name: undefined,
            file: undefined,
            attachment: 'Sanction Order'
        },
        {
            name: undefined,
            file: undefined,
            attachment: 'Office Pay Fixation Order'
        },

        { name: undefined, file: undefined, attachment: 'Supporting Document' }
    ];


    rop_list: CommonListing[] = [
        { value: '1', viewValue: 'ROP - 1987' },
        { value: '2', viewValue: 'ROP - 1998' },
        { value: '3', viewValue: 'ROP - 2009' },
        { value: '4', viewValue: 'ROP - 2016' },
    ];
    type_list: CommonListing[] = [
        { value: '1', viewValue: 'Revision of Pay' },
    ];
    higherGradeType_list: CommonListing[] = [
        { value: '1', viewValue: 'Higher Pay Grade I' },
        { value: '2', viewValue: 'Higher Pay Grade II' },
        { value: '3', viewValue: 'Higher Pay Grade III' },
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
    payBand_list: CommonListing[] = [
        { value: '1', viewValue: 'PB-1 (5200-20200)' },
        { value: '2', viewValue: 'PB-2 (9300-34800)' },
        { value: '3', viewValue: 'PB-3 (15600-39100)' },
        { value: '4', viewValue: 'PB-4 (37400-67000)' },
        { value: '5', viewValue: '(67000-79000)' },
        { value: '6', viewValue: '(75500-80000)' },
        { value: '7', viewValue: '(80000)' },
        { value: '8', viewValue: '(90000)' },
    ];
    payLevel_list: CommonListing[] = [
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
    cellId_list: CommonListing[] = [
    ];
    gradePay_list: CommonListing[] = [
        { value: '1', viewValue: '1800' },
        { value: '2', viewValue: '2200' },
    ];
    optionAvailed_list: CommonListing[] = [
        { value: 1, viewValue: 'Yes' },
        { value: 2, viewValue: 'No' },
    ];

    reasonForChangeEffectiveDate_list: CommonListing[] = [
        { value: 1, viewValue: 'Promotion' },
        { value: 2, viewValue: 'Higher Pay Scale' },
        { value: 3, viewValue: 'EOL' },
        { value: 4, viewValue: 'Suspension' },
        { value: 5, viewValue: 'Other' },
    ];
    optionEmpType_list: CommonListing[] = [
        { value: '1', viewValue: 'GO' },
        { value: '2', viewValue: 'NGO' },
    ];

    attachment_type_list: CommonListing[] = [
        { value: 'Supporting Document', viewValue: 'Supporting Document' },
    ];

    postGrade_list: CommonListing[] = [
        { value: '1', viewValue: 'S-1' },
        { value: '2', viewValue: 'S-2' },
        { value: '3', viewValue: 'S-2A' },
        { value: '4', viewValue: 'S-3' },
    ];
    postScale_list: CommonListing[] = [
        { value: '1', viewValue: '2550-55-2660-60-3200' },
        { value: '2', viewValue: '2610-60-3150-65-3540' },
        { value: '3', viewValue: '2610-60-2910-65-3300-70-4000' },
        { value: '4', viewValue: '2650-65-3300-70-4000' },
    ];


    ropCtrl: FormControl = new FormControl();
    typeCtrl: FormControl = new FormControl();
    higherGradeTypeCtrl: FormControl = new FormControl();
    payBandCtrl: FormControl = new FormControl();
    gradePayCtrl: FormControl = new FormControl();
    payLevelCtrl: FormControl = new FormControl();
    cellIdCtrl: FormControl = new FormControl();
    optionAvailedCtrl: FormControl = new FormControl();
    optionTypeCtrl: FormControl = new FormControl();
    optionEmpTypeCtrl: FormControl = new FormControl();
    attachmentTypeCtrl: FormControl = new FormControl();
    postGradeCtrl: FormControl = new FormControl();
    postScaleCtrl: FormControl = new FormControl();
    reasonForChangeEffectiveDateCtrl: FormControl = new FormControl();
    date: Date = new Date();
    showDate: Boolean = false;
    showSubType: Boolean = false;
    errorMessage;
    val: number;
    newDynamic: any = {};
    showDataEmployee: Boolean = false;
    showSeventhPayCommField = false;
    showSixthPayCommField = false;
    showFifthPayCommField: Boolean = false;
    showFourthPayCommField: Boolean = false;
    showThirdPayCommField: Boolean = false;
    displayedAry: string[] = [];

    displayedBrowseColumns = [
        'sr_no',
        'attachmentType',
        'fileName',
        'browse',
        'uploadedFileName',
        'uploadedBy',
        'action'
    ];

    dataSourceofficestablishment = ['attachmentType', 'action'];
    dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
    nonDdoDataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
    constructor
        (
            private fb: FormBuilder,
            private toastr: ToastrService,
            public dialog: MatDialog,
            private el: ElementRef
        ) {
        for (let startCount = 1, idValue = 1; startCount <= 40; startCount++ , idValue++) {
            const objData = {
                'value': idValue, 'viewValue': startCount.toString()
            };
            this.cellId_list.push(objData);
        }
    }

    ngOnInit() {
        this.errorMessage = pvuMessage;
        this.ropForm = this.fb.group({
            officeName: [''],
            rop: ['4'],
            orderNumber: [''],
            orderDate: [''],
            effectiveDate: [''],
            type: [''],
            higherGradeType: [''],
            empNumber: [''],
            empName: [''],
            empClass: [''],
            empDesignation: [''],
            employeePayLevel: [''],
            employeeCellId: [''],
            employeePayBand: [''],
            employeePayBandValue: [''],
            employeeGradePay: [''],
            grade: [''],
            scale: [''],
            employeeBasicPay: [''],
            employeeDoj: [''],
            dateOfRetirement: [''],
            employeeOfficeName: [''],
            dateOfNextIncrementFatch: [''],
            dateOf1stHps: [''],
            dateOf2ndHps: [''],
            optionType: [''],
            optionEmpType: [''],
            optionAvailed: [''],
            optionAvailedDate: [''],
            payBand: [''],
            payBandValue: [''],
            gradePay: [''],
            payLevel: [''],
            cellId: [''],
            postGrade: [''],
            postScale: [''],
            empBasicPay: [''],
            dateOf1stHgEffective: [''],
            dateOf2stHgEffective: [''],
            dateOf3stHgEffective: [''],
            dateOfNextIncrement: [''],
            reasonForChangeEffectiveDate: ['']
        });
        this.containers.push(this.containers.length);
        this.promotionChange();
    }

    promotionChange() {
        const revisionFormValue = this.ropForm.value;
        this.showSixthPayCommField = false;
        this.showSeventhPayCommField = false;
        this.showFifthPayCommField = false;
        this.showFourthPayCommField = false;
        this.showThirdPayCommField = false;
        this.displayedAry = ['empNumber', 'empName', 'empClass', 'empDesignation', 'employeeOfficeName', 'employeeBasicPay', 'employeeDoj',
            'dateOfNextIncrementFatch', 'dateOfPromotion', 'promotionDesig', 'promotionScale', 'dateOfRetirement'];
        switch (revisionFormValue.rop) {
            case '1':
                this.showFourthPayCommField = true;
                this.resetFields(this.ropForm, this.displayedAry);
                break;
            case '2':
                this.showFifthPayCommField = true;
                this.resetFields(this.ropForm, this.displayedAry);
                break;
            case '3':
                this.showSixthPayCommField = true;
                this.resetFields(this.ropForm, this.displayedAry);
                break;
            case '4':
                  this.showSeventhPayCommField = true;
                  this.resetFields(this.ropForm, this.displayedAry);
                  break;
            case '4':
                    this.showThirdPayCommField = true;
                    this.resetFields(this.ropForm, this.displayedAry);
                  
        }
    }

    resetFields(form, formFields) {
        formFields.forEach(element => {
            form.controls[element].reset();
        });
    }

    emplyeeeDataList() {
        this.showDataEmployee = !this.showDataEmployee;
    }

    saveEstimate(data) {
    }
    openDialogEmployeeNumber() {
        const dialogRef = this.dialog.open(SearchEmployeeComponent, {
            width: '800px',
        });

        dialogRef.afterClosed().subscribe(result => {
            this.ropForm.patchValue({
                empNumber: '1278456976',
                empName: 'Amit Pandey',
                empClass: 'Class I',
                empDesignation: 'Teacher',
                employeeOfficeName: 'Office 1',
                employeePayLevel: 'Level 4',
                employeeCellId: '1',
                employeePayBand: '2400',
                employeePayBandValue: '2400',
                employeeGradePay: '5200',
                grade: 'S-1',
                scale: '2550-55-2660-60-3200',
                employeeBasicPay: '7600',
                employeeDoj: '29/10/2019',
                dateOfNextIncrementFatch: '29/10/2019',
                dateOfPromotion: '22/11/2019',
                dateOfRetirement: '29/10/2030'
            });
        });
    }
    getTabIndex(tabIndex) {
        this.selectedIndex = tabIndex;
    }
    showCurrentDetails(event) {
        if (event.value === '3') {
            this.currentDetails = true;
        } else {
            this.currentDetails = false;
        }
    }
    submitDetails() {
        this.toastr.success('Data submit successfully');
    }
    deleteRow(index) {
        this.containers.splice(index, 1);
    }
    goToDashboard() { }
    resetForm() {
        this.ropForm.reset();
    }
    changeEvent(changeval) {
        if (changeval.value === 1) {
            this.showDate = true;
        } else {
            this.showDate = false;
        }
    }

    changeTypeEvent(changeval) {
        if (changeval.value === 1) {
            this.showSubType = true;
        } else {
            this.showSubType = false;
        }
    }

    calcBasicPay() {
        const gradePayList = this.gradePay_list.filter(gradePay => {
            return gradePay.value === this.ropForm.value.gradePay;
        });
        // tslint:disable-next-line: max-line-length
        this.ropForm.controls.empBasicPay.setValue(Number(gradePayList[0]['viewValue']) + Number(this.ropForm.value.payBandValue));
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
            const data = this.dataSourceBrowse.data[
                this.dataSourceBrowse.data.length - 1
            ];
            if (data && data.name && data.file) {
                const p_data = this.dataSourceBrowse.data;
                p_data.push({
                    name: undefined,
                    file: undefined,
                    attachment: 'Supporting Document'
                });
                this.dataSourceBrowse.data = p_data;
            } else {
                this.toastr.error('Please fill the detail.');
            }
        }
    }
    addEmployeeName($event) {
        if ($event.target.value > 0) {
            this.employeeName = 'Mr. Pratik Shah';
        }
    }

    deleteBrowse(index) {
        this.dataSourceBrowse.data.splice(index, 1);
        this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    }
}


