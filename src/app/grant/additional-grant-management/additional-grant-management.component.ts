
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { grantMessage } from 'src/app/common/error-message/common-message.constants';
import * as _ from 'lodash';
import { GrantOrderData, GrantdataSourceAuthorization } from 'src/app/model/additionalgrantmanagment';
import { ListValue, BrwoseDatagrant } from 'src/app/model/common-grant';


@Component({
    selector: 'app-additional-grant-management',
    templateUrl: './additional-grant-management.component.html',
    styleUrls: ['./additional-grant-management.component.css']
})
export class AdditionalGrantManagementComponent implements OnInit {

    errorMessages;
    authorizationDate: Date;


    authorizationList: ListValue[] = [
        { value: '1', viewValue: 'Release Advance Grant' },
        { value: '2', viewValue: 'Grant Authorization' }
    ];

    finYear: ListValue[] = [
        { value: '1', viewValue: '2019-2020' },
        { value: '2', viewValue: '2020-2021' }
    ];

    budgetEstimate_list: ListValue[] = [
        { value: '1', viewValue: 'New Work' },
        { value: '2', viewValue: 'item-continuous-estimate' },
        { value: '3', viewValue: 'work-in-progress' }
    ];

    type_list: ListValue[] = [
        { value: '1', viewValue: 'New Item Estimate' },
        { value: '2', viewValue: 'Item Continious Estimate' },
        { value: '3', viewValue: 'New Work Estimate' },
        { value: '4', viewValue: 'Work in Progress' },
        { value: '5', viewValue: 'Revised Expenditure Estimate' }
    ];

    itemName_list: ListValue[] = [
        { value: '1', viewValue: 'Item 1' },
        { value: '2', viewValue: 'Item 2' },
        { value: '3', viewValue: 'Item 3' },
        { value: '4', viewValue: 'Item 4' }
    ];

    filteredDepartment: ListValue[] = [
        { value: '1', viewValue: 'Agriculture and Co-operation Department' },
        { value: '2', viewValue: 'Industries and Mines Department' },
        { value: '3', viewValue: 'Stationery and Printing' }
    ];

