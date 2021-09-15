
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ReappropriationList } from 'src/app/model/re-appropriation-process';
import { ListValue } from 'src/app/model/common-grant';

@Component({
    selector: 'app-re-appropriation-process-list',
    templateUrl: './re-appropriation-process-list.component.html',
    styleUrls: ['./re-appropriation-process-list.component.css']
})
export class ReAppropriationProcessListComponent implements OnInit {

    constructor(private fb: FormBuilder) { }
    searchGrantOrder: FormGroup;

    finYear: ListValue[] = [
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

    revenueCapital: ListValue[] = [
        { value: '01', viewValue: 'Revenue' },
        { value: '02', viewValue: 'Capital' }
    ];
    fundType: ListValue[] = [
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
        'srNo', 'fYear', 'demand', 'sgAppropriation', 'supplementaryDemand',
        'surrenderAmount', 'reAppropriationAmount', 'amountReAppropriation', 'status', 'lyingWith', 'action'
    ];
    grantOrderList: any[] = [
        {
            fYear: '2020-2021', demand: '070', actulexpenditure: '67646',
            sgAppropriation: 'Revenue-Voted-State',
            supplementaryDemand: 'Order 321', surrenderAmount: '20-04-2020', reAppropriationAmount: '22-04-2020',
            amountReAppropriation: 'Forwarded to Verifier',
            status: 'Pending', lyingWith: 'RK Raja'
        },
        {
            fYear: '2019-2020', demand: '070', actulexpenditure: '67646',
            sgAppropriation: 'Revenue-Voted-CSS',
            supplementaryDemand: 'Order 411', surrenderAmount: '20-04-2020', reAppropriationAmount: '22-04-2020',
            amountReAppropriation: 'Approved by DDO',
            status: 'Approved', lyingWith: '-'
        }
        ,
        {
            fYear: '2019-2020', demand: '070', actulexpenditure: '67646',
            sgAppropriation: 'Revenue-Voted-CSS',
            supplementaryDemand: 'Order 411', surrenderAmount: '20-04-2020', reAppropriationAmount: '22-04-2020',
            amountReAppropriation: 'Approved by CO',
            status: 'Cancelled', lyingWith: '-'
        }
        ,
        {
            fYear: '2019-2020', demand: '070', actulexpenditure: '67646',
            sgAppropriation: 'Revenue-Voted-CSS',
            supplementaryDemand: 'Order 411', surrenderAmount: '20-04-2020', reAppropriationAmount: '22-04-2020',
            amountReAppropriation: 'Rejected',
            status: 'Draft', lyingWith: '-'
        }
        ,
        {
            fYear: '2019-2020', demand: '070', actulexpenditure: '67646',
            sgAppropriation: 'Revenue-Voted-CSS',
            supplementaryDemand: 'Order 411', surrenderAmount: '20-04-2020', reAppropriationAmount: '22-04-2020',
            amountReAppropriation: 'Cancelled',
            status: 'Rejected', lyingWith: '-'
        }
    ];
    grantOrderDataSource = new MatTableDataSource(this.grantOrderList);
    finYearCtrl: FormControl = new FormControl();
    revenueCapitalCtrl: FormControl = new FormControl();
    fundTypeCtrl: FormControl = new FormControl();
    statusCtrl: FormControl = new FormControl();
    ngOnInit() {
        this.searchGrantOrder = this.fb.group({
            finYear: [''],
            revenueCapital: [''],
            reappo: [''],
            demnd: [''],
            wstatus: [''],
            fundType: [''],
            grantOrderId: [''],
            grantOrderNo: [''],
            status: [''],
            lyingWith: ['']
        });
    }

    applyFilter(data) { }
    searchGrantOrderDetails() { }
}

