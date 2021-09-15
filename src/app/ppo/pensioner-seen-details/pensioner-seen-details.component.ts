import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { SeenTable, PpnoListInterface, PpoAutoFill } from 'src/app/model/ppo';
import { MatTableDataSource, MatSort, MatPaginator, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from 'src/app/model/standing-charge';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { Observable } from 'rxjs';
import { PpoDialogBoxComponent, Element_DataInDailog } from '../ppo-dialog-box/ppo-dialog-box.component';
import { Router } from '@angular/router';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { ListValue } from '../../model/treasury-bill';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-dailog-open',
  templateUrl: 'edit-dailog-open.html'
})
export class EditDialogOpenComponent {
  // variables
  userData;
  ppoNo;
  wayOfSeenCtrl: FormControl = new FormControl();
  editDetailsForm: FormGroup;
  isSeen = true;
  isBank = false;
  isAadhar = false;
  isPan = false;
  isMobile = false;
  // lists
  wayOfSeen_list: CommonListing[] = [
    { value: 'Rubaru', viewValue: 'Rubaru' },
    { value: 'Bank', viewValue: 'Bank' },
    { value: 'Notary', viewValue: 'Notary' },

  ];
  constructor(private fb: FormBuilder, public dailogRef: MatDialogRef<EditDialogOpenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.userData = data;
    console.log(data);

    console.log('isSeen : ' + this.userData.isSeen + 'bank :' + this.userData.isBank);

    this.isSeen = this.userData.isSeen;
    this.isBank = this.userData.isBank;
    this.isAadhar = this.userData.isAadhar;
    this.isPan = this.userData.isPan;
    this.isMobile = this.userData.isMobile;
    this.ppoNo = this.userData.ppoNo;
    this.editDetailsForm = this.fb.group({
      seenDate: [''],
      wayOfSeen: [''],
      aadhaar: [''],
      panNo: [''],
      mobNo: [''],
      accountNo: [''],
      bankCode: [''],
    });
    this.editDetailsForm.patchValue({
      seenDate: this.userData.seenDate,
      wayOfSeen: this.userData.wayOfSeen,
      aadhaar: this.userData.aadhaar,
      panNo: this.userData.panNo,
      mobNo: this.userData.mobNo,
      accountNo: this.userData.AccountNo,
      bankCode: this.userData.branchCode,

    });
  }
  // closes dialog box
  onSubmit() {
    this.dailogRef.close(this.editDetailsForm.value);
  }
  // closes dialog box
  onNoClick(): void {
    this.dailogRef.close(this.editDetailsForm.value);
  }

}

