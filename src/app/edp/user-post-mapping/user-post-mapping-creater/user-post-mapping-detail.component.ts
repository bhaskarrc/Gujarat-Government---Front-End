import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog, } from '@angular/material';
import { Observable, BehaviorSubject } from 'rxjs';
import { userPostMappingDetailsPosts, userPostMappingfromPosts, DialogData, PeriodicElement } from 'src/app/model/User-post-mapping';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SelectionModel } from '@angular/cdk/collections';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';

const ELEMENT_DATA: userPostMappingDetailsPosts[] = [
    { position: 1, pname: ' Joint Director - 2, Directorate of Accounts & Treasuries', name: 'Primary' },
    { position: 2, pname: 'Deputy Director - 1, Directorate of Accounts & Treasuries', name: 'Secondary' },

];

const USER_FORM_POST: userPostMappingfromPosts[] = [
    { sr_no: 1, post_name: 'Joint Director - 2', post_type: 'Primary', office_type: 'Collector Office, Ahmedabad' },
    { sr_no: 2, post_name: 'Deputy Director - 1', post_type: 'Secondary', office_type: 'Mamlatdar Office, Rajko' },

];

const Vacant_post: userPostMappingfromPosts[] = [
    { sr_no: 1, post_name: 'Joint Director - 2', post_type: 'MR S k Sukla' },
    { sr_no: 2, post_name: 'Deputy Director - 1', post_type: 'Miss Dixit' },

];



@Component({
    selector: 'app-user-post-mapping-detail',
    templateUrl: './user-post-mapping-detail.component.html',
    styleUrls: ['./user-post-mapping-detail.component.css']
})
export class UserPostMappingDtailComponent implements OnInit {
    displayedColumns: string[] = ['position', 'pname', 'name'];
    dataSource = ELEMENT_DATA;

    displayedBrowseColumnsForPost = ['select', 'sr_no', 'post_name', 'post_type', 'office_type', 'action'];
    // dataSourceBrowseForPost = USER_FORM_POST;
    dataSourceBrowseForPost = new MatTableDataSource(USER_FORM_POST);


    disPostTransfer = ['sr_no', 'post_name', 'post_type'];
    displayedvacantPost = ['select', 'sr_no', 'post_name', 'post_type'];
    // dataSourceBrowseForPost = USER_FORM_POST;
    dataSourceVacantPost = new MatTableDataSource(Vacant_post);



    selection = new SelectionModel(true, []);
    posts = new FormControl();
    postlists: string[] = [
        'Deputy Mamlatdar - 2',
        'Accounts Officer - 1',
        'Head Accountant - 3',
        'Deputy Section Officer - 1',
        'Project Assistant - 1'
    ];

    poststo = new FormControl();
    postlist: string[] = [
        'Deputy Mamlatdar - 2',
        'Accounts Officer - 1',
        'Head Accountant - 3',
        'Deputy Section Officer - 1',
        'Project Assistant - 1'
    ];

    vctposts = new FormControl();
    vacpostlists: string[] = [
        'Deputy Mamlatdar - 2 (s k shukala)',
        'Deputy Mamlatdar - 2 (s k shukala)'
    ];
    userpost: FormGroup;

    displayedPostBrowseColumns = ['sr_no', 'attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadedBy', 'action'];

    Forwardto_list: any[] = [
        { value: '1', viewValue: 'Mr. K A Trivedi (Office Suprintendent)' }
    ];
    today_date = Date.now();

    tabDisable: boolean;
    selectedIndex: number;
    doneHeader: boolean;
    isInActiveSelected: boolean;
    isCancelSelected: boolean;
    fileBrowseIndex: any;
    _onDestroy: Observable<any>;
    userPostto = false;
    userNameto = false;
    userPostfrom = false;
    userNamefrom = false;
    userIdNamept = false;
    userIdNamepf = false;
    vacntfromfrom = false;
    postListfr: any[] = [];
    postListtoo: any[] = [];
    // showPostListTitlet = false;
    showPostListTitle = false;
    errorMessages;

    constructor(
        private fb: FormBuilder,
        private el: ElementRef,
        private router: Router,
        private toastr: ToastrService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.errorMessages = edpMessage;
        this.createForm();
    }


