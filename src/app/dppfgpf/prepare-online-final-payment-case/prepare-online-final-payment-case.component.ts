import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DppfgpfMessage } from 'src/app/common/error-message/common-message.constants';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DialogData } from 'src/app/model/standing-charge';
import { ListValue } from 'src/app/model/common-grant';
import { WorkflowDetailsAuditorMappingComponent } from '../workflow-details-auditor-mapping/workflow-details-auditor-mapping.component';
import { TabelElement } from 'src/app/model/dppfgpf';

@Component({
  selector: 'app-prepare-online-final-payment-case',
  templateUrl: './prepare-online-final-payment-case.component.html',
  styleUrls: ['./prepare-online-final-payment-case.component.css']
})
export class PrepareOnlineFinalPaymentCaseComponent implements OnInit {

  errorMessage;
  selectedIndexMain = 0;
  fileBrowseIndex: number;
  DDO: Boolean = true;
  isNonDDO = false;
  todayDate = Date.now();

  inwardDialogFormGroup: FormGroup;
  typeOfReopenCloseCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPAOCtrl: FormControl = new FormControl();
  typeOfSubTreasuryCtrl: FormControl = new FormControl();
  typeOfReasonCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();

  classTypeOfReopenClose: ListValue[] = [
    { value: '1', viewValue: 'Reopen' },
    { value: '1', viewValue: 'Close' },

  ];
  classTypeOfDistrict: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad ' },
    { value: '2', viewValue: 'Amreli' },
    { value: '3', viewValue: 'Anand ' },
    { value: '4', viewValue: 'Assam' },
    { value: '5', viewValue: 'Bharuch ' },
    { value: '8', viewValue: 'Gandhinagar' },
    { value: '9', viewValue: 'Kheda ' },

  ];

  classTypeOfTreasuryPAO: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar ' },

  ];

  classTypeOfSubTreasury: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '1', viewValue: 'Gandhinagar' },

  ];
  classTypeOfReason: ListValue[] = [
    { value: '1', viewValue: 'Retirement' },
    { value: '2', viewValue: 'Death' },
    { value: '3', viewValue: 'Transfer Outside DPPF To District Panchayat' },
    { value: '4', viewValue: 'Transfer Inside DPPF' },

  ];

  ELEMENT_DATA: TabelElement[] = [
    {
      name: undefined,
      file: undefined,
      attachment: 'Declaration Head Of The Office'
    },
    {
      name: undefined,
      file: undefined,
      attachment: 'Declaration Of DDO By Admin.dept In Concurrence With FD'
    },
    { name: undefined, file: undefined, attachment: 'Approved Establishment' },
    {
      name: undefined,
      file: undefined,
      attachment: 'Statement As Per Notification Dated 02/06/2001'
    },
    {
      name: undefined,
      file: undefined,
      attachment: 'Certificate Regarding Inclusion As a New Item In Budget'
    },
    {
      name: undefined,
      file: undefined,
      attachment:
        'Order Of Distribution Of Employees( in case of split of office)'
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

  dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
  nonDdoDataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(

    private fb: FormBuilder,
    private el: ElementRef,
    private toastr: ToastrService,
    public dialog: MatDialog

  ) { }

  ngOnInit() {

    this.errorMessage = DppfgpfMessage;
    this.inwardDialogFormGroup = this.fb.group({
      reopenClose: '',
      employeeNo: '',
      gpfNo: '',
      shortName: '',
      firstName: '',
      middleName: '',
      lastName: '',
      majorHead: '',
      statusOnDate: '',
      letterNo: '',
      letterDate: '',
      district: '',
      treasuryPao: '',
      subTreasury: '',
      cardexNo: '',
      ddoName: '',
      basicPay: '',
      accountCloseDetails: '',
      reason: '',
      accountCloseDate: '',
      reasonDate: '',
      noting: '',

    });
  }

  enterEmployeeNo() {
    this.inwardDialogFormGroup.patchValue({
      reopenClose: '',
      gpfNo: 'DW/DPP/8762',
      shortName: 'KKC',
      firstName: 'KANU',
      middleName: 'KHIMA',
      lastName: 'CHAVDA',
      majorHead: '8009',
      statusOnDate: 'OPEN',
      letterNo: 'GOG/01/123',
      letterDate: new Date(),
      district: '1',
      treasuryPao: '1',
      subTreasury: '1',
      cardexNo: '134',
      ddoName: 'Civil Judge, District Court Gandhinagar',
      basicPay: '15700',
      accountCloseDetails: '',
      reason: '',
      accountCloseDate: '',
      reasonDate: '',
      noting: '',
    });
  }
  getTabIndexMain(tabIndex) {
    this.selectedIndexMain = tabIndex;
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
  workflowDetails() {
    const dialogRef = this.dialog.open(WorkflowDetailsAuditorMappingComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }



  deleteRecoveryRow(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(
      this.dataSourceBrowse.data
    );
  }
  openAccountDetailOpen() {

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(OpenAccountDetaiOpenDialog, {
      width: '1400px',
      height: '600px',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

    });

  }
  openAccountDetail() {

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(OpenAccountDetaiDialog, {
      width: '1400px',
      height: '600px',
    }
    );
    dialogRef.afterClosed().subscribe(result => {

    });
  }
}


@Component({
  selector: 'app-open-account-detail-open-dialog',
  templateUrl: './open-account-detail-open-dialog.html',
  styleUrls: ['./prepare-online-final-payment-case.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class OpenAccountDetaiOpenDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OpenAccountDetaiOpenDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() { }

  okClick($event?) {
    this.dialogRef.close();
  }

}



@Component({
  selector: 'app-open-account-detail-dialog',
  templateUrl: './open-account-detail-dialog.html',
  styleUrls: ['./prepare-online-final-payment-case.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class OpenAccountDetaiDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OpenAccountDetaiDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {

  }

  okClick($event?) {
    this.dialogRef.close();
  }


}



