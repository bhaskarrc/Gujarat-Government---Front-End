import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { contractMnageMessage } from 'src/app/common/error-message/common-message.constants';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';
import { Router } from '@angular/router';
import { WorflowDetailCMComponent } from '../worflow-detail-cm/worflow-detail-cm.component';
import { SelectionModel } from '@angular/cdk/collections';
import { DecimalPipe } from '@angular/common';
import { CommonListing } from 'src/app/model/common-listing';
import { DataService } from 'src/app/common/data.service';


// letter details interface
export interface Letterdetails {
  checkBox: Boolean;
  orderNo: string;
  orderDate: string;
  openingBalance: string;
  sanctionAmount: string;
  utilizedAmount: string;
  surrenderAmount: string;
  surrenderOrderNo: string;
  surrenderOrderDate: string;
  unspentAmount: string;
}

// voucher details interface
export interface VoucherDetails {
  voucherDate: Date;
  voucherNo: string;
  voucherAmount: string;
}



@Component({
  selector: 'app-utc',
  templateUrl: './utc.component.html',
  styleUrls: ['./utc.component.css']
})
export class UTCComponent implements OnInit {

  sancationAmountValue = null;
  totalUtilisedValue = null;
  unspendAmountValue = null;
  isSanction = false;
  isUtilized = false;
  sanctionOrderDetail = false;
  totalAmountValue = null;
  refNuber = 'Reference Number:';
  refNuberDate = 'Reference Date:';
  todayDate = Date.now();
  surrenderAmountValue = null;
  isRowChecked = false;
  newArray: any[] = [];
  selecteddata: any[] = [];
  indexValue: any[] = [];
  firstIndex = false;
  isError = false;
  changedVoucherAmount = null;
  tabDisable: Boolean = true;

  openingBalanceValue = 0;

  selection = new SelectionModel<any>(true, []);
  selectedTabIndex: number;
  selectedIndex: number;

  attachmentTypeList: CommonListing[] = [
    { value: '1', viewValue: 'Supporting Documents' },
    { value: '2', viewValue: 'Vouchers' }
  ];

  // sanction oeder no details columns
  displayedColumnltterdetails: string[] = [
    'checkBox',
    'orderNo',
    'orderDate',
    'openingBalance',
    'sanctionAmount',
    'utilizedAmount',
    'surrenderAmount',
    'surrenderOrderNo',
    'surrenderOrderDate',
    'unspentAmount'
  ];

  // voucher details column
  displayedColumnVoucherDetails: any[] = [
    'serialNo',
    'voucherDate',
    'voucherNo',
    'voucherAmount',
    'action'
  ];

  browseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];

  // attachment  columns
  displayedBrowseColumns = [
    'srNo',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'uploadedBy',
    'action'
  ];

  // sanction order details table data
  letter_details: Letterdetails[] = [
    {
      checkBox: false,
      orderNo: 'GAI/UD/2016-17/345',
      orderDate: '04/10/2017',
      openingBalance: '3000.0000',
      sanctionAmount: '10000.0000',
      utilizedAmount: '1000.0000',
      surrenderAmount: '5000.0000',
      surrenderOrderNo: 'GFD/SON/2016-17/123',
      surrenderOrderDate: '23-Apr-2017',
      unspentAmount: '7000.0000'

    },
    {
      checkBox: false,
      orderNo: 'BT/IN/GOG/FD/2018-19/5678',
      orderDate: '04/24/2018',
      openingBalance: '0.0000',
      sanctionAmount: '5000.0000',
      utilizedAmount: '1000.0000',
      surrenderAmount: '0.0000',
      surrenderOrderNo: '',
      surrenderOrderDate: '',
      unspentAmount: '4000.0000'

    },
    {
      checkBox: false,
      orderNo: 'FD/GOG/2019-20/8734',
      orderDate: '04/24/2019',
      openingBalance: '0.0000',
      sanctionAmount: '7000.0000',
      utilizedAmount: '0.0000',
      surrenderAmount: '0.0000',
      surrenderOrderNo: '',
      surrenderOrderDate: '',
      unspentAmount: '7000.0000'

    },
    {
      checkBox: false,
      orderNo: 'GAI/UD/2019-20/3455',
      orderDate: '04/10/2020',
      openingBalance: '0.0000',
      sanctionAmount: '6000.0000',
      utilizedAmount: '0.0000',
      surrenderAmount: '0.0000',
      surrenderOrderNo: '',
      surrenderOrderDate: '',
      unspentAmount: '6000.0000'

    },
  ];


  // voucher table details data
  voucherDetails: VoucherDetails[] = [
    {
      voucherDate: new Date('04/10/2017'),
      voucherNo: 'GAD/2019-20/1324',
      voucherAmount: '500.0000',
    },
    {
      voucherDate: new Date('04/24/2018'),
      voucherNo: 'GAD/2019-20/8764',
      voucherAmount: '500.0000',
    },
  ];

  // datasources
  dataSourceBrowse = new MatTableDataSource(this.browseData);
  datasorceLetterDetails = new MatTableDataSource(this.letter_details);
  voucherDetailsDataSource = new MatTableDataSource(this.voucherDetails);

  fileBrowseIndex: number;
  showAction: Boolean = true;
  show = false;
  subObjectId: Array<any> = [];
  cssList = false;
  nextYearAdjustAmountValue = 0;
  statemin = false;
  totalVoucherAmount = null;

  // form control
  deptCTRl: FormControl = new FormControl();
  stateCTRl: FormControl = new FormControl();
  attachmentTypeCtrl: FormControl = new FormControl();

  // form group
  utcForm: FormGroup;

  // error message
  errorMessages = contractMnageMessage;
  subHead_list: any[] = [
    {
      value: '1',
      viewValue: '00:Agricultural and Co-operation Department'
    },

    {
      value: '2',
      viewValue: '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '
    },
  ];


  demandList: any[] = [
    { value: '1', viewValue: '01' },
    { value: '2', viewValue: '02' },
    { value: '3', viewValue: '03' },
    { value: '4', viewValue: '04' },
    { value: '5', viewValue: '05' },
    { value: '6', viewValue: '06' },
    { value: '7', viewValue: '07' },
    { value: '8', viewValue: '08' },
    { value: '9', viewValue: '09' }
  ];

  majorHead_list: any[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
  ];

  subMajorHead_list: any[] = [
    {
      value: '1',
      viewValue: '00:Secretariat-Economic Services'
    },

    {
      value: '2',
      viewValue: '00:Capital Outlay on other General Economics Services'
    },

    {
      value: '3',
      viewValue: '00:Crop Husbandry'
    },

    {
      value: '4',
      viewValue: '00:Secretariat-Economic Services'
    },

    {
      value: '5',
      viewValue: '00::Capital Outlay on other General Economics Services'
    },

    {
      value: '6',
      viewValue: '01:Civil'
    },

    {
      value: '7',
      viewValue: '00:Stationery and Printing'
    },

    {
      value: '8',
      viewValue: '00::Co-operation'
    },
  ];


  minorHead_list: any[] = [
    {
      value: '1',
      viewValue: '090:Secretariat'
    },
    { value: '2', viewValue: '101:Niti Aayog' },
    { value: '800:Other Expenditure', viewValue: '800:Other Expenditure' },

    { value: '3', viewValue: '101:Direction And Administration' },
    { value: '4', viewValue: '102:Food grain Crops' },

    { value: '5', viewValue: '103:Seed' },
    { value: '6', viewValue: '800:Other Expenditure' },

    { value: '7', viewValue: '108:Contribution to Provident Funds' },
    { value: '8', viewValue: '001:Direction and Administration' },

    { value: '9', viewValue: '101:Purchase and Supply of Stationery Stores' },
    { value: '10', viewValue: '103:Government Presses' },

    { value: '11', viewValue: '105:Government Publications' },

    {
      value: '12',
      viewValue: '797:Transfer to Reserve fund and Deposite Account'
    },

    {
      value: '13',
      viewValue: '108:Assistance to other co-operatives'
    },
  ];

  detailHead_list: ListValue[] = [
    {
      value: '00:Agricultural and Co-operation Department',
      viewValue: '00:Agricultural and Co-operation Department'
    },
    {
      value: '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development',
      viewValue: '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development'
    },

    {
      value: '00:AGR-15 Information & Technology',
      viewValue: '00:AGR-15 Information & Technology'
    },

    {
      value: '00:Expenditure for Training',
      viewValue: '00:Expenditure for Training'
    },

    {
      value: '00:AGR-Renovation Of The Department',
      viewValue: '00:AGR-Renovation Of The Department'
    },

    {
      value: '00:Direcorate of Agriculture',
      viewValue: '00:Direcorate of Agriculture'
    },

    {
      value: '00:Intensive Agricultural District Programme',
      viewValue: '00:Intensive Agricultural District Programme'
    },

    {
      value: '00:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)',
      viewValue: '00:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
    },

    {
      value: '00:National Food Security Mission',
      viewValue: '00:National Food Security Mission'
    },

    {
      value: '00:AGR() Promoting to farmer for Post Harvesting & Management (value addition)',
      viewValue: '00:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
    },


    {
      value: '00:Multiplication and Distribution of various type of cotton',
      viewValue: '00:Multiplication and Distribution of various type of cotton'
    },


    {
      value: '00:Seed Testing Laboratory',
      viewValue: '00:Seed Testing Laboratory'
    },


    {
      value: '00:AGR 5 -Taluka Seed Multiplication Farms',
      viewValue: '00:AGR 5 -Taluka Seed Multiplication Farms'
    },


    {
      value: '00:Adj.Establishment of seed cell',
      viewValue: '00:Adj.Establishment of seed cell'
    },


    {
      value: '00:IND-51 Industries and Mines Department',
      viewValue: '00:IND-51 Industries and Mines Department'
    },


    {
      value: '00:IND-1 Planning Machinery in the Industries & Mines Department',
      viewValue: '00:IND-1 Planning Machinery in the Industries & Mines Department'
    },

    {
      value: '00:IND-1 Monitoring of Plan expenditure in Industries and Mines Department',
      viewValue: '00:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
    },

    {
      value: '00:IND-45 Evaluation of Schemes under the Industries and Mines Department',
      viewValue: '00:IND-45 Evaluation of Schemes under the Industries and Mines Department'
    },

    {
      value: '00:IND-44 Information Technology',
      viewValue: '00:IND-44 Information Technology'
    },

    {
      value: '00:OIN-17 Industries & Mines Department',
      viewValue: '00:OIN-17 Industries & Mines Department'
    },

    {
      value: '00:Contribution towards employees Provident Funds Scheme for Presses',
      viewValue: '00:Contribution towards employees Provident Funds Scheme for Presses'
    },

    {
      value: '00:IND-11 Directorate of Printing and Stationery',
      viewValue: '00:IND-11 Directorate of Printing and Stationery'
    },

    {
      value: '00:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies',
      viewValue: '00:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
    },

    {
      value: '00:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme',
      viewValue: '00:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
    },
  ];


  departmentName_list: any[] = [
    { value: '0', viewValue: 'Agriculture, Farmers Walfare and  Cooperation Department' },
    {
      value: '1',
      viewValue: 'Revenue Department'
    },
    {
      value: '2',
      viewValue: 'Panchayat,Rural Housing and Rural Development Department'
    },
    { value: '3', viewValue: 'Food, Civil Supplies and Consumer Affairs Department' },
    { value: '4', viewValue: 'Forest and Environment Department' },
    { value: '5', viewValue: 'Climate Change Department' },
    {
      value: '6',
      viewValue: 'Women and Child Development Department'
    },
    {
      value: '7',
      viewValue: 'Urban Development and Urban Housing Department'
    },
    { value: '8', viewValue: 'Health and Family Welfare Department' },
    { value: '9', viewValue: 'Roads And Buildings Department' },
  ];


  budgetEstimateType_list: any[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item Estimate' },
    { value: '3', viewValue: 'Item Continuous Estimate' },
    { value: '4', viewValue: 'New Work Estimate' },
    { value: '5', viewValue: 'Work in Progress' },
  ];

  item_list: any[] = [
    { value: '1', viewValue: 'Item 1' },
    { value: '2', viewValue: 'Item 2' },
  ];

  financialYearList: any[] = [
    { value: '1', viewValue: '2016-17' },
    { value: '2', viewValue: '2017-18' },
    { value: '3', viewValue: '2018-19' },
    { value: '4', viewValue: '2019-20' },
    { value: '5', viewValue: '2020-21' },
  ];
  hod_list: any[] = [];

  headOfDepartment_list: any[] = [
    { value: '0', department: '0', viewValue: 'ATMA Directorate & SAMETI' },
    { value: '1', department: '0', viewValue: 'Agriculture & Co-operation Department' },
    { value: '2', department: '0', viewValue: 'Directorate of Agriculture' },
    { value: '3', department: '0', viewValue: 'Director of Horticulture' },
    { value: '4', department: '0', viewValue: 'Directorate of Animal Husbandry' },
    { value: '5', department: '0', viewValue: 'Commissioner of Fisheries' },
    { value: '6', department: '0', viewValue: 'NA' },
    { value: '0', department: '1', viewValue: 'Revenue Department' },
    { value: '1', department: '1', viewValue: 'Collector Office Ahmedabad' },
    { value: '2', department: '1', viewValue: 'Collector Office Amreli' },
    { value: '3', department: '1', viewValue: 'Collector Office Gandhinagar' },
    { value: '4', department: '1', viewValue: 'Collector Office Arvalli' },
    { value: '5', department: '1', viewValue: 'Collector Office Bhavanagar' },
    { value: '6', department: '1', viewValue: 'Collector Office Banaskantha' },
    { value: '7', department: '1', viewValue: 'Collector Office Botad' },
    { value: '8', department: '1', viewValue: 'NA' },
    { value: '0', department: '2', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '1', department: '2', viewValue: 'Commissionerate of Rural Development Office' },
    { value: '2', department: '2', viewValue: 'Development Commissioner Office' },
    { value: '3', department: '2', viewValue: 'Egram Vishwagram Project' },
    { value: '4', department: '2', viewValue: 'Ahemdabad District Panchayat' },
    { value: '5', department: '2', viewValue: 'Vadodara District Panchayat' },
    { value: '6', department: '2', viewValue: 'Gandhinagar District Panchayat' },
    { value: '7', department: '2', viewValue: 'Surat District Panchayat' },
    { value: '8', department: '2', viewValue: 'Rajkot District Panchayat' },
    { value: '9', department: '2', viewValue: 'NA' },
    { value: '0', department: '3', viewValue: 'Food, Civil Supplies & Consumer Affairs Dept.' },
    { value: '1', department: '3', viewValue: 'Director of Food and Civil Supplies' },
    { value: '2', department: '3', viewValue: 'Controller, Legal Metrology & Director, Consumer Affairs' },
    { value: '3', department: '3', viewValue: 'State Consumer Disputes Redressal Commission' },
    { value: '4', department: '3', viewValue: 'Gujarat State Civil Supplies Corporation Ltd.' },
    { value: '5', department: '3', viewValue: 'Food Controller, Ahmedabad' },
    { value: '6', department: '3', viewValue: 'NA' },
    { value: '0', department: '4', viewValue: 'Forest & Environment Department' },
    { value: '1', department: '4', viewValue: 'Principal Chief Conservator of Forest & Head of the Forest Force (HoFF)' },
    { value: '2', department: '4', viewValue: 'Gujarat Pollution Control Board' },
    { value: '3', department: '4', viewValue: 'Gujarat Ecology Commission' },
    { value: '4', department: '4', viewValue: 'GEER Ecological Education and Research Foundation' },
    { value: '5', department: '4', viewValue: 'State Environment Impact Assessment Authority' },
    { value: '6', department: '4', viewValue: 'Gujarat State Lion Conservation Society' },
    { value: '7', department: '4', viewValue: 'Gujarat Environment Management Institute (GEMI)' },
    { value: '8', department: '4', viewValue: 'NA' },
    { value: '0', department: '5', viewValue: 'Climate Change Department' },
    { value: '1', department: '5', viewValue: 'Gujarat Energy Developement Agency' },
    { value: '2', department: '5', viewValue: 'NA' },
    { value: '0', department: '6', viewValue: 'Women & Child Development Department' },
    { value: '1', department: '6', viewValue: 'NA' },
    { value: '0', department: '7', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '1', department: '7', viewValue: 'Ahmedabad Municipal Corporation' },
    { value: '2', department: '7', viewValue: 'Vadodara Municipal Corporation' },
    { value: '3', department: '7', viewValue: 'Bhavnagar Municipal Corporation' },
    { value: '4', department: '7', viewValue: 'Junagadh Municipal Corporation' },
    { value: '5', department: '7', viewValue: 'Gandhinagar Municipal Corporation' },
    { value: '6', department: '7', viewValue: 'Jamnagar Municipal Corporation' },
    { value: '7', department: '7', viewValue: 'Surat Muncipal Corporation' },
    { value: '8', department: '7', viewValue: 'NA' },
    { value: '0', department: '8', viewValue: 'Health & Family Welfare Department' },
    { value: '1', department: '8', viewValue: 'Commissioner of Health' },
    { value: '2', department: '8', viewValue: 'National Health Mission' },
    { value: '3', department: '8', viewValue: 'Indian Systems of Medicine & Homeopathy (AYUSH)' },
    { value: '4', department: '8', viewValue: 'Gujarat Medical Services Corporation Limited' },
    { value: '5', department: '8', viewValue: 'NA' },
    { value: '0', department: '9', viewValue: 'Road & Building Department' },
    { value: '1', department: '9', viewValue: 'NA' },


  ];

  attachment = [
    {
      fileName: 'Attachment 1',
      fileType: 'image',
      filePath: '../../../assets/sample-attachments/image-sample.jpg',
      imgStatus: false
    },
    {
      fileName: 'Attachment 2',
      fileType: 'pdf',
      filePath: '../../../assets/sample-attachments/pdf-sample.pdf',
      pdfStatus: false
    }
  ];

  grantType_list: any[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
  ];

  objectHead_list: any[] = [
    { value: '3100', viewValue: '3100:Grants-in-Aid General' },
    { value: '3131', viewValue: '3131:Grants-in-Aid General to Panchayats Pertaining to Pay and Allowances' },
    { value: '3132', viewValue: '3132:Grants-in-Aid General to Panchayats Pertaining to Others' },
    { value: '3133', viewValue: '3133:Grant-in-Aid General to Local Bodies' },
    { value: '3135', viewValue: '3135 Grant-In-Aid General to Others' },
    { value: '3200', viewValue: '3200:Contributions' },
    { value: '3241', viewValue: '3241: Contributions to Panchayats' },
    { value: '3243', viewValue: '3243:Contributions to Local Bodies' },
    { value: '3245', viewValue: '3245:Contributions to Others' },
    { value: '3300', viewValue: '3300:Contributions' },
    { value: '3351', viewValue: '3351: Contributions to Panchayats' },
    { value: '3353', viewValue: '3353:Contributions to Local Bodies' },
    { value: '3355', viewValue: '3355:Contributions to Others' },
    { value: '3100', viewValue: '3400:Scholarship/Stipend' },
    { value: '3500', viewValue: '3500:Grant for Creation of Capital Assets' },
    { value: '3561', viewValue: '3561:Grant for Creation of Capital Assets to Panchayats' },
    { value: '3563', viewValue: '3563:Grant for Creation of Capital Assets to Local Bodies' },
    { value: '3565', viewValue: '3565:Grant for Creation of Capital Assets to Others' },

  ];


  departmentCodeCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();
  budgetEstimateTypeCtrl: FormControl = new FormControl();
  itemCtrl: FormControl = new FormControl();
  financialYearCtrl: FormControl = new FormControl();
  headOfDepartmentCtrl: FormControl = new FormControl();
  grantTypeCtrl: FormControl = new FormControl();
  objectHeadCtrl: FormControl = new FormControl();

  selectedAll: Boolean = false;
  sanctionOrderNo = '';
  orderDate;
  isView = false;
  isValid = false;
  selectedIndexEdit: number;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private el: ElementRef,
    public dialog: MatDialog,
    private decimalPipe: DecimalPipe,
    private dataService: DataService
  ) {
    if (dataService.getOption()['utc-list'] === 'isView') {
      this.isView = true;
      dataService.setOption('utc-list', '');
    } else {
      this.isView = false;
    }
  }

  ngOnInit() {

    if (this.isView) {
      this.utcForm = this.fb.group({
        financialYear: [{ value: '1', disabled: true }],
        departmentCode: [{ value: '1', disabled: true }],
        demand: [{ value: '1', disabled: true }],
        majorHead: [{ value: '1', disabled: true }],
        subMajorHead: [{ value: '1', disabled: true }],
        minorHead: [{ value: '1', disabled: true }],
        subHead: [{ value: '1', disabled: true }],
        detailHead: [{ value: '00:Agricultural and Co-operation Department', disabled: true }],
        schemeType: [{ value: '2', disabled: true }],
        budgetEstimateType: [{ value: this.headOfDepartment_list[1].value, disabled: true }],
        item: [{ value: '1', disabled: true }],
        headOfDepartment: [{ value: 'ATMA Directorate & SAMETI', disabled: true }],
        implementationInstitute: [{ value: 'Collectrate Office, Ahmedabad', disabled: true }],
        grantType: [{ value: '1', disabled: true }],
        achievement: [{ value: 'abc', disabled: true }],
        physicalTarget: [{ value: 'abc', disabled: true }],
        objectHead: [{ value: '3100', disabled: true }]
      });
      this.sanctionOrderDetail = true;
      this.datasorceLetterDetails.data[1].checkBox = true;

      // to include fist and second row by default
      this.datasorceLetterDetails.data.forEach(item => {
        if (item.surrenderOrderNo === 'GFD/SON/2016-17/123') {
          this.selection.select(item);
        }
      });

      for (let i = 0; i < this.datasorceLetterDetails.data.length; i++) {
        if (this.datasorceLetterDetails.data[i].surrenderOrderNo === 'GFD/SON/2016-17/123') {
          this.selectedIndexEdit = i;
        }
      }

      const amount =
        Number(this.datasorceLetterDetails.data[this.selectedIndexEdit].sanctionAmount) +
        Number(this.datasorceLetterDetails.data[this.selectedIndexEdit].openingBalance);
      this.sancationAmountValue = this.datasorceLetterDetails.data[this.selectedIndexEdit].sanctionAmount;
      this.totalAmountValue = amount.toFixed(4);

      this.totalUtilisedValue = this.datasorceLetterDetails.data[this.selectedIndexEdit].utilizedAmount;
      this.unspendAmountValue = this.datasorceLetterDetails.data[this.selectedIndexEdit].unspentAmount;

    } else {
      this.utcForm = this.fb.group({
        financialYear: ['', Validators.required],
        departmentCode: ['', Validators.required],
        demand: [''],
        majorHead: [''],
        subMajorHead: [''],
        minorHead: [''],
        subHead: [''],
        detailHead: [''],
        schemeType: ['2'],
        budgetEstimateType: [''],
        item: [''],
        state: [''],
        headOfDepartment: [''],
        implementationInstitute: [''],
        grantType: ['1'],
        achievement: [''],
        physicalTarget: [''],
        objectHead: ['']
      });
    }

  }
  utcFormData() { }
  goToDashboard() {
  }


  // on clicking listing button redirects to utc-list page
  gotoListing() {
    this.router.navigate(['./contract-management/utc-list']);
  }

  // opens workflow details dialog box
  workflowDetails(): void {

    const dialogRef = this.dialog.open(WorflowDetailCMComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  generateUtc() {
    this.router.navigate(['contract-management/utc-certificate']);
  }

  // get tab index
  getTabIndex(tabIndex) {
    this.selectedTabIndex = tabIndex;
    const temp = this.selectedTabIndex;
  }

  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
        }
      } else if (data.fileType === 'pdf') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
      }
      if (this.show === false) {
        this.showAction = true;
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
  }


  // on file selection
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  // open file selector
  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  // add row
  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          dropDown: undefined,
          name: undefined,
          file: undefined
        });
        this.dataSourceBrowse.data = p_data;
      } else {
      }
    }
  }

  // delete row
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  // add row in vouher details
  add() {
    const p_data = this.voucherDetailsDataSource.data;
    p_data.push({
      voucherDate: new Date(''),
      voucherNo: '',
      voucherAmount: '',
    });
    this.voucherDetailsDataSource.data = p_data;
  }

  // delete row in voucher details
  delete(index) {
    this.voucherDetailsDataSource.data.splice(index, 1);
    this.voucherDetailsDataSource = new MatTableDataSource(this.voucherDetailsDataSource.data);
  }

  onBrowseSelectChange() { }

  surrenderOrderNoValue(event) {
  }

  // check is all row selected
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datasorceLetterDetails.data.length;
    return numSelected === numRows;
  }

  // toggles the checkboxes
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.datasorceLetterDetails.data.forEach(row => this.selection.select(row));
  }

  // sets checkbox label
  checkboxLabel(row?: any): string {

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  calculatesanctionAmount() {

  }

  // calculate total voucher amount
  totalAmount() {
    this.totalVoucherAmount = null;
    let totalAmount = null;

    this.voucherDetailsDataSource.data.forEach(row => {
      this.totalVoucherAmount += Number(row.voucherAmount);
    });

    if (this.totalVoucherAmount) {
      totalAmount = Number(this.totalVoucherAmount).toFixed(4);
    }

    this.totalVoucherAmount = totalAmount;

    return totalAmount;
  }

  // if master checkbox is checked
  onChecked(event, row) {
    if (this.isAllSelected) {
      this.datasorceLetterDetails.data.forEach(row => {
        this.sancationAmountValue += Number(row.sanctionAmount);
        this.totalUtilisedValue += Number(row.utilizedAmount);
        this.unspendAmountValue += Number(row.unspentAmount);
      });
    }
    if (!this.selection.hasValue()) {
      this.datasorceLetterDetails.data.forEach(row => {
        this.sancationAmountValue = 0;
        this.totalUtilisedValue = 0;
        this.unspendAmountValue = 0;
      });
    }
  }

  // removes duplicate from the selected data array
  removeDuplicate(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  // if row is checked
  onCheck(event, row, index) {
    this.selectedIndex = index;
    this.indexValue.push(index);
    this.newArray = this.removeDuplicate(this.indexValue);

    // push the selected row index into an array
    for (let j = 0; j < this.letter_details.length; j++) {
      for (let i = 0; i < this.selecteddata.length; i++) {
        if (this.letter_details[j].orderNo === this.selecteddata[i].orderNo) {
          this.indexValue.push(j);
          break;
        }
      }
    }

    // checks if row is selected
    if (event.checked) {

      this.isRowChecked = true;

      this.selecteddata.push(
        row
      );

      // sets the utlized amount equals to total voucher amount if row is selected
      for (let i = 0; i < this.selecteddata.length; i++) {
        for (let j = 0; j < this.letter_details.length; j++) {
          if (this.selecteddata[i].orderNo === this.letter_details[j].orderNo) {
            this.letter_details[j].utilizedAmount = this.totalVoucherAmount;
          }
        }

      }
      this.datasorceLetterDetails = new MatTableDataSource(this.letter_details);
      this.dataTransform();
      this.changedTotalAmount();
      this.changedSanctionAmount();
      this.changedUtilizedAmount(index);
      this.changedOpeningBalance();
      this.changedSurrenderAmount(index);
      this.sanctionOrderNo = row.sanctionOrderNo;
      this.orderDate = new Date(row.surrenderOrderDate);
    } else {
      const index1 = this.selecteddata.findIndex(ele => ele.orderNo === row.orderNo);
      this.selecteddata.splice(index1, 1);
      this.newArray = [];
      for (let j = 0; j < this.letter_details.length; j++) {
        for (let i = 0; i < this.selecteddata.length; i++) {
          if (this.selecteddata[i].orderNo === this.letter_details[j].orderNo) {
            this.newArray.push(j);
          }
        }
      }
      this.changedTotalAmount();
      this.changedSanctionAmount();
      this.changedUtilizedAmount(index);
      this.changedOpeningBalance();
      this.changedSurrenderAmount(index);
    }
  }

  // transform data
  dataTransform() {
    for (let i = 0; i < this.letter_details.length; i++) {
      this.decimalPoint1(this.letter_details[i].sanctionAmount);
    }
  }

  // calculate total amount field value
  changedTotalAmount() {
    this.totalAmountValue = null;
    let totalAmount = null;

    this.selecteddata.forEach(row => {
      this.totalAmountValue += Number(row.openingBalance) + Number(row.sanctionAmount);
      this.decimalPipe.transform(this.openingBalanceValue, '1.2-4');
    });

    if (this.totalAmountValue) {
      totalAmount = Number(this.totalAmountValue).toFixed(4);
    }

    this.totalAmountValue = totalAmount;
  }

  // calculate selected row opening balance
  changedOpeningBalance() {
    this.openingBalanceValue = 0;
    this.selecteddata.forEach(row => {
      this.openingBalanceValue += Number(row.openingBalance);
      this.decimalPipe.transform(this.openingBalanceValue, '1.2-4');
    });


  }

  // calculate table utilized amount
  changeTableUtilizedAmount(index) {

    this.letter_details[index].unspentAmount = (String)(
      Number(this.letter_details[index].sanctionAmount) +
      Number(this.letter_details[index].openingBalance) -
      Number(this.letter_details[index].utilizedAmount) -
      Number(this.letter_details[index].surrenderAmount)
    );
  }

  // calculate selected row sanction amount
  changedSanctionAmount() {
    this.sancationAmountValue = 0;
    let sanctionAmount;
    this.selecteddata.forEach(row => {
      this.sancationAmountValue += Number(row.sanctionAmount);
    });

    if (this.sancationAmountValue) {
      sanctionAmount = Number(this.sancationAmountValue).toFixed(4);
    }

    this.sancationAmountValue = sanctionAmount;
  }

  // calculate selected row surrender aount
  changedSurrenderAmount(index) {
    this.surrenderAmountValue = 0;
    let surrenderAmount = 0;
    let surrenderAmountValue;
    this.unspendAmountValue = 0;
    let unspentAmount;
    this.selecteddata.forEach(row => {
      surrenderAmount += Number(row.surrenderAmount);
      this.unspendAmountValue = (
        Number(this.sancationAmountValue) +
        Number(this.openingBalanceValue) -
        Number(this.totalUtilisedValue) -
        Number(surrenderAmount)
      );
    });
    this.decimalPipe.transform(this.surrenderAmountValue, '1.2-4');
    this.decimalPipe.transform(this.unspendAmountValue, '1.2-4');

    if (this.unspendAmountValue) {
      unspentAmount = Number(this.unspendAmountValue).toFixed(4);
    }
    if (this.surrenderAmountValue) {
      surrenderAmountValue = Number(this.surrenderAmountValue).toFixed(4);
    }

    this.unspendAmountValue = unspentAmount;
    this.surrenderAmountValue = surrenderAmountValue;


    this.letter_details[index].unspentAmount = (String)(
      Number(this.letter_details[index].sanctionAmount) +
      Number(this.letter_details[index].openingBalance) -
      Number(this.letter_details[index].utilizedAmount) -
      Number(this.letter_details[index].surrenderAmount));
  }

  // calculate selected row utilized amount
  changedUtilizedAmount(index) {
    this.totalUtilisedValue = 0;
    this.unspendAmountValue = 0;
    let surrenderAmount = 0;
    let unspentAmount;
    let totalUtilisedValue;

    this.selecteddata.forEach(row => {
      this.totalUtilisedValue += Number(row.utilizedAmount);
      surrenderAmount += Number(row.surrenderAmount);
      this.unspendAmountValue = Number(this.sancationAmountValue) +
        Number(this.openingBalanceValue) -
        Number(this.totalUtilisedValue) -
        Number(surrenderAmount);
    });

    for (let j = 0; j < this.letter_details.length; j++) {
      for (let i = 0; i < this.selecteddata.length; i++) {
        if (this.letter_details[j].orderNo === this.selecteddata[i].orderNo) {
          this.letter_details[j].utilizedAmount = Number(this.letter_details[j].utilizedAmount).toFixed(4);
        }
      }

    }


    this.letter_details[index].utilizedAmount = this.totalVoucherAmount;

    this.letter_details[index].unspentAmount = (String)(Number(this.letter_details[index].sanctionAmount) +
      Number(this.letter_details[index].openingBalance) -
      Number(this.letter_details[index].utilizedAmount) -
      Number(this.letter_details[index].surrenderAmount));
    this.isUtilized = true;

    if (this.totalUtilisedValue !== null && this.isRowChecked) {
      totalUtilisedValue = Number(this.totalUtilisedValue).toFixed(4);
    }


    if (this.unspendAmountValue !== null && this.isRowChecked) {
      unspentAmount = Number(this.unspendAmountValue).toFixed(4);
      this.unspendAmountValue = unspentAmount;
    }
    this.totalUtilisedValue = totalUtilisedValue;
  }

  // resets the form
  clearForm() {
    this.utcForm.reset();
  }

  // on click on search show sanction order detail table
  onSearch() {

    if (this.utcForm.valid) {
      this.sanctionOrderDetail = true;
      if (this.sanctionOrderDetail) {
        this.isValid = true;
      }
    }

  }

  // add .0000 after the value on basis of data and index
  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(4);
    }
  }

  // allow user to enter number,dot,zeros
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

  }

  // add .0000 after the value on basis of data
  decimalPoint1(data) {
    if (data) {
      data = Number(data).toFixed(4);
    }

    return data;
  }

  // generate uc id
  generateUCID() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(GenerateUCIDComponent, {
      width: '250px'
    });
  }

  // calculate surrender amount
  amountSurrender(event) {
    let unspentAmount = 0;
    const surrenderAmount = event.target.value;
    let unspendAmountValue;

    for (let i = 0; i < this.newArray.length; i++) {
      this.isError = false;
      const unspentAmount1 = this.letter_details[this.newArray[i]].unspentAmount;

      if (this.letter_details[this.newArray[i]].surrenderAmount === '0.0000') {
        this.letter_details[this.newArray[i]].surrenderAmount = surrenderAmount;
        this.letter_details[this.newArray[i]].unspentAmount = (String)(
          Number(this.letter_details[this.newArray[i]].sanctionAmount) +
          Number(this.letter_details[this.newArray[i]].openingBalance) -
          Number(this.letter_details[this.newArray[i]].utilizedAmount) -
          Number(this.letter_details[this.newArray[i]].surrenderAmount));
        this.surrenderAmountValue = surrenderAmount;
        this.decimalPipe.transform(this.surrenderAmountValue, '1.2-4');
      }
    }
    this.selecteddata.forEach(row => {
      unspentAmount += (Number(row.unspentAmount));
    });

    if (this.surrenderAmountValue !== null && this.isRowChecked) {
      this.surrenderAmountValue = Number(this.surrenderAmountValue).toFixed(4);
    }

    if (unspentAmount !== null && this.isRowChecked) {
      unspendAmountValue = Number(unspentAmount).toFixed(4);
      this.unspendAmountValue = unspendAmountValue;
    }

    return this.surrenderAmountValue;
  }

  // calculate voucher amount
  addVoucherAmount(index) {
    if (this.voucherDetailsDataSource.data[index].voucherAmount !== '') {
      this.changedVoucherAmount = Number(this.voucherDetailsDataSource.data[index].voucherAmount).toFixed(4);
    }
    return this.changedVoucherAmount;
  }

  onlyDate(event: any) {
  }

  // allow only alphabet,number,hypen
  onlySurrenderOrder(event: any) {
    const pattern = /^[A-Z0-9/-]+$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }

  // allow only alphabet,number
  onlyAlphabetNumber(event: any) {
    const pattern = /^[a-zA-Z0-9]+$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }

  // allow only alphabet,space
  onlyAlphabetSpace(event: any) {
    const pattern = /^[a-zA-Z\s]+$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }

  // select head of department on basis of adminstrative department
  selectDepartment() {
    const department = this.utcForm.value.departmentCode;
    if (department !== '' && department != null) {
      this.hod_list = this.headOfDepartment_list.filter(
        searchBy => searchBy.department.toLowerCase() === department.toLowerCase());
    }
  }

  // go to next
  // goToNext() {
  //   this.tabDisable = false;
  //   this.selectedTabIndex = 1;
  // }

  isViewClicked() {
    this.datasorceLetterDetails.data[1].checkBox = true;
  }

  // opens utc list attachment dialog box on click on upload button
  upload(element) {

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(UtcSanctionOrderAttachementComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-generate-ucid',
  templateUrl: 'generate-ucid.component.html',

})
// tslint:disable-next-line: component-class-suffix
export class GenerateUCIDComponent {

