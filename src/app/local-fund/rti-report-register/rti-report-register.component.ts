import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { CountWiseData, QuarterlyStatementOfRtiAppealData, QuaterlyStatementOfRtiData, RtiReportRegister } from 'src/app/model/local-fund';

@Component({
  selector: 'app-rti-report-register',
  templateUrl: './rti-report-register.component.html',
  styleUrls: ['./rti-report-register.component.css']
})
export class RtiReportRegisterComponent implements OnInit {

  // variables
  maxDate = new Date();
  depName: string;
  detailedMonthalyStatementOfRtiRegister = false;
  countWiseMonthly = false;
  quarterlyStatementofRtiRegister = false;
  quarterlyStatementofRtiAppealRegister = false;
  isButton = false;
  isSubmitted = false;

  // form group
  rtiReportRegisterForm: FormGroup;

  // form control
  reportCtrl: FormControl = new FormControl();

  // lists
  reportList: ListValue[] = [
    { value: '1', viewValue: 'Detailed Monthly Statement of the RTI register' },
    { value: '2', viewValue: 'Count wise Monthly Statement of RTI Register' },
    { value: '3', viewValue: 'Quarterly statement of RTI Register' },
    { value: '4', viewValue: 'Quarterly statement of RTI Appeal Register' },
  ];


