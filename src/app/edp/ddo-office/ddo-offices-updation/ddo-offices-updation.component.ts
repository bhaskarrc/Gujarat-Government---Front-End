import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatTableDataSource, MatSelect, MatDialogRef, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import {  DdoSubOfficesCreate } from '../../../model/ddo-offices-create';
import { DDOSubOfficeHODComponent } from '../ddo-office-hod/ddo-office-hod.component';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
    selector: 'app-ddo-offices-updation-hod',
    templateUrl: './ddo-offices-updation.component.html',
    styleUrls: ['./ddo-offices-updation.component.css']
})
export class DdoOfficesUpdationComponent implements OnInit {

    displayedColumns = new BehaviorSubject<any[]>(['noData']);
    ddoForm: FormGroup;
    ddoSubOffice: FormGroup;
    isCreateShow = false;
    tabDisable: Boolean = true;
    selectedIndex: number;
    doneHeader: Boolean = false;
    fileBrowseIndex: number;
    date = new Date().toLocaleDateString();
    today_date = Date.now();
    isActiveSelected: boolean;
    isInActiveSelected: boolean;
    isCancelSelected: boolean;
    isSelected: boolean;
    isBillNotMapped: boolean;
    isNonDDO: boolean;
    checked = false;
    public href = '';
    isDDO: Boolean = false;

    grNo = 'TRS/EDP/30042019/001';
    uniqueId = 865235;
    district = 'Ahmedabad';
    officeLevel = 'Administrative Department';
    level = 'State Level';
    ddoOfficeName = 'Collector Office';
    cardexNo = 5622;
    ddoNo = 4265;
    ddoType = 'Non DDO';
    nonDdoType = 'Nagarpalika';
    pvu = '1';
    designationName = '1';
    requestTo = 'Treasury Office, Ahmedabad';
    treasuryType = 'Treasury Office';
    isCoOffice = '1';
    employeeNo = 201141137896;
    employeeName = 'Mr. Pratik Shah';
    address1 = 'Near RTO Circle, Subhas Bridge';
    address2 = 'Nehrunagar';
    taluka = '1';
    station = 'Nehrunagar';
    pinCode = 380051;
    phoneNo = 22786542;
    stdCode = '079';
    mobileNo = 8905511155;
    faxNo = 890551115589898;
    emailId = 'coll-ahm@gujarat.gov.in';
    officeNameForDisplay = 'Civil Hospital, Dayapar, Naliya, Bhuj';
    department = 'General Administration Department';
    hod = 'Directorate Of Accounts and Treasuries';
    coName = '1';
    coOfficeName = '1';
    treasuryOffice = '1';
    billType = '1';
    selected = '1';
    moduleType ='1';
    approvalComment = 'Forwarded To Approval';
    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

    ELEMENT_DATA_SubOffice: DdoSubOfficesCreate[] = [
        {  ddoOfficeName: 'Collector Office', department: 'General Administration Department',
            hod: 'Secretary to Legislative and Parliamentary Affairs Department', district: 'Ahmedabad', taluka: 'Sanand', uniqueId: 8963524789, address: '',
            station: '', pinCode: 389623, phoneNo: 8965566612, faxNo: 78964523891025, emailId: '',
        },
    ];


    subOfficesList = new MatTableDataSource(this.ELEMENT_DATA_SubOffice);

    subOfficeColumn = ['srNo',  'ddoOfficeName', 'department', 'hod', 'district', 'taluka', 'action'];

    errorMessages = edpMessage;

