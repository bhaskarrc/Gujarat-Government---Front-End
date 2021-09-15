import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DDORequestList } from '../../../model/ddo-offices-create';

@Component({
    selector: 'app-request-listing',
    templateUrl: './request-listing.component.html',
    styleUrls: ['./request-listing.component.css']
})
export class RequestListingComponent implements OnInit {
    searchDDOListForm: FormGroup;
    fileBrowseIndex: number;
    today_date = Date.now();
    selectedAll: Boolean = false;

    ELEMENT_DATA: DDORequestList[] = [
        // tslint:disable-next-line: max-line-length
        { requestNo: 510101201901,  district: 'Ahmedabad', designation: 'Accounts Officer', ddoOfficeName: 'Collector Office,Ahmedabad',  ddoNo: 20, cardexNo: 1234, pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending', remarks: ' ' },
        // tslint:disable-next-line: max-line-length
        { requestNo: 510101201905,   district: 'Morbi', designation: 'Accounts Officer', ddoOfficeName: 'Collector Office, Morbi',  ddoNo: 20,  cardexNo: 1234, pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending',  remarks: 'Remarks for DDO'  },
        // tslint:disable-next-line: max-line-length
        { requestNo: 510101201910,   district: 'Amreli', designation: 'Accounts Officer', ddoOfficeName: 'Collector Office, Amreli', ddoNo: 20,  cardexNo: 1234, pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending',  remarks: ''  },
        // tslint:disable-next-line: max-line-length
        { requestNo: 510101201908,  district: 'Bharuch', designation: 'Accounts Officer', ddoOfficeName: 'Collector Office, Bharuch', ddoNo: 20,  cardexNo: 1234, pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending',  remarks: ''  },
        // tslint:disable-next-line: max-line-length
        { requestNo: 510101201914,  district: 'Dahod', designation: 'Accounts Officer', ddoOfficeName: 'Collector Office, Dahod', ddoNo: 20,  cardexNo: 1234, pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending',  remarks: 'Remarks for DDO' },
        // tslint:disable-next-line: max-line-length
        { requestNo: 510101201956,   district: 'Bhavnagar', designation: 'Accounts Officer', ddoOfficeName: 'Collector Office, Bhavnagar', ddoNo: 20,  cardexNo: 1234, pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending',  remarks: ''  }
    ];
    // tslint:disable-next-line: max-line-length
    displayedNewOfficeBrowseColumns = ['sr_no', 'requestNo',  'date', 'district', 'designation', 'ddoOfficeName',  'ddoNo',   'cardexNo', 'pendingWith', 'status',  'remarks', 'action'];

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
        { value: '1', viewValue: 'Pending' },
        { value: '2', viewValue: 'Approved' }
    ];

    officeNameList: any[] = [
        { value: '1', viewValue: 'Administrative Department' },
        { value: '2', viewValue: 'Head of Department (HOD)' },
        { value: '3', viewValue: 'Drawing and Disbursing Office (DDO)' }
    ];

    adminDepartList: any[] = [
        { value: '1', viewValue: 'Administrative Department-1' },
        { value: '2', viewValue: 'Administrative Department-2' },
    ];

    hodtList: any[] = [
        { value: '1', viewValue: 'HOD-1' },
        { value: '2', viewValue: 'HOD-2' },
    ];

    ControlingOffice: any[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];




    dataSource = new MatTableDataSource<DDORequestList>(this.ELEMENT_DATA);
    private paginator: MatPaginator;
    private sort: MatSort;

    districtCtrl: FormControl = new FormControl();

    statusCtrl: FormControl = new FormControl();

    designationCtrl: FormControl = new FormControl();

    officeLevelCtrl: FormControl = new FormControl();

    adminDepartCtrl: FormControl = new FormControl();

    hodtCtrl: FormControl = new FormControl();
    controlOfctrl: FormControl = new FormControl();

    _onDestroy = new Subject<void>();

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

    selectAll() {
        this.dataSource.data.forEach(_d => {
            _d['selected'] = this.selectedAll;
        });
        this.dataSource = new MatTableDataSource(this.dataSource.data);
    }

    checkIfAllSelected() {
        this.selectedAll = this.dataSource.data.every((item: any) => {
            return item.selected === true;
        });
    }
    constructor(
        public fb: FormBuilder
    ) { }

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
        this.searchDDOListForm = this.fb.group({
            transNO: [''],
            designationName: [''],
            ddoOfficeName: [''],
            pendingWith: [''],
            status: [''],
            district: [''],
            ddono: [''],
            cardexNo: [''],
            officeLevel: [''],
            adminDepart: [''],
            hodLst: [''],
            cntroOfc: [''],
            admindep: ['']
        });
    }
    clearForm() {
        this.searchDDOListForm.reset();
    }
    saveDDO() {

    }
}