  // Detailed Monthaly Statement of RTI Register data
  elementData: RtiReportRegister[] = [
    {
      // 1
      nameAddressPIO: 'PIO Gandhinagar',
      nameAddressApplicant: 'K P Shah - Sector 16, Plot No, 121/2 Gandhinagar',
      categoryOfApplicantBPLOther: 'BPL',
      briefDescriptionOfRequestForInformation: 'VP Audit Information',
      dateOfReceiptOfApplication: '16-NOV-2019',
      informationFurnished: 'Yes',
      applicationTransferred: 'Yes',
      dateOfTransferApplication: '20-NOV-2019',
      dateOfRejection: 'NA',
      underWhichSectionApplicationRejected: 'NA',
      applicationPending: 'November',
      amountForApplication: '20',
      chargesCollected: '1200',
      totalAmountCollected: '1220',
      anyOtherInformation: 'NA',
    },
    {
      // 2
      nameAddressPIO: 'PIO Gandhinagar',
      nameAddressApplicant: 'M M Prajapati - Shriji Apartment, Sabarmati, Ahmedabad',
      categoryOfApplicantBPLOther: 'Other',
      briefDescriptionOfRequestForInformation: 'LR Para Information',
      dateOfReceiptOfApplication: '18-NOV-2019',
      informationFurnished: 'Yes',
      applicationTransferred: 'No',
      dateOfTransferApplication: 'NA',
      dateOfRejection: 'NA',
      underWhichSectionApplicationRejected: 'NA',
      applicationPending: 'November',
      amountForApplication: '20',
      chargesCollected: '100',
      totalAmountCollected: '120',
      anyOtherInformation: 'NA',
    },
    {
      // 3
      nameAddressPIO: 'PIO Gandhinagar',
      nameAddressApplicant: 'S S Haidar - Haidar Pol, Lal Darvwaja Ahmedabad',
      categoryOfApplicantBPLOther: 'BPL',
      briefDescriptionOfRequestForInformation: 'LR Para Information',
      dateOfReceiptOfApplication: '19-NOV-2019',
      informationFurnished: 'Yes',
      applicationTransferred: 'No',
      dateOfTransferApplication: 'NA',
      dateOfRejection: 'NA',
      underWhichSectionApplicationRejected: 'NA',
      applicationPending: 'November',
      amountForApplication: '20',
      chargesCollected: '100',
      totalAmountCollected: '120',
      anyOtherInformation: 'NA',
    },
    {
      // 4
      nameAddressPIO: 'PIO Gandhinagar',
      nameAddressApplicant: 'K P Kabra - Sukan Tenament, Naranpura, Ahmedabad',
      categoryOfApplicantBPLOther: 'BPL',
      briefDescriptionOfRequestForInformation: 'Diposed Para Information',
      dateOfReceiptOfApplication: '20-NOV-2019',
      informationFurnished: 'Yes',
      applicationTransferred: 'Yes',
      dateOfTransferApplication: '25-NOV-2019',
      dateOfRejection: 'NA',
      underWhichSectionApplicationRejected: 'NA',
      applicationPending: 'November',
      amountForApplication: '20',
      chargesCollected: '100',
      totalAmountCollected: '120',
      anyOtherInformation: 'NA',
    },
    {
      // 5
      nameAddressPIO: 'PIO Gandhinagar',
      nameAddressApplicant: 'M M Prajapati - Shriji Apartment, Sabarmati, Ahmedabad',
      categoryOfApplicantBPLOther: 'Other',
      briefDescriptionOfRequestForInformation: '6th pay Informamtion',
      dateOfReceiptOfApplication: '21-NOV-2019',
      informationFurnished: 'Yes',
      applicationTransferred: 'Yes',
      dateOfTransferApplication: '26-NOV-2019',
      dateOfRejection: 'NA',
      underWhichSectionApplicationRejected: 'NA',
      applicationPending: 'November',
      amountForApplication: '20',
      chargesCollected: '1200',
      totalAmountCollected: '1220',
      anyOtherInformation: 'NA',
    },
    {
      // 6
      nameAddressPIO: 'PIO Gandhinagar',
      nameAddressApplicant: 'S S Haidar - Haidar Pol, Lal Darvwaja Ahmedabad',
      categoryOfApplicantBPLOther: 'Other',
      briefDescriptionOfRequestForInformation: 'Diposed Para Information',
      dateOfReceiptOfApplication: '24-NOV-2019',
      informationFurnished: 'Yes',
      applicationTransferred: 'No',
      dateOfTransferApplication: 'NA',
      dateOfRejection: 'NA',
      underWhichSectionApplicationRejected: 'NA',
      applicationPending: 'November',
      amountForApplication: '20',
      chargesCollected: '100',
      totalAmountCollected: '120',
      anyOtherInformation: 'NA',
    },
    {
      // 7
      nameAddressPIO: 'PIO Gandhinagar',
      nameAddressApplicant: 'M M Darji - Shriji Apartment, Sabarmati, Ahmedabad',
      categoryOfApplicantBPLOther: 'Other',
      briefDescriptionOfRequestForInformation: 'JPA Information',
      dateOfReceiptOfApplication: '25-NOV-2019',
      informationFurnished: 'Yes',
      applicationTransferred: 'No',
      dateOfTransferApplication: 'NA',
      dateOfRejection: 'NA',
      underWhichSectionApplicationRejected: 'NA',
      applicationPending: 'November',
      amountForApplication: '20',
      chargesCollected: '100',
      totalAmountCollected: '120',
      anyOtherInformation: 'NA',
    },
    {
      // 8
      nameAddressPIO: 'PIO Gandhinagar',
      nameAddressApplicant: 'M M Joshi - Shri Hari Apartment, Sabarmati, Ahmedabad',
      categoryOfApplicantBPLOther: 'Other',
      briefDescriptionOfRequestForInformation: 'DP Audit Information',
      dateOfReceiptOfApplication: '30-NOV-2019',
      informationFurnished: 'Yes',
      applicationTransferred: 'Yes',
      dateOfTransferApplication: '10-DEC-2019',
      dateOfRejection: 'NA',
      underWhichSectionApplicationRejected: 'NA',
      applicationPending: 'November',
      amountForApplication: '20',
      chargesCollected: '100',
      totalAmountCollected: '120',
      anyOtherInformation: 'NA',
    },
  ];

  displayedColumns: string[] = [
    'serialNo',
    'nameAddressPIO',
    'nameAddressApplicant',
    'categoryOfApplicantBPLOther',
    'briefDescriptionOfRequestForInformation',
    'dateOfReceiptOfApplication',
    'informationFurnished',
    'applicationTransferred',
    'dateOfTransferApplication',
    'dateOfRejection',
    'underWhichSectionApplicationRejected',
    'applicationPending',
    'amountForApplication',
    'chargesCollected',
    'totalAmountCollected',
    'anyOtherInformation',
    'action',
  ];
  dataSource = new MatTableDataSource<RtiReportRegister>(this.elementData);


