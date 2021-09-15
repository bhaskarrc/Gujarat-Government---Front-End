
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-all-posted-challan-view',
  templateUrl: './all-posted-challan-view.component.html',
  styleUrls: ['./all-posted-challan-view.component.css']
})
export class AllPostedChallanViewComponent implements OnInit {
  // variables
  checkedVal = false;
  initiatiomdate = new Date();

  // dates
  maxDate = new Date();
  date = new Date();

  // FormGroup
  challanPostingViewForm: FormGroup;
  // FormControl
  codeTypeCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  subLocationTypeCtrl: FormControl = new FormControl();
  subLocationTypeCtrl1: FormControl = new FormControl();
  departmentTypeCtrl: FormControl = new FormControl();
  // List values
  codeType_list: ListValue[] = [

    { value: '1', viewValue: 'RD' },

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


  locationType1_list: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Bhuj' },
    { value: '2', viewValue: 'Sub Treasury Office, Anjar ,Bhuj' },
    { value: '3', viewValue: 'Sub Treasury Office, Rahpar ,Bhuj' },
    { value: '4', viewValue: 'Sub Treasury Office, Mundra ,Bhuj' },
    { value: '5', viewValue: 'Sub Treasury Office, Nalia ,Bhuj' },
  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.challanPostingViewForm = this.fb.group({
      // FormGroup Fields
      subTLocation: [''],
      subTLocation1: ['1'],
      type: ['1'],
      entryDate: [''],
      code: ['1'],

      codeDescription: ['Revenue Tenancy Deposits'],
      majorHead: ['8443'],
      majorHeadDecscription: ['Civil Deposits (Non Bearing Interest)'],

      subMajorHead: ['00'],
      subMajorHeadDecscription: [''],
      minorHead: ['101'],
      minorHeadDecscription: ['Revenue Deposit'],
      subHead: ['01'],
      subHeadDecscription: ['Revenue Tenancy Deposit'],
      srNo: ['192000001 '],
      partyname: ['Mr. A. B.Sharma'],
      department: ['1'],
      amount: ['100.00'],
      amountInWord: ['One Hundred Only'],
      lapseDate: ['01/04/2023'],
      narration: ['Remark 1'],
      totalChallans: ['0'],
      tamount: ['0.00'],
      checkedVal: [''],
      checked: [''],

      ddo: ['501'],
      cardex: ['444'],
      office: ['Mamlatdar Office, Gandhinagar'],

    });
  }

}

