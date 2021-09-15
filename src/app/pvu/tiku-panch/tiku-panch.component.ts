import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatTableDataSource } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonListing } from 'src/app/model/common-listing';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
import { CccExam, DepartMentExam, LanguageExam } from 'src/app/model/tiku-panch';
import { TabelElement } from 'src/app/model/attatchment';


@Component({
  selector: 'app-tiku-panch',
  templateUrl: './tiku-panch.component.html',
  styleUrls: ['./tiku-panch.component.css']
})
export class TikuPanchComponent implements OnInit {
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

  errorMessage;
  initiatiomdate: any = new Date();

  doneHeader: Boolean = false;
  tikuPayForm: FormGroup;
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


  payCommission_list: CommonListing[] = [
    { value: '1', viewValue: '7th Pay Commission' },
    { value: '2', viewValue: '6th Pay Commission' },
    { value: '3', viewValue: '5th Pay Commission' },
  ];
  type_list: CommonListing[] = [
    { value: '1', viewValue: 'Tiku Pay' },
    { value: '2', viewValue: 'Tiku Pay Type' },
  ];
  tikuPayType_list: CommonListing[] = [
    { value: 1, viewValue: 'Tiku Pay 1' },
    { value: 2, viewValue: 'Tiku Pay 2' },
    { value: 3, viewValue: 'Tiku Pay 3' },
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
  departmentalExamPased_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  adhoc_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  adhocContiniousServices_list: CommonListing[] = [
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
  gradePay_list: CommonListing[] = [
    { value: '1', viewValue: '1800' },
    { value: '2', viewValue: '2200' },
  ];
  payBand_list: CommonListing[] = [
    { value: '1', viewValue: '5200' },
    { value: '2', viewValue: '2200' },
  ];
  payBandValue_list: CommonListing[] = [
    { value: '1', viewValue: '5200' },
    { value: '2', viewValue: '2200' },
  ];
  gpscExamPassed_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  grade_list: CommonListing[] = [
    { value: '1', viewValue: 'S-4' },
  ];
  scale_list: CommonListing[] = [
  { value: '1', viewValue: '2750-70-3800-75-4400' },
  ];
  cccExam: CccExam[] = [
    {examName: '', examBody: '', dateOfPassing: '', status: ''}
  ];
  departmental: DepartMentExam[] = [
    {examName: '', examBody: '', dateOfPassing: '', status: ''}
  ];
  languageExam: LanguageExam[] = [
    {langName: '', examBody: '', dateOfPassing: '', status: ''}
  ];

  payCommissionCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();

  payLevelCtrl: FormControl = new FormControl();
  cellIdCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  departmentalExamPasedCtrl: FormControl = new FormControl();
  cardexNumberCtrl: FormControl = new FormControl();
  ddoNumberCtrl: FormControl = new FormControl();
  optionAvailedCtrl: FormControl = new FormControl();
  payBandCtrl: FormControl = new FormControl();
  gradePayCtrl: FormControl = new FormControl();
  payBandValueCtrl: FormControl = new FormControl();
  adhocContiniousServicesCtrl: FormControl = new FormControl();
  adhocCtrl: FormControl = new FormControl();
  tikuPayTypeCtrl: FormControl = new FormControl();
  gpscExamPassedCtrl: FormControl = new FormControl();
  gradeCtrl: FormControl = new FormControl();
  scaleCtrl: FormControl = new FormControl();
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  showDate: Boolean = false;
  val: number;
  payCommission;
  tikuPayType: Boolean = false;
  notShowThree: Boolean = true;
  newDynamic: any = {};
  emplyeeeDataListShow: Boolean = false;
  showSeventhPayCommField = false;
  showSixthPayCommField = false;
  showFifthPayCommField = false;
  tikuPay1: Boolean = false;
  tikuPay2: Boolean = false;
  private _onDestroy = new Subject<void>();

  attachment_type_list: any[] = [
    { value: 'Supporting Document', viewValue: 'Supporting Document' },
  ];

  attachmentTypeCtrl: FormControl = new FormControl();
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


  cccexamtable = new MatTableDataSource<CccExam>(this.cccExam);
  displayedColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

  dataSourceDept = new MatTableDataSource<DepartMentExam>(this.departmental);
  displayedDeptColumns = ['examName', 'examBody', 'dateOfPassing', 'status'];

  dataSourceLang = new MatTableDataSource<LanguageExam>(this.languageExam);
  displayedLangColumns = ['langName', 'examBody', 'dateOfPassing', 'status'];

  constructor(private fb: FormBuilder, private toastr: ToastrService, public dialog: MatDialog, private el: ElementRef, ) { }

  ngOnInit() {
    this.errorMessage = pvuMessage;
    this.tikuPayForm = this.fb.group({
      transactionNo: [''],
      payCommission: ['1'],
      eventOrderNumber: ['', Validators.required],
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
      employeeBasicPay: [''],
      dateOfNextIncrement: [''],
      employeeDoj: [''],
      locationName: [''],
      DateofPassing: [''],
      optionAvailed: [''],
      payLevel: [''],
      cellId: [''],
      payBand: [''],
      gradePay: [''],
      district: [''],
      cardexNumber: [''],
      ddoNumber: [''],
      payBandValue: [''],
      examName: [''],
      employeePayBandValue: [''],
      adhocContiniousServices: [''],
      adhoc: [''],
      tikuPayType: [''],
      gpscExamPassed: [''],
      eventEffectiveDate: [''],
      eventOrderDate: [''],
      fromDate: [''],
      toDate: [''],
      gpscExamPassedDate: [''],
      optionDate: [''],
      benifitEffectiveDate: [''],
      tikuPayEffectiveDate1: [''],
      employeePayBandValueCurrent: [''],
      dateOfRetirement: [''],
      grade: [''],
      scale: [''],
      gradeCurrent: [''],
      scaleCurrent: [''],
      dojRegularService: [''],
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
      tikuPayEffectiveDate2: ['']
    });
    this.containers.push(this.containers.length);
    this.promotionChange();

    this.filteredAttachmentType.next(this.attachment_type_list.slice());
    (this.attachmentTypeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(this.attachment_type_list, this.attachmentTypeCtrl.value, this.filteredAttachmentType);
      }));
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
  promotionChange() {
    const revisionFormValue = this.tikuPayForm.value;
    this.showSixthPayCommField = false;
    this.showSeventhPayCommField = false;
    this.showFifthPayCommField = false;
    switch (revisionFormValue.payCommission) {
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
  // tslint:disable-next-line:use-life-cycle-interface
  saveEstimate(data) {

  }
  basicPay() {
    const gradePayList = this.gradePay_list.filter( gradePay => {
      return gradePay.value = this.tikuPayForm.value.gradePay;
    });
    this.tikuPayForm.controls.employeeBasicPay.setValue(Number(gradePayList[0]['viewValue']) + Number(this.tikuPayForm.value.employeePayBandValue));
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


  emplyeeeDataList() {
    this.emplyeeeDataListShow = !this.emplyeeeDataListShow;
  }
  openDialogEmployeeNumber() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.tikuPayForm.patchValue({
        employeeNumber: '1278456976',
        employeeName: 'Amit Pandey',
        employeeClass: 'Class I',
        employeeDesignation: 'Medical Officer',
        employeeOfficeName: 'Office 1',
        employeePayLevel: 'Level 5',
        employeeCellId: '1',
        employeePayBandValueCurrent: '2200',
        employeePayBandValue: '2400',
        employeeGradePay: '5200',
        employeeBasicPayCurrent: '4600',
        dateOfNextIncrementCurrent: '26/11/2019',
        employeeDoj: '26/11/2019',
        locationName: 'Ahemdabad',
        DateofPassing: '22/11/2019',
        examName: 'UPSC',
        dateOfRetirement: '12/5/2029',
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
        tikuPayEffectiveDate1: '12/11/2019',
        tikuPayEffectiveDate2: '5/12/2019'
      });
    });
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
  resetForm() {
    this.tikuPayForm.reset();
  }
  tikuPayTypeChanges(event) {
    if (event.value === 1) {
      this.tikuPay1 = false;
      this.tikuPay2 = false;
    } else if (event.value === 2) {
      this.tikuPay1 = true;
      this.tikuPay2 = false;
    } else if (event.value === 3) {
      this.tikuPay1 = true;
      this.tikuPay2 = true;
    }
  }
}










