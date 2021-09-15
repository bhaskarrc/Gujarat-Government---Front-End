import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { RtiRegisterEntryList } from 'src/app/model/local-fund';
@Component({
  selector: 'app-rti-register-listing',
  templateUrl: './rti-register-listing.component.html',
  styleUrls: ['./rti-register-listing.component.css']
})
export class RtiRegisterListingComponent implements OnInit {

  // form group
  rtiRegisterReport: FormGroup;

  // form control
  yearCtrl: FormControl = new FormControl();
  monthCtrl: FormControl = new FormControl();
  quarterCtrl: FormControl = new FormControl();

  // lists
  yearList: CommonListing[] = [
    { value: '1', viewValue: '2009' },
    { value: '2', viewValue: '2010' },
    { value: '3', viewValue: '2011' },
    { value: '4', viewValue: '2012' },
    { value: '5', viewValue: '2013' },
    { value: '6', viewValue: '2014' },
    { value: '7', viewValue: '2015' },
    { value: '8', viewValue: '2016' },
    { value: '9', viewValue: '2017' },
    { value: '10', viewValue: '2018' },
    { value: '11', viewValue: '2019' },
    { value: '12', viewValue: '2020' },
  ];
  monthList: CommonListing[] = [
    { value: '1', viewValue: 'Jan' },
    { value: '2', viewValue: 'Feb' },
    { value: '3', viewValue: 'Mar' },
    { value: '4', viewValue: 'Apr' },
    { value: '5', viewValue: 'May' },
    { value: '6', viewValue: 'Jun' },
    { value: '7', viewValue: 'Jul' },
    { value: '8', viewValue: 'Aug' },
    { value: '9', viewValue: 'Sep' },
    { value: '10', viewValue: 'Oct' },
    { value: '11', viewValue: 'Nov' },
    { value: '12', viewValue: 'Dec' },

  ];

  quarterList: CommonListing[] = [
    { value: '1', viewValue: 'Apr-Jun' },
    { value: '2', viewValue: 'Jul-Sep' },
    { value: '3', viewValue: 'Oct-Dec' },
    { value: '4', viewValue: 'Jan-Mar' }
  ];

  // table data
  elementData: RtiRegisterEntryList[] = [
    {
      applicationNo: '1019',
      applicationDate: '16-Nov-2019',
      applicantNameAndAddress: 'K P Shah - Sector 16, Plot No, 121/2 Gandhinagar',
      nameAndAddressOfPio: 'PIO Gandhinagar',
      dateOfReceiptByApio: '18-Nov-2019',
      applicationTransferred: 'Yes',
      transferDate: '20-Nov-2019',
      applicantCategory: 'BPL',
      briefDescriptionOfRequestForInformation: 'GGPA Information',
      involvingThirdPartyInformationOrNot: 'Not',
      amountForApplicationFeesPaid: '20.00',
      chargesCollectedForFurnishingInformation: '1200.00',
      totalAmountCollected: '1220.00',
      informationFurnished: 'Yes',
      rejectionDate: '',
      underWhichSectionApplicationRejected: '',
      deemedRefusal: '',
      appealMadeAgainstDecision: '',
      remarks: '', status: 'Verify'
    },
    {
      applicationNo: '1020', applicationDate: '18-Nov-2019',
      applicantNameAndAddress: 'M M Prajapati - Shriji Apartment, Sabarmati, Ahmedabad',
      nameAndAddressOfPio: 'PIO Gandhinagar', dateOfReceiptByApio: '21-Nov-2019', applicationTransferred: 'No',
      transferDate: '', applicantCategory: 'Other', briefDescriptionOfRequestForInformation: 'Pay & Verification Information',
      involvingThirdPartyInformationOrNot: 'Not', amountForApplicationFeesPaid: '20.00',
      chargesCollectedForFurnishingInformation: '100.00', totalAmountCollected: '120.00', informationFurnished: 'Yes',
      rejectionDate: '', underWhichSectionApplicationRejected: '', deemedRefusal: '',
      appealMadeAgainstDecision: '', remarks: '', status: 'Approved'
    },
    {
      applicationNo: '1021', applicationDate: '19-Nov-2019',
      applicantNameAndAddress: 'S S Haidar - Haidar Pol, Lal Darvwaja Ahmedabad',
      nameAndAddressOfPio: 'PIO Gandhinagar', dateOfReceiptByApio: '21-Nov-2019', applicationTransferred: 'No',
      transferDate: '', applicantCategory: 'BPL', briefDescriptionOfRequestForInformation: '6th pay Informamtion',
      involvingThirdPartyInformationOrNot: 'Not', amountForApplicationFeesPaid: '20.00',
      chargesCollectedForFurnishingInformation: '100.00', totalAmountCollected: '120.00', informationFurnished: 'Yes',
      rejectionDate: '', underWhichSectionApplicationRejected: '',
      deemedRefusal: '', appealMadeAgainstDecision: '', remarks: '', status: 'Verify'
    },
    {
      applicationNo: '1022', applicationDate: '20-Nov-2019',
      applicantNameAndAddress: 'K P Kabra - Sukan Tenament, Naranpura, Ahmedabad',
      nameAndAddressOfPio: 'PIO Gandhinagar', dateOfReceiptByApio: '21-Nov-2019', applicationTransferred: 'Yes',
      transferDate: '20-Nov-2019', applicantCategory: 'Other', briefDescriptionOfRequestForInformation: '7th pay Informamtion',
      involvingThirdPartyInformationOrNot: 'Not', amountForApplicationFeesPaid: '20.00',
      chargesCollectedForFurnishingInformation: '100.00', totalAmountCollected: '120.00', informationFurnished: 'Yes',
      rejectionDate: '', underWhichSectionApplicationRejected: '',
      deemedRefusal: '', appealMadeAgainstDecision: '', remarks: '', status: 'Pending from Verifier'
    }
  ];
  dataSource = new MatTableDataSource<RtiRegisterEntryList>(this.elementData);

  displayedColumns: string[] = ['position', 'applicationNo', 'applicationDate', 'applicantNameAndAddress',
    'nameAndAddressOfPio', 'dateOfReceiptByApio', 'applicationTransferred', 'transferDate', 'applicantCategory',
    'briefDescriptionOfRequestForInformation', 'involvingThirdPartyInformationOrNot', 'amountForApplicationFeesPaid',
    'chargesCollectedForFurnishingInformation', 'totalAmountCollected', 'informationFurnished',
    'rejectionDate', 'underWhichSectionApplicationRejected', 'deemedRefusal', 'appealMadeAgainstDecision', 'remarks', 'status', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rtiRegisterReport = this.fb.group({
      applicationNo: [''],
      applicationDate: [''],
      applicantName: [''],
      rtiDescription: [''],
      fromDate: [''],
      toDate: [''],
      year: [''],
      month: [''],
      quarter: ['']
    });
    this.dataSource.paginator = this.paginator;
  }

}
