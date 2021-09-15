import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatTableDataSource } from '@angular/material';
import { ExamDetails, AttachmentDetails } from 'src/app/model/senior-scale';
import { CommonListing } from 'src/app/model/common-listing';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
//import { TabelElement } from 'src/app/model/ddo-offices-create';
import { TabelElement } from 'src/app/model/attatchment';
@Component({
    selector: 'app-senior-scale',
    templateUrl: './senior-scale.component.html',
    styleUrls: ['./senior-scale.component.css']
})
export class SeniorScaleComponent implements OnInit {
 
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
    seniorScaleForm: FormGroup;
    currentDetailsForm: FormGroup;
    show7thPC: Boolean = true;
    show6thPC: Boolean = false;
    showFifthPayCommField: Boolean = false;


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

    pay_commission_list: CommonListing[] = [
        { value: '1', viewValue: '7th Pay Commission' },
        { value: '2', viewValue: '6th Pay Commission' },
        { value: '3', viewValue: '5th Pay Commission' },
    ];
    type_list: CommonListing[] = [
        { value: '1', viewValue: 'Senior Scale' },

    ];
    cas_type_list: CommonListing[] = [
        { value: '1', viewValue: 'Senior Scale' },
        { value: '2', viewValue: 'Selection Grade' },
        { value: '3', viewValue: 'Selection Grade (3 Years)' },

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
    payLevel_list: CommonListing[] = [
        { value: '1', viewValue: 'Level 1' },
        { value: '2', viewValue: 'Level 2' },
        { value: '1', viewValue: 'Level 3' },
        { value: '2', viewValue: 'Level 4' },
        { value: '1', viewValue: 'Level 5' },
        { value: '2', viewValue: 'Level 6' },
        { value: '1', viewValue: 'Level 7' },
        { value: '2', viewValue: 'Level 8' },
        { value: '1', viewValue: 'Level 9' },
        { value: '2', viewValue: 'Level 10' },
        { value: '1', viewValue: 'Level 11' },
        { value: '2', viewValue: 'Level 12' },
        { value: '1', viewValue: 'Level 13' },
        { value: '2', viewValue: 'Level 14' },
        { value: '1', viewValue: 'Level 15' },
        { value: '2', viewValue: 'Level 16' },
        { value: '1', viewValue: 'Level 17' },
        { value: '2', viewValue: 'Level 18' },
    ];
    cellId_list: CommonListing[] = [
    ];

    postCellId_list: CommonListing[] = [
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
    optionAvailed_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];

    gradePay_list: CommonListing[] = [
        { value: '1', viewValue: '1800' },
        { value: '2', viewValue: '2200' },
    ];

    attachment_type_list: CommonListing[] = [
        { value: 'Supporting Document', viewValue: 'Supporting Document' },
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

    payCommissionCtrl: FormControl = new FormControl();
    typeCtrl: FormControl = new FormControl();
    casTypeCtrl: FormControl = new FormControl();
    incrementCtrl: FormControl = new FormControl();
    payLevelCtrl: FormControl = new FormControl();
    cellIdCtrl: FormControl = new FormControl();
    postCellIdCtrl: FormControl = new FormControl();
    payBandCtrl: FormControl = new FormControl();
    payBandValueCtrl: FormControl = new FormControl();
    gradePayCtrl: FormControl = new FormControl();
    optionAvailedCtrl: FormControl = new FormControl();
    attachmentTypeCtrl: FormControl = new FormControl();
    gradeCtrl: FormControl = new FormControl();
    payScaleCtrl: FormControl = new FormControl();

   
    ELEMENT_DATA_CCC: ExamDetails[] = [{
        examName: 'Auto Populate', examBody: 'Auto Populate', dateOfPassing: 'Auto Populate', status: 'Auto Populate'
    }];
    ELEMENT_DATA_DEPT: ExamDetails[] = [{
        examName: 'Auto Populate', examBody: 'Auto Populate', dateOfPassing: 'Auto Populate', status: 'Auto Populate'
    }];

    ELEMENT_DATA_LANG: ExamDetails[] = [{
        langName: 'Auto Populate', examBody: 'Auto Populate', dateOfPassing: 'Auto Populate', status: 'Auto Populate'
    }];

    CCC_DATA_FILLED: ExamDetails[] = [{
        examName: 'CCC+ Theory', examBody: 'ExamBody 1', dateOfPassing: '30/10/2019', status: 'Pass'
    }];

    DEPT_DATA_FILLED: ExamDetails[] = [{
        examName: 'Exam 1', examBody: 'ExamBody 1', dateOfPassing: '30/10/2019', status: 'Pass'
    }];

    LANG_DATA_FILLED: ExamDetails[] = [{
        langName: 'Gujarati', examBody: 'ExamBody 1', dateOfPassing: '30/10/2019', status: 'Pass'
    }];

     dataSourceCCC = new MatTableDataSource<ExamDetails>(this.ELEMENT_DATA_CCC);
    //dataSourceCCC = new MatTableDataSource(this.ELEMENT_DATA);
    dataSourceFilled = new MatTableDataSource<ExamDetails>(this.CCC_DATA_FILLED);
    displayedCCCColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

    dataSourceDept = new MatTableDataSource<ExamDetails>(this.ELEMENT_DATA_DEPT);
    dataSourceDeptFilled = new MatTableDataSource<ExamDetails>(this.DEPT_DATA_FILLED);
    displayedDeptColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

    dataSourceLang = new MatTableDataSource<ExamDetails>(this.ELEMENT_DATA_LANG);
    dataSourceLangFilled = new MatTableDataSource<ExamDetails>(this.LANG_DATA_FILLED);
    displayedLangColumns = ['langName', 'examBody', 'dateOfPassing', 'status'];

    
    date: Date = new Date();
    showDate = false;
    val: number;
    autopopulated = false;
    showDataEmployee: Boolean = false;
    errorMessage;

    constructor(
        private fb: FormBuilder,
        private toastr: ToastrService,
        public dialog: MatDialog,
        private el: ElementRef) {
    }

    ngOnInit() {
        this.errorMessage = pvuMessage;
        this.seniorScaleForm = this.fb.group({
            officeName: [''],
            payCommission: ['1'],
            eventOrderNo: ['', Validators.required],
            eventOrderDate: ['', Validators.required],
            eventEffectiveDate: ['', Validators.required],
            type: ['', Validators.required],
            casType: ['', Validators.required],
            empNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            empName: [''],
            class: [''],
            designation: [''],
            employeeOfficeName: [''],
            payBand: [''],
            payBandValue: [''],
            gradePay: [''],
            payLevel: [''],
            cellId: [''],
            basicPay: [''],
            dateOfJoining: [''],
            dateOfNextIncrement: [''],
            increment: [''],
            optionAvailed: ['', Validators.required],
            optionDate: ['', Validators.required],
            benefitEffectiveDate: ['', Validators.required],
            remarks: [''],
            postCellId: [''],
            postPayBandValue: [''],
            grade: [''],
            payScale: [''],
            currentGrade: [''],
            currentScale: [''],
            dateOfRetirement: ['']
        });
        this.containers.push(this.containers.length);
        // this.seniorScaleForm.controls.payCommission.patchValue('1');
        this.onPayCommissionSelect();
        for (let startCount = 1, idValue = 1; startCount <= 40; startCount++ , idValue++) {
            const objData = {
                'value': idValue, 'viewValue': startCount.toString()
            };
            this.cellId_list.push(objData);
            this.postCellId_list.push(objData);
        }

    }

    onPayCommissionSelect() {
        const seniorScaleFormValue = this.seniorScaleForm.value;
        this.showFifthPayCommField = false;
        this.show6thPC = false;
        this.show7thPC = false;
        switch (seniorScaleFormValue.payCommission) {
            case '1':
                this.show7thPC = true;
                break;
            case '2':
                this.show6thPC = true;
                break;
            case '3':
                this.showFifthPayCommField = true;
                break;
        }
    }

    onPayBandSelect(pb) {
    }

    saveEstimate(data) {
    }
    openDialogEmployeeNumber() {
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(SearchEmployeeComponent, {
            width: '800px',
        });

        dialogRef.afterClosed().subscribe(result => {
            this.seniorScaleForm.patchValue({
                empNo: '1278456976',
                empName: 'Pankaj Gupta',
                class: 'Class III',
                designation: 'Teacher',
                employeeOfficeName: 'Office 1',
                payBand: '1S (4440-7440)',
                payBandValue: '4440',
                gradePay: '1300',
                payLevel: 'Level 1',
                cellId: '1',
                basicPay: '5740',
                dateOfNextIncrement: '29/10/2019',
                dateOfJoining: '29/10/2019',
                currentGrade: 'S-1',
                currentScale: '2550-55-2660-60-3200',
            });

            this.dataSourceCCC = this.dataSourceFilled;
            this.dataSourceDept = this.dataSourceDeptFilled;
            this.dataSourceLang = this.dataSourceLangFilled;
        });
    }




    showEmployee() {
        this.showDataEmployee = !this.showDataEmployee;
    }
    showCurrentDetails(event) {
        if (event.value === '3') {
            this.currentDetails = true;
        } else {
            this.currentDetails = false;
        }
    }
    submitDetails() {
        this.toastr.success('Data Uploaded Successfully');
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
    resetForm() {
        this.seniorScaleForm.reset();
    }
    changeEvent(changeval) {
        if (changeval.value === 1) {
            this.showDate = true;
        } else {
            this.showDate = false;
        }
    }

    calcBasicPay() {
        const gradePayList = this.gradePay_list.filter(gradePay => {
            return gradePay.value === this.seniorScaleForm.value.gradePay;
        });
        // tslint:disable-next-line: max-line-length
        this.seniorScaleForm.controls.basicPay.setValue(Number(gradePayList[0]['viewValue']) + Number(this.seniorScaleForm.value.postPayBandValue));
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

