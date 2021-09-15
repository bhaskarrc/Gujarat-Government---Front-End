import { datasource } from './../../delegation/delegation.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatDialog } from '@angular/material';
import { ReplaySubject } from 'rxjs';
import { SaveConfirmDialogComponent } from '../../save-confirm-dialog/save-confirm-dialog.component';

export interface EstablishmentList {
  bHead: string,
  sanPost: string,
  status:string,
  objectHead: string,
}

@Component({
  selector: 'app-wireframe-of-establishment-list',
  templateUrl: './wireframe-of-establishment-list.component.html',
  styleUrls: ['./wireframe-of-establishment-list.component.css']
})
export class WireframeOfEstablishmentListComponent implements OnInit {
  establishmentListForm: FormGroup;
  showtab: boolean = false;

  ELEMENT_DATA: EstablishmentList[] = [
    {
      bHead: '2021-2022 : 019 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted',
      sanPost: '10',
      status:'Submitted',
      objectHead: '3135: Dantiwada Agricultural University',
    },
    {
      bHead: '2021-2022 : 020 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted',
      sanPost: '9',
      status:'Draft',
      objectHead: '-',
    },
    {
      bHead: '2021-2022 : 021 : 2020 : 00 : 800 : 01 : 00 : Revenue: Voted',
      sanPost: '5',
      status:'Submitted',
      objectHead: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances',
    },
  ];


  finYear_list: any[] = [
    { value: '2', viewValue: '2021-2022' },
    { value: '1', viewValue: '2020-2021' }
  ];

  department_list: any[] = [
    {
      value: '1', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'
    },
    { value: '2', viewValue: 'Industries and Mines Department' }
  ];

  estimation_by_list: any[] = [
    { value: '1', viewValue: 'Shri Arun Mahesh Babu MS' },
    { value: '2', viewValue: 'Shri C.M. Padalia' },
    { value: '3', viewValue: 'Shri Amit Prakash Yadav' }
  ];

  demand_list: any[] = [
    { value: '1', viewValue: '001:Agriculture and Co-operation Department' },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
    { value: '6', viewValue: '084:Non-Residential Buildings' },
    { value: '7', viewValue: '085:Residential Buildings' },
    { value: '8', viewValue: '093: Welfare of Scheduled Tribes' },
    { value: '9', viewValue: '095: Scheduled Castes Sub Plan' },
    { value: '10', viewValue: '096:Tribal Area Sub-Plan' },




  ];

  bpn_list: any[] = [
    {
      value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department'
    },
    { value: '2', viewValue: '13:Industries and Mines Department' },

    { value: '3', viewValue: '22:Roads And Buildings Department' },
    { value: '4', viewValue: '24c: Tribal Development Department - Part III' },
    { value: '5', viewValue: '24b: Social Justice And Empowerment Department - Part II' },
    { value: '6', viewValue: '24d: Tribal Development Department - Part IV' },



  ];

  revenue_capital_list: any[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' }
  ];

