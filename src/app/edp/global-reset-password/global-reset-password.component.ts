import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Subject, BehaviorSubject, Observable, } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalResetPassword } from '../../model/global-reset-password';

export interface DialogData {
    label: string;
    viewValue: string;
}

const ELEMENT_DATA: GlobalResetPassword[] = [
    { checked: false, userIdGPFNo: 'GAGUJ71238', empName: 'rajesh', ddooffice: 'Pay & Accounts Office Ahmedabad', designation: 'Under Secretary', postType: 'Primary' }
];


@Component({
    selector: 'app-global-reset-password',
    templateUrl: './global-reset-password.component.html',
    styleUrls: ['./global-reset-password.component.css']
})
export class GlobalResetPasswordComponent implements OnInit {
    private _onDestroy = new Subject<void>();
    passwordsetPasswordForm: FormGroup;

    displayedColumns = new BehaviorSubject<string[]>(["noData"]);
    headerColumn: string[] = ['checked', 'userIdGPFNo', 'empName', 'ddooffice', 'designation', 'postType'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    isRecordSelected: boolean = false;
    isSerch: boolean = false;

    constructor(private fb: FormBuilder, private toaster: ToastrService, public dialog: MatDialog,) { }

    ngOnInit() {
        this.passwordsetPasswordForm = this.fb.group({
            employeeId: [''],
        });
    }
    reset() {
        this.passwordsetPasswordForm.reset();
    }

    searchDetail(): void {
        this.isSerch = true;
    }

    submitData() {
        // this.toaster.success("Bank detail updated successfully.");
        // this.displayedColumns.next(["noData"]);
    }

    ngOnDestroy() { }
    showConfirmationPopup() {
        const dialogRef = this.dialog.open(GlobalResetPasswordComponentDialog, {
            width: '360px',
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }

    checkboxValueChange() {
        this.isRecordSelected = false;
        this.dataSource.data.forEach(element => {
            if (element['checked']) {
                this.isRecordSelected = true;
            }
        });
    }

}



@Component({
    selector: 'globle-reset-password-component-dialog',
    templateUrl: 'globle-reset-password-component-dialog.html',
})


export class GlobalResetPasswordComponentDialog implements OnInit {


    filteredOptions: Observable<string[]>;
    options: any;
    myControl = new FormControl();
    additionalText = new FormControl();
    constructor(
        public dialogRef: MatDialogRef<GlobalResetPasswordComponentDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

    ngOnInit() { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onYesClick() {
        this.dialogRef.close();
    }
}

