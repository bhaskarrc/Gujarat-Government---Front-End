import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { AuditMRTable, MedDetailTable, ObjectionTable, Reimbursement } from 'src/app/model/ppo';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { ppoMessage } from 'src/app/common/error-message/common-message.constants';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-reimbursement-details',
  templateUrl: './medical-reimbursement-details.component.html',
  styleUrls: ['./medical-reimbursement-details.component.css']
})
export class MedicalReimbursementDetailsComponent implements OnInit {
  // variables
  directiveObj = new CommonDirective(this.router);
  Element_Data: AuditMRTable[];
  mRReimbursement: FormGroup;
  errMsg = ppoMessage;
  treatmentFrom: Date;
  // form controls
  paymentModeCtrl: FormControl = new FormControl();
  medicalAllowanceCtrl: FormControl = new FormControl();
  hospitalNameCtrl: FormControl = new FormControl();
  diseaseCtrl: FormControl = new FormControl();
  indoorPatientCtrl: FormControl = new FormControl();
  patientNameCtrl: FormControl = new FormControl();
  HeadHearingCtrl: FormControl = new FormControl();
  // lists
  paymentMode_list: CommonListing[] = [
    { value: '1', viewValue: 'Bank Payment Scheme' },
    { value: '2', viewValue: 'Counter' },
    { value: '3', viewValue: 'Money Order Scheme' }
  ];

  medicalAllowance_list: CommonListing[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  hospitalName_list: CommonListing[] = [
    { value: 'Govt. Hospital', viewValue: 'Govt. Hospital' },
    { value: 'Govt. Empaneled Hospital', viewValue: 'Govt. Empaneled Hospital' },
    { value: 'Private Hospital', viewValue: 'Private Hospital' },
    { value: '4', viewValue: 'Govt. Equivalant Hospital' }
  ];

  disease_list: CommonListing[] = [];

  indoorPatient_list: CommonListing[] = [
    { value: 'Yes', viewValue: 'Yes' },
    { value: 'No', viewValue: 'No' }
  ];

  patientName_list: CommonListing[] = [
    { value: 'R P P', viewValue: 'R P P' }
  ];

  HeadHearing_list: CommonListing[] = [
    { value: 'Left', viewValue: 'Left' },
    { value: 'Right', viewValue: 'Right' }
  ];


  // table data
  ElementDataSource2: Reimbursement[] = [
    { permisibleAmt: '0.00', deductionAmt: '0.00', grantedAmt: '0.00' }
  ];
  ElementDataSource: MedDetailTable[] = [
    {
      patientName: '', relation: '', age: '', hospitalName: '',
      treatmentFrom: new Date('02/02/2020'), treatmentTo: new Date(''), disease: '',
      headHearingDevice: '', kneeReplacement: '', reimbursementAmt: '',
      indoorPatient: '', deductionOnAmt: '', grantedAmt: ''
    }
  ];

  objectionDataElement: ObjectionTable[] = [
    { objectionCode: 'OBJ147', objectionDesc: 'Bill amount greater than Rs 5000, Please stick revenue stamp of Rs. 1' },
    {
      objectionCode: 'OBJ146',
      objectionDesc: 'Benefit of Medical Allowance is adopted in monthly pension hence Bill has to be produce by deducting Rs. 1000'
    },
    { objectionCode: 'OBJ145', objectionDesc: 'Amount is words as well digits are not mentioned in Annexure' },
    { objectionCode: 'OBJ144', objectionDesc: 'Bank Branch and Scheme is not mentioned in Annexure' },
    { objectionCode: 'OBJ139', objectionDesc: 'Bill is older than 6 months hence reimbursement is not permissible' },
    { objectionCode: 'OBJ140', objectionDesc: 'Disease Name is not mentioned properly' },
    { objectionCode: 'OBJ141', objectionDesc: 'Official Doctors Signature is mismatch with available record' },
    { objectionCode: 'OBJ143', objectionDesc: 'Counter Signature is missing' },
    { objectionCode: 'OBJ138', objectionDesc: 'Mass of Medicines are not mentioned in Annexure' },
    { objectionCode: 'OBJ137', objectionDesc: 'Official Doctors Name is not mentioned in Bill' },
    { objectionCode: 'OBJ131', objectionDesc: 'Summation in Bill comes incorrect' },
    { objectionCode: 'OBJ132', objectionDesc: 'Doctors Signature is missing' },
    { objectionCode: 'OBJ133', objectionDesc: 'Duration of Treatment is not mentioned in Bill' },
    { objectionCode: 'OBJ134', objectionDesc: 'Medicines name are not mentioned in Capital Letter in Annexure' },
    { objectionCode: 'OBJ135', objectionDesc: 'Duration of Treatement is not mentioned and mismatch in Bill Date' },
    { objectionCode: 'OBJ136', objectionDesc: 'Hospital Name is missing' },
    { objectionCode: 'OBJ130', objectionDesc: 'Treatment Hospital is not listed in the list of Govt authorized Hospitals List ' },
    { objectionCode: 'OBJ129', objectionDesc: 'Reimbursement Amount is less than Rs. 1000 as Pensioner has opted the option of MA' },
    {
      objectionCode: 'OBJ127',
      objectionDesc: 'Pensioner is opting Rs. 100 as MA in Pension and treatment has not been taken as Indoor Patient'
    }
  ];

  displayedObjectionColumns = [
    'checkbox', 'objectionCode', 'objectionDesc'
  ];

  displayedColumns = ['position',
    'patientName', 'relation', 'age', 'hospitalName',
    'treatmentFrom', 'treatmentTo', 'disease', 'headHearingDevice',
    'kneeReplacement', 'indoorPatient', 'reimbursementAmt', 'deductionOnAmt', 'grantedAmt', 'action'
  ];
  dataSource = new MatTableDataSource<MedDetailTable>(this.ElementDataSource);
  dataSource2 = new MatTableDataSource<Reimbursement>(this.ElementDataSource2);
  objectionDataSource = new MatTableDataSource<ObjectionTable>(this.objectionDataElement);
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<MedicalReimbursementDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AuditMRTable[], private router: Router
  ) {
    this.Element_Data = data;
  }