  majorHead_list: any[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    {
      value: '2',
      viewValue: '5475:Capital Outlay on other General Economics Services'
    },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' }
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
      viewValue: '00:Capital Outlay on other General Economics Services'
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
    }
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
    }
  ];

  subHead_list: any[] = [
    {
      value: '01:Agricultural and Co-operation Department',
      viewValue: '01:Agricultural and Co-operation Department'
    },

    {
      value:
        '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development ',
      viewValue:
        '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '
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
      value:
        '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)',
      viewValue:
        '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
    },

    {
      value: '03:National Food Security Mission',
      viewValue: '03:National Food Security Mission'
    },

    {
      value:
        '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)',
      viewValue:
        '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
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
      viewValue:
        '01:IND-1 Planning Machinery in the Industries & Mines Department'
    },

    {
      value:
        '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department',
      viewValue:
        '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
    },

    {
      value:
        '03:IND-45 Evaluation of Schemes under the Industries and Mines Department',
      viewValue:
        '03:IND-45 Evaluation of Schemes under the Industries and Mines Department'
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
      value:
        '01:Contribution towards employees Provident Funds Scheme for Presses',
      viewValue:
        '01:Contribution towards employees Provident Funds Scheme for Presses'
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
      value:
        '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies',
      viewValue:
        '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
    },

    {
      value:
        '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme',
      viewValue:
        '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
    }
  ];

  detailHead_list: any[] = [
    {
      value: '00:Agricultural and Co-operation Department',
      viewValue: '00:Agricultural and Co-operation Department'
    },
    {
      value:
        '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development',
      viewValue:
        '00:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development'
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
      value:
        '00:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)',
      viewValue:
        '00:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
    },

    {
      value: '00:National Food Security Mission',
      viewValue: '00:National Food Security Mission'
    },

    {
      value:
        '00:AGR() Promoting to farmer for Post Harvesting & Management (value addition)',
      viewValue:
        '00:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
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
      viewValue:
        '00:IND-1 Planning Machinery in the Industries & Mines Department'
    },

    {
      value:
        '00:IND-1 Monitoring of Plan expenditure in Industries and Mines Department',
      viewValue:
        '00:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
    },

    {
      value:
        '00:IND-45 Evaluation of Schemes under the Industries and Mines Department',
      viewValue:
        '00:IND-45 Evaluation of Schemes under the Industries and Mines Department'
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
      value:
        '00:Contribution towards employees Provident Funds Scheme for Presses',
      viewValue:
        '00:Contribution towards employees Provident Funds Scheme for Presses'
    },

    {
      value: '00:IND-11 Directorate of Printing and Stationery',
      viewValue: '00:IND-11 Directorate of Printing and Stationery'
    },

    {
      value:
        '00:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies',
      viewValue:
        '00:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
    },

    {
      value:
        '00:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme',
      viewValue:
        '00:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
    }
  ];

  chargedVoted_list: any[] = [
    { value: 'Charged', viewValue: 'Charged' },
    { value: 'Voted', viewValue: 'Voted' }
    // {value: 'Both', viewValue: 'Both'},
  ];

  allMainCodes: any[] = [
    { value: '3100', viewValue: '3100 : Grants-in-Aid General' },
    { value: '3131', viewValue: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances' },
    { value: '3132', viewValue: '3132 : Grants-in-Aid General to Panchayats pertaining' },
    { value: '3133', viewValue: '3133 : Grant-in-Aid General to Local Bodies' },
    { value: '3135', viewValue: '3135 : Grant-in-Aid General to Others' },
    { value: '3200', viewValue: '3200 : Contributions' },
    { value: '3241', viewValue: '3241 : Contributions To Panchayats' },
    { value: '3243', viewValue: '3243 : Contributions To Local Bodies' },
    { value: '3245', viewValue: '3245 : Contributions to Others' },
    { value: '3300', viewValue: '3300 : Subsidies' },
    { value: '3351', viewValue: '3351 : Subsidies To Panchayats' },
    { value: '3353', viewValue: '3353 : Subsidies To Local Bodies' },
    { value: '3355', viewValue: '3355 : Subsidies to Others' },
    { value: '3400', viewValue: '3400 : Scholarships / Stipend' },
    { value: '3500', viewValue: '3500 : Grant for Creation of Capital Assets' },
    { value: '3561', viewValue: '3561 : Grants for creation of Capital Assets to Panchayats' },
    { value: '3563', viewValue: '3563 : Grants for creation of Capital Assets to Local Bodies' },
    { value: '3565', viewValue: '3565 : Grants for creation of Capital Assets to others.' },
    { value: '4000', viewValue: 'Non-GIA Object Head' }
  ];



  estimation_list: any[] = [
    { value: '1', viewValue: 'Director of Horticulture' },
  ];

  dataSource = new MatTableDataSource<EstablishmentList>(this.ELEMENT_DATA);
  displayedColumns: any[] = ['position', 'bHead', 'sanPost', 'objectHead', 'status', 'action'];

  createEstimateForm: FormGroup;

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department',
    BRANCH: 'Please select any Name of the Branch ',
    ESTIMATION_FORM: 'Please select any Estimation Form ',
    ESTIMATE_BY: 'Please select any Estimation By ',
    DEMAND: 'Please select any Demand',
    BPN: 'Please select any BPN code',
    REVENUE_CAPITAL: 'Please select any Revenue/Capital',
    MAJOR_HEAD: 'Please select any Major Head',
    SUB_MAJOR_HEAD: 'Please select any Sub Major Head',
    MINOR_HEAD: 'Please select any Minor Head',
    SUB_HEAD: 'Please select any Sub Head',
    DETAILED_HEAD: 'Please insert Detailed Head',
    CHARGED_VOTED: 'Please insert Detailed Head',
    OBJECT_HEAD: 'Please insert Object Head',
  };

  finYearCtrl: FormControl = new FormControl();
  filteredFinYear: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  estimationFromCtrl: FormControl = new FormControl();
  filteredEstimationFrom: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  departmentCodeCtrl: FormControl = new FormControl();
  filteredDepartmentCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  demandCodeCtrl: FormControl = new FormControl();
  filteredDemandCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  bpnCodeCtrl: FormControl = new FormControl();
  filteredBPNCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  majorHeadCodeCtrl: FormControl = new FormControl();
  filteredMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  revenueCapitalCtrl: FormControl = new FormControl();
  filteredRevenueCapital: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  subMajorHeadCodeCtrl: FormControl = new FormControl();
  filteredSubMajorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  minorHeadCodeCtrl: FormControl = new FormControl();
  filteredMinorHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  subHeadCodeCtrl: FormControl = new FormControl();
  filteredSubHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  detailHeadCodeCtrl: FormControl = new FormControl();
  filteredDetailHeadCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  chargedVotedCodeCtrl: FormControl = new FormControl();
  filteredchargedVotedCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  codeCtrl: FormControl = new FormControl();

  constructor(private fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();



    this.establishmentListForm = this.fb.group({
      fiCtrl: [''],
      deptCtrl: [''],
      estFromCtrl: [''],
      revCtrl: [''],
      demandCtrl: [''],
      mHeadCtrl: [''],
      smHeadCtrl: [''],
      minHeadCtrl: [''],
      subHeadCtrl: [''],
      voteCtrl: [''],
      dHeadCtrl: ['']
    });
  }
  createForm() {
    this.createEstimateForm = this.fb.group({
      finYear: [''],
      departmentCode: [''],
      branchCode: [''],
      estimationFrom: [''],
      estimateBy: [''],
      demandCode: [''],
      bpnCode: [''],
      revenueCapital: [''],
      majorHeadCode: [''],
      subMajorHeadCode: [''],
      minorHeadCode: [''],
      subHeadCode: [''],
      detailHeadCode: [''],
      chargedVotedCode: [''],
      // classOne:[''],
      classTwo: [''],
      objHead: ['']
    });
  }



  clearForm() {
    this.createEstimateForm.reset();
  }

  showTab() {
    this.showtab = true;
  }
  saveEstimate() {

  }

  deleteConfirmationPopup(i){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent3, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteRow(i);
      }
    });
  }
  deleteRow(index)
  {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  goToDashboard(){}
}

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: '../delete-confirm-dialog.component.html',
  styleUrls: ['./wireframe-of-establishment-list.component.css']
})
export class DeleteConfirmDialogComponent3 implements OnInit {
  constructor(public dialogRef: MatDialogRef<SaveConfirmDialogComponent>) {}

  selectedIndex: number;

  ngOnInit() {}

  onCancel() {
    this.closeDialog('no');
  }

  onyes() {
    this.closeDialog('yes');
  }

  closeDialog(popup: 'no' | 'yes') {
    this.dialogRef.close(popup);
  }
}
