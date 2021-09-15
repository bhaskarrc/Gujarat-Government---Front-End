import { startWith, map, takeUntil } from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSelect, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemContinuous, schemDetail, DistrictElement, CssDetail, Attachment } from '../../../model/item-continuous';
import { CommonList, CommonListing } from 'src/app/model/common-listing';
import { BudgetFormType } from 'src/app/model/budget';
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { StandingChargeForwardDialogComponent } from '../../standing-charge/standalone-charge/standalone-charge.component';
// import { DistrictElement, CssDetail } from '../../../model/item-continuous';
export class ItemContinuous1 {
    objectHead: string;
    actualsThirdLastYear: number | string;
    actualsSecondLastYear: number | string;
    lastYear: number | string;
    criteria: string;
    endBaseLine: number | string;
    improvementFifteen: number | string;
    improvementSixteen: number | string;
    improvementEighteen: number | string;
    currentYear: number | string;
    underStatedOperation: number | string;
    amountProposedByHod: string;
    remarks: string;
    toolTipData: string;

  }

export interface HeaderElement {
  label: string | '';
  value: string | '';
}

  export class sOHead {
    name: string;
    id: string;

  }
const ELEMENT_DATA: ItemContinuous1[] = [
    {
        objectHead: '0101', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '',
        toolTipData: '0101 : Pay of Officers Including Grade Pay'
    },
    {
        objectHead: '3131', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
        endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
        improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '',
        toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
    },
    {
        objectHead: '3132', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '',
        toolTipData: '3132 : Grants-in-Aid General to Panchayats pertaining'
    },
    {
        objectHead: '3133', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '', toolTipData: '3133 : Contributions (b) To Local Bodies'
    },
    {
        objectHead: '3135-13', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '', toolTipData: '3135-13 : Navsari Agricultural University'
    },
    {
        objectHead: '3135-14', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '',
         toolTipData: '3135-14 : Junagadh Agricultural University'
    },
    {
        objectHead: '3135-15', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '', toolTipData: '3135-15 : Navsari Agricultural University'
    },
    {
        objectHead: '3135-16', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '',
        toolTipData: '3135-16 : Dantiwada Agricultural University'
    },
    {
        objectHead: '3241', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '', toolTipData: '3241 : Contributions (a) To Panchayats'
    },
    {
        objectHead: '3243', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '', toolTipData: '3243 : Contributions (b) To Local Bodies'
    },
    {
        objectHead: '3351', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '', toolTipData: '3351 : Subsidies (a) To Panchayats'
    },
    {
        objectHead: '3353', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '', toolTipData: ' '
    },
    {
        objectHead: '3161', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '', toolTipData: ' '
    },
    {
        objectHead: '3363', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
         improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '400.00', remarks: '', toolTipData: ' '
    }
];

const ELEMENT_DATA2: ItemContinuous1[] = [
    {
        objectHead: '7057', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
          improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '', remarks: '',
         toolTipData: '0101 : Pay of Officers Including Grade Pay'
    },
    {
        objectHead: '7058', actualsThirdLastYear: '2019.00', actualsSecondLastYear: '2018.00', lastYear: '2018.00', criteria: '200.00',
         endBaseLine: '1.79', improvementFifteen: '100.00', improvementSixteen: '252.00',
          improvementEighteen: '253.00', currentYear: '356.00',
        underStatedOperation: '475.00', amountProposedByHod: '', remarks: '',
         toolTipData: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances'
    },
];

