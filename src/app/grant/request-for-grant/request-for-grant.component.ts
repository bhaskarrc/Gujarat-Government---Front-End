
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { grantMessage } from 'src/app/common/error-message/common-message.constants';
import { RequestForGrant } from 'src/app/model/request-for-grant';
import { BrwoseDatagrant, ListValue } from 'src/app/model/common-grant';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
    selector: 'app-request-for-grant',
    templateUrl: './request-for-grant.component.html',
    styleUrls: ['./request-for-grant.component.css']
})
export class RequestForGrantComponent implements OnInit {
    errorMessages;
    public toggleButton = true;
    schemeTypeCtrl: FormControl = new FormControl();
    finYear_list: ListValue[] = [
        { value: '1', viewValue: '2020-2021' }
    ];
    schemeType_list: any[] = [
        { value: '1', viewValue: 'State' },
        { value: '2', viewValue: 'CSS' }
    ];
    revenueCaptial_list: ListValue[] = [
        { value: '1', viewValue: 'Revenue' },
        { value: '2', viewValue: 'Captial' },
    ];
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
    chargedVoted_list: ListValue[] = [
        { value: '1', viewValue: 'Charged' },
        { value: '2', viewValue: 'Voted' },
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
    //   objectClass_list: any[] = [
    //     {value: '1', viewValue: 'Class I'},
    //     {value: '2', viewValue: 'Class II'},
    //     {value: '3', viewValue: 'Class III'},
    //     {value: '4', viewValue: 'Class IV'},
    //   ];
    attachmentTypeCode: ListValue[] = [
        { value: '01', viewValue: 'Supporting Document' },
        { value: '02', viewValue: 'Sanction Order' },
        { value: '03', viewValue: 'Others' }
    ];

    Surrenderedlist: ListValue[] = [
        { value: '1', viewValue: 'Rj kumar' },
        { value: '2', viewValue: 'Rani' },
        { value: '3', viewValue: 'Others' }
    ];
    request_trype: ListValue[] = [
        { value: '1', viewValue: 'Advance Grant' },
        { value: '2', viewValue: 'Additional Authorization of Grant' },
    ];
    departmentlist: CommonListing[] = [
        { value: '1', viewValue: 'Home Department' },
        { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
        { value: '3', viewValue: 'Health and Family Welfare Department' },
    ];
    brwoseData: BrwoseDatagrant[] = [{
        name: undefined,
        file: undefined,
        uploadedBy: ''
    }];

    fileBrowseIndex: number;
    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
    dataSourceBrowse = new MatTableDataSource(this.brwoseData);

    ELEMENT_DATA: any[] = [
        {
            type: 'State',
            budgetHead: '001:2404:00:800: 01:00 ', itemName: '(New Item Estimate)',
            detailHeadDiscription: 'Object Class 1', detailHeadDiscription2: 'Object Class 2',
            detailHeadDiscription3: 'Object Class 3',
            budgetEstimate: 974158, revisedEstimate: 9874, expenditureDueOnDate: 10, avilableGrant: 748541,
            amountToBeSurrender: 987451, surrenderOrderNo: 1478542, remarksSurrender: '', surrenderTo: 'Amit Pandey',
            detailHeadDiscriptionAtoolTip: 'C1: Personal Service and Benefit',
            detailHeadDiscriptionBtoolTip: 'C2: Personal Service and Benefit',
            detailHeadDiscriptionCtoolTip: 'C3: Personal Service and Benefit',
        },
        {
            type: 'State',
            budgetHead: '001:2404:00:800: 01:00', itemName: ' (New Item Estimate)',
            detailHeadDiscription: 'Object Class 1', detailHeadDiscription2: 'Object Class 2',
            detailHeadDiscription3: 'Object Class 3',
            budgetEstimate: 974158, revisedEstimate: 9874, expenditureDueOnDate: 10, avilableGrant: 748541,
            amountToBeSurrender: 987451, surrenderOrderNo: 1478542, remarksSurrender: '', surrenderTo: 'Amit Pandey',
            detailHeadDiscriptionAtoolTip: 'C1: Personal Service and Benefit',
            detailHeadDiscriptionBtoolTip: 'C2: Personal Service and Benefit',
            detailHeadDiscriptionCtoolTip: 'C3: Personal Service and Benefit',
        },

    ];

    displayedGrantColumns: string[] = ['srNo',
        'budgetHead', 'itemWorkName', 'type', 'detailHeadDiscription', 'budgetEstimate', 'revisedEstimate', 'avilableGrant', 'expenditureDueOnDate', 'probableExpenditure',

        'amountToBeSurrender', 'remarksSurrender', 'action'];
    grantdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    createGrantOrder: FormGroup;
    initiatiomdate = new Date((new Date()));
    createGrantVisible = false;
    finYearCtrl: FormControl = new FormControl();
    revenueCaptialCtrl: FormControl = new FormControl();
    majorHeadCtrl: FormControl = new FormControl();
    demandCtrl: FormControl = new FormControl();
    subMajorHeadCtrl: FormControl = new FormControl();
    minorHeadCtrl: FormControl = new FormControl();
    subHeadCtrl: FormControl = new FormControl();
    detailHeadCtrl: FormControl = new FormControl();
    chargedVotedCtrl: FormControl = new FormControl();
    budgetEstimateTypeCtrl: FormControl = new FormControl();
    itemCtrl: FormControl = new FormControl();
    SurrenderedCtrl: FormControl = new FormControl();
    departmentCodeCtrl: FormControl = new FormControl();
    //   objectClassCtrl: FormControl = new FormControl();
    attachmentTypeCtrl: FormControl = new FormControl();
    constructor(private fb: FormBuilder, private toaster: ToastrService,
        private router: Router, public dialog: MatDialog, private el: ElementRef, ) { }

    ngOnInit() {
        this.formSubmitSurrender();
    }
    createGrant() {
        this.createGrantVisible = true;
    }
    formSubmitSurrender() {
        this.errorMessages = grantMessage;
        this.createGrantOrder = this.fb.group({
            finYear: ['1', Validators.required],
            revenueCaptial: ['', Validators.required],
            demand: ['', Validators.required],
            majorHead: ['', Validators.required],
            subMajorHead: ['', Validators.required],
            minorHead: ['', Validators.required],
            subHead: ['', Validators.required],
            detailHead: ['', Validators.required],
            chargedVoted: ['', Validators.required],
            budgetEstimateType: ['', Validators.required],
            item: ['', Validators.required],
            schemeType: [''],
            reqno: [''],
            departmentAdmin: ['']
        });
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
        this.router.navigate(['./grant/grant-surrender-process']);
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
                    uploadedBy: undefined
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
}


