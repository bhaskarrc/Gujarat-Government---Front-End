import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { EmployeeList } from 'src/app/model/ddo-forms';


@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    // date
    maxDate = new Date();

    // variables
    private paginator: MatPaginator;
    private sort: MatSort;
    isReceive: Boolean = false;
    isForwardForNextLevel: Boolean = false;
    checkbox: Boolean = false;

    // form group
    eventsFrom: FormGroup;

    // form controls
    designationCtrl: FormControl = new FormControl();
    date = new FormControl(new Date());
    empDesgCtrl: FormControl = new FormControl();
    empTypeCtrl: FormControl = new FormControl();
    classCtrl: FormControl = new FormControl();
    officeNameCtrl: FormControl = new FormControl();
    locationCtrl: FormControl = new FormControl();
    workflowStatusCtrl: FormControl = new FormControl();

    // lists
    bankFlagList: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];
    statusList: CommonListing[] = [
        { value: 'Created', viewValue: 'Created' },
        { value: 'Approved', viewValue: 'Approved' },
        { value: 'Verified', viewValue: 'Verified' },
    ];

    designationList: CommonListing[] = [
        { value: '101011', viewValue: '2nd Additional Senior Civil Judge' },
        { value: '100983', viewValue: 'A.D.C. To H.E. Governor' },
        { value: '102385', viewValue: 'Account Clerk' },
        { value: '9910000220', viewValue: 'Account Controller' },

    ];
    employeeTypeList: CommonListing[] = [
        { value: '1', viewValue: 'GO' },
        { value: '2', viewValue: 'IPS/IAS/IFS' },
        { value: '3', viewValue: 'NGO' },
        { value: '4', viewValue: 'MLA' },
    ];
    // lists end


    // table data
    elementData: EmployeeList[] = [
        {
            accountNo: 9426283050000,
            bankVerficationDate: 'February 10, 2020',
            bankVerficationFlag: 'Yes',
            designation: 'Account Clerk',
            ifscCode: 'ICIC0000165',
            panNumber: 'CHKPP4545D',
            mobileNumber: '9429283056',
            emailId: 'patelcharul@mail.com',
            employeeType: 'GO',
            employeeName: 'Charul Patel',
            gpfCpfPpaNo: 'SBIN0010568',
            aadhaarNumber: '111122223333',
            status: 'Created',
            forwardedTo: 'B H Patel'
        },
        {
            accountNo: 9426283095002,
            bankVerficationDate: 'January 29, 2020',
            bankVerficationFlag: 'Yes',
            designation: 'Account Controller',
            ifscCode: 'ICIC0000165',
            panNumber: 'CHKLL4591D',
            mobileNumber: '7889283056',
            emailId: 'karandave@mail.com',
            employeeType: 'NGO',
            employeeName: 'Karan Dave',
            gpfCpfPpaNo: 'SBIN0010569',
            aadhaarNumber: '777722223333',
            status: 'Approved',
            forwardedTo: 'B H Patel'
        },
        {
            accountNo: 9426283078002,
            bankVerficationDate: '-',
            bankVerficationFlag: 'No',
            designation: 'Accountant',
            ifscCode: 'ICIC0000165',
            panNumber: 'IVCAA8845D',
            mobileNumber: '7889288989',
            emailId: 'agrawal@mail.com',
            employeeType: 'MLA',
            employeeName: 'Agrawal Dheerendra',
            gpfCpfPpaNo: 'SBIN0010570',
            aadhaarNumber: '111199993333',
            status: 'Verified',
            forwardedTo: 'B H Patel'
        },
    ];
    displayedColumns: string[] = [
        'position',
        'employeeName',
        'designation',
        'accountNo',
        'ifscCode',
        'employeeType',
        'gpfCpfPpaNo',
        'bankVerficationFlag',
        'bankVerficationDate',
        'mobileNumber',
        'emailId',
        'panNumber',
        'aadhaarNumber',
        'status',
        'forwardedTo',
        'action'
    ];
    dataSource = new MatTableDataSource<EmployeeList>(this.elementData);
    // table data end


    // sets dataSource attributes name paginator,sort
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

    // constructor
    constructor(
        private fb: FormBuilder,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.saveDesign();
    }

    // form data
    saveDesign() {
        this.eventsFrom = this.fb.group({
            bankVerficationDate: [''],
            bankVerficationFlag: [''],
            dateCreatedFrom: [''],
            eventsName: [''],
            employeeType: [''],
            gpfCpfPpaNo: [''],
            employeeName: [''],
            employeeDesignation: [''],
            accountNo: [''],
            ifscCode: [''],
            statusCtrl: [''],
        });
    }

    // reset form
    clearForm() {
        this.eventsFrom.reset();
    }

    // change checkbox value
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
}