const DISTRICT_ELEMENT_DATA: DistrictElement[] = [
    { id: 1, expenditure: '0.00', districtName: 'Ahmedabad', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 2, expenditure: '0.00', districtName: 'Vadodara', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 3, expenditure: '0.00', districtName: 'Anand', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 4, expenditure: '0.00', districtName: 'Chhota Udaipur', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 5, expenditure: '0.00', districtName: 'Dahod', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 6, expenditure: '0.00', districtName: 'Kheda', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 7, expenditure: '0.00', districtName: 'Mahisagar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 8, expenditure: '0.00', districtName: 'Panchmahal', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 9, expenditure: '0.00', districtName: 'Gandhinagar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 10, expenditure: '0.00', districtName: 'Aravalli', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 11, expenditure: '0.00', districtName: 'Banaskantha', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 12, expenditure: '0.00', districtName: 'Mehsana', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 13, expenditure: '0.00', districtName: 'Patan', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 14, expenditure: '0.00', districtName: 'Sabarkantha', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 15, expenditure: '0.00', districtName: 'Rajkot', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 16, expenditure: '0.00', districtName: 'Amreli', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 17, expenditure: '0.00', districtName: 'Bhavnagar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 18, expenditure: '0.00', districtName: 'Botad', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 19, expenditure: '0.00', districtName: 'Devbhoomi Dwarka', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 20, expenditure: '0.00', districtName: 'Gir Somnath', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 21, expenditure: '0.00', districtName: 'Jamnagar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 22, expenditure: '0.00', districtName: 'Junagadh', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 23, expenditure: '0.00', districtName: 'Morbi', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 24, expenditure: '0.00', districtName: 'Porbandar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 25, expenditure: '0.00', districtName: 'Surendranagar', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 26, expenditure: '0.00', districtName: 'Kachchh', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 27, expenditure: '0.00', districtName: 'Surat', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 28, expenditure: '0.00', districtName: 'Bharuch', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 29, expenditure: '0.00', districtName: 'Dang', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 30, expenditure: '0.00', districtName: 'Narmada', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 31, expenditure: '0.00', districtName: 'Navsari', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 32, expenditure: '0.00', districtName: 'Tapi', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
    { id: 33, expenditure: '0.00', districtName: 'Valsad', talukaExpenditure: '0.00', gramExpenditure: '0.00' },
];

const DISTRICT_ELEMENT_DATA2: any[] = [
    {
      id: 1,
      expendature: '',
      districtName: 'Ahmedabad',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 2,
      expendature: '',
      districtName: 'Vadodara',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 3,
      expendature: '',
      districtName: 'Anand',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 4,
      expendature: '',
      districtName: 'Chhota Udaipur',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 5,
      expendature: '',
      districtName: 'Dahod',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 6,
      expendature: '',
      districtName: 'Kheda',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 7,
      expendature: '',
      districtName: 'Mahisagar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 8,
      expendature: '',
      districtName: 'Panchmahal',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 9,
      expendature: '',
      districtName: 'Gandhinagar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 10,
      expendature: '',
      districtName: 'Aravalli',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 11,
      expendature: '',
      districtName: 'Banaskantha',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 12,
      expendature: '',
      districtName: 'Mehsana',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 13,
      expendature: '',
      districtName: 'Patan',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 14,
      expendature: '',
      districtName: 'Sabarkantha',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 15,
      expendature: '',
      districtName: 'Rajkot',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 16,
      expendature: '',
      districtName: 'Amreli',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 17,
      expendature: '',
      districtName: 'Bhavnagar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 18,
      expendature: '',
      districtName: 'Botad',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 19,
      expendature: '',
      districtName: 'Devbhoomi Dwarka',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 20,
      expendature: '',
      districtName: 'Gir Somnath',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 21,
      expendature: '',
      districtName: 'Jamnagar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 22,
      expendature: '',
      districtName: 'Junagadh',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 23,
      expendature: '',
      districtName: 'Morbi',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 24,
      expendature: '',
      districtName: 'Porbandar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 25,
      expendature: '',
      districtName: 'Surendranagar',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 26,
      expendature: '',
      districtName: 'Kachchh',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 27,
      expendature: '',
      districtName: 'Surat',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 28,
      expendature: '',
      districtName: 'Bharuch',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 29,
      expendature: '',
      districtName: 'Dang',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 30,
      expendature: '',
      districtName: 'Narmada',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 31,
      expendature: '',
      districtName: 'Navsari',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 32,
      expendature: '',
      districtName: 'Tapi',
      talukaexpendature: '',
      gramexpendature: ''
    },
    {
      id: 33,
      expendature: '',
      districtName: 'Valsad',
      talukaexpendature: '',
      gramexpendature: ''
    },
    // {
    //   id: 34,
    //   expendature: '',
    //   districtName: 'State Level Only (if any)',
    //   talukaexpendature: '',
    //   gramexpendature: ''
    // }
  ];



  const DISTRICT_ELEMENT_DATA1: any[] = [

    {

      id: 34,
      expendature: '',
      districtName: 'State Level Only (if any)',
      propsedAmount: '',

    }
  ];

const ELEMENT_TAB1_DATA: ItemContinuous[] = [];

@Component({
    selector: 'app-create-budget-estimate',
    templateUrl: './create-budget-estimate.component.html',
    styleUrls: ['./create-budget-estimate.component.css']
})
export class CreateBudgetEstimateComponent implements OnInit, OnDestroy {
    item_category_list: any[] = [
    { value: '1', viewValue: 'Vehicle'},
    { value: '2', viewValue: 'Post'},
    { value: '3', viewValue: 'Construction'},
    { value: '4', viewValue: 'Furniture'},
    { value: '5', viewValue: 'Other'},
    ];
    financialYear_list: BudgetFormType[] = [
        { value: '1', viewValue: '2018-2019' },
        { value: '2', viewValue: '2019-2020' },
        { value: '3', viewValue: '2020-2021' },
    ];
    department_list: BudgetFormType[] = [
        { value: '1', viewValue: 'Education Department' }
    ];
    demand_list: BudgetFormType[] = [
        { value: '1', viewValue: '9' },
        { value: '2', viewValue: '10' },
        { value: '3', viewValue: '11' },
        { value: '4', viewValue: '12' },
    ];
    majorHead_list: BudgetFormType[] = [
        { value: '1', viewValue: '2049' },
        { value: '2', viewValue: '2051' },
        { value: '3', viewValue: '3049' },
        { value: '4', viewValue: '3051'}
    ];
    subMajorHead_list: BudgetFormType[] = [
        { value: '1', viewValue: '60' },
        { value: '2', viewValue: '01' },
        { value: '3', viewValue: '02' },
    ];
    minorHead_list: BudgetFormType[] = [
        { value: '1', viewValue: '60' },
        { value: '2', viewValue: '01' },
        { value: '3', viewValue: '02' },
    ];
    subHead_list: BudgetFormType[] = [
        { value: '1', viewValue: '60' },
        { value: '2', viewValue: '01' },
        { value: '3', viewValue: '02' },
    ];
    detailHead_list: BudgetFormType[] = [
        { value: '1', viewValue: '00' },
        { value: '2', viewValue: '01' }
    ];
    proposalType_list: BudgetFormType[] = [
        { value: '1', viewValue: 'New'},
        { value: '2', viewValue: 'Continuous'}
    ];
    proposalCategory_list: BudgetFormType[] = [
        { value: '1', viewValue: 'Vehicle'},
        { value: '2', viewValue: 'Post'},
        { value: '3', viewValue: 'Construction'},
        { value: '4', viewValue: 'Furniture'},
        { value: '5', viewValue: 'Other'},
    ];
    schemeType_list: BudgetFormType[] = [
        { value: '1', viewValue: 'State'},
        { value: '2', viewValue: 'CSS'}
    ];
    objectHead_list: BudgetFormType[] = [
        { value: '1', viewValue: '0010'},
        { value: '2', viewValue: '0011'},
        { value: '3', viewValue: '0012'},
        { value: '4', viewValue: '0013'},
        { value: '5', viewValue: '5400'},
        { value: '6', viewValue: '3131'}
    ];
    itemName_list: BudgetFormType[] = [
        { value: '1', viewValue: 'Purchase of Furniture for the Director Office'},
        { value: '2', viewValue: 'Purchase Furniture for record room of Office'},
        { value: '3', viewValue: 'Purchase of new Furniture for the Joint Director Office'},
        { value: '4', viewValue: 'Purchase of new Furniture for the Deputy Director'}
    ];
    establishment_list: BudgetFormType[] = [
        { value: '1', viewValue: 'Yes'},
        { value: '2', viewValue: 'No'}
    ];
    expenditureType_list: BudgetFormType[] = [
        { value: '1', viewValue: 'Re-current'},
        { value: '2', viewValue: 'Non re-current'},
        { value: '3', viewValue: 'Both'}
    ];
    majorCategory_list: BudgetFormType[] = [
        { value: '1', viewValue: 'Specific'},
        { value: '2', viewValue: 'Regular'}
    ];
    revenueCapital_list: BudgetFormType[] = [
        { value: '1', viewValue: ' Revenue '},
        { value: '2', viewValue: 'Capital'}
    ];
    chargedVoted_list: BudgetFormType[] = [
        { value: '1', viewValue: 'Charged'},
        { value: '2', viewValue: 'Voted'}
    ];
    minister_list: BudgetFormType[] = [
        { value: '1', viewValue: 'Shri Vijaybhai R. Rupani'}
    ];
    separatorKeysCodes: number[] = [ENTER, COMMA, TAB];
    classOneCtrl: FormControl = new FormControl();
    codeCtrl = new FormControl();
    filteredCodes: Observable<string[]>;
    codes: string[] = [];
    codesBreakUP: string[] = [];
    allMainCodes: any[] = [
        { value: '0101', viewValue: '0101 : Pay of Officers Including Grade Pay' },
        { value: '0102', viewValue: '0102 : Pay of Establishment Including Grade Pay' },
        { value: '0103', viewValue: '0103 : Dearness Allowance' },
        { value: '0104', viewValue: '0104 : Other Allowances' },
        { value: '0105', viewValue: '0105 : Leave Travel Concession' },
        { value: '0106', viewValue: '0106 : Reimbursement of Medical Charges' },
        { value: '0107', viewValue: '0107 : Medical Allowance' },
        { value: '0108', viewValue: '0108 : Bonus' },
        { value: '0109', viewValue: '0109 : eave Encashment' },
        { value: '0110', viewValue: '0110 : House Rent Allowance' },
        { value: '0111', viewValue: '0111 : Compensatory Local Allowance' },
        { value: '0113', viewValue: '0113 : Transport Allowance' },
        { value: '0114', viewValue: '0114 : Sumptuary Allowance' },
        { value: '0117', viewValue: '0117 : R.O.P. Arrears Gazetted' },
        { value: '0118', viewValue: '0118 : R.O.P. Arrears Non Gazetted' },
        { value: '0119', viewValue: '0119 : Dearness Pay-Gazetted' },
        { value: '0120', viewValue: '0120 : Dearness Pay-Non-Gazetted' },
        { value: '3131', viewValue: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances' },
        { value: '3132', viewValue: '3132 : Grants-in-Aid General to Panchayats pertaining' },
        { value: '3135-13', viewValue: '3135-13 : Anand Agricultural University' },
        { value: '3135-14', viewValue: '3135-14 : Junagadh Agricultural University' },
        { value: '3135-15', viewValue: '3135-15 : Navsari Agricultural University' },
        { value: '3135-16', viewValue: '3135-16 : Dantiwada Agricultural University' },
        { value: '3200', viewValue: '3200 : Contributions' },
        { value: '3241', viewValue: '3241 : Contributions (a) To Panchayats' },
        { value: '3243', viewValue: '3243 : Contributions (b) To Local Bodies' },
        { value: '3351', viewValue: '3351 : Subsidies (a) To Panchayats' },
        { value: '3353', viewValue: '3353 : Subsidies (b) To Local Bodies' },
        { value: '3161', viewValue: '3561 : Grants for creation of Capital Assets to Panchayats' },
        { value: '3363', viewValue: '3563 : Grants for creation of Capital Assets to Local Bodies' },
    ];

    classType: any[] = [
        { value: '1', viewValue: 'Object Class-1 (Personnel Services and Benefits)' },
        { value: '2', viewValue: 'Object Class-2 (Administrative Expenses)' },
        { value: '3', viewValue: 'Object Class-3 (Contractual Services and Supplies)' },
        { value: '4', viewValue: 'Object Class-4 (Grants Etc.)' },
        { value: '5', viewValue: 'Object Class-5 (Other Expenditure)' },
        { value: '6', viewValue: 'Object Class-6 (Acquisition of Capital Assets and Other Capital Expenditure)' },
        { value: '7', viewValue: 'Object Class-7 (Accounting Adjustment)' },
    ];

    underStateYears_list: any[] = [
        { value: '1', viewValue: '1990' },
        { value: '2', viewValue: '1991' },
        { value: '3', viewValue: '1992' },
        { value: '4', viewValue: '1993' },
        { value: '5', viewValue: '1994' },
        { value: '6', viewValue: '1995' },
        { value: '7', viewValue: '1996' },
        { value: '8', viewValue: '1997' },
        { value: '9', viewValue: '1998' },
        { value: '10', viewValue: '1999' },
        { value: '11', viewValue: '2000' },
        { value: '12', viewValue: '2001' },
        { value: '13', viewValue: '2002' },
        { value: '14', viewValue: '2003' },
        { value: '15', viewValue: '2004' },
        { value: '16', viewValue: '2005' },
        { value: '17', viewValue: '2006' },
        { value: '18', viewValue: '2007' },
        { value: '19', viewValue: '2008' },
        { value: '20', viewValue: '2009' },
        { value: '21', viewValue: '2010' },
        { value: '22', viewValue: '2011' },
        { value: '23', viewValue: '2012' },
        { value: '23', viewValue: '2013' },
        { value: '25', viewValue: '2014' },
        { value: '26', viewValue: '2015' },
        { value: '27', viewValue: '2016' },
        { value: '28', viewValue: '2017' },
        { value: '29', viewValue: '2018' },
        { value: '30', viewValue: '2019' },
        { value: '30', viewValue: '2020' },
    ];

    @ViewChild('codeInput') codeInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;
    displayedColumns = ['objectHead', 'underStatedOperation', 'actualsThirdLastYear',
     'actualsSecondLastYear', 'lastYear', 'criteria', 'endBaseLine', 'improvementFifteen',
    'improvementSixteen', 'improvementEighteen', 'currentYear', 'amountProposedByHod', 'remarks', 'action'];


    subDisplayedColumns = ['objecthead', 'thirdlastyear', 'secondlastyear', 'lastyear', 'currentYear', 'last8month', 'first4month',
        'totalof8and4month', 'col6', 'col7', 'amountProposedByHod', 'remarks', 'action'];

    dataSource = new MatTableDataSource(ELEMENT_DATA);
    recoveryDataSource = new MatTableDataSource(ELEMENT_DATA2);
    dataSourceBreakUp = new MatTableDataSource(ELEMENT_DATA);

    districtColumns = ['position', 'district', 'expendature', 'talukaExpenditure', 'gramExpenditure'];
    districtColumns2 = [
        'position',
        'district',
        'expendature',
        'talukaexpendature',
        'gramexpendature'
      ];
    stateColumns = [
        'position',
        'district',
        'propsedAmount',
      ];
    districtDataSource = new MatTableDataSource(DISTRICT_ELEMENT_DATA);
    districtDataSource2 = new MatTableDataSource(
        DISTRICT_ELEMENT_DATA2.sort((a, b) =>
          a.districtName > b.districtName
            ? 1
            : b.districtName > a.districtName
              ? -1
              : 0
        )
      );
      stateDataSource = new MatTableDataSource(
        DISTRICT_ELEMENT_DATA1.sort((a, b) =>
          a.districtName > b.districtName
            ? 1
            : b.districtName > a.districtName
              ? -1
              : 0
        )
      );
    expendDataSource = new MatTableDataSource(ELEMENT_TAB1_DATA);
    @ViewChild('scrollChargeMe') private myScrollContainer: ElementRef;
    @ViewChild('parentGrids') private parentGrid: ElementRef;
    expendCharges: boolean;
    displayedRojmdarColumns = ['typesofexpenditure', 'noofpost', 'salaries', 'otherallowance', 'total', 'remarks'];
    showObject: string;
    objs_tab1_data = {
        objectHead: '0.00', actualsThirdLastYear: '0.00', actualsSecondLastYear: '0.00', lastYear: '0.00', criteria: '0.00', endBaseLine: '0.00', improvementFifteen: '0.00', currentYear: '0.00', improvementSixteen: '0.00', improvementEighteen: '0.00',
        underStatedOperation: '0.00', amountProposedByHod: '0.00', remarks: ''
    };
    saveCharge: boolean;
    hodAmount: any;
    succObjectCode: Array<any> = [];
    errObjectCode: Array<any> = [];
    public subObjectFilterCtrl: FormControl = new FormControl();
    public filteredSubObjects: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    sObjectHead: CommonList[] = [
    { name: '0101 : Pay of Officers Including Grade Pay', id: '0101' },
    { name: '0102 : Pay of Establishment Including Grade Pay', id: '0102' },
    { name: '0103 : Dearness Allowance', id: '0103' },
    { name: '0104 : Other Allowances', id: '0104' },
    { name: '0105 : Leave Travel Concession', id: '0105' },
    { name: '0106 : Reimbursement of Medical Charges', id: '0106' },
    { name: '0107 : Medical Allowance', id: '0107' },
    { name: '0108 : Bonus', id: '0108' },
    { name: '0109 : eave Encashment', id: '0109' },
    { name: '0110 : House Rent Allowance', id: '0110' },
    { name: '0111 : Compensatory Local Allowance', id: '0111' },
    { name: '0113 : Transport Allowance', id: '0113' },
    { name: '0114 : Sumptuary Allowance', id: '0114' },
    { name: '0117 : R.O.P. Arrears Gazetted', id: '0117' },
    { name: '0118 : R.O.P. Arrears Non Gazetted', id: '0118' },
    { name: '0119 : Dearness Pay-Gazetted', id: '0119' },
    { name: '0120 : Dearness Pay-Non-Gazetted', id: '0120' },
    { name: '3131 : Grants-in-Aid General to Panchayats pertaining to pay and allowances', id: '3131' },
    { name: '3132 : Grants-in-Aid General to Panchayats pertaining', id: '3132' },
    { name: '3135-13 : Anand Agricultural University', id: '3135-13' },
    { name: '3135-14 : Junagadh Agricultural University', id: '3135-14' },
    { name: '3135-15 : Navsari Agricultural University', id: '3135-15' },
    { name: '3135-16 : Dantiwada Agricultural University', id: '3135-16' },
    { name: '3200 : Contributions', id: '3200' },
    { name: '3241 : Contributions (a) To Panchayats', id: '3241' },
    { name: '3243 : Contributions (b) To Local Bodies', id: '3243' },
    { name: '3351 : Subsidies (a) To Panchayats', id: '3351' },
    { name: '3353 : Subsidies (b) To Local Bodies', id: '3153' },
    { name: '3561 : Grants for creation of Capital Assets to Panchayats', id: '3161' },
    { name: '3563 : Grants for creation of Capital Assets to Local Bodies', id: '3363' }, ];

    dataSource1 = new MatTableDataSource(this.sObjectHead);



    private _onDestroy = new
        Subject<void>();
    subObjectId: Array<any> = [];
    selSubObjectId: string;
    date: any = new Date();
    createEstimateForm: FormGroup;
    financialYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  demandCodeCtrl: FormControl = new FormControl();
  majorHeadCodeCtrl: FormControl = new FormControl();
  subMajorHeadCodeCtrl: FormControl = new FormControl();
  minorHeadCodeCtrl: FormControl = new FormControl();
  subHeadCodeCtrl: FormControl = new FormControl();
  detailHeadCodeCtrl: FormControl = new FormControl();
  proposalCategoryCtrl: FormControl = new FormControl();
  majorCategoryCtrl: FormControl = new FormControl();
  proposalTypeCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  objectHeadCtrl: FormControl = new FormControl();
  itemNameCtrl: FormControl = new FormControl();
  establishmentCtrl: FormControl = new FormControl();
  expenditureTypeCtrl: FormControl = new FormControl();
  revenueCapitalCtrl: FormControl = new FormControl();
  chargedVotedCtrl: FormControl = new FormControl();
  ministerInChargeCtrl: FormControl = new FormControl();
  attachmentTypeCtrl: FormControl = new FormControl();
  classTwoCtrl: FormControl = new FormControl();
  filteredAttachmentList: CommonListing[] = [
    { value: '1', viewValue: 'Supporting Document' },
    { value: '2', viewValue: 'Sanction Order' },
    { value: '3', viewValue: 'Other' },
  ];

    CSSPartDiv = true;
    finalSum: number = 0;
    @ViewChild('singleSelect') singleSelect: MatSelect;
    // _onDestroy = new Subject<void>();

    // tslint:disable-next-line:member-ordering
    CSSDetails: CssDetail[] = [
        { year: '2016-17', ration: '3.00', general: '10.25', scsp: '10.00', tasp: '10.00', total: "30.25" },
        { year: '2017-18', ration: '100.00', general: '20.00', scsp: '20.00', tasp: '20.00', total: "60.0" },
        { year: '2018-19 (Till 31-10-2018)', ration: '5.00', general: '30.00', scsp: '30.00', tasp: '30.00', total: "90.00" },
    ];



    dataSourceCSSDetail = new MatTableDataSource(this.CSSDetails);
    displayedColumnsSection = ['year', 'ration', 'general', 'scsp', 'tasp', 'total'];
    displayedColumnsSection1 = ['position', 'year', 'ration', 'general', 'scsp', 'tasp', 'total'];
    schemDetails: any[] = [
        { details: 'CENTRAL', amount: 23.02, persentage: 1.00, amountscpc: 23.02, persentagescpc: 1.00, amounttasp: 23.02, persentagetasp: 1.00, totalSchem: 183.47, },
        { details: 'STATE', amount: 20.02, persentage: 2.00, amountscpc: 300.00, persentagescpc: 5.00, amounttasp: 45.85, persentagetasp: 8.00, totalSchem: 365.87, },
        { details: 'TOTAL', amount: 43.04, persentage: 2, amountscpc: 425.00, persentagescpc: 2, amounttasp: 81.30, persentagetasp: 0, totalSchem: 649.34, },

    ];

    dataSourceschemDetails = new MatTableDataSource(this.schemDetails);
    displayedschemColumnsSection = ['details', 'amount', 'persentage', 'amountscpc',
     'persentagescpc', 'amounttasp', 'persentagetasp', 'totalschem'];
    displayedschemColumnsSection1 = ['position', 'details', 'amount', 'persentage', 'amountscpc',
     'persentagescpc', 'amounttasp', 'persentagetasp', 'totalschem'];

    // tslint:disable-next-line:member-ordering
    outSourceData: any[] = [
        {
            serviceType: 'Testing',
            budgetEstimate: '0.00'
        }
    ];
    dataSourceOutSource = new MatTableDataSource(this.outSourceData);
    EstimateForm: FormGroup;
    tabDisable: Boolean = true;
    doneHeader: Boolean = false;
    selectedindex: number;
    table1 = true;
    table2 = false;
    grantInAid: Boolean;
    showState : boolean = true;
    showCSS : boolean = true;
    public scheme;
    brwoseData: Attachment[] = [{
        name: undefined,
        file: undefined,
    }];

    displayedBrowseColumns = ['position','attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    fileBrowseIndex: any;
    amountProposedData: any;
    constructor(
        private toastr: ToastrService,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private el: ElementRef,
        public dialog: MatDialog,
    ) { }

    subscribeParams: Subscription;



    ngOnInit() {
        this.filteredCodes = this.codeCtrl.valueChanges.pipe(
            startWith(null),
            map((fruit: string | null) => fruit ? this._filter(fruit) : this.allMainCodes.slice()));
        this.initialSubObject();
        this.selectedindex = 1;
        this.createForm();

        this.selectedindex = 1;
        this.createForm();
        this.subscribeParams = this.activatedRoute.params.subscribe(resRoute => {
          //debugger

          this.scheme = resRoute.id

        });
        if (this.scheme == '1') {
          this.showState = true;
          this.showCSS = false;
          // console.log("if" + this.showState +this.showCSS );

        } else if (this.scheme == '2') {
          this.showState = false;
          this.showCSS = true;
          // console.log("elseif" + this.showState +this.showCSS );
        }
      }
      createForm() {
        this.EstimateForm = this.fb.group({
          formType: ['1', Validators.required],
          finYear: ['1', Validators.required],
          departmentCode: ['1', Validators.required],
          branchCode: ['1', Validators.required],
          estimationFrom: ['1', Validators.required],
          estimationFor: ['1', Validators.required],
          demandCode: ['1', Validators.required],
          ministerInCharge: ['1', Validators.required],
          bpnCode: ['1', Validators.required],
          majorHeadCode: ['1', Validators.required],
          subMajorHeadCode: ['1', Validators.required],
          minorHeadCode: ['1', Validators.required],
          subHeadCode: ['1', Validators.required],
          detailHeadCode: ['1', Validators.required],
          chargedVoted: ['2', Validators.required],
          schemeType: ['2', Validators.required],
          cssPercentage: ['1', [Validators.min(0), Validators.max(100)]],
          itemCategory: ['1', Validators.required],
          itemName: ['1', [Validators.required]],
          writeUpEng: ['1', [Validators.required]],
          writeUpGuj: ['1', [Validators.required]],
          financialYear: ['3'],
          proposalCategory: ['4'],
          majorCategory: ['1'],
          proposalType: ['2'],
          objectHead: ['1'],
          itemWorkName: [''],
          writeUpEnglish: [''],
          writeUpGujrati: [''],
          establishment: ['1'],
          expenditureType: ['1'],
          itemNames: [''],
          revenueCapital: ['1'],
          schemeTypeRatio: ['1'],
          noOfMonths: [{value: 13 - new Date().getMonth().valueOf(), disabled: true}],
          classTwo: ['']
        });
        this.EstimateForm.disable();
      }

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

    integerKeyPress(event: any) {
        const pattern = /^\d{0,5}?$/;
        const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
        if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
            return true;
        }
        if (event.target.value.length > 5) {
            event.preventDefault();
            return false;
        }

        if (!pattern.test(inputChar)) {
            event.preventDefault();
            return false;
        }
        return true;
    }
    integerKeyPressValue(event: any) {
        const pattern = /^\d{0,1}?$/;
        const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        const keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
        if (keystobepassedout.indexOf('$' + event.key + '$') !== -1) {
            return true;
        }
        if (event.target.value.length > 2) {
            event.preventDefault();
            return false;
        }

        if (!pattern.test(inputChar)) {
            event.preventDefault();
            return false;
        }
        return true;
    }

    deleteCssDetail(index) {
        this.dataSourceCSSDetail.data.splice(index, 1);
        this.dataSourceCSSDetail = new MatTableDataSource(this.dataSourceCSSDetail.data);
    }

    add(event: MatChipInputEvent): void {

        if (!this.matAutocomplete.isOpen) {
            const input = event.input;
            const value = event.value;
            if ((value || '').trim()) {
                (!this.codes.includes(value) && this.allMainCodes.includes(value)) ? this.codes.push(value.trim()) : '';
            }
            if (this.codes && this.codes.length > 0 && this.allMainCodes.includes(value)) {
                this.applyFilter(value);
            }
            if (input) {
                input.value = '';
            }

            this.codeCtrl.setValue(null);
        }
    }

    remove(fruit: string): void {
        const index = this.codes.indexOf(fruit);

        if (index >= 0) {
            this.codes.splice(index, 1);
        }
    }

    initialSubObject() {
        this.filteredSubObjects.next(this.sObjectHead.slice());
        this.subObjectFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterSubObject();
            });
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        (!this.codes.includes(event.option.viewValue)) ? this.codes.push(event.option.viewValue) : '';
        this.codeInput.nativeElement.value = '';
        this.codeCtrl.setValue(null);
        if (this.codes && this.codes.length > 0 && this.allMainCodes.includes(event.option.viewValue)) {
            this.applyFilter(event.option.viewValue);
        }
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.allMainCodes.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }

    applyFilter(filterValue: string) {
        console.log(filterValue);
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.objectCodeFilterData();
    }

    applyFilterBreakup(filterValue: string) {
        console.log(filterValue);
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.objectCodeFilterDataBreakUp();
    }

    getRowData(index) { }

    showObjectHeadWise : boolean = false;
    showCharge(event, index, element) {
        if (element && element.objectHead && element.criteria && element.endBaseLine && element.improvementFifteen
            && element.currentYear) {

                if (element.objectHead === '3133' ||
                    element.objectHead === '3243' ||
                    element.objectHead === '3353' ||
                    element.objectHead === '3563') {
                        this.grantInAid = true;
                        this.table1 = true;
                        this.table2 = false;
                    } else if (element.objectHead === '3131' ||
                        element.objectHead === '3132' ||
                        element.objectHead === '3241' ||
                        element.objectHead === '3351' ||
                        element.objectHead === '3561' ) {
                            this.grantInAid = true;
                            this.table1 = false;
                            this.table2 = true;
                        } else if (element.objectHead === '3135' ||
                        element.objectHead === '3135-13' ||
                        element.objectHead === '3135-14' ||
                        element.objectHead === '3135-15' ||
                        element.objectHead === '3135-16') {
                            this.grantInAid = false;
                        }

            this.expendCharges = true;
            this.showObjectHeadWise = true;
            this.selSubObjectId = '';
            this.subObjectId = [];
            const data = this.dataSource.data.filter((x, i) => i === index);
            this.dataSource.data = data;
            this.showObject = element.objectHead;
            this.hodAmount = element.amountProposedByHod;
        } else {
            this.toastr.error('Please fill all the details object head!');
        }
    }

    saveStandCharge() { }

    backCharge() {
        this.showObject = '';
        this.expendCharges = false;
        this.objectCodeFilterData();
    }

    objectCodeFilterData() {
        const pdata = ELEMENT_DATA;
        this.dataSource.data = pdata.filter(x => this.codes.includes(x.objectHead));
    }

    objectCodeFilterDataBreakUp() {
        const pdata = ELEMENT_DATA;
        this.dataSourceBreakUp.data = pdata.filter(x => this.codesBreakUP.includes(x.objectHead));
    }
    // objectCodeFilterData1() {
    //     const pdata = this.dataSource1;
    //     this.dataSource1.data = pdata.filter(x => this.codes.includes(x.id));
    // }

    addExpense(showObject) {
        console.log('this.expendDataSource.data', this.expendDataSource.data);
        const expendDatacount = this.expendDataSource.data.length;
        if (this.selSubObjectId) {
            if (this.expendDataSource && this.expendDataSource.data && this.expendDataSource.data.length === 0) {
                this.expendDataSource.data = [{
                    objectHead: this.selSubObjectId, criteria: '0.00', endBaseLine: 0.00,
                    improvementFifteen: 0.00, improvementSixteen: 0.00, improvementEighteen: 0.00,
                    currentYear: 0.00, underStatedOperation: 0.00, actualsThirdLastYear: 0.00, actualsSecondLastYear: 0.00, lastYear: 0.00,
                    amountProposedByHod: 0.00, remarks: ''
                }];
                this.subObjectId.push(this.selSubObjectId);
            } else {
                this.expendDataSource.data.forEach((element, index) => {
                    // element.objectHead = this.subObjectId[index];
                    // if ((this.expendDataSource.data.length === (index + 1)) && element && element.objectHead &&
                    //     element.criteria && element.endBaseLine && element.improvementFifteen
                    //     && element.currentYear && element.amountProposedByHod) {
                    if (element.objectHead) {
                        const p_data = this.expendDataSource.data;
                        this.subObjectId.push(this.selSubObjectId);
                        p_data.push({
                            objectHead: this.selSubObjectId, criteria: '0.00', endBaseLine: 0.00,
                            improvementFifteen: 0.00, improvementSixteen: 0.00, improvementEighteen: 0.00,
                            currentYear: 0.00, underStatedOperation: 0.00, actualsThirdLastYear: 0.00, actualsSecondLastYear: 0.00, lastYear: 0.00,
                            amountProposedByHod: 0.00, remarks: ''
                        });
                        this.expendDataSource.data = p_data;
                    } else if (this.expendDataSource.data.length === (index + 1)) {
                        element.objectHead = this.subObjectId[index];
                        this.toastr.error('Please fill the detail of object head ' + element.objectHead + '');
                    }
                });
            }
        } else {
            this.toastr.error('Please select object head to add expense');
        }
    }

    // addExpense(showObject) {
    //     const expendDatacount = this.expendDataSource.data.length;
    //     if (this.selSubObjectId) {
    //       if (this.expendDataSource && this.expendDataSource.data && this.expendDataSource.data.length === 0) {
    //         this.expendDataSource.data = [{ objecthead: this.selSubObjectId, recurrentAmount: 20.00, nonRecurrentAmount: 20.00, ultimateAnnualRecurrentAmount: 20.00,
    //         budgetEstimateNextYear: 40.00, remarks: ''}];
    //         this.subObjectId.push(this.selSubObjectId);
    //       } else {
    //         this.expendDataSource.data.forEach((element, index) => {
    //             element.objecthead = this.subObjectId[index];
    //             if ((this.expendDataSource.data.length === (index + 1)) && element && element.objecthead &&
    //             element.recurrentAmount && element.nonRecurrentAmount && element.ultimateAnnualRecurrentAmount
    //             && element.budgetEstimateNextYear ) {
    //               const p_data = this.expendDataSource.data;
    //               this.subObjectId.push(this.selSubObjectId);
    //               // element.objecthead = this.subObjectId[index + 1];
    //               p_data.push({ objecthead: this.selSubObjectId, recurrentAmount: 20.00, nonRecurrentAmount: 20.00, ultimateAnnualRecurrentAmount: 20.00,
    //                 budgetEstimateNextYear: 40.00, remarks: ''});
    //               this.expendDataSource.data = p_data;
    //             }
    //         });
    //       }
    //     }
    //     // debugger
    //   }

    getBillNo(data) {
    }

    covertToNumber(data) {
        let returnData = 0;
        if (data.last8month || data.first4month) {
            returnData = Number(data.last8month) + Number(data.first4month);
        }
        return returnData;
    }
    saveAllCharge() {
        let pstatus;
        let expenseHod: any = 0;
        let expendStatus;
        if (this.expendDataSource.data && this.expendDataSource.data.length === 0) {
            this.toastr.error('Please add the expense with selected object head.');
        } else {
            this.expendDataSource.data.forEach((element, index) => {
                if (element.objectHead === '' || element.criteria === '' || element.endBaseLine === '' || element.improvementFifteen === '' ||
                    element.currentYear === '' || element.amountProposedByHod === '') {
                    pstatus = 1;
                } else if (element && element.objectHead &&
                    element.criteria && element.endBaseLine && element.improvementFifteen
                    && element.currentYear && element.amountProposedByHod) {
                    expenseHod = expenseHod + Number(element.amountProposedByHod);
                    if (this.hodAmount !== expenseHod) {
                        pstatus = 2;
                    }
                } else {
                    pstatus = '';
                }
                if (this.expendDataSource.data.length === (index + 1)) {
                    if (pstatus === 1) {
                        this.toastr.error('Please fill the detail for sub object head.');
                    } else if (pstatus === 2) {
                        this.toastr.error('Your proposed HOD amount did not match to main object proposed HOD.');
                    } else {
                        this.toastr.success('Your expendcharges proposed HOD amount matched successfully.');
                        expendStatus = true;
                        return;
                    }
                }
            });
        }

        let sData = 0;
        let districtStatus;
        this.districtDataSource.data.forEach((element, index) => {
            if (element) {
                sData += Number(element.expenditure) + Number(element.talukaExpenditure) + Number(element.gramExpenditure);
            }
            if (this.districtDataSource.data.length === (index + 1)) {
                if (this.hodAmount !== sData) {
                    this.toastr.error('Your district, taluka & gram panchayat expense did not match to main object proposed HOD.');
                } else {
                    this.toastr.success('Your district, taluka & gram panchayat expense matched to main object successfully.');
                    districtStatus = true;
                }
            }
        });

        if (expendStatus && districtStatus && this.districtDataSource.data.length > 0 && this.expendDataSource.data.length > 0) {
            (!this.succObjectCode.includes(this.showObject)) ? this.succObjectCode.push(this.showObject) : '';
            this.backCharge();
        } else if ((expendStatus || districtStatus) && (this.districtDataSource.data.length > 0 && this.expendDataSource.data.length > 0)) {

        }
    }

    saveAllData() {
        this.toastr.success('Data Saved Successfully.');
    }


    protected filterSubObject() {
        if (!this.sObjectHead) {
            return;
        }
        let search = this.subObjectFilterCtrl.value;
        if (!search) {
            this.filteredSubObjects.next(this.sObjectHead.slice());
            return;
        } else {
            search = search.toLowerCase();
        }

        this.filteredSubObjects.next(
            this.sObjectHead.filter(obj => obj.name.toLowerCase().indexOf(search) > -1)
        );
    }


    onBlurMethod() {
    }
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    gotoListing() {
        this.router.navigate(['./budget/budget-list']);
    }

    goToNext() {
        this.tabDisable = false;
        this.selectedindex = 1;
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

    deleteObjectHeadBreakupRow(objIndex) {
        const p_data = this.expendDataSource.data;
        this.subObjectId.splice(objIndex, 1);
        p_data.splice(objIndex, 1);
        this.expendDataSource.data = p_data;
    }

    deleteObjectHeadRow(objIndex) {
        const p_data = this.dataSource.data;
        this.subObjectId.splice(objIndex, 1);
        p_data.splice(objIndex, 1);
        this.dataSource.data = p_data;
    }

    deleteObjectHeadRowBreakUp(objIndex) {
        const p_data = this.dataSourceBreakUp.data;
        this.subObjectId.splice(objIndex, 1);
        p_data.splice(objIndex, 1);
        this.dataSourceBreakUp.data = p_data;
    }

    deleteRecObjectHeadRow(objIndex) {
        const p_data = this.recoveryDataSource.data;
        this.subObjectId.splice(objIndex, 1);
        p_data.splice(objIndex, 1);
        this.recoveryDataSource.data = p_data;
    }
    goToDashboard() { this.router.navigate(['']); }

    goBack() {
        this.expendCharges = false;
        this.showObjectHeadWise = false;

     }
    saveEstimate() { }
    addBrowse() {
        if (this.dataSourceBrowse) {
            const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
            if (data && data.name && data.file) {
                const p_data = this.dataSourceBrowse.data;
                p_data.push({
                    name: undefined,
                    file: undefined,
                });
                this.dataSourceBrowse.data = p_data;
            } else {
                this.toastr.error('Please fill the detail.');
            }
        }
    }

    deleteBrowse(index) {
        this.dataSourceBrowse.data.splice(index, 1);
        this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    }
    onCSSChange(schemeChange) {
        if (schemeChange.value === 3 || schemeChange.value === 1) {
            this.CSSPartDiv = true;
        } else {
            this.CSSPartDiv = false;
        }
    }

    decimalPoint(data, key) {
        data[key] = Number(data[key]).toFixed(2);
    }
    // selectedObjectHead(event): void {
    //     (!this.codes.includes(event.value)) ? this.codes.push(event.value) : '';
    //     this.codeCtrl.setValue(null);
    //     if (this.codes && this.codes.length > 0 && this.allMainCodes.includes(event.value)) {
    //         this.applyFilter(event.value);
    //     }

    // }

    selectedObjectHead(event): void {
        this.codes = [];
        this.codes = event.value ;


        this.codeCtrl.setValue(null);
        if (this.codes.length > 0 ) {
            this.objectCodeFilterData();
        }
    }


    selectCharge(event) {
        this.selSubObjectId = event.value;

        // this.addExpense(this.showObject);
        this.codesBreakUP = [];
        this.codesBreakUP = event.value;
        if (this.codesBreakUP && this.codesBreakUP.length > 0) {
          this.applyFilterBreakup(event.value[0]);
    }

    }




    receveddetails(data) {
        let returnData = 0;
        if (data.general || data.scsp || data.tasp) {
            returnData = Number(data.general) + Number(data.scsp) + Number(data.tasp);
        }

        return returnData;
    }

    receveddetailsTwo(data) {
        let returnData = 0;
        if (data.amount || data.amountscpc || data.amounttasp) {
            returnData = Number(data.amount) + Number(data.amountscpc) + Number(data.amounttasp);

            let sum = parseFloat(this.schemDetails[0].amount == '' ? 0 : this.schemDetails[0].amount) + parseFloat(this.schemDetails[1].amount == '' ? 0 : this.schemDetails[1].amount)
            this.schemDetails[2].amount = sum;

            let sumAmountscpc = parseFloat(this.schemDetails[0].amountscpc == '' ? 0 : this.schemDetails[0].amountscpc) + parseFloat(this.schemDetails[1].amountscpc == '' ? 0 : this.schemDetails[1].amountscpc)
            this.schemDetails[2].amountscpc = sumAmountscpc;

            let sumamounttasp = parseFloat(this.schemDetails[0].amounttasp == '' ? 0 : this.schemDetails[0].amounttasp) + parseFloat(this.schemDetails[1].amounttasp == '' ? 0 : this.schemDetails[1].amounttasp)
            this.schemDetails[2].amounttasp = sumamounttasp;

        }

        return returnData;
    }

    doFinalSum(amount1, amount2) {
        if (amount2 != 0 || amount1 != 0) {
            debugger
            this.finalSum = amount1 + amount2;
        }

    }

    jilla() {
        let amountExp = 0;
        this.districtDataSource.data.forEach((element) => {
          amountExp =  amountExp + Number(element.expenditure);
        });
        return amountExp;
      }
      taluka() {
        let amountExp = 0;
        this.districtDataSource.data.forEach((element) => {
          amountExp =  amountExp + Number(element.talukaExpenditure);
        });
        return amountExp;
      }
      gram() {
        let amountExp = 0;
        this.districtDataSource.data.forEach((element) => {
          amountExp =  amountExp + Number(element.gramExpenditure);
        });
        return amountExp;
      }

    corporation() {
        let amountExp = 0;
        this.districtDataSource2.data.forEach((element) => {
          amountExp =  amountExp + Number(element.expendature);
        });
        return amountExp;
      }
      municipal() {
        let amountExp = 0;
        this.districtDataSource2.data.forEach((element) => {
          amountExp =  amountExp + Number(element.talukaexpendature);
        });
        return amountExp;
      }
      notifiedArea() {
        let amountExp = 0;
        this.districtDataSource2.data.forEach((element) => {
          amountExp =  amountExp + Number(element.gramexpendature);
        });
        return amountExp;
      }

      calcActualsThirdLastYear() {
        let calcActualsThirdLastYear = 0;
        this.dataSource.data.forEach((element, index) => {
            calcActualsThirdLastYear =
          calcActualsThirdLastYear + Number(element.actualsThirdLastYear);
        });
        return calcActualsThirdLastYear;
      }

      calcActualsSecondLastYear() {
        let calcActualsSecondLastYear = 0;
        this.dataSource.data.forEach((element, index) => {
            calcActualsSecondLastYear =
            calcActualsSecondLastYear + Number(element.actualsSecondLastYear);
        });
        return calcActualsSecondLastYear;
      }

      calcLastYear() {
        let calcLastYear = 0;
        this.dataSource.data.forEach((element, index) => {
            calcLastYear =
            calcLastYear + Number(element.lastYear);
        });
        return calcLastYear;
      }

      calcCriteria() {
        let calcCriteria = 0;
        this.dataSource.data.forEach((element, index) => {
            calcCriteria =
            calcCriteria + Number(element.criteria);
        });
        return calcCriteria;
      }

      calcEndBaseLine() {
        let calcEndBaseLine = 0;
        this.dataSource.data.forEach((element, index) => {
            calcEndBaseLine =
            calcEndBaseLine + Number(element.endBaseLine);
        });
        return calcEndBaseLine;
      }

      calcImprovementFifteen() {
        let calcImprovementFifteen = 0;
        this.dataSource.data.forEach((element, index) => {
            calcImprovementFifteen =
            calcImprovementFifteen + Number(element.improvementFifteen);
        });
        return calcImprovementFifteen;
      }

      calcImprovementSixteen() {
        let calcImprovementSixteen = 0;
        this.dataSource.data.forEach((element, index) => {
            calcImprovementSixteen =
            calcImprovementSixteen + Number(element.improvementSixteen);
        });
        return calcImprovementSixteen;
      }

      calcImprovementEighteen() {
        let calcImprovementEighteen = 0;
        this.dataSource.data.forEach((element, index) => {
            calcImprovementEighteen =
            calcImprovementEighteen + Number(element.improvementEighteen);
        });
        return calcImprovementEighteen;
      }

      calcCurrentYear() {
        let calcCurrentYear = 0;
        this.dataSource.data.forEach((element, index) => {
            calcCurrentYear =
            calcCurrentYear + Number(element.currentYear);
        });
        return calcCurrentYear;
      }

      calcAmountProposedByHod() {
        let calcAmountProposedByHod = 0;
        this.dataSource.data.forEach((element, index) => {
            calcAmountProposedByHod =
            calcAmountProposedByHod + Number(element.amountProposedByHod);
        });
        return calcAmountProposedByHod;
      }

      openHistory(data) {

        // const arra = this.toggleContainer.nativeElement.classList[2];
        // console.log(arra);
        data.isSelected = true;
        // this.toggleContainer.nativeElement.classList.add('toggle-bar');
        // this.historyDataSource = new MatTableDataSource(HISTORY_DATA);
        this.showHistoryDialog();
      }

      showHistoryDialog(): void {

        const dialogData = new ConfirmDialogModel();

        const dialogRef = this.dialog.open(StandingChargeConsolidateHistoryComponent, {
          maxWidth: '400px',
          data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
          console.log(dialogResult);
        });
      }

      viewComments(): void {
        const dialogRef = this.dialog.open(ItemContEstimateViewCommentsComponent, {
          width: '2700px',
          height: '600px'
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result === 'no') {
            console.log('The dialog was closed', result);
          } else if (result === 'yes') {
            console.log('The dialog was closed', result);
            this.showConfirmationPopup();
          }
        });
      }
      submitToNextLevel(): void {
        const dialogRef = this.dialog.open(ItemContEstimateDialogComponent, {
          width: '2700px',
          height: '600px'
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result === 'no') {
            console.log('The dialog was closed', result);
          } else if (result === 'yes') {
            console.log('The dialog was closed', result);
            this.showConfirmationPopup();
          }
        });
      }
      showConfirmationPopup() {
        const dialogRef = this.dialog.open(ItemContEstimateConfirmDialogComponent, {
          width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result === 'no') {
            console.log(result);
          } else if (result === 'save') {
            console.log(result);
          }
        });
      }
}


