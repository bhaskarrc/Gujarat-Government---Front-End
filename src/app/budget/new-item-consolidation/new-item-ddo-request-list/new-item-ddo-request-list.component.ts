import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import * as cloneDeep from 'lodash/cloneDeep';
import { ToastrService } from 'ngx-toastr';
// import { DialogData } from '../new-item-consolidation/new-item-consolidate.component';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { ConfirmDialogModel, NewItemHistoryComponent } from '../new-item-history/new-item-history.component';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { NewItemMergedItemsComponent } from '../new-item-merged-items/new-item-merged-items.component';
import { initChangeDetectorIfExisting } from '@angular/core/src/render3/instructions';
import {DDOList, FormF, FormCStmt, ObjectHeadBreakup, District, Attachment} from'../../../model/new-item-consolidation';
import { HeaderElement, CommonListing } from '../../../model/common-listing';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';

export interface DialogData {
  forEach(arg0: (element: any) => void);
}

const DDO_List: DDOList[] = [
  {
    checkbox: false, ddoName: 'DDO 1', itemCategory: 'New Vehicle', itemName: 'Car Purchase',
    writeUpEn: 'New Car Purchase for Manager',
    ddoProposedAmt: 451.52, ddoReferenceNo: '19-20/BUD/SCE/001', ddoTransactionDate: '18-Sep-2019 15:48', status: 'Merged',
  },
  {
    checkbox: false, ddoName: 'DDO 2', itemCategory: 'New Vehicle', itemName: 'New Car Purchase',
    writeUpEn: 'New Car Purchase for Dy. Manager',
    ddoProposedAmt: 235.52, ddoReferenceNo: '19-20/BUD/SCE/061',
    ddoTransactionDate: '16-Sep-2019 10:48', status: '-',
  },
  {
    checkbox: false, ddoName: 'DDO 3', itemCategory: 'New Vehicle', itemName: 'New Car Purchase',
    writeUpEn: 'New Car Purchase for Office',
    ddoProposedAmt: 450.52, ddoReferenceNo: '19-20/BUD/SCE/151',
    ddoTransactionDate: '10-Sep-2019 18:00', status: 'Merged',
  },
  {
    checkbox: false, ddoName: 'DDO 4', itemCategory: 'New Vehicle', itemName: 'New Car Purchase',
    writeUpEn: 'New Car Purchase for DDO',
    ddoProposedAmt: 451.52, ddoReferenceNo: '19-20/BUD/SCE/007',
    ddoTransactionDate: '18-Sep-2019 15:48', status: '-',
  },
  {
    checkbox: false, ddoName: 'DDO 5', itemCategory: 'New Vehicle', itemName: 'New Car Purchase',
    writeUpEn: 'New Car Purchase for Manager',
    ddoProposedAmt: 99.52, ddoReferenceNo: '19-20/BUD/SCE/151',
    ddoTransactionDate: '16-Sep-2019 10:48', status: '-',
  },
  {
    checkbox: false, ddoName: 'DDO 6', itemCategory: 'New Vehicle', itemName: 'New Car Purchase',
    writeUpEn: 'New Car Purchase for Office Use',
    ddoProposedAmt: 451.52, ddoReferenceNo: '19-20/BUD/SCE/14',
    ddoTransactionDate: '10-Sep-2019 18:00', status: '-',
  },
  {
    checkbox: false, ddoName: 'DDO 7', itemCategory: 'New Vehicle', itemName: 'New Car Purchase',
    writeUpEn: 'New Car Purchase for DDO',
    ddoProposedAmt: 45.52, ddoReferenceNo: '19-20/BUD/SCE/151',
    ddoTransactionDate: '10-Sep-2019 18:00', status: '-',
  },
  {
    checkbox: false, ddoName: 'DDO 8', itemCategory: 'New Vehicle', itemName: 'New Car Purchase',
    writeUpEn: 'New Car Purchase for Manager',
    ddoProposedAmt: 41.52, ddoReferenceNo: '19-20/BUD/SCE/003',
    ddoTransactionDate: '18-Sep-2019 15:48', status: '-',
  },
  {
    checkbox: false, ddoName: 'DDO 9', itemCategory: 'New Vehicle', itemName: 'New Car Purchase',
    writeUpEn: 'New Car Purchase for Office Use',
    ddoProposedAmt: 51.52, ddoReferenceNo: '19-20/BUD/SCE/007',
    ddoTransactionDate: '16-Sep-2019 10:48', status: '-',
  },
  {
    checkbox: false, ddoName: 'DDO 10', itemCategory: 'New Vehicle', itemName: 'New Car Purchase',
    writeUpEn: 'New Car Purchase for Manager',
    ddoProposedAmt: 4510.52, ddoReferenceNo: '19-20/BUD/SCE/151',
    ddoTransactionDate: '16-Sep-2019 10:48', status: '-',
  },
];