    treasuryOfficeList: any[] = [
        { value: '1', viewValue: 'District Treasury Office, Ahmedabad' },
        { value: '2', viewValue: 'District Treasury Office, Amreli' },
        { value: '3', viewValue: 'District Treasury Office, Bharuch' },
        { value: '4', viewValue: 'District Treasury Office, Bhavnagar' },
        { value: '5', viewValue: 'District Treasury Office, Bhuj' },
        { value: '6', viewValue: 'District Treasury Office, Dahod' }
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

    billTypeList: any[] = [
        { value: '1', viewValue: 'All' },
        { value: '2', viewValue: 'Selected' },
        { value: '3', viewValue: 'Bills Not Mapped' }
    ];

    designationList: any[] = [
        { value: '1', viewValue: 'Under Secretary' },
        { value: '2', viewValue: 'Deputy Secretary' },
        { value: '3', viewValue: 'Clerk' },
        { value: '4', viewValue: 'Deputy Section Officer' },
        { value: '5', viewValue: 'Assistant Secretary' }
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

    billSelectedTypeList: any[] = [
        { value: '1', viewValue: 'GTR 30 - Pay Bill' },
        { value: '2', viewValue: 'GTR 45 - TA Bill' },
        { value: '3', viewValue: 'GTR 40 - Grant In Bill' },
        { value: '4', viewValue: 'GTR 12 - Advanced Bill' },
        { value: '5', viewValue: 'GTR 13 - Medical Bill' }
    ];

    HODList: any[] = [
        { value: '1', viewValue: 'Secretary to Legislative and Parliamentary Affairs Department' },
    ];

    coList: any[] = [
        { value: '1', viewValue: 'Accounts Officer' },
    ];

    officeList: any[] = [
        { value: '1', viewValue: 'Collector Office' },
    ];

    pvuList: any[] = [
        { value: '1', viewValue: 'Pay Verification Unit, Self' },
        { value: '2', viewValue: 'Pay Verification Unit, Gandhinagar' }
    ];

    statusList: any[] = [
        { value: '1', viewValue: 'Active' },
        { value: '2', viewValue: 'Inactive' },
        { value: '3', viewValue: 'Cancel' }
    ];

    moduleTypeList: any[] = [
        { value: '1', viewValue: 'EDP' },
        { value: '2', viewValue: 'Pay Fixation' },
        { value: '3', viewValue: 'Budget' },
        { value: '4', viewValue: 'Grant' },
        { value: '5', viewValue: 'DDO' },
        { value: '6', viewValue: 'Treasury Bill Processing' },
    ];

    isOfficeList: any[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' }
    ];

    browseData: any[] = [{
        name: undefined,
        file: undefined,
    }];

    pvuCtrl: FormControl = new FormControl();
    designationCtrl: FormControl = new FormControl();
    talukaCtrl: FormControl = new FormControl();
    coNameCtrl: FormControl = new FormControl();
    coOfficeNameCtrl: FormControl = new FormControl();
    treasuryCtrl: FormControl = new FormControl();
    selectedBillCtrl: FormControl = new FormControl();
    moduleCtrl: FormControl = new FormControl();
    _onDestroy = new Subject<void>();

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService,
        public dialog: MatDialog,
        private el: ElementRef,
    ) { }

    ngOnInit() {
        this.href = this.route.snapshot.url[0]['path'];
        this.createForm();
        this.urlForUpdation();
    }
    urlForUpdation() {
        if(this.href === 'ddo-offices-updation-ddo') {
            this.isDDO = true;
        } else {
            this.isDDO = false;
        }
    }
    saveDDO() {
    }
    createForm() {
        this.ddoForm = this.fb.group({
            grNo: ['', Validators.required],
            uniqueId: [''],
            district: ['', Validators.required],
            officeLevel: ['', Validators.required],
            level: ['', Validators.required],
            ddoOfficeName: ['', Validators.required],
            cardexNo: ['', Validators.required],
            ddoNo: ['', Validators.required],
            ddoType: ['', Validators.required],
            nonDdoType: [''],
            pvu: ['', Validators.required],
            designationName: ['', Validators.required],
            requestTo: ['', Validators.required],
            treasuryType: [''],
            isCoOffice:[''],
            employeeNo: [''],
            employeeName: [''],
            address1: ['', Validators.required],
            address2: [''],
            taluka: [''],
            station: [''],
            pinCode: [''],
            stdCode: [''],
            phoneNo: [''],
            mobileNo: [''],
            faxNo: [''],
            emailId: [''],
            officeNameForDisplay: [''],
            department: [''],
            hod: [''],
            coName: [''],
            coOfficeName: [''],
            treasuryOffice: ['', Validators.required],
            billType: ['', Validators.required],
            selectedBill: [''],
            status: [''],
            fromDate: [''],
            inactiveEndDate: [''],
            cancelEndDate: [''],
            comments: [''],
            approvalComment: [''],
            checked: [''],
            objectionRemarks: [''],
        });
    }

    goToNext() {
        if (this.ddoForm.controls.officeLevel.invalid) {
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
    selectStatus() {
        const status = this.ddoForm.controls.status.value;
        if ( status === '2') {
            this.isInActiveSelected = true;
            this.isCancelSelected = false;
        } else if (status === '3') {
            this.isCancelSelected = true;
            this.isInActiveSelected = false;
        } else {
            this.isCancelSelected = false;
            this.isInActiveSelected = false;
        }
    }
    selectBill() {
        const billType = this.ddoForm.controls.billType.value;
        if (billType === '2') {
            this.isSelected = true;
        } else {
            this.isSelected = false;
        }
    }


    ObjectionRemarks() {
        if (this.checked == true) {
            this.checked = true;
        } else {
            this.checked = false;
        }
    }

    // tslint:disable-next-line: member-ordering
    dataSourceBrowse = new MatTableDataSource(this.browseData);
    onFileSelection(fileSelected) {
        if (fileSelected.target && fileSelected.target.files) {
            this.dataSourceBrowse.data[this.fileBrowseIndex].file = fileSelected.target.files[0];
        }
    }
    openFileSelector(index) {
        this.el.nativeElement.querySelector('#fileBrowse').click();
        this.fileBrowseIndex = index;
    }
    addBrowse() {
        if (this.dataSourceBrowse) {
            const data = this.dataSourceBrowse.data[this.dataSourceBrowse.data.length - 1];
            if (data && data.name && data.file) {
                const p_data = this.dataSourceBrowse.data;
                p_data.push({
                    name: undefined,
                    file: undefined,
                });
                this.dataSourceBrowse.data = p_data;
            } else {
                this.toastr.error('Please fill the detail.');
            }
        }
    }
    deleteBrowse(index) {
        this.dataSourceBrowse.data.splice(index, 1);
        this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    }

    createSubChild(object) {

        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(DDOSubOfficeUpdationComponent, {
          disableClose: true,
          data : object
        });
        dialogRef.afterClosed().subscribe(result => {
            const keys = Object.keys(object);
            const isEdit = keys.length;
        });
    }

    Creatsubofficeview(): void {
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(DialogSubOfficeDialog, {
            disableClose: true,
            data : Object
        });

        dialogRef.afterClosed().subscribe(result => {
            const keys = Object.keys(Object);
            const isEdit = keys.length;
        });
      }

}





@Component({
    selector: 'app-ddo-sub-office-dialog',
    templateUrl: './ddo.sub.office.dialog.html'
})


export class DDOSubOfficeUpdationComponent implements OnInit {

    districtCtrl: FormControl = new FormControl();
    filteredDistrict: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    talukaCtrl: FormControl = new FormControl();
    filteredTaluka: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    @ViewChild('singleSelect') singleSelect: MatSelect;
    _onDestroy = new Subject<void>();


    isHOD: Boolean;
    district: String = 'Ahmedabad';
    ddoSubOffice: FormGroup;
    department: String = 'Agriculture & Co-Operation Department';
    hod: String = 'Secretary to Legislative and Parliamentary Affairs Department';

      talukaList: any[] = [
        {value: '1', viewValue: 'Daskroi'},
        {value: '2', viewValue: 'Sanand'},
        {value: '3', viewValue: 'Rajula'},
        {value: '4', viewValue: 'Babra'},
        {value: '5', viewValue: 'Jambusar'},
        {value: '6', viewValue: 'Jhagadia'},
        {value: '7', viewValue: 'Mahuva'},
        {value: '8', viewValue: 'Talaja'},
        {value: '9', viewValue: 'Anjar'},
        {value: '10', viewValue: 'Bhachau'},
        {value: '11', viewValue: 'Jalod'},
        {value: '12', viewValue: 'Dhanpur'},
      ];

      departmentList: any[] = [
        {value: '1', viewValue: 'General Administration Department'},
        {value: '2', viewValue: 'Agriculture & Co-Operation Department'},
        {value: '3', viewValue: 'Education Department'},
        {value: '4', viewValue: 'Energy & Petrochemicals Department'},
        {value: '5', viewValue: 'Finance Department'},
        {value: '6', viewValue: 'Food & Civil Supplies Department'},
        {value: '7', viewValue: 'Forest & Environment Department'},
        {value: '8', viewValue: 'legislative and parliamentary affairs department'}
      ];

      HODList: any[] = [
        {value: '1', viewValue: 'Secretary to Legislative and Parliamentary Affairs Department'},
      ];
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DDOSubOfficeHODComponent>
    ) {
        this.isHOD = this.data['isHod'];
    }
    ngOnInit() {
        this.ddoSubOffice = this.fb.group({
            ddoOfficeName: ['', Validators.required],
            department: ['8'],
            hod: ['1'],
            address: ['', Validators.required],
            district: ['XYZ', Validators.required],
            taluka: [''],
            station: [''],
            pinCode: [''],
            stdCode: [''],
            phoneNo: [''],
            emailId: [''],
            faxNo: ['']
        });
        // this.ddoSubOffice.controls['ddoOfficeName'].setValue(this.data.officeName);
        // this.ddoSubOffice.controls['department'].setValue(this.data.department);
        // this.ddoSubOffice.controls['hod'].setValue(this.data.HOD);
        // this.ddoSubOffice.controls['district'].setValue(this.data.district);
        // this.ddoSubOffice.controls['taluka'].setValue(this.data.talukaID);
        this.ddoSubOffice.patchValue({
            ddoOfficeName: this.data.officeName,
            department: this.data.department,
            hod: this.data.hod,
            district: this.data.district,
            taluka: this.data.talukaID,
            address: this.data.address,
            station: this.data.station,
            pinCode: this.data.pinCode,
            stdCode: this.data.stdCode,
            phoneNo: this.data.phoneNo,
            emailId: this.data.emailId,
            faxNo: this.data.faxNo
        });

        //Filter Of Taluka
        this.filteredTaluka.next(this.talukaList.slice());
        this.talukaCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.talukaList, this.talukaCtrl.value, this.filteredTaluka);
            });
    }

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

    saveSubOffice() {
        this.ddoSubOffice.get('ddoOfficeName').markAsTouched();
        this.ddoSubOffice.get('address').markAsTouched();
        if (this.ddoSubOffice.invalid) {
            return;
        }
        this.dialogRef.close(this.ddoSubOffice.value);
    }

    // errorMessages = {
    //     officeName: 'Please Enter Office Name',
    //     district: 'Please select any District',
    //     department: 'Please select any Department',
    //     Address: 'Please add Address here'
    // };
}



