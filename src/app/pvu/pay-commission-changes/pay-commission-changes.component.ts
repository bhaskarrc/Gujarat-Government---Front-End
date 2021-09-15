import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDatepickerInputEvent } from '@angular/material';
import { MatPaginator, } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { PayCommissionDataModel } from '../../model/pay-commission-change';
import { ExcludedEmployeePayCommissionSixModel } from '../../model/pay-commission-change';
import { ExcludedEmployeePayCommissionSevenModel } from '../../model/pay-commission-change';
import { pvuMessage } from '../../common/error-message/common-message.constants';
import { CommonListing } from 'src/app/model/common-listing';



const ELEMENT_DATA: PayCommissionDataModel[] = [
    {
        employeeNumber: 1208566882, employeeName: 'Dhruvil Panchal', office: 'Pay & Accounts Office Ahmedabad',
        dateOfJoining: '10-05-2004', payBand: '5200-20200', payBandValue: 5200, gradePay: '1800', basicPaySix: '7000',
        payLevel: 'level 3 ', cellId: '4', basicPaySeven: '12000', effectiveDate: '', nextIncrementDate: '',
        reasonChangeEffectiveDate: '', remarks: ''
    },
    {
        employeeNumber: 1208566883, employeeName: 'Dhruvil Panchal', office: 'Pension Payment Office, Ahmedabad',
        dateOfJoining: '10-05-2004', payBand: '9300-34800', payBandValue: 10000, gradePay: '4600', basicPaySix: '14600',
        payLevel: 'level 8', cellId: '6', basicPaySeven: '32000', effectiveDate: '08-07-2019',
        nextIncrementDate: '01-07-2021', reasonChangeEffectiveDate: '', remarks: ''
    }
];


const ELEMENT_DATA_Six: PayCommissionDataModel[] = [
    {
        employeeNumber: 1208566882, employeeName: 'Dhruvil Panchal', office: 'Pay & Accounts Office Ahmedabad',
        dateOfJoining: '10-05-2004', gradePay: '1300', payScale: '2550-55-2660-60-3200', basicPay: '2720',
        payBand: '1S(4440 - 7440)', payBandValue: 4440, basicPaySix: '5740',
        effectiveDate: '08-07-2020', nextIncrementDate: '01-07-2021', reasonChangeEffectiveDate: '', remarks: ''
    },
    {
        employeeNumber: 1208566883, employeeName: 'Dhruvil Panchal', office: 'Pension Payment Office, Ahmedabad',
        dateOfJoining: '10-05-2004', gradePay: '4400', payScale: '5500-175-9000', basicPay: '5675',
        payBand: 'PB2(9300-34800)', payBandValue: 10000, basicPaySix: '14400',
        effectiveDate: '08-07-2019', nextIncrementDate: '01-07-2021', reasonChangeEffectiveDate: '', remarks: ''
    }
];

const ELEMENT_LIST_DATA: ExcludedEmployeePayCommissionSevenModel[] = [
    {
        selected: '', employeeNumber: 1208566882, employeeName: 'Dhruvil Panchal', officeName: 'Pay & Accounts Office Ahmedabad',
        dateOfJoining: '10-05-2004', epayBand: '5200-20200', gradePay: 1800, PaySevenValue: 5200, basicPay: 7000,
        reasonForExclusion: '', remarks: '',
    },
    {
        selected: '', employeeNumber: 1208566883, employeeName: 'Dhruvil Panchal', officeName: 'Pay & Accounts Office Ahmedabad', dateOfJoining: '10-05-2004',
        epayBand: '9300-34800', gradePay: 4600, PaySevenValue: 10000, basicPay: 14600, reasonForExclusion: '', remarks: '',
    }];

const ELEMENT_LIST_DATA_Six: ExcludedEmployeePayCommissionSixModel[] = [
    {
        selected: '', employeeNumber: 1208566882, employeeName: 'Dhruvil Panchal', officeName: 'Pay & Accounts Office Ahmedabad', dateOfJoining: '10-05-2004',
        epayBand: '2550-55-2660-60-3200', basicPay: 2720, reasonForExclusion: '', remarks: '',
    },
    {
        selected: '', employeeNumber: 1208566883, employeeName: 'Dhruvil Panchal', officeName: 'Pay & Accounts Office Ahmedabad', dateOfJoining: '10-05-2004',
        epayBand: '5500-175-9000', basicPay: 5675, reasonForExclusion: '', remarks: '',
    }];