const ELEMENT_DATA_DDO: FormF[] = [
  {
    objecthead: '3133',
    recurrentAmount: 2.00,
    nonRecurrentAmount: 2.00,
    budgetEstimateNextYear: 4.00,
    ultimateAnnualRecurrentAmount: 100,
    amountRecurrentHOD: 0, 
    amountNonRecurrentHOD: 0, 
    amountAnnualRecurrentHOD: 0,
    amountNextYearHOD: 0,
    remarks: 'Remarks for 1100',
    isBreakup: false
  },
  {
    objecthead: '3135-13',
    recurrentAmount: 2.00,
    nonRecurrentAmount: 2.00,
    budgetEstimateNextYear: 4.00,
    ultimateAnnualRecurrentAmount: 100,
    amountRecurrentHOD: 0, 
    amountNonRecurrentHOD: 0,
    amountAnnualRecurrentHOD: 0,
    amountNextYearHOD: 0,
    remarks: 'Remarks for 5700',
    isBreakup: false
  },
  {
    objecthead: '3153',
    recurrentAmount: 2.00,
    nonRecurrentAmount: 2.00,
    budgetEstimateNextYear: 4.00,
    ultimateAnnualRecurrentAmount: 100,
    amountRecurrentHOD: 0,
     amountNonRecurrentHOD: 0, 
     amountAnnualRecurrentHOD: 0, 
     amountNextYearHOD: 0,
    remarks: 'Remarks for 3131',
    isBreakup: true
  }
];

const ELEMENT_DATA_F: FormF[] = [
  {
    objecthead: '3133',
    recurrentAmount: 2.00,
    nonRecurrentAmount: 2.00,
    budgetEstimateNextYear: 4.00,
    ultimateAnnualRecurrentAmount: 100,
    amountRecurrentHOD: 0, 
    amountNonRecurrentHOD: 0,
     amountAnnualRecurrentHOD: 0, 
     amountNextYearHOD: 0,
    remarks: 'Remarks for 1100',
    isBreakup: false
  },
  {
    objecthead: '3135-13',
    recurrentAmount: 2.00,
    nonRecurrentAmount: 2.00,
    budgetEstimateNextYear: 4.00,
    ultimateAnnualRecurrentAmount: 100,
    amountRecurrentHOD: 0, 
    amountNonRecurrentHOD: 0, 
    amountAnnualRecurrentHOD: 0,
    amountNextYearHOD: 0,
    remarks: 'Remarks for 5700',
    isBreakup: false
  },
  {
    objecthead: '3153',
    recurrentAmount: 2.00,
    nonRecurrentAmount: 2.00,
    budgetEstimateNextYear: 4.00,
    ultimateAnnualRecurrentAmount: 100,
    amountRecurrentHOD: 0,
    amountNonRecurrentHOD: 0, 
    amountAnnualRecurrentHOD:0, 
    amountNextYearHOD: 0,
    remarks: 'Remarks for 3131',
    isBreakup: true
  }
];

const ELEMENT_DATA_C2: FormCStmt[] = [
  {
    objecthead: '3131',
    recurrentAmount: 2006.00,
    nonRecurrentAmount: 2006.00,
    budgetEstimateNextYear: 4012.00,
    ultimateAnnualRecurrentAmount: 100,
    remarks: 'Remarks for 1100',
    isBreakup: false,
  },
  {
    objecthead: '3132',
    recurrentAmount: 2006.00,
    nonRecurrentAmount: 2006.00,
    budgetEstimateNextYear: 4012.00,
    ultimateAnnualRecurrentAmount: 100,
    remarks: 'Remarks for 5700',
    isBreakup: true
  },
  {
    objecthead: '3135-14',
    recurrentAmount: 2006.00,
    nonRecurrentAmount: 2006.00,
    budgetEstimateNextYear: 4012.00,
    ultimateAnnualRecurrentAmount: 100,
    remarks: 'Remarks for 3131',
    isBreakup: true
  }

];

