import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
import { MatTableDataSource, MatDialog, } from '@angular/material';
import { dppfHbaMessage } from 'src/app/common/error-message/common-message.constants';
import { InwardNoDialogComponent } from '../inward-no-dialog/inward-no-dialog.component';
import { HeadAmount } from 'src/app/model/dppf-hba';
import { DPPFHbaDirectives } from 'src/app/common/directive/dppf-hba';

@Component({
  selector: 'app-outward-details-hba',
  templateUrl: './outward-details-hba.component.html',
  styleUrls: ['./outward-details-hba.component.css']
})
export class OutwardDetailsHbaComponent implements OnInit {
  directiveObject = new DPPFHbaDirectives(this.dialog);
  // error message variable
  errorMessage;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Form Group
  public gpfOutwardDetailsForm: FormGroup;
  // Form Control
  typeOfInwardCtrl: FormControl = new FormControl();
  typeOfOutwardToCtrl: FormControl = new FormControl();
  typeOfStateCtrl: FormControl = new FormControl();
  typeOfDistrictCtrl: FormControl = new FormControl();
  typeOfTalukaCtrl: FormControl = new FormControl();
  typeOfDeliveryModeCtrl: FormControl = new FormControl();
  typeOfPostToCtrl: FormControl = new FormControl();

  Element_Data: HeadAmount[] = [{
    head: '',
    amount: '',
  }];
  // Lists
  classTypeOfInward: ListValue[] = [
    { value: '1', viewValue: 'Top Schedule' },
    { value: '3', viewValue: 'Others' },
    { value: '4', viewValue: 'Cheque / Demand Draft' },
    { value: '5', viewValue: 'Request for Account Generation' },
    { value: '6', viewValue: 'Demand for Interest Conformation Letter' },
    { value: '7', viewValue: 'Demand for NDC' },
    { value: '8', viewValue: 'Demand for refund order' },
    { value: '9', viewValue: 'AGTE Misclassified Entry' },
    { value: '10', viewValue: 'AGTE Clearance Entry(Sent by DPPF)' },
    { value: '11', viewValue: 'Debit/Credit Correction Entry' },
    { value: '12', viewValue: 'AG CA Figure' }
  ];

  classTypeOfDeliveryMode: ListValue[] = [
    { value: '1', viewValue: 'Courier ' },
    { value: '2', viewValue: 'Speed Post' },
    { value: '3', viewValue: 'Post' },
    { value: '4', viewValue: 'Hand Delivery' },
    { value: '5', viewValue: 'Other' },
  ];


  classTypeOfOutwardTo: ListValue[] = [
    { value: '1', viewValue: 'Treasury/PAO ' },
    { value: '2', viewValue: 'DDO' },
    { value: '3', viewValue: 'AO' },
    { value: '4', viewValue: 'AG ' },
    { value: '5', viewValue: 'Other' },
  ];

  classTypeOfState: ListValue[] = [
    { value: '1', viewValue: 'Andaman and Nicobar Island ' },
    { value: '2', viewValue: 'Andhra Pradesh' },
    { value: '3', viewValue: 'Arunachal Pradesh ' },
    { value: '4', viewValue: 'Assam' },
    { value: '5', viewValue: 'Bihar ' },
    { value: '6', viewValue: 'Chandigarh' },
    { value: '7', viewValue: 'Chhattisgarh ' },
    { value: '8', viewValue: 'Delhi' },
    { value: '9', viewValue: 'Goa ' },
    { value: '10', viewValue: 'Gujarat' },
    { value: '11', viewValue: 'Haryana ' },
    { value: '12', viewValue: 'Jharkhand' },
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


  classTypeOfTaluka: ListValue[] = [
    { value: '1', viewValue: 'Dahegam ' },
    { value: '2', viewValue: 'Gandhinagar' },
    { value: '3', viewValue: 'Kalol ' },
    { value: '4', viewValue: 'Manasa' },
  ];

  classTypeOfPostTo: ListValue[] = [
    { value: '1', viewValue: 'Courier ' },
    { value: '2', viewValue: 'Post' },
    { value: '3', viewValue: 'Speed Post ' },
    { value: '4', viewValue: 'Hand Delivery Name' },
  ];

  // Table Source
  recoveryColumn = ['head', 'amount', 'action'];
  recoveryDataSource = new MatTableDataSource([]);

  // Variable
  fileData: any;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.errorMessage = dppfHbaMessage;
    this.gpfOutwardDetailsForm = this.fb.group({
      inwardNumber: '',
      dateInward: '',
      letterNumber: '',
      letterDate: '',
      typeOfInward: '',
      other: '',
      dateOutward: new Date(),
      deliveryMode: '',
      deleveryTime: '',
      outwardTo: '',
      state: '',
      district: '',
      taluka: '',
      pincode: '',
      address: '',
      remarks: '',
      referenceNo: '',
      handDelivery: '',
      otherDeliveryMode: '',
      hba: [''],
      hbaNo: [''],
      hbaName: [''],
    });
  }
  // resets form
  resetForm() {
    this.gpfOutwardDetailsForm.reset();
  }

  // Inward NO
  inwardNo(): void {
    const dialogRef = this.dialog.open(InwardNoDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