@Component({
    selector: 'dialog-sub-office-dialog',
    templateUrl: './dialog-sub-office-dialog.html'
})

export class DialogSubOfficeDialog implements OnInit {

    districtCtrl: FormControl = new FormControl();
    filteredDistrict: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    talukaCtrl: FormControl = new FormControl();
    filteredTaluka: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    @ViewChild('singleSelect') singleSelect: MatSelect;
    _onDestroy = new Subject<void>();


    isHOD: Boolean;
    district: String = 'Ahmedabad';
    ddoSubOffice: FormGroup;
    department: String = 'Agriculture & Co-Operation Department';
    hod: String = 'Secretary to Legislative and Parliamentary Affairs Department';

      talukaList: any[] = [
        {value: '1', viewValue: 'Daskroi'},
        {value: '2', viewValue: 'Sanand'},
        {value: '3', viewValue: 'Rajula'},
        {value: '4', viewValue: 'Babra'},
        {value: '5', viewValue: 'Jambusar'},
        {value: '6', viewValue: 'Jhagadia'},
        {value: '7', viewValue: 'Mahuva'},
        {value: '8', viewValue: 'Talaja'},
        {value: '9', viewValue: 'Anjar'},
        {value: '10', viewValue: 'Bhachau'},
        {value: '11', viewValue: 'Jalod'},
        {value: '12', viewValue: 'Dhanpur'},
      ];

