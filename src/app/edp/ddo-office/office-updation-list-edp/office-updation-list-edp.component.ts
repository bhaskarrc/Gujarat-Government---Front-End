import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfficeRequestList } from '../../../model/ddo-offices-create';

@Component({
    selector: 'app-office-updation-list-edp',
    templateUrl: './office-updation-list-edp.component.html',
    styleUrls: ['./office-updation-list-edp.component.css']
})
export class OfficeUpdationListEDPComponent implements OnInit {
    searchDDOListForm: FormGroup;
    fileBrowseIndex: number;
    today_date = Date.now();
    selectedAll: Boolean = false;

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

    statusList: any[] = [
        { value: '1', viewValue: 'Pending' }
    ];

    ELEMENT_DATA: OfficeRequestList[] = [
        { districtCode: '51', district: 'Ahmedabad', ddoType: '500', nonDDO: '89', panchayat: '1' , Total: '590'},
        { districtCode: '51', district: 'Morbi', ddoType: '270', nonDDO: '12', panchayat: '5',  Total: '287'},
        { districtCode: '51', district: 'Amreli', ddoType: '300', nonDDO: '56', panchayat: '6'  ,  Total: '362'},
        { districtCode: '51', district: 'Bharuch', ddoType: '152', nonDDO: '78', panchayat: '9' ,  Total: '239'},
        { districtCode: '51', district: 'Dahod', ddoType: '560', nonDDO: '96', panchayat: '4' ,  Total: '239'},
        { districtCode: '51', district: 'Bhavnagar', ddoType: '12', nonDDO: '63', panchayat: '8'  ,  Total: '239'}
    ];
    displayedNewOfficeBrowseColumns = ['sr_no', 'districtCode', 'district', 'ddoType', 'nonDDO', 'panchayat', 'Total'];
    dataSource = new MatTableDataSource<OfficeRequestList>(this.ELEMENT_DATA);
    private paginator: MatPaginator;
    private sort: MatSort;

    districtCtrl: FormControl = new FormControl();

    @ViewChild('singleSelect') singleSelect: MatSelect;
    _onDestroy = new Subject<void>();

    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }
    constructor(
        public fb: FormBuilder
    ) { }

    ngOnInit() {
        this.createForm();
    }

    setDataSourceAttributes() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
        this.searchDDOListForm = this.fb.group({
            districtCode: [''],
            district: [''],
            ddoType:['']
        });
    }
    clearForm() {
        this.searchDDOListForm.reset();
    }
    saveDDO() {

    }
}
