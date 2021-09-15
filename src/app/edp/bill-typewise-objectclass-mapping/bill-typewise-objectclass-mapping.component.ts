import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
    selector: 'app-bill-typewise-objectclass-mapping',
    templateUrl: './bill-typewise-objectclass-mapping.component.html',
    styleUrls: ['./bill-typewise-objectclass-mapping.component.css']
})
export class BillTypewiseObjectclassMappingComponent implements OnInit {

    demandCodeCtrl: FormControl = new FormControl();
    filteredDemandCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
    showTab: Boolean = false;
    date: any = new Date();
    today_date = Date.now();

    errorMessages = edpMessage;

    demand_list: any[] = [
        { value: '1', viewValue: 'GTR 30 - Pay Bill' },
        { value: '2', viewValue: 'GTR 45 - TA Bill' },
        { value: '3', viewValue: 'GTR 40 - Grant In Bill' },
        { value: '4', viewValue: 'GTR 12 - Advanced Bill' },
        { value: '5', viewValue: 'GTR 13 - Medical Bill' }
    ];

    objectClass_list: any[] = [
        { value: 'C0: Deafult Class', viewValue: 'C0: Deafult Class' },
        { value: 'C1: Personel Services and Benefits', viewValue: 'C1: Personel Services and Benefits' },
        { value: 'C2: Administrative Expenses', viewValue: 'C2: Administrative Expenses' },
        { value: 'C3: Contractual Services and Supplies', viewValue: 'C3: Contractual Services and Supplies' },
        { value: 'C4: Grant etc.', viewValue: 'C4: Grant etc.' },
        { value: 'C5: Other Expenditure', viewValue: 'C5: Other Expenditure' },
        { value: 'C6: Acquisition of Capital Assets and Other Captial Expenditure', viewValue: 'C6: Acquisition of Capital Assets and Other Captial Expenditure' },
        { value: 'C7:Accounting Adjustment', viewValue: 'C7:Accounting Adjustment' },
    ]

    DATA: any[] = [
        {
            majorHead: '2049', majorHeadEdit: true,
            subMajorHead: '03', subMajorHeadEdit: true,
            minorHead: '104', minorHeadEdit: true,
            subHead: '01', subHeadEdit: true,
            budgetEstimate: 100.00, budgetEstimateEdit: true,
            advancedCF: 10.00, advancedCFEdit: true,
            revisedEstimate: 120.00, revisedEstimateEdit: true,
            excessSaving: 20.00, excessSavingEdit: true,
            excessScheme: 10.00, excessSchemeEdit: true,
            remarkEng: '', remarkEngEdit: true,
            remarkGuj: '', remarkGujEdit: true,
            extend: false
        },
        {
            majorHead: '', majorHeadEdit: true,
            subMajorHead: '60', subMajorHeadEdit: true,
            minorHead: '101', minorHeadEdit: true,
            subHead: '01', subHeadEdit: true,
            budgetEstimate: 100.00, budgetEstimateEdit: true,
            advancedCF: 10.00, advancedCFEdit: true,
            revisedEstimate: 90.00, revisedEstimateEdit: true,
            excessSaving: -10.00, excessSavingEdit: true,
            excessScheme: 0.1, excessSchemeEdit: true,
            remarkEng: '', remarkEngEdit: true,
            remarkGuj: '', remarkGujEdit: true,
            extend: false
        },
        {
            majorHead: '', majorHeadEdit: true,
            subMajorHead: '', subMajorHeadEdit: true,
            minorHead: '701', minorHeadEdit: true,
            subHead: '01', subHeadEdit: true,
            budgetEstimate: 150.00, budgetEstimateEdit: true,
            advancedCF: 0.00, advancedCFEdit: true,
            revisedEstimate: 165.00, revisedEstimateEdit: true,
            excessSaving: 15.00, excessSavingEdit: true,
            excessScheme: 15.00, excessSchemeEdit: true,
            remarkEng: '', remarkEngEdit: true,
            remarkGuj: '', remarkGujEdit: true,
            extend: false
        },
        {
            majorHead: 'Total', majorHeadEdit: false,
            subMajorHead: '', subMajorHeadEdit: false,
            minorHead: '', minorHeadEdit: false,
            subHead: '', subHeadEdit: false,
            budgetEstimate: 0.00, budgetEstimateEdit: false,
            advancedCF: 0.00, advancedCFEdit: false,
            revisedEstimate: 0.00, revisedEstimateEdit: false,
            excessSaving: 0.00, excessSavingEdit: false,
            excessScheme: 0.00, excessSchemeEdit: false,
            remarkEng: '', remarkEngEdit: false,
            remarkGuj: '', remarkGujEdit: false,
            extend: false
        },
    ];

    private _onDestroy = new Subject<void>();
    createSupplementaryDemandForm: FormGroup;

    gujaratiType: Boolean = true;
    engAtiveClass: Boolean = false;
    gujAtiveClass: Boolean = false;

    @ViewChild('codeGJ') codeGJ: ElementRef;

    displayedAttachmentColumns = ['majorHead', 'subMajorHead', 'minorHead', 'subHead', 'budgetEstimate', 'advancedCF', 'revisedEstimate', 'excessSaving', 'excessScheme', 'remarkEng', 'remarkGuj'];

    dataSource = new MatTableDataSource(this.DATA);
    isExtendedRow = (index, item) => item.extend;
    constructor(
        private fb: FormBuilder,
        private router: Router
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
        this.createSupplementaryDemandForm = this.fb.group({
            demandCode: ['', Validators.required],
            objectClass: ['']
        });
    }


    goToDashboard() {
        this.router.navigate(['']);
    }

    saveEstimate() {

    }
}