  ngOnInit() {

    this.treatmentFrom = new Date('02/02/2020');

    this.mRReimbursement = this.fb.group({
      financialYear: ['2019-2020'],
      inwardNo: [''],
      InwardDate: [''],
      ppoNo: [''],
      pensionerName: [''],
      bankCode: ['804025'],
      branch: ['State Bank of India NIRNAYNAGAR'],
      paymentMode: ['1'],
      headCode: ['1'],
      medicalAllowance: ['1'],
      medicalAllowanceAmt: ['300.00'],
      reimbursementAmt: [''],
      auditorName: ['']
    });

    this.mRReimbursement.patchValue({
      inwardNo: this.Element_Data['inwardNo'],
      InwardDate: this.Element_Data['inwardDate'],
      ppoNo: this.Element_Data['ppoNo'],
      pensionerName: this.Element_Data['pensionerName'],
      reimbursementAmt: this.Element_Data['reimbursementAmount'],
      auditorName: this.Element_Data['auditorName']
    });
  }



  onSubmit() { }
  // closes dialog box
  onClose() {
    this.dialogRef.close();
  }
  // patch table data
  fillTheTable(data) {
    const p = this.dataSource.data;
    p.push({
      patientName: 'R P P',
      relation: 'Self',
      age: '60',
      hospitalName: this.hospitalName_list[0].viewValue,
      treatmentFrom: new Date(''),
      treatmentTo: new Date(''),
      disease: '',
      headHearingDevice: '',
      kneeReplacement: '',
      reimbursementAmt: '100.00',
      indoorPatient: 'Yes',
      deductionOnAmt: '0.00',
      grantedAmt: '100.00'
    });

    p.splice(this.dataSource.data.length - 2, 1);
    this.dataSource.data = p;
  }
  // adds new row in table
  addRow() {
    const p = this.dataSource.data;
    p.push({
      patientName: '',
      relation: '',
      age: '',
      hospitalName: '',
      treatmentFrom: new Date(''),
      treatmentTo: new Date(''),
      disease: '',
      headHearingDevice: '',
      kneeReplacement: '',
      reimbursementAmt: '',
      indoorPatient: '',
      deductionOnAmt: '',
      grantedAmt: ''
    });
    this.dataSource.data = p;
  }
  // deletes row
  deleteRow(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(
      this.dataSource.data
    );
  }

  resetForm() { }

}
