import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { lfMessage } from 'src/app/common/error-message/common-message.constants';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonListing } from 'src/app/model/common-listing';
import { PendingCasesForRemovalAtHqRegister } from 'src/app/model/local-fund';

@Component({
  selector: 'app-pending-cases-for-removal-at-hq-register',
  templateUrl: './pending-cases-for-removal-at-hq-register.component.html',
  styleUrls: ['./pending-cases-for-removal-at-hq-register.component.css']
})
export class PendingCasesForRemovalAtHqRegisterComponent implements OnInit {
  // date
  todayDate = Date.now();
  // variables
  errorMessages = lfMessage;
  isSubmitted = false;
  // form group
  pendingCasesRemovalHQForm: FormGroup;
  // form control
  instituteTypeCtrl: FormControl = new FormControl();

  // lists start
  instituteTypeList: CommonListing[] = [
    { value: '0', viewValue: 'Maha Nagar Palika' },
    { value: '1', viewValue: 'Nagarpalika' },
    { value: '2', viewValue: 'District Panchayat' },
    { value: '3', viewValue: 'Taluka Panchayat' },
    { value: '4', viewValue: 'University' },
    { value: '5', viewValue: 'Municiple School Board' },
    { value: '6', viewValue: 'Village Panchayat' },
    { value: '7', viewValue: 'Police Welfare Fund' },
    { value: '8', viewValue: 'Provident Fund of District Panchayat' },
    { value: '9', viewValue: 'Provident Fund of Secondary Education office' },
    { value: '10', viewValue: 'Ambaji Temple Trust' },
    { value: '11', viewValue: 'Others' },
  ];
  // lists end

  // table data start
  elementData: PendingCasesForRemovalAtHqRegister[] = [
    {
      id: '1011',
      instituteType: '2',
      instituteName: 'AMC',
      outwardNo: '1245',
      outwardDate: new Date('4-6-2019'),
      subject: '',
      replyFromHQ: '',
      remark: '',
      edit: true
    },
  ];
  displayedColumns: string[] = [
    'serialNo',
    'id',
    'instituteType',
    'instituteName',
    'outwardNo',
    'outwardDate',
    'subject',
    'replyFromHQ',
    'remark',
    'action',
  ];
  dataSource = new MatTableDataSource<PendingCasesForRemovalAtHqRegister>(this.elementData);
  // table data end

  // paginator
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.pendingCasesRemovalHQForm = this.fb.group({

      id: [{ value: '1011', disabled: true }],
      instituteType: [''],
      instituteName: [{ value: 'Ahmedabad Dist. Panchayat', disabled: true }],
      outwardNo: [''],
      outwardDate: [''],
      subject: [''],
      replyFromHQ: [''],
      remark: [''],


    });
  }

  // on click on save button
  onSave() {

    if (this.pendingCasesRemovalHQForm.valid) {
      this.isSubmitted = false;

      this.elementData.push({
        id: '1011',
        instituteType: this.pendingCasesRemovalHQForm.get('instituteType').value,
        instituteName: 'Ahmedabad Dist. Panchayat',
        outwardNo: this.pendingCasesRemovalHQForm.value.outwardNo,
        outwardDate: this.pendingCasesRemovalHQForm.value.outwardDate,
        subject: this.pendingCasesRemovalHQForm.value.subject,
        replyFromHQ: this.pendingCasesRemovalHQForm.value.replyFromHQ,
        remark: this.pendingCasesRemovalHQForm.value.remark,
        edit: true
      });

      this.dataSource.data = this.dataSource.data;

    } else {
      this.isSubmitted = true;
    }

  }

  // reset form
  reset() {
    this.pendingCasesRemovalHQForm.reset();
  }

  // on click on edit icon in table
  onEdit(element) {
    element.edit = !element.edit;
  }


}
