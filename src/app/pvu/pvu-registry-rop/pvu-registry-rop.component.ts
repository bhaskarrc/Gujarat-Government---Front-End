import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { PayRegistrySearchList, DialogData } from '../../model/pvu-registry';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
    selector: 'app-pvu-registry-rop',
    templateUrl: './pvu-registry-rop.component.html',
    styleUrls: ['./pvu-registry-rop.component.css']
})
export class PvuRegistryRopComponent implements OnInit {

    ELEMENT_DATA: PayRegistrySearchList[] = [
        {
            checkbox: false, transNo: 1002, inwardDate: '-', inwardNo: '-', eventName: 'ROP 2006', empNumber: 1100100012,
            employeeName: 'Narendra', empDesignation: 'Assistant Manager',
            empType: 'Regular', fwdDate: '10/10/2019', officeName: 'Pension Payment Office, Ahmedabad', retirementDate: '10/10/2019'
        },
        {
            checkbox: false, transNo: 1003, inwardDate: '-', inwardNo: '-', eventName: 'ROP 2016', empNumber: 1100100020,
            employeeName: 'Pankaj', empDesignation: 'Dy. Manager',
            empType: 'Regular', fwdDate: '10/10/2019', officeName: 'District Treasury Office, Ahmedabad', retirementDate: '10/10/2019'
        },
        {
            checkbox: false, transNo: 1004, inwardDate: '-', inwardNo: '-', eventName: 'ROP 2006', empNumber: 1100102000,
            employeeName: 'Amit', empDesignation: 'Manager',
            empType: 'Regular', fwdDate: '10/10/2019', officeName: 'Pay & Accounts Office Ahmedabad', retirementDate: '10/10/2019'
        },
    ];

    displayedColumns: string[] = ['checkbox', 'position', 'transNo', 'inwardDate', 'inwardNo', 'eventName', 'empNumber', 'employeeName',
        'empDesignation', 'retirementDate', 'empType', 'fwdDate', 'officeName'];

    eventsFrom: FormGroup;
    private paginator: MatPaginator;
    private sort: MatSort;

    isReceive: Boolean = false;
    isForwardForNextLevel: Boolean = false;
    checkbox: Boolean = false;

    Designation: CommonListing[] = [
        { value: '1', viewValue: 'Under Secretary' },
        { value: '2', viewValue: 'Deputy Secretary' },
        { value: '3', viewValue: 'Secretary' },
        { value: '4', viewValue: 'Joint Secretary' },
        { value: '5', viewValue: 'Assistant Secretary' },
        { value: '6', viewValue: 'Section Officer' },
    ];
    eventsName_list: CommonListing[] = [
        { value: '1', viewValue: 'ROP 2006' },
        { value: '2', viewValue: 'ROP 2016' },
    ];
    Class: CommonListing[] = [
        { value: 'class 1', viewValue: 'Class I' },
        { value: 'class 2', viewValue: 'Class II' },
        { value: 'class 3', viewValue: 'Class III' },
        { value: 'class 4', viewValue: 'Class IV' },
    ];
    EmpType: CommonListing[] = [
        { value: '1', viewValue: 'GO' },
        { value: '2', viewValue: 'NGO' },
        { value: '3', viewValue: 'AIS' },
    ];
    location_list: CommonListing[] = [
        { value: '1', viewValue: 'Rajkot' },
        { value: '2', viewValue: 'Gandhinagar' },
    ];
    cardexNo_list: CommonListing[] = [
        { value: '1', viewValue: '0142' },
        { value: '2', viewValue: '0143' },
        { value: '3', viewValue: '0144' },
        { value: '4', viewValue: '0145' },
    ];
    ddoNo_list: CommonListing[] = [
        { value: '1', viewValue: '1142' },
        { value: '2', viewValue: '1143' },
        { value: '3', viewValue: '1144' },
        { value: '4', viewValue: '1145' },
    ];
    district_list: CommonListing[] = [
        { value: '1', viewValue: 'Ahmedabad' },
        { value: '2', viewValue: 'Amreli' },
        { value: '3', viewValue: 'Anand' },
        { value: '4', viewValue: 'Banaskantha' },
        { value: '5', viewValue: 'Bharuch' },
        { value: '6', viewValue: 'Bhavnagar' },
        { value: '7', viewValue: 'Dahod' },
        { value: '8', viewValue: 'Dang' },
        { value: '9', viewValue: 'Gandhinagar' },
    ];

