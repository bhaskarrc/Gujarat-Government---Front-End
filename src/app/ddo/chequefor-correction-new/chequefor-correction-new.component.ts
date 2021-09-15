import { ddoMasage } from './../../common/error-message/common-message.constants';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material';
import { ChequeForCorrectionNew, BillChequeDetails, OldChequePreparationDetails, ChequeInward } from 'src/app/model/ddo-forms';
import { ListValue } from 'src/app/model/common-grant';


const ELEMENT_DATA_CANCEL: OldChequePreparationDetails[] = [{
  chequeAmount: '1500.00',
  accountNo: '-',
  inFavourof: 'JANK',
  chequeNo: 'PAOGNR-436287',
  chequeType: 'PARTY',
}];

const CHEQUE_ELEMENT_DATA: ChequeForCorrectionNew[] = [{
  chequeAmount: '1500.00',
  accountNo: 0,
  inFavourof: '',
  chequeNo: 'PAOGNR-436287',
  chequeType: 'PARTY',
  reasonName: '',
  reasonOfcacelation: ''
}];

const ELEMENT_DATA: ChequeInward[] = [
  {
    tokenNo: '5124',
    inwardDate: '19-Feb-2020',
    cardex: '143',
    ddo: '133',
    office: 'District Treasury Office , Gandhinagar',
    cType: 'Regular',
    chequeNo: 'PAOGNR-436287',
    chequeNo1: 'PAOGNR-436288',
    chequeNo2: 'PAOGNR-436288',
    chequeStatus: 'Unpaid',
    chequeType: '',
  },
];

const DETAILS_ELEMENT_DATA: BillChequeDetails[] = [
  {
    chequeFromDate: '12-Dec-2019',
    chequeTodate: '12-Mar-2020',
    cardexNo: '4',
    inwardDate: '19-Feb-2020',
    dispatchDate: '19-Feb-2020',
    billNetAmount: '90000.00',
    chequeAmount: '90000.00',
    chequeAmount1: '9000.00',
    cType: '',
    chequeNo: 'PAOGNR-436287',
    chequeNo1: 'PAOGNR-436288',
    chequeStatus: 'Unpaid',
    chequeType: '',
    partyName: 'JANK',
    partyName1: 'TANK',
  },
];


@Component({
  selector: 'app-chequefor-correction-new',
  templateUrl: './chequefor-correction-new.component.html',
  styleUrls: ['./chequefor-correction-new.component.css']
})
export class ChequeforCorrectionNewComponent implements OnInit {

  // Date
  maxDate = new Date();

  // common  variables
  errorMessages = ddoMasage;
  isSubmitted = false;
  selectedAll = false;
  isSearch: Boolean = false;

  // cancel variables
  isOthersCancel = false;
  isOthersRename = false;
  isOthersDuplicate = false;
  isCancel: Boolean = false;
  reasonNameCtrl: FormControl = new FormControl();

  // Rename variables
  isRename: Boolean = false;
  typeCtrl: FormControl = new FormControl();
  reasonCtrl: FormControl = new FormControl();

  // duplicate
  isDuplicate: Boolean = false;
  reasonDuplicateCtrl: FormControl = new FormControl();

  // Form group
  inwardChequeForm: FormGroup;
  chequePreprationForm: FormGroup;

  // form controls
  ddoNameCtrl: FormControl = new FormControl();
  chequeTypeCtrl: FormControl = new FormControl();


  // lists start
  chequeTypeList: ListValue[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Rename' },
    { value: '3', viewValue: 'Duplicate' },
  ];

  ddoNameList: ListValue[] = [
    { value: '1', viewValue: 'Collector Office, Gandhinagar' },
  ];

  // cancel
  reasonNameList: ListValue[] = [
    { value: '1', viewValue: 'Due to wrong Bunching' },
    { value: '2', viewValue: 'Bill need to b rejected' },
    { value: '3', viewValue: 'Wrongly Written' },
    { value: '4', viewValue: 'Due to printer problem' },
    { value: '5', viewValue: 'Other' },
  ];

  // rename
  typeList: ListValue[] = [
    { value: '1', viewValue: 'Party Cheque' },
  ];
  reasonList: ListValue[] = [
    { value: '1', viewValue: 'Due to Spelling Mistake' },
    { value: '2', viewValue: 'Wrongly written' },
    { value: '3', viewValue: 'Other' },
  ];

