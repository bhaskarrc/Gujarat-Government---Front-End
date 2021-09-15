
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
@Component({
  selector: 'app-shetty-pay1',
  templateUrl: './shetty-pay1.component.html',
  styleUrls: ['./shetty-pay1.component.css']
})
export class ShettyPay1Component implements OnInit {
  containers = [];
  selectedIndex: number;
  errorMessage;
  initiatiomdate: any = new Date();
  tabDisable: Boolean = true;
  doneHeader: Boolean = false;
  currentDetails: Boolean = false;
  shettyPaYForm: FormGroup;
  currentDetailsForm: FormGroup;
  emplyeeeDataListShow: Boolean = false;
  shettyPayComission2003 = 'Shetty Pay Revision (If DOJ < 01, Apr 2003)';
  grade_list: CommonListing[] = [
    { value: '1', viewValue: 'S-1' },
    { value: '2', viewValue: 'S-2' },
    { value: '3', viewValue: 'S-2A' },
    { value: '4', viewValue: 'S-3' },
  ];
  promotionFor_list: any[] = [
    {value: '1', viewValue: '6th Pay Commission'},
    {value: '2', viewValue: '7th Pay Commission'},
  ];
  type_list: CommonListing[] = [
    { value: '1', viewValue: 'Shetty Pay' },
  ];
  revisedBasicPay_list: any[] = [
    {value: '1', viewValue: 'Basic Pay 1'},
    {value: '2', viewValue: 'Basic Pay 2'},
  ];
  payScale_list: CommonListing[] = [
    { value: '1', viewValue: '2550-55-2660-60-3200' },
    { value: '2', viewValue: '2610-60-3150-65-3540' },
    { value: '3', viewValue: '2610-60-2910-65-3300-70-4000' },
    { value: '4', viewValue: '2650-65-3300-70-4000' },
  ];
  district_list: any[] = [
    {value: '1', viewValue: 'Ahmedabad'},
    {value: '2', viewValue:  'Vadodara'},
    {value: '3', viewValue: 'Anand'},
    {value: '4', viewValue: 'Chhota Udaipur'},
    {value: '5', viewValue: 'Dahod'},
    {value: '6', viewValue: 'Kheda'},
    {value: '7', viewValue: 'Mahisagar'},
    {value: '8', viewValue:  'Panchmahal'}
  ];
  cardexNumber_list: any[] = [
    {value: '1', viewValue: '0796'},
    {value: '2', viewValue: '2797'},
  ];
  ddoNumber_list: any[] = [
    {value: '1', viewValue: '9875'},
    {value: '2', viewValue: '9874'},
  ];
  revisedBasicPayValue_list: any[] = [
    {value: '1', viewValue: 'Basic Pay 1'},
    {value: '2', viewValue: 'Basic Pay 2'},
  ];
  gradePay_list: CommonListing[] = [
    { value: '1', viewValue: '1800' },
    { value: '2', viewValue: '2200' },
  ];
  payBand_list: CommonListing[] = [
    { value: '1', viewValue: '5200' },
    { value: '2', viewValue: '2200' },
  ];
  private _onDestroy = new Subject<void>();
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
  filteredAttachmentType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  typeCtrl: FormControl = new FormControl();
  revisedBasicPayCtrl: FormControl = new FormControl();
  payScaleCtrl: FormControl = new FormControl();
  payBandCtrl: FormControl = new FormControl();
  gradePayCtrl: FormControl = new FormControl();
  gradeCtrl: FormControl = new FormControl();
  date = new FormControl(new Date());
  revisedBasicPay: FormControl = new FormControl();
  revisedBasicPayValueCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  cardexNumberCtrl: FormControl = new FormControl();
  ddoNumberCtrl: FormControl = new FormControl();
  serializedDate = new FormControl((new Date()).toISOString());
  showDate: Boolean = false;
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
      dateofJoining: [''],
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
      transactionNo: [''],
      district: [''],
      cardexNumber: [''],
      ddoNumber: [''],

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
        dateofJoining: ' 01/02/2002',
        joiningPayBand: '5200',
        joiningPayBandValue: '2400',
        joiningGradePay: '1800',
        currentBasicPay: '5400',
        currentGrade: 'S-1',
        currentScale: '2550-55-2660-60-3200',
        benefitEffictiveDate: '26/11/2019',
        dateOfRetirement: '26/8/2026',
        dateOfNextIncrementFirst: '01/07/2002',
        dateOfNextIncrementSecond: '01/07/2004',
        dateOfNextIncrementThird: '01/07/2007',
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
    const dialogRef = this.dialog.open(Shettypay1DialogModal, {
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
        // this.toastr.error('Please fill the detail.');
      }
    }
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
}

@Component({
  selector: 'shettypay1-dialog-modal',
  templateUrl: 'shettypay1-dialog-modal.html',
})
export class Shettypay1DialogModal {
  constructor(
    public dialogRef: MatDialogRef<Shettypay1DialogModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  close(): void {
    this.dialogRef.close();
  }

}




