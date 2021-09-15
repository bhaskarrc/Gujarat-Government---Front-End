
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ListValue, DispatchLevel, DispatchLevelTracker } from 'src/app/model/treasury-bill';
import { TreasuryBillDirectives } from 'src/app/common/directive/treasury-bill';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dispatch-level-tracker',
  templateUrl: './dispatch-level-tracker.component.html',
  styleUrls: ['./dispatch-level-tracker.component.css']
})
export class DispatchLevelTrackerComponent implements OnInit {
  // Date
  todayDate = Date.now();
  initiatiomdate = new Date((new Date()));
  maxDate = new Date();
  // Variable
  public toggleButton: boolean = false;
  isRelease = false;
  iswithdraw = false;
  // Form Group
  dispatchForm: FormGroup;
  // Form Control
  budgetDescCtrl: FormControl = new FormControl();
  headCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  billCtrl: FormControl = new FormControl();
  // Lists
  budgetDesc_list: any = [
    { value: '1', viewValue: 'HLT-117 Rural family Planning Welfare Sub-Centres' },
    { value: '2', viewValue: 'EDN-68 Samagra Shiksha Abhiyan' },
    { value: '3', viewValue: 'Maintanance Grant for Primary Education' },

  ];


  head_list: ListValue[] = [
    { value: '1', viewValue: '040:2211:00:101:01' },
    { value: '2', viewValue: '013:2801:80:190:04' },
    { value: '3', viewValue: '096:2202:01:796:38' },
    { value: '4', viewValue: '009:2202:01:106:06' },

  ];


  district_list: ListValue[] = [
    { value: '1', viewValue: 'Ahmedabad' },
    { value: '2', viewValue: 'Mehsana' },
    { value: '3', viewValue: 'Gandhinagar' },
    { value: '4', viewValue: 'Banaskantha' },

  ];

