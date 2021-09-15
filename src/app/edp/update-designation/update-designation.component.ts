import { Component, OnInit, Inject, ElementRef } from '@angular/core';
// import { DialogData, } from './update-designation.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionSequence } from 'protractor';
import { MatTableDataSource, MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { UpdateDesignation } from '../../model/update-designation';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';
export interface DialogData {
    label: string;
    viewValue: string;
}

@Component({
    selector: 'app-update-designation',
    templateUrl: './update-designation.component.html',
    styleUrls: ['./update-designation.component.css']
})
export class UpdateDesignationComponent implements OnInit {

    updateDesignationForm: FormGroup;
    selectedIndex: number;
    fileBrowseIndex: number;
    doneHeader: Boolean = false;
    isConsolidateVisible: boolean;
    newPostName = 'Deputy Mamlatdar-1';

    errorMessages = edpMessage;


    employeeNo_List: any[] = [
        { value: '1', empNo: 'GAGUJ71238', name: 'Mr. Pratik Shah' },
        { value: '2', empNo: ' GAD55643', name: 'Mr. S S Shah' },
    ];

    activePost_List: any[] = [
        { value: '1', viewValue: 'Office Superintendent' },
        { value: '2', viewValue: 'Deputy Section Officer' },
    ];

    designationList: any[] = [
        { value: '1', viewValue: 'Deputy Mamlatdar' },
        { value: '2', viewValue: 'Chif Deputy Mamlatdar' },
    ];

    attachmentType_list: any[] = [
        { value: '1', viewValue: 'Supporting Document' }
    ];
    private _onDestroy = new Subject<void>();

    employeeNoCtrl: FormControl = new FormControl();

    actpostCtrl: FormControl = new FormControl();

    desigCtrl: FormControl = new FormControl();

    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadby', 'action'];

    brwoseData: any[] = [{
        name: undefined,
        file: undefined,
    }];

    today_date = Date.now();

    dataSourceBrowse = new MatTableDataSource(this.brwoseData);

    constructor(
        public dialog: MatDialog,
        private fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private el: ElementRef,
    ) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.updateDesignationForm = this.fb.group({
            employeeNo: [''],
            actpost: [''],
            designation: [''],
            district: ['rajkot'],
            ddoNo: [''],
            cardexNo: [''],
            ddoOffice: [''],
            newPostName: [''],
            employeeName: ['']
        });
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

    onEmpNoSelect(data) {
        this.updateDesignationForm.controls.employeeName.setValue(data.name);
        this.updateDesignationForm.controls.actpost.patchValue('1');
    }

    gotoListing() {
        this.router.navigate(['/edp/update-designation-list']);
    }

    goRequestNo() {

    }
    showConfirmationPopup() {
        const dialogRef = this.dialog.open(UpdateDesignationDialogComponent, {
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {

        });
    }
    goToDashboard() { }
    saveDegination() { }


    close() { }
    toggleSelection() { }

    Updatedesignation() {

    }
    edit() { }

    goToNext() {
        this.selectedIndex = 1;
    }

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
            if (data && data.file && data.name) {//&& data.name
                const p_data = this.dataSourceBrowse.data;
                p_data.push({
                    name: undefined,
                    file: undefined,
                });
                this.dataSourceBrowse.data = p_data;
            } else {

            }
        }
    }
    deleteBrowse(index) {
        this.dataSourceBrowse.data.splice(index, 1);
        this.dataSourceBrowse = new MatTableDataSource(this.dataSourceBrowse.data);
    }
    cancelFile() {

    }

}


@Component({
    selector: 'update-designation-dialog',
    templateUrl: 'update-designation-dialog.html',
})


export class UpdateDesignationDialogComponent implements OnInit {

    newpostAssign: FormGroup;

    post_list: any[] = [
        { value: '01', viewValue: 'Under Secretary' },
        { value: '02', viewValue: 'Deputy Secretary' },
        { value: '03', viewValue: 'Secretary' },
    ];

    forwardTo_list: any[] = [
        { value: '01', viewValue: 'Satendra Zala' },
        { value: '02', viewValue: 'Hardik Chaudhary' },
        { value: '03', viewValue: 'C.K Brahmbhatt' },
    ];
    postCtrl: FormControl = new FormControl();
    postAction: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    forwardToCodeCtrl: FormControl = new FormControl();
    filteredforwardToCode: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    private _onDestroy = new Subject<void>();

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<UpdateDesignationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

    filteredOptions: Observable<string[]>;
    options: any;
    myControl = new FormControl();
    additionalText = new FormControl();

    ngOnInit() {
        this.createForm();
        if (this.post_list) {
            this.postAction.next(this.post_list.slice());
        }
        (this.postCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.post_list, this.postCtrl.value, this.postAction);
            }));
        if (this.forwardTo_list) {
            this.filteredforwardToCode.next(this.forwardTo_list.slice());
        }
        (this.forwardToCodeCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterObjValue(this.forwardTo_list, this.forwardToCodeCtrl.value, this.filteredforwardToCode);
            }));
        // console.log('data', this.data);
        this.options = this.data;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
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
        this.newpostAssign = this.fb.group({
            newPost: ['', Validators.required],
            forwardToCode: ['', Validators.required],
        });
    }

    forwardConsolidate() {
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
