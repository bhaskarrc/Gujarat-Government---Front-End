import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatTableDataSource, MatSelect, MatDialogRef, MatDialog} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import {  DdoSubOfficesCreate, DataElement } from '../../../model/ddo-offices-create';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
    selector: 'app-ddo-offices-edp',
    templateUrl: './ddo-offices.component.html',
    styleUrls: ['./ddo-offices.component.css']
})
export class DdoOfficesComponent implements OnInit {

    ddoForm: FormGroup;
    displayedColumns = new BehaviorSubject<any[]>(['noData']);
    ddoSubOffice: FormGroup;
    isCreateShow = false;
    tabDisable: Boolean = true;
    selectedIndex: number;
    doneHeader: Boolean = false;
    fileBrowseIndex: number;
    date = new FormControl(new Date());
    today_date = Date.now();
    isActiveSelected: boolean;
    isInActiveSelected: boolean;
    isCancelSelected: boolean;
    isSelected: boolean;
    isBillNotMapped: boolean;
    isNonDDO: boolean;
    checked = false;

    grNo = 'TRS/EDP/30042019/001';
    requestNo = 510101201901;
    district = 'Ahmedabad';
    officeLevel = 'Administrative Department';
    level = 'State Level';
    ddoOfficeName = 'Collector Office';
    cardexNo = 5622;
    ddoNo = 4265;
    ddoType = 'Non DDO';
    nonDdoType = 'Nagarpalika';
    pvu = 'Pay Verification Unit, Self';
    designationName = 'Under Secretary';
    officeNameForDisplay = 'Civil Hospital, Dayapar, Naliya, Bhuj';
    requestTo = 'Treasury Office, Ahmedabad';
    treasuryType = 'Treasury Office';
    isCoOffice = 'Yes';
    address1 = 'Near RTO Circle, Subhas Bridge';
    address2 = 'Nehrunagar';
    taluka = 'Sanand';
    station = 'Nehrunagar';
    pinCode = 380051;
    phoneNo = '079-22786542';
    mobileNo = 8905511155;
    faxNo = 890551115589898;
    emailId = 'coll-ahm@gujarat.gov.in';
    department = 'General Administration Department';
    hod = 'Directorate Of Accounts and Treasuries';
    coName = 'Accounts Officer';
    coOfficeName = 'Collector Office';
    treasuryOffice = 'District Treasury Office, Ahmedabad';
    billType = 'Selected';
    selected = 'GTR 30 - Pay Bill, GTR 45 - TA Bill';
    employeeNo = 201141137896;
    employeeName = 'Mr. Pratik Shah';
    approval = 'Forwarded To Approval';
    moduleType = 'EDP, DDO';
    ELEMENT_DATA_TO: DataElement[] = [
        { filename: 'data.JPEG', attechment: 'CTC', uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)' },
        { filename: 'data.JPEG', attechment: 'Concurrence From Administrative Department Regarding Declaration Of DDO', uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)' },
        { filename: 'data.JPEG', attechment: ' Certificate Regarding Verification Of Physical Existence Of New DDO Office', uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)' }
    ];

    ELEMENT_DATA_HOD: DataElement[] = [
        { filename: 'data.JPEG', attechment: 'Declaration Head Of The Office', uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)' },
        { filename: 'data.JPEG', attechment: 'Declaration Of DDO By Admin.dept In Concurrence With FD', uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)' },
        { filename: 'data.JPEG', attechment: 'Approved Establishment', uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)' },
        { filename: 'data.JPEG', attechment: 'Statement As Per Notification Dated 02/06/2001', uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)' },
        { filename: 'data.JPEG', attechment: 'Certificate Regarding Inclusion As a New Item In Budget', uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)' },
        { filename: 'data.JPEG', attechment: 'Order Of Distribution Of Employees( in case of split of office)', uploadedBy: 'Mr. S R Shukla (EDP - Joint Director)' }
    ];

