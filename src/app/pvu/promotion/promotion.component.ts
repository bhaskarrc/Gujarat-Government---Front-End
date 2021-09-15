import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
import { CCCEXAM, DEPARTMENTEXAM, LANGUAGEEXAM } from 'src/app/model/promotion-departmental-exam';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  containers = [];
  initiatiomdate: any = new Date();
  promotionForm: FormGroup;
  promotionFor_list: CommonListing[] = [
    { value: '1', viewValue: '7th Pay Commission' },
    { value: '2', viewValue: '6th Pay Commission' },
    { value: '3', viewValue: '5th Pay Commission' },
  ];
  type_list: CommonListing[] = [
    { value: '1', viewValue: 'Promotion' },
    { value: '2', viewValue: 'Reversion' },
  ];
  promotionType_list: CommonListing[] = [
    { value: '1', viewValue: 'Promotion' },
    { value: '2', viewValue: 'Promotion in Same Pay Scale' },
  ];
  class_list: CommonListing[] = [
    { value: '1', viewValue: 'Class I' },
  ];
  designation_list: CommonListing[] = [
    { value: '1', viewValue: 'Teacher' },
    { value: '2', viewValue: 'Accountent' },
  ];
  payLevel_list: CommonListing[] = [
    { value: '1', viewValue: 'Level 5' },
    { value: '2', viewValue: 'Level 6' },
    { value: '3', viewValue: 'Level 7' },
    { value: '4', viewValue: 'Level 8' },
    { value: '5', viewValue: 'Level 9' },
    { value: '6', viewValue: 'Level 10' },
    { value: '7', viewValue: 'Level 11' },
    { value: '8', viewValue: 'Level 12' },
    { value: '9', viewValue: 'Level 13' },
    { value: '10', viewValue: 'Level 14' },
    { value: '11', viewValue: 'Level 15' },
    { value: '12', viewValue: 'Level 16' },
    { value: '13', viewValue: 'Level 17' },
    { value: '14', viewValue: 'Level 18' },
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
  optionAvailed_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  gradePay_list: CommonListing[] = [
    { value: '1', viewValue: '1800' },
    { value: '2', viewValue: '2200' },
  ];
  payBand_list: CommonListing[] = [
    { value: '1', viewValue: '5200' },
    { value: '2', viewValue: '2200' },
  ];
  grade_list: CommonListing[] = [
    { value: '1', viewValue: 'S-4' },
  ];
  scale_list: CommonListing[] = [
    { value: '1', viewValue: '2750-70-3800-75-4400' },
  ];
  forenoonAfternoon_list: any[] = [
    {value: '1', viewValue: 'Forenoon'},
    {value: '2', viewValue: 'Afternoon'},
  ];
  cccExam: CCCEXAM[] = [
    {examName: '', examBody: '', dateOfPassing: '', status: ''}
  ];
  departmental: DEPARTMENTEXAM[] = [
    {examName: '', examBody: '', dateOfPassing: '', status: ''}
  ];
  languageExam: LANGUAGEEXAM[] = [
    {langName: '', examBody: '', dateOfPassing: '', status: ''}
  ];
  promotionForCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  classCtrl: FormControl = new FormControl();
  designationCtrl: FormControl = new FormControl();
  payLevelCtrl: FormControl = new FormControl();
  cellIdCtrl: FormControl = new FormControl();
  optionAvailedCtrl: FormControl = new FormControl();
  payBandCtrl: FormControl = new FormControl();
  gradePayCtrl: FormControl = new FormControl();
  gradeCtrl: FormControl = new FormControl();
  scaleCtrl: FormControl = new FormControl();
  promotionTypeCtrl: FormControl = new FormControl();
  forenoonAfternoonCtrl: FormControl = new FormControl();
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  @ViewChild('el', { read: ElementRef }) el: ElementRef;
  showDate: Boolean = false;
  val: number;
  errorMessage;
  promotionFor;
  newDynamic: any = {};
  emplyeeeDataListShow: Boolean = false;
  showSeventhPayCommField = false;
  showSixthPayCommField = false;
  showFifthPayCommField = false;
  dataSource = new MatTableDataSource<CCCEXAM>(this.cccExam);
  displayedColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

  dataSourceDept = new MatTableDataSource<DEPARTMENTEXAM>(this.departmental);
  displayedDeptColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

  dataSourceLang = new MatTableDataSource<LANGUAGEEXAM>(this.languageExam);
  displayedLangColumns = ['langName', 'examBody', 'dateOfPassing', 'status'];
  constructor(private fb: FormBuilder, private toastr: ToastrService, public dialog: MatDialog) { }
  
  ngOnInit() {
    this.errorMessage = pvuMessage;
    this.promotionForm = this.fb.group({
      promotionFor: ['1'],
      eventOrderNumber: ['', Validators.required],
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
      employeeBasicPayCurrent: [''],
      dateOfNextIncrementCurrent: [''],
      dateOfNextIncrement: [''],
      employeeDoj: [''],
      class: [''],
      designation: [''],
      optionAvailed: [''],
      payLevel: [''],
      cellId: [''],
      payBand: [''],
      gradePay: [''],
      employeePayBandValue: [''],
      promotionType: [''],
      eventOrderDate: [''],
      optionDate: [''],
      dateOfJoining: [''],
      employeePayBandValueDetails: [''],
      employeeBasicPayDetails: [''],
      dateOfRetirement: [''],
      grade: [''],
      scale: [''],
      gradeCurrent: [''],
      scaleCurrent: [''],
      forenoonAfternoon: [''],
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
    });
    this.containers.push(this.containers.length);
    this.promotionChange();
    this.promotionFor.controls['employeeName'].setValue("ID");
  }
  promotionChange() {
    const revisionFormValue = this.promotionForm.value;
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
  print() {}
  emplyeeeDataList() {
    this.emplyeeeDataListShow = !this.emplyeeeDataListShow;
  }
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.promotionForm.patchValue({
        employeeNumber: '1278456976',
        employeeName: 'Amit Pandey',
        employeeClass: 'Class I',
        employeeDesignation: 'Teacher',
        employeeOfficeName: 'Office 1',
        employeePayLevel: 'Level 5',
        employeeCellId: '1',
        employeePayBand: '2200',
        employeePayBandValue: '2400',
        employeePayBandValueDetails: '2400',
        employeeGradePay: '5200',
        employeeBasicPayCurrent: '4600',
        dateOfNextIncrementCurrent: '26/11/2019',
        employeeDoj: '26/11/2019',
        dateOfRetirement: '16/11/2025',
        locationName: 'Ahemdabad',
        DateofPassing: '22/11/2019',
        examName: 'UPSC',
        gradeCurrent: 'S-4',
        scaleCurrent: '2750-70-3800-75-4400',
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
  submitDetails() {
    this.toastr.success('Data  Uploaded Successfully');
  }
  basicPay() {
    const gradePayList = this.gradePay_list.filter(gradePay => {
      return gradePay === this.promotionForm.value.gradePay;
    });
    this.promotionForm.controls.employeeBasicPayDetails.setValue(Number(gradePayList[0]['viewValue']) + Number(this.promotionForm.value.employeePayBandValue));
  }
  add() {
    this.containers.push(this.containers.length);
  }
  deleteRow(index) {
    this.containers.splice(index, 1);
  }
  goToDashboard() { }
  resetForm() {
    this.promotionForm.reset();
  }
  changeEvent(changeval) {
    if (changeval.value == 1) {
      this.showDate = true;
    } else {
      this.showDate = false;
    }
  }
}

