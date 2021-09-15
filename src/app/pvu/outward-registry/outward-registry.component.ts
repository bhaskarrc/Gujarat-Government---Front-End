import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonList } from 'src/app/model/common-listing';
import { OutwardRegistryList } from 'src/app/model/outward-registry';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-outward-registry',
    templateUrl: './outward-registry.component.html',
    styleUrls: ['./outward-registry.component.css']
})
export class OutwardRegistryComponent implements OnInit {

    status_list: CommonList[] = [
        { id: '1', name: 'Authorised' },
        { id: '2', name: 'Return' },
    ];
    approverName_list: CommonList[] = [
        { id: '1', name: 'Narendra' },
        { id: '2', name: 'Amit' },
    ];
    designation_list: CommonList[] = [
        { id: 'All', name: 'Under Secretary' },
        { id: 'Actuary', name: 'Deputy Secretary' },
        { id: 'Artist', name: 'Secretary' },
        { id: 'Stuff Nurse', name: 'Joint Secretary' },
        { id: 'Tailor', name: 'Assistant Secretary' },
        { id: 'Tutor', name: 'Section Officer' },
    ];
    district_list: CommonList[] = [
        { id: '1', name: 'Ahmedabad' },
        { id: '2', name: 'Amreli' },
        { id: '3', name: 'Anand' },
        { id: '4', name: 'Banaskantha' },
        { id: '5', name: 'Bharuch' },
        { id: '6', name: 'Bhavnagar' },
        { id: '7', name: 'Dahod' },
        { id: '8', name: 'Dang' },
        { id: '9', name: 'Gandhinagar' },
    ];
    cardexNo_list: CommonList[] = [
        { id: '1', name: '0142' },
        { id: '2', name: '0143' },
        { id: '3', name: '0144' },
        { id: '4', name: '0145' },
    ];
    ddoNo_list: CommonList[] = [
        { id: '1', name: '1142' },
        { id: '2', name: '1143' },
        { id: '3', name: '1144' },
        { id: '4', name: '1145' },
    ];
    Class_list: CommonList[] = [
        { id: 'class 1', name: 'Class I' },
        { id: 'class 2', name: 'Class II' },
        { id: 'class 3', name: 'Class III' },
        { id: 'class 4', name: 'Class IV' },
    ];
    officeName_list: CommonList[] = [
        { id: 'class 1', name: 'Pay & Accounts Office Ahmedabad' },
        { id: 'class 2', name: 'Pension Payment Office, Ahmedabad' },
        { id: 'class 3', name: 'District Asst Examiner Local Fund Accounts, Ahmeda' },
        { id: 'class 4', name: 'District Treasury Office, Ahmedabad' },
    ];
    empType_list: CommonList[] = [
        { id: '01', name: 'GO' },
        { id: '02', name: 'NGO' },
        { id: '03', name: 'AIS' },
    ];

    outwardEventsFrom: FormGroup;
    isReceive: Boolean = false;
    checkbox: Boolean = false;

    statusCtrl: FormControl = new FormControl();
    approverNameCtrl: FormControl = new FormControl();
    designationCtrl: FormControl = new FormControl();
    districtCtrl: FormControl = new FormControl();
    cardexNoCtrl: FormControl = new FormControl();
    ddoNoCtrl: FormControl = new FormControl();
    ClassCtrl: FormControl = new FormControl();
    officeNameCtrl: FormControl = new FormControl();
    EmpTypeCtrl: FormControl = new FormControl();

    ELEMENT_DATA: OutwardRegistryList[] = [
        {
            checkbox: false, outwardNo: 1002, outwardDate: '-', postalNo: '', empNumber: 1100100012,
            employeeName: 'Narendra', actionDate: '15/06/2019', officeName: 'Pension Payment Office, Ahmedabad'
        },
        {
            checkbox: false, outwardNo: 1003, outwardDate: '-', postalNo: '', empNumber: 1100100020,
            employeeName: 'Pankaj', actionDate: '15/09/2019', officeName: 'District Treasury Office, Ahmedabad'
        },
        {
            checkbox: false, outwardNo: 1004, outwardDate: '-', postalNo: '', empNumber: 1100102000,
            employeeName: 'Amit', actionDate: '20/10/2019', officeName: 'Pay & Accounts Office Ahmedabad'
        },
    ];

    displayedColumns: string[] = ['checkbox', 'position', 'outwardNo', 'outwardDate', 'postalNo', 'empNumber', 'employeeName',
        'actionDate', 'officeName'];

    dataSource = new MatTableDataSource<OutwardRegistryList>(this.ELEMENT_DATA);

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.outwardEventsFrom = this.fb.group({
            inwardFromDate: [''],
            inwardToDate: [''],
            inwardNo: [''],
            outwardFromDate: [''],
            outwardToDate: [''],
            outwardNo: [''],
            status: [''],
            approverName: [''],
            employeeNo: [''],
            employeeName: [''],
            designation: [''],
            panNo: [''],
            district: [''],
            cardexNo: [''],
            ddoNo: [''],
            dateOfRetirement: [''],
            caseNo: [''],
            class: [''],
            officeName: [''],
            empType: [''],

        });
    }

    clearForm() {
        this.outwardEventsFrom.reset();
    }

    checkboxValueChange() {
        let cnt = 0;
        this.dataSource.data.forEach((element, index) => {
            if (element['checkbox']) {
                cnt++;
            }
        });
        this.isReceive = (cnt > 0) ? true : false;
        // this.isForwardForNextLevel = (cnt > 0) ? true : false;
    }

    selectAll() {
        this.dataSource.data.forEach(obj => {
            obj.checkbox = this.checkbox;
        });
        this.isReceive = this.checkbox;
        // this.isForwardForNextLevel = this.checkbox;
    }
    saveDesign() {}
    fwdInwardData() {}
    goToDashboard() {}
    addInwardDate() {
        let selectedData = [];
        selectedData = this.dataSource.data.filter(item => item.checkbox);
        selectedData.forEach(event => {
            event.outwardDate = new Date();
        });
    }

}