  bill_list: ListValue[] = [

    { value: '1', viewValue: 'GTR-30 - Pay Bill' },
    { value: '2', viewValue: 'GTR-45 - TA Bill' },
    { value: '3', viewValue: 'GTR-40 - Grant In Bill' },
    { value: '4', viewValue: 'GTR-12 - Advance Bill' }


  ];
  selection = new SelectionModel<any>(true, []);
  Element_Data: DispatchLevel[] = [
    {
      district: 'Ahmedabad',
      name: 'District Treasury Office, Ahmedabad',
      tokenNo: '10',
      refNo: '-',
      ddo: '478',
      cardex: '828',
      office: 'Mamlatdar Office, Ahmedabad',
      bType: 'TA Bill - GTR35',
      indDate: '01-Jun-2020 12:00 AM',
      majorHead: '2055',
      grossAmt: '1000000.00',
      netAmt: '1000000.00',
      payMode: 'Cheque',
      wStatus: 'Auditor',
      lying: '-',
      status: 'Pending',
      headStr: '013:2801:80:190:04',
      headDesc: 'HLT-117 Rural family Planning Welfare Sub-Centres'
    },

    {
      district: 'Gandhinagar',
      name: 'District Treasury Office, Gandhinagar',
      tokenNo: '101',
      refNo: '-',
      ddo: '512',
      cardex: '232',
      office: 'Civil Hospital, Gandhinagar',
      bType: 'TA Bill - GTR35',
      indDate: '02-Jun-2020 11:00 AM',
      majorHead: '2056',
      grossAmt: '20435400.00',
      netAmt: '20435400.00',
      payMode: 'Cheque',
      wStatus: 'Cheque Printer',
      lying: '-',
      status: 'Pending',
      headStr: '096:2202:01:796:38',
      headDesc: 'EDN-68 Samagra Shiksha Abhiyan'
    },


    {
      district: 'Mehsana',
      name: 'District Treasury Office, Mehsana',
      tokenNo: '192',
      refNo: '-',
      ddo: '376',
      cardex: '133',
      office: 'District Education Office, Mehsana',
      bType: 'TA Bill - GTR35',
      indDate: '20-May-2020 01:00 PM',
      majorHead: '2057',
      grossAmt: '20435400.00',
      netAmt: '20435400.00',
      payMode: 'E-Payment',
      wStatus: 'Dispatch',
      lying: '-',
      status: 'Pending',
      headStr: '009:2202:01:106:06',
      headDesc: 'Maintanance Grant for Primary Education'
    },

    {
      district: 'Banaskantha',
      name: 'Sub Treasury Office, Deesha',
      tokenNo: '223',
      refNo: '-',
      ddo: '276',
      cardex: '231',
      office: 'Prant Office, Deesa, Banaskantha',
      bType: 'TA Bill - GTR35',
      indDate: '05-Jun-2020 02:00 PM',
      majorHead: '2224',
      grossAmt: '35634000.00',
      netAmt: '35632000.00',
      payMode: 'E-Payment',
      wStatus: 'Dispatch',
      lying: '-',
      status: 'Pending',
      headStr: '040:2211:00:101:01',
      headDesc: 'EDN-68 Samagra Shiksha Abhiyan'
    },

    {
      district: 'Gandhinagar',
      name: 'Sub Treasury Office, Kalol',
      tokenNo: '223',
      refNo: '-',
      ddo: '265',
      cardex: '332',
      office: 'Taluka Panchayat, Kalol, Gandhinagar',
      bType: 'Grant In Aid - GTR35',
      indDate: '06-Jun-2020 03:00 PM',
      majorHead: '2225',
      grossAmt: '340325000.00',
      netAmt: '0.00',
      payMode: 'Cheuqe',
      wStatus: 'Custodian',
      lying: '-',
      status: 'Pending',
      headStr: '040:2211:00:101:01',
      headDesc: 'HLT-117 Rural family Planning Welfare Sub-Centres'
    }


  ];
  Element_Data1: DispatchLevelTracker[] = [
    {
      district: 'Ahmedabad',
      name: 'District Treasury Office, Ahmedabad',
      tokenNo: '10',
      refNo: '-',
      ddo: '478',
      cardex: '828',
      office: 'Mamlatdar Office, Ahmedabad',
      bType: 'TA Bill - GTR35',
      indDate: '01-Jun-2020 05:00 PM',
      majorHead: '2055',
      grossAmt: '1000000.00',
      netAmt: '1000000.00',
      payMode: 'Cheque',
      wStatus: 'Auditor',
      lying: '-',
      headStr: '013:2801:80:190:04',
      headDesc: 'HLT-117 Rural family Planning Welfare Sub-Centres',
      rDate: '05-Feb-2020'
    },

    {
      district: 'Gandhinagar',
      name: 'District Treasury Office, Gandhinagar',
      tokenNo: '101',
      refNo: '-',
      ddo: '512',
      cardex: '232',
      office: 'Civil Hospital, Gandhinagar',
      bType: 'TA Bill - GTR35',
      indDate: '02-Jun-2020 05:00 PM',
      majorHead: '2056',
      grossAmt: '20435400.00',
      netAmt: '20435400.00',
      payMode: 'Cheque',
      wStatus: 'Cheque Printer',
      lying: '-',
      headStr: '096:2202:01:796:38',
      headDesc: 'EDN-68 Samagra Shiksha Abhiyan',
      rDate: '05-Feb-2020'
    },


    {
      district: 'Mehsana',
      name: 'District Treasury Office, Mehsana',
      tokenNo: '192',
      refNo: '-',
      ddo: '376',
      cardex: '133',
      office: 'District Education Office, Mehsana',
      bType: 'TA Bill - GTR35',
      indDate: '20-May-2020 08:00 PM',
      majorHead: '2057',
      grossAmt: '20435400.00',
      netAmt: '20435400.00',
      payMode: 'E-Payment',
      wStatus: 'Dispatch',
      lying: '-',
      headStr: '009:2202:01:106:06',
      headDesc: 'Maintanance Grant for Primary Education',
      rDate: '05-Feb-2020'
    },

    {
      district: 'Banaskantha',
      name: 'Sub Treasury Office, Deesha',
      tokenNo: '223',
      refNo: '-',
      ddo: '276',
      cardex: '231',
      office: 'Prant Office, Deesa, Banaskantha',
      bType: 'TA Bill - GTR35',
      indDate: '05-Jun-2020 05:00 PM',
      majorHead: '2224',
      grossAmt: '35634000.00',
      netAmt: '35632000.00',
      payMode: 'E-Payment',
      wStatus: 'Dispatch',
      lying: '-',
      headStr: '040:2211:00:101:01',
      headDesc: 'EDN-68 Samagra Shiksha Abhiyan',
      rDate: '05-Feb-2020'
    },

    {
      district: 'Gandhinagar',
      name: 'Sub Treasury Office, Kalol',
      tokenNo: '223',
      refNo: '-',
      ddo: '265',
      cardex: '332',
      office: 'Taluka Panchayat, Kalol, Gandhinagar',
      bType: 'Grant In Aid - GTR35',
      indDate: '06-Jun-2020 07:00 PM',
      majorHead: '2225',
      grossAmt: '340325000.00',
      netAmt: '0.00',
      payMode: 'Cheuqe',
      wStatus: 'Custodian',
      lying: '-',
      headStr: '040:2211:00:101:01',
      headDesc: 'HLT-117 Rural family Planning Welfare Sub-Centres',
      rDate: '05-Feb-2020'
    }


  ];
  // Table Sourece
  dataSource = new MatTableDataSource<any>(this.Element_Data);
  displayedColumns: any[] = ['checkBox', 'srNo', 'district', 'name', 'tokenNo', 'refNo', 'ddo', 'cardex',
    'office', 'bType', 'indDate', 'majorHead', 'headStr', 'headDesc', 'grossAmt', 'netAmt', 'payMode', 'wStatus', 'lying'];

  dataSource1 = new MatTableDataSource<any>(this.Element_Data1);
  displayedColumns1: any[] = ['checkBox', 'srNo', 'district', 'name', 'tokenNo', 'refNo', 'ddo', 'cardex',
    'office', 'bType', 'indDate', 'majorHead', 'headStr', 'headDesc', 'rDate', 'grossAmt', 'netAmt', 'payMode', 'wStatus', 'lying'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }
  directiveObject = new TreasuryBillDirectives(this.router, this.dialog);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dispatchForm = this.fb.group({
      branchCode: [''],
      amount: [''],
      challanNo: [''],
      treasuryCode: [''],

      district: [''],
      ddo: [''],
      cardex: [''],
      office: [''],
      billType: [''],
      inwardDate: [''],
      workflowLevel: [''],
      budgetDesc: [''],
      head: [''],
    });
  }
  clearForm() {
    this.dispatchForm.reset();
  }

  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  pending() {
    this.isRelease = true;
  }
  withdraw() {
    this.iswithdraw = true;
  }

  enabledata() {

    if (this.toggleButton == true) {
      this.toggleButton = false;
    }
    else {
      this.toggleButton = true;
    }
  }
  // CHeck Box


}

