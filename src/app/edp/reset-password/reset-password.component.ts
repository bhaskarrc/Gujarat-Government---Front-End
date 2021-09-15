import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Subject, BehaviorSubject, Observable, } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResetPassword } from '../../model/reset-password';

export interface DialogData {
    label: string;
    viewValue: string;
}

const ELEMENT_DATA: ResetPassword[] = [
    {
        checked: false,
        userIdGPFNo: 'GAGUJ71238',
        empName: 'rajesh',
        ddooffice: 'Pay & Accounts Office Ahmedabad',
        designation: 'Under Secretary',
        postType: 'Primary' }
];

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    private _onDestroy = new Subject<void>();
    passwordsetPasswordForm: FormGroup;

    displayedColumns = new BehaviorSubject<string[]>(['noData']);
    headerColumn: string[] = ['checked', 'userIdGPFNo', 'empName', 'ddooffice', 'designation', 'postType'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    isRecordSelected: Boolean = false;
    isSerch: Boolean = false;

    constructor(
        private fb: FormBuilder,
        private toaster: ToastrService,
        public dialog: MatDialog
    ) { }

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

    showConfirmationPopup() {
        // tslint:disable-next-line: no-use-before-declare
        const dialogRef = this.dialog.open(ResetPasswordComponentDialog, {
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
    // tslint:disable-next-line: component-selector
    selector: 'reset-password-component-dialog',
    templateUrl: 'reset-password-component-dialog.html',
})


// tslint:disable-next-line: component-class-suffix
export class ResetPasswordComponentDialog implements OnInit {


    filteredOptions: Observable<string[]>;
    options: any;
    myControl = new FormControl();
    additionalText = new FormControl();
    constructor(
        public dialogRef: MatDialogRef<ResetPasswordComponentDialog>,
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

