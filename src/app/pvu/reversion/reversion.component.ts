
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { MatTableDataSource } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonListing } from 'src/app/model/common-listing';
import { pvuMessage } from 'src/app/common/error-message/common-message.constants';
@Component({
  selector: 'app-reversion',
  templateUrl: './reversion.component.html',
  styleUrls: ['./reversion.component.css']
})
export class ReversionComponent implements OnInit {
  containers = [];
  currentDetails: Boolean = false;
  showFifthPayCommField = false;
  initiatiomdate: any = new Date();
  showDate: Boolean = false;
  val: number;
  errorMessage;
  newDynamic: any = {};
  emplyeeeDataListShow: Boolean = false;
  showSixthPayCommField;
  showSeventhPayCommField;
  reversionForm: FormGroup;
  payCommissionCtrl: FormControl = new FormControl();
typeCtrl: FormControl = new FormControl();
classCtrl: FormControl = new FormControl();
designationCtrl: FormControl = new FormControl();
payLevelCtrl: FormControl = new FormControl();
cellIdCtrl: FormControl = new FormControl();
payBandCtrl: FormControl = new FormControl();
gradePayCtrl: FormControl = new FormControl();
gradeCtrl: FormControl = new FormControl();
scaleCtrl: FormControl = new FormControl();
date = new FormControl(new Date());
payCommission_list: CommonListing[] = [
  { value: '1', viewValue: '7th Pay Commission' },
  { value: '2', viewValue: '6th Pay Commission' },
  { value: '3', viewValue: '5th Pay Commission' },
];
type_list: CommonListing[] = [
  {value: '1', viewValue: 'Promotion'},
  {value: '2', viewValue: 'Reversion'},
];
class_list: CommonListing[] = [
  {value: '1', viewValue: 'Class I'},
  {value: '2', viewValue: 'Class II'},
];
designation_list: CommonListing[] = [
  {value: '1', viewValue: 'Teacher'},
  {value: '2', viewValue: 'Accountent'},
];
payLevel_list: CommonListing[] = [
  {value: '1', viewValue: 'Level 1'},
  {value: '2', viewValue: 'Level 2'},
  {value: '3', viewValue: 'Level 3'},
  {value: '4', viewValue: 'Level 4'},
  {value: '5', viewValue: 'Level 5'},
  {value: '6', viewValue: 'Level 6'},
  {value: '7', viewValue: 'Level 7'},
  {value: '8', viewValue: 'Level 8'},
  {value: '9', viewValue: 'Level 9'},
  {value: '10', viewValue: 'Level 10'},
  {value: '11', viewValue: 'Level 11'},
  {value: '12', viewValue: 'Level 12'},
  {value: '13', viewValue: 'Level 13'},
  {value: '14', viewValue: 'Level 14'},
  {value: '15', viewValue: 'Level 15'},
  {value: '16', viewValue: 'Level 16'},
  {value: '17', viewValue: 'Level 17'},
  {value: '18', viewValue: 'Level 18'},
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
  {value: '1', viewValue: '1800'},
  {value: '2', viewValue: '2200'},
];
payBand_list: CommonListing[] = [
  {value: '1', viewValue: '5200'},
  {value: '2', viewValue: '2200'},
];
optionOpted_list: CommonListing[] = [
  {value: '1', viewValue: 'Yes'},
  {value: '2', viewValue: 'No'},
];
grade_list: CommonListing[] = [
  { value: '1', viewValue: 'S-4' },
];
scale_list: CommonListing[] = [
  { value: '1', viewValue: '2750-70-3800-75-4400' },
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

constructor( private fb: FormBuilder,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private el: ElementRef){ }

  ngOnInit() {
    this.errorMessage = pvuMessage;
    this.reversionForm = this.fb.group({
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
      employeeBasicPay: [''],
      dateOfNextIncrement: [''],
      employeeDoj: [''],
      class: [''],
      designation: [''],
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
      employeePayBandValueCurrent: [''],
      optionOpted: [''],
      dateOfNextIncrementPost: [''],
      dateOfJoiningReversion: [''],
      BasicPay: [''],
      eventOrderDate: [''],
      eventEffectiveDate: [''],
      dateOfRetirement: [''],
      grade: [''],
      scale: [''],
      gradeCurrent: [''],
      scaleCurrent: ['']
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
      const revisionFormValue = this.reversionForm.value;
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
  saveEstimate(data) {
  }
  emplyeeeDataList() {
    this.emplyeeeDataListShow = !this.emplyeeeDataListShow;
  }
  openDialogEmployeeNumber() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reversionForm.patchValue({
        employeeNumber: '1278456976',
        employeeName: 'Amit Pandey',
        employeeClass: 'Class I',
        employeeDesignation: 'Teacher',
        employeeOfficeName: 'Office 1',
        employeePayLevel: 'Level 1',
        employeeCellId: '1',
        employeePayBand: '2200',
        employeePayBandValueCurrent: '2400',
        employeeGradePay: '5200',
        BasicPay: '4600',
        dateOfNextIncrement: '26/11/2019',
        employeeDoj: '26/11/2019',
        locationName: 'Ahemdabad',
        DateofPassing: '22/11/2019',
        examName: 'UPSC',
        dateOfRetirement: '22/11/2025',
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
  basicPay() {
    const gradePayList = this.gradePay_list.filter( gradePay => {
        return gradePay.value === this.reversionForm.value.gradePay;
    });
    this.reversionForm.controls.employeeBasicPay.setValue(Number(gradePayList[0]['viewValue'] ) + Number(this.reversionForm.value.employeePayBandValue));
  }
  goToDashboard() {}
  print() {}
  resetForm() {
    this.reversionForm.reset();
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