@Component({
  selector: 'app-pensioner-seen-details',
  templateUrl: './pensioner-seen-details.component.html',
  styleUrls: ['./pensioner-seen-details.component.css']
})
export class PensionerSeenDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, public dailog: MatDialog, private router: Router) { }
  // variables
  directiveObj = new CommonDirective(this.router);
  maxDate = new Date();
  searchForm: FormGroup;
  filteredppoNo: Observable<PpnoListInterface[]>;
  ppoNo_list: PpnoListInterface[] = [];
  ppoData;
  optionCtrl = true;
  ppoNoVal: string;
  isSeen = false;
  isBank = true;
  isAadhar = false;
  isPan = false;
  isMobile = false;
  editField: string;
  e_list: any[];
  errMsg = ppoMessage;
  dataFromDailogComponent: PpoAutoFill[];
  filterElement_Data: SeenTable[] = [];

  // form controls
  auditorCtrl: FormControl = new FormControl();
  bankCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();
  seenCtrl: FormControl = new FormControl();
  wayOfSeenType: FormControl = new FormControl();
  wayOfSeenTypeCtrl: FormControl = new FormControl();
  changeDetailsCtrl: FormControl = new FormControl();
  ppoNoCtrl: FormControl = new FormControl();
  headCodeCtrl: FormControl = new FormControl();

  // lists
  wayOfSeenType_list: CommonListing[] = [
    { value: '1', viewValue: 'Rubaru' },
    { value: '2', viewValue: 'Bank' },
    { value: '3', viewValue: 'Notary' },
    { value: 'Other', viewValue: 'Other' },
  ];

  auditor_list: CommonListing[] = [
    { value: '1', viewValue: 'M.P. Patel' },
  ];

  bank_list: CommonListing[] = [
    { value: '1', viewValue: 'State Bank of India' },
  ];

  branch_list: CommonListing[] = [
    { value: '1', viewValue: 'Kabir Chowk (Sabarmati)' },
    { value: '2', viewValue: 'Naranpura' },
    { value: '3', viewValue: 'Narayan Nagar' },
  ];

  caseType_list: CommonListing[] = [
    { value: '1', viewValue: 'Approved' },
    { value: '2', viewValue: 'Modified' },
  ];

  boolean_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];
  changeDetails_list: CommonListing[] = [
    { value: '1', viewValue: ' Bank details' },
    { value: '2', viewValue: 'Seen details' },
    { value: '3', viewValue: 'Aadhar No.' },
    { value: '4', viewValue: 'PAN No.' },
    { value: '5', viewValue: 'Mobile No.' },
  ];

  headCodeType: ListValue[] = [
    { value: '1', viewValue: '1: 2071 Pension And Other Retirement Benefits To Civil Pensioner' },
    { value: '2', viewValue: '2: 2071 Pension And Other Retirement Benefits To Civil, Family Pensioner' },
    { value: '3', viewValue: '3: 2071 Pension And Other Retirement Benefits To Family Pensioner' },
    { value: '4', viewValue: '4: 2071 Pension And Other Retirement Benefits To School & College Pensioner' },
    { value: '5', viewValue: '5: 2071 Provisional Pension To School And College Pensioner' },
    { value: '6', viewValue: '6: 2071 Provisional Pension To Civil Pensioner' },
    { value: '7', viewValue: '7: 2071 Provisional Pension To Civil Family Pensioner' },
    { value: '8', viewValue: '8: 2071 Pension And Other Retirement Benefits Civil Pensioner Fixed Pension' },
    { value: '9', viewValue: '9: 2071 Pension Old Pensioner' },
    { value: '10', viewValue: '10: 2071 Pension State Pensioner' },
    { value: '11', viewValue: '11: 2071 Pension To Primary Teachers' },
    { value: '12', viewValue: '12: 2071 Family Pension To Primary Teachers' },
    { value: '13', viewValue: '13: 2071 Pension To Panchayat Employees' },
    { value: '14', viewValue: '14: 2071 Family Pension To Panchayat Employees' },
    { value: '15', viewValue: '15: 2071 Pension Fixed To Panchayat Employees' },
  ];



  Element_Data: SeenTable[] = [
    {
      branchCode: '12028', ppoNo: 'DPP/P/004173', AccountNo: '10090605733',
      seenDate: new Date('04/07/2020'), wayOfSeen: '2', seenFlag: 'Y', name:
        'Pratik K', namePhotoandSignature: '', aadhaar: '122211233112', panNo: 'QWERTY12345', mobNo: '8888888888', ledgerNo: '', pageNo: '',
      reEmployeement: '1',
      reEmploymentFrom: '',
      reEmployeementTo: '',
      reMarriage: '1',
      maritalCertificateDate: '', reMarriageDate: ''
    },
    {
      branchCode: '32023', ppoNo: 'DPP/P/006777', AccountNo: '10090605735',
      seenDate: new Date('08/03/2020'), wayOfSeen: '1', seenFlag: 'N',
      name: 'm p patel', namePhotoandSignature: '', aadhaar: '122211233112',
      panNo: 'ZXCVB12345', mobNo: '9999999999', ledgerNo: '', pageNo: '', reEmployeement: '1',
      reEmploymentFrom: '',
      reEmployeementTo: '',
      reMarriage: '1',
      maritalCertificateDate: '', reMarriageDate: ''
    },
    {
      branchCode: '12478', ppoNo: 'DPP/P/009785', AccountNo: '10090605723',
      seenDate: new Date('09/04/2020'), wayOfSeen: '2', seenFlag: 'Y',
      name: 'Ravi Verma', namePhotoandSignature: '', aadhaar: '122211233112',
      panNo: 'MNBVC12345', mobNo: '1111111111', ledgerNo: '', pageNo: '', reEmployeement: '1',
      reEmploymentFrom: '',
      reEmployeementTo: '',
      reMarriage: '1',
      maritalCertificateDate: '', reMarriageDate: ''
    },
    {
      branchCode: '78945', ppoNo: 'DPP/P/003231', AccountNo: '10090605454',
      seenDate: new Date('12/06/2020'), wayOfSeen: '1', seenFlag: 'N',
      name: 'Joel Christian', namePhotoandSignature: '', aadhaar: '122211233112',
      panNo: 'POIUY12345', mobNo: '2222222222', ledgerNo: '24', pageNo: '126', reEmployeement: '1',
      reEmploymentFrom: '',
      reEmployeementTo: '',
      reMarriage: '1',
      maritalCertificateDate: '', reMarriageDate: ''
    },
    {
      branchCode: '35687', ppoNo: 'DPP/P/004514', AccountNo: '10090601457',
      seenDate: new Date('11/08/2020'), wayOfSeen: '2', seenFlag: 'Y',
      name: 'Mr. A.B Sharma', namePhotoandSignature: '', aadhaar: '122211233112',
      panNo: 'QWSAD12345', mobNo: '5555555555', ledgerNo: '', pageNo: '', reEmployeement: '1',
      reEmploymentFrom: '',
      reEmployeementTo: '',
      reMarriage: '1',
      maritalCertificateDate: '', reMarriageDate: ''
    },
    {
      branchCode: '14798', ppoNo: 'DPP/P/004148', AccountNo: '10090144544',
      seenDate: new Date('11/08/2017'), wayOfSeen: '1', seenFlag: 'N',
      name: 'm. j. shuri', namePhotoandSignature: '', aadhaar: '122211233112',
      panNo: 'LKJHG12345', mobNo: '1111111111', ledgerNo: '14', pageNo: '247', reEmployeement: '1',
      reEmploymentFrom: '',
      reEmployeementTo: '',
      reMarriage: '1',
      maritalCertificateDate: '', reMarriageDate: ''
    },
    {
      branchCode: '35687', ppoNo: 'DPP/P/001278', AccountNo: '10090454577',
      seenDate: new Date('12/10/2019'), wayOfSeen: '2', seenFlag: 'Y',
      name: 'Pratik K', namePhotoandSignature: '', aadhaar: '122211233112',
      panNo: 'QWERTY12345', mobNo: '1111111111', ledgerNo: '', pageNo: '', reEmployeement: '1',
      reEmploymentFrom: '',
      reEmployeementTo: '',
      reMarriage: '1',
      maritalCertificateDate: '', reMarriageDate: ''
    },
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<SeenTable>(this.Element_Data);
  displayedColumns = [
    'checkbox', 'srno', 'branchCode', 'ppoNo', 'AccountNo', 'seenDate', 'wayOfSeen',
    'seenFlag', 'name', 'namePhotoandSignature', 'aadhaar', 'panNo', 'mobNo',
    'reEmployeement',
    // 'reEmployeementRange',
    'reEmploymentFrom', 'reEmployeementTo',
    'reMarriage', 'reMarriageDate', 'maritalCertificateDate',
    'ledgerNo', 'pageNo'
  ];

  ngOnInit() {
    this.searchForm = this.fb.group({
      bankCode: [''],
      paidAfterDate: [''],
      auditor: [''],
      bank: [''],
      branch: [''],
      caseType: ['1'],
      seen: ['2'],
      changeDetails: ['1'],
      headCode: [''],


    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.ppoNoVal = 'PPO No.';
    this.optionCtrl = true;
    this.ppoNoVal = 'PPO No.';
    this.dataFromDailogComponent = Element_DataInDailog;
    for (let i = 0; i < this.dataFromDailogComponent.length; i++) {
      this.ppoNo_list.push({ ppoNo: this.dataFromDailogComponent[i].ppoNo });
    }

    this.filteredppoNo = this.ppoNoCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value),
        map(ppoNo => ppoNo ? this._filter(ppoNo) : this.ppoNo_list.slice())
      );
  }
  // allows row to be editted
  isEdit(event) {
    if (this.directiveObj.selection.isSelected(event) === true) {
      return false;
    } else {
      return true;
    }
  }

  // patches form data
  patchFormFields(data) {
    if (!data) {

    } else {
      this.searchForm.patchValue({
        auditor: this.auditor_list[0].value,
        bank: this.bank_list[0].value,
        branch: this.branch_list[0].value,
      });
    }
  }

  // clears form
  clearForm() {
    this.searchForm.reset();
    this.dataSource = new MatTableDataSource<SeenTable>(this.Element_Data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // searches data
  onSearch() {
    const formValue = this.searchForm.value;
    if (formValue.bankCode !== '' || formValue.bankCode != null) {
      this.filterByBankCode(this.searchForm.value);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }

    if (formValue.bankCode === '' || formValue.bankCode == null) {
      this.dataSource = new MatTableDataSource<SeenTable>(this.Element_Data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  workflowDetails() { }
  resetForm() { }
  // opens edit dialog box
  openEditDialog(data, i): void {

    const objectB = {
      isBank: this.isBank,
      isSeen: this.isSeen,
      isAadhar: this.isAadhar,
      isPan: this.isPan,
      isMobile: this.isMobile,
    };
    const objectC = { ...data, ...objectB };
    console.log(objectC);
    data += { isSeen: this.isSeen, isBank: this.isBank };
    const dailogRef = this.dailog.open(EditDialogOpenComponent, {
      width: '1000px', data: objectC
    });
    dailogRef.afterClosed().subscribe(result => {
      if (!result) {

      } else {
        this.Element_Data[i].seenDate = result.seenDate;
        this.Element_Data[i].wayOfSeen = result.wayOfSeen;
        this.Element_Data[i].aadhaar = result.aadhaar;
        this.Element_Data[i].mobNo = result.mobNo;
        this.Element_Data[i].panNo = result.panNo;
        this.Element_Data[i].branchCode = result.bankCode;
        this.Element_Data[i].AccountNo = result.accountNo;
      }
    });
  }
  // filters by bank code
  filterByBankCode(data) {
    if (!data) {
      this.filterElement_Data = this.Element_Data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    } else {
      this.filterElement_Data = this.Element_Data.filter(bCode => bCode.branchCode === data.bankCode);
    }
    this.dataSource = new MatTableDataSource<SeenTable>(this.filterElement_Data);
  }

  // opens dialog and selects ppo no
  openPPODialog() {
    this.optionCtrl = false;
    if (this.ppoData == null || this.ppoData === undefined || this.ppoData === '') {
      this.ppoData = 'Please Provide PPO No.';
    }
    const dailogRef = this.dailog.open(PpoDialogBoxComponent,
      {
        width: '1000px',
        height: '500px',
        data: this.ppoData
      });

    dailogRef.afterClosed().subscribe(result => {
      const dataArray = result;
      this.optionCtrl = true;
      if (dataArray !== '' && dataArray != null) {
        this.ppoNoCtrl.patchValue(dataArray[0].ppoNo);
        this.ppoNoVal = this.ppoNoCtrl.value;
      }
    });
  }

  // ppo no related methods
  sendPPOData(data) {
    this.ppoData = data;
  }
  displayFn(ppoNo_list: PpnoListInterface): string {
    return ppoNo_list && ppoNo_list.ppoNo ? ppoNo_list.ppoNo : '';
  }
  private _filter(ppoNo: string): PpnoListInterface[] {
    const filterValue = ppoNo;
    return this.ppoNo_list.filter(option => option.ppoNo.includes(filterValue));
  }
}
