
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { GrantOrderList } from 'src/app/model/grant-fd-to-css';
import { ListValue } from 'src/app/model/common-grant';

@Component({
    selector: 'app-grant-fd-to-css-list',
    templateUrl: './grant-fd-to-css-list.component.html',
    styleUrls: ['./grant-fd-to-css-list.component.css']
})
export class GrantFdToCssListComponent implements OnInit {

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
        { value: '01', viewValue: 'Consolidate' },
    ];
    status_list: ListValue[] = [
        { value: '01', viewValue: 'Approevd' },
        { value: '02', viewValue: 'Cancelled' },
        { value: '03', viewValue: 'Draft' },
        { value: '04', viewValue: 'Rejected' },
        { value: '05', viewValue: 'Pending' }
    ];
    grantOrderDisplayColumn: string[] = [
        'srNo', 'grantOrderId', 'grantOrderNo', 'grantReleaseFor', 'orderIssueDate', 'status', 'lyingWith', 'action'
    ];
    grantOrderList: GrantOrderList[] = [
        {
           grantOrderId: '14785498', grantOrderNo: 'OG/JKL/2987', grantReleaseFor: 'April-June', orderIssueDate: '12-Mar-2019',
            status: 'Pending', lyingWith: 'Rk Pandey'
        },
        {
           grantOrderId: '14785499', grantOrderNo: 'OG/JKL/2985', grantReleaseFor: 'April-June', orderIssueDate: '12-Mar-2019',
            status: 'Approved', lyingWith: '-'
        },
        {
           grantOrderId: '1478549', grantOrderNo: 'OG/JKL/2984', grantReleaseFor: 'April-June', orderIssueDate: '12-Mar-2019',
            status: 'Draft', lyingWith: 'M A Jain'
        },
        {
           grantOrderId: '14785499', grantOrderNo: 'OG/JKL/2985', grantReleaseFor: 'April-June', orderIssueDate: '12-Mar-2019',
            status: 'Rejected', lyingWith: '-'
        },
        {
           grantOrderId: '1478579', grantOrderNo: 'OG/JKL/2984', grantReleaseFor: 'April-June', orderIssueDate: '12-Mar-2019',
            status: 'Cancelled', lyingWith: 'M A Jain'
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
            grantOrderId: [''],
            grantOrderNo: [''],
            status: [''],
            lyingWith: ['']
        });
    }

    applyFilter(data) {

    }

    searchGrantOrderDetails() {

    }
}
