import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
import { TabelElement } from 'src/app/model/attatchment';


@Component({
    selector: 'app-assured-career-progression',
    templateUrl: './assured-career-progression.component.html',
    styleUrls: ['./assured-career-progression.component.css']
})
export class AssuredCareerProgressionComponent implements OnInit {
    ddoForm: FormGroup;
   isNonDDO = false;
  DDO: Boolean = true;
  tabDisable: Boolean = true;
  selectedIndex: number;
  fileBrowseIndex: number;
  department: String = 'Agriculture & Co-Operation Department';
  hod: String = 'Secretary to Legislative and Parliamentary Affairs Department';
  employeeName: String;

    containers = [];
    date = new Date((new Date()));
    effectiveDate = new Date((new Date()));
    errorMessage;
    acpForm: FormGroup;
    fileDetailsEmp: Boolean = false;
    showDataEmployee: Boolean = false;
    showAcpSubType: Boolean = false;
    showSeventhPayCommField = false;
    showSixthPayCommField = false;
    showFifthPayCommField = false;
    showDeclinedPromotion = false;
    basicPayCalc: Boolean = true;
    personalGroundIfYes: Boolean = false;
    personalGroundIfNo: Boolean = false;
    fileData;
    fileBrowseEmp: Boolean = true;
    payCommissionCtrl: FormControl = new FormControl();
    typeCtrl: FormControl = new FormControl();
    payLevelCtrl: FormControl = new FormControl();
    payBandCtrl: FormControl = new FormControl();
    gradePayCtrl: FormControl = new FormControl();
    cellIdCtrl: FormControl = new FormControl();
    gradeCtrl: FormControl = new FormControl();
    payScaleCtrl: FormControl = new FormControl();
    districtCtrl: FormControl = new FormControl();
    departmentalExamPasedCtrl: FormControl = new FormControl();
    cardexNumberCtrl: FormControl = new FormControl();
    ddoNumberCtrl: FormControl = new FormControl();
    gpscExamPasedCtrl: FormControl = new FormControl();
    computerExamPasedCtrl: FormControl = new FormControl();
    basicPayCtrl: FormControl = new FormControl();
    languageExamPasedCtrl: FormControl = new FormControl();
    subTypeCtrl: FormControl = new FormControl();



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