  // Count wise Monthaly Statement of RTI Register
  countWiseData: CountWiseData[] = [
    {
      // 1
      nameAddressPIO: 'PIO Gandhinagar',
      totalApplicationsPendingEnd: '8',
      totalApplicationsReceived: '4',
      total: '12',
      totalApplicationsDisposed: '10',
      totalApplicationsPending: '2',
      OutDisposedInformation: '2',
      outDisposedDeemed: '2',
      outDisposedrejected: '0',
      amountOfTotalApplication: '1600',
      anyOtherInformation: 'NA',

    },
    {
      // 2
      nameAddressPIO: 'PIO Gandhinagar',
      totalApplicationsPendingEnd: '2',
      totalApplicationsReceived: '1',
      total: '3',
      totalApplicationsDisposed: '3',
      totalApplicationsPending: '0',
      OutDisposedInformation: '0',
      outDisposedDeemed: '0',
      outDisposedrejected: '0',
      amountOfTotalApplication: '30',
      anyOtherInformation: 'NA',

    },
    {
      // 3
      nameAddressPIO: 'PIO Gandhinagar',
      totalApplicationsPendingEnd: '4',
      totalApplicationsReceived: '6',
      total: '10',
      totalApplicationsDisposed: '8',
      totalApplicationsPending: '2',
      OutDisposedInformation: '0',
      outDisposedDeemed: '1',
      outDisposedrejected: '1',
      amountOfTotalApplication: '200',
      anyOtherInformation: 'NA',

    },
    {
      // 4
      nameAddressPIO: 'PIO Gandhinagar',
      totalApplicationsPendingEnd: '5',
      totalApplicationsReceived: '7',
      total: '12',
      totalApplicationsDisposed: '12',
      totalApplicationsPending: '0',
      OutDisposedInformation: '0',
      outDisposedDeemed: '0',
      outDisposedrejected: '0',
      amountOfTotalApplication: '120',
      anyOtherInformation: 'NA',

    },
    {
      // 5
      nameAddressPIO: 'PIO Gandhinagar',
      totalApplicationsPendingEnd: '8',
      totalApplicationsReceived: '0',
      total: '8',
      totalApplicationsDisposed: '10',
      totalApplicationsPending: '0',
      OutDisposedInformation: '0',
      outDisposedDeemed: '0',
      outDisposedrejected: '0',
      amountOfTotalApplication: '100',
      anyOtherInformation: 'NA',

    },
    {
      // 6
      nameAddressPIO: 'PIO Gandhinagar',
      totalApplicationsPendingEnd: '10',
      totalApplicationsReceived: '1',
      total: '11',
      totalApplicationsDisposed: '11',
      totalApplicationsPending: '0',
      OutDisposedInformation: '0',
      outDisposedDeemed: '0',
      outDisposedrejected: '0',
      amountOfTotalApplication: '110',
      anyOtherInformation: 'NA',

    },
    {
      // 7
      nameAddressPIO: 'PIO Gandhinagar',
      totalApplicationsPendingEnd: '2',
      totalApplicationsReceived: '4',
      total: '6',
      totalApplicationsDisposed: '6',
      totalApplicationsPending: '0',
      OutDisposedInformation: '0',
      outDisposedDeemed: '0',
      outDisposedrejected: '0',
      amountOfTotalApplication: '60',
      anyOtherInformation: 'NA',

    },
    {
      // 8
      nameAddressPIO: 'PIO Gandhinagar',
      totalApplicationsPendingEnd: '3',
      totalApplicationsReceived: '5',
      total: '8',
      totalApplicationsDisposed: '8',
      totalApplicationsPending: '0',
      OutDisposedInformation: '0',
      outDisposedDeemed: '0',
      outDisposedrejected: '0',
      amountOfTotalApplication: '80',
      anyOtherInformation: 'NA',

    },
  ];
  countWiseColumns: string[] = [
    'serialNo',
    'nameAddressPIO',
    'totalApplicationsPendingEnd',
    'totalApplicationsReceived',
    'total',
    'totalApplicationsDisposed',
    'totalApplicationsPending',
    'OutDisposedInformation',
    'outDisposedDeemed',
    'outDisposedrejected',
    'amountOfTotalApplication',
    'anyOtherInformation',
    'action',

  ];
  countWiseDataSource = new MatTableDataSource<CountWiseData>(this.countWiseData);

