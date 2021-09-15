import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { edpMessage } from 'src/app/common/error-message/common-message.constants';


@Component({
    selector: 'app-add-designation',
    templateUrl: './add-designation.component.html',
    styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {

    addUpdade: FormGroup;
    selectedIndex: number;
    fileBrowseIndex: number;
    doneHeader: Boolean = false;
    today_date = Date.now();


    attachmentType_list: any[] = [
        { value: '1', viewValue: 'Supporting Document' }
    ];

    private _onDestroy = new Subject<void>();

    displayedBrowseColumns = ['attachmentType', 'fileName', 'browse', 'uploadedFileName', 'uploadby', 'action'];

    brwoseData: any[] = [{
        name: undefined,
        file: undefined,
    }];

    dataSourceBrowse = new MatTableDataSource(this.brwoseData);
    errorMessages = edpMessage;

    constructor(private fb: FormBuilder, private router: Router, private el: ElementRef, ) { }
    ngOnInit() {
        this.createForm();
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
        this.addUpdade = this.fb.group({
            designation: ['', Validators.required],
            designationShortName: ['', Validators.required],
            district: ['Ahmedabad'],
            dDONo: ['416'],
            cardexNo: ['78'],
            dDOOffice: ['Collector Office, Ahmedabad']
        });

    }
    saveDegination() { }

    gotoListing() {
        this.router.navigate(['/edp/add-designation-list']);
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

    goToDashboard() {

    }
}