    toMonths_list: ListValue[] = [
        { value: '1', viewValue: 'May ' },
        { value: '2', viewValue: 'June' },
    ];
    fromMonths_list: ListValue[] = [
        { value: '1', viewValue: 'Jan' },
        { value: '2', viewValue: 'Feb' },
        { value: '3', viewValue: 'Mar' },
        { value: '4', viewValue: 'Apr' },
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
    chargedVoted_list: ListValue[] = [
        { value: '1', viewValue: 'Charged' },
        { value: '2', viewValue: 'Voted' }
    ];
    ELEMENT_DATA: any[] = [
        {
            toolTipDataDemad: '001:Agriculture and Co-operation Department',
            toolTipDataMH: '3451:Secretariat-Economic Services',
            toolTipDataSMH: '00:Secretariat-Economic Services',
            toolTipDataMI: '090:Secretariat',
            toolTipDataSH: '01:Direcorate of Agriculture',
            toolTipDataDH: '00:AGR-15 Information & Technology',
            authorizationDate: '01-Jun-2020', authorizationFileNo: 126492, quarter: 'December-December',
            state: 1789452.0000, css: 78894.0000,
        }
    ];
    ELEMENT_DATA1: any[] = [
        {
            headAccount: '70: 2251: 08: 101: 12:00:Finance Department', itemName: 'Item 1',
            class: 'Class 1',
            budgetEstimate: '321522', revidseEstimate: '45200', expenditure: '32500',
            chargedVoted: '584',
            quarter: 'December-December', lyingWith: 'RK Raja', state: 0, css: 0, budstate: 1254.0000, budcss: 4856.0000,
            revstate: 485.0000, revscss: 120.0000,
            expstate: 784.0000, expcss: 454.000,
        }
    ];

    attachmentTypeCode: ListValue[] = [
        { value: '01', viewValue: 'Supporting Document' },
        { value: '02', viewValue: 'Sanction Order' },
        { value: '03', viewValue: 'Others' }
    ];
    brwoseData: BrwoseDatagrant[] = [{
        name: undefined,
        file: undefined,
        uploadedBy: ''
    }];

    fileBrowseIndex: number;
    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    grantOrderDisplayColumn = [
        'demand', 'majorHead', 'subMajorHead', 'minorHead', 'subHead', 'detailHead', 'chargedVoted'];
    displayedGrantColumns = [
        'srNo', 'authorizationDate', 'authorizationFileNo', 'quarter', 'state', 'css'];

    displayedGrantColumns1 = [
        'srNo', 'majorHead', 'subMajorHead', 'budstate', 'budcss', 'revstate', 'revcss',
        'expstate', 'expcss', 'chargedVoted', 'quarter', 'state', 'css'];

    grantdataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    //   grantOrderDataSource = new MatTableDataSource<any>(this.ELEMENT_DATA_DETAILS);
    grantdataSource1 = new MatTableDataSource<any>(this.ELEMENT_DATA1);
    createGrantOrder: FormGroup;
    relaseGrantOrder: FormGroup;
    relaseGrantOrdesr: FormGroup;
    revenueCapital_list: any[] = [
        { value: '1', viewValue: 'Revenue' },
        { value: '2', viewValue: 'Capital' },
    ];
    filteredDepartment_list: any[] = [
        { value: '1', viewValue: 'Release Advance Grant' },
        { value: '2', viewValue: 'Grant Authorization' },
    ];
    isShow = false;
    isRemoveCSSState: Boolean = false;
    isbudgetEstimateType: Boolean = false;

    //   subHeadDetailsForm: FormGroup;
    initiatiomdate = new Date((new Date()));
    revenueCapitalCtrl: FormControl = new FormControl();
    TypeAuthorizationCtrl: FormControl = new FormControl();
    budgetEstimateCtrl: FormControl = new FormControl();
    itemNameCtrl: FormControl = new FormControl();
    typeCtrl: FormControl = new FormControl();
    showDa = false;
    isTokentable = false;
    finYearCtrl: FormControl = new FormControl();
    departmentCodeCtrl: FormControl = new FormControl();
    fromMonthsCtrl: FormControl = new FormControl();
    toMonthsCtrl: FormControl = new FormControl();
    demandCtrl: FormControl = new FormControl();
    majorHeadCtrl: FormControl = new FormControl();
    subMajorHeadCtrl: FormControl = new FormControl();
    minorHeadCtrl: FormControl = new FormControl();
    subHeadCtrl: FormControl = new FormControl();
    detailHeadCtrl: FormControl = new FormControl();
    chargedVotedCtrl: FormControl = new FormControl();
    attachmentTypeCodeCtrl: FormControl = new FormControl();
    constructor(private fb: FormBuilder, private el: ElementRef, private toaster: ToastrService,
        private router: Router, public dialog: MatDialog) { }

    ngOnInit() {
        this.errorMessages = grantMessage;
        this.formSubmitSurrender();
        this.relaseGrantOrderForm();
        this.relaseGrantOrderForm();
        this.formSubmits();
        // this.subHeadDetailsForm = this.fb.group({
        //   demand: ['',Validators.required],
        //   majorHead: ['',Validators.required],
        //   subMajorHead: ['',Validators.required],
        //   minorHead: ['',Validators.required],
        //   subHead: ['',Validators.required],
        //   detailHead: ['',Validators.required],
        //   chargedVoted: ['',Validators.required],

        // });
    }
    formSubmits() {
        this.relaseGrantOrdesr = this.fb.group({
            grantrelease: ['1']
        });
    }
    adddada() {
        this.showDa = true;
    }
    relaseGrantOrderForm() {
        this.relaseGrantOrder = this.fb.group({
            finYear: ['1', Validators.required],
            department: ['', Validators.required],
            oderNo: ['', Validators.required],
            fromMonths: ['', Validators.required],
            toMonths: ['', Validators.required],
            stateAmount: ['', Validators.required],
            cssAmount: ['', Validators.required],

        });
    }

    formSubmitSurrender() {
        this.createGrantOrder = this.fb.group({
            TypeAuthorization: ['', Validators.required],
            finYear: ['1', Validators.required],
            department: ['', Validators.required],
            authorizationDate: ['', Validators.required],
            authorizationFileNo: ['', Validators.required],
            fromMonths: ['', Validators.required],
            toMonths: ['', Validators.required],
            stateAmount: ['', Validators.required],
            cssAmount: ['', Validators.required],
            demand: ['', Validators.required],
            majorHead: ['', Validators.required],
            subMajorHead: ['', Validators.required],
            minorHead: ['', Validators.required],
            subHead: ['', Validators.required],
            detailHead: ['', Validators.required],
            chargedVoted: ['', Validators.required],
            budgetEstimate: [''],
            type: [''],
            revenueCapital: [''],
            itemName: [''],
        });
    }





    getamountState(): number {
        let CalculatedAmount = 0;
        this.grantdataSource.data.forEach((data) => {
            CalculatedAmount = CalculatedAmount + Number(data.state);
        });
        return CalculatedAmount;
    }
    getamountCss(): number {
        let CalculatedAmount = 0;
        this.grantdataSource.data.forEach((data) => {
            CalculatedAmount = CalculatedAmount + Number(data.css);
        });
        return CalculatedAmount;
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
    ontoken(index) {
        if (index.value === '2') {
            this.isTokentable = true;
        } else {
            this.isTokentable = false;
        }
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
    workflowDetails(): void {
        const dialogRef = this.dialog.open(WorkflowDetailsGrantComponent, {
            width: '1200px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    formSubmit() { }
    goToDashboard() { }
    onChangepayDate(value) {
        console.log(value);
        this.createGrantOrder.patchValue({
            authorizationDate: value
        });
    }

    toggle() {
        const controls = this.createGrantOrder.controls;
        _.forEach(controls, control => {
            console.log(control);
            control.markAsTouched(true);
            control.markAsDirty(true);
        });
    }
    showData() {
        this.isShow = true;
    }

    valuechange(event): void {
        if (event.value === '1') {
            this.isRemoveCSSState = true;
            this.isbudgetEstimateType = false;
        }
        if (event.value === '2') {
            this.isRemoveCSSState = false;
            this.isbudgetEstimateType = true;
        }

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

    getactualExpendature2(): number {
        let state = 0;
        this.grantdataSource1.data.forEach((data) => {
            state = state + Number(data.state);
        });
        return state;
    }

    getCss(): number {
        let css = 0;
        this.grantdataSource1.data.forEach((data) => {
            css = css + Number(data.css);
        });
        return css;
    }

    budstates(): number {
        let budstate = 0;
        this.grantdataSource1.data.forEach((data) => {
            budstate = budstate + Number(data.budstate);
        });
        return budstate;
    }

    budgetCss(): number {
        let budcss = 0;
        this.grantdataSource1.data.forEach((data) => {
            budcss = budcss + Number(data.budcss);
        });
        return budcss;

    }
    revstates(): number {
        let revstate = 0;
        this.grantdataSource1.data.forEach((data) => {
            revstate = revstate + Number(data.revstate);
        });
        return revstate;
    }

    revgetCss(): number {
        let revcss = 0;
        this.grantdataSource1.data.forEach((data) => {
            revcss = revcss + Number(data.revcss);
        });
        return revcss;

    }
    expstates(): number {
        let expstate = 0;
        this.grantdataSource1.data.forEach((data) => {
            expstate = expstate + Number(data.expstate);
        });
        return expstate;
    }

    expgetCss(): number {
        let expcss = 0;
        this.grantdataSource1.data.forEach((data) => {
            expcss = expcss + Number(data.expcss);
        });
        return expcss;

    }
}


