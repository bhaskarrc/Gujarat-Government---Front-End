
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { grantMessage } from 'src/app/common/error-message/common-message.constants';
import { Reappropriation } from 'src/app/model/re-appropriation-process';
import { BrwoseDatagrant, ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-re-appropriation-process',
  templateUrl: './re-appropriation-process.component.html',
  styleUrls: ['./re-appropriation-process.component.css']
})
export class ReAppropriationProcessComponent implements OnInit {
  errorMessages = grantMessage;
  public toggleButton = true;
  decrease: boolean = false;
  increase: boolean = false;
  addincrease: boolean = false;
  finYear: ListValue[] = [
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2019-2020' },

  ];

  filteredDepartment: ListValue[] = [
    { value: '1', viewValue: 'Agriculture and Co-operation Department' },
    { value: '2', viewValue: 'Industries and Mines Department' },
    { value: '3', viewValue: 'Stationery and Printing' }
  ];

  revenueCaptial_list: ListValue[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Captial' },
  ];
  chargedVoted_list: ListValue[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted' },
  ];
  schemeType_list: ListValue[] = [
    { value: '1', viewValue: 'State ' },
    { value: '2', viewValue: 'CSS' },
  ];
  increaseDecrease_list: ListValue[] = [
    { value: '1', viewValue: 'Increase Amount' },
    { value: '2', viewValue: 'Decrease Amount' },
  ];
  demand_list: ListValue[] = [
    {
      value: '1', viewValue: '001:Agriculture and Co-operation Department'
    },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
  ];
  attachmentTypeCode: ListValue[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];

  schemeGroup_List: ListValue[] = [
    { value: '1', viewValue: 'Revenue-Voted-State' },
    { value: '2', viewValue: 'Revenue-Voted-CSS' },
    { value: '3', viewValue: 'Revenue-Charged-State' },
    { value: '4', viewValue: 'Revenue-Charged-CSS' },
    { value: '5', viewValue: 'Capital-Voted-State' },
    { value: '6', viewValue: 'Capital-Voted-CSS' },
    { value: '7', viewValue: 'Capital-Charged-State' },
    { value: '8', viewValue: 'Capital-Charged-CSS' },
  ];

  brwoseData: BrwoseDatagrant[] = [{
    name: undefined,
    file: undefined,
    uploadedBy: ''
  }];

