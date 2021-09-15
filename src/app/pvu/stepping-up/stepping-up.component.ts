import { AttachmentDetails } from 'src/app/model/stepping-up';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatTableDataSource, MatDatepickerInputEvent } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
//import { TabelElement } from 'src/app/model/ddo-offices-create';
import { TabelElement } from 'src/app/model/attatchment';

@Component({
  selector: 'app-stepping-up',
  templateUrl: './stepping-up.component.html',
  styleUrls: ['./stepping-up.component.css']
})
export class SteppingUpComponent implements OnInit {
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
  currentDetails: Boolean = false;
  steppingupForm: FormGroup;
  emplyeeeDataListShow: Boolean = false;
  errorMessages = pvuMessage;
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


  promotionFor_list: any[] = [
    { value: '2', viewValue: '7th Pay Commission' },
    { value: '1', viewValue: '6th Pay Commission' },
    { value: '3', viewValue: '5th Pay Commission' },
  ];
  type_list: any[] = [
    { value: '1', viewValue: 'Stepping Up' },
  ];
  promotionForCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  date: any = new Date();
  private _onDestroy = new Subject<void>();
  val: number;
  router: any;


  attachment_type_list: any[] = [
    { value: 'Supporting Document', viewValue: 'Supporting Document' },
  ];
  attachmentTypeCtrl: FormControl = new FormControl();
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  constructor(public fb: FormBuilder, private toastr: ToastrService, public dialog: MatDialog, private el: ElementRef, ) { }
  payCommision;
  ngOnInit() {
    this.payCommision = '2';
    this.steppingupForm = this.fb.group({
      promotionFor: ['2'],
      officeName: [''],
      eventOrderNumber: [''],
      initiationDate: [''],
      type: [''],
      employeeNumber: [''],
      juniorEmployeeNumber: [''],
      employeeName: [''],
      juniorEmployeeName: [''],
      employeeClass: [''],
      juniorEmployeeClass: [''],
      employeeDesignation: [''],
      juniorEmployeeDesignation: [''],
      employeeOfficeName: [''],
      juniorEmployeeOfficeName: [''],
      employeePayLevel: [''],
      payLevel: [''],
      juniorEmployeePayLevel: [''],
      employeeCellId: [''],
      juniorEmployeeCellId: [''],
      employeePayBand: [''],
      employeePayBandVal: [''],
      juniorEmployeePayBand: [''],
      juniorEmployeePayBandVal: [''],
      employeeGradePay: [''],
      juniorEmployeeGradePay: [''],
      employeeBasicPay: [''],
      juniorEmployeeBasicPay: [''],
      benefitEffictiveDate: [''],
      benefitDate: [''],
      eventOrderDate: [''],
      eventEffectiveDate: [''],
      juniorNextIncrementDate: [''],
      juniorBenefitEffectiveDate: [''],
      doj: [''],
      jdoj: [''],
      dor: [''],
      empGrade: [''],
      empScale: [''],
      bPay: [''],
      juniorEmpGrade: [''],
      juniorEmpScale: [''],
      juniorBPay: [''],
    });
    this.containers.push(this.containers.length);
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
    filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
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
  onEventDateSelect(type: string, event: MatDatepickerInputEvent<Date>) {
    const date = new Date(event.value.toDateString());
    this.steppingupForm.controls.juniorBenefitEffectiveDate.patchValue
      (date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());

  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
  }
  saveEstimate(data) {
  }
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.steppingupForm.patchValue({
        employeeNumber: '1278456976',
        employeeName: 'T. Mishra',
        employeeClass: 'Class I',
        employeeDesignation: 'Teacher',
        employeeOfficeName: 'Office 1',
        employeePayLevel: 'Level 1',
        employeeCellId: '1',
        employeePayBand: '2400',
        employeePayBandVal: '5665',
        employeeGradePay: '5200',
        employeeBasicPay: '3800',
        benefitEffictiveDate: '26/11/2019',
        dateOfJoining: '20/02/2011',
        doj: '12/1/2017',
        dor: '18/1/2020',
        empGrade: 'S-4',
        empScale: '2750-70-3800-75-4400',
        bPay: '3800',
      });
    });
  }
  openDialogEmployeeNo() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.steppingupForm.patchValue({
        juniorEmployeeNumber: '545656565',
        juniorEmployeeName: 'A. Kumar',
        juniorEmployeeClass: 'Class I',
        juniorEmployeeDesignation: 'Designation 1',
        juniorEmployeeOfficeName: 'Office No 1',
        juniorEmployeePayLevel: 'Pay Level 1',
        juniorEmployeeCellId: '111',
        juniorEmployeePayBand: '2400',
        juniorEmployeePayBandVal: '5544',
        juniorEmployeeGradePay: '5200',
        juniorEmployeeBasicPay: '3875',
        benefitEffictiveDate: '26/11/2019',
        jdoj: '12/02/2019',
        juniorNextIncrementDate: '02/12/2020',
        juniorEmpGrade: 'S-4',
        juniorEmpScale: '2750-70-3800-75-4400',
        juniorBPay: '3875',
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
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  reset() {
    this.steppingupForm.reset();
  }
  goToDashboard() {
    this.router.navigate(['']);
  }
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }
  onBrowseSelectChange() { }

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
}
