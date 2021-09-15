import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { WorkflowDetailsGrantComponent } from '../workflow-details-grant/workflow-details-grant.component';
import { grantMessage } from 'src/app/common/error-message/common-message.constants';
import { GrantSummaryGrant, SchemeDataGrant } from 'src/app/model/from-department';
import { ListValue } from 'src/app/model/common-grant';

@Component({
    selector: 'app-add-scheme-dialog',
    templateUrl: './add-scheme-dialog.html'
})

export class AddSchemeDialogComponent implements OnInit {

schemeType: ListValue[] = [
  { value: '01', viewValue: 'Reimbursement Scheme' },
  { value: '02', viewValue: 'Advance Grant Scheme' }
];
demandList: ListValue[] = [
  {
    value: '1', viewValue: '001:Agriculture and Co-operation Department'
   },
  { value: '2', viewValue: '002:Agriculture' },
  { value: '3', viewValue: '047:Industries and Mines Department' },
  { value: '4', viewValue: '048:Stationery and Printing' },
  { value: '5', viewValue: '049:Industries' },
  ];
  majorHeadlist: ListValue[] = [
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
      value: '1',
      viewValue: '01:Agricultural and Co-operation Department'
  },

  {
      value: '2',
      viewValue: '01:PLN-10 Planning Machinery in Agriculture.and Co-Operation  Development '
  },

  {
      value: '3',
      viewValue: '01:AGR-15 Information & Technology'
  },

  {
      value: '4',
      viewValue: '02:Expenditure for Training'
  },

  {
      value: '5',
      viewValue: '01:AGR-Renovation Of The Department'
  },

  {
      value: '6',
      viewValue: '01:Direcorate of Agriculture'
  },

  {
      value: '7',
      viewValue: '02:Divisional Establishmen'
  },

  {
      value: '8',
      viewValue: '03:District Establishment'
  },

  {
      value: '9',
      viewValue: '01:Intensive Agricultural District Programme'
  },


  {
      value: '10',
      viewValue: '02:Subsidy For Increase Production and Productivity In Food Grain Crops (To be Opened)'
  },

  {
      value: '11',
      viewValue: '03:National Food Security Mission'
  },

  {
      value: '12',
      viewValue: '04:AGR() Promoting to farmer for Post Harvesting & Management (value addition)'
  },

  {
      value: '13',
      viewValue: '01:Multiplication and Distribution of various type of cotton'
  },

  {
      value: '14',
      viewValue: '02:Seed Testing Laboratory'
  },

  {
      value: '15',
      viewValue: '03:AGR 5 -Taluka Seed Multiplication Farms'
  },

  {
      value: '16',
      viewValue: '04:Adj.Establishment of seed cell'
  },

  {
      value: '17',
      viewValue: '01:IND-51 Industries and Mines Department'
  },

  {
      value: '18',
      viewValue: '01:IND-1 Planning Machinery in the Industries & Mines Department'
  },

  {
      value: '19',
      viewValue: '02:IND-1 Monitoring of Plan expenditure in Industries and Mines Department'
  },


  {
      value: '20',
      viewValue: '03:IND-45 Evaluation of Schemes under the Industries and Mines Department'
  },

  {
      value: '21',
      viewValue: '01:IND-44 Information Technology'
  },

  {
      value: '22',
      viewValue: '01:OIN-17 Industries & Mines Department'
  },

  {
      value: '23',
      viewValue: '01:Contribution towards employees Provident Funds Scheme for Presses'
  },

  {
      value: '24',
      viewValue: '01:IND-11 Directorate of Printing and Stationery'
  },

  {
      value: '25',
      viewValue: '01:Stationery offices Stores'
  },

  {
      value: '26',
      viewValue: '01:IND-48 Government Presses'
  },

  {
      value: '27',
      viewValue: '02:IND-42 Apprentice Training in Government Presses'
  },


  {
      value: '28',
      viewValue: '01:IND-32 Government Book Depots'
  },

  {
      value: '29',
      viewValue: '01:Depreciation Reserve Fund for Government Presses'
  },


  {
      value: '30',
      viewValue: '01:IND-48 Government Presses'
  },


  {
      value: '31',
      viewValue: '01:IND-12 Financial Assistance to Minority Handloom Weavers Co-operative Societies'
  },


  {
      value: '32',
      viewValue: '02:IND-22 Industrial to Co-operative Financial Assistance to Co-operative package scheme'
  },
  ];
  detailHead: ListValue[] = [
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
  ];

    constructor(public dialogRef: MatDialogRef<AddSchemeDialogComponent>, private fb: FormBuilder) { }
    addSchemeForm: FormGroup;
    errorMessages;

 
    demandCtrl: FormControl = new FormControl();
    majorHeadCtrl:FormControl = new FormControl();
    subMajorHeadCtrl:FormControl = new FormControl();
    minorHeadCtrl:FormControl = new FormControl();
    subHeadCtrl:FormControl = new FormControl();

    ngOnInit() {
        this.errorMessages = grantMessage;
        this.addSchemeForm = this.fb.group({
            demand: ['',Validators.required],
            majorHead: ['',Validators.required],
            subMajorHead: ['',Validators.required],
            minorHead: ['',Validators.required],
            subHead: ['',Validators.required],
            // detailHead: ['',Validators.required],
            chargeVoted: ['',Validators.required],
        })
    }


    onCancel(): void {
        this.dialogRef.close('cancel');
    }

    addScheme() {
        this.dialogRef.close('yes');
    }
}

