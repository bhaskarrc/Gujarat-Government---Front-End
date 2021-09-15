import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { DatePipe, DecimalPipe } from '@angular/common';
import { WorkflowDetailsLfComponent } from '../../workflow-details-lf/workflow-details-lf.component';
import { RtiRegisterEntryList } from 'src/app/model/local-fund';
import { LocalFundDirective } from 'src/app/common/directive/local-fund-directive';

@Component({
  selector: 'app-rti-register-entry',
  templateUrl: './rti-register-entry.component.html',
  styleUrls: ['./rti-register-entry.component.css']
})
export class RtiRegisterEntryComponent implements OnInit {
  id = 1;
  totalCharge = 20.00;
  errorMessages = lfMessage;
  directiveObject = new LocalFundDirective(this.dialog);

  // form group
  rtiRegisterEntry: FormGroup;

  // form control
  applicationTransferredTypeCtrl: FormControl = new FormControl();
  applicantCategoryCtrl: FormControl = new FormControl();
  underWhichSectionApplicationRejectedCtrl: FormControl = new FormControl();

  // lists
  applicantCategoryList: ListValue[] = [
    { value: '1', viewValue: 'APL' },
    { value: '2', viewValue: 'BPL' },
    { value: '3', viewValue: 'General' },
    { value: '4', viewValue: 'AY' },
    { value: '5', viewValue: 'AAY' }
  ];
  applicationTransferredList: ListValue[] = [
    { value: '0', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '1', viewValue: 'Education Department' },
    { value: '2', viewValue: 'Energy & Petrochemicals Department' },
    { value: '3', viewValue: 'Finance Department' },
    { value: '4', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '5', viewValue: 'Forest & Environment Department' },
    { value: '6', viewValue: 'General Administration Department' },
    { value: '7', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '8', viewValue: 'Health & Family Welfare Department' },
    { value: '9', viewValue: 'Home Department' },
    { value: '10', viewValue: 'Industries & Mines Department' },
    { value: '11', viewValue: 'Information & Broadcasting Department' },
    { value: '12', viewValue: 'Labour & Employment Department' },
    { value: '13', viewValue: 'Legal Department' },
    { value: '14', viewValue: 'Legislative & Parliamentary Affairs Department' },
    { value: '15', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department' },
    { value: '16', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '17', viewValue: 'Ports & Transport Department' },
    { value: '18', viewValue: 'Revenue Department' },
    { value: '19', viewValue: 'Roads & Buildings Department' },
    { value: '20', viewValue: 'Science & Technology Department' },
    { value: '21', viewValue: 'Social Justice & Empowerment Department' },
    { value: '22', viewValue: 'Tribal Development Department' },
    { value: '23', viewValue: 'Sports, Youth & Cultural Activities Department' },
    { value: '24', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '25', viewValue: 'Women & Child Development Department' },
    { value: '26', viewValue: 'Climate Change Department' },
  ];

  underWhichSectionApplicationRejectedList: ListValue[] = [
    { value: '1', viewValue: 'Section 8' },
    { value: '2', viewValue: 'Section 9' }
  ];


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
      remarks: ''
    },
    {
      applicationNo: '1020', applicationDate: '18-Nov-2019',
      applicantNameAndAddress: 'M M Prajapati - Shriji Apartment, Sabarmati, Ahmedabad',
      nameAndAddressOfPio: 'PIO Gandhinagar', dateOfReceiptByApio: '21-Nov-2019', applicationTransferred: 'No',
      transferDate: '', applicantCategory: 'Other', briefDescriptionOfRequestForInformation: 'Pay & Verification Information',
      involvingThirdPartyInformationOrNot: 'Not', amountForApplicationFeesPaid: '20.00',
      chargesCollectedForFurnishingInformation: '100.00', totalAmountCollected: '120.00', informationFurnished: 'Yes',
      rejectionDate: '', underWhichSectionApplicationRejected: '', deemedRefusal: '', appealMadeAgainstDecision: '', remarks: ''
    },
    {
      applicationNo: '1021', applicationDate: '19-Nov-2019',
      applicantNameAndAddress: 'S S Haidar - Haidar Pol, Lal Darvwaja Ahmedabad',
      nameAndAddressOfPio: 'PIO Gandhinagar', dateOfReceiptByApio: '21-Nov-2019', applicationTransferred: 'No',
      transferDate: '', applicantCategory: 'BPL', briefDescriptionOfRequestForInformation: '6th pay Informamtion',
      involvingThirdPartyInformationOrNot: 'Not', amountForApplicationFeesPaid: '20.00',
      chargesCollectedForFurnishingInformation: '100.00', totalAmountCollected: '120.00', informationFurnished: 'Yes',
      rejectionDate: '', underWhichSectionApplicationRejected: '', deemedRefusal: '', appealMadeAgainstDecision: '', remarks: ''
    },
    {
      applicationNo: '1022', applicationDate: '20-Nov-2019',
      applicantNameAndAddress: 'K P Kabra - Sukan Tenament, Naranpura, Ahmedabad',
      nameAndAddressOfPio: 'PIO Gandhinagar', dateOfReceiptByApio: '21-Nov-2019', applicationTransferred: 'Yes',
      transferDate: '20-Nov-2019', applicantCategory: 'Other', briefDescriptionOfRequestForInformation: '7th pay Informamtion',
      involvingThirdPartyInformationOrNot: 'Not', amountForApplicationFeesPaid: '20.00',
      chargesCollectedForFurnishingInformation: '100.00', totalAmountCollected: '120.00', informationFurnished: 'Yes',
      rejectionDate: '', underWhichSectionApplicationRejected: '', deemedRefusal: '', appealMadeAgainstDecision: '', remarks: ''
    }
  ];

  dataSource = new MatTableDataSource<RtiRegisterEntryList>(this.elementData);
  displayedColumns: string[] = ['position', 'applicationNo', 'applicationDate', 'applicantNameAndAddress',
    'nameAndAddressOfPio', 'dateOfReceiptByApio', 'applicationTransferred', 'transferDate', 'applicantCategory',
    'briefDescriptionOfRequestForInformation', 'involvingThirdPartyInformationOrNot', 'amountForApplicationFeesPaid',
    'chargesCollectedForFurnishingInformation', 'totalAmountCollected', 'informationFurnished',
    'rejectionDate', 'underWhichSectionApplicationRejected', 'deemedRefusal', 'appealMadeAgainstDecision', 'remarks', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private decimalPipe: DecimalPipe, public dialog: MatDialog) { }

  ngOnInit() {

    this.rtiRegisterEntry = this.fb.group({
      applicationNo: this.idCreation(),
      applicantNameAndAddress: [''],
      applicationDate: [''],
      nameAndAddressOfPio: [''],
      dateOfReceiptByApio: [''],
      transferDate: [''],
      applicantCategory: [''],
      briefDescriptionOfRequestForInformation: [''],
      involvingThirdPartyInformationOrNot: [''],
      amountForApplicationFeesPaid: ['20.00'],
      chargesCollectedForFurnishingInformation: ['0.00'],
      totalAmountCollected: this.totalCharge,
      informationFurnished: [''],
      rejectionDate: [''],
      underWhichSectionApplicationRejected: [''],
      deemedRefusal: [''],
      appealMadeAgainstDecision: [''],
      applicationTransferred: [''],
      remarks: ['']
    });

    // dynamically calculates total
    this.dataSource.paginator = this.paginator;
    this.rtiRegisterEntry.get('chargesCollectedForFurnishingInformation').valueChanges.subscribe(val => {
      this.totalCharge = Number(val) + Number(20.00);
    });

  }

  // increase id value
  idCreation() {
    const id = Number(this.id) + 1;
    return id;
  }

  // on click on add button
  onAdd() {
    this.dataSource.data.push({
      amountForApplicationFeesPaid: this.rtiRegisterEntry.get('amountForApplicationFeesPaid').value,
      appealMadeAgainstDecision: this.rtiRegisterEntry.get('appealMadeAgainstDecision').value,
      applicantCategory: this.rtiRegisterEntry.get('applicantCategory').value,
      applicantNameAndAddress: this.rtiRegisterEntry.get('applicantNameAndAddress').value,
      applicationDate: this.datePipe.transform(this.rtiRegisterEntry.get('applicationDate').value, 'dd-MMM-yyyy'),
      applicationNo: String(this.id),
      applicationTransferred: this.rtiRegisterEntry.get('applicationTransferred').value,
      briefDescriptionOfRequestForInformation: this.rtiRegisterEntry.get('briefDescriptionOfRequestForInformation').value,
      chargesCollectedForFurnishingInformation: this.rtiRegisterEntry.get('chargesCollectedForFurnishingInformation').value,
      dateOfReceiptByApio: this.datePipe.transform(this.rtiRegisterEntry.get('dateOfReceiptByApio').value, 'dd-MMM-yyyy'),
      deemedRefusal: this.rtiRegisterEntry.get('deemedRefusal').value,
      informationFurnished: this.rtiRegisterEntry.get('informationFurnished').value,
      involvingThirdPartyInformationOrNot: this.rtiRegisterEntry.get('involvingThirdPartyInformationOrNot').value,
      nameAndAddressOfPio: this.rtiRegisterEntry.get('nameAndAddressOfPio').value,
      rejectionDate: this.datePipe.transform(this.rtiRegisterEntry.get('rejectionDate').value, 'dd-MMM-yyyy'),
      remarks: this.rtiRegisterEntry.get('remarks').value,
      totalAmountCollected: this.decimalPipe.transform(this.totalCharge, '1.2-2'),
      transferDate: this.datePipe.transform(this.rtiRegisterEntry.get('transferDate').value, 'dd-MMM-yyyy'),
      underWhichSectionApplicationRejected: this.rtiRegisterEntry.get('underWhichSectionApplicationRejected').value,

    });
    this.dataSource.data = this.dataSource.data;

    // increment Id No
    this.id++;
  }

  // reset form
  clearForm() {
    this.rtiRegisterEntry.reset();
    this.rtiRegisterEntry.patchValue({
      applicationNo: this.id,
      amountForApplicationFeesPaid: '20.00',
      chargesCollectedForFurnishingInformation: '0.00',
      totalAmountCollected: this.decimalPipe.transform(this.totalCharge, '1.2-2'),
    });
  }

}
