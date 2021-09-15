import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSelect, MatPaginator, MatSort, } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {  Subject } from 'rxjs';
import { UserRoleMappingList } from '../../../model/edp-user-role-mapping';

@Component({
    selector: 'app-user-role-mapping-list',
    templateUrl: './user-role-mapping-list.component.html',
    styleUrls: ['./user-role-mapping-list.component.css']
})
export class UserRoleMappingListComponent implements OnInit {

    searchListForm: FormGroup;

    @ViewChild('singleSelect') singleSelect: MatSelect;
    _onDestroy = new Subject<void>();


    status_list: any[] = [
        { value: '01', viewValue: 'Pending' },
        { value: '02', viewValue: 'Pending' },
        { value: '03', viewValue: 'Pending' },
    ];


    districtNamelist: any[] = [
        { value: 'Ahmedabad', viewValue: 'Ahmedabad' },
        { value: 'Amreli', viewValue: 'Amreli' },
        { value: 'Bharuch', viewValue: 'Bharuch' },
        { value: 'Bhavnagar', viewValue: 'Bhavnagar' },
        { value: 'Bhuj', viewValue: 'Bhuj' },
        { value: 'Dahod', viewValue: 'Dahod' }
    ];

    datasource: UserRoleMappingList[] = [
        {
            requestNo: '510101201901',
            requestDate: '18/11/2019 13:12:51',
            district: 'Ahmedabad',
            ddoNo: 416,
            cardexNo: 78,
            ddoOfficeName: 'Collector Office, Ahmedabad',
            employeeNo: 'GAGUJ6386',
            userName: 'Mr. Pratik Shah',
            lyingWith: 'Mr. S R Shukla (EDP - Joint Director)',
            requestStatus: 'Pending',
            remarks: 'No remarks',
        },
        {
            requestNo: '510101201901',
            requestDate: '16/11/2019 10:30:25',
            district: 'Ahmedabad',
            ddoNo: 416,
            cardexNo: 78,
            ddoOfficeName: 'Collector Office, Ahmedabad',
            employeeNo: 'GAGUJ6386',
            userName: 'Mr. Pratik Shah',
            lyingWith: 'Mr. S R Shukla (EDP - Joint Director)',
            requestStatus: 'Pending',
            remarks: 'No remarks',

        },
        {
            requestNo: '510101201901',
            requestDate: '15/11/2019 9:30:10',
            district: 'Ahmedabad',
            ddoNo: 416,
            cardexNo: 78,
            ddoOfficeName: 'Collector Office, Ahmedabad',
            employeeNo: 'GAGUJ6386',
            userName: 'Mr. Pratik Shah',
            lyingWith: 'Mr. S R Shukla (EDP - Joint Director)',
            requestStatus: 'Pending',
            remarks: 'No remarks',
        }
    ];

    selectedAll: Boolean = false;
    today_date = Date.now();
    expendCharges: boolean;


    districtCtrl: FormControl = new FormControl();

    statusCtrl: FormControl = new FormControl();

    dataSource = new MatTableDataSource(this.datasource);

    displayedColumns: string[] = [
        'srNo', 'requestNo', 'requestDate',  'district',
        'ddoNo', 'cardexNo', 'ddoOfficeName',   'employeeNo','userName',  'lyingWith', 'requestStatus', 'remarks', 'action'
    ];
    dataSourcePayHead: any;

    private paginator: MatPaginator;
    private sort: MatSort;

    constructor(
        private router: Router,
        private fb: FormBuilder,
    ) { }

    ngOnInit() {

        this.searchListForm = this.fb.group({
            transNO: [''],
            empNO: [''],
            empName: [''],
            status: [''],
            district: [''],
            ddono: [''],
            cardexNo: ['']
        });
    }

    filterObjValue(arrValue, searchValue, filteredValue) {
        if (!arrValue) {
            return;
        }
        // get the search keyword
        let search = searchValue;
        if (!search) {
            filteredValue.next(arrValue.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the values
        filteredValue.next(
            arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
        );
    }


    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }

    setDataSourceAttributes() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }


    goToDashboard() {
        this.router.navigate(['']);
    }
    searchEstimate() {

    }
    clearForm(data) {

    }
}
