import { BudgetModule } from './../budget.module';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BudgetFormType } from 'src/app/model/budget';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { SaveConfirmDialogComponent } from '../save-confirm-dialog/save-confirm-dialog.component';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
declare function SetGujarati();
declare function SetEnglish();
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  financialYear_list: BudgetFormType[] = [
    { value: '1', viewValue: '2018-2019' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2020-2021' },
  ];
  department_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Education Department' },
    { value: '1', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '2', viewValue: 'Industries and Mines Department' }
  ];
  demand_list: BudgetFormType[] = [
    { value: '1', viewValue: '001:Agriculture and Co-operation Department' },
    { value: '2', viewValue: '002:Agriculture' },
    { value: '3', viewValue: '047:Industries and Mines Department' },
    { value: '4', viewValue: '048:Stationery and Printing' },
    { value: '5', viewValue: '049:Industries' },
    { value: '6', viewValue: '084:Non-Residential Buildings'},
    { value: '7', viewValue: '085:Residential Buildings'},
    { value: '8', viewValue: '093: Welfare of Scheduled Tribes'},
    { value: '9', viewValue: '095: Scheduled Castes Sub Plan'},
    { value: '10', viewValue: '096:Tribal Area Sub-Plan'},
  ];

  estimation_list: any[] = [
    { value: '1', viewValue: 'Director of Horticulture' },
  ];

  bpn_list: BudgetFormType[] = [
    { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department' },
    { value: '2', viewValue: '13:Industries and Mines Department' },
    { value: '3', viewValue: '22:Roads And Buildings Department' },
    { value: '4', viewValue: '24c: Tribal Development Department - Part III'},
    { value: '5', viewValue: '24b: Social Justice And Empowerment Department - Part II' },
    { value: '6', viewValue: '24d: Tribal Development Department - Part IV' },
];
  majorHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '3451:Secretariat-Economic Services' },
    { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
    { value: '3', viewValue: '2401:Crop Husbandry' },
    { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
    { value: '5', viewValue: '2058:Stationery and Printing' },
  ];

  branch_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Administration' },
    { value: '2', viewValue: 'Budget' }
  ];

  subMajorHead_list: BudgetFormType[] = [
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
    },

  ];
  minorHead_list: BudgetFormType[] = [
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
  subHead_list: BudgetFormType[] = [
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
  detailHead_list: BudgetFormType[] = [
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

  classType: BudgetFormType[] = [
    {
      value: '1',
      viewValue: 'Object Class-1 (Personnel Services and Benefits)'
    },
    { value: '2', viewValue: 'Object Class-2 (Administrative Expenses)' },
    {
      value: '3',
      viewValue: 'Object Class-3 (Contractual Services and Supplies)'
    },
    { value: '4', viewValue: 'Object Class-4 (Grants Etc.)' },
    { value: '5', viewValue: 'Object Class-5 (Other Expenditure)' },
    {
      value: '6',
      viewValue:
        'Object Class-6 (Acquisition of Capital Assets and Other Capital Expenditure)'
    },
    { value: '7', viewValue: 'Object Class-7 (Accounting Adjustment)' }
  ];

  proposalType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Continuous' }
  ];
  proposalCategory_list1: BudgetFormType[] = [
    { value: '2', viewValue: 'Post' },
    { value: '1', viewValue: 'New Vehicle' },
    { value: '3', viewValue: 'Renovation / Construction' },
    { value: '4', viewValue: 'New Machinery / Equipment' },
    { value: '5', viewValue: 'New Outsources / Contractual Manpower' }
  ];

  proposalCategory_list2: BudgetFormType[] = [
    { value: '1', viewValue: 'Other' },
  ];
  schemeType_list: BudgetFormType[] = [
    { value: '1', viewValue: '100% State Sponsored Scheme' },
    { value: '2', viewValue: '100% Centrally Sponsored Scheme' },
    { value: '3', viewValue: 'Partially Centrally Sponsored Scheme' }
  ];
  objectHead_list: BudgetFormType[] = [
    { value: '1', viewValue: '4200 : Capital outlay on Housing' },
    { value: '2', viewValue: '4217 : Capital outlay on Urban Development' },
    { value: '3', viewValue: '4235 : Capital Outlay on Social Security and Welfare' },
    { value: '4', viewValue: '5054 : Capital Outlay on Roads and Bridges' },
    { value: '5', viewValue: '5200 : Machinery and Equipment' },
    { value: '6', viewValue: '5300 : Major Works' },
    { value: '7', viewValue: '5400 : Investments' }
  ];
  itemName_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Purchase of Furniture for the Director Office' },
    { value: '2', viewValue: 'Purchase Furniture for record room of Office' },
    { value: '3', viewValue: 'Purchase of new Furniture for the Joint Director Office' },
    { value: '4', viewValue: 'Purchase of new Furniture for the Deputy Director' }
  ];
  establishment_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' }
  ];
  expenditureType_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Re-current' },
    { value: '2', viewValue: 'Non re-current' },
    { value: '3', viewValue: 'Both' }
  ];
  majorCategory_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Specific' },
    { value: '2', viewValue: 'Regular' }
  ];
  revenueCapital_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Revenue' },
    { value: '2', viewValue: 'Capital' },
  ];
  chargedVoted_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Charged' },
    { value: '2', viewValue: 'Voted' }
  ];
  minister_list: BudgetFormType[] = [
    { value: '1', viewValue: 'Shri Vijaybhai R. Rupani' }
  ];
  financialYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  estimateByCtrl: FormControl = new FormControl();
  bpnCodeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();
  detailHeadCodeCtrl: FormControl = new FormControl();
  proposalCategoryCtrl: FormControl = new FormControl();
  proposalCategory2Ctrl: FormControl = new FormControl();
  majorCategoryCtrl: FormControl = new FormControl();
  branchCtrl: FormControl = new FormControl();

  proposalTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  objectHeadCtrl: FormControl = new FormControl();
  classOneCtrl: FormControl = new FormControl();
  itemNameCtrl: FormControl = new FormControl();
  establishmentCtrl: FormControl = new FormControl();
  expenditureTypeCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  chargedVotedCtrl: FormControl = new FormControl();
  ministerInChargeCtrl: FormControl = new FormControl();
  initiatiomdate = new Date((new Date()));
  budgetForm: FormGroup;
  objectHeadShow: Boolean = false;
  itemNameShow: Boolean = false;
  selectedNew: Boolean = false;
  itemNameNot: Boolean = false;
  showRatio: Boolean = false;
  showRatio1: Boolean = false;
  showRatio2: Boolean = false;
  showRatio3: Boolean = false;
  isLangChange: Boolean = false;
  showBPNCode = false;
  showRevCap = false;
  hasFocusSet: number;
  expenditureTypeShow: Boolean = false;
  notShowEstablishment: Boolean = false;
  selectedindex: Number;
  selectedIndex: Number;
  tabDisable: Boolean = true;
  doneHeader: Boolean = false;
  currentLang = new BehaviorSubject<string>('Eng');
  errorMessages = budgetMessage;
  constructor(
    private fb: FormBuilder,
    public router: Router,
    public dialog: MatDialog,
    private el: ElementRef,
    ) { }




  ngOnInit() {
    this.budgetForm = this.fb.group({
      financialYear: [''],
      departmentCode: ['2'],
      branch: [''],
      demandCode: [''],
      estimateBy: ['1'],
      bpnCode: ['1'],
      majorHeadCode: [''],
      subMajorHeadCode: [''],
      minorHeadCode: [''],
      subHeadCode: [''],
      detailHeadCode: [''],
      proposalCategory: [''],
      proposalCategory2: [''],
      majorCategory: [''],
      proposalType: [''],
      schemeType: [''],
      objectHead: [''],
      objectClass: [''],
      itemName: [''],
      itemWorkName: [''],
      writeUpEnglish: [''],
      writeUpGujrati: [''],
      establishment: [''],
      expenditureType: [''],
      itemNames: [''],
      itemNamesGuj: [''],
      revenueCapital: ['1'],
      chargedVoted: ['2'],
      schemeTypeRatio: ['100%', Validators.required],
      schemeTypeRatio1: ['100%', Validators.required],
      schemeTypeRatio2: ['', Validators.required],
      schemeTypeRatio3: ['', Validators.required],
      ministerInCharge: ['1']
    });
    this.budgetForm.patchValue({
      financialYear: '3',
    });
  }
  showSchemeRatio(event) {
    if (event.value === '1') {
      this.showRatio = true;
      this.showRatio1 = false;
      this.showRatio2 = false;
      this.showRatio3 = false;
    } else if (event.value === '2') {
      this.showRatio1 = true;
      this.showRatio = false;
      this.showRatio2 = false;
      this.showRatio3 = false;
    } else if (event.value === '3') {
      this.showRatio1 = false;
      this.showRatio = false;
      this.showRatio2 = true;
      this.showRatio3 = true;
    }
  }
  toggleLanguage() {
    this.isLangChange = true;
    const elements = this.el.nativeElement.querySelectorAll('.hasfocus')[0];
    if (elements !== undefined) {
      if (this.currentLang.value === 'Guj') {
        SetEnglish();
        this.currentLang.next('Eng');
      } else {
        SetGujarati();
        this.currentLang.next('Guj');
      }
      elements.focus();
    }
  }

  saveEstimate() {}

  setGujaratiDefault() {
    if (!this.isLangChange) {
      SetGujarati();
      this.currentLang.next('Eng');
    }
  }
  setEnglishOnFocusOut() {
    SetEnglish();
  }

  percentageKeyPress(event: any) {
    const pattern = /^(0?[1-9]|[1-9][0-9])$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }

  displayDemand() {
    this.showBPNCode = true;
  }

  displayRevCap() {
    this.showRevCap = true;
  }