  headerReAGroup: any[] = [
    { label: 'Finacial Year :', value: '2019-2020' },
    { label: 'Demand Name :', value: '0021: Taxes on Income other than Corporation Tax' },
    { label: 'Department Name :', value: 'financial Department' },
    { label: 'Revenue/Capital :', value: 'Revenue' },
    { label: 'Charged/Voted :', value: 'Voted' },
    { label: 'Type of Scheme :', value: 'State ' },
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

  budgetEstimateType_list: ListValue[] = [
    { value: '1', viewValue: 'Standing Charges' },
    { value: '2', viewValue: 'New Item Estimate' },
    { value: '3', viewValue: 'Item Continuous Estimate' },
    { value: '4', viewValue: 'New Work Estimate' },
    { value: '5', viewValue: 'Work in Progress ' }
  ];

  item_list: ListValue[] = [
    { value: '1', viewValue: 'All Item' },
    { value: '2', viewValue: 'Item 1' },
    { value: '3', viewValue: 'Item 2' },
    { value: '4', viewValue: 'Item 3' }
  ];

  icrementReduce_list: ListValue[] = [
    { value: '1', viewValue: 'Increase' },
    { value: '2', viewValue: 'Reduce' }
  ];


  fileBrowseIndex: number;
  displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  ELEMENT_DATA: any[] = [
    {
      // headOfAccount: '70: 2251: 08: 101: 12:00:Finance Department',
      headOfAccount: '001:2404:00:800:01:00 Item 2 (New Item Estimate)',
      workName: 'Item Name 1',
      objectClass: 'Object Class 1', objectClass1: 'Object Class 2', objectClass2: 'Object Class 3',
      budgetEstimate: 6000, budgetEstimate1: 3000, budgetEstimate2: 5000, revisedEstimate: 20000,
      supplementaryDemand: '5000', sanctionGrant: 11000, actualExpendature: '13000',
      surenderAmount: 987451, reAppropriationAmount: '', standAfterReApproation: '',
      detailsedAppropration: '', tooltip: '00:C1: Personel Services and Benefits'
    },
    {
      // headOfAccount: '71: 2251: 08: 101: 12:01:Finance Department',
      headOfAccount: '001:2404:00:800:02:00 Item 2 (New Item Estimate)',
      workName: 'Item Name 2',
      objectClass: 'Object Class 4', objectClass1: 'Object Class 5', objectClass2: 'Object Class 6',
      budgetEstimate: 6000, budgetEstimate1: 3000, budgetEstimate2: 5000, revisedEstimate: 20000,
      supplementaryDemand: '5000', sanctionGrant: 11000, actualExpendature: '10000',
      surenderAmount: 987451, reAppropriationAmount: '', standAfterReApproation: '',
      detailsedAppropration: '', tooltip: '01:C2: Administrative Expenses'
    },
  ];
  ELEMENT_DATA2: any[] = [
    {
      // headOfAccount: '73: 2251: 08: 101: 12:00:Finance Department',
      headOfAccount: '001:2404:00:800:03:00 Item 2 (New Item Estimate)',
      workName: 'Item Name 3',
      objectClass: 'Object Class 1', objectClass1: 'Object Class 2', objectClass2: 'Object Class 3',
      budgetEstimate: 6000, budgetEstimate1: 3000, budgetEstimate2: 5000,
      revisedEstimate: 20000,
      supplementaryDemand: '5000', sanctionGrant: 11000, actualExpendature: '1000',
      surenderAmount: 987451, reAppropriationAmount: '1000', standAfterReApproation: '',
      detailsedAppropration: '', tooltip: '00:C1: Personel Services and Benefits',
    },
    {
      // headOfAccount: '74: 2251: 08: 101: 12:01:Finance Department',
      headOfAccount: '001:2404:00:800:04:00 Item 1 (New Item Estimate)',
      workName: 'Item Name 4',
      objectClass: 'Object Class 4', objectClass1: 'Object Class 5', objectClass2: 'Object Class 6', budgetEstimate: 6000, budgetEstimate1: 3000, budgetEstimate2: 5000,
      revisedEstimate: 20000,
      supplementaryDemand: '5000', sanctionGrant: 11000, actualExpendature: '12500',
      surenderAmount: 987451, reAppropriationAmount: '000', standAfterReApproation: '',
      detailsedAppropration: '', tooltip: '01:C2: Administrative Expenses',
    },
  ];
  displayedGrantColumns: string[] = [
    'srNo', 'headOfAccount', 'workName',
    'objectClass', 'budgetEstimate',
    'revisedEstimate', 'supplementaryDemand', 'sanctionGrant', 'actualExpendature',
    'surenderAmount', 'reAppropriationAmount', 'standAfterReApproation', 'detailsedAppropration', 'actions'];
  displayedGrantColumns2: string[] = [
    'srNo', 'headOfAccount', 'workName',
    'objectClass', 'budgetEstimate',
    'revisedEstimate', 'supplementaryDemand', 'sanctionGrant', 'actualExpendature',
    'surenderAmount', 'reAppropriationAmount', 'standAfterReApproation', 'detailsedAppropration', 'actions'];
  grantdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  grantdataSource2 = new MatTableDataSource<any>(this.ELEMENT_DATA2);
  createGrantOrder: FormGroup;
  initiatiomdate = new Date((new Date()));

  finYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  revenueCaptialCtrl: FormControl = new FormControl();
  schemeGroupCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  chargedVotedCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  attachmentTypeCtrl: FormControl = new FormControl();
  increaseDecreaseCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailHeadCtrl: FormControl = new FormControl();

  itemCtrl: FormControl = new FormControl();
  budgetEstimateTypeCtrl: FormControl = new FormControl();
  IcrementReduceCtrl: FormControl = new FormControl();

  constructor(private fb: FormBuilder, private el: ElementRef,
    private toaster: ToastrService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.formSubmitSurrender();
  }
  formSubmitSurrender() {
    this.createGrantOrder = this.fb.group({
      finYear: ['1', Validators.required],
      department: ['', Validators.required],
      orderNo: ['', Validators.required],
      revenueCaptial: ['', Validators.required],
      demand: ['', Validators.required],
      chargedVoted: ['', Validators.required],
      schemeType: ['', Validators.required],
      increaseDecrease: [''],
      schemeGroup: ['', Validators.required],
      majorHead: ['', Validators.required],
      subMajorHead: ['', Validators.required],
      minorHead: ['', Validators.required],
      subHead: ['', Validators.required],
      detailHead: ['', Validators.required],
      budgetEstimateType: ['', Validators.required],
      item: ['', Validators.required],
      icrementReduce: ['', Validators.required],
    });
  }

  viewAata() {
    this.addincrease = true;
  }
  increaseAmount(event) {
    if (event.value === '1') {
      this.increase = true;
      this.decrease = false;
    } else if (event.value === '2') {
      this.decrease = true;
      this.increase = false;
    }
  }
  getheadOfAccount(): number {
    let CalculatedAmount = 0;
    this.grantdataSource.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.headOfAccount);
    });
    return CalculatedAmount;
  }

  getactualExpenditure(): number {
    let CalculatedAmount = 0;
    this.grantdataSource.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.expenditure);
    });
    return CalculatedAmount;
  }

  getstandAfterReApproation(): number {
    let CalculatedAmount = 0;
    this.grantdataSource.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.standAfterReApproation) + Number(data.actualExpendature);
    });
    return CalculatedAmount;
  }
  getBudgetEstimate(): number {
    let budgetEstimate = 0;
    this.grantdataSource.data.forEach((data) => {
      budgetEstimate = budgetEstimate + Number(data.budgetEstimate);
    });
    return budgetEstimate;
  }
  getsanctionGrant(): number {
    let budgetEstimate = 0;
    this.grantdataSource.data.forEach((data) => {
      budgetEstimate = budgetEstimate + Number(data.sanctionGrant);
    });
    return budgetEstimate;
  }
  getactualExpendature(): number {
    let budgetEstimate = 0;
    this.grantdataSource.data.forEach((data) => {
      budgetEstimate = budgetEstimate + Number(data.actualExpendature);
    });
    return budgetEstimate;
  }
  getsurenderAmount(): number {
    let budgetEstimate = 0;
    this.grantdataSource.data.forEach((data) => {
      budgetEstimate = budgetEstimate + Number(data.surenderAmount);
    });
    return budgetEstimate;
  }
  getdetailsedAppropration(): number {
    let budgetEstimate = 0;
    this.grantdataSource.data.forEach((data) => {
      budgetEstimate = budgetEstimate + Number(data.detailsedAppropration);
    });
    return budgetEstimate;
  }
  getRevisedEstimate(): number {
    let revisedEstimate = 0;
    this.grantdataSource.data.forEach((data) => {
      revisedEstimate = revisedEstimate + Number(data.revisedEstimate);
    });
    return revisedEstimate;
  }

  getSurrenderAmount(): number {
    let surrenderAmount = 0;
    this.grantdataSource.data.forEach((data) => {
      surrenderAmount = surrenderAmount + Number(data.surrenderAmount);
    });
    return surrenderAmount;
  }

  getSupplementaryDemand(): number {
    let supplementaryDemand = 0;
    this.grantdataSource.data.forEach((data) => {
      supplementaryDemand = supplementaryDemand + Number(data.supplementaryDemand);
    });
    return supplementaryDemand;
  }

  getReAppropriationAmount(): number {
    let reAppropriationAmount = 0;
    this.grantdataSource.data.forEach((element) => {
      reAppropriationAmount = reAppropriationAmount + Number(element.reAppropriationAmount);
    });
    return reAppropriationAmount;
  }

  getsanctionedGrantAppropriation(): number {
    let CalculatedAmount = 0;
    this.grantdataSource.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.sanctionedGrantAppropriation);
    });
    return CalculatedAmount;
  }
  getamountOfReAppropriation(): number {
    let CalculatedAmount = 0;
    this.grantdataSource.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.amountOfReAppropriation);
    });
    return CalculatedAmount;
  }
  getamountAfterReAppropriation(): number {
    let CalculatedAmount = 0;
    this.grantdataSource.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.amountAfterReAppropriation);
    });
    return CalculatedAmount;
  }

  getheadOfAccount2(): number {
    let CalculatedAmount = 0;
    this.grantdataSource2.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.headOfAccount);
    });
    return CalculatedAmount;
  }

  getactualExpenditure2(): number {
    let CalculatedAmount = 0;
    this.grantdataSource2.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.expenditure);
    });
    return CalculatedAmount;
  }

  getstandAfterReApproation2(): number {
    let CalculatedAmount = 0;
    this.grantdataSource2.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.standAfterReApproation) + Number(data.actualExpendature);
    });
    return CalculatedAmount;
  }
  getBudgetEstimate2(): number {
    let budgetEstimate = 0;
    this.grantdataSource2.data.forEach((data) => {
      budgetEstimate = budgetEstimate + Number(data.budgetEstimate);
    });
    return budgetEstimate;
  }
  getsanctionGrant2(): number {
    let budgetEstimate = 0;
    this.grantdataSource2.data.forEach((data) => {
      budgetEstimate = budgetEstimate + Number(data.sanctionGrant);
    });
    return budgetEstimate;
  }
  getactualExpendature2(): number {
    let budgetEstimate = 0;
    this.grantdataSource2.data.forEach((data) => {
      budgetEstimate = budgetEstimate + Number(data.actualExpendature);
    });
    return budgetEstimate;
  }
  getsurenderAmount2(): number {
    let budgetEstimate = 0;
    this.grantdataSource2.data.forEach((data) => {
      budgetEstimate = budgetEstimate + Number(data.surenderAmount);
    });
    return budgetEstimate;
  }
  getdetailsedAppropration2(): number {
    let budgetEstimate = 0;
    this.grantdataSource2.data.forEach((data) => {
      budgetEstimate = budgetEstimate + Number(data.detailsedAppropration);
    });
    return budgetEstimate;
  }
  getRevisedEstimate2(): number {
    let revisedEstimate = 0;
    this.grantdataSource2.data.forEach((data) => {
      revisedEstimate = revisedEstimate + Number(data.revisedEstimate);
    });
    return revisedEstimate;
  }

  getSurrenderAmount2(): number {
    let surrenderAmount = 0;
    this.grantdataSource2.data.forEach((data) => {
      surrenderAmount = surrenderAmount + Number(data.surrenderAmount);
    });
    return surrenderAmount;
  }

  getSupplementaryDemand2(): number {
    let supplementaryDemand = 0;
    this.grantdataSource2.data.forEach((data) => {
      supplementaryDemand = supplementaryDemand + Number(data.supplementaryDemand);
    });
    return supplementaryDemand;
  }

  getReAppropriationAmount2(): number {
    let reAppropriationAmount = 0;
    this.grantdataSource2.data.forEach((element) => {
      reAppropriationAmount = reAppropriationAmount + Number(element.reAppropriationAmount);
    });
    return reAppropriationAmount;
  }

  getsanctionedGrantAppropriation2(): number {
    let CalculatedAmount = 0;
    this.grantdataSource2.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.sanctionedGrantAppropriation);
    });
    return CalculatedAmount;
  }
  getamountOfReAppropriation2(): number {
    let CalculatedAmount = 0;
    this.grantdataSource2.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.amountOfReAppropriation);
    });
    return CalculatedAmount;
  }
  getamountAfterReAppropriation2(): number {
    let CalculatedAmount = 0;
    this.grantdataSource2.data.forEach((data) => {
      CalculatedAmount = CalculatedAmount + Number(data.amountAfterReAppropriation);
    });
    return CalculatedAmount;
  }
  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }
  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,4})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }
  workflowDetails(): void {
    const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  formSubmit() { }
  gotoListing() {
    this.router.navigate(['']);
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
          uploadedBy: ''
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


  showData: boolean = false;
  valuechange(searchValue: string): void {
    console.log(searchValue);
    if (searchValue == '1') {
      this.showData = true;
    }
    if (searchValue == '2') {
      this.showData = true;
    }
  }
}


