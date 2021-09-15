import { pvuMessage } from './../../common/error-message/common-message.constants';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';

@Component({
  selector: 'app-extra-ordinary-leave',
  templateUrl: './extra-ordinary-leave.component.html',
  styleUrls: ['./extra-ordinary-leave.component.css']
})
export class ExtraOrdinaryLeaveComponent implements OnInit {
  createEOLForm: FormGroup;
  // date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  employeeNoCtrl: FormControl = new FormControl();
  date: any = new Date();



  errorMessages = pvuMessage;

  router: any;

  constructor(public fb: FormBuilder, public dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit() {
    this.createEOLForm = this.fb.group({
      transNo: [''],
      initiationDate: [''],
      employeeNo: [''],
      empName: [''],
      class: [''],
      designation: [''],
      ofcName: [''],
      startDate: [''],
      endDate: [''],
      orderNoDate: [''],
      noOfDays: [''],
      remark: [''],
      employeeDoj:[''],
      dateOfRetirement:['']

    });
  }

  openDialogEmployeeNumber() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(SearchEmployeeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {

      this.createEOLForm.patchValue({
        employeeNo: result[0].employeeNumber,
        empName: result[0].employeeName,
        class: 'Class I',
        designation: result[0].designation,
        ofcName: 'Mamlatdar Office, Sanand',
        employeeDoj:'01/05/2015',
        dateOfRetirement:'01/05/2036',
      });
    });
  }


  saveEOLData() {
  }

  submitDetails() {
  }
}