    showConfirmationPopup() {
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(ChargeConfirmDialogComponent, {
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'no') {
                console.log('The dialog was closed', result);
            } else if (result === 'yes') {
                console.log('The dialog was closed', result);
            }
        });
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSourceBrowseForPost.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSourceBrowseForPost.data.forEach(row => this.selection.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

    goToNext() { }

    goToDashboard() { }

    createForm() {
        this.userpost = this.fb.group({
            taluka: [''],
            User_id: ['', Validators.required],
            User_name: ['', Validators.required],
            post: [''],
            postto: [''],
            Userpart: [''],
            postname: [''],
            confirm: ['']
        });
    }

    // tslint:disable-next-line: member-ordering


    // tslint:disable-next-line: member-ordering
    Post_list: any[] = [
        { value: '1', viewValue: 'Employee Number' },
        { value: '2', viewValue: 'Vacant Post' }
    ];

    // tslint:disable-next-line: member-ordering
    attachment_type_list: any[] = [
        { value: 'Supporting Document', viewValue: 'Supporting Document' }
    ];

    // tslint:disable-next-line: member-ordering
    postCtrl: FormControl = new FormControl();

    // tslint:disable-next-line: member-ordering
    Postnamecodectrl: FormControl = new FormControl();
    // tslint:disable-next-line: member-ordering
    postcheckctr: FormControl = new FormControl();

    // tslint:disable-next-line: member-ordering
    ELEMENT_DATA: any[] = [
        {
            name: undefined,
            file: undefined,
            attachment: 'CTC in case of DDO and  "Joining report" in any other case'
        },
        {
            name: undefined,
            file: undefined,
            attachment: 'Appointment order of concern employee/officer'
        },
        {
            name: undefined,
            file: undefined,
            attachment: 'Attachment of a print, Generated from "Rights Mapping" Screen'
        },
        {
            name: undefined,
            file: undefined,
            attachment: 'Supporting Document'
        }
    ];
    // tslint:disable-next-line: member-ordering
    dataSourceBrowse = new MatTableDataSource(this.ELEMENT_DATA);
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

    postselectfrom(Postshow) {
        // tslint:disable-next-line: triple-equals
        if (Postshow.value == 1) {
            // User Id
            this.userIdNamepf = true;
            this.userPostfrom = false;
            this.vacntfromfrom = false;
            // tslint:disable-next-line: triple-equals
        } else if (Postshow.value == 2) {
            // Post - vacant
            this.userPostfrom = false;
            this.userNamefrom = false;
            this.userIdNamepf = false;
            this.vacntfromfrom = true;

        }
    }

    postselectfto(Postshow) {
        // tslint:disable-next-line: triple-equals
        if (Postshow.value == 1) {
            // User Id
            this.userIdNamept = true;
            this.userPostto = false;
            // tslint:disable-next-line: triple-equals
        } else if (Postshow.value == 2) {
            // Post - vacant
            this.userNameto = false;
            this.userIdNamept = false;
        }
    }

    textValueChange(usernamepostshow) {
        this.userPostfrom = true;
        this.userNamefrom = true;
    }

    textValueChangeto(usernamepostshow) {
        this.userPostto = true;
        this.userNameto = true;
    }


    addPostListto(event, index) {
        this.showPostListTitle = true;
        // tslint:disable-next-line: triple-equals
        if (this.postListtoo[index] == undefined) {
            this.postListtoo[index] = event;
        } else {
            delete this.postListtoo[index];
        }
    }

    addVacantPostListfrom(event, index) {
        this.showPostListTitle = true;
        // tslint:disable-next-line: triple-equals
        if (this.postListfr[index] == undefined) {
            this.postListfr[index] = event;
        } else {
            delete this.postListfr[index];
        }
    }

    gotoListing() {
        this.router.navigate(['./edp/user-post-mapping-request']);
    }
}





@Component({
    selector: 'app-charge-confirm-dialog',
    templateUrl: './charge.confirm.dialog.html',
    styleUrls: ['./user-post-mapping-detail.component.css']

})

export class ChargeConfirmDialogComponent implements OnInit {
    confirmDialog: FormGroup;


    constructor(

        public dialogRef: MatDialogRef<ChargeConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private fb: FormBuilder,

    ) { }



    confirMation: any[] = [
        { value: '1', viewValue: 'Yes' },
        { value: '2', viewValue: 'No' }
    ];

    confCtrl: FormControl = new FormControl();
    ngOnInit() {
        this.createForm();
    }

    onCancel(): void {
        this.dialogRef.close('no');
    }

    onSave(): void {
        this.dialogRef.close('save');
    }

    createForm() {
        this.confirmDialog = this.fb.group({
            confirm: ['']
        });
    }

    // tslint:disable-next-line: member-ordering
    errorMessages = {
        confirm: 'Please select confirmation'
    };
}
