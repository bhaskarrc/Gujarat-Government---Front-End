import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { delay } from 'rxjs/operators';
import { PpoAutoFill } from 'src/app/model/ppo';


export let Element_DataInDailog: PpoAutoFill[] = [
  {
    ppoNo: 'ppo1', accountNo: '10090605733', fName: 'Pratik', mName: '',
    lName: 'K', bankAndBranch: 'State Bank of India Gandhinagar',
    totalAmtToBeRecovered: '10000.00', amtRecovered: '2000.00', balAmtToBeRecovered: '8000.00'
  },
  {
    ppoNo: 'ppo2', accountNo: '10090605735', fName: 'm', mName: 'p',
    lName: 'patel', bankAndBranch: 'State Bank of India Gandhinagar',
    totalAmtToBeRecovered: '10000.00', amtRecovered: '2000.00', balAmtToBeRecovered: '8000.00'
  },
  {
    ppoNo: 'ppo3', accountNo: '10090605723', fName: 'Ravi', mName: '',
    lName: 'Verma', bankAndBranch: 'State Bank of India Gandhinagar',
    totalAmtToBeRecovered: '10000.00',
    amtRecovered: '2000.00', balAmtToBeRecovered: '8000.00'
  },
  {
    ppoNo: 'DPP/P/003231', accountNo: '10090605454', fName: 'Joel',
    mName: '', lName: 'Christian', bankAndBranch: 'State Bank of India Gandhinagar',
    totalAmtToBeRecovered: '10000.00', amtRecovered: '2000.00', balAmtToBeRecovered: '8000.00'
  },
  {
    ppoNo: 'DPP/P/004514', accountNo: '10090601457', fName: 'Mr. A.B', mName: '',
    lName: 'Sharma', bankAndBranch: 'State Bank of India Gandhinagar',
    totalAmtToBeRecovered: '10000.00', amtRecovered: '2000.00', balAmtToBeRecovered: '8000.00'
  },
  {
    ppoNo: 'DPP/P/004148', accountNo: '10090144544', fName: 'm.', mName: 'j.',
    lName: 'shuri', bankAndBranch: 'State Bank of India Gandhinagar',
    totalAmtToBeRecovered: '10000.00', amtRecovered: '2000.00', balAmtToBeRecovered: '8000.00'
  },
  {
    ppoNo: 'DPP/P/001278', accountNo: '10090454577', fName: 'Pratik', mName: '',
    lName: 'K', bankAndBranch: 'State Bank of India Gandhinagar',
    totalAmtToBeRecovered: '10000.00', amtRecovered: '2000.00', balAmtToBeRecovered: '8000.00'
  },
  {
    ppoNo: 'p01', accountNo: '10090454577', fName: 'ABC', mName: '', lName: 'Employee',
    bankAndBranch: 'HDFC Gandhinagar', totalAmtToBeRecovered:
      '30000.00', amtRecovered: '1000.00', balAmtToBeRecovered: '18000.00'
  },
];


@Component({
  selector: 'app-ppo-dialog-box',
  templateUrl: './ppo-dialog-box.component.html',
  styleUrls: ['./ppo-dialog-box.component.css'],
})
export class PpoDialogBoxComponent implements OnInit {
  // variables
  isDataAvailable = false;
  ppoNo;
  smartSearch: FormGroup;
  filterElement_Data: PpoAutoFill[];
  Element_Data: PpoAutoFill[];
  // form control
  bankCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();

  // lists
  bank_list: CommonListing[] = [
    { value: '1', viewValue: 'Bank of Baroda    ' },
    { value: '2', viewValue: 'Bank of India' },
    { value: '3', viewValue: 'Canara Bank' },
    { value: '4', viewValue: ' Central Bank of India' },
    { value: '5', viewValue: 'Indian Bank' },
    { value: '6', viewValue: 'Indian Overseas Bank' },
    { value: '7', viewValue: 'Punjab National Bank' },
    { value: '8', viewValue: ' State Bank of India' },
    { value: '9', viewValue: ' Union Bank of India' },
    { value: '10', viewValue: 'Axis Bank' },
    { value: '11', viewValue: 'HDFC Bank' },
    { value: '12', viewValue: 'ICICI Bank' },
    { value: '13', viewValue: 'IDBI Bank' },
    { value: '14', viewValue: 'IDFC First Bank' },
    { value: '15', viewValue: ' IndusInd Bank' },
    { value: '16', viewValue: 'Jammu & Kashmir Bank ' },
    { value: '17', viewValue: 'Karnataka Bank' },
    { value: '18', viewValue: 'Karur Vysya Bank' },
    { value: '19', viewValue: ' South Indian Bank' },
    { value: '20', viewValue: ' Tamilnad Mercantile Bank' },
    { value: '20', viewValue: 'Axis Bank' },
    { value: '21', viewValue: 'Yes Bank' }
  ];