  // Quarterly Statement of RTI Register
  quarterlyStatementOfRtiData: QuaterlyStatementOfRtiData[] = [
    {
      // 1
      nameAddressPIO: 'PIO Gandhinagar',
      totalApplicationsPendingEnd: '10',
      totalApplicationsReceived: '3',
      total: '13',
      totalApplicationsFullyFurnished: '10',
      totalApplicationsFullyTransferred: '1',
      totalApplicationPartlyTransferred: '1',
      totalApplicationFullyRejected: '0',
      totalApplicationPartlyRejected: '1',
      totalApplicationDisposed: '13',
      ApplicationRejectedSection: 'Section 8',
      totalApplicationPendingEndQuarter: '0',
      totalAmountApplicationReceived: '130',
      totalAmountChargesCollected: '5000',
      totalAmount: '5130',
    },
    {
      //  2
      nameAddressPIO: ' PIO Surat',
      totalApplicationsPendingEnd: '5',
      totalApplicationsReceived: '1',
      total: '6',
      totalApplicationsFullyFurnished: '4',
      totalApplicationsFullyTransferred: '1',
      totalApplicationPartlyTransferred: '0',
      totalApplicationFullyRejected: '0',
      totalApplicationPartlyRejected: '1',
      totalApplicationDisposed: '6',
      ApplicationRejectedSection: 'Section 8',
      totalApplicationPendingEndQuarter: '0',
      totalAmountApplicationReceived: '60',
      totalAmountChargesCollected: '450',
      totalAmount: '510',
    },
    {
      // 3
      nameAddressPIO: 'PIO Bhavnagar',
      totalApplicationsPendingEnd: '4',
      totalApplicationsReceived: '2',
      total: '6',
      totalApplicationsFullyFurnished: '6',
      totalApplicationsFullyTransferred: '0',
      totalApplicationPartlyTransferred: '0',
      totalApplicationFullyRejected: '0',
      totalApplicationPartlyRejected: '0',
      totalApplicationDisposed: '6',
      ApplicationRejectedSection: 'NA',
      totalApplicationPendingEndQuarter: '0',
      totalAmountApplicationReceived: '60',
      totalAmountChargesCollected: '2500',
      totalAmount: '2560',
    },
    {
      // 4
      nameAddressPIO: 'PIO Rajkot',
      totalApplicationsPendingEnd: '8',
      totalApplicationsReceived: '0',
      total: '8',
      totalApplicationsFullyFurnished: '5',
      totalApplicationsFullyTransferred: '2',
      totalApplicationPartlyTransferred: '0',
      totalApplicationFullyRejected: '0',
      totalApplicationPartlyRejected: '1',
      totalApplicationDisposed: '8',
      ApplicationRejectedSection: 'Section 8',
      totalApplicationPendingEndQuarter: '0',
      totalAmountApplicationReceived: '80',
      totalAmountChargesCollected: '8000',
      totalAmount: '8080',
    },
    {
      // 5
      nameAddressPIO: 'PIO Ahmedabad (N)',
      totalApplicationsPendingEnd: '6',
      totalApplicationsReceived: '5',
      total: '11',
      totalApplicationsFullyFurnished: '8',
      totalApplicationsFullyTransferred: '2',
      totalApplicationPartlyTransferred: '0',
      totalApplicationFullyRejected: '1',
      totalApplicationPartlyRejected: '0',
      totalApplicationDisposed: '11',
      ApplicationRejectedSection: 'Section 9',
      totalApplicationPendingEndQuarter: '0',
      totalAmountApplicationReceived: '110',
      totalAmountChargesCollected: '3000',
      totalAmount: '3110',
    },
    {
      // 6
      nameAddressPIO: 'PIO Ahmedabad (S)',
      totalApplicationsPendingEnd: '3',
      totalApplicationsReceived: '8',
      total: '11',
      totalApplicationsFullyFurnished: '10',
      totalApplicationsFullyTransferred: '1',
      totalApplicationPartlyTransferred: '0',
      totalApplicationFullyRejected: '0',
      totalApplicationPartlyRejected: '0',
      totalApplicationDisposed: '11',
      ApplicationRejectedSection: 'NA',
      totalApplicationPendingEndQuarter: '0',
      totalAmountApplicationReceived: '110',
      totalAmountChargesCollected: '5000',
      totalAmount: '5110',
    },
    {
      // 7
      nameAddressPIO: 'PIO Ahmedabad (W)',
      totalApplicationsPendingEnd: '0',
      totalApplicationsReceived: '10',
      total: '10',
      totalApplicationsFullyFurnished: '5',
      totalApplicationsFullyTransferred: '3',
      totalApplicationPartlyTransferred: '1',
      totalApplicationFullyRejected: '1',
      totalApplicationPartlyRejected: '0',
      totalApplicationDisposed: '10',
      ApplicationRejectedSection: 'Section 9',
      totalApplicationPendingEndQuarter: '0',
      totalAmountApplicationReceived: '100',
      totalAmountChargesCollected: '1200',
      totalAmount: '1300',
    },
    {
      // 8
      nameAddressPIO: ' PIO Ahmedabad',
      totalApplicationsPendingEnd: '1',
      totalApplicationsReceived: '0',
      total: '1',
      totalApplicationsFullyFurnished: '0',
      totalApplicationsFullyTransferred: '0',
      totalApplicationPartlyTransferred: '0',
      totalApplicationFullyRejected: '0',
      totalApplicationPartlyRejected: '0',
      totalApplicationDisposed: '0',
      ApplicationRejectedSection: '0',
      totalApplicationPendingEndQuarter: '1',
      totalAmountApplicationReceived: '10',
      totalAmountChargesCollected: '0',
      totalAmount: '10',
    },

  ];
  quarterlyStatementOfRtiColumn: string[] = [
    'serialNo',
    'nameAddressPIO',
    'totalApplicationsPendingEnd',
    'totalApplicationsReceived',
    'total',
    'totalApplicationsFullyFurnished',
    'totalApplicationsFullyTransferred',
    'totalApplicationPartlyTransferred',
    'totalApplicationFullyRejected',
    'totalApplicationPartlyRejected',
    'totalApplicationDisposed',
    'ApplicationRejectedSection',
    'totalApplicationPendingEndQuarter',
    'totalAmountApplicationReceived',
    'totalAmountChargesCollected',
    'totalAmount',
    'action',

  ];
  quarterlyStatementOfRtiDataSource = new MatTableDataSource<QuaterlyStatementOfRtiData>(this.quarterlyStatementOfRtiData);