    promotionFor_list: CommonListing[] = [
        { value: '1', viewValue: '7th Pay Commission' },
        { value: '2', viewValue: '6th Pay Commission' },
        { value: '3', viewValue: '5th Pay Commission' },
    ];
    type_list: CommonListing[] = [
        { value: '1', viewValue: 'ACP' }
    ];
    subType_list: CommonListing[] = [
        { value: '1', viewValue: 'ACP 1' },
        { value: '2', viewValue: 'ACP 2' }
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
        { value: '1', viewValue: '2400' },
        { value: '2', viewValue: '3200' },
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
    cellId_list: CommonListing[] = [
        { value: '1', viewValue: '1' },
        { value: '2', viewValue: '2' },
        { value: '3', viewValue: '3' },
        { value: '4', viewValue: '4' }
    ];

    grade_list: CommonListing[] = [
        { value: '1', viewValue: 'S-1' },
        { value: '2', viewValue: 'S-2' }
    ];
    payScale_list: CommonListing[] = [
        { value: '1', viewValue: '12850-300-13150-350-15950-400-17550' }
    ];

    departmentalExamPased_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
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
    cardexNumber_list: CommonListing[] = [
        { value: '1', viewValue: '0796' },
        { value: '2', viewValue: '2797' },
    ];
    ddoNumber_list: CommonListing[] = [
        { value: '1', viewValue: '9875' },
        { value: '2', viewValue: '9874' },
    ];
    optionAvailed_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];
    gpscExamPased_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];
    computerExamPased_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];
    languageExamPased_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];
    declinedPromotion_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];
    basicPay_list: CommonListing[] = [
        { value: '1', viewValue: '1800' },
        { value: '2', viewValue: '2200' },
    ];
    gradePay_list: CommonListing[] = [
        { value: '1', viewValue: '8500' },
        { value: '2', viewValue: '2200' },
    ];
    scale6ThPay_list: CommonListing[] = [
        { value: '1', viewValue: '39600-930-40530-1080-49170-1240-54130' },
    ];
    headerColumn = ['attachmentBrowse', 'remarks', 'action'];
    data = {
        attachmentBrowse: '',
        remarks: '',
        action: ''
    };


    attachment_type_list: any[] = [
        { value: 'Supporting Document', viewValue: 'Supporting Document' },
    ];

    attachmentTypeCtrl: FormControl = new FormControl();
    filteredAttachmentType: FormControl = new FormControl();
    declinedPromotionCtrl: FormControl = new FormControl();
    benefitEffectiveCtrl: FormControl = new FormControl();
    scale6ThPayCtrl: FormControl = new FormControl();
    dataSource = new MatTableDataSource([this.data]);

    dataSource1 = new MatTableDataSource;
    displayedColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

    dataSourceDept = new MatTableDataSource;
    displayedDeptColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

    dataSourceLang = new MatTableDataSource;
    displayedLangColumns = ['langName', 'examBody', 'dateOfPassing', 'status'];
    toastr: any;

    constructor(private fb: FormBuilder, public dialog: MatDialog, private el: ElementRef, private route: Router) {
        for (let startCount = 1, idValue = 1; startCount <= 40; startCount++ , idValue++) {
            const objData = {
                'value': idValue, 'viewValue': startCount.toString()
            };
            this.cellId_list.push(objData);
        }
    }

    ngOnInit() {
        this.createForm();
        this.errorMessage = pvuMessage;
        this.containers.push(this.containers.length);
        this.promotionChange(event);
    }
        createForm() {
            this.acpForm = this.fb.group({
                payCommission: ['1'],
                officeName: [''],
                eventOrderDate: [''],
                date: [''],
                acpOrderNo: [''],
                eventEffectiveDate: [''],
                type: [''],
                subType: [''],
                employeesNumber: [''],
                employeeName: [''],
                class: [''],
                designation: [''],
                empofficeName: [''],
                payLevel: [''],
                payBand: [''],
                cellId: [''],
                basicPay: [''],
                gradePay: [''],
                effectiveDate: [''],
                employeeDoj: [''],
                employeePayLevel: [''],
                employeeCellId: [''],
                currentScale: [''],
                currentGrade: [''],
                payScale: [''],
                grade: [''],
                empBasicPay: ['Auto Calculated'],
                dateOfRetirement: [''],
                currentPayBand: [''],
                currentPayBandValue: [''],
                currentGradePay: [''],
                declinedPromotion: ['2'],
                payBandValue: [''],
                benefitEffectiveDate: [''],
                scale6ThPay: [''],
                currentScale6ThPay: [''],
                empBasicPay6ThPay: ['']
            });
        }
    addRow() {
        const p_data = this.dataSource.data;
        p_data.push(this.data);
        this.dataSource.data = p_data;
    }

    deleteRow(index) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
    }

    onFileSelection(fileSelected) {
        if (fileSelected.target && fileSelected.target.files) {
            this.fileData = fileSelected.target.files[0];
            this.fileDetailsEmp = true;
        }
        this.fileBrowseEmp = false;
    }

    openFileSelector() {
        this.el.nativeElement.querySelector('#fileBrowse-emp').click();
    }

    showEmployee() {
        this.showDataEmployee = !this.showDataEmployee;
    }


    promotionChange(event) {
        const acpForm = this.acpForm.value;
        this.showSeventhPayCommField = false;
        this.showSixthPayCommField = false;
        this.showFifthPayCommField = false;
        // this.basicPayCalc = true;
        switch (acpForm.payCommission) {
            case '1':
                this.showSeventhPayCommField = true;
                this.basicPayCalc = true;
                this.acpForm.controls.empBasicPay.setValue('8500');
                break;
            case '2':
                this.showSixthPayCommField = true;
                this.basicPayCalc = true;
                this.acpForm.controls.empBasicPay.setValue('40530');
                this.acpForm.controls.currentScale.setValue('33090-930-40530-1080-45930');
                this.acpForm.controls.empBasicPay6ThPay.setValue('49170');
                break;
            case '3':
                this.showFifthPayCommField = true;
                this.basicPayCalc = false;
                this.acpForm.controls.empBasicPay.setValue('13500');
                break;
        }
    }
    selectDeclinedPromotion(event) {
        if (event.value === '1') {
            this.benefitEffectiveCtrl.patchValue(new Date('01/01/2016'));
            this.acpForm.patchValue({
                payLevel: '1',
                cellId: '1',
                gradePay: '1',
                payBand: '1',
                payBandValue: '2400',
                grade: '1',
                payScale: '1',
                empBasicPay: '8500',
            });
         } else if (event.value === '2') {
            this.acpForm.controls.payBand.reset();
            this.acpForm.controls.payBandValue.reset();
            this.acpForm.controls.gradePay.reset();
            this.acpForm.controls.payLevel.reset();
            this.acpForm.controls.cellId.reset();
            this.acpForm.controls.grade.reset();
            this.acpForm.controls.payScale.reset();
            this.acpForm.controls.empBasicPay.reset();
            this.acpForm.controls.benefitEffectiveDate.reset();
         }

        }
        add() {
            this.containers.push(this.containers.length);
        }
        onFileSelectionAttch(fileSelected) {
            if (fileSelected.target && fileSelected.target.files) {
                this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
            }
        }

        openFileSelectorAttch(index) {
            this.el.nativeElement.querySelector('#fileBrowse').click();
            this.fileBrowseIndex = index;
        }
        onBrowseSelectChange() { }
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
     openDialogEmployeeNumber() {
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(SearchEmployeeComponent, {
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(result => {
            this.acpForm.patchValue({
                employeesNumber: result[0]['employeeNumber'],
                employeeName: 'Rakesh Jain',
                class: 'Class I',
                designation: 'District Judge',
                empofficeName: result[0]['officeName'],
                basicPay: '13150',
                gradePay: '1200',
                payBand: '5200-2200',
                employeeCellId: '1',
                employeePayLevel: 'Level 1',
                employeeDoj: '22/10/2019',
                dateOfRetirement: '22/10/2025',
                currentGrade: 'S-1',
                currentScale: '10750-300-13150-350-14900',
                currentScale6ThPay: '33090-930-40530-1080-45930',
                currentPayBand: '2400',
                currentPayBandValue: '2400',
                currentGradePay: '5200',
            });

            const data = this.dataSource1.data;
            data.push({
                examName: 'CCC+ Theory',
                examBody: 'Exam Body 1',
                dateOfPassing: '22/10/2019',
                status: 'Pass',
            });
            this.dataSource1.data = data;

            const dataDept = this.dataSourceDept.data;
            dataDept.push({
                examName: 'Exam 1',
                examBody: 'Exam Body 1',
                dateOfPassing: '22/10/2019',
                status: 'Pass',
            });
            this.dataSourceDept.data = dataDept;

            const dataLang = this.dataSourceLang.data;
            dataLang.push({
                langName: 'Gujarati',
                examBody: 'Exam Body 1',
                dateOfPassing: '22/10/2019',
                status: 'Pass',
            });
            this.dataSourceLang.data = dataLang;
        });
    }
    goToDashboard() {

    }
    showAcpType(event) {
        if (event.value === '1') {
            this.showAcpSubType = true;
        }
    }
}
