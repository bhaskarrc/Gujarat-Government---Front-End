
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ListValue } from 'src/app/model/common-grant';

@Component({
    selector: 'app-sanction-orders-list',
    templateUrl: './sanction-orders-list.component.html',
    styleUrls: ['./sanction-orders-list.component.css']
})
export class SanctionOrdersListComponent implements OnInit {

    constructor(private fb: FormBuilder) { }
    searchGrantOrder: FormGroup;

    finYear: ListValue[] = [
        { value: '2019-20', viewValue: '2019-2020' },
        { value: '2020-21', viewValue: '2020-2021' }
    ];

    revenueCapital: ListValue[] = [
        { value: '01', viewValue: 'Revenue' },
        { value: '02', viewValue: 'Capital' }
    ];
    department: ListValue[] = [
        { value: '01', viewValue: 'Agriculture Department' },
        { value: '02', viewValue: 'Education Publication Department' }
    ];
    fundType: ListValue[] = [
        { value: '01', viewValue: 'Consolidated' },
        { value: '02', viewValue: 'Contingency' }
    ];
    status_list: ListValue[] = [
        { value: '01', viewValue: 'Pending' },
        { value: '02', viewValue: 'Approve' }
    ];
    // grantOrderDisplayColumn: string[] = [
    //     'srNo', 'finYear','orderId','orderNo','departmentName', 'sanctionOrder', 'sanctionAmount', 'reAppropriationOrder',
    //     'reAppropriationAmount','action'
    // ];
    grantOrderDisplayColumn: string[] = [
        'srNo', 'finYear', 'departmentName', 'sanctionAmount',
        'reAppropriationAmount', 'action'
    ];
    grantOrderList = [
        {
            finYear: '2019 - 2020', orderId: 'GR/01/1', orderNo: '1458794586', departmentName: 'Agriculture Department', sanctionAmount:
                '50000', sanctionOrder: '100',
            reAppropriationAmount: '6000', reAppropriationOrder: '200'
        },
        {
            finYear: '2019 - 2020', orderId: 'GR/01/2', orderNo: '1247896584', departmentName: 'Education Publication Department',
            sanctionAmount: '40000', sanctionOrder: '200', reAppropriationAmount: '5000', reAppropriationOrder: '50'
        }
    ];
    grantOrderDataSource = new MatTableDataSource(this.grantOrderList);
    finYearCtrl: FormControl = new FormControl();
    revenueCapitalCtrl: FormControl = new FormControl();
    fundTypeCtrl: FormControl = new FormControl();
    statusCtrl: FormControl = new FormControl();
    departmentCtrl: FormControl = new FormControl();
    ngOnInit() {

        this.searchGrantOrder = this.fb.group({
            finYear: [''],
            revenueCapital: [''],
            fundType: [''],
            grantOrderId: [''],
            grantOrderNo: [''],
            status: [''],
            lyingWith: [''],
            department: ['']
        });
    }

    applyFilter(data) {
    }

    searchGrantOrderDetails() {
    }
}
