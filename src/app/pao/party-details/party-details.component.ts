
import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DialogData } from 'src/app/budget/new-item-consolidation/new-item-consolidation/new-item-consolidate.component';

declare function SetGujarati();
declare function SetEnglish();

const ELEMENT_DATA = [
    { label: 'Chandreshwar Vishwanath Bhagat', value: '12000' },
    { label: 'Kanchan S', value: '22000' },
]
@Component({
    selector: 'app-party-details',
    templateUrl: './party-details.component.html',
    styleUrls: ['./party-details.component.css']
})
export class PartyDetailsComponent implements OnInit {


    displayedColumns: string[] = ['srno', 'label', 'value'];
    dataSource = ELEMENT_DATA;
    actionForm: FormGroup;

    // constructor(
    //     private elem: ElementRef,
    //     private toastr: ToastrService,
    //     private router: Router,
    //     private fb: FormBuilder,
    //     public dialogRef: MatDialogRef<PartyDetailsComponent>,
    //     @Inject(MAT_DIALOG_DATA) public data: DialogData,
    //     private el: ElementRef,

    // ) { }

    constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder, public dialogRef: MatDialogRef<PartyDetailsComponent>, ) { }


    goToDashboard(): void {
        this.dialogRef.close('no');
    }
    ngOnInit() {
    }
}
