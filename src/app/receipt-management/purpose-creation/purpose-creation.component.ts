import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { receiptManagement } from 'src/app/common/error-message/common-message.constants';
import { PurposeCreationPopUpComponent } from '../purpose-creation-pop-up/purpose-creation-pop-up.component';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { ListValue } from 'src/app/model/common-grant';
import { PurposeCreation } from 'src/app/model/receipt-management';

@Component({
  selector: 'app-purpose-creation',
  templateUrl: './purpose-creation.component.html',
  styleUrls: ['./purpose-creation.component.css']
})
export class PurposeCreationComponent implements OnInit {
  // variables
  addUserList = false;
  purposeCreationForm: FormGroup;
  isSubmitted = false;
  isAdd = false;
  errorMessages = receiptManagement;
  isSelectedLc = false;
  directiveObj = new CommonDirective(this.router);

  // date
  initiatiomdate = new Date();
  maxDate = new Date();

  // form controls
  taxPurposeCtrl: FormControl = new FormControl();

  // list
  taxPurpose_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Sales Tax' },
    { value: '3', viewValue: 'Professional Tax' },
    { value: '4', viewValue: 'Entry Tax' },

  ];

  // table data
  Element_Data: PurposeCreation[] = [
    {
      pCode: 'Value Added Tax',
      mHead: '8043',
      subMajorHead: '00',
      minorHead: '101',
      subHead: '01',
      purpose: '-',

    }
  ];
  dataSource = new MatTableDataSource<PurposeCreation>(this.Element_Data);
  displayedColumns: string[] = ['checkbox', 'srNo', 'pCode', 'mHead', 'subMajorHead', 'minorHead', 'subHead', 'purpose', 'action'];
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.purposeCreationForm = this.fb.group({
      taxPurpose: [''],
      pCode: [''],
      mHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      purpose: [''],
    });
  }

  // clears form
  clearForm() {
    this.purposeCreationForm.reset();
  }

  // saves form
  onSave() {
    if (this.purposeCreationForm.valid) {
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }

  // sets values on selction of challan
  selectChallan(type) {
    if (type === 5) {
      this.isSelectedLc = true;
    } else if (type === 1 || type === 2 || type === 3 || type === 4) {
      this.isSelectedLc = false;
    }
  }

  // adds new user
  addUser() {
    this.addUserList = false;
    this.isAdd = true;
    const p_data = this.dataSource.data;
    p_data.push({
      pCode: this.purposeCreationForm.value['pCode'],
      mHead: this.purposeCreationForm.value['mHead'],
      subMajorHead: this.purposeCreationForm.value['subMajorHead'],
      minorHead: this.purposeCreationForm.value['minorHead'],
      subHead: this.purposeCreationForm.value['subHead'],
      purpose: this.purposeCreationForm.value['purpose'],

    });
    this.dataSource.data = p_data;
    this.clearForm();
  }

  // deletes record
  deleteEntry(element) {
    this.dataSource.data.splice(element, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);

  }

  // opens edit details dialog box
  editDetails() {
    const dialogRef = this.dialog.open(PurposeCreationPopUpComponent, {
      width: '1200px'
    });
  }

}