    DesignationCtrl: FormControl = new FormControl();
    date = new FormControl(new Date());
    eventsNameCtrl: FormControl = new FormControl();
    ClassCtrl: FormControl = new FormControl();
    EmpTypeCtrl: FormControl = new FormControl();
    locationCtrl: FormControl = new FormControl();
    districtCtrl: FormControl = new FormControl();
    cardexNoCtrl: FormControl = new FormControl();
    ddoNoCtrl: FormControl = new FormControl();

    dataSource = new MatTableDataSource<PayRegistrySearchList>(this.ELEMENT_DATA);

    setDataSourceAttributes() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }

    constructor(
        private fb: FormBuilder,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.eventsFrom = this.fb.group({
            dateCreatedTo: [''],
            dateCreatedFrom: [''],
            eventsName: [''],
            employeeNo: [''],
            employeeName: [''],
            designation: [''],
            gpfNo: [''],
            caseNo: [''],
            class: [''],
            retirementDate: [''],
            panNo: [''],
            district: [''],
            cardexNo: [''],
            ddoNo: [''],
            empType: [''],
            dateInwardFrom: [''],
            dateInwardTo: [''],
            inwardNo: ['']
        });
    }

    saveDesign() { }
    clearForm() {
        this.eventsFrom.reset();
    }
    goToDashboard() { }

    checkboxValueChange() {
        let cnt = 0;
        this.dataSource.data.forEach((element, index) => {
            if (element['checkbox']) {
                cnt++;
            }
        });
        this.isReceive = (cnt > 0) ? true : false;
        this.isForwardForNextLevel = (cnt > 0) ? true : false;
    }

    selectAll() {
        this.dataSource.data.forEach(obj => {
            obj.checkbox = this.checkbox;
        });
        this.isReceive = this.checkbox;
        this.isForwardForNextLevel = this.checkbox;
    }

    addInwardDate() {
        let selectedData = [];
        selectedData = this.dataSource.data.filter(item => item.checkbox);
        selectedData.forEach(event => {
            event.inwardDate = new Date();
        });
    }

    fwdInwardData(): void {
        const selectedData = [];
        selectedData['data'] = this.dataSource.data.filter(item => item.checkbox);

        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(FwdPvuRegistryRopDialogComponent, {
            width: '400px',
            data: selectedData
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}

@Component({
    selector: 'app-pvu-registry-rop-dialog',
    templateUrl: 'pvu-registry-rop-dialog.html',
})
export class FwdPvuRegistryRopDialogComponent implements OnInit {

    actionForm: FormGroup;

    errorMessages = {
        FIN_YEAR: 'Please select any Financial Year',
        DEPARTMENT: 'Please select any Department',
    };


    user_list: any[] = [
        { value: '1', viewValue: 'Amit Pandey' },
    ];

    actionCtrl: FormControl = new FormControl();
    userCodeCtrl: FormControl = new FormControl();

    private _onDestroy = new Subject<void>();

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<FwdPvuRegistryRopDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

    filteredOptions: Observable<string[]>;
    options: any;
    myControl = new FormControl();
    additionalText = new FormControl();
    ngOnInit() {

        this.createForm();

        console.log('data', this.data);
        this.options = this.data;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );

        this.actionForm.patchValue({
            'actionCode': '1',
            'userCode': '1'
        });
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
        this.actionForm = this.fb.group({
            actionCode: ['', Validators.required],
            userCode: ['', Validators.required],
            dateSrNoFrom: [''],
            dateSrNoTo: [''],
        });
    }

    forwardConsolidate() {
        console.log('forwardConsolidate');
        this.dialogRef.close('yes');
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