  ucid = '000';
  generateUcIdCtrl: FormControl = new FormControl();
  constructor(public dialogRef: MatDialogRef<GenerateUCIDComponent>, private router: Router) { }

  // calculate ucid
  calculateUcId() {
    let id = this.ucid;

    id = '00' + (Number(this.ucid) + 1);

    return id;
  }

  // on click on Ok button naviagte to utc-certifiacte
  close() {
    this.router.navigate(['./contract-management/utc-certificate']);
    this.dialogRef.close();
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-utc-list-attachement',
  templateUrl: 'utc-sanction-order-attachement.component.html',

})
// tslint:disable-next-line: component-class-suffix
export class UtcSanctionOrderAttachementComponent {


  attachmentTypeCodeCtrl: FormControl = new FormControl();
  attachmentType_list: ListValue[] = [
    { value: '1', viewValue: 'Vouchers' },
  ];
  constructor(private el: ElementRef, public dialogRef: MatDialogRef<UtcSanctionOrderAttachementComponent>,) { }
  brwoseData: any[] = [
    {
      attachmentType: '',
      name: undefined,
      file: undefined,
    }
  ];

  fileBrowseIndex: number;
  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'action'
  ];

  dataSourceBrowse = new MatTableDataSource(this.brwoseData);

  // function for file selection
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  // open file selector
  openFileSelector(index) {

    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  // delete row
  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
