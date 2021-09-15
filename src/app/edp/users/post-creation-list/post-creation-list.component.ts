import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { postCreation } from '../../../model/users';
@Component({
    selector: 'app-post-creation-list',
    templateUrl: './post-creation-list.component.html',
    styleUrls: ['./post-creation-list.component.css']
})
export class PostCreationListComponent implements OnInit {
    selectedAll: Boolean = false;
    searchPostCreationForm: FormGroup;
    today_date = Date.now();

    districtNamelist: any[] = [
        { value: 'Ahmedabad', viewValue: 'Ahmedabad' },
        { value: 'Amreli', viewValue: 'Amreli' },
        { value: 'Bharuch', viewValue: 'Bharuch' },
        { value: 'Bhavnagar', viewValue: 'Bhavnagar' },
        { value: 'Bhuj', viewValue: 'Bhuj' },
        { value: 'Dahod', viewValue: 'Dahod' }
    ];

    designationList: any[] = [
        { value: '1', viewValue: 'Under Secretary' },
        { value: '2', viewValue: 'Deputy Secretary' },
        { value: '3', viewValue: 'Clerk' },
        { value: '4', viewValue: 'Deputy Section Officer' },
        { value: '5', viewValue: 'Assistant Secretary' }
    ];

    PendingList: any[] = [
        { value: '1', viewValue: 'Mr. S R Shukla (EDP - Joint Director)' },
    ];

    statusList: any[] = [
        { value: '1', viewValue: 'Pending' }
    ];


    districtCtrl: FormControl = new FormControl();

    designationCtrl: FormControl = new FormControl();

    statusCtrl: FormControl = new FormControl();


    _onDestroy = new Subject<void>();



    constructor(
        public fb: FormBuilder
    ) { }

    datasource: postCreation[] = [
        {
            requestNo: 510101201901, district: 'Morbi', ddoNo: 416, cardexNo: 78, ddoOffice: 'Collector Office, Morbi',
            designationName: 'Under Secretary', postName: 'Accountant Office-2', branchName: '', pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending', remarks: ''
        },
        {
            requestNo: 510101201501, district: 'Ahmedabad', ddoNo: 4160, cardexNo: 56, ddoOffice: 'Collector Office, Ahmedabad',
            designationName: 'Deputy Secretary', postName: 'Accountant Office-24', branchName: '', pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending', remarks: ''
        },
        {
            requestNo: 510101201912, district: 'Amreli', ddoNo: 4185, cardexNo: 6385, ddoOffice: 'Collector Office, Amreli',
            designationName: 'Joint Secretary', postName: 'Accountant Office-5', branchName: '', pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending', remarks: ''
        },
        {
            requestNo: 510101201988, district: 'Dahod', ddoNo: 5671, cardexNo: 8956, ddoOffice: 'Collector Office, Dahod',
            designationName: 'Clerk', postName: 'Accountant Office-10', branchName: '', pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending', remarks: ''
        },
        {
            requestNo: 510101201902, district: 'Bharuch', ddoNo: 1235, cardexNo: 5326, ddoOffice: 'Collector Office, Bharuch',
            designationName: 'Under Secretary', postName: 'Accountant Office-21', branchName: '', pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending', remarks: ''
        }
    ];

    dataSourcePayHead = new MatTableDataSource(this.datasource);
    private paginator: MatPaginator;
    private sort: MatSort;
    displayedColumns: string[] = [
        'sr_no', 'requestNo', 'date', 'district', 'ddoNo', 'cardexNo',
        'ddoOffice', 'designationName', 'postName', 'pendingWith', 'status', 'remarks', 'action'];

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
        this.searchPostCreationForm = this.fb.group({
            transNO: [''],
            district: [''],
            ddoNO: [''],
            cardexNo: [''],
            postName: [''],
            designationName: [''],
            ddoOffice: [''],
            pendingWith: [''],
            status: ['']
        });
    }
    clearForm() {
        this.searchPostCreationForm.reset();
    }
    savePostCreation() {
    }
}
