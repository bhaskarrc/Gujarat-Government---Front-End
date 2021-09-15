
import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { grantMessage } from 'src/app/common/error-message/common-message.constants';
import { DialogData } from 'src/app/model/standing-charge';
import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { ListValue, BrwoseDatagrant } from 'src/app/model/common-grant';


@Component({
  selector: 'app-sub-head-mapping-application',
  templateUrl: './sub-head-mapping-application.component.html',
  styleUrls: ['./sub-head-mapping-application.component.css']
})
export class SubHeadMappingApplicationComponent implements OnInit {
  demand_list: ListValue[] = [
    {
      value: '1', viewValue: '001:Agriculture and Co-operation Department'
    },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
  ];
  majorHead_list: ListValue[] = [
    { value: '1', viewValue: '0020 : Corporation Tax' },
    { value: '2', viewValue: '0021: Taxes on Income other than Corporation Tax' },
    { value: '3', viewValue: '0028 : Other Taxes on Income and Expenditure' },
    { value: '4', viewValue: '0029 : Land Revenue' },
    { value: '5', viewValue: '0030 : Stamps and Registration Fees' },
  ];
  subMajorHead_list: ListValue[] = [
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
  minorHead_list: ListValue[] = [
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
  subHead_list: ListValue[] = [
    {
      value: '01:Agricultural and Co-operation Department',
      viewValue: '01:Agricultural and Co-operation Department'
    },

    {
      value: '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development ',
      viewValue: '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '
    },

    {
      value: '01:AGR-15 Information & Technology',
      viewValue: '01:AGR-15 Information & Technology'
    },

    {
      value: '02:Expenditure for Training',
      viewValue: '02:Expenditure for Training'
    },

    {
      value: '01:AGR-Renovation Of The Department',
      viewValue: '01:AGR-Renovation Of The Department'
    },

    {
      value: '01:Direcorate of Agriculture',
      viewValue: '01:Direcorate of Agriculture'
    },

    {
      value: '02:Divisional Establishmen',
      viewValue: '02:Divisional Establishmen'
    },

    {
      value: '03:District Establishment',
      viewValue: '03:District Establishment'
    },

    {
      value: '01:Intensive Agricultural District Programme',
      viewValue: '01:Intensive Agricultural District Programme'
    },


    {
      value: '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)',
      viewValue: '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
    },

    {
      value: '03:National Food Security Mission',
      viewValue: '03:National Food Security Mission'
    },

    {
      value: '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)',
      viewValue: '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
    },

    {
      value: '01:Multiplication and Distribution of various type of cotton',
      viewValue: '01:Multiplication and Distribution of various type of cotton'
    },

    {
      value: '02:Seed Testing Laboratory',
      viewValue: '02:Seed Testing Laboratory'
    },

    {
      value: '03:AGR 5 -Taluka Seed Multiplication Farms',
      viewValue: '03:AGR 5 -Taluka Seed Multiplication Farms'
    },

    {
      value: '04:Adj.Establishment of seed cell',
      viewValue: '04:Adj.Establishment of seed cell'
    },

    {
      value: '01:IND-51 Industries and Mines Department',
      viewValue: '01:IND-51 Industries and Mines Department'
    },

    {
      value: '01:IND-1 Planning Machinery in the Industries & Mines Department',
      viewValue: '01:IND-1 Planning Machinery in the Industries & Mines Department'
    },

    {
      value: '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department',
      viewValue: '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
    },


    {
      value: '03:IND-45 Evaluation of Schemes under the Industries and Mines Department',
      viewValue: '03:IND-45 Evaluation of Schemes under the Industries and Mines Department'
    },

    {
      value: '01:IND-44 Information Technology',
      viewValue: '01:IND-44 Information Technology'
    },

    {
      value: '01:OIN-17 Industries & Mines Department',
      viewValue: '01:OIN-17 Industries & Mines Department'
    },

    {
      value: '01:Contribution towards employees Provident Funds Scheme for Presses',
      viewValue: '01:Contribution towards employees Provident Funds Scheme for Presses'
    },

    {
      value: '01:IND-11 Directorate of Printing and Stationery',
      viewValue: '01:IND-11 Directorate of Printing and Stationery'
    },

    {
      value: '01:Stationery offices Stores',
      viewValue: '01:Stationery offices Stores'
    },

    {
      value: '01:IND-48 Government Presses',
      viewValue: '01:IND-48 Government Presses'
    },

    {
      value: '02:IND-42 Apprentice Training in Government Presses',
      viewValue: '02:IND-42 Apprentice Training in Government Presses'
    },


    {
      value: '01:IND-32 Government Book Depots',
      viewValue: '01:IND-32 Government Book Depots'
    },

    {
      value: '01:Depreciation Reserve Fund for Government Presses',
      viewValue: '01:Depreciation Reserve Fund for Government Presses'
    },


    {
      value: '01:IND-48 Government Presses',
      viewValue: '01:IND-48 Government Presses'
    },


    {
      value: '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies',
      viewValue: '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
    },


    {
      value: '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme',
      viewValue: '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
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
  status_list: ListValue[] = [
    { value: '1', viewValue: 'Active' },
    { value: '2', viewValue: 'De-Active' }
  ];
  department_list: ListValue[] = [
    { value: '1', viewValue: 'Finance Department' }
  ];
  controllingOfficer_list: ListValue[] = [{
    value: '01',
    viewValue: 'Deputy Director Animal Husbandry'
  }];
  revenueCaptial_list: ListValue[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Captial' },
  ];
  revenueData = 'Revenue';
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  brwoseData: BrwoseDatagrant[] = [{
    name: undefined,
    file: undefined,
    uploadedBy: undefined
  }];
  errorMessages = grantMessage;
  fileBrowseIndex: number;
  displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  ELEMENT_DATA: any[] = [
    {
      revenueCapital: 'Revenue',
      department: 'Finance Department', demand: 'Finance Department', majorHead: '2052: Secretariat - General Services',
      subMajorHead: '0.00',
      minorHead: '090: Secretariat', subHead: '01: Finance Department', controllingOfficer: 'Deputy Director Animal Husbandry'
    },
  ];
  ELEMENT_DATA_CO_DDO: any[] = [
    {
      revenueCapital: 'Revenue',
      department: 'Finance Department', demand: 'Finance Department', majorHead: '2052: Secretariat - General Services', subMajorHead: '0.00',
      minorHead: '090: Secretariat', subHead: '01: Finance Department',
    },
  ];

  displayedGrantColumns: string[] = [
    'revenueCapital', 'department', 'demand', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'controllingOfficer'];
  displayedGrantCODDOColumns: string[] = [
    'revenueCapital', 'department', 'demand', 'majorHead', 'subMajorHead', 'minorHead', 'subHead',];
  grantdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  grantdataCODDOSource = new MatTableDataSource<any>(this.ELEMENT_DATA_CO_DDO);
  dataListing: Boolean = false;
  dataListingCODDo: Boolean = false;
  createGrantOrder: FormGroup;
  subHeadMappingForm: FormGroup;
  initiatiomdate = new Date((new Date()));
  departmentCtrl: FormControl = new FormControl();
  revenueCaptialCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  controllingOfficerCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  statusCtrl: FormControl = new FormControl();
  attachmentTypeCodeCtrl: FormControl = new FormControl();

  constructor(private fb: FormBuilder, private toaster: ToastrService,
    public dialog: MatDialog, private el: ElementRef, ) { }

  ngOnInit() {
    this.createGrantOrder = this.fb.group({
      department: ['1'],
      demand: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      status: [''],
      controllingOfficer: [''],
    });
    this.subHeadMappingForm = this.fb.group({
      revenueCaptial: [''],
      department: ['1'],
      demand: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      status: [''],
      controllingOfficer: [''],
    });
  }
  subHeadDetailsFormSubmit() {
  }
  saveDate() {
    this.toaster.success('Data Save Success Fully');
    this.dataListing = true;
  }
  showCODDO() {
    this.toaster.success('Data Save Success Fully');
    this.dataListingCODDo = true;
  }
  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }


  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined,
          uploadedBy: undefined,

        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toaster.error('Please fill the detail.');
      }
    }
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
  officerList(): void {
    const dialogRef = this.dialog.open(SubHeadMappingDialogComponent, {
      width: '830px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  officerList2(): void {
    const dialogRef = this.dialog.open(SubHeadMappingDialog2Component, {
      width: '830px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  workflowFile(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'grant-receved-dialog',
  templateUrl: 'grant-receved-dialog.html',
  styleUrls: ['./sub-head-mapping-application.component.css']
})
export class SubHeadMappingDialogComponent {
  department_list: ListValue[] = [
    { value: '1', viewValue: 'Finance Department' },
  ];
  district_list: ListValue[] = [
    { value: '1', viewValue: 'Ahemdabad' },
    { value: '2', viewValue: 'Surat' },
    { value: '3', viewValue: 'Gandhinagar' },
  ];
  officer: ListValue[] = [
    { value: '1', viewValue: 'Accountant General , Rajkoat' },
    { value: '2', viewValue: 'Accountant Secretary(K-Branch) , Finance' },
    { value: '3', viewValue: 'Director of Insurance' },
    { value: '4', viewValue: 'Director of Pension and Provedent Fund' },
    { value: '5', viewValue: 'Commissionar of Commercial Tax' },
    { value: '6', viewValue: 'Deputy Director, Small Saving, Ahemdabad' },
    { value: '7', viewValue: 'Accountant General , Rajkoat' },
    { value: '8', viewValue: 'Accountant Secretary(K-Branch) , Finance' },
    { value: '9', viewValue: 'Director of Insurance' },
    { value: '10', viewValue: 'Director of Pension and Provedent Fund' },
    { value: '11', viewValue: 'Commissionar of Commercial Tax' },
    { value: '12', viewValue: 'Deputy Director, Small Saving, Ahemdabad' },
  ];
  showListOfficer: boolean = false;
  officerForms: FormGroup;
  departmentCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  constructor(
    public dialogRef: MatDialogRef<SubHeadMappingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { }
  displayedColumns: string[] = ['srNo', 'grantOrderNo', 'budgetHead', 'cssGrantReceved', 'dateOfGrantReceved'];

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.officerForms = this.fb.group({
      department: [''],
      coName: [''],
      ddoName: [''],
      district: [''],
      cardex: [''],
      ddoNo: ['']
    });
  }
  showList() {
    this.showListOfficer = true;
  }
}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'grant-receved-2',
  templateUrl: 'grant-receved-dialog2.html',
  styleUrls: ['./sub-head-mapping-application.component.css']
})
export class SubHeadMappingDialog2Component {
  department_list: ListValue[] = [
    { value: '1', viewValue: 'Finance Department' },
  ];
  district_list: ListValue[] = [
    { value: '1', viewValue: 'Ahemdabad' },
    { value: '2', viewValue: 'Surat' },
    { value: '3', viewValue: 'Gandhinagar' },
  ];
  officer: ListValue[] = [
    { value: '1', viewValue: 'Accountant General , Rajkoat' },
    { value: '2', viewValue: 'Accountant Secretary(K-Branch) , Finance' },
    { value: '3', viewValue: 'Director of Insurance' },
    { value: '4', viewValue: 'Director of Pension and Provedent Fund' },
    { value: '5', viewValue: 'Commissionar of Commercial Tax' },
    { value: '6', viewValue: 'Deputy Director, Small Saving, Ahemdabad' },
    { value: '7', viewValue: 'Accountant General , Rajkoat' },
    { value: '8', viewValue: 'Accountant Secretary(K-Branch) , Finance' },
    { value: '9', viewValue: 'Director of Insurance' },
    { value: '10', viewValue: 'Director of Pension and Provedent Fund' },
    { value: '11', viewValue: 'Commissionar of Commercial Tax' },
    { value: '12', viewValue: 'Deputy Director, Small Saving, Ahemdabad' },
  ];
  showListOfficer: boolean = false;
  officerForms: FormGroup;
  departmentCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  constructor(
    public dialogRef: MatDialogRef<SubHeadMappingDialog2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { }
  displayedColumns: string[] = ['srNo', 'grantOrderNo', 'budgetHead', 'cssGrantReceved', 'dateOfGrantReceved'];

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.officerForms = this.fb.group({
      department: [''],
      coName: [''],
      ddoName: [''],
      district: [''],
      cardex: [''],
      ddoNo: ['']
    });
  }
  showList() {
    this.showListOfficer = true;
  }
}

