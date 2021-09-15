import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { GpfWiseDetail, YearWiseGpfDetail } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';


@Component({
  selector: 'app-pre-audit-gpf-district-entry',
  templateUrl: './pre-audit-gpf-district-entry.component.html',
  styleUrls: ['./pre-audit-gpf-district-entry.component.css']
})
export class PreAuditGpfDistrictEntryComponent implements OnInit {

  // directive object for workflow dialog
  directiveObject = new LocalFundDirective(this.dialog);
  // variables
  errorMessages = lfMessage;
  id = 0;
  // form control
  employeeNameCtrl: FormControl = new FormControl();
  yearCtrl: FormControl = new FormControl();
  instituteNameCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  instituteTypeCtrl: FormControl = new FormControl();
  // lists start
  districtList: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Vadodara' },
    { value: '4', viewValue: 'Surat' },
    { value: '5', viewValue: 'Rajkot' },
    { value: '6', viewValue: 'Anand' },
    { value: '7', viewValue: 'Bharuch' },
    { value: '8', viewValue: 'Valsad' },
    { value: '9', viewValue: 'Navsari' },
    { value: '10', viewValue: 'Dang' },
  ];
  instituteTypeList: ListValue[] = [
    { value: 'MP', viewValue: 'MahaNagar Palika' },
    { value: 'NP', viewValue: 'Nagarpalika' },
    { value: 'DP', viewValue: 'District Panchayat' },
    { value: 'TP', viewValue: 'Taluka Panchayat' },
    { value: 'UN', viewValue: 'University' },
    { value: 'MS', viewValue: 'Municiple School Board' },
    { value: 'VP', viewValue: 'Village Panchayat' },
    { value: 'PW', viewValue: 'Police Welfare Fund' },
    { value: 'PD', viewValue: 'Provident Fund of District Panchayat' },
    { value: 'PS', viewValue: 'Provident Fund of Secondary Education office' },
    { value: 'AT', viewValue: 'Ambaji Temple Trust' },
    { value: 'OTH', viewValue: 'Others' },
  ];
  instituteNameList: ListValue[] = [
    { value: '0', viewValue: 'Dahegam Nagarpalika' },
    { value: '1', viewValue: 'DMDG' },
    { value: '2', viewValue: 'Gandhinagar-District Panchayat' },
    { value: '3', viewValue: 'GMC' },
    { value: '4', viewValue: 'GPCB' },
    { value: '5', viewValue: 'Dahegam Nagar Palika' },
    { value: '6', viewValue: 'Ahmedabad - District Panchayat' },
  ];
  employeeNameList: ListValue[] = [];
  yearList: ListValue[] = [
    { value: '1', viewValue: '2015' },
    { value: '2', viewValue: '2016' },
    { value: '3', viewValue: '2017' },
    { value: '4', viewValue: '2018' },
    { value: '5', viewValue: '2019' },
    { value: '6', viewValue: '2020' }
  ];
  // lists end

  // form group
  gpfWiseDetail: FormGroup;
  yearWiseGpfDetail: FormGroup;

  // table data start
  gpfWiseDetailData: GpfWiseDetail[] = [
    {
      dora: '30-Mar-2018', finalClaimAmt: '3384385.00', amtInWords: 'Thirty Three Lakh Eighty Four Thousand Three Hundred Eighty Five',
      nominee: 'J P Patel', monthOfCalculationInterest: '43908.00', approvedAmt: '3384385.00'
    }
  ];
  gpfWiseDetailDataSource = new MatTableDataSource<GpfWiseDetail>(this.gpfWiseDetailData);
  gpfWiseDetailColumns: string[] = ['position', 'dora', 'finalClaimAmt', 'amtInWords', 'approvedAmt',
    'nominee', 'monthOfCalculationInterest', 'action'
  ];
  // table data end

  // table data start
  yearWiseGpfDetailData: YearWiseGpfDetail[] = [
    {
      year: '2014', openingBalance: '50000.00', yearWIseWithdrawAmt: '12000.00', interestRate: '8%', amtOfInterest: '40960.00',
      totalAmt: '540960.00', yearWiseDepositedAmt: '0.00', withdrawRate: '0', closingBalance: '540960.00',
      finalAmountAfterAudit: '540960.00'
    },
    {
      year: '2014', openingBalance: '50000.00', yearWIseWithdrawAmt: '12000.00', interestRate: '8%', amtOfInterest: '40960.00',
      totalAmt: '540960.00', yearWiseDepositedAmt: '0.00', withdrawRate: '0', closingBalance: '540960.00',
      finalAmountAfterAudit: '540960.00'
    },
    {
      year: '2014', openingBalance: '50000.00', yearWIseWithdrawAmt: '12000.00', interestRate: '8%', amtOfInterest: '40960.00',
      totalAmt: '540960.00', yearWiseDepositedAmt: '0.00', withdrawRate: '0', closingBalance: '540960.00',
      finalAmountAfterAudit: '540960.00'
    },
    {
      year: '2014', openingBalance: '50000.00', yearWIseWithdrawAmt: '12000.00', interestRate: '8%', amtOfInterest: '40960.00',
      totalAmt: '540960.00', yearWiseDepositedAmt: '0.00', withdrawRate: '0', closingBalance: '540960.00',
      finalAmountAfterAudit: '540960.00'
    },
    {
      year: '2014', openingBalance: '50000.00', yearWIseWithdrawAmt: '12000.00', interestRate: '8%', amtOfInterest: '40960.00',
      totalAmt: '540960.00', yearWiseDepositedAmt: '0.00', withdrawRate: '0', closingBalance: '540960.00',
      finalAmountAfterAudit: '540960.00'
    },
  ];
  yearWiseGpfDetailDataSource = new MatTableDataSource<YearWiseGpfDetail>(this.yearWiseGpfDetailData);
  yearWiseGpfDetailColumns: string[] = ['position', 'year', 'openingBalance', 'yearWiseDepositedAmt', 'interestRate', 'amtOfInterest',
    'totalAmt', 'yearWiseWithdrawAmt', 'withdrawDate', 'closingBalance',
    'finalAmountAfterAudit', 'action'
  ];
  // table data end

  // paginator
  @ViewChild(MatPaginator) yearWiseGpfDetailPaginator: MatPaginator;
  @ViewChild('gpfWiseDetail', { read: MatPaginator }) gpfWiseDetailPaginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.gpfWiseDetail = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      district: [''],
      instituteType: [''],
      instituteName: [''],
      dora: [''],
      id: ['']
    });
    this.yearWiseGpfDetail = this.fb.group({
      year: [''],
      openingBalance: [''],
      yearWiseDepositedAmt: [''],
      interestRate: [''],
      amtOfInterest: [''],
      totalAmt: [''],
      yearWiseWithdrawAmt: [''],
      withdrawDate: [''],
      closingBalance: [''],
      expiryDate: [''],
      totalServiceYear: [''],
      linkInsuranceAmt: [''],
      linkInsuranceInterest: [''],
      finalAmountAfterAudit: [''],
    });
    this.yearWiseGpfDetailDataSource.paginator = this.yearWiseGpfDetailPaginator;
    this.gpfWiseDetailDataSource.paginator = this.gpfWiseDetailPaginator;
    this.id++;
  }

  // reset form
  clearForm() {
    this.gpfWiseDetail.reset();
    this.gpfWiseDetail.patchValue({ id: this.id, employeeNo: '' });
  }

}