const OBJECT_HEAD_BREAKUP_DATA: ObjectHeadBreakup[] = [
  {
    objecthead: '6100', recurrentAmount: 58, nonRecurrentAmount: 105, budgetEstimateNextYear: 163,
    ultimateAnnualRecurrentAmount: 1956, remarks: 'Remarks for 6100'
  },
  {
    objecthead: '6200', recurrentAmount: 75, nonRecurrentAmount: 200, budgetEstimateNextYear: 275,
    ultimateAnnualRecurrentAmount: 3300, remarks: 'Remarks for 6200'
  },
  {
    objecthead: '6300', recurrentAmount: 89, nonRecurrentAmount: 179, budgetEstimateNextYear: 268,
    ultimateAnnualRecurrentAmount: 3216, remarks: 'Remarks for 6300 '
  },
  {
    objecthead: '6400', recurrentAmount: 64, nonRecurrentAmount: 111, budgetEstimateNextYear: 175,
    ultimateAnnualRecurrentAmount: 2100, remarks: 'Remarks for 6400'
  },
  {
    objecthead: '7000', recurrentAmount: 95, nonRecurrentAmount: 120, budgetEstimateNextYear: 215,
    ultimateAnnualRecurrentAmount: 2580, remarks: 'Remarks for 7000'
  },
  {
    objecthead: '7057', recurrentAmount: 55, nonRecurrentAmount: 210, budgetEstimateNextYear: 265,
    ultimateAnnualRecurrentAmount: 3180, remarks: 'Remarks for 7057'
  },
  {
    objecthead: '7058', recurrentAmount: 90, nonRecurrentAmount: 101, budgetEstimateNextYear: 191,
    ultimateAnnualRecurrentAmount: 2292, remarks: 'Remarks for 7058 '
  },
];

const DISTRICT_ELEMENT_DATA: District[] = [
  { id: 1, expendature: 0.00, districtName: 'Ahmedabad', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 2, expendature: 0.00, districtName: 'Vadodara', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 3, expendature: 0.00, districtName: 'Anand', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 4, expendature: 0.00, districtName: 'Chhota Udaipur', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 5, expendature: 0.00, districtName: 'Dahod', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 6, expendature: 0.00, districtName: 'Kheda', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 7, expendature: 0.00, districtName: 'Mahisagar', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 8, expendature: 0.00, districtName: 'Panchmahal', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 9, expendature: 0.00, districtName: 'Gandhinagar', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 10, expendature: 0.00, districtName: 'Aravalli', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 11, expendature: 0.00, districtName: 'Banaskantha', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 12, expendature: 0.00, districtName: 'Mehsana', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 13, expendature: 0.00, districtName: 'Patan', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 14, expendature: 0.00, districtName: 'Sabarkantha', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 15, expendature: 0.00, districtName: 'Rajkot', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 16, expendature: 0.00, districtName: 'Amreli', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 17, expendature: 0.00, districtName: 'Bhavnagar', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 18, expendature: 0.00, districtName: 'Botad', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 19, expendature: 0.00, districtName: 'Devbhoomi Dwarka', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 20, expendature: 0.00, districtName: 'Gir Somnath', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 21, expendature: 0.00, districtName: 'Jamnagar', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 22, expendature: 0.00, districtName: 'Junagadh', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 23, expendature: 0.00, districtName: 'Morbi', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 24, expendature: 0.00, districtName: 'Porbandar', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 25, expendature: 0.00, districtName: 'Surendranagar', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 26, expendature: 0.00, districtName: 'Kachchh', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 27, expendature: 0.00, districtName: 'Surat', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 28, expendature: 0.00, districtName: 'Bharuch', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 29, expendature: 0.00, districtName: 'Dang', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 30, expendature: 0.00, districtName: 'Narmada', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 31, expendature: 0.00, districtName: 'Navsari', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 32, expendature: 0.00, districtName: 'Tapi', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 33, expendature: 0.00, districtName: 'Valsad', talukaExpendature: 0.00, gramExpendature: 0.00 },
  { id: 34, expendature: 0.00, districtName: 'State Level Only (if any)', talukaExpendature: 0.00, gramExpendature: 0.00 },
];


@Component({
  selector: 'app-new-item-ddo-request-list',
  templateUrl: './new-item-ddo-request-list.component.html',
  styleUrls: ['./new-item-ddo-request-list.component.css'],
})
export class NewItemDdoRequestListComponent implements OnInit, AfterViewInit {

  headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Department', value: 'Education Department' },
    { label: 'Branch Name', value: 'Budget' },
    { label: 'Demand', value: '001: Other expenditure pertaining to Education Department' },
    { label: 'Major Head', value: '3451: Art and Culture' },
    { label: 'Sector', value: 'B1-B Capital Account of Social and Community Services' },
    { label: 'Sub Sector', value: 'a0-(a) Education, Sports, Art and Culture' },
    { label: 'Sub Major Head', value: '00: ' },
    { label: 'Minor Head', value: '090: Fine Arts Education' },
    { label: 'Sub Head', value: '01: Grants to Sangeet Natya Bharati' },
    { label: 'Detailed Head', value: '00: Grants to Sangeet Natya Bharati' },
    { label: 'Charged/Voted', value: 'Charged' },
    { label: 'Is CSS?', value: 'Yes' },
    { label: 'Form Type', value: 'F' },
    { label: 'Item Category', value: 'New Vehicle' },
  ];

  isSchemeListVisible: Boolean = true;
  isConsolidateVisible: Boolean = true;

  listType: string;
  paginationSize: number[] = [5, 10, 20, 50, 100, 200];

  Attachment_Data: Attachment[] = [
    { attachmentType: 'Supporting Document', fileName: 'PAN.jpeg' },
    { attachmentType: 'Sanction Order', fileName: 'AadharCard.pdf' },
  ];

  ddoListDataSource = new MatTableDataSource(DDO_List);
  ddoListColumn: string[] = [
    'checkbox', 'ddoName', 'itemCategory', 'itemName', 'writeUpEn', 'ddoProposedAmt', 'ddoReferenceNo', 'ddoTransactionDate',
    'status', 'action'
  ];

  dataSourceFormF = new MatTableDataSource(ELEMENT_DATA_DDO);
  displayedColumnsFormF = [
    'objecthead', 'recurrentAmount', 'nonRecurrentAmount', 'budgetEstimateNextYear', 'ultimateAnnualRecurrentAmount',
    'amountRecurrentHOD', 'amountNonRecurrentHOD', 'amountAnnualRecurrentHOD', 'amountNextYearHOD', 'remarks'
  ];

  dataSourceFormCStmt2 = new MatTableDataSource(ELEMENT_DATA_C2);
  displayedColumnsFormCStmt2 = [
    'objecthead', 'recurrentAmount', 'nonRecurrentAmount', 'budgetEstimateNextYear', 'ultimateAnnualRecurrentAmount', 'remarks'
  ];

  objectBreakupDataSource = new MatTableDataSource(OBJECT_HEAD_BREAKUP_DATA);
  objectHeadBreakupColumns = [
    'objecthead', 'recurrentAmount', 'nonRecurrentAmount', 'budgetEstimateNextYear', 'ultimateAnnualRecurrentAmount', 'remarks'
  ];

  districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);
  districtColumns = ['position', 'district', 'expendature', 'talukaExpendature', 'gramExpendature'];

  dataSourceBrowse = new MatTableDataSource(this.Attachment_Data);
  displayedBrowseColumns = ['attachmentType', 'fileName', 'action'];

  @ViewChild(MatSort) ddoListSort: MatSort;

  isMergeEnable: Boolean = false;
  istransferBranch: Boolean = false;

  selectedIndex: number;
  checkbox: Boolean = false;
  isFormC: Boolean = false;
  isFormF: Boolean = false;
  btnShow: Boolean = false;
  btnBack: Boolean = false;
  readOnlyDetailDataSource: any;

  isMergedItem = (index, item) => (item.status === 'Merged');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.ddoListDataSource.sort = this.ddoListSort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ddoListDataSource.filter = filterValue;
  }

  goToNewItemConsolidation() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  checkboxValueChange() {
    let cnt = 0;
    this.ddoListDataSource.data.forEach((element, index) => {
      if (element['checkbox']) {
        cnt++;
      }
    });
    this.isMergeEnable = (cnt > 1) ? true : false;
    this.istransferBranch = (cnt > 0) ? true : false;
  }

  selectAll() {
    this.ddoListDataSource.data.forEach(obj => {
      obj.checkbox = this.checkbox;
    });
    this.isMergeEnable = this.checkbox;
    this.istransferBranch = this.checkbox;
  }

  totalAmtProposedByDDO(data): number {
    let calcAmtProposedByHOD = 0;
    this.ddoListDataSource.data.forEach((element, index) => {
      calcAmtProposedByHOD = calcAmtProposedByHOD + Number(element.ddoProposedAmt);
    });
    return calcAmtProposedByHOD;
  }

  goToDashboard() {
  }

  consolidateView(element) {
    this.isConsolidateVisible = false;
    this.isSchemeListVisible = false;
    this.btnBack = true;
  }

  viewBreakupF(element) {
    this.isConsolidateVisible = true;
    this.readOnlyDetailDataSource = new MatTableDataSource(
      ELEMENT_DATA_F.filter(item => item.objecthead.indexOf(element.objecthead) > -1)
    );
    this.isFormF = true;
    this.isFormC = false;
    this.btnShow = true;
    this.btnBack = false;
  }

  hideBreakup() {
    this.readOnlyDetailDataSource = new MatTableDataSource();
    this.isConsolidateVisible = false;
    this.btnShow = false;
    this.btnBack = true;
  }

  hideFormData() {
    this.isSchemeListVisible = true;
    this.isConsolidateVisible = true;
    this.btnBack = false;
    this.isFormF = false;

  }

  mergeRecord(element): void {
    const selectedData = [];
    selectedData['data'] = this.ddoListDataSource.data.filter(item => item.checkbox);
    selectedData['mergeDialog'] = true;


    const dialogRef = this.dialog.open(NewItemMergeDialogComponent, {
      width: '400px',
      data: selectedData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  submitNewItem(element): void {
    const selectedData = [];
    selectedData['data'] = this.ddoListDataSource.data.filter(item => item.checkbox);
    selectedData['forwardDialog'] = true;

    const dialogRef = this.dialog.open(NewItemMergeDialogComponent, {
      width: '400px',
      data: selectedData
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  transferToBranch(element): void {
    const selectedData = [];
    selectedData['data'] = this.ddoListDataSource.data.filter(item => item.checkbox);
    selectedData['transferBranchDialog'] = true;

    const dialogRef = this.dialog.open(NewItemMergeDialogComponent, {
      width: '400px',
      data: selectedData
    });

    dialogRef.afterClosed().subscribe(result => {
  
    });
  }

  openHistory(data) {
    data.isSelected = true;
    this.showHistoryDialog();
  }

  showHistoryDialog(): void {

    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(NewItemHistoryComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
      this.closeHistory();
    });
  }

  closeHistory() {
  }


  openMergedItems(data) {
    data.isSelected = true;
    this.showMergedDialog();
  }

  showMergedDialog(): void {
    const dialogData = new ConfirmDialogModel();
    const dialogRef = this.dialog.open(NewItemMergedItemsComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
      this.closeMerged();
    });
  }

  closeMerged() {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleComponent);
  }

}


@Component({
  selector: 'app-new-item-merge-dialog',
  templateUrl: 'new-item-merge-dialog.html',
})
export class NewItemMergeDialogComponent implements OnInit {
  actionForm: FormGroup;
  actionList: CommonListing [] = [
    { value: '1', viewValue: 'Forward' },
  ];
  userList: CommonListing[] = [
    { value: '1', viewValue: 'Satendra Zala (Verifier-HoD)' },
  ];
  branchName_list: CommonListing[] = [
    {value: '1', viewValue: 'Branch1'},
    {value: '2', viewValue: 'Branch2'},
    {value: '3', viewValue: 'Branch3.'},
    {value: '4', viewValue: 'Branch4'},
    {value: '5', viewValue: 'Branch5'},
    {value: '6', viewValue: 'Branch6'},
    {value: '7', viewValue: 'Branch7'},
  ];

  branchNameCtrl: FormControl = new FormControl();
  actionCtrl: FormControl = new FormControl();
  userCodeCtrl: FormControl = new FormControl();

  private _onDestroy = new Subject<void>();

  mergeDialog: Boolean = false;
  forwardDialog: Boolean = false;
  transferBranchDialog: Boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewItemMergeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log('data', data);
    this.mergeDialog = data['mergeDialog'];
    this.forwardDialog = data['forwardDialog'];
    this.transferBranchDialog = data['transferBranchDialog'];

  }

  filteredOptions: Observable<string[]>;
  options: any;
  errorMessages;
  myControl = new FormControl();
  additionalText = new FormControl();
  ngOnInit() {
    this.errorMessages = budgetMessage;
    this.createForm();
  

    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.actionForm.patchValue({
        'actionCode': '1',
        'userCode': '1'
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  createForm() {
    this.actionForm = this.fb.group({
      actionCode:['',Validators.required],
      userCode: ['', Validators.required],
      branchName:[''],
      additionalText:[''],
    });
  }

  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  totalOfMergeRecords() {
    const self = this;
    let caltotal = 0;
    self.data['data'].forEach(obj => {
      caltotal = caltotal + Number(obj.ddoProposedAmt);
    });
    return caltotal;
  }
}


@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})

export class BottomSheetOverviewExampleComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
