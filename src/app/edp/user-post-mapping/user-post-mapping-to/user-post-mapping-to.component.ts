import { Component, OnInit, Pipe, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { userPostMappingToPosts } from 'src/app/model/User-post-mapping';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';




const ELEMENT_DATA: userPostMappingToPosts[] = [
    { position: 1, pname: ' Joint Director - 2, Directorate of Accounts & Treasuries', name: 'Primary' },
    { position: 2, pname: 'Deputy Director - 1, Directorate of Accounts & Treasuries', name: 'Secondry' },

];

@Component({
    selector: 'app-user-post-mapping-to',
    templateUrl: './user-post-mapping-to.component.html',
    styleUrls: ['./user-post-mapping-to.component.css']
})
export class UserPostMappingToComponent implements OnInit {

    displayedColumns: string[] = ['select', 'position', 'pname', 'post_type'];

    displaycolumnto: string[] = ['pname', 'name'];
    dataSource = new MatTableDataSource<userPostMappingToPosts>(ELEMENT_DATA);
    selection = new SelectionModel<userPostMappingToPosts>(true, []);
    ddoOfcemployenamefr: boolean;



    today_date = Date.now();


    Emplname = new FormControl();
    emp_list: string[] = ['Deputy Mamlatdar ', 'collector', 'Mamlatdar', 'Deputy Section Officer', 'Relationship Manager', 'Project Assistant - 1'];

    poststo = new FormControl();
    postlist: string[] = ['Deputy Mamlatdar ', 'collector', 'Mamlatdar', 'Deputy Section Officer', 'Relationship Manager', 'Project Assistant - 1'];

    userpost: FormGroup;



    tabDisable: boolean;
    selectedIndex: number;
    doneHeader: boolean;
    isInActiveSelected: boolean;
    isCancelSelected: boolean;
    fileBrowseIndex: any;
    el: any;
    dialog: any;
    _onDestroy: Observable<any>;
    userPostto = false;
    userNameto = false;
    userPostfrom = false;
    userNamefrom = false;
    userIdNamept = false;
    userIdNamepf = false;
    postListfr: any[] = [];
    postListtoo: any[] = [];
    showPostListTitlet = false;
    showPostListTitle = false;
    ddoOfcemployename = false;



    errorMessages = edpMessage;

    Forwardto_list: any[] = [
        { value: '1', viewValue: 'Mr. K A Trivedi (Office Suprintendent)' }
    ];
    attachmentTypeCode: any[] = [
        { value: '1', viewValue: 'Supporting Document' },
    ];

    Post_list: any[] = [
        { value: '1', viewValue: 'Employee' },
        { value: '2', viewValue: 'Vacant Post' }
    ];

    District_list = [
        { value: '01', viewValue: 'Ahmedabad' },
        { value: '02', viewValue: 'Gandhinagar' },
        { value: '03', viewValue: 'Mahesana' },
        { value: '04', viewValue: 'Patan' }
    ];

    browseDataForPost: any[] = [];

    displayedColumnsForPost = new BehaviorSubject<any[]>(['noData']);
    displayedBrowseColumnsForPost = ['sr_no', 'post_name', 'post_type'];

    dataSourceBrowseForPost = new MatTableDataSource(['noData']);
    postCtrl: FormControl = new FormControl();
    districtControl: FormControl = new FormControl();

    Postnamecodectrl: FormControl = new FormControl();

    constructor(
        private fb: FormBuilder,
        private myElement: ElementRef,
    ) { }

    ngOnInit() {
        this.createForm();
    }

        /** Whether the number of selected elements matches the total number of rows. */
        isAllSelected() {
            const numSelected = this.selection.selected.length;
            const numRows = this.dataSource.data.length;
            return numSelected === numRows;
        }

        /** Selects all rows if they are not all selected; otherwise clear selection. */
        masterToggle() {
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSource.data.forEach(row => this.selection.select(row));
        }

        /** The label for the checkbox on the passed row */
        checkboxLabel(row?: userPostMappingToPosts): string {
            if (!row) {
                return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
            }
            return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
        }

    postselectfrom(Postshow) {
        if (Postshow.value == 1) {
            // User Id
            this.userIdNamepf = true;
            this.userPostfrom = false;
        // tslint:disable-next-line: triple-equals
        } else if (Postshow.value == 2) {
            // Post - vacant
            this.userPostfrom = true;
            this.userNamefrom = false;
            this.userIdNamepf = false;

        }
    }


    addPostListfrom(event) {
        //console.log(event);

        this.displayedColumnsForPost.next(this.displayedBrowseColumnsForPost);
        let index = 38;
        this.dataSourceBrowseForPost.data.forEach(function (v, i) {
            if (v['post_name'] == event) {
                index = i;
                return;
            }
        })
        if (index != 38) {
            this.dataSourceBrowseForPost.data.splice(index, 1);
            this.dataSourceBrowseForPost = new MatTableDataSource(this.dataSourceBrowseForPost.data);
        } else {
            const data = this.dataSourceBrowseForPost.data[this.dataSourceBrowseForPost.data.length - 1];
            let p_data;
            if (this.dataSourceBrowseForPost.data[0] == 'noData') {
                p_data = [];
            } else {
                p_data = this.dataSourceBrowseForPost.data;
            }

            p_data.push({
                post_name: event,
                post_type: undefined,
            });
            this.dataSourceBrowseForPost.data = p_data;
        }
    }

    goToNext() { }

    goToDashboard() { }

    createForm() {
        this.userpost = this.fb.group({
            taluka: [''],
            User_id: ['', Validators.required],
            User_name: ['', Validators.required],
            post: [''],
            district: [''],
            Userpart: [''],
            postname: ['']
        });
    }

    postselectfto(Postshow) {
        if (Postshow.value == 1) {
            // User Id
            this.userIdNamept = true;
            this.userPostto = false;
        } else if (Postshow.value == 2) {
            // Post - vacant
            this.userNameto = false;
            this.userIdNamept = false;
        }
    }


    textValueChangeddono(usernamepostshow) {

        this.ddoOfcemployenamefr = true;

    }

    textValueChange(usernamepostshow) {
        this.userNamefrom = true;
    }

    textValueChangeto(usernamepostshow) {
        this.userNameto = true;
    }

    addPostListto(event, index) {
        this.showPostListTitle = true;
        if (this.postListtoo[index] == undefined) {
            this.postListtoo[index] = event;
        } else {
            delete this.postListtoo[index];
        }
    }


}