@Component({
    selector: 'app-from-department',
    templateUrl: './from-department.component.html',
    styleUrls: ['./from-department.component.css'],
    animations: [
        trigger('expandRow', [
            state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ]),
    ],
})
export class FromDepartmentComponent implements OnInit {

    constructor(public dialog: MatDialog) { }
    grantReleaseDrp: string;
    date: Date = new Date();
    ngOnInit() { }

    grantSummaryColumns: string[] = ['type', 'FDAuthorizedGrant', 'grantAvailable', 'totalGrantToDept', 'totalGrantToCO', 'totalGrantToDDO', 'remainingGrant'];
    grantSummaryData: GrantSummaryGrant[] = [
        { 'type': 'State', 'releaseTo': '', 'FDAuthorizedGrant': 15000.0000, 'grantAvailable': 15400.500, 'totalGrantToDept': 12000.5454, 'totalGrantToCO': 65444.555, 'totalGrantToDDO': 12000, 'remainingGrant': 12000 },
        { 'type': 'CSS', 'releaseTo': '','FDAuthorizedGrant': 15000.0000, 'grantAvailable': 15400.500, 'totalGrantToDept': 12000.5454, 'totalGrantToCO': 65444.555, 'totalGrantToDDO': 12000, 'remainingGrant': 12000 }
    ];
    grantSummaryDataSource = new MatTableDataSource(this.grantSummaryData);

    schemeColumns: string[] =
        ['subHead',
            'BEState',
            'BECSS',
            'revisedState',
            'revisedCSS',
            'grantApprovedState',
            'grantApprovedCSS',
            'officeName',
            'grantReleasedState',
            'grantReleasedCSS',
            'grantToBeReleaseState',
            'grantToBeReleaseCSS',
            'remarks',
            'action'];

    schemeData: SchemeDataGrant[] = [
        {
            'subHead': '01',
            'BEState': '',
            'releaseTo': '',
            'BECSS': '',
            'revisedState': '',
            'revisedCSS': '',
            'grantApprovedState': '',
            'grantApprovedCSS': '',
            'officeName': '',
            'grantReleasedState': '',
            'grantReleasedCSS': '',
            'grantToBeReleaseState': '',
            'grantToBeReleaseCSS': '',
            'remarks': ''
        },
    ];

    addSchemeRow(releaseTo): any {
        return [{
            'subHead': '01',
            'BEState': 15000.0000,
            'releaseTo': releaseTo,
            'BECSS': 15400.500,
            'revisedState': 12000.5454,
            'revisedCSS': 14000.22,
            'grantApprovedState': 12000,
            'grantApprovedCSS': 154000,
            'officeName': 'Agriculture',
            'grantReleasedState': 1500,
            'grantReleasedCSS': 1000,
            'grantToBeReleaseState': 100,
            'grantToBeReleaseCSS': 200,
            'remarks': 'test'
        }];
    }

    schemeDataSource = new MatTableDataSource(this.schemeData);

    monthName: object[] = [
        { value: '04', viewValue: 'April' },
        { value: '05', viewValue: 'May' },
        { value: '06', viewValue: 'June' },
        { value: '07', viewValue: 'July' },
        { value: '08', viewValue: 'August' },
        { value: '09', viewValue: 'September' },
        { value: '10', viewValue: 'October' },
        { value: '11', viewValue: 'November' },
        { value: '12', viewValue: 'December' },
        { value: '01', viewValue: 'January' },
        { value: '02', viewValue: 'February' },
        { value: '03', viewValue: 'March' }
    ];

    normalLC: object[] = [
        { value: '01', viewValue: 'Normal Grant' },
        { value: '02', viewValue: 'LC' },
    ];

    fundType: object[] = [
        { value: '01', viewValue: 'Consolidated' },
        { value: '02', viewValue: 'Contingency' },
    ];

    grantReleaseTo: object[] = [
        { value: 'Dept', viewValue: 'Department' },
        { value: 'CO', viewValue: 'Controlling Officer' },
        { value: 'DDO', viewValue: 'Drawing and Disbursing Officer' }
    ];

    grantReleaseToChange(value) {
        const p_data = this.schemeDataSource.data;
        p_data.push(this.addSchemeRow('Dept'));
        this.schemeDataSource.data = p_data;
    }

    OpenSchemeDialog() {
        const dialogRef = this.dialog.open(AddSchemeDialogComponent);
        dialogRef.afterClosed().subscribe(result => {

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
      decimalKeyPress(event: any) {
        const pattern = /^\d+(\.\d{0,4})?$/;
        const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        // If the key is backspace, tab, left, right or delete
        // console.log('event.target.value', event.target.value);
        // console.log('tst', pattern.test(event.target.value));
      
        let tempstr = event.target.value;
        tempstr += inputChar;
      
        if (!pattern.test(tempstr)) {
            // invalid character, prevent input
            event.preventDefault();
            return false;
        }
      }
      
      decimalPoint(data, key) {
        // debugger
        if (data[key]) {
            data[key] = Number(data[key]).toFixed(4);
        }
      }

}


