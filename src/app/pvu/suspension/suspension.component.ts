import { Data6thModel, Data7thModel } from './../../model/suspension';
import { CommonListing } from './../../model/common-listing';
import { pvuMessage } from './../../common/error-message/common-message.constants';
import { SearchEmployeeComponent } from './../search-employee/search-employee.component';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDatepickerInputEvent } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-suspension',
  templateUrl: './suspension.component.html',
  styleUrls: ['./suspension.component.css']
})
export class SuspensionComponent implements OnInit {
  disabled = false;
  suspensionForm: FormGroup;
  date = new Date();
  private _onDestroy = new Subject<void>();
  show6thPC: Boolean = false;
  show7thPC: Boolean = true;

  clouserGuiltyDetails: Boolean = false;
  clouserNotGuiltyDetails: Boolean = false;

  pay_commission_list: CommonListing[] = [
    { value: '1', viewValue: '6th Pay Commission' },
    { value: '2', viewValue: '7th Pay Commission' }
  ];

  ReasonForSuspensionList: CommonListing[] = [
    { value: '1', viewValue: 'Act of Indiscipline' }
  ];
  suspension_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ]

  closure_list: CommonListing[] = [
    { value: '1', viewValue: 'Guilty' },
    { value: '2', viewValue: 'Not Guilty' }
  ];
  
  filteredAttachmentType: CommonListing[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Final Order' }
  ];

  ReasonCtrl: FormControl = new FormControl();
  
  data6th: Data6thModel[] = [
    {
      fromDate: '',
      currentPayBand: '',
      currentPayBandValue: 0,
      currentGradePay: 0,
      payablePercentOfGradePay: 0,
      payableAmountOfGradePay: 0,
      payablePercentOfPayBandValue: 0,
      payableAmountOfPayBandValue: 0
    }
  ];

  data6thFilled: Data6thModel[] = [
    {
      fromDate: '',
      currentPayBand: '1S',
      currentPayBandValue: 4440,
      currentGradePay: 1300,
      payablePercentOfGradePay: 40,
      payableAmountOfGradePay: 680,
      payablePercentOfPayBandValue: 50,
      payableAmountOfPayBandValue: 444
    }
  ];

  data7th: Data7thModel[] = [
    {
      fromDate: '',
      currentPayLevel: '',
      currentCellId: 0,
      currentBasicPay: 0,
      payablePercentOfBasicPay: 0,
      payableAmountOfBasicPay: 0,
    }
  ];

  data7thFilled: Data7thModel[] = [
    {
      fromDate: '',
      currentPayLevel: 'Level 1',
      currentCellId: 1,
      currentBasicPay: 5740,
      payablePercentOfBasicPay: 50,
      payableAmountOfBasicPay: 574,
    }
  ];

  closureCtrl: FormControl = new FormControl();
  reasonForSuspensionCtrl: FormControl = new FormControl();
  attachmentTypeCtrl: FormControl = new FormControl();

  dataSource6thPC = new MatTableDataSource(this.data6th);
  dataSource6thPCFilled = new MatTableDataSource(this.data6thFilled);
  displayed6thPCColumns = ['srNo', 'fromDate', 'currentPayBand', 'currentPayBandValue', 'currentGradePay', 'payablePercentOfGradePay', 'payableAmountOfGradePay', 'payablePercentOfPayBandValue', 'payableAmountOfPayBandValue', 'Action'];


  dataSource7thPC = new MatTableDataSource;
  dataSource7thPCFilled = new MatTableDataSource(this.data7thFilled);
  displayed7thPCColumns = ['srNo', 'fromDate', 'currentPayLevel', 'currentCellId', 'currentBasicPay', 'payablePercentOfBasicPay', 'payableAmountOfBasicPay', 'Action'];

  fileBrowseIndex: number;
  brwoseData: any[] = [{
    name: undefined,
    file: undefined,
    attachment: 'Final Order'
  }];

  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private el: ElementRef,
    public dialog: MatDialog,
    public router: Router
  ) { }

  errorMessages = pvuMessage;

  ngOnInit() {
    this.createForm();
    this.suspensionForm.controls.reinstistYesNo.setValue('2');
  }


  createForm() {
    this.suspensionForm = this.fb.group({
      orderNo: [''],
      orderDate: [''],
      suspensionEventDate:[''],
      officeName: [''],
      payCommission: [''],
      empNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      empName: [''],
      class: [''],
      designation: [''],
      empOfficeName: [''],
      payBand: [''],
      payBandValue: [''],
      gradePay: [''],
      payLevel: [''],
      cellId: [''],
      basicPay: [''],
      reasonForSuspension: ['', Validators.required],
      description: ['', Validators.required],
      suspensionStartDate: ['', Validators.required],
      suspensionEndDate: ['', Validators.required],
      suspensionClosureDate: ['', Validators.required],
      closure: [''],
      noOfDaysSuspension: [''],
      typeOfPunishment: ['', Validators.required],
      remarks: ['', Validators.required],
      payablePercentOfGradePay: [''],
      payablePercentOfPayBandValue: [''],
      reinstistYesNo: [''],
      doj:[''],
      dateRetirement:[''],
      GuiltyDetailsrRmarks:['']
    });
  }

  TextAriaDisabled= true;

  onDisable(init: boolean) {
    if (init)
      this.createForm();
    this.suspensionForm.controls.suspensionEndDate.disable();
    this.suspensionForm.controls.suspensionClosureDate.disable();
    this.suspensionForm.controls.closure.disable();
    this.suspensionForm.controls.typeOfPunishment.disable();
    this.isAddBtn = true;
    this.TextAriaDisabled= true;
    
  }
  isAddBtn = true;
  onEnable(init: boolean) {
    if (init)
    
      this.createForm();
    this.suspensionForm.controls.suspensionEndDate.enable();
    this.suspensionForm.controls.suspensionClosureDate.enable();
    this.suspensionForm.controls.closure.enable();
    this.suspensionForm.controls.typeOfPunishment.enable();
    this.isAddBtn = false;
    this.TextAriaDisabled= false;
  }
  openDialogEmpNo() {
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {

      this.suspensionForm.patchValue({
        empNo: result[0].employeeNumber,
        empName: result[0].employeeName,
        class: 'Class I',
        designation: result[0].designation,
        empOfficeName: result[0].officeName,
        payBand: '1S',
        payBandValue: '4440',
        gradePay: '1300',
        payLevel: 'Level 1',
        cellId: '1',
        basicPay: '5740',
        doj:'01/05/2006',
       dateRetirement:'01/05/2036',
      });

      this.dataSource7thPC = this.dataSource7thPCFilled;
      this.dataSource6thPC = this.dataSource6thPCFilled;
    });
  }

  onPayCommissionSelect(pay) {
    if (pay.value === '1') {
      this.show7thPC = false;
      this.show6thPC = true;
    }
    if (pay.value === '2') {
      this.show6thPC = false;
      this.show7thPC = true;
    }

  }
  disableTextbox =  false;
  decimalKeyPress(event) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }

  decimalPoint(data, key) {
    console.log(key);
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }

  calculatePayableBP(item) {
    let returnData = 0;
    if (item.currentBasicPay || item.payablePercentOfBasicPay) {
      returnData = (Number(item.currentBasicPay) * Number(item.payablePercentOfBasicPay)) / 100;
    }
    return returnData;
  }

  calculatePayableGP(item) {
    let returnData = 0;
    if (item.currentGradePay || item.payablePercentOfGradePay) {
      returnData = (Number(item.currentGradePay) * Number(item.payablePercentOfGradePay)) / 100;
    }
    return returnData;
  }

  calculatePayablePBV(item) {
    let returnData = 0;
    if (item.currentPayBandValue || item.payablePercentOfPayBandValue) {
      returnData = (Number(item.currentPayBandValue) * Number(item.payablePercentOfPayBandValue)) / 100;
    }
    return returnData;
  }

  add6thPC() {
    if (this.dataSource6thPC) {
      this.dataSource6thPC.data.forEach((element, index) => {
        const p_data = this.dataSource6thPC.data;
        p_data.push({
          fromDate: '',
          currentPayBand: '1S',
          currentPayBandValue: 4440,
          currentGradePay: 1300,
          payablePercentOfGradePay: 40,
          payableAmountOfGradePay: 680,
          payablePercentOfPayBandValue: 50,
          payableAmountOfPayBandValue: 444
        });
        this.dataSource6thPC.data = p_data;
      
      });
    }
  }

  delete6thPC(index) {
    this.dataSource6thPC.data.splice(index, 1);
    this.dataSource6thPC = new MatTableDataSource(this.dataSource6thPC.data);
  }

  add7thPC() {
    if (this.dataSource7thPC) {
      this.dataSource7thPC.data.forEach((element, index) => {
        const p_data = this.dataSource7thPC.data;
        p_data.push({
          fromDate: '10/12/2017',
          currentPayLevel: 'Level 1',
          currentCellId: 1,
          currentBasicPay: 5740,
          payablePercentOfBasicPay: 50,
          payableAmountOfBasicPay: 574,
        });
        this.dataSource7thPC.data = p_data;
    
      });
    }
  }

  delete7thPC(index) {
    this.dataSource7thPC.data.splice(index, 1);
    this.dataSource7thPC = new MatTableDataSource(this.dataSource7thPC.data);
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

  reset() {
    this.suspensionForm.reset();
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  saveSuspension() {
  }
  
  showClouserDetails(event) {
    if (event.value === '1') {
        this.clouserGuiltyDetails = true;
        this.clouserNotGuiltyDetails = false;
    } else {
        this.clouserNotGuiltyDetails = true;
        this.clouserGuiltyDetails = false;
    }
}

}