  // duplicate
  reasonDuplicateList: ListValue[] = [
    { value: '1', viewValue: 'Due to Lost' },
    { value: '2', viewValue: 'Others' },
  ];
  // lists end



  // cheque inward table data start
  newDisplayedColumns: string[] = [
    'srno',
    'tokenNo',
    'inwardDate',
    'cardex',
    'ddo',
    'office',
    'cType',
    'chequeNo',
    'chequeStatus',
    'chequeType'];
  newDataSource = new MatTableDataSource<ChequeInward>(ELEMENT_DATA);
  // cheque inward table end


  // bill cheque details table data start
  detailsNewDisplayedColumns: string[] = [
    'srno',
    'inwardDate',
    'cardexNo',
    'dispatchDate',
    'billNetAmount',
    'chequeNo',
    'partyName',
    'chequeAmount',
    'chequeFromDate',
    'chequeTodate'
  ];
  detailsNewDataSource = new MatTableDataSource<BillChequeDetails>(DETAILS_ELEMENT_DATA);
  // bill cheque details table data start


  // old cheque preparation details table start
  newDisplayedColumnsCancel: string[] = ['chequeType', 'inFavourof', 'accountNo', 'chequeAmount'];
  newDataSourceCancel = new MatTableDataSource<OldChequePreparationDetails>(ELEMENT_DATA_CANCEL);
  // old cheque preparation details table start


  // cheque information table start
  chequeDisplayedColumns: string[] = ['reasonName', 'chequeType', 'inFavourof', 'accountNo', 'chequeAmount', 'action'];
  chequeDataSource = new MatTableDataSource<ChequeForCorrectionNew>(CHEQUE_ELEMENT_DATA);
  // cheque information table end


  // constructor
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.inwarChequeData();
    this.chequePreprationFormData();
  }


  // cheque inward data
  inwarChequeData() {
    this.inwardChequeForm = this.fb.group({
      chequeType: [''],

      // cancel
      reasonOfCancelation: [''],
      reasonName: [''],

      // rename
      favourOfOld: ['TEST C'],
      chequeAmountRename: ['200.00'],
      type: ['1'],
      favourOfNew: ['', Validators.required],
      reason: [''],
      reasonTxtArea: ['', Validators.required],

      // duplicate
      favourOfOldDuplicate: ['TEST C'],
      chequeAmountDuplicate: ['200.00'],
      reasonDuplicate: [''],
      reasonTxtAreaDuplicate: [''],
    });
  }


  // cheque preparation form data
  chequePreprationFormData() {
    this.chequePreprationForm = this.fb.group({
      billReferenceNo: [''],
      tokenNo: [''],
      ddoNo: [''],
      cardexNo: [''],
      ddoName: [''],
      chequeAmount: [''],
      chequeNo: ['']
    });
  }

  // delete row
  delete(element) {
    this.newDataSource.data.splice(element, 1);
    this.newDataSource = new MatTableDataSource(this.newDataSource.data);
  }

  // bill details
  billDetails() {
    this.isSearch = !this.isSearch;
  }

  // on search
  onSearch() {
    this.selectedAll = true;
  }

  // on basis of cheque correction type show cancel,rename, duplicate grids
  onTypeChange(typeChange) {
    if (typeChange.value === '1') {
      this.isCancel = true;
      this.isRename = false;
      this.isDuplicate = false;
    } else if (typeChange.value === '2') {
      this.isCancel = false;
      this.isRename = true;
      this.isDuplicate = false;
    } else if (typeChange.value === '3') {

      this.isCancel = false;
      this.isRename = false;
      this.isDuplicate = true;
    }
  }

  // show other reason field on basis of reason of cancellation in cheque correction type new
  onReasonCancel(event) {
    if (event.value === '5') {
      this.isOthersCancel = true;
    } else {
      this.isOthersCancel = false;
    }
  }

  // show other reason field on basis of type of reason in cheque correction type rename
  onReasonRename(event) {
    if (event.value === '3') {
      this.isOthersRename = true;
    } else {
      this.isOthersRename = false;
    }
  }

  // show other reason field on basis of type of reason in cheque correction type duplicate
  onReasonDuplicate(event) {
    if (event.value === '2') {
      this.isOthersDuplicate = true;
    } else {
      this.isOthersDuplicate = false;
    }
  }
}
