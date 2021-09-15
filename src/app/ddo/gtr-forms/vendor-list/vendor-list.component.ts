import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { VendorList } from 'src/app/model/ddo-forms';

@Component({
    selector: 'app-vendor-list',
    templateUrl: './vendor-list.component.html',
    styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

    // form group
    eventsFrom: FormGroup;

    // formControls
    designationCtrl: FormControl = new FormControl();
    eventsNameCtrl: FormControl = new FormControl();
    ClassCtrl: FormControl = new FormControl();
    maxDate = new Date();

    // table data
    elementData: VendorList[] = [
        {
            accountNo: 9426283050000, bankVerficationDate: 'February 10, 2020', bankVerficationFlag: 'Yes', chequeType: 'Benefeciery',
            ifscCode: 'ICIC0000165', panNumber: 'CHKPP4545D',
            mobileNumber: '9429283056', emailId: 'patelcharul@mail.com', tanNumber: 'AAAA12345A',
            partyName: 'Charul Patel', partyAddress: 'New Ranip, Ahmedabad', status: 'Created', forwardedTo: 'Rajav Jagat'
        },
        {
            accountNo: 9426283095002, bankVerficationDate: 'January 29, 2020', bankVerficationFlag: 'Yes', chequeType: 'Supplier',
            ifscCode: 'ICIC0000165', panNumber: 'CHKLL4591D',
            mobileNumber: '7889283056', emailId: 'karandave@mail.com', tanNumber: 'AAAA77788A',
            partyName: 'Karan Dave', partyAddress: 'Sector 16, Ahmedabad', status: 'Approved', forwardedTo: 'Rajav Jagat'
        },
        {
            accountNo: 9426283078002, bankVerficationDate: '-', bankVerficationFlag: 'No', chequeType: 'Service Provider',
            ifscCode: 'ICIC0000165', panNumber: 'IVCAA8845D',
            mobileNumber: '7889288989', emailId: 'agrawal@mail.com', tanNumber: 'AAAA99988A',
            partyName: 'Agrawal Dheerendra', partyAddress: 'Sector 5, Gandhinagar', status: 'Verified', forwardedTo: 'Rajav Jagat'
        },
    ];
    displayedColumns: string[] = [
        'position',
        'partyName',
        'partyAddress',
        'accountNo',
        'ifscCode',
        'chequeType',
        'panNumber',
        'bankVerficationFlag',
        'bankVerficationDate',
        'mobileNumber',
        'emailId',
        'tanNumber',
        'status',
        'forwardedTo',
        'action'
    ];
    dataSource = new MatTableDataSource<VendorList>(this.elementData);
    // table data end


    private paginator: MatPaginator;
    private sort: MatSort;

    // lists start
    bankFlagList: CommonListing[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' },
    ];
    statusList: CommonListing[] = [
        { value: 'Created', viewValue: 'Created' },
        { value: 'Approved', viewValue: 'Approved' },
        { value: 'Verified', viewValue: 'Verified' },
    ];
    Designation: CommonListing[] = [
        { value: 'All', viewValue: 'Under Secretary' },
        { value: 'Actuary', viewValue: 'Deputy Secretary' },
        { value: 'Artist', viewValue: 'Secretary' },
        { value: 'Stuff Nurse', viewValue: 'Joint Secretary' },
        { value: 'Tailor', viewValue: 'Assistant Secretary' },
        { value: 'Tutor', viewValue: 'Section Officer' },
    ];

    chequeTypeList: CommonListing[] = [
        { value: '1', viewValue: 'Beneficary' },
        { value: '2', viewValue: 'Contractor' },
        { value: '3', viewValue: 'Grant In Aid' },
        { value: '4', viewValue: 'GST/TDS' },
        { value: '5', viewValue: 'Scholarship' },
        { value: '6', viewValue: 'Service Provider' },
        { value: '7', viewValue: 'Supplier' },
    ];
    // lists end

    // sets datasource attributes named paginator and sort
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
        this.eventsFrom = this.fb.group({
            dateCreatedTo: [''],
            eventsName: [''],
            employeeNo: [''],
            employeeName: [''],
            designation: [''],
            gpfNo: [''],
            ppanNo: [''],
            caseNo: [''],
            class: [''],
            empType: [''],
        });
    }

    // save design
    saveDesign() { }

    // resets the form
    clearForm() {
        this.eventsFrom.reset();
    }
}

