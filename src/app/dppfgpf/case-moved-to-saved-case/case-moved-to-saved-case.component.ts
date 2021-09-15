import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import { WorkflowDetailsAuditorMappingComponent } from '../workflow-details-auditor-mapping/workflow-details-auditor-mapping.component';
// tslint:disable-next-line: max-line-length
import { OpenAccountDetaiOpenDialog, OpenAccountDetaiDialog } from '../prepare-online-final-payment-case/prepare-online-final-payment-case.component';
import { HeadDataCaseMoved, SavedCasesInterface, TabelElement } from 'src/app/model/dppfgpf';



@Component({
  selector: 'app-case-moved-to-saved-case',
  templateUrl: './case-moved-to-saved-case.component.html',
  styleUrls: ['./case-moved-to-saved-case.component.css']
})
export class CaseMovedToSavedCaseComponent implements OnInit {
  // Variable
  tableDisplay;
  // Date
  todayDate = Date.now();
  // Form Group
  caseMovedToSavedCaseForm: FormGroup;
  selection = new SelectionModel<HeadDataCaseMoved>(true, []);
  // List
  Element_Data: SavedCasesInterface[] = [
    {
      inwardNo: '32345/01/2019',
      inwardDate: '12/01/2020',
      inwardType: 'Class 4 Final Payment Register',
      gpfNo: 'GA/DAT/13456',
      status: 'Raman Singh',
      from: 'Rajiv',
      noting: '',
    },
  ];
  // TAble Source
  displayedColumns: any[] = [
    'select',
    'inwardNo',
    'inwardDate',
    'inwardType',
    'gpfNo',
    'status',
    'from',
    'noting'
  ];

  dataSource = new MatTableDataSource<SavedCasesInterface>(this.Element_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.caseMovedToSavedCaseForm = this.fb.group({
      search: '',
    });
  }

  checkboxLabel(row?: HeadDataCaseMoved): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() { }

  openSearchDialog(event?) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SearchDialog, {
      width: '1300px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.tableDisplay = result;
    });
  }

  openInwardDialog() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(InwardDialog, {
      width: '1300px',
      height: 'auto',
    }
    );
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  workflowDetail() {
    const dialogRef = this.dialog.open(WorkflowDetailsAuditorMappingComponent, {
      width: '1200px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-case-moved-dialog',
  templateUrl: './case-moved-dialog.html',
  styleUrls: ['./case-moved-to-saved-case.component.css']

})
// tslint:disable-next-line: component-class-suffix
export class SearchDialog implements OnInit {
  clkSearch = false;
  clkSubmit = false;
  maxDate = new Date();
  caseMovedToSavedCasesForm: FormGroup;
  typeOfInwardTypeCtrl: FormControl = new FormControl();
  classTypeOfInwardType: ListValue[] = [
    { value: '1', viewValue: 'Final Payment Register' },
    { value: '2', viewValue: ' Supplementary Payment Transfer' },
  ];


  selection = new SelectionModel<HeadDataCaseMoved>(true, []);


  Element_Data: SavedCasesInterface[] = [
    {
      inwardNo: '41345/01/2019',
      inwardDate: '12/02/2020',
      inwardType: 'Class 4 Final Payment Register',
      gpfNo: 'PW/DAT/18773',
      status: 'Raman Singh',
      from: 'Rajiv',
      noting: '',
    },
    {
      inwardNo: '32345/01/2019',
      inwardDate: '12/01/2020',
      inwardType: 'Class 4 Final Payment Register',
      gpfNo: 'GA/DAT/13456',
      status: 'Raman Singh',
      from: 'Rajiv',
      noting: '',
    },
  ];

  displayedColumns: any[] = [
    'select',
    'inwardNo',
    'inwardDate',
    'inwardType',
    'gpfNo',
    'status',
    'from',
  ];

  dataSource = new MatTableDataSource<SavedCasesInterface>(this.Element_Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(

    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SearchDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.caseMovedToSavedCasesForm = this.fb.group({
      inwardType: '',
      inwardNo: '',
      inwardDate: '',
    });
  }

  okClick($event?) {
    this.dialogRef.close();
  }

  // input.dropdown !=null && input.dropdown != "" && input.dropdown != "-Select-"
  searchInwardNo() {
    if (this.caseMovedToSavedCasesForm.controls.inwardType.value !== '' &&
      this.caseMovedToSavedCasesForm.controls.inwardNo.value !== '' &&
      this.caseMovedToSavedCasesForm.controls.inwardDate.value !== '') {
      this.clkSearch = true;
    }
  }

  checkboxLabel(row?: HeadDataCaseMoved): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() { }
  submitToParent() {
    this.clkSubmit = true;
    this.dialogRef.close(this.clkSubmit);


  }

}



@Component({
  selector: 'app-inward-dialog',
  templateUrl: './inward-dialog.html',
  styleUrls: ['./case-moved-to-saved-case.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class InwardDialog implements OnInit {
  selectedIndexMain = 0;
  fileBrowseIndex: number;
  DDO: Boolean = true;
  isNonDDO = false;

  inwardDialogFormGroup: FormGroup;
  typeOfReopenCloseCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTreasuryPAOCtrl: FormControl = new FormControl();
  typeOfSubTreasuryCtrl: FormControl = new FormControl();
  typeOfReasonCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();

  classTypeOfReopenClose: ListValue[] = [
    { value: '1', viewValue: 'Reopen' },
    { value: '2', viewValue: 'Close' },

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
    { value: '2', viewValue: 'Gandhinagar' },

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
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<InwardDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {

    this.inwardDialogFormGroup = this.fb.group({
      reopenClose: '2',
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
      cardexNo: '4',
      ddoName: 'Civil Judge, District Court Gandhinagar',
      basicPay: '15700',
      acrNo: 'Auto Populate',
      finalPaymentAuthorityNo: 'Auto Populate',
      accountCloseDetailOpening: '',
      accountCloseDetails: '',
      reason: '1',
      accountCloseDate: '',
      reasonDate: new Date('06/02/2019'),
      noting: '',

    });


  }

  getTabIndexMain(tabIndex) {
    this.selectedIndexMain = tabIndex;
  }

  okClick() {
    this.dialogRef.close();
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
  onlyDecimalSlash(event: any) {
    const pattern = /^[0-9/]+$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }

  }

  fillDdo() {
    this.inwardDialogFormGroup.patchValue({ ddoName: 'Civil Judge, District Court Gandhinagar' });

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
