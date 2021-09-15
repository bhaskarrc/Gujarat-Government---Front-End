

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { RequestForGrantList } from 'src/app/model/request-for-grant';
import { ListValue } from 'src/app/model/common-grant';

@Component({
    selector: 'app-request-for-grant-list',
    templateUrl: './request-for-grant-list.component.html',
    styleUrls: ['./request-for-grant-list.component.css']
})
export class RequestForGrantListComponent implements OnInit {

    constructor(private fb: FormBuilder) { }
    searchGrantOrder: FormGroup;

    finYear: ListValue[] = [
        { value: '1', viewValue: '2019-2020' },
        { value: '2', viewValue: '2020-2021' }
    ];

    revenueCapital: ListValue[] = [
        { value: '01', viewValue: 'Revenue' },
        { value: '02', viewValue: 'Capital' }
    ];
    fundType: ListValue[] = [
        { value: '01', viewValue: 'Consolidated' },
        { value: '02', viewValue: 'Contingency' }
    ];
    status_list: ListValue[] = [
        { value: '01', viewValue: 'Approevd' },
        { value: '02', viewValue: 'Cancelled' },
        { value: '03', viewValue: 'Draft' },
        { value: '04', viewValue: 'Rejected' },
        { value: '05', viewValue: 'Pending' }
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

    grantOrderDisplayColumn: string[] = [
        'srNo', 'headOfAccount', 'itemWorkName', 'sanctionedGrant', 'revisedEstimate', 'expenditureDate',
        'amountSurrender', 'surrenderSaving', 'approvedAmount', 'remarks', 'status', 'action'
    ];
    grantOrderList: any[] = [
        {
            headOfAccount: '001:2404:00:800:01:00 Item 1 (New Item Estimate)',
            itemWorkName: 'Item Name 1',
            sanctionedGrant: 'Object Class 1',
            sanctionedGrant1: 'Object Class 2',
            sanctionedGrant2: 'Object Class 3',
            revisedEstimate: ' 50000', expenditureDate: '2000',
            amountSurrender: '2500', surrenderSaving: '30-January-2020', approvedAmount: 2000, remarks: ' Remarks...', status: 'Pending',
            detailHeadDiscriptionAtoolTip: 'C1: Personal Service and Benefit',
            detailHeadDiscriptionBtoolTip: 'C2: Personal Service and Benefit',
            detailHeadDiscriptionCtoolTip: 'C3: Personal Service and Benefit',
        },
        {
            headOfAccount: '001:2404:00:800:02:00 Item 2 (New Item Estimate)',
            itemWorkName: 'Item Name 2',
            sanctionedGrant: 'Object Class 1',
            sanctionedGrant1: 'Object Class 2',
            sanctionedGrant2: 'Object Class 3',
            revisedEstimate: ' 60000', expenditureDate: '2500',
            amountSurrender: '1500', surrenderSaving: '12-Mar-2020 ', approvedAmount: 5000, remarks: ' Remarks...', status: 'Approved',
            detailHeadDiscriptionAtoolTip: 'C1: Personal Service and Benefit',
            detailHeadDiscriptionBtoolTip: 'C2: Personal Service and Benefit',
            detailHeadDiscriptionCtoolTip: 'C3: Personal Service and Benefit',
        }
    ];
    ELEMENT_DATA: any[] = [
        {
            type: 'State',
            budgetHead: '001:2404:00:800 :01:00 (New Item Estimate) ',
            typeOfreq: 'Additional Authorization of Grant',
            itemName: 'Item 1',
            budgetEstimate: '1000.000',
            revisedEstimate: '1100.0000', probableExpenditure: '1000.0000', avilableGrant: 748541,
            requestedAmount: '100.0000', orderNo: 'Order 1', orderDate: '25-04-2020', workFlowStatus: 'Forwarded to Verifier',
            approvedAmount: '50.0000',
            status: 'Pending',
        },
        {
            type: 'CSS',
            budgetHead: '001:2404:00:800 :02:00 (New Item Estimate) ',
            typeOfreq: 'Advance Grant',
            itemName: 'Item 2',
            budgetEstimate: '1000.000',
            revisedEstimate: '1100.0000', probableExpenditure: '1000.0000', avilableGrant: 748541,
            requestedAmount: '100.0000', orderNo: 'Order 1', orderDate: '25-04-2020', workFlowStatus: 'Approved by DDO',
            approvedAmount: '50.0000',
            status: 'Pending',
        },
        {
            type: 'State',
            budgetHead: '001:2404:00:800 :03:00 (New Item Estimate) ',
            typeOfreq: 'Additional Authorization of Grant',
            itemName: 'Item 3',
            budgetEstimate: '1000.000',
            revisedEstimate: '1100.0000', probableExpenditure: '1000.0000', avilableGrant: 748541,
            requestedAmount: '100.0000', orderNo: 'Order 1', orderDate: '25-04-2020', workFlowStatus: 'Approved by CO',
            approvedAmount: '50.0000',
            status: 'Approved',
        },
        {
            type: 'CSS',
            budgetHead: '001:2404:00:800 :04:00 (New Item Estimate) ',
            typeOfreq: 'Advance Grant',
            itemName: 'Item 4',
            budgetEstimate: '1000.000',
            revisedEstimate: '1100.0000', probableExpenditure: '1000.0000', avilableGrant: 748541,
            requestedAmount: '100.0000', orderNo: 'Order 1', orderDate: '25-04-2020', workFlowStatus: 'Rejected',
            approvedAmount: '50.0000',
            status: 'Rejected',
        },
        {
            type: 'State',
            budgetHead: '001:2404:00:800 :04:00 (New Item Estimate) ',
            typeOfreq: 'Additional Authorization of Grant',
            itemName: 'Item 5',
            budgetEstimate: '1000.000',
            revisedEstimate: '1100.0000', probableExpenditure: '1000.0000', avilableGrant: 748541,
            requestedAmount: '100.0000', orderNo: 'Order 1', orderDate: '25-04-2020', workFlowStatus: 'Cancelled',
            approvedAmount: '50.0000',
            status: 'Cancelled',
        },

    ];

    displayedGrantColumns: string[] =
        ['srNo', 'typeOfreq', 'budgetHead', 'itemWorkName', 'type', 'budgetEstimate',
            'revisedEstimate', 'probableExpenditure', 'requestedAmount', 'orderNo',
            'orderDate', 'approvedAmount', 'workFlowStatus', 'status',
            'action'];
    grantOrderDataSource = new MatTableDataSource(this.grantOrderList);
    finYearCtrl: FormControl = new FormControl();
    revenueCapitalCtrl: FormControl = new FormControl();
    fundTypeCtrl: FormControl = new FormControl();
    statusCtrl: FormControl = new FormControl();
    demandCtrl: FormControl = new FormControl();
    majorHeadCtrl: FormControl = new FormControl();
    subMajorHeadCtrl: FormControl = new FormControl();
    minorHeadCtrl: FormControl = new FormControl();
    subHeadCtrl: FormControl = new FormControl();
    detailHeadCtrl: FormControl = new FormControl();
    grantdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    ngOnInit() {
        this.searchGrantOrder = this.fb.group({
            finYear: [''],
            revenueCapital: [''],
            fundType: [''],
            grantOrderId: [''],
            grantOrderNo: [''],
            status: [''],
            lyingWith: [''],
            demand: [''],
            majorHead: [''],
            subMajorHead: [''],
            minorHead: [''],
            subHead: [''],
            detailHead: [''],
        });
    }

    applyFilter(data) { }
    searchGrantOrderDetails() { }
}