@Component({
    selector: 'app-pay-commission-changes',
    templateUrl: './pay-commission-changes.component.html',
    styleUrls: ['./pay-commission-changes.component.css']
})
export class PayCommissionChangesComponent implements OnInit {

    public errorMessages;
    PayCommissionChanges: FormGroup;
    public show = false;
    public showList = false;
    private paginator: MatPaginator;
    private sort: MatSort;
    sevenPayList: Boolean = false;
    selectedAll: Boolean = false;
    SevenPaySelectedAll: Boolean = false;
    selectedSixAll: Boolean = false;

    Class: CommonListing[] = [
        { value: '1', viewValue: 'All' },
        { value: '2', viewValue: 'Class I' },
        { value: '3', viewValue: 'Class II' },
        { value: '4', viewValue: 'Class III' },
        { value: '5', viewValue: 'Class IV' },
    ];
    Designation: CommonListing[] = [
        { value: '1', viewValue: 'All' },
        { value: '2', viewValue: 'Under Secretary' },
        { value: '3', viewValue: 'Deputy Secretary' },
        { value: '4', viewValue: 'Secretary' },
        { value: '5', viewValue: 'Joint Secretary' },
        { value: '6', viewValue: 'Assistant Secretary' },
        { value: '7', viewValue: 'Section Officer' },
    ];
    Paycommision: CommonListing[] = [
        { value: '1', viewValue: '5th To 6th Pay Commission' },
        { value: '2', viewValue: '6th To 7th Pay Commission' },
    ];
    reasonChangeEffectiveDate_list: CommonListing[] = [
        { value: '1', viewValue: 'Promotion' },
        { value: '2', viewValue: 'Higher Pay Scale' },
        { value: '3', viewValue: 'EOL' },
        { value: '4', viewValue: 'Suspension' },
        { value: '5', viewValue: 'Other' },
    ];

    Currentdate: Date = new Date();
    date = new FormControl();
    eftDate = new FormControl();
    nextIncrement = new FormControl();
    sixPayEffectiveDate = new FormControl();
    benefitSixPay = new FormControl();

    ClassCtrl: FormControl = new FormControl();
    DesignationCtrl: FormControl = new FormControl();
    PaycommisionCtrl: FormControl = new FormControl();
    reasonChangeEffectiveDateCtrl: FormControl = new FormControl();

    dataSource = new MatTableDataSource(ELEMENT_DATA);
    dataSourceList = new MatTableDataSource(ELEMENT_LIST_DATA);
    dataSourceSixPay = new MatTableDataSource(ELEMENT_DATA_Six);
    dataSourceExeSixpay = new MatTableDataSource(ELEMENT_LIST_DATA_Six);