@Component({
  selector: 'app-item-con-estimate-forward-dialog',
  templateUrl: 'item-con-estimate-forward-dialog.html',
  styleUrls: ['./create-budget-estimate.component.css']
})
export class ItemContEstimateDialogComponent implements OnInit {
  showAction: Boolean = true;

  fileBrowseIndex: number;
  date: any = new Date();
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = [
    'position',
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'action'
  ];
  headerJso: HeaderElement[] = [
    { label: 'Budget Publication Number', value: '03: Agriculture, Famers welfare and Co-operation Department' },
    { label: 'Name of the Branch', value: 'J Branch' },
    { label: 'Estimation From', value: 'Director of Horticulture' },
    { label: 'State / CSS', value: 'Partially Centrally Sponsored Scheme' },
    { label: '% Ratio of State Burden', value: '60%' },
    { label: '% Ratio of CSS Burden', value: '40%' },
    { label: 'Item Name', value: 'Fodder and feed Development Scheme' },
    { label: 'Sector', value: 'C-Economic Services' },
    { label: 'Sub Sector', value: '(a) Agriculture and Allied Activities' },
  ];

  displayData = false;

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
  sample = 'src/assets/img/pdf-test.pdf';
  fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
  show = false;
  page = 1;
  totalPages: number;
  isLoaded = false;
  sampleFlag: boolean;
  tabDisable: Boolean = true;
  selectedIndex: number;

