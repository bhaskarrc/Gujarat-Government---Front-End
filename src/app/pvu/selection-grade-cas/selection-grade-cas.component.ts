import { pvuMessage } from './../../common/error-message/common-message.constants';
import { CCCExam, MasterExam, DepartmentalExam, LanguageExam } from './../../model/selection-grade-cas';
import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatTableDataSource } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonListing } from 'src/app/model/common-listing';
import { TabelElement } from 'src/app/model/attatchment';

const ELEMENT_DATA_MASTER: MasterExam[] = [
  {
    courseName: '', examBody: '', yearOfPassing: '', marks: ''
  },
];

const ELEMENT_DATA_CCC: CCCExam[] = [
  {
    examName: '', examBody: '', dateOfPassing: '', status: ''
  },
];

const ELEMENT_DATA_DEPT: DepartmentalExam[] = [
  {
    examName: '', examBody: '', dateOfPassing: '', status: ''
  },
];

const ELEMENT_DATA_LANG: LanguageExam[] = [
  {
    langName: '', examBody: '', dateOfPassing: '', status: ''
  },
];

const MASTER_DATA_FILLED: MasterExam[] = [
  {
    courseName: 'MBA', examBody: 'Gujarat University', yearOfPassing: '2016', marks: 80
  },
];

const CCC_DATA_FILLED: CCCExam[] = [
  {
    examName: 'CCC+ Theory', examBody: 'ExamBody 1', dateOfPassing: '30-10-2019', status: 'Pass'
  },
];
const DEPT_DATA_FILLED: DepartmentalExam[] = [
  {
    examName: 'Exam 1', examBody: 'ExamBody 1', dateOfPassing: '30-10-2019', status: 'Pass'
  },
];
const LANG_DATA_FILLED: LanguageExam[] = [
  {
    langName: 'Gujarati', examBody: 'ExamBody 1', dateOfPassing: '30-10-2019', status: 'Pass'
  },
];


@Component({
  selector: 'app-selection-grade-cas',
  templateUrl: './selection-grade-cas.component.html',
  styleUrls: ['./selection-grade-cas.component.css']
})
export class SelectionGradeCasComponent implements OnInit {

  containers = [];
  selectionGradeForm: FormGroup;
  selectedIndex: number;
  date: any = new Date();
  initiationDate: Date;
  private _onDestroy = new Subject<void>();
  tabDisable: Boolean = true;
  doneHeader: Boolean = false;
  show7thPC: Boolean = true;
  show5thPC: Boolean = false;
  show6thPC: Boolean = false;
  universityYes: Boolean = false;
  showDate: Boolean = false;
  showDataEmployee: Boolean = false;
  showSeniorScale: Boolean = false;
  selectionGrade: Boolean = false;
  showSelectionGrade: Boolean = false;
  showSelectionGrade31: Boolean = false;
  showPersonalPayField: Boolean = false;
  optionAvailed: Boolean = false;
  refresherCourseAttended: Boolean = false;
  seniorScaleEffective: Boolean = false;
  selectionGradeEffectiveDate1: Boolean = false;
  univercityApprovedLetcture: Boolean = false;
  orentationSertificate: Boolean = false;
  refresherSertificateDate: Boolean = false;
  masterExamDetails: Boolean = false;
  ddoForm: FormGroup;
   isNonDDO: boolean = false;
  DDO: Boolean = true;
  
