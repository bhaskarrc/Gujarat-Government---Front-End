
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { GrantOrderlistgrant } from 'src/app/model/contingency-fd-to-department-grant';
import { ListValue } from 'src/app/model/common-grant';

@Component({
    selector: 'app-contingency-fd-to-department-list',
    templateUrl: './contingency-fd-to-department-list.component.html',
    styleUrls: ['./contingency-fd-to-department-list.component.css']
})
export class ContingencyFdToDepartmentListComponent implements OnInit {

    constructor(private fb: FormBuilder) { }
    searchGrantOrder: FormGroup;

    finYear: ListValue[] = [
        { value: '1', viewValue: '2020-2021' }
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
    grantOrderDisplayColumn: string[] = [
        'SrNo', 'GrantOrderId', 'GrantOrderNo', 'grantRelease', 'orderCreateDate', 'status', 'lyingWith', 'action'
    ];
    grantOrderList: GrantOrderlistgrant[] = [
        {
            grantOrderId: '14785498', orderNo: 'GR/JKL/2457', grantRelease: 'April - June', orderCreateDate: '12-Oct-2019',
            status: 'Pending', lyingWith: 'Rakesh Jain'
        },
        {
            grantOrderId: '14785499', orderNo: 'GR/JKL/2458', grantRelease: 'April - June', orderCreateDate: '12-Oct-2019',
            status: 'Approved', lyingWith: '-'
        }
        ,
        {
            grantOrderId: '14785497', orderNo: 'GR/JKL/2454', grantRelease: 'April - June', orderCreateDate: '12-Oct-2019',
            status: 'Draft', lyingWith: 'Mahesh Jain'
        }
        ,
        {
            grantOrderId: '14785489', orderNo: 'GR/JFL/2458', grantRelease: 'April - June', orderCreateDate: '12-Oct-2019',
            status: 'Cancelled', lyingWith: '-'
        }
        ,
        {
            grantOrderId: '14785487', orderNo: 'GR/JDL/2454', grantRelease: 'May - June', orderCreateDate: '12-Oct-2019',
            status: 'Rejected', lyingWith: 'Mahesh Jain'
        }
    ];
    grantOrderDataSource = new MatTableDataSource(this.grantOrderList);
    finYearCtrl: FormControl = new FormControl();
    revenueCapitalCtrl: FormControl = new FormControl();
    fundTypeCtrl: FormControl = new FormControl();
    statusCtrl: FormControl = new FormControl();
    ngOnInit() {
        this.searchGrantOrder = this.fb.group({
            finYear: ['1'],
            revenueCapital: [''],
            fundType: [''],
            status: ['']
        });
    }

    applyFilter(data) {

    }

    searchGrantOrderDetails() {

    }
}