  branch_list: CommonListing[] = [
    { value: '1', viewValue: 'Akhbarnagar' },
    { value: '2', viewValue: 'Chandkheda' },
    { value: '3', viewValue: 'Kalupur' }
  ];

  deathDateOf_list: CommonListing[] = [
    { value: 'Pensioner', viewValue: 'Pensioner' },
    { value: 'FamilyMember', viewValue: 'Family Member' }
  ];

  // table data
  dataSource = new MatTableDataSource<PpoAutoFill>(this.Element_Data);
  displayedColumn = [
    'ppoNo', 'name', 'bankAndBranch', 'accountNo'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder, public dailogRef: MatDialogRef<PpoDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.ppoNo = data;
  }
  ngOnInit(): void {

    this.smartSearch = this.fb.group({
      pensionerFName: [''],
      pensionerLName: [''],
      pensionerMName: [''],
      bankAndBranch: [''],
      accountNumber: [''],
      panNo: [''],
      addharNo: [''],
      bank: [''],
      branch: ['']
    });

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.Element_Data = Element_DataInDailog;
    this.dataSource = new MatTableDataSource<PpoAutoFill>(Element_DataInDailog);

    if (this.ppoNo === 'Please Provide PPO No.') {
      this.dataSource = new MatTableDataSource<PpoAutoFill>(Element_DataInDailog);
    } else {
      this.filterByPPO_No();
      if (this.filterElement_Data.length === 1) {
        this.isDataAvailable = true;
        this.update();
      }
    }
  }

  filterByPPO_No() {
    this.filterElement_Data = this.Element_Data.filter(searchPPO_No => searchPPO_No.ppoNo === this.ppoNo);
    this.dataSource = new MatTableDataSource<PpoAutoFill>(this.filterElement_Data);
  }
  // updates data after 2 secs
  async update(data?: string) {
    await delay(2000);
    if (!data) {
      this.isDataAvailable = false;
    } else {
      this.isDataAvailable = false;
      this.filterElement_Data = this.Element_Data.filter(searchPPO_No => searchPPO_No.ppoNo === data);
      this.dataSource = new MatTableDataSource<PpoAutoFill>(this.filterElement_Data);
    }
    this.dailogRef.close(this.filterElement_Data);
  }
  // on click on search button
  onSearch() {
    const formVal = this.smartSearch.value;
    if (formVal.pensionerFName !== '' && formVal.pensionerFName != null) {
      this.filterElement_Data = this.Element_Data.filter(searchByFName => searchByFName.fName === formVal.pensionerFName);
      this.dataSource = new MatTableDataSource<PpoAutoFill>(this.filterElement_Data);
    }
    if (formVal.pensionerMName !== '' && formVal.pensionerMName != null) {
      this.filterElement_Data = this.Element_Data.filter(searchByMName => searchByMName.mName === formVal.pensionerMName);
      this.dataSource = new MatTableDataSource<PpoAutoFill>(this.filterElement_Data);
    }
    if (formVal.pensionerLName !== '' && formVal.pensionerLName != null) {
      this.filterElement_Data = this.Element_Data.filter(searchByLName => searchByLName.fName === formVal.pensionerLName);
      this.dataSource = new MatTableDataSource<PpoAutoFill>(this.filterElement_Data);
    }
    if (formVal.bankAndBranch !== '' && formVal.bankAndBranch != null) {
      this.filterElement_Data = this.Element_Data.filter(searchByBankBranch => searchByBankBranch.fName === formVal.bankAndBranch);
      this.dataSource = new MatTableDataSource<PpoAutoFill>(this.filterElement_Data);
    }
    if (formVal.accountNo !== '' && formVal.accountNo != null) {
      this.filterElement_Data = this.Element_Data.filter(searchByAcc => searchByAcc.fName === formVal.accountNo);
      this.dataSource = new MatTableDataSource<PpoAutoFill>(this.filterElement_Data);
    }


    if ((formVal.pensionerFName == null || formVal.pensionerFName === '') &&
      (formVal.pensionerLName == null || formVal.pensionerLName === '') &&
      (formVal.pensionerMName == null || formVal.pensionerMName === '') &&
      (formVal.bankAndBranch === '' || formVal.bankAndBranch == null) &&
      (formVal.accountNo == null || formVal.accountNo === '')) {
      this.dataSource = new MatTableDataSource<PpoAutoFill>([]);
    }
  }
  // clears form
  clearForm() {
    this.smartSearch.reset();
  }

}
