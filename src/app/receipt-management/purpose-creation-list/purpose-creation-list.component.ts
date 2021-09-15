import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { receiptManagement } from 'src/app/common/error-message/common-message.constants';
import { CommonDirective } from 'src/app/common/directive/validation.directive';
import { Router } from '@angular/router';
import { PurposeCreation } from 'src/app/model/receipt-management';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-purpose-creation-list',
  templateUrl: './purpose-creation-list.component.html',
  styleUrls: ['./purpose-creation-list.component.css']
})
export class PurposeCreationListComponent implements OnInit {
  // variables
  purposeCreationListForm: FormGroup;
  errorMessages = receiptManagement;
  isSelectedLc = false;
  directiveObj = new CommonDirective(this.router);

  // form control
  purposeCodeCtrl: FormControl = new FormControl();

  // list
  purposeCode_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Sales Tax' },
    { value: '3', viewValue: 'Professional Tax' },
    { value: '4', viewValue: 'Entry Tax' },
    { value: '5', viewValue: 'Other' }
  ];

  // table data
  Element_Data: PurposeCreation[] = [
    {
      pCode: '122333',
      mHead: '43',
      subMajorHead: '22',
      minorHead: '101',
      subHead: '02',
      purpose: '-',
    }
  ];
  dataSource = new MatTableDataSource<PurposeCreation>(this.Element_Data);
  displayedColumns: any[] = ['checkbox', 'srNo', 'pCode', 'mHead', 'subMajorHead', 'minorHead', 'subHead', 'purpose', 'action'];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.purposeCreationListForm = this.fb.group({
      purposeCode: [''],
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
    this.purposeCreationListForm.reset();
  }

  // sets values on selection of challan
  selectChallan(type) {
    if (type === 5) {
      this.isSelectedLc = true;
    } else if (type === 1 || type === 2 || type === 3 || type === 4) {
      this.isSelectedLc = false;
    }
  }

}
