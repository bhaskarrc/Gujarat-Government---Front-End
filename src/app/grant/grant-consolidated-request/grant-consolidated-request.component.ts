import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { SUBDETAILHEADgrant, SUBDETAILHEAD_LISTgrant } from 'src/app/model/grant-consolidated-request';
import { ListValue } from 'src/app/model/common-grant';

@Component({
    selector: 'app-grant-consolidated-request',
    templateUrl: './grant-consolidated-request.component.html',
    styleUrls: ['./grant-consolidated-request.component.css']
})
export class GrantConsolidatedRequestComponent implements OnInit {

    demand_list: ListValue[] = [
        {
            value: '1', viewValue: '84:Non-Residential Buildings'
        },
        { value: '2', viewValue: ' 85:Residential Buildings' },
        { value: '3', viewValue: '93: Welfare of Scheduled Tribes' },
        { value: '4', viewValue: '95: Scheduled Castes Sub Plan' },
        { value: '5', viewValue: '96:Tribal Area Sub-Plan' },
    ];
    majorHead_list: ListValue[] = [
        { value: '1', viewValue: '2058:Stationery and Printing' },
        { value: '2', viewValue: '2071:Pensions and Other Retirement Benefits' },
        { value: '3', viewValue: '2401:Crop Husbandry' },
        { value: '4', viewValue: '2425:Co-operation' },
        { value: '5', viewValue: '3451:Secretariat-Economic Services' },
        { value: '6', viewValue: '4058:Capital Outlay on Stationery and Printing' },
        { value: '7', viewValue: '5475:Capital Outlay on other General Economics Services' },
    ];
    budgetEstimateType_list: ListValue[] = [
        { value: '1', viewValue: 'Standing Charges' },
        { value: '2', viewValue: 'New Item Estimate' },
        { value: '3', viewValue: 'Item Continuous Estimate' },
        { value: '4', viewValue: 'New Work Estimate' },
        { value: '5', viewValue: 'Work in Progress' },
    ];
    item_list: ListValue[] = [
        { value: '1', viewValue: 'Item 1' },
        { value: '2', viewValue: 'Item 2' },
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
    chargedVoted_list: ListValue[] = [
        { value: '1', viewValue: 'Charged' },
        { value: '2', viewValue: 'Voted' }
    ];
    department_list: ListValue[] = [
        { value: '1', viewValue: 'Finance Department' }
    ];


    SUBDETAILHEAD: any[] = [
        {
            position: 1, scheme: '001:2404:00:800: 01:00  Item 1 (New Item Estimate)', schemey: 'State',
            budgetEstimates: '15000',
            revisedBudgetEstimate: '80.00', actulExpenditure: '30.00', probableExpenditure: '30.00', totExcssDemad: '170.0000',
            departmentName: '10',
        },
        {
            position: 2, scheme: '001:2404:00:800: 02:00 Item 2 (New Item Estimate)', schemey: 'State',
            budgetEstimates: '15000',
            revisedBudgetEstimate: '40.00', actulExpenditure: '30.00', probableExpenditure: '30.00', totExcssDemad: '170.0000',
            departmentName: '80',
        },
        {
            position: 3, scheme: '001:2404:00:800: 03:00 Item 3 (New Item Estimate)  ', schemey: 'State',
            budgetEstimates: '15000',
            revisedBudgetEstimate: '50.00', actulExpenditure: '40.00', probableExpenditure: '50.00',
            totExcssDemad: '150.0000',
            departmentName: '90',
        }
    ];




    displayedSubDetailHeadColumns: string[] = [
        'position', 'scheme', 'schemey', 'budgetEstimates', 'revisedBudgetEstimate',
        'actulExpenditure', 'probableExpenditure',
        'totExcssDemad', 'departmentName'

    ];

    grantConsolidatedForm: FormGroup;
    demandCtrl: FormControl = new FormControl();
    majorHeadCtrl: FormControl = new FormControl();
    subMajorHeadCtrl: FormControl = new FormControl();
    minorHeadCtrl: FormControl = new FormControl();
    subHeadCtrl: FormControl = new FormControl();
    chargedVotedCtrl: FormControl = new FormControl();
    departmentCtrl: FormControl = new FormControl();
    budgetEstimateTypeCtrl: FormControl = new FormControl();
    subDetailHeadSource = new MatTableDataSource<any>(this.SUBDETAILHEAD);
    itemCtrl: FormControl = new FormControl();
    finYearCtrl: FormControl = new FormControl();
    initiatiomdate = new Date((new Date()));
    statusCtrl: FormControl = new FormControl();
    finYear_list: any[] = [
        { value: '1', viewValue: '2019-2020' },
        { value: '2', viewValue: '2020-2021' },
    ];
    status_list: any[] = [
        { value: '1', viewValue: 'Approved' },
        { value: '2', viewValue: 'Pending' },
        { value: '3', viewValue: 'Draft' },

    ];
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.grantConsolidatedForm = this.fb.group({
            demand: [''],
            majorHead: [''],
            subMajorHead: [''],
            minorHead: [''],
            subHead: [''],
            chargedVoted: [''],
            department: [''],
            budgetEstimateType: [''],
            item: [''],
            finYear: ['1'],
            dtatus: ['']
        });
    }

}