  actionForm: FormGroup;
  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department'
  };

  forwardDialog_history_list: any[] = [
    {
      id: 3,
      userName: 'Shri P M Shah',
      designation: 'Deputy Secretaryr',
      role: 'Approver',
      date: '11/11/2019',
      comment: 'We may approve'
    },
    {
      id: 2,
      userName: 'Shri C Patel',
      designation: 'Section Officer',
      role: 'Verifier',
      date: '10/11/2019',
      comment: 'We may approve'
    },
    {
      id: 1,
      userName: 'Shri S M Modi',
      designation: 'Deputy Section Officer',
      role: 'Creator',
      date: '1/11/2019',
      comment:
        // tslint:disable-next-line: max-line-length
        'Please correct standing charge estimate for object head and correct all the calculations.Please verify last 3 year account as well as CSS grant received till date.Ask cooncerned officer from respective office to send necessay details at the earliest to department.'
    }
  ];

  action_list: any[] = [
    { value: '1', viewValue: 'Forward' }
  ];

  user_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala (DDO)' }
  ];

  attachmentType_list: any[] = [
    {value: '1', viewValue: 'Supporting Document'},
    {value: '2', viewValue: 'Sanction Order'},
    {value: '3', viewValue: 'Other'},
];
  branch_list: any[] = [
    { value: '1', viewValue: 'A Branch' },
    { value: '2', viewValue: 'CH Branch' },
    { value: '3', viewValue: 'CASH Branch' },
    { value: '4', viewValue: 'REGISTRY Branch' }
  ];
  branchCtrl: FormControl = new FormControl();
  filteredBranch: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  userCodeCtrl: FormControl = new FormControl();
  filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  private _onDestroy = new Subject<void>();

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StandingChargeForwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private el: ElementRef
  ) { }

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    this.createForm();

    if (this.branch_list) {
      this.filteredBranch.next(this.branch_list.slice());
    }
    this.branchCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchCtrl.value,
          this.filteredBranch
        );
      });

    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.action_list,
          this.actionCtrl.value,
          this.filteredAction
        );
      });

    if (this.user_list) {
      this.filteredUserCode.next(this.user_list.slice());
    }
    this.userCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.user_list,
          this.userCodeCtrl.value,
          this.filteredUserCode
        );
      });
    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.attachmentType_list,
          this.attachmentTypeCodeCtrl.value,
          this.filteredAttachmentTypeCode
        );
      });
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.actionForm.patchValue({
      actionCode: '1',
      userCode: '1'
    });
  }

  backToAction() {
    this.showAction = true;
    this.show = false;

  }

  gotoListing() {
    this.router.navigate(['./budget/standing-charge-list']);
  }

  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
    filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }
  uploadAttachment() {
    this.tabDisable = false;
    this.selectedIndex = 2;
  }
  createForm() {
    this.actionForm = this.fb.group({
      actionCode: ['', Validators.required],
      userCode: ['', Validators.required],
      branch: ['']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  nextPage() {
    this.page += 1;
    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
  }

  previousPage() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
    }
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
  }



  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if ((this.showAction = true)) {
          this.showAction = false;
        }
        if (this.attachment[i].fileName == data.fileName) {
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
        // this.attachment[i].imgStatus? false : '';
        // this.attachment[i].pdfStatus? false : '';
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
    console.log(data);
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }
}

