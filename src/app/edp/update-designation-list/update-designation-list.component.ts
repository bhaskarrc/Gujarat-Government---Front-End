import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateDesignation } from '../../model/update-designation';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-update-designation-list',
    templateUrl: './update-designation-list.component.html',
    styleUrls: ['./update-designation-list.component.css']
})
export class UpdateDesignationListComponent implements OnInit {
    selectedAll: Boolean = false;
    refFromDate =  Date.now();
    refToDate =  Date.now();
    searchUpdateDesignForm: FormGroup;

    userIdGPFNo_list: any[] = [
        { value: '01', viewValue: 'Pratik-GAGUJ6386' },
        { value: '02', viewValue: 'Rakesh-GAGUJ6389' },
    ];

    designationList: any[] = [
        { value: '01', viewValue: 'Deputy Mamlatdar' },
        { value: '02', viewValue: 'Chif Deputy Mamlatdar' },
    ];

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

    private _onDestroy = new Subject<void>();
    private paginator: MatPaginator;
    private sort: MatSort;



    GPFNoIdCtrl: FormControl = new FormControl();
    userIdGPFNolist: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    desigCtrl: FormControl = new FormControl();
    designationlist: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    statusCtrl: FormControl = new FormControl();
    filteredStatus: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);


    districtCtrl: FormControl = new FormControl();
    filteredDistrict: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    
    officeLevelCtrl: FormControl = new FormControl();

    adminDepartCtrl: FormControl = new FormControl();

    hodtCtrl: FormControl = new FormControl();
    controlOfctrl: FormControl = new FormControl();

    datasource: UpdateDesignation[] = [{
        reqNo: 510101201901,
        district: 'Ahmedabad',
        ddNo: 4106,
        cardexNo: 7800,
        ddoOffice: 'Collector Office, Ahmedabad',
        empNo: 1000110055,
        empName: 'Pankaj Kumar Gupta',
        designation: 'Office Suprintendent',
        Pending: 'Ms. G R Patel (EDP - Head Accountant)',
        remakes: '',
        status: 'Pending'
    }];

    dataSourcePayHead = new MatTableDataSource(this.datasource);
    displayedColumns: string[] = [
         'srno', 'reqNo', 'refFromDate', 'refToDate', 'district', 'ddNo', 'cardexNo', 'designation',  'empNo', 'empName', 
          'Pending', 'status', 'remakes', 'action'
    ];

    constructor(
        private router: Router,
        private el: ElementRef,
        private fb: FormBuilder,
    ) { }


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


        this.userIdGPFNolist.next(this.userIdGPFNo_list.slice());
        this.GPFNoIdCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.userIdGPFNo_list, this.GPFNoIdCtrl.value, this.userIdGPFNolist);
            });

        this.designationlist.next(this.designationList.slice());
        this.desigCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.designationList, this.desigCtrl.value, this.designationlist);
            });

         //Filter of Status
         this.filteredStatus.next(this.statusList.slice());
         this.statusCtrl.valueChanges
             .pipe(takeUntil(this._onDestroy))
             .subscribe(() => {
                 this.filterObjValue(this.statusList, this.statusCtrl.value, this.filteredStatus);
             });

      //Filter Of District
        this.filteredDistrict.next(this.districtNamelist.slice());
        this.districtCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.districtNamelist, this.districtCtrl.value, this.filteredDistrict);
            });

    }

    createForm() {
        this.searchUpdateDesignForm = this.fb.group({
            transNO: [''],
            employeeNo: [''],
            actpost: [''],
            desig: [''] ,
            empNo: [''],
            empName: [''],
            status: [''],
            district: [''],
            ddono: [''],
            ddoOfficeName: [''],
            cardexNo: [''],
            officeLevel: [''],
            adminDepart: [''],
            hodLst: [''],
            cntroOfc: ['']
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

    
    goRequestNo() { }
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
        this.searchUpdateDesignForm.reset();
    }
    edit() {
        this.router.navigate(['/edp/add-update-designation']);
    }
    saveUpdateDesign() {
    }
    goToDashboard() {
    }

    Updatedesignation() {
    }
}
