import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

// import { DialogData } from 'src/app/budget/standing-charge/standalone-charge-listing/standalone-charge-listing.component';

@Component({
    selector: 'app-user-post-mapping-request',
    templateUrl: './user-post-mapping-request.component.html',
    styleUrls: ['./user-post-mapping-request.component.css']
})
export class UserPostMappingRequestComponent implements OnInit {
    private _onDestroy = new Subject<void>();
    seachRequestForm: FormGroup;

    displayedColumns: string[] = [
        // tslint:disable-next-line: max-line-length
        'srNo', 'requestNo', 'requestDate', 'district', 'ddoNo', 'cardexNo', 'ddoOfficeName', 'pTf', 'userid', 'pTt', 'emnoto', 'pendingWith', 'status', 'remarks', 'action'];

    // tslint:disable-next-line: max-line-length
    updationRequests: any[] = [{ requestNo: '510101201901', requestDate: '18/11/2019 13:12:51', district: 'Ahmedabad', ddoNo: '416', cardexNo: '78', ddoOfficeName: 'Collector Office, Ahmedabad', userid: '00001', pTf: 'Employee', pTt: 'Employee', emnoto: '000158', pendingWith: 'Mr. S R Shukla (EDP - Joint Director)', status: 'Pending', remarks: '' }];

    selectedAll: Boolean = false;

    dataSource = new MatTableDataSource(this.updationRequests);

    dialogRef: any;
    constructor(private fb: FormBuilder, public dialog: MatDialog) { }


    statusList: any[] = [
        { value: '1', viewValue: 'Pending' }
    ];

    districtNamelist: any[] = [
        { value: 'Ahmedabad', viewValue: 'Ahmedabad' },
        { value: 'Amreli', viewValue: 'Amreli' },
        { value: 'Bharuch', viewValue: 'Bharuch' },
        { value: 'Bhavnagar', viewValue: 'Bhavnagar' },
        { value: 'Bhuj', viewValue: 'Bhuj' },
        { value: 'Dahod', viewValue: 'Dahod' }
    ];
    statusCtrl: FormControl = new FormControl();

    districtCtrl: FormControl = new FormControl();




    ngOnInit() {
        this.createForm();

    }

    createForm() {
        this.seachRequestForm = this.fb.group({
            transNO: [''],
            requestdate: [''],
            district: [''],
            ddono: [''],
            cardexNo: [''],
            empNo: [''],
            empName: [''],
            status: [''],
        });
    }


    selectAll() {
        this.dataSource.data.forEach(_d => {
            _d['selected'] = this.selectedAll;
        });
        this.dataSource = new MatTableDataSource(this.dataSource.data);
    }

    checkIfAllSelected() {
        this.selectedAll = this.dataSource.data.every((item: any) => {
            return item.selected === true;
        });
    }

    searchRequest() { }




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

    clearForm() { }
}

