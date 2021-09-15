import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { CommonListing } from 'src/app/model/common-listing';
import { PpoDirectives } from 'src/app/common/directive/ppo';

@Component({
  selector: 'app-revision-authority-view',
  templateUrl: './revision-authority-view.component.html',
  styleUrls: ['./revision-authority-view.component.css']
})
export class RevisionAuthorityViewComponent implements OnInit {
  // variables
  todayDate = new Date();
  revisionAuthorityForm: FormGroup;
  directiveObject = new PpoDirectives(this.dialog);

  // lists
  state_list: ListValue[] = [
    { value: '1', viewValue: 'Gujarat' },
    { value: '2', viewValue: 'Madhya Pradesh' }
  ];
  treasury_list: CommonListing[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Dehgam' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' },
    { value: '3', viewValue: 'Sub Treasury Office, Mansa' },
  ];
  subTreasury_list: any[] = [
    { value: '1', viewValue: 'Sub Treasury Office, Bhuj' },
    { value: '2', viewValue: 'Sub Treasury Office, Kalol' }
  ];

  SalutationTypeList: any[] = [
    { value: '1', viewValue: 'Mr.' },
    { value: '2', viewValue: 'Miss' },
    { value: '3', viewValue: 'Mrs.' },
    { value: '5', viewValue: 'Dr.' },
    { value: '6', viewValue: 'Honorable' },
    { value: '7', viewValue: 'Late' },
    { value: '8', viewValue: 'Ms.' },
  ];
  relation_list: ListValue[] = [
    { value: '1', viewValue: 'Spouse' },
    { value: '2', viewValue: 'Son' },
    { value: '3', viewValue: 'Daughter' },
    { value: '4', viewValue: 'Father' },
    { value: '5', viewValue: 'Mother' },
    { value: '6', viewValue: 'Brother' },
    { value: '7', viewValue: 'Sister' },
    { value: '8', viewValue: 'Grand Father' },
    { value: '9', viewValue: 'Grand Mother' },
    { value: '10', viewValue: 'Mother in Law' },
    { value: '11', viewValue: 'Sister In Law' },
    { value: '12', viewValue: 'Uncle' },
    { value: '13', viewValue: 'cousin' },
    { value: '14', viewValue: 'Nephew' },
    { value: '15', viewValue: 'Aunty' },
    { value: '16', viewValue: 'Niece' },
    { value: '17', viewValue: 'Other' }
  ];
  boolean_list: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  disabilityType_list: ListValue[] = [
    { value: '1', viewValue: 'Physically Handicapped' },
    { value: '2', viewValue: 'Mentally Retired' },
    { value: '3', viewValue: 'Deaf and Dumb' }
  ];
  majorMinor_list: ListValue[] = [
    { value: '1', viewValue: 'Major' },
    { value: '2', viewValue: 'Minor' }
  ];

  // form controls
  stateCtrl: FormControl = new FormControl();
  treasuryCtrl: FormControl = new FormControl();
  subTreasuryCtrl: FormControl = new FormControl();
  SalutationCtrl: FormControl = new FormControl();
  relationCtrl: FormControl = new FormControl();
  mjrMnrCtrl: FormControl = new FormControl();
  isNomineeCtrl: FormControl = new FormControl();
  isFpCtrl: FormControl = new FormControl();
  disabilityCtrl: FormControl = new FormControl();
  marriedCtrl: FormControl = new FormControl();
  disabilityTypeCtrl: FormControl = new FormControl();

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.revisionAuthorityFormData();
  }

  revisionAuthorityFormData() {
    this.revisionAuthorityForm = this.fb.group({
      basic: [''],
      cvp: [''],
      dcrg: [''],
      fp1: [''],
      fp1Date: [''],
      fp2: [''],
      fp2Date: [''],
      basicRevised: [''],
      cvpRevised: [''],
      dcrgRevised: [''],
      fp1Revised: [''],
      fp1DateRevised: [''],
      fp2Revised: [''],
      fp2DateRevised: [''],
      arrearAmount: [''],
      salutation: ['1'],
      fName: ['Pannalal'],
      mName: ['Hiralal'],
      lName: ['Mehta'],
      rAddress: ['XYZ, ABC'],
      state: ['1'],
      subTreasury: ['1'],
      treasury: ['1'],
      totalService: ['30'],
      retirementDate: new Date('1/10/2025'),
      payScale: ['19500-44400'],
      payBand: ['B1'],
      gradePay: ['Grade 1'],
      payLevel: [''],
      cellId: [''],
      lastPay: [''],
      verticalRangeOfPay: [''],
      relation: ['1'],
      name: ['B C Shah'],
      married: ['2'],
      dob: new Date('3/2/1989'),
      mjrMnr: ['1'],
      disability: ['1'],
      disabilityType: ['1'],
      guardianName: ['A B Patel'],
      isFP: ['1'],
      isNominee: ['1'],
      nomineePercent: ['5%'],
      isFp: ['']
    });
  }

}
