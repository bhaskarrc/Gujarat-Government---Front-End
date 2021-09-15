import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { AddDesignation } from '../../model/add-designation'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
    selector: 'app-add-designation-list',
    templateUrl: './add-designation-list.component.html',
    styleUrls: ['./add-designation-list.component.css']
})
export class AddDesignationListComponent implements OnInit {

    searchaddDesignForm: FormGroup;
    refFromDate = Date.now();
    refToDate = Date.now();
    selectedAll: Boolean = false;
    datasource: AddDesignation[] = [{
        refNo: 7822567,
        district: 'Ahmedabad',
        ddoNo: 416,
        cardexNo: 78,
        desiName: 'Office Suprintendent',
        lyingWith: 'Ms. G R Patel (EDP - Head Accountant)',
        remakes: '',
        status: 'Pending'
    }];

    dataSourcePayHead = new MatTableDataSource(this.datasource);
    displayedColumns: string[] = [
        'srno', 'refNo', 'refFromDate', 'refToDate', 'district', 'ddoNo', 'cardexNo',
        'desiName', 'lyingWith', 'status', 'remakes', 'action'
    ];

    private paginator: MatPaginator;
    private sort: MatSort;

    private _onDestroy = new Subject<void>();

    constructor(private router: Router, private el: ElementRef, private fb: FormBuilder, ) { }

    statusList: any[] = [
        { value: '1', viewValue: 'Pending' }
    ];


    districtNamelist: any[] = [
        { value: 'Ahmedabad', viewValue: 'Ahmedabad' },
        { value: 'Amreli', viewValue: 'Amreli' },
        { value: 'Bharuch', viewValue: 'Bharuch' },
        { value: 'Bhavnagar', viewValue: 'Bhavnagar' },
        { value: 'Bhuj', viewValue: 'Bhuj' },
        { value: 'Dahod', viewValue: 'Dahod' }
    ];


    statusCtrl: FormControl = new FormControl();


    districtCtrl: FormControl = new FormControl();

    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }

    setDataSourceAttributes() {
        this.dataSourcePayHead.paginator = this.paginator;
        this.dataSourcePayHead.sort = this.sort;
    }

    ngOnInit() {
        this.createForm();
    }

    filteredStatus() {

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


    createForm() {
        this.searchaddDesignForm = this.fb.group({
            designationShortName: ['', Validators.required],
            requestno: [''],
            transNO: [''],
            ddoOfficeName: [''],
            designationName: [''],
            // empno: [''],
            // empName: [''],
            status: [''],
            district: [''],
            ddoNO: [''],
            cardexNo: ['']
        });
    }
    selectAll() {
        this.dataSourcePayHead.data.forEach(_d => {
        });
        this.dataSourcePayHead = new MatTableDataSource(this.dataSourcePayHead.data);
    }
    checkIfAllSelected() {
        this.selectedAll = this.dataSourcePayHead.data.every((item: any) => {
            return item.selected === true;
        });
    }
    clearForm() {
        this.searchaddDesignForm.reset();
    }
    edit() {
        this.router.navigate(['/edp/add-designation']);
    }
    saveDesign() {
    }
    goToDashboard() {

    }


}