    displayedHODBrowseColumns = ['sr_no', 'attachmentType', 'fileName', 'uploadedBy', 'action'];
    displayedTOBrowseColumns = ['sr_no', 'attachmentType', 'fileName', 'uploadedBy', 'action'];
    dataSourceHODBrowse = new MatTableDataSource(this.ELEMENT_DATA_HOD);
    dataSourceTOBrowse = new MatTableDataSource(this.ELEMENT_DATA_TO);

    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];
    ELEMENT_DATA_SubOffice: DdoSubOfficesCreate[] = [
        {
            subOfficeCode: 5612, ddoOfficeName: 'Collector Office', department: 'General Administration Department',
            hod: 'Secretary to Legislative and Parliamentary Affairs Department', district: 'Ahmedabad', taluka: 'Sanand', uniqueId: 8963452153, address: '',
            station: '', pinCode: 389652, phoneNo: 8956632222, faxNo: 657987897546544, emailId: '',
        },
    ];

    subOfficesList = new MatTableDataSource(this.ELEMENT_DATA_SubOffice);
    subOfficeColumn = ['srNo', 'ddoOfficeName', 'department', 'hod', 'district', 'taluka', 'action'];

    errorMessages = edpMessage;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService,
        public dialog: MatDialog,
        private el: ElementRef) { }

    ngOnInit() {
        this.createForm();
    }
    saveDDO() {
    }
    createForm() {
        this.ddoForm = this.fb.group({
            ddoOfficeName: ['', Validators.required],
            grNo: ['', Validators.required],
            district: ['', Validators.required],
            officeLevel: ['', Validators.required],
            level: ['', Validators.required],
            designationName: ['', Validators.required],
            ddoType: ['', Validators.required],
            pvu: ['', Validators.required],
            requestNo: [''],
            ddoNo: ['', Validators.required],
            requestTo: ['', Validators.required],
            treasuryType: [''],
            isCoOffice: [''],
            cardexNo: ['', Validators.required],
            treasuryOffice: ['', Validators.required],
            nonDdoType: [''],
            address1: ['', Validators.required],
            address2: [''],
            coName: [''],
            taluka: [''],
            station: [''],
            pinCode: [''],
            phoneNo: [''],
            mobileNo: [''],
            faxNo: [''],
            emailId: [''],
            billType: ['', Validators.required],
            selected: [''],
            officeNameForDisplay: [''],
            department: [''],
            hod: [''],
            coOfficeName: [''],
            checked: [''],
            objectionRemarks: [''],
            // moduleType: [''],
            employeeNo: ['', Validators.required],
            employeeName: [''],
            approval: ['']
        });
    }

    goToNext() {
        if (this.ddoForm.controls.ddoNo.invalid) {
            this.toastr.error('Please fill all the details.');
            this.tabDisable = true;
            _.each(this.ddoForm.controls, function (control) {
                if (control.status === 'INVALID') {
                    control.markAsTouched({ onlySelf: true });
                }
            });
        } else {
            this.tabDisable = false;
            this.selectedIndex = 1;
            this.doneHeader = true;
        }
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

    ObjectionRemarks(isChecked = false) {
        if (this.checked == true) {
            this.checked = true;
        } else {
            this.checked = false;
        }
    }
}

@Component({
    selector: 'app-ddo-sub-office-dialog',
    templateUrl: './ddo.sub.office.dialog.html'
})

export class DDOSubOfficeCreationComponent implements OnInit {

