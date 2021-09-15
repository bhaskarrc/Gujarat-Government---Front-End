import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfficeRequestDDOList } from '../../../model/ddo-offices-create';

@Component({
    selector: 'app-office-updation-list-ddo',
    templateUrl: './office-updation-list-ddo.component.html',
    styleUrls: ['./office-updation-list-ddo.component.css']
})
export class OfficeUpdationListDdoComponent implements OnInit {

    searchDDOListForm: FormGroup;
    fileBrowseIndex: number;
    today_date = Date.now();
    private paginator: MatPaginator;
    private sort: MatSort;
    selectedAll: Boolean = false;

    districtNameList: any[] = [
        { value: '1', viewValue: 'Ahmedabad' },
        { value: '2', viewValue: 'Amreli' },
        { value: '3', viewValue: 'Bharuch' },
        { value: '4', viewValue: 'Bhavnagar' },
        { value: '5', viewValue: 'Bhuj' },
        { value: '6', viewValue: 'Dahod' }
    ];

    designationList: any[] = [
        { value: '1', viewValue: 'Under Secretary' },
        { value: '2', viewValue: 'Deputy Secretary' },
        { value: '3', viewValue: 'Clerk' },
        { value: '4', viewValue: 'Deputy Section Officer' },
        { value: '5', viewValue: 'Assistant Secretary' }
    ]
    ddoTypeList: any[] = [
        { value: 'ddo', viewValue: 'DDO' },
        { value: 'nonDdo', viewValue: 'Non DDO' },
        { value: 'panchayat', viewValue: 'Panchayat' }
    ];


    adminDepartList: any[] = [
        { value: '1', viewValue: 'Administrative Department-1' },
        { value: '2', viewValue: 'Administrative Department-2' },
    ];

    hodtList: any[] = [
        { value: '1', viewValue: 'HOD-1' },
        { value: '2', viewValue: 'HOD-2' },
    ];

    statusList: any[] = [
        { value: '1', viewValue: 'Pending' }
    ];



    
    statusCtrl: FormControl = new FormControl();

    adminDepartCtrl: FormControl = new FormControl();

    hodtCtrl: FormControl = new FormControl();

    ELEMENT_DATA: OfficeRequestDDOList[] = [
        {   districtCode: 51, district: 'Ahmedabad', ddoNo: 510, cardexNo: 4, designation: 'Under Secretary', 
            officeName: 'Collector Office', ddoType: 'DDO', startDate: '17-11-2019',  endDate: '22-11-2019', 
            status: 'Active'
        },
        {   districtCode: 51, district: 'Morbi', ddoNo: 445, cardexNo: 5, designation: 'Clerk', 
            officeName: 'Collector Office', ddoType: 'DDO', startDate: '12-11-2019', endDate: '17-2-2019',
            status: 'Active'
        },
        {   districtCode: 51, district: 'Amreli', ddoNo: 737, cardexNo: 6, designation: 'Deputy Section Officer', 
            officeName: 'Collector Office', ddoType: 'DDO', startDate: '13-11-2019', endDate: '15-3-2019',
            status: 'Active'
        },
        {   districtCode: 51, district: 'Bharuch', ddoNo: 859, cardexNo: 11, designation: 'Assistant Secretary', 
            officeName: 'Collector Office', ddoType: 'DDO', startDate: '12-Oct-2020', endDate: '17-3-2019',
            status: 'Active'
        },
        {   districtCode: 51, district: 'Dahod', ddoNo: 642, cardexNo: 16, designation: 'Deputy Secretary', 
            officeName: 'Collector Office', ddoType: 'DDO', startDate: '18-04-2019', endDate: '11-2-2019',
            status: 'Active'
        },
        {   districtCode: 51, district: 'Bhavnagar', ddoNo: 628, cardexNo: 17, designation: 'Clerk', 
            officeName: 'Collector Office', ddoType: 'DDO', startDate: '05-08-2019', endDate: '17-6-2019',
            status: 'Active'
        }
    ];
    displayedNewOfficeBrowseColumns = [ 'sr_no', 'districtCode', 'district', 'ddoNo', 'cardexNo', 
        'designation', 'officeName', 'ddoType', 'startDate', 'endDate', 'status',  'action'];
    dataSource = new MatTableDataSource<OfficeRequestDDOList>(this.ELEMENT_DATA);
    
    districtCtrl: FormControl = new FormControl();
    designationCtrl: FormControl = new FormControl();

    _onDestroy = new Subject<void>();
    filterObjValue: any;

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

    createForm() {
        this.searchDDOListForm = this.fb.group({
            districtCode: [''],
            district:[''],
            officeName: [''],
            designationName:[''],
            ddoNo:[''],
            cardexNo:[''],
            ddoType:[''],
            adminDepart:[''],
            hod:[''],
            hodLst:[''],
            status:['']
        });
    }
    clearForm() {
        this.searchDDOListForm.reset();
    }
    saveDDO() {
    }

}
