
import { MatDialog } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { emdMessage } from 'src/app/common/error-message/common-message.constants';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
@Component({
  selector: 'app-posted-challan-list-update',
  templateUrl: './posted-challan-list-update.component.html',
  styleUrls: ['./posted-challan-list-update.component.css']
})
export class PostedChallanListUpdateComponent implements OnInit {
  // variables
  doneHeader: Boolean = false;
  checked = true;
  checked1 = false;
  isSubmitted = false;
  isSelected = true;
  isSelected1 = false;
  isSelected2 = false;
  isSelected3 = false;
  isSelected4 = false;
  isSelected5 = false;
  isSelectedRD = false;
  isSelectedWDPB = false;
  checkedVal: boolean;
  checkedVal1: number;
  errorMessages = emdMessage;
  directiveObject = new EmdDirectives(this.router, this.dialog);
  // FormGroup
  postedChallanListForm: FormGroup;

  initiatiomdate = new Date();

  // FormControl
  codeTypeCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  subLocationTypeCtrl: FormControl = new FormControl();
  subLocationTypeCtrl1: FormControl = new FormControl();
  departmentTypeCtrl: FormControl = new FormControl();

  // dates
  maxDate = new Date();
  date = new Date();
  // List values
  codeType_list: ListValue[] = [

    { value: '1', viewValue: 'TD' },
    { value: '2', viewValue: 'RD' },
    { value: '3', viewValue: 'SD' },
    { value: '4', viewValue: 'WDPB' },

  ];
  departmentType_list: ListValue[] = [
    { value: '1', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '2', viewValue: 'Education Department' },
    { value: '3', viewValue: 'Energy & Petrochemicals Department' },
    { value: '4', viewValue: 'Finance Department' },
    { value: '5', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '6', viewValue: 'Forest & Environment Department' },
    { value: '7', viewValue: 'General Administration Department' },
    { value: '8', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '9', viewValue: 'Health & Family Welfare Department' },
    { value: '10', viewValue: 'Home Department' },
    { value: '11', viewValue: 'Industries & Mines Department' },
    { value: '12', viewValue: 'Information & Broadcasting Department' },
    { value: '13', viewValue: 'Labour & Employment Department' },
    { value: '14', viewValue: 'Legal Department' },
    { value: '15', viewValue: 'Legislative & Parliamentary Affairs Department' },
    { value: '16', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department' },
    { value: '17', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '18', viewValue: 'Ports & Transport Department' },
    { value: '19', viewValue: 'Revenue Department' },
    { value: '20', viewValue: 'Roads & Buildings Department' },
    { value: '21', viewValue: 'Science & Technology Department' },
    { value: '22', viewValue: 'Social Justice & Empowerment Department' },
    { value: '23', viewValue: 'Tribal Development Department' },
    { value: '24', viewValue: 'Sports, Youth & Cultural Activities Department' },
    { value: '25', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '26', viewValue: 'Women & Child Development Department' },
    { value: '27', viewValue: 'Climate Change Department' },

  ];

  type_list: ListValue[] = [
    { value: '1', viewValue: 'Cash' },
    { value: '1', viewValue: 'Other' },
  ];
  locationType_list: ListValue[] = [

    { value: '1', viewValue: 'District Treasury Office,Bhuj' },
  ];

  locationType1_list: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Bhuj' },
    { value: '2', viewValue: 'Sub Treasury Office, Anjar ,Bhuj' },
    { value: '3', viewValue: 'Sub Treasury Office, Rahpar ,Bhuj' },
    { value: '4', viewValue: 'Sub Treasury Office, Mundra ,Bhuj' },
    { value: '5', viewValue: 'Sub Treasury Office, Nalia ,Bhuj' },
  ];

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }


  ngOnInit() {
    this.postedChallanListForm = this.fb.group({
      // FormGroup Fields
      subTLocation: ['1'],
      subTLocation1: [''],
      type: ['1'],
      entryDate: [''],
      code: ['1'],
      codeDescription: [''],
      codeDescription1: ['Revenue Deposit'],
      codeDescription2: ['Security Deposit'],
      codeDescription3: ['Work Done Public Body'],


      majorHead: [''],
      majorHeadDecscription: [''],
      majorHead1: ['8443'],
      majorHeadDecscription1: ['Civil Deposits'],
      majorHead2: ['8443'],
      majorHeadDecscription2: ['Civil Deposits'],
      majorHead3: ['8443'],
      majorHeadDecscription3: ['Civil Deposits'],



      subMajorHead: [''],
      subMajorHeadDecscription: [''],
      subMajorHead1: ['00'],
      subMajorHeadDecscription1: ['-'],
      subMajorHead2: ['00'],
      subMajorHeadDecscription2: ['-'],
      subMajorHead3: ['00'],
      subMajorHeadDecscription3: ['-'],


      minorHead: [''],
      minorHeadDecscription: [''],
      minorHead1: ['101'],
      minorHeadDecscription1: ['Revenue Deposits'],
      minorHead2: ['103'],
      minorHeadDecscription2: ['Security Deposits'],
      minorHead3: ['117'],
      minorHeadDecscription3: ['Deposit for works done for public bodies or private individuals'],

      subHead: [''],
      subHeadDecscription: [''],
      subHead1: ['02'],
      subHeadDecscription1: ['Other Revenue Deposits'],
      subHead2: ['00'],
      subHeadDecscription2: ['Security Deposits'],
      subHead3: ['01'],
      subHeadDecscription3: ['Deposit for works done for public bodies or private individuals'],


      srNo: ['10000001'],
      partyname: [''],
      department: [''],
      amount: [''],
      amountInWord: [''],
      lapseDate: ['21-Apr-2023'],
      narration: [''],
      totalChallans: [''],
      tamount: [''],
      checkedVal: [''],
      checked: [''],

      billType: ['', Validators.required],

      ddo: ['501'],
      cardex: ['444'],
      office: ['Mamlatdar Office, Gandhinagar'],


    });
  }

  // selects bill type
  selectBill(bill) {
    if (bill === '1') {
      this.isSelected1 = false;
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;

      this.isSelected = true;
      this.isSelectedRD = false;
      this.isSelectedWDPB = false;

    } else if (bill === '2') {
      this.isSelected1 = true;
      this.isSelected2 = true;
      this.isSelected3 = true;
      this.isSelected4 = true;
      this.isSelected5 = true;
      this.isSelected = false;
      this.isSelectedRD = false;
      this.isSelectedWDPB = false;

    } else if (bill === '3') {
      this.isSelectedRD = true;
      this.isSelected1 = false;
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;
      this.isSelected = false;
      this.isSelectedWDPB = false;
    } else if (bill === '4') {
      this.isSelectedWDPB = true;
      this.isSelectedRD = false;
      this.isSelected1 = false;
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;
      this.isSelected = false;
    }
  }

  // sets objection remarks values
  ObjectionRemarks() {
    if (this.checkedVal === true) {

      this.checked = true;
      this.checked1 = false;
    } else {
      this.checked = false;
      this.checked1 = true;
    }
  }

  reset() {
    this.checkedVal = true;
    this.ObjectionRemarks();
    this.selectBill('1');
    this.postedChallanListForm.patchValue({
      subTLocation: '1',
      subTLocation1: '',
      type: '1',
      entryDate: '',
      code: '1',
      codeDescription: 'Revenue Tenancy Deposits',
      codeDescription1: 'Revenue Deposit',
      codeDescription2: 'Security Deposit',
      codeDescription3: 'Work Done Public Body',


      majorHead: '8443',
      majorHeadDecscription: 'Civil Deposits',
      majorHead1: '8443',
      majorHeadDecscription1: 'Civil Deposits',
      majorHead2: '8443',
      majorHeadDecscription2: 'Civil Deposits',
      majorHead3: '8443',
      majorHeadDecscription3: 'Civil Deposits',



      subMajorHead: '00',
      subMajorHeadDecscription: '-',
      subMajorHead1: '00',
      subMajorHeadDecscription1: '-',
      subMajorHead2: '00',
      subMajorHeadDecscription2: '-',
      subMajorHead3: '00',
      subMajorHeadDecscription3: '-',


      minorHead: '101',
      minorHeadDecscription: 'Revenue Deposits',
      minorHead1: '101',
      minorHeadDecscription1: 'Revenue Deposits',
      minorHead2: '103',
      minorHeadDecscription2: 'Security Deposits',
      minorHead3: '117',
      minorHeadDecscription3: 'Deposit for works done for public bodies or private individuals',

      subHead: '01',
      subHeadDecscription: 'Revenue Tenancy Deposits',
      subHead1: '02',
      subHeadDecscription1: 'Other Revenue Deposits',
      subHead2: '00',
      subHeadDecscription2: 'Security Deposits',
      subHead3: '01',
      subHeadDecscription3: 'Deposit for works done for public bodies or private individuals',


      srNo: '10000001',
      partyname: '',
      department: '',
      amount: '',
      amountInWord: '',
      lapseDate: '21-Apr-2013',
      narration: '',
      totalChallans: '',
      tamount: '',
      checkedVal: '',
      checked: '',

      billType: '',

      ddo: '501',
      cardex: '444',
      office: 'Mamlatdar Office, Gandhinagar',


    });

  }
}