  // Quarterly Statement of RTI Appeal Register
  quarterlyStatementOfRtiAppealData: QuarterlyStatementOfRtiAppealData[] = [
    {
      nameAddressAppellantAuthority: 'PIO Gandhinagar',
      totalAppealPending: '10',
      totalAppealsReceived: '3',
      total: '13',
      totalAppealsApprovedDuringQuarter: '10',
      totalAppealsFullyRejected: '0',
      totalAppealsPartlyRejected: '3',
      totalAppealsDisposed: '13',
      appealsRejected: 'Section 8',
    },
    {
      nameAddressAppellantAuthority: 'PIO Surat',
      totalAppealPending: '5',
      totalAppealsReceived: '1',
      total: '6',
      totalAppealsApprovedDuringQuarter: '4',
      totalAppealsFullyRejected: '0',
      totalAppealsPartlyRejected: '2',
      totalAppealsDisposed: '6',
      appealsRejected: 'Section 8',
    },
    {
      nameAddressAppellantAuthority: '	PIO Bhavnagar',
      totalAppealPending: '4',
      totalAppealsReceived: '2',
      total: '6',
      totalAppealsApprovedDuringQuarter: '6',
      totalAppealsFullyRejected: '0',
      totalAppealsPartlyRejected: '0',
      totalAppealsDisposed: '6',
      appealsRejected: 'NA',
    },
    {
      nameAddressAppellantAuthority: 'PIO Rajkot',
      totalAppealPending: '48',
      totalAppealsReceived: '20',
      total: '68',
      totalAppealsApprovedDuringQuarter: '65',
      totalAppealsFullyRejected: '01',
      totalAppealsPartlyRejected: '02',
      totalAppealsDisposed: '68',
      appealsRejected: 'Section 8, Section 9',
    },
    {
      nameAddressAppellantAuthority: 'PIO Ahmedabad (N)',
      totalAppealPending: '6',
      totalAppealsReceived: '5',
      total: '11',
      totalAppealsApprovedDuringQuarter: '9',
      totalAppealsFullyRejected: '1',
      totalAppealsPartlyRejected: '1',
      totalAppealsDisposed: '11',
      appealsRejected: 'SSection 8, Section 9',
    },
    {
      nameAddressAppellantAuthority: 'PIO Ahmedabad (S)',
      totalAppealPending: '3',
      totalAppealsReceived: '8',
      total: '11',
      totalAppealsApprovedDuringQuarter: '10',
      totalAppealsFullyRejected: '0',
      totalAppealsPartlyRejected: '1',
      totalAppealsDisposed: '11',
      appealsRejected: 'Section 8',
    },
    {
      nameAddressAppellantAuthority: 'PIO Ahmedabad (W)',
      totalAppealPending: '0',
      totalAppealsReceived: '10',
      total: '10',
      totalAppealsApprovedDuringQuarter: '8',
      totalAppealsFullyRejected: '1',
      totalAppealsPartlyRejected: '1',
      totalAppealsDisposed: '10',
      appealsRejected: 'Section 8, Section 9',
    },
    {
      nameAddressAppellantAuthority: 'PIO Ahmedabad',
      totalAppealPending: '1',
      totalAppealsReceived: '0',
      total: '1',
      totalAppealsApprovedDuringQuarter: '0',
      totalAppealsFullyRejected: '1',
      totalAppealsPartlyRejected: '0',
      totalAppealsDisposed: '1',
      appealsRejected: 'Section 9',
    },
  ];
  quarterlyStatementOfRtiAppealColumn: string[] = [
    'serialNo',
    'nameAddressAppellantAuthority',
    'totalAppealPending',
    'totalAppealsReceived',
    'total',
    'totalAppealsApprovedDuringQuarter',
    'totalAppealsFullyRejected',
    'totalAppealsPartlyRejected',
    'totalAppealsDisposed',
    'appealsRejected',
    'action',
  ];
  quarterlyStatementOfRtiAppealDataSource =
    new MatTableDataSource<QuarterlyStatementOfRtiAppealData>(this.quarterlyStatementOfRtiAppealData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rtiReportRegisterForm = this.fb.group({
      report: [''],
      departmentName: [{ value: '', disabled: true }],
    });
  }

