
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { GrantOrderListGrant } from 'src/app/model/additionalgrantmanagment';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    constructor(private fb: FormBuilder) { }
    searchGrantOrder: FormGroup;

    finYear: object[] = [
        { value: '1', viewValue: '2019-2020' },
        { value: '2', viewValue: '2020-2021' }
    ];

    revenueCapital: object[] = [
        { value: '01', viewValue: 'Revenue' },
        { value: '02', viewValue: 'Capital' }
    ];
    department_list: object[] = [
        { value: '01', viewValue: 'Finance Department' },
    ];
    authorization_list: object[] = [
        { value: '01', viewValue: 'Excessed to Budget' },
    ];

    status_list: object[] = [
        { value: '01', viewValue: 'Approevd' },
        { value: '02', viewValue: 'Cancelled' },
        { value: '03', viewValue: 'Draft' },
        { value: '04', viewValue: 'Rejected' },
        { value: '05', viewValue: 'Pending' }
    ];

    grantOrderDisplayColumn = [
        'srNo', 'fileNo', 'departmentName', 'quarter', 'stateAmount', 'cssAmount', 'typeRequest',
        'dateRequest', 'status', 'lying', 'action'
    ];
    grantOrderList: any[] = [
        {
            fileNo: '45874', departmentName: 'Finance Department', quarter: 'January - March', stateAmount: '789548965.0000',
            cssAmount: '7845181.0000', typeRequest: 'Advance Grant', dateRequest: ' 12-Jan-2019', status: 'Approved', lying: 'Rk Jain',
        },
        {
            fileNo: '45875', departmentName: 'Education department', quarter: 'January - March', stateAmount: '502200.0000',
            cssAmount: '7845500.0000', typeRequest: 'Authorization', dateRequest: ' 12-Dec-2020', status: 'Cancelled', lying: 'Mk Jain',
        },
        {
            fileNo: '45878', departmentName: 'Legal Department', quarter: 'January - March', stateAmount: '789548965.0000',
            cssAmount: '7845181.0000', typeRequest: 'Advance Grant', dateRequest: ' 12-Jan-2019', status: 'Draft', lying: 'Rk Shah',
        },
        {
            fileNo: '45876', departmentName: 'Narmada Division', quarter: 'January - March', stateAmount: '50220.0000',
            cssAmount: '78450.0000', typeRequest: 'Authorization', dateRequest: ' 12-Dec-2020', status: 'Rejected', lying: 'Mk Mehta',
        }
        ,
        {
            fileNo: '45877', departmentName: 'Roads & Buildings Department', quarter: 'January - March', stateAmount: '5000.0000',
            cssAmount: '78400.0000', typeRequest: 'Authorization', dateRequest: ' 12-Dec-2020', status: 'Pending', lying: 'PK Jain',
        }

    ];
    grantOrderDataSource = new MatTableDataSource(this.grantOrderList);
    finYearCtrl: FormControl = new FormControl();
    revenueCapitalCtrl: FormControl = new FormControl();
    departmentCtrl: FormControl = new FormControl();
    authorizationCtrl: FormControl = new FormControl();
    statusCtrl: FormControl = new FormControl();
    ngOnInit() {
        this.searchGrantOrder = this.fb.group({
            finYear: ['1'],
            revenueCapital: [''],
            department: [''],
            authorization: [''],
            grantOrderNo: [''],
            status: [''],
            lyingWith: ['']
        });
    }
    searchGrantOrderDetails() {

    }
}
