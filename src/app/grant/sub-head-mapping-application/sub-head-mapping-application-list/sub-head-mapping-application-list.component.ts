import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms';
import {  MatTableDataSource} from '@angular/material';
import {  Router} from '@angular/router';
import { SubHeadMappingApplication } from 'src/app/model/sub-head-mapping-application-list';
import { ListValue } from 'src/app/model/common-grant';


@Component({
  selector: 'app-sub-head-mapping-application-list',
  templateUrl: './sub-head-mapping-application-list.component.html',
  styleUrls: ['./sub-head-mapping-application-list.component.css']
})
export class SubHeadMappingApplicationListComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) {}
  searchGrantOrder: FormGroup;

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
  department_list: ListValue[] = [{
    value: '1',
    viewValue: 'Finance Department'
  }];
 
  revenueCapital_list: ListValue[] = [{
      value: '01',
      viewValue: 'Revenue'
    },
    {
      value: '02',
      viewValue: 'Capital'
    }
  ];
  status_list: ListValue[] = [{
      value: '01',
      viewValue: 'Pending'
    },
    {
      value: '02',
      viewValue: 'Approve'
    }
  ];
  Provision_list: ListValue[] = [{
    value: '01',
    viewValue: 'Provision'
  },
  {
    value: '02',
    viewValue: 'Provision'
  }
];
  controllingOfficer_list: ListValue[] = [{
    value: '01',
    viewValue: 'Deputy Director Animal Husbandry'
  }];
  // grantOrderDisplayColumn: string[] = [
  //     'SrNo', 'GrantOrderId', 'GrantOrderNo', 'duration', 'creationDate', 'status', 'lyingWith', 'action'
  // ];  
 
grantOrderList : SubHeadMappingApplication[]= [{
      department: 'Finance Department',
      demand: '001:Agriculture and Co-operation Department',
      majorHead: '2052: Secretariat - General Services',
      subMajorHead: '00:Crop Husbandry',
      minorHead: '090: Secretariat',
      subHead: '01: Finance Department',
      controllingOfficer: 'Deputy Director Animal Husbandry',
      ddoOfficer: 'Amit Pandey',
      action: '',
      toolTipDataDemad: '001:Agriculture and Co-operation Department',
      toolTipDataMH: '2052: Secretariat - General Services',
      toolTipDataSMH: '00:Crop Husbandry',
      toolTipDataMI: '090:Secretariat',
      toolTipDataSH: '01: Finance Department'
    }];

grantOrderDisplayColumn: string[] = [
    'SrNo',  'department', 'demand', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'controllingOfficer',  'ddoOfficer', 'action'
    ];
  grantOrderDataSource = new MatTableDataSource(this.grantOrderList);
  departmentCtrl: FormControl = new FormControl();
  controllingOfficerCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  

  ngOnInit() {
    this.searchGrantOrder = this.fb.group({
        department: [''],
        demand: [''],
        majorHead: [''],
        subMajorHead: [''],
        minorHead: [''],
        subHead: [''],
        controllingOfficer: ['']
    });
  }

  searchGrantOrderDetails() {

  }
}