  // display different reports on different value of report dropdown value
  onReport(event) {
    if (event.value === '1') {
      this.rtiReportRegisterForm.controls.departmentName.patchValue('District Panchayat');
    } else if (event.value === '2') {
      this.rtiReportRegisterForm.controls.departmentName.patchValue('Taluka Panchayat');
    } else if (event.value === '3') {
      this.rtiReportRegisterForm.controls.departmentName.patchValue('Municipality');
    } else if (event.value === '4') {
      this.rtiReportRegisterForm.controls.departmentName.patchValue('Municipal Corporation');
    }
  }

  // on click on search
  onSearch() {

    if (this.rtiReportRegisterForm.value.report === '1') {
      this.detailedMonthalyStatementOfRtiRegister = true;
      this.countWiseMonthly = false;
      this.quarterlyStatementofRtiRegister = false;
      this.quarterlyStatementofRtiAppealRegister = false;
      this.isButton = true;
    } else if (this.rtiReportRegisterForm.value.report === '2') {
      this.detailedMonthalyStatementOfRtiRegister = false;
      this.countWiseMonthly = true;
      this.quarterlyStatementofRtiRegister = false;
      this.quarterlyStatementofRtiAppealRegister = false;
      this.isButton = true;
    } else if (this.rtiReportRegisterForm.value.report === '3') {
      this.detailedMonthalyStatementOfRtiRegister = false;
      this.countWiseMonthly = false;
      this.quarterlyStatementofRtiRegister = true;
      this.quarterlyStatementofRtiAppealRegister = false;
      this.isButton = true;
    } else if (this.rtiReportRegisterForm.value.report === '4') {
      this.detailedMonthalyStatementOfRtiRegister = false;
      this.countWiseMonthly = false;
      this.quarterlyStatementofRtiRegister = false;
      this.quarterlyStatementofRtiAppealRegister = true;
      this.depName = 'Municipal Corporation';
      this.isButton = true;
    } else {
      this.detailedMonthalyStatementOfRtiRegister = false;
      this.countWiseMonthly = false;
      this.quarterlyStatementofRtiRegister = false;
      this.quarterlyStatementofRtiAppealRegister = false;
      this.isButton = false;
    }
  }

  // reset form
  reset() {
    this.rtiReportRegisterForm.reset();
  }

}