saveConfirmationPopup() {
  const scheme = this.budgetForm.controls.schemeType.value;
  const proposalCat = this.budgetForm.controls.proposalCategory.value;
  const fin = proposalCat + '-' + scheme;
  const forwardIndex = '1';
  const forwardIndex2 = '2';
  const dialogRef = this.dialog.open(SaveConfirmDialogComponent, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'yes') {
      if (this.budgetForm.controls.proposalType.value == '1' && this.budgetForm.controls.proposalCategory.value == '3') {
        this.router.navigate(['./budget/new-work-estimate', scheme]);
        this.selectedindex = 1;

      } else if (this.budgetForm.controls.proposalType.value == '2') {
        // this.router.navigate(['./budget/item-continuous-estimate', scheme]);
        this.router.navigate(['./budget/item-continuous-estimate-duplicate', scheme]);
        this.selectedindex = 1;
      }
      if (this.budgetForm.controls.proposalType.value == '1' && this.budgetForm.controls.proposalCategory.value !== '3' && this.budgetForm.controls.majorCategory.value == '1') {
        // this.router.navigate(['./budget/new-item-estimate', proposalCat + '-' + scheme]);
        this.router.navigate(['./budget/new-item-estimate-duplicate', proposalCat + '-' + scheme]);
        this.selectedindex = 1;

      } else if (this.budgetForm.controls.proposalType.value == '2' && this.budgetForm.controls.proposalCategory.value == '3') {
        this.router.navigate(['./budget/work-in-progress-estimate', scheme + '-' + forwardIndex]);
        this.selectedIndex = 1;
      } else if (this.budgetForm.controls.proposalType.value == '1' && this.budgetForm.controls.majorCategory.value == '2' && this.budgetForm.controls.proposalCategory.value == '1') {
        // this.router.navigate(['./budget/new-item-estimate', proposalCat + '-' + scheme + '-' + forwardIndex2]);
        this.router.navigate(['./budget/new-item-estimate-duplicate', proposalCat + '-' + scheme + '-' + forwardIndex2]);
        this.selectedIndex = 1;
      }
    }
  });
}

}











