
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { RedistrubutionList } from 'src/app/model/re-distribution-process';
import { BudgetFormType } from 'src/app/model/budget';

@Component({
    selector: 'app-re-distribution-process-list',
    templateUrl: './re-distribution-process-list.component.html',
    styleUrls: ['./re-distribution-process-list.component.css']
})
export class ReDistributionProcessListComponent implements OnInit {

    constructor(private fb: FormBuilder) { }
    searchGrantOrder: FormGroup;

    finYear: object[] = [
        { value: '2011-12', viewValue: '2011-2012' },
        { value: '2012-13', viewValue: '2012-2013' },
        { value: '2013-14', viewValue: '2013-2014' },
        { value: '2014-15', viewValue: '2014-2015' },
        { value: '2015-16', viewValue: '2015-2016' },
        { value: '2016-17', viewValue: '2016-2017' },
        { value: '2017-18', viewValue: '2017-2018' },
        { value: '2018-19', viewValue: '2018-2019' },
        { value: '2019-20', viewValue: '2019-2020' },
        { value: '2020-21', viewValue: '2020-2021' }
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
    detailHead_list: any[] = [
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
    majorHead_list: any[] = [
        { value: '1', viewValue: '3451:Secretariat-Economic Services' },
        { value: '2', viewValue: '5475:Capital Outlay on other General Economics Services' },
        { value: '3', viewValue: '2401:Crop Husbandry' },
        { value: '4', viewValue: '2071:Pensions and Other Retirement Benefits' },
        { value: '5', viewValue: '2058:Stationery and Printing' },
    ];
    revenueCapital: object[] = [
        { value: '01', viewValue: 'Revenue' },
        { value: '02', viewValue: 'Capital' }
    ];
    fundType: object[] = [
        { value: '01', viewValue: 'Consolidated' },
        { value: '02', viewValue: 'Contingency' }
    ];
    status_list: any[] = [
        { value: '01', viewValue: 'Approevd' },
        { value: '02', viewValue: 'Cancelled' },
        { value: '03', viewValue: 'Draft' },
        { value: '04', viewValue: 'Rejected' },
        { value: '05', viewValue: 'Pending' }
    ];
    wStatus_list: any[] = [
        { value: '01', viewValue: 'Forwarded to Verifier' },
        { value: '02', viewValue: 'Approved by DDO' },
        { value: '03', viewValue: 'Approved by CO' },
        { value: '04', viewValue: 'Rejected' },
        { value: '05', viewValue: 'Cancelled' }
    ];


    grantOrderDisplayColumn: string[] = [
        'srNo', 'budgetHead', 'expenditure', 'reDistributionOrderNo', 'dateOfSub', 'approvalDate',
        'budgetEstimate', 'reDistribution', 'workFlow', 'status', 'lying', 'action'
    ];
    grantOrderList: any[] = [
        {
            budgetHead: '001:2404:00:800:01:00 Item 2 (New Item Estimate)', budgetEstimate: '50000',
            reDistribution: '587489', expenditure: '40000',
            reDistributionOrderNo: 'BU/012', dateOfSub: '21-04-2020', approvalDate: '22-04-2020',
            workFlow: 'Forwarded to Verifier', status: 'Approved', lying: 'Mr. Raju',
        },
        {
            budgetHead: '001:2404:00:800:01:00 Item 2 (New Item Estimate)', budgetEstimate: '50000',
            reDistribution: '587489', expenditure: '40000',
            reDistributionOrderNo: 'BU/012', dateOfSub: '21-04-2020', approvalDate: '22-04-2020',
            workFlow: 'Approved by DDO', status: 'Cancelled', lying: 'Mr. Raju',
        },
        {
            budgetHead: '001:2404:00:800:01:00 Item 2 (New Item Estimate)', budgetEstimate: '50000',
            reDistribution: '587489', expenditure: '40000',
            reDistributionOrderNo: 'BU/012', dateOfSub: '21-04-2020', approvalDate: '22-04-2020',
            workFlow: 'Approved by CO', status: 'Draft', lying: 'Mr. Raju',
        },
        {
            budgetHead: '001:2404:00:800:01:00 Item 2 (New Item Estimate)', budgetEstimate: '50000',
            reDistribution: '587489', expenditure: '40000',
            reDistributionOrderNo: 'BU/012', dateOfSub: '21-04-2020', approvalDate: '22-04-2020',
            workFlow: 'Rejected', status: 'Rejected', lying: 'Mr. Raju',
        },
        {
            budgetHead: '001:2404:00:800:01:00 Item 2 (New Item Estimate)', budgetEstimate: '50000',
            reDistribution: '587489', expenditure: '40000',
            reDistributionOrderNo: 'BU/012', dateOfSub: '21-04-2020', approvalDate: '22-04-2020',
            workFlow: 'Cancelled', status: 'Pending', lying: 'Mr. Raju',
        },
    ];
    grantOrderDataSource = new MatTableDataSource(this.grantOrderList);
    finYearCtrl: FormControl = new FormControl();
    revenueCapitalCtrl: FormControl = new FormControl();
    fundTypeCtrl: FormControl = new FormControl();
    statusCtrl: FormControl = new FormControl();
    majorHeadCodeCtrl: FormControl = new FormControl();
    subMajorHeadCodeCtrl: FormControl = new FormControl();
    minorHeadCodeCtrl: FormControl = new FormControl();
    subHeadCodeCtrl: FormControl = new FormControl();
    detailHeadCodeCtrl: FormControl = new FormControl();
    ngOnInit() {
        this.searchGrantOrder = this.fb.group({
            finYear: ['2'],
            revenueCapital: [''],
            fundType: [''],
            grantOrderId: [''],
            grantOrderNo: [''],
            status: [''],
            lyingWith: [''],
            majorHeadCode: [''],
            subMajorHeadCode: [''],
            minorHeadCode: [''],
            subHeadCode: [''],
            detailHeadCode: [''],
        });
    }
    searchGrantOrderDetails() { }
}

