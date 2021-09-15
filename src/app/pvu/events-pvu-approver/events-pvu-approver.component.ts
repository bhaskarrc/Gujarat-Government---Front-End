import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { EventsPvuList, DialogData, EventsPvuApproverList } from '../../model/events-pvu-list';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CommonListing } from 'src/app/model/common-listing';

@Component({
    selector: 'app-events-pvu-approver',
    templateUrl: './events-pvu-approver.component.html',
    styleUrls: ['./events-pvu-approver.component.css']
})
export class EventsPvuApproverComponent implements OnInit {

    ELEMENT_DATA: EventsPvuApproverList[] = [
        {
            transNo: 1002, inwardDate: '10/09/2019 11:15:10', inwardNo: '10254', eventName: 'Change of Scale', empNo: 1100100012,
            empName: 'Narendra', empDesignation: 'Assistant Manager',
            empType: 'Regular', officeName: 'Pension Payment Office, Ahmedabad', status: 'Tushar', fwdDate: '10/09/2019'
        },
        {
            transNo: 1003, inwardDate: '11/10/2019 13:15:10', inwardNo: '10356', eventName: 'Senior Scale', empNo: 1100100020,
            empName: 'Pankaj', empDesignation: 'Dy. Manager',
            empType: 'Regular', officeName: 'District Treasury Office, Ahmedabad', status: 'Charul', fwdDate: '10/09/2019'
        },
        {
            transNo: 1004, inwardDate: '09/11/2019 16:15:10', inwardNo: '11223', eventName: 'Change of Scale', empNo: 1100102000,
            empName: 'Amit', empDesignation: 'Manager',
            empType: 'Regular', officeName: 'Pay & Accounts Office Ahmedabad', status: 'Mahesh', fwdDate: '10/09/2019'
        },
    ];

    displayedColumns: string[] = ['position', 'transNo', 'inwardDate', 'inwardNo', 'eventName',
        'empDesignation', 'empType', 'officeName', 'status', 'fwdDate', 'action'];

    eventsFrom: FormGroup;
    private paginator: MatPaginator;
    private sort: MatSort;

    isReceive: Boolean = false;
    isForwardForNextLevel: Boolean = false;
    checkbox: Boolean = false;


    Designation: CommonListing[] = [
        { value: 'All', viewValue: 'Under Secretary' },
        { value: 'Actuary', viewValue: 'Deputy Secretary' },
        { value: 'Artist', viewValue: 'Secretary' },
        { value: 'Stuff Nurse', viewValue: 'Joint Secretary' },
        { value: 'Tailor', viewValue: 'Assistant Secretary' },
        { value: 'Tutor', viewValue: 'Section Officer' },
    ];

    eventsName_list: CommonListing[] = [
        { value: '1', viewValue: 'Senior Scale' },
        { value: '2', viewValue: 'Deemed Date' },
        { value: '3', viewValue: 'Shetty Pay' },
        { value: '4', viewValue: 'Tiku Pay' },
        { value: '5', viewValue: 'Stepping Up' },
        { value: '6', viewValue: 'Selection Grade' },
        { value: '7', viewValue: 'Change of Scale' },
        { value: '8', viewValue: 'Promotion with Forgo' },
    ];

    Class: CommonListing[] = [
        { value: 'class 1', viewValue: 'Class I' },
        { value: 'class 2', viewValue: 'Class II' },
        { value: 'class 3', viewValue: 'Class III' },
        { value: 'class 4', viewValue: 'Class IV' },
    ];

    officeName_list: CommonListing[] = [
        { value: 'class 1', viewValue: 'Pay & Accounts Office Ahmedabad' },
        { value: 'class 2', viewValue: 'Pension Payment Office, Ahmedabad' },
        { value: 'class 3', viewValue: 'District Asst Examiner Local Fund Accounts, Ahmeda' },
        { value: 'class 4', viewValue: 'District Treasury Office, Ahmedabad' },
    ];

    EmpType: CommonListing[] = [
        { value: '01', viewValue: 'GO' },
        { value: '02', viewValue: 'NGO' },
        { value: '03', viewValue: 'AIS' },
    ];
    location_list: CommonListing[] = [
        { value: 'Ahemdabad', viewValue: 'Rajkot' },
        { value: 'Gandhinagar', viewValue: 'Gandhinagar' },
    ];
    // workflowStatus_list: CommonListing[] = [
    //     { value: '1', viewValue: 'Amit' },
    //     { value: '2', viewValue: 'Narendra' },
    // ];
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
    officeNameCtrl: FormControl = new FormControl();
    EmpTypeCtrl: FormControl = new FormControl();
    locationCtrl: FormControl = new FormControl();
    // workflowStatusCtrl: FormControl = new FormControl();
    districtCtrl: FormControl = new FormControl();
    cardexNoCtrl: FormControl = new FormControl();
    ddoNoCtrl: FormControl = new FormControl();

    dataSource = new MatTableDataSource<EventsPvuApproverList>(this.ELEMENT_DATA);

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
            panNo: [''],
            district: [''],
            cardexNo: [''],
            ddoNo: [''],
            // gpfNo: [''],
            // ppanNo: [''],
            caseNo: [''],
            class: [''],
            retirementDate: [''],
            officeName: [''],
            empType: [''],
            dateInwardFrom: [''],
            dateInwardTo: [''],
            // workflowStatus: [''],
            inwardNo: [''],
            fmpType: [''],
            empNo: ['']
        });
    }

    saveDesign() { }
    clearForm() {
        this.eventsFrom.reset();
    }
    goToDashboard() { }

    // checkboxValueChange() {
    //     let cnt = 0;
    //     this.dataSource.data.forEach((element, index) => {
    //         if (element['checkbox']) {
    //             cnt++;
    //         }
    //     });
    //     this.isReceive = (cnt > 0) ? true : false;
    //     this.isForwardForNextLevel = (cnt > 0) ? true : false;
    // }

    // selectAll() {
    //     this.dataSource.data.forEach(obj => {
    //         obj.checkbox = this.checkbox;
    //     });
    //     this.isReceive = this.checkbox;
    //     this.isForwardForNextLevel = this.checkbox;
    // }

    // addInwardDate() {
    //     let selectedData = [];
    //     selectedData = this.dataSource.data.filter(item => item.checkbox);
    //     selectedData.forEach(event => {
    //         event.inwardDate = new Date();
    //     });
    // }

    // fwdInwardData(): void {
    //     const selectedData = [];
    //     selectedData['data'] = this.dataSource.data.filter(item => item.checkbox);

    //     // tslint:disable-next-line: no-use-before-declare
    //     const dialogRef = this.dialog.open(EventsPuvApproverDialogComponent, {
    //         width: '400px',
    //         data: selectedData
    //     });

    //     dialogRef.afterClosed().subscribe(result => {
    //         console.log('The dialog was closed');
    //     });
    // }
}

@Component({
    selector: 'app-events-pvu-approver-dialog',
    templateUrl: 'events-pvu-approver-dialog.html',
})
export class EventsPuvApproverDialogComponent implements OnInit {

    actionForm: FormGroup;

    errorMessages = {
        FIN_YEAR: 'Please select any Financial Year',
        DEPARTMENT: 'Please select any Department',
    };

    action_list: any[] = [
        { value: '1', viewValue: 'Forward' },
    ];

    user_list: any[] = [
        { value: '1', viewValue: 'Satendra Zala (Verifier-HoD)' },
    ];

    actionCtrl: FormControl = new FormControl();
    userCodeCtrl: FormControl = new FormControl();

    private _onDestroy = new Subject<void>();

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<EventsPuvApproverDialogComponent>,
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