@Component({
  selector: 'app-item-con-estimate-confirm-dialog',
  templateUrl: './item-con-estimate-confirm-dialog.html',
  styleUrls: ['./create-budget-estimate.component.css']
})
export class ItemContEstimateConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ItemContEstimateConfirmDialogComponent>
  ) { }

  ngOnInit() { }

  onCancel(): void {
    this.dialogRef.close('no');
  }

  onSave(): void {
    this.dialogRef.close('save');
  }
}

@Component({
  selector: 'app-item-con-estimate-view-comments-dialog',
  templateUrl: 'item-con-estimate-view-comments-dialog.html',
  styleUrls: ['./create-budget-estimate.component.css']
})
export class ItemContEstimateViewCommentsComponent implements OnInit {
  // showAction: Boolean = true;

  fileBrowseIndex: number;
  date: any = new Date();
  brwoseData: any[] = [
    {
      name: undefined,
      file: undefined
    }
  ];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  displayedBrowseColumns = [
    'attachmentType',
    'fileName',
    'browse',
    'uploadedFileName',
    'action'
  ];
  headerJso: HeaderElement[] = [
    { label: 'Budget Publication Number', value: '03: Agriculture, Famers welfare and Co-operation Department' },
    { label: 'Name of the Branch', value: 'J Branch' },
    { label: 'Estimation From', value: 'Director of Horticulture' },
    { label: 'State / CSS', value: 'Partially Centrally Sponsored Scheme' },
    { label: '% Ratio of State Burden', value: '60%' },
    { label: '% Ratio of CSS Burden', value: '40%' },
    { label: 'Item Name', value: 'Fodder and feed Development Scheme' },
    { label: 'Sector', value: 'C-Economic Services' },
    { label: 'Sub Sector', value: '(a) Agriculture and Allied Activities' },
  ];