    displayedColumns: string[] = [
        'checkBox', 'srno', 'employeeNumber', 'employeeName', 'office', 'dateOfJoining', 'payBand',
        'payBandValue', 'gradePay', 'basicPaySix', 'payLevel', 'cellId', 'basicPaySeven',
        'effectiveDate', 'nextIncrementDate', 'reasonChangeEffectiveDate', 'remarks'
    ];
    displayedColumnsSix: string[] = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'office', 'dateOfJoining', 'payScale', 'basicPay', 'PayBand', 'bandValueSix', 'gradePay', 'basicPaySix', 'openDateSixPay', 'nextIncrementDate', 'reasonChangeEffectiveDate', 'remarks'];
    displayedListColumns: string[] = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'officeName', 'dateOfJoining', 'epayBand', 'gradePay', 'PaySevenValue', 'basicPay', 'reasonForExclusion', 'remarks'];
    dataSourceListSixpay: string[] = ['checkBox', 'srno', 'employeeNumber', 'employeeName', 'officeName', 'dateOfJoining', 'epayBand', 'basicPay', 'reasonForExclusion', 'remarks'];


    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }

    constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }

    setDataSourceAttributes() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        this.errorMessages = pvuMessage;
        this.sixPayEffectiveDate.patchValue(new Date('01/01/2006'));
        this.date.patchValue(new Date());
        this.eftDate.patchValue(new Date('01/01/2016'));
        this.benefitSixPay.patchValue(new Date('01/01/2020'));
        this.nextIncrement.patchValue(new Date('01/01/2020'));
        this.PayCommissionChanges = this.formBuilder.group({
            class: ['05'],
            designation: ['07'],
            empNumber: [''],
            paycommision: [''],
            payCommissionEffeDate: [''],
        });
    }


    openDialogEmployeeNumber() {
        const dialogRef = this.dialog.open(SearchEmployeeComponent, {
            width: '800px',
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {

            this.dataSource.data = [];
            const p_data = this.dataSource.data;
            p_data.push({
                employeeNumber: result[0].employeeNumber, employeeName: result[0].employeeName,
                office: 'Pay & Accounts Office Ahmedabad', dateOfJoining: '10-05-2004', payBand: '5200-20200',
                payBandValue: 5200, gradePay: '1800', basicPaySix: '7000', payLevel: 'level 3 ', cellId: '4',
                basicPaySeven: '12000', effectiveDate: '', nextIncrementDate: '', reasonChangeEffectiveDate: '', remarks: ''
            });
            this.dataSourceSixPay.data = p_data;


            this.dataSourceSixPay.data = [];
            const q_data = this.dataSourceSixPay.data;
            // q_data.push({
            //   employeeNumber:result[0].employeeNumber, employeeName: result[0].employeeName,
            //   office: 'Pay & Accounts Office Ahmedabad', dateOfJoining: '10-05-2004', gradePay: '1300',
            //   payScale: '2550-55-2660-60-3200', basicPay: '2720', payBand: '1S(4440 - 7440)', payBandValue: 4440, basicPaySix: '5740',
            //   effectiveDate: '08-07-2020', nextIncrementDate: '01-07-2021', remarks: ''
            // });
            this.dataSourceSixPay.data = q_data;

            this.changeDetectorRefs.detectChanges();
        });
    }


    PayCommission() {
    }

    toggle() {
        this.show = !this.show;
    }

    exclude() {
        this.showList = !this.showList;
    }

    include() {
        this.showList = !this.showList;
    }

    resetForm() {
        this.PayCommissionChanges.reset();
    }

    selectAll() {
        this.dataSourceList.data.forEach(_d => {
            // _d.selected = this.selectedAll;
        });
        this.dataSourceList = new MatTableDataSource(this.dataSourceList.data);
    }

    checkIfAllSelected() {
        this.selectedAll = this.dataSourceList.data.every((item) => {
            return item.selected === true;
        });
    }

    /**********Six exclude check box********** */

    selectSixAll() {
        this.dataSourceExeSixpay.data.forEach(_d => {
            // _d.selected = this.selectedSixAll;
        });
        this.dataSourceExeSixpay = new MatTableDataSource(this.dataSourceExeSixpay.data);
    }

    checkIfSixAllSelected() {
        this.selectedSixAll = this.dataSourceExeSixpay.data.every((item) => {
            return item.selected === true;
        });
    }

    /*******end ******* */


    selectSevenPayAll() {
        // this.dataSource.data.forEach(_d => {
        //      _d.selected = this.SevenPaySelectedAll;
        // });
        this.dataSource = new MatTableDataSource(this.dataSource.data);
    }

    checkIfAllSevenPayExeSelected() {
        // this.SevenPaySelectedAll = this.dataSource.data.every((item) => {
        //      return item.selected === true;
        // });
    }


    changeEvent(changeval) {
        if (changeval.value == 2) {
            this.sevenPayList = true;
        } else {
            this.sevenPayList = false;
        }
    }
    goToDashboard() { }

    events: string[] = [];
    required = false;
    requiredd = false;
    changeDateSevenpay(type: string, event: MatDatepickerInputEvent<Date>) {
        this.required = true;
    }

    changeDate(type: string, event: MatDatepickerInputEvent<Date>) {
        this.required = true;
    }

}

