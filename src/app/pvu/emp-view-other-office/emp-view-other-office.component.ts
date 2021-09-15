import { Component, OnInit } from '@angular/core';
import { HeaderElement } from 'src/app/model/common-listing';

@Component({
    selector: 'app-emp-view-other-office',
    templateUrl: './emp-view-other-office.component.html',
    styleUrls: ['./emp-view-other-office.component.css']
})
export class EmpViewOtherOfficeComponent implements OnInit {

    personalDetailsJson: HeaderElement[] = [
        { label: 'Office Name', value: 'DDO1' },
        { label: 'Employee Number', value: '1000556011' },
        { label: 'Salutation', value: 'Mr.' },
        { label: 'Employee Name', value: 'Pankaj' },
        { label: 'Middle/Father/Husband Name', value: 'Kumar' },
        { label: 'Surname/Last Name', value: 'Gupta' },
        { label: 'Gender', value: 'Male' },
        { label: 'Email Id', value: 'pankaj.gupta24@wipro.com' },
        { label: 'Mobile No', value: '9982326802' },
        { label: 'PAN number', value: 'APPPG8813B' }
    ];

    deptDetailsJson: HeaderElement[] = [
        { label: 'Designation', value: 'Assistant Manager' },
        { label: 'District', value: 'Ahmedabad' },
        { label: 'Cardex No.', value: '0647' },
        { label: 'Name of Present Office', value: 'Commissioner of Sales Tax' },
        { label: 'Sub Office', value: 'NA' },
        { label: 'DDO Code', value: '0655' },
        { label: 'Office Adress and Contact No.', value: 'Ahmedabad' },
        { label: 'Class', value: 'Class I' },
        { label: 'Station', value: 'Ahmedabad' },
        { label: 'Taluka', value: 'Ahmedabad' },
        { label: 'Parent Administrative Department Name', value: 'Finance Department' },
        { label: 'Head of Department Name', value: 'Commissioner of Sales Tax' },
    ];

    constructor(
    ) { }


    ngOnInit() { }

}