  displayData = false;

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
  sample = 'src/assets/img/pdf-test.pdf';
  fieldArray = Array.apply(null, { length: 10 }).map(Number.call, Number);
  show = true;
  page = 1;
  totalPages: number;
  isLoaded = false;
  sampleFlag: boolean;



  actionForm: FormGroup;

  errorMessages = {
    FIN_YEAR: 'Please select any Financial Year',
    DEPARTMENT: 'Please select any Department'
  };

  master_checked = false;
  master_indeterminate = false;

  forwardDialog_history_list: any[] = [
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 1,
      userName: 'Shri P M Shah',
      designation: 'Deputy Secretary',
      role: 'Approver',
      date: '11/11/2019',
      comment: 'We may approve'
    },
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 2,
      userName: 'Shri C Patel',
      designation: 'Section Officer',
      role: 'Verifier',
      date: '10/11/2019',
      comment: 'We may approve'
    },
    {
      disabled: false,
      checked: false,
      labelPosition: 'after',
      id: 3,
      userName: 'Shri S M Modi',
      designation: 'Deputy Section Officer',
      role: 'Creator',
      date: '1/11/2019',
      comment:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  action_list: any[] = [
    { value: '1', viewValue: 'Forward' }
  ];

  user_list: any[] = [
    { value: '1', viewValue: 'Satendra Zala (DDO)' }
  ];

  attachmentType_list: any[] = [{ value: '1', viewValue: 'WorkFlow' }];
  branch_list: any[] = [
    { value: '1', viewValue: 'A Branch' },
    { value: '2', viewValue: 'CH Branch' },
    { value: '3', viewValue: 'CASH Branch' },
    { value: '4', viewValue: 'REGISTRY Branch' }
  ];

  branchPopupCtrl: FormControl = new FormControl();
  branchPopupType: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  actionCtrl: FormControl = new FormControl();
  filteredAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  userCodeCtrl: FormControl = new FormControl();
  filteredUserCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  attachmentTypeCodeCtrl: FormControl = new FormControl();
  filteredAttachmentTypeCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(
    1
  );

  private _onDestroy = new Subject<void>();

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ItemContEstimateViewCommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private el: ElementRef
  ) { }

  filteredOptions: Observable<string[]>;
  options: any;
  myControl = new FormControl();
  additionalText = new FormControl();

  ngOnInit() {
    this.createForm();

    if (this.action_list) {
      this.filteredAction.next(this.action_list.slice());
    }
    this.actionCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.action_list,
          this.actionCtrl.value,
          this.filteredAction
        );
      });
    if (this.user_list) {
      this.filteredUserCode.next(this.user_list.slice());
    }
    this.branchPopupCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.branch_list,
          this.branchPopupCtrl.value,
          this.branchPopupType
        );
      });

    this.userCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.user_list,
          this.userCodeCtrl.value,
          this.filteredUserCode
        );
      });

    this.filteredAttachmentTypeCode.next(this.attachmentType_list.slice());
    this.attachmentTypeCodeCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterObjValue(
          this.attachmentType_list,
          this.attachmentTypeCodeCtrl.value,
          this.filteredAttachmentTypeCode
        );
      });
    console.log('data', this.data);
    this.options = this.data;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.actionForm.patchValue({
      actionCode: '1',
      userCode: '1'
    });
  }

  gotoListing() {
    this.router.navigate(['./budget/standing-charge-list']);
  }

  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
    filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }

  createForm() {
    this.actionForm = this.fb.group({
      actionCode: ['', Validators.required],
      userCode: ['', Validators.required],
      branchPopupCode: ['']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

  forwardConsolidate() {
    console.log('forwardConsolidate');
    this.dialogRef.close('yes');
  }

  nextPage() {
    this.page += 1;
    if (this.page > this.totalPages) {
      this.page = this.totalPages;
    }
  }

  previousPage() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
    }
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
  }

  checkDisplayFile(data) {
    for (let i = 0; i < this.attachment.length; i++) {
      if (data.fileType === 'image') {
        if (this.attachment[i].fileName == data.fileName) {
          this.attachment[i].imgStatus = !this.attachment[i].imgStatus;
          this.show = this.attachment[i].imgStatus ? true : false;
        } else {
          this.attachment[i].imgStatus = false;
        }
      } else if (data.fileType === 'pdf') {
        if (this.attachment[i].fileName === data.fileName) {
          this.attachment[i].pdfStatus = !this.attachment[i].pdfStatus;
          this.show = this.attachment[i].pdfStatus ? true : false;
        } else {
          this.attachment[i].pdfStatus = false;
        }
      } else {
        // this.attachment[i].imgStatus? false : '';
        // this.attachment[i].pdfStatus? false : '';
      }
      if (this.show === false) {
        if (this.attachment[i].fileType === 'image') {
          this.attachment[i].imgStatus = false;
        } else if (this.attachment[i].fileType === 'pdf') {
          this.attachment[i].pdfStatus = false;
        }
      }
    }
    console.log(data);
    // return data;
  }

  onFileSelection(fileSelected) {
    if (fileSelected.target && fileSelected.target.files) {
      this.dataSourceBrowse.data[this.fileBrowseIndex].file =
        fileSelected.target.files[0];
    }
  }

  openFileSelector(index) {
    this.el.nativeElement.querySelector('#fileBrowse').click();
    this.fileBrowseIndex = index;
  }

  onBrowseSelectChange() { }

  addBrowse() {
    if (this.dataSourceBrowse) {
      const data = this.dataSourceBrowse.data[
        this.dataSourceBrowse.data.length - 1
      ];
      if (data && data.name && data.file) {
        const p_data = this.dataSourceBrowse.data;
        p_data.push({
          name: undefined,
          file: undefined
        });
        this.dataSourceBrowse.data = p_data;
      } else {
        this.toastr.error('Please fill the detail.');
      }
    }
  }

  deleteBrowse(index) {
    this.dataSourceBrowse.data.splice(index, 1);
    this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
  }

  master_change() {
    for (let value of Object.values(this.forwardDialog_history_list)) {
      value.checked = this.master_checked;
    }
  }

  list_change() {
    let checked_count = 0;
    for (let value of Object.values(this.forwardDialog_history_list)) {
      if (value.checked) { checked_count++; }
    }

    if (
      checked_count > 0 &&
      checked_count < this.forwardDialog_history_list.length
    ) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    } else if (checked_count == this.forwardDialog_history_list.length) {
      // tslint:disable-next-line: comment-format
      //If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    } else {
      // tslint:disable-next-line: comment-format
      //If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }
}
