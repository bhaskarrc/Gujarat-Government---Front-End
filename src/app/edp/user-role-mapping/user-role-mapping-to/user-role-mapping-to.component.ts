import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect, MatTableDataSource } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

@Component({
    selector: 'app-user-role-mapping-to',
    templateUrl: './user-role-mapping-to.component.html',
    styleUrls: ['./user-role-mapping-to.component.css']
})
export class UserRoleMappingToComponent implements OnInit {

    allSubMappedAct: any[] = [];
    ddoOffice : string;
    district:string = 'Ahmedabad';
    ddoNo:number;
    cardexNo:number;
    role: any[] = [
        { value: 'creator', viewvalue: 'Creator' },
        { value: 'verifier', viewvalue: 'Verifier' },
        { value: 'approver', viewvalue: 'Approver' },
    ];
    sub_activity: string[] = [
        'Inward Branch',
        'Cardex Verification Branch',
        'Audit Branch',
        'Cheque/E-payment Branch',
        'Outward Branch'
    ];
    allSubMapped: any[] = [
        { value: '01', viewvalue: 'Treasury Bill Processing - Inward Branch' },
    ];
    employee_no_list: any[] = [
        { value: '1', empNo: 'GAGUJ71238', name: 'Mr. Pratik Shah' },
        { value: '2', empNo: ' GAD55643', name: 'Mr. S S Shah' },
    ];
    post_name_list: any[] = [
        { value: '1', viewValue: 'Deputy Mamlatdar - 2' },
        { value: '1', viewValue: 'Mamlatdar - 1' },
    ];
    module_name_list: any[] = [
        { value: '1', viewValue: 'Treasury Bill Processing' },
    ];
    activities_list: any[] = [
        { value: 'budget', viewValue: 'budget' },
        { value: 'budget', viewValue: 'budget' },
    ];
    items: any[] = [
        { value: 'budget', viewValue: 'Pratik S Shah' },
    ];

    districtNamelist: any[] = [
        { value: 'Ahmedabad', viewValue: 'Ahmedabad' },
        { value: 'Amreli', viewValue: 'Amreli' },
        { value: 'Bharuch', viewValue: 'Bharuch' },
        { value: 'Bhavnagar', viewValue: 'Bhavnagar' },
        { value: 'Bhuj', viewValue: 'Bhuj' },
        { value: 'Dahod', viewValue: 'Dahod' }
    ];

    ELEMENT_DATA_TO: any[] = [
        { filename: 'data.JPEG', uploadedby: 'Mr. Pratik Shah', attechment: 'Supporting Document' },
        { filename: 'data.pdf', uploadedby: 'Mr. Pratik Shah', attechment: 'Supporting Document' },
    ];

    userMappingForm: FormGroup;
    activitiesCtrl: FormControl = new FormControl();
    AddUser2: any;
    array: any = [];
    designation = 'Deputy Mamlatdar - 2';
    showSubActivity: Boolean = false;
    showSubActivityMappedToUser: Boolean = false;
    searchText: any;


    employeeNoCtrl: FormControl = new FormControl();

    postNameCtrl: FormControl = new FormControl();

    moduleNameCtrl: FormControl = new FormControl();

    @ViewChild('singleSelect') singleSelect: MatSelect;
    _onDestroy = new Subject<void>();

    dataSourceTOBrowse = new MatTableDataSource(this.ELEMENT_DATA_TO);
    displayedTOBrowseColumns = ['sr_no', 'attachmentType', 'fileName', 'uploadedBy', 'action'];
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private toastr: ToastrService,
    ) {}


    errorMessages = edpMessage;
    
    ngOnInit() {
        this.userMappingForm = this.fb.group({
            district: ['', Validators.required],
            ddoNo: ['', [Validators.required, Validators.maxLength(4)]],
            cardexNo: ['',[Validators.required, Validators.maxLength(4)]],
            ddoOffice: ['', Validators.required],
            postName: ['', Validators.required],
            moduleName: ['', Validators.required],
            employeeNo: ['', Validators.required],
            userName: [''],
        });

        this.userMappingForm.controls.district.patchValue('Ahmedabad');

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

    fetchDDOOffice(event) {
        this.userMappingForm.controls.ddoOffice.patchValue('Collector Office, Ahmedabad')
    }

    onSubmit(data) {
        if (this.userMappingForm.invalid) {
            this.showSubActivityMappedToUser = false;
        } else {
            this.showSubActivityMappedToUser = true;
            const no = this.array.filter(data => {
                return data.employeeNo === this.userMappingForm.value.employeeNo;
            });
            if(no.length > 0) {
                this.toastr.error('Already User Exists.');
            } else {
                this.array.push({
                    AddUser2: this.userMappingForm.value.userName,
                    employeeNo: this.userMappingForm.value.employeeNo
                });
            }
        }

    }

    onEmpNoSelect(data) {
        this.userMappingForm.controls.userName.setValue(data.name);
        this.userMappingForm.controls.postName.patchValue('1');
    }

    onModuleNameSelect(module) {
        this.showSubActivity = true;
    }

    onSubActivitySelect(data, index) {
        this.showSubActivityMappedToUser = true;

        if (this.allSubMappedAct[index] == undefined) {
            this.allSubMappedAct[index] = "Treasury Bill Processing - " + data;

        } else {
            delete this.allSubMappedAct[index];
        }
    }

    reset() {
        this.userMappingForm.reset();
    }

    resetAll() {
        this.reset();
    }

    gotoListing() {
        this.router.navigate(['./edp/user-role-mapping-list']);
    }

    goToDashboard() {
        this.router.navigate(['']);
    }

    onDDONoSelect(ddoNo) {
        if(ddoNo.length > 0) {
            this.ddoOffice = 'Collector Office';
        }   else {

        }
    }
    onCardexNoSelect(cardexNo) {
        if(cardexNo.length > 0) {
            this.ddoOffice = 'Mamlatdar Office';
        }   else {

        }
    }

}
