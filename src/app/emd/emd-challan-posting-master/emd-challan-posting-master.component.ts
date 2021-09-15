
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { emdMessage } from 'src/app/common/error-message/common-message.constants';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { EmdDirectives } from 'src/app/common/directive/emd-directive';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { EmdChallanPostingMaster } from 'src/app/model/emd';
// Display Element Data
const ELEMENT_DATA: EmdChallanPostingMaster[] = [
  {
    emdCode: 'TD',
    challan: '50',
    amt: '10000.00'
  },
  {
    emdCode: 'RD',
    challan: '40',
    amt: '40000.00'
  },
  {
    emdCode: 'SD',
    challan: '30',
    amt: '30000.00'
  },
  {
    emdCode: 'WDPB',
    challan: '10',
    amt: '1000.00'
  },
];

@Component({
  selector: 'app-emd-challan-posting-master',
  templateUrl: './emd-challan-posting-master.component.html',
  styleUrls: ['./emd-challan-posting-master.component.css']
})
export class EmdChallanPostingMasterComponent implements OnInit {
  // variables
  doneHeader: Boolean = false;
  checked = true;
  checked1 = false;
  isSubmitted = false;
  isSelectedblank = true;
  isSelected = false;
  isSelected1 = false;
  isSelected2 = false;
  isSelected3 = false;
  isSelected4 = false;
  isSelected5 = false;
  isSelectedRD = false;
  isSelectedWDPB = false;
  checkedVal: boolean;
  checkedVal1: number;
  // dates
  initiatiomdate = new Date();
  maxDate = new Date();
  date = new Date();
  // Display Columns
  displayedBrowseColumns = ['srno', 'emdCode', 'challan', 'amt'];
  // Table Source
  dataSourceBrowse = new MatTableDataSource(ELEMENT_DATA);
  // FormGroup
  emdChallanMasterForm: FormGroup;
  // FormControl
  codeTypeCtrl: FormControl = new FormControl();
  typeCtrl: FormControl = new FormControl();
  subLocationTypeCtrl: FormControl = new FormControl();
  subLocationTypeCtrl1: FormControl = new FormControl();
  departmentTypeCtrl: FormControl = new FormControl();
  errorMessages = emdMessage;

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
  directiveObject = new EmdDirectives(this.router, this.dialog);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.dataSourceBrowse.paginator = this.paginator;
    this.dataSourceBrowse.sort = this.sort;
    this.emdChallanMasterForm = this.fb.group({
      // FormGroup Fields
      subTLocation: [''],
      subTLocation1: [''],
      type: [''],
      entryDate: [''],
      code: [''],
      codeDesc1: [''],
      codeDescription: ['Tenancy Deposit'],
      codeDescription1: ['Revenue Deposit'],
      codeDescription2: ['Security Deposit'],
      codeDescription3: ['Work Done Public Body'],


      mHead: [''],
      mDecscription: [''],
      majorHead: ['8443'],
      majorHeadDecscription: ['Civil Deposits(Not Bearing Interest)'],
      majorHead1: ['8443'],
      majorHeadDecscription1: ['Civil Deposits(Not Bearing Interest)'],
      majorHead2: ['8443'],
      majorHeadDecscription2: ['Civil Deposits(Not Bearing Interest)'],
      majorHead3: ['8443'],
      majorHeadDecscription3: ['Work Done Public Body'],


      sMajorHead: [''],
      sMajorHeadDecscription: [''],
      subMajorHead: ['00'],
      subMajorHeadDecscription: ['00-Tenancy Deposit'],
      subMajorHead1: ['00'],
      subMajorHeadDecscription1: ['00-Revenue Deposit'],
      subMajorHead2: ['00'],
      subMajorHeadDecscription2: ['00-Security Deposit'],
      subMajorHead3: ['00'],
      subMajorHeadDecscription3: ['00-Work Done Public Body'],

      minHead: [''],
      minHeadDecscription: [''],
      minorHead: ['101'],
      minorHeadDecscription: ['101-Tenancy Deposit'],
      minorHead1: ['101'],
      minorHeadDecscription1: ['101-Revenue Deposit'],
      minorHead2: ['103'],
      minorHeadDecscription2: ['103-Security Deposit'],
      minorHead3: ['117'],
      minorHeadDecscription3: ['117-Work Done Public Body'],

      sbHead: [''],
      sbHeadDecscription: [''],
      subHead: ['01'],
      subHeadDecscription: ['01-Tenancy Deposit'],
      subHead1: ['02'],
      subHeadDecscription1: ['02-Revenue Deposit'],
      subHead2: ['03'],
      subHeadDecscription2: ['03-Security Deposit'],
      subHead3: ['01'],
      subHeadDecscription3: ['01-Work Done Public Body'],


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

      ddo: [''],
      cardex: [''],
      office: [''],
    });
  }

  // selects bill
  selectBill(bill) {
    if (bill === 1) {
      this.isSelected1 = false;
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;

      this.isSelected = true;
      this.isSelectedRD = false;
      this.isSelectedWDPB = false;
      this.isSelectedblank = false;

    } else if (bill === 2) {
      this.isSelected1 = true;
      this.isSelected2 = true;
      this.isSelected3 = true;
      this.isSelected4 = true;
      this.isSelected5 = true;
      this.isSelected = false;
      this.isSelectedRD = false;
      this.isSelectedWDPB = false;


    } else if (bill === 3) {
      this.isSelectedRD = true;
      this.isSelected1 = false;
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;
      this.isSelected = false;
      this.isSelectedWDPB = false;

    } else if (bill === 4) {
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

  // Sub Treasury Office checkbox
  ObjectionRemarks() {
    if (this.checkedVal === true) {

      this.checked = true;
      this.checked1 = false;
    } else {
      this.checked = false;
      this.checked1 = true;
    }
  }

}