      departmentList: any[] = [
        {value: '1', viewValue: 'General Administration Department'},
        {value: '2', viewValue: 'Agriculture & Co-Operation Department'},
        {value: '3', viewValue: 'Education Department'},
        {value: '4', viewValue: 'Energy & Petrochemicals Department'},
        {value: '5', viewValue: 'Finance Department'},
        {value: '6', viewValue: 'Food & Civil Supplies Department'},
        {value: '7', viewValue: 'Forest & Environment Department'},
        {value: '8', viewValue: 'legislative and parliamentary affairs department'}
      ];

      HODList: any[] = [
        {value: '1', viewValue: 'Secretary to Legislative and Parliamentary Affairs Department'},
      ];
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DDOSubOfficeHODComponent>
    ) {
        this.isHOD = this.data['isHod'];
    }
    ngOnInit() {
        this.ddoSubOffice = this.fb.group({
            ddoOfficeName: ['', Validators.required],
            department: ['8'],
            hod: ['1'],
            address: ['', Validators.required],
            district: ['XYZ', Validators.required],
            taluka: [''],
            station: [''],
            pinCode: [''],
            stdCode: [''],
            phoneNo: [''],
            emailId: [''],
            faxNo: ['']
        });
        // this.ddoSubOffice.controls['ddoOfficeName'].setValue(this.data.officeName);
        // this.ddoSubOffice.controls['department'].setValue(this.data.department);
        // this.ddoSubOffice.controls['hod'].setValue(this.data.HOD);
        // this.ddoSubOffice.controls['district'].setValue(this.data.district);
        // this.ddoSubOffice.controls['taluka'].setValue(this.data.talukaID);
        this.ddoSubOffice.patchValue({
            ddoOfficeName: this.data.officeName,
            department: this.data.department,
            hod: this.data.hod,
            district: this.data.district,
            taluka: this.data.talukaID,
            address: this.data.address,
            station: this.data.station,
            pinCode: this.data.pinCode,
            stdCode: this.data.stdCode,
            phoneNo: this.data.phoneNo,
            emailId: this.data.emailId,
            faxNo: this.data.faxNo
        });

        //Filter Of Taluka
        this.filteredTaluka.next(this.talukaList.slice());
        this.talukaCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.talukaList, this.talukaCtrl.value, this.filteredTaluka);
            });
    }

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

    saveSubOffice() {
        this.ddoSubOffice.get('ddoOfficeName').markAsTouched();
        this.ddoSubOffice.get('address').markAsTouched();
        if (this.ddoSubOffice.invalid) {
            return;
        }
        this.dialogRef.close(this.ddoSubOffice.value);
    }

    // errorMessages = {
    //     officeName: 'Please Enter Office Name',
    //     district: 'Please select any District',
    //     department: 'Please select any Department',
    //     Address: 'Please add Address here'
    // };
}


