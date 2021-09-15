
import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DialogData } from 'src/app/budget/new-item-consolidation/new-item-consolidation/new-item-consolidate.component';

declare function SetGujarati();
declare function SetEnglish();

const ELEMENT_DATA = [
    { label: 'Mr. Abc', value: '12000.00' },
    { label: 'Mr. Abc', value: '22000.00' },
];
@Component({
    selector: 'app-party-details',
    templateUrl: './party-details.component.html',
    styleUrls: ['./party-details.component.css']
})
export class PartyDetailsComponent implements OnInit {

    constructor(private router: Router, public dialog: MatDialog,
        private fb: FormBuilder, public dialogRef: MatDialogRef<PartyDetailsComponent>,) { }

    displayedColumns: string[] = ['srno', 'label', 'value'];
    dataSource = ELEMENT_DATA;
    actionForm: FormGroup;



    goToDashboard(): void {
        this.dialogRef.close('no');
    }
    ngOnInit() {
    }
}
