import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogData } from 'src/app/model/employee-creation';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatTableDataSource } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonListing } from 'src/app/model/common-listing';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
//import { TabelElement } from 'src/app/model/ddo-offices-create';
import { TabelElement } from 'src/app/model/attatchment';

@Component({
  selector: 'app-shetty-pay',
  templateUrl: './shetty-pay.component.html',
  styleUrls: ['./shetty-pay.component.css']
})
export class ShettyPayComponent implements OnInit {
  ddoForm: FormGroup;
  isNonDDO: boolean = false;
  DDO: Boolean = true;
  tabDisable: Boolean = true;
  selectedIndex: number;
  fileBrowseIndex: number;
  department: String = 'Agriculture & Co-Operation Department';
  hod: String = 'Secretary to Legislative and Parliamentary Affairs Department';
  employeeName: String;
  promotionForCtrl: FormControl = new FormControl();
  promotionFor_list: CommonListing[] = [
    // { value: '1', viewValue: '7th Pay Commission' },
    { value: '2', viewValue: '6th Pay Commission' },
    { value: '3', viewValue: '5th Pay Commission' },
  ];
  containers = [];

  errorMessage;
  initiatiomdate: any = new Date();
  doneHeader: Boolean = false;
  currentDetails: Boolean = false;
  shettyPaYForm: FormGroup;
  currentDetailsForm: FormGroup;
  emplyeeeDataListShow: Boolean = false;
  shettyPayComission2003 = 'Shetty Pay Revision (If DOJ < 01, Apr 2003)';


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
  showSeventhPayCommField = false;
  showSixthPayCommField = true;
  showFifthPayCommField = false;
  dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  nonDdoDataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);


  type_list: CommonListing[] = [
    { value: '1', viewValue: 'Shetty Pay' },
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
  gradePay_list: CommonListing[] = [
    { value: '1', viewValue: '1800' },
    { value: '2', viewValue: '2200' },
  ];
  payBand_list: CommonListing[] = [
    { value: '1', viewValue: '5200' },
    { value: '2', viewValue: '2200' },
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

  scale_list: CommonListing[] = [
    { value: '1', viewValue: '2750-70-3800-75-4400' },
  ];
  forenoonAfternoon_list: any[] = [
    { value: '1', viewValue: 'Forenoon' },
    { value: '2', viewValue: 'Afternoon' },
  ];
  private _onDestroy = new Subject<void>();

  attachment_type_list: any[] = [
    { value: 'Supporting Document', viewValue: 'Supporting Document' },
  ];

  attachmentTypeCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  revisedBasicPayCtrl: FormControl = new FormControl();
  payScaleCtrl: FormControl = new FormControl();
  payBandCtrl: FormControl = new FormControl();
  gradePayCtrl: FormControl = new FormControl();
  gradeCtrl: FormControl = new FormControl();
  date = new FormControl(new Date());
  classCtrl: FormControl = new FormControl();
  serializedDate = new FormControl((new Date()).toISOString());
  showDate: Boolean = false;
  designationCtrl: FormControl = new FormControl();
  payLevelCtrl: FormControl = new FormControl();
  cellIdCtrl: FormControl = new FormControl();
  optionAvailedCtrl: FormControl = new FormControl();
  scaleCtrl: FormControl = new FormControl();
  promotionTypeCtrl: FormControl = new FormControl();
  forenoonAfternoonCtrl: FormControl = new FormControl();
  val: number;
  newDynamic: any = {};
  constructor(public fb: FormBuilder, private toastr: ToastrService, public dialog: MatDialog, private el: ElementRef, ) { }

  ngOnInit() {
    this.errorMessage = pvuMessage;
    this.shettyPaYForm = this.fb.group({
      orderNumber: [''],
      orderDate: [''],
      officeName: [''],
      type: [''],
      employeeNumber: [''],
      employeeName: [''],
      employeeClass: [''],
      employeeDesignation: [''],
      employeeOfficeName: [''],
      dateOfJoining: [''],
      joiningPayBand: [''],
      joiningPayBandValue: [''],
      joiningGradePay: [''],
      grade: [''],
      payScale: [''],
      revisedBasicPay: [''],
      payBand: [''],
      revisedBasicPayValue: [''],
      gradePay: [''],
      eventEffectiveDate: [''],
      dateOfNextIncrement: [''],
      benefitEffectiveDate: [''],
      dateOfRetirement: [''],
      dateOfNextIncrementFirst: [''],
      dateOfNextIncrementSecond: [''],
      dateOfNextIncrementThird: [''],
      currentGrade: [''],
      currentScale: [''],
      currentBasicPay: [''],
      BasicPay: [''],
      promotionFor: ['2'],
      class: [''],
      designation: [''],
      optionAvailed: [''],
      payLevel: [''],
      cellId: [''],
      employeePayBandValue: [''],
      promotionType: [''],
      eventOrderDate: [''],
      optionDate: [''],
      employeePayBandValueDetails: [''],
      employeeBasicPayDetails: [''],
      scale: [''],
      gradeCurrent: [''],
      scaleCurrent: [''],
      forenoonAfternoon: [''],
      employeeGradePay: [''],
      employeeCellId: [''],
      employeePayLevel: [''],
      employeePayBand: [''],
      dateOfNextrecrement: ['']
      // employeePayBandValue:['']
    });
    this.containers.push(this.containers.length);
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
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.shettyPaYForm.patchValue({
        employeeNumber: '1200064595',
        employeeName: 'Amit Pandey',
        employeeClass: 'Class I',
        employeeDesignation: 'Clerk',
        employeeOfficeName: 'Office 1',
        dateOfJoining: ' 01/02/2003',
        joiningPayBand: '5200',
        joiningPayBandValue: '2400',
        joiningGradePay: '1800',
        currentBasicPay: '2550',
        currentGrade: 'S-1',
        currentScale: '2550-55-2660-60-3200',
        benefitEffictiveDate: '26/11/2019',
        dateOfRetirement: '26/8/2026',
        dateOfNextIncrementFirst: '01/02/2004',
        dateOfNextIncrementSecond: '01/07/2004',
        dateOfNextIncrementThird: '01/07/2007',
        BasicPay: '2605'
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

  promotionChange() {
    const revisionFormValue = this.shettyPaYForm.value;
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
    const dialogRef = this.dialog.open(ShettypayDialogModal, {
      width: '450px',
    });
  }
  goToDashboard() { }
  resetForm() {
    this.shettyPaYForm.reset();
  }
  changeEvent(changeval) {
    if (changeval.value == 1) {
      this.showDate = true;
    } else {
      this.showDate = false;
    }
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
}

@Component({
  selector: 'shettypay-dialog-modal',
  templateUrl: 'shettypay-dialog-modal.html',
})
export class ShettypayDialogModal {
  constructor(
    public dialogRef: MatDialogRef<ShettypayDialogModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  close(): void {
    this.dialogRef.close();
  }

}