  fileBrowseIndex: number;
  department: String = 'Agriculture & Co-Operation Department';
  hod: String = 'Secretary to Legislative and Parliamentary Affairs Department';
  employeeName: String;



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
    { value: '1', viewValue: 'Career Advancement Scheme' },
    { value: '2', viewValue: 'Selection Grade' },

  ];
  cas_type_list: CommonListing[] = [
    { value: '1', viewValue: 'Senior Scale' },
    { value: '2', viewValue: 'Selection Grade' },
    { value: '3', viewValue: 'Selection Grade (3 Years) - 1' },
    { value: '4', viewValue: 'Selection Grade (3 Years) - 2' }

  ];
  class_list: CommonListing[] = [
    { value: '1', viewValue: 'Class I' },
    { value: '2', viewValue: 'Class II' },
    { value: '3', viewValue: 'Class III' },
    { value: '4', viewValue: 'Class IV' },
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
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '1', viewValue: '3' },
    { value: '2', viewValue: '4' },
    { value: '1', viewValue: '5' },
    { value: '2', viewValue: '6' },
    { value: '1', viewValue: '7' },
    { value: '2', viewValue: '8' },
    { value: '1', viewValue: '9' },
    { value: '2', viewValue: '10' },
    { value: '1', viewValue: '11' },
    { value: '2', viewValue: '12' },
    { value: '1', viewValue: '13' },
    { value: '2', viewValue: '14' },
    { value: '1', viewValue: '15' },
    { value: '2', viewValue: '16' },
    { value: '1', viewValue: '17' },
    { value: '2', viewValue: '18' },
    { value: '1', viewValue: '19' },
    { value: '2', viewValue: '20' },
    { value: '1', viewValue: '21' },
    { value: '2', viewValue: '22' },
    { value: '1', viewValue: '23' },
    { value: '2', viewValue: '24' },
    { value: '1', viewValue: '25' },
    { value: '2', viewValue: '26' },
    { value: '1', viewValue: '27' },
    { value: '2', viewValue: '28' },
    { value: '2', viewValue: '29' },
    { value: '2', viewValue: '30' },
    { value: '2', viewValue: '31' },
    { value: '2', viewValue: '32' },
    { value: '2', viewValue: '33' },
    { value: '2', viewValue: '34' },
    { value: '2', viewValue: '35' },
    { value: '2', viewValue: '36' },
    { value: '2', viewValue: '37' },
    { value: '2', viewValue: '38' },
    { value: '2', viewValue: '39' },
    { value: '2', viewValue: '40' },
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
  university_approved_lecturer_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  orientation_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  refresher_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  gradePay_list: CommonListing[] = [
    { value: '1', viewValue: '1800' },
    { value: '2', viewValue: '2200' },
  ];
  grade_list: CommonListing[] = [
    { value: '1', viewValue: 'S-4' },
  ];
  scale_list: CommonListing[] = [
    { value: '1', viewValue: '2750-70-3800-75-4400' },
  ];

  // fileBrowseIndex: number;
  // brwoseData: any[] = [{
  //   name: undefined,
  //   file: undefined,
  //   attachment: 'Final Order'
  // }];
  //dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  // displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

  attachment_type_list: any[] = [
    { value: 'Supporting Document', viewValue: 'Supporting Document' },
  ];

  attachmentTypeCtrl: FormControl = new FormControl();
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


  payCommissionCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  casTypeCtrl: FormControl = new FormControl();
  universityLecturerCtrl: FormControl = new FormControl();
  orientationCtrl: FormControl = new FormControl();
  refresherCtrl: FormControl = new FormControl();
  payLevelCtrl: FormControl = new FormControl();
  cellIdCtrl: FormControl = new FormControl();
  payBandCtrl: FormControl = new FormControl();
  payBandValueCtrl: FormControl = new FormControl();
  gradePayCtrl: FormControl = new FormControl();
  optionAvailedCtrl: FormControl = new FormControl();
  gradeCtrl: FormControl = new FormControl();
  scaleCtrl: FormControl = new FormControl();

  dataSourceMaster = new MatTableDataSource(ELEMENT_DATA_MASTER);
  dataSourceMasterFilled = new MatTableDataSource(MASTER_DATA_FILLED);
  displayedMasterColumns = ['courseName', 'examBody', 'yearOfPassing', 'marks'];

  dataSourceCCC = new MatTableDataSource(ELEMENT_DATA_CCC);
  dataSourceCCCFilled = new MatTableDataSource(CCC_DATA_FILLED);
  displayedCCCColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

  dataSourceDept = new MatTableDataSource(ELEMENT_DATA_DEPT);
  dataSourceDeptFilled = new MatTableDataSource(DEPT_DATA_FILLED);
  displayedDeptColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

  dataSourceLang = new MatTableDataSource(ELEMENT_DATA_LANG);
  dataSourceLangFilled = new MatTableDataSource(LANG_DATA_FILLED);
  displayedLangColumns = ['langName', 'examBody', 'dateOfPassing', 'status'];

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private el: ElementRef) { }

  errorMessages = pvuMessage;

  ngOnInit() {
    this.selectionGradeForm = this.fb.group({
      officeName: [''],
      payCommission: ['1'],
      orderNo: ['', Validators.required],
      orderDate: ['', Validators.required],
      eventEffectiveDate: ['', Validators.required],
      type: ['', Validators.required],
      casType: ['', Validators.required],
      empNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      empName: [''],
      class: [''],
      designation: [''],
      empOfficeName: [''],
      payBandCurrent: [''],
      payBandValueCurrent: [''],
      gradePayCurrent: [''],
      payLevelCurrent: [''],
      cellIdCurrent: [''],
      basicPayCurrent: [''],
      dateOfJoining: [''],
      dateOfNextIncrementCurrent: [''],
      uniAppLectCurrent: [''],
      seniorScaleEffectiveDate: [''],
      selectionGradeEffectiveDate: [''],
      orientationCertificateDateCurrent: [''],
      refresherCertificateDateCurrent: [''],
      payBand: ['', Validators.required],
      payBandValue: [''],
      gradePay: ['', Validators.required],
      payLevel: ['', Validators.required],
      cellId: ['', Validators.required],
      basicPay: [''],
      dateOfNextIncrement: [''],
      universityLecturer: ['', Validators.required],
      orientationCourseAttended: ['', Validators.required],
      orientationCertificateDate: ['', Validators.required],
      refresherCourseAttended: ['', Validators.required],
      refresherCertificateDate: ['', Validators.required],
      optionAvailed: ['', Validators.required],
      optionDate: ['', Validators.required],
      postDesignation: ['', Validators.required],
      benefitEffectiveDate: [''],
      remarks: [''],
      personalPay: [''],
      postUniApprovedLect: [''],
      seniorScaleEffective: [''],
      univercityApprovedLetcture: [''],
      orentationSertificate: [''],
      refresherSertificateDate: [''],
      selectionGradeEffectiveDate1: [''],
      grade: [''],
      scale: [''],
      gradeCurrent: [''],
      scaleCurrent: [''],
      dateOfRetirement: ['']
    });
    this.containers.push(this.containers.length);
    this.selectionGradeForm.patchValue({
      orientationCourseAttended: '1',
      refresherCourseAttended: '1'
    });

    this.filteredAttachmentType.next(this.attachment_type_list.slice());
    (this.attachmentTypeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachment_type_list, this.attachmentTypeCtrl.value, this.filteredAttachmentType);
      }));
      this.onPayCommissionSelect();
  }

  onPayCommissionSelect() {
    const selectionGradeFormValue = this.selectionGradeForm.value;
    this.show7thPC = false;
    this.show6thPC = false;
    this.show5thPC = false;
    switch (selectionGradeFormValue.payCommission) {
      case '1':
        this.show7thPC = true;
        break;
      case '2':
        this.show6thPC = true;
        break;
      case '3':
        this.show5thPC = true;
        break;
    }
  }

  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
    filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }

  saveEstimate(data) {

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
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {

      this.selectionGradeForm.patchValue({
        empNo: result[0].employeeNumber,
        empName: result[0].employeeName,
        class: 'Class I',
        designation: result[0].designation,
        empOfficeName: result[0].officeName,
        payBandCurrent: '1S',
        payBandValueCurrent: '4440',
        gradePayCurrent: '1600',
        payLevelCurrent: 'Level 1',
        cellIdCurrent: '1',
        basicPayCurrent: '5740',
        dateOfNextIncrementCurrent: '11/12/2020',
        dateOfNextIncrement: '11/12/2020',
        dateOfJoining: '1/1/2010',
        uniAppLectCurrent: 'No',
        seniorScaleEffectiveDate: '5/2/2014',
        selectionGradeEffectiveDate: '5/5/2015',
        orientationCertificateDateCurrent: '17/10/2015',
        refresherCertificateDateCurrent: '17/5/2017',
        seniorScaleEffective: '12/8/2019'
      });

      this.dataSourceMaster = this.dataSourceMasterFilled;
      this.dataSourceCCC = this.dataSourceCCCFilled;
      this.dataSourceDept = this.dataSourceDeptFilled;
      this.dataSourceLang = this.dataSourceLangFilled;

    });
  }

  onCASSelect($events) {
    const selectionGradeForm = this.selectionGradeForm.value;
    this.showSeniorScale = false;
    this.showSelectionGrade = false;
    this.universityYes = false;
    this.selectionGrade = false;
    this.optionAvailed = false;
    this.refresherSertificateDate = false;
    this.seniorScaleEffective = false;
    this.univercityApprovedLetcture = false;
    this.orentationSertificate = false;
    this.selectionGradeEffectiveDate1 = false;
    switch (selectionGradeForm.casType) {
      case '1':
        this.showSeniorScale = true;
        this.optionAvailed = true;
        this.showSelectionGrade = false;
        this.showSelectionGrade31 = false;
        break;
      case '2':
        this.showSeniorScale = false;
        this.selectionGrade = true;
        this.showSelectionGrade = true;
        this.universityYes = false;
        this.refresherCourseAttended = true;
        break;
      case '3':
        this.showSeniorScale = false;
        this.showSelectionGrade31 = true;
        this.refresherCourseAttended = true;
        this.showSeniorScale = false;
        this.optionAvailed = true;
        this.seniorScaleEffective = true;
        this.univercityApprovedLetcture = true;
        this.orentationSertificate = true;
        this.refresherSertificateDate = true;
        break;
        case '4':
            this.optionAvailed = true;
            this.seniorScaleEffective = true;
            this.showSelectionGrade31 = true;
            this.selectionGradeEffectiveDate1 = true;
            this.univercityApprovedLetcture = true;
            this.orentationSertificate = true;
            this.refresherSertificateDate = true;
            this.refresherCourseAttended = false;
         break;
    }
  }


  onUniversitySelect($event) {
    const selectionGradeForm = this.selectionGradeForm.value;
    this.universityYes = false;
    this.refresherCourseAttended = false;
    switch (selectionGradeForm.universityLecturer) {
      case '1':
        this.universityYes = true;
        this.refresherCourseAttended = true;
        break;
    }
  }

  selectionGradeType($event) {
    const selectionGradeForm = this.selectionGradeForm.value;
    this.showPersonalPayField = false;
    this.masterExamDetails = false;
    switch (selectionGradeForm.type) {
      case '1':
        this.masterExamDetails = true;
        break;
      case '2':
        this.showPersonalPayField = true;
        break;
    }
  }

  onPayBandSelect(pb) {
    this.selectionGradeForm.controls.payBandValue.patchValue('Auto Populate');
  }

  onGradePaySelect() {
    this.selectionGradeForm.controls.basicPay.patchValue('Auto Calculate');
  }

  showEmployee() {
    this.showDataEmployee = !this.showDataEmployee;
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
    // const dialogRef = this.dialog.open(TikupanchDialogModal, {
    //   width: '450px',
    // });
  }
  goToDashboard() { }
  resetForm() {
    this.selectionGradeForm.reset();
  }
  onOptionAvailed(option) {
    if (option.value == 1) {
      this.showDate = true;
    } else {
      this.showDate = false;
    }
  }
}

