
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
    selector: 'app-promotion-forgo',
    templateUrl: './promotion-forgo.component.html',
    styleUrls: ['./promotion-forgo.component.css']
})
export class PromotionForgoComponent implements OnInit {
    containers = [];
    currentDetails: Boolean = false;
    initiatiomdate: any = new Date();
    promotionForgo: FormGroup;
    currentDetailsForm: FormGroup;
    promotionFor_list: CommonListing[] = [
        { value: '1', viewValue: '7th Pay Commission' },
        { value: '2', viewValue: '6th Pay Commission' },
        { value: '3', viewValue: '5th Pay Commission' },
    ];
    type_list: CommonListing[] = [
        { value: '1', viewValue: 'Promotion with Forgo ' },
    ];
    class_list: CommonListing[] = [
        { value: '1', viewValue: 'Class I' },
    ];
    designation_list: CommonListing[] = [
        { value: '1', viewValue: 'Teacher' },
        { value: '2', viewValue: 'Accountent' },
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
        { value: '4', viewValue: '4' },
        { value: '5', viewValue: '5' },
        { value: '6', viewValue: '6' },
        { value: '7', viewValue: '7' },
        { value: '8', viewValue: '8' },
        { value: '9', viewValue: '9' },
        { value: '10', viewValue: '10' },
        { value: '11', viewValue: '11' },
        { value: '12', viewValue: '12' },
        { value: '13', viewValue: '13' },
        { value: '14', viewValue: '14' },
        { value: '15', viewValue: '15' },
        { value: '16', viewValue: '16' },
        { value: '17', viewValue: '17' },
        { value: '18', viewValue: '18' },
        { value: '19', viewValue: '19' },
        { value: '20', viewValue: '20' },
        { value: '21', viewValue: '21' },
        { value: '22', viewValue: '22' },
        { value: '23', viewValue: '23' },
        { value: '24', viewValue: '24' },
        { value: '25', viewValue: '25' },
        { value: '26', viewValue: '26' },
        { value: '27', viewValue: '27' },
        { value: '28', viewValue: '28' },
        { value: '29', viewValue: '29' },
        { value: '30', viewValue: '30' },
        { value: '31', viewValue: '31' },
        { value: '32', viewValue: '32' },
        { value: '33', viewValue: '33' },
        { value: '34', viewValue: '34' },
        { value: '35', viewValue: '35' },
        { value: '36', viewValue: '36' },
        { value: '37', viewValue: '37' },
        { value: '38', viewValue: '38' },
        { value: '39', viewValue: '39' },
        { value: '40', viewValue: '40' },
    ];
    gradePay_list: CommonListing[] = [
        { value: '1', viewValue: '1800' },
        { value: '2', viewValue: '2200' },
    ];
    payBand_list: CommonListing[] = [
        { value: '1', viewValue: '5200' },
        { value: '2', viewValue: '2200' },
    ];
    joinPromotionalPost_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];
    higherGrade_list: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];
    grade_list: CommonListing[] = [
        { value: '1', viewValue: 'S-4' },
    ];
    scale_list: CommonListing[] = [
    { value: '1', viewValue: '2750-70-3800-75-4400' },
    ];
    promotionForCtrl: FormControl = new FormControl();
    typeCtrl: FormControl = new FormControl();
    classCtrl: FormControl = new FormControl();
    designationCtrl: FormControl = new FormControl();
    payLevelCtrl: FormControl = new FormControl();
    cellIdCtrl: FormControl = new FormControl();
    payBandCtrl: FormControl = new FormControl();
    gradePayCtrl: FormControl = new FormControl();
    higherGradeCtrl: FormControl = new FormControl();
    gradeCtrl: FormControl = new FormControl();
    scaleCtrl: FormControl = new FormControl();
    joinPromotionalPostCtrl: FormControl = new FormControl();
    date = new FormControl(new Date());
    showDate: Boolean = false;
    val: number;
    promotionFor;
    errorMessage;
    newDynamic: any = {};
    emplyeeeDataListShow: Boolean = false;
    showSeventhPayCommField = false;
    showSixthPayCommField = false;
    showFifthPayCommField = false;
    joiningDate: Boolean = false;
    constructor(private el: ElementRef,private fb: FormBuilder, private toastr: ToastrService, public dialog: MatDialog) { }
    fileBrowseIndex: number;
    brwoseData: any[] = [{
    name: undefined,
    file: undefined,
    attachment: 'Final Order'
  }];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

  attachment_type_list: any[] = [
    { value: 'Supporting Document', viewValue: 'Supporting Document' },
  ];

  attachmentTypeCtrl: FormControl = new FormControl();
  filteredAttachmentType: FormControl = new FormControl();
    ngOnInit() {
        this.errorMessage = pvuMessage;
        this.promotionForgo = this.fb.group({
            promotionFor: ['1'],
            eventOrderNumbers: ['', Validators.required],
            eventEffectiveDate: [''],
            officeName: [''],
            type: [''],
            employeeNumber: [''],
            employeeName: [''],
            employeeClass: [''],
            employeeDesignation: [''],
            employeeOfficeName: [''],
            employeePayLevel: [''],
            employeeCellId: [''],
            employeePayBand: [''],
            employeeGradePay: [''],
            employeeBasicPay: [''],
            dateOfNextIncrement: [''],
            employeeDoj: [''],
            class: [''],
            designation: [''],
            payLevel: [''],
            cellId: [''],
            payBand: [''],
            gradePay: [''],
            payBandValue: [''],
            employeePayBandValue: [''],
            dateofHigherGradeCurrent: [''],
            eventOrderDate: [''],
            promotionForgoDate: [''],
            promotionDate: [''],
            dateOfNextIncrementCurrent: [''],
            higherGrade: [''],
            employeePayBandValueDetails: [''],
            employeeBasicPayDetails: [''],
            dateOfHigherGradeOne: [''],
            dateOfHigherGradeTwo: [''],
            dateOfHigherGradeThree: [''],
            dateOfRetirement: [''],
            grade: [''],
            scale: [''],
            gradeCurrent: [''],
            scaleCurrent: [''],
            joinPromotionalPost: [''],
            joiningDate: ['']
        });
        this.containers.push(this.containers.length);
        this.promotionChange();
    }
    promotionChange() {
        const revisionFormValue = this.promotionForgo.value;
        this.showSixthPayCommField = false;
        this.showSeventhPayCommField = false;
        this.showFifthPayCommField = false;
        switch (revisionFormValue.promotionFor) {
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
    saveEstimate(data) {
    }
    emplyeeeDataList() {
        this.emplyeeeDataListShow = !this.emplyeeeDataListShow;
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
    openDialogEmployeeNumber() {
        const dialogRef = this.dialog.open(SearchEmployeeComponent, {
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(result => {
            this.promotionForgo.patchValue({
                employeeNumber: '1278456976',
                employeeName: 'Amit Pandey',
                employeeClass: 'Class I',
                employeeDesignation: 'Teacher',
                employeeOfficeName: 'Office 1',
                employeePayLevel: 'Level 1',
                employeeCellId: '1',
                employeePayBand: '1S (4440-7440)',
                employeePayBandValue: '5200',
                employeePayBandValueDetails: '4440',
                employeeGradePay: '1300',
                employeeBasicPay: '5740',
                dateOfNextIncrementCurrent: '26/11/2019',
                employeeDoj: '26/11/2019',
                locationName: 'Ahemdabad',
                DateofPassing: '22/11/2019',
                dateOfRetirement: '21/11/2022',
                dateofHigherGradeCurrent: '25/11/2019',
                examName: 'UPSC',
                gradeCurrent: 'S-4',
                scaleCurrent: '2750-70-3800-75-4400'
            });
        });
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
    goToDashboard() { }
    print() { }
    basicPay() {
        const gradePayList = this.gradePay_list.filter(gradePay => {
            return gradePay.value === this.promotionForgo.value.gradePay;
          });
        this.promotionForgo.controls.employeeBasicPayDetails.setValue(Number(gradePayList[0]['viewValue']) + Number(this.promotionForgo.value.employeePayBandValueDetails));
    }
    resetForm() {
        this.promotionForgo.reset();
    }
    changeEvent(changeval) {
        if (changeval.value === '1') {
            this.showDate = true;
        } else {
            this.showDate = false;
        }
    }
    joinPromotionalPost(event) {
        if (event.value === '1') {
            this.joiningDate = true;
        } else {
            this.joiningDate = false;
        }
    }
}

