
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { GrantOrderList } from 'src/app/model/grant-from-controlling-officer';
import { ListValue } from 'src/app/model/common-grant';

@Component({
    selector: 'app-grant-from-controlling-officer-list',
    templateUrl: './grant-from-controlling-officer-list.component.html',
    styleUrls: ['./grant-from-controlling-officer-list.component.css']
})
export class GrantFromControllingOfficerListComponent implements OnInit {

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
    ControllingOfficer_list: ListValue[] = [
        { value: '01', viewValue: 'Deputy Director Animal Husbandry' }
    ];
    grantOrderDisplayColumn: string[] = [
        'SrNo', 'GrantOrderId', 'GrantOrderNo', 'grantRelease', 'revenueCapital', 'fundType', 'orderCreateDate', 'status', 'lyingWith', 'action'
    ];
    grantOrderList: GrantOrderList[] = [
        {
            GrantOrderId: '14785498', GrantOrderNo: 'OG/JKL/2987', grantRelease: 'April-June', orderCreateDate: '12-Mar-2019', revenueCapital: 'Revenue', fundType: ' Consolidated',
            status: 'Pending', lyingWith: 'Rk Pandey'
        },
        {
            GrantOrderId: '14785499', GrantOrderNo: 'OG/JKL/2987', grantRelease: 'April-June', orderCreateDate: '12-Mar-2019', revenueCapital: 'Revenue', fundType: 'Contingency',
            status: 'Rejected', lyingWith: '-'
        },
        {
            GrantOrderId: '14785479', GrantOrderNo: 'OG/JKL/2787', grantRelease: 'April-June', orderCreateDate: '12-Mar-2019', revenueCapital: 'Revenue', fundType: 'Contingency',
            status: 'Draft', lyingWith: 'Umesh Jain'
        },
        {
            GrantOrderId: '14785496', GrantOrderNo: 'OG/JKL/2977', grantRelease: 'April-June', orderCreateDate: '12-Mar-2019', revenueCapital: 'Revenue', fundType: 'Contingency',
            status: 'Approved', lyingWith: '-'
        },
        {
            GrantOrderId: '14785471', GrantOrderNo: 'OG/JKL/2784', grantRelease: 'April-June', orderCreateDate: '12-Mar-2019', revenueCapital: 'Revenue', fundType: 'Contingency',
            status: 'Cancelled', lyingWith: 'Rakesh Mehta'
        },


    ];
    grantOrderDataSource = new MatTableDataSource(this.grantOrderList);
    finYearCtrl: FormControl = new FormControl();
    revenueCapitalCtrl: FormControl = new FormControl();
    fundTypeCtrl: FormControl = new FormControl();
    ControllingOfficerCtrl: FormControl = new FormControl();
    statusCtrl: FormControl = new FormControl();
    ngOnInit() {
        this.searchGrantOrder = this.fb.group({
            finYear: [''],
            revenueCapital: [''],
            ControllingOfficer: [''],
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