    department = '1';
    hod = '1';
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public dialogRef: MatDialogRef<DDOSubOfficeCreationComponent>) {

    }
    ddoSubOffice: FormGroup;
    ngOnInit() {
        this.ddoSubOffice = this.fb.group({
            ddoOfficeName: ['', Validators.required],
            district: ['', Validators.required],
            uniqueId: [],
            address: [''],
            station: [''],
            taluka: [''],
            pinCode: [''],
            phoneNo: [''],
            faxNo: [''],
            emailId: [''],
            department: ['8'],
            hod: ['1'],
            remarks: ['']
        });
        this.ddoSubOffice.controls['ddoOfficeName'].setValue(this.data.officeName);
        this.ddoSubOffice.controls['department'].setValue(this.data.departmentID);
        this.ddoSubOffice.controls['hod'].setValue(this.data.hodID);
        this.ddoSubOffice.controls['district'].setValue(this.data.districtID);
        this.ddoSubOffice.controls['taluka'].setValue(this.data.talukaID);

        this.filteredDistrict.next(this.districtNamelist.slice());
        this.districtCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.districtNamelist, this.districtCtrl.value, this.filteredDistrict);
            });

        //Filter Of Department
        this.filteredDepartment.next(this.departmentList.slice());
        this.departmentCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.departmentList, this.departmentCtrl.value, this.filteredDepartment);
            });

        //Filter Of Taluka
        this.filteredTaluka.next(this.talukaList.slice());
        this.talukaCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.talukaList, this.talukaCtrl.value, this.filteredTaluka);
            });
    }

    districtCtrl: FormControl = new FormControl();
    filteredDistrict: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    departmentCtrl: FormControl = new FormControl();
    filteredDepartment: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    talukaCtrl: FormControl = new FormControl();
    filteredTaluka: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    @ViewChild('singleSelect') singleSelect: MatSelect;
    _onDestroy = new Subject<void>();

    districtNamelist: any[] = [
        { value: '1', viewValue: 'Ahmedabad' },
        { value: '2', viewValue: 'Amreli' },
        { value: '3', viewValue: 'Bharuch' },
        { value: '4', viewValue: 'Bhavnagar' },
        { value: '5', viewValue: 'Bhuj' },
        { value: '6', viewValue: 'Dahod' }
    ];

    talukaList: any[] = [
        { value: '1', viewValue: 'Daskroi' },
        { value: '2', viewValue: 'Sanand' },
        { value: '3', viewValue: 'Rajula' },
        { value: '4', viewValue: 'Babra' },
        { value: '5', viewValue: 'Jambusar' },
        { value: '6', viewValue: 'Jhagadia' },
        { value: '7', viewValue: 'Mahuva' },
        { value: '8', viewValue: 'Talaja' },
        { value: '9', viewValue: 'Anjar' },
        { value: '10', viewValue: 'Bhachau' },
        { value: '11', viewValue: 'Jalod' },
        { value: '12', viewValue: 'Dhanpur' },
    ];

    departmentList: any[] = [
        { value: '1', viewValue: 'General Administration Department' },
        { value: '2', viewValue: 'Agriculture & Co-Operation Department' },
        { value: '3', viewValue: 'Education Department' },
        { value: '4', viewValue: 'Energy & Petrochemicals Department' },
        { value: '5', viewValue: 'Finance Department' },
        { value: '6', viewValue: 'Food & Civil Supplies Department' },
        { value: '7', viewValue: 'Forest & Environment Department' },
        { value: '8', viewValue: 'legislative and parliamentary affairs department' }
    ];

    HODList: any[] = [
        { value: '1', viewValue: 'Secretary to Legislative and Parliamentary Affairs Department' },
    ];

    statusList: any[] = [
        { value: 'active', viewValue: 'Active' },
        { value: 'inactive', viewValue: 'Inactive' },
        { value: 'cancel', viewValue: 'Cancel' }
    ];

    onCancel(): void {
        this.dialogRef.close('no');
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

    saveSubOffice(): void {
        this.ddoSubOffice.get('ddoOfficeName').markAsTouched();
        this.ddoSubOffice.get('district').markAsTouched();
        this.ddoSubOffice.get('department').markAsTouched();

        if (this.ddoSubOffice.invalid) {
            return;
        }
        this.dialogRef.close(this.ddoSubOffice.value);
    }

    errorMessages = {
        subOfficeCode: 'Please Enter Sub Office Code',
        officeName: 'Please Enter Office Name',
        district: 'Please select any District',
        department: 'Please select any Department'
    };
}
