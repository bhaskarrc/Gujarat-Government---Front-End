import { MatTableDataSource, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { receiptManagement } from 'src/app/common/error-message/common-message.constants';
import { ListValue } from 'src/app/model/common-grant';
import { PurposeCreation } from 'src/app/model/receipt-management';

@Component({
  selector: 'app-purpose-creation-pop-up',
  templateUrl: './purpose-creation-pop-up.component.html',
  styleUrls: ['./purpose-creation-pop-up.component.css']
})
export class PurposeCreationPopUpComponent implements OnInit {
  // variables
  purposeCreationForm: FormGroup;
  isSubmitted = false;
  errorMessages = receiptManagement;
  isSelectedLc = false;

  // form control
  purposeCodeCtrl: FormControl = new FormControl();
  taxPurposeCtrl: FormControl = new FormControl();

  // lists
  purposeCode_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Sales Tax' },
    { value: '3', viewValue: 'Professional Tax' },
    { value: '4', viewValue: 'Entry Tax' },
    { value: '5', viewValue: 'Other' }
  ];
  taxPurpose_list: ListValue[] = [
    { value: '1', viewValue: 'Value Added Tax' },
    { value: '2', viewValue: 'Sales Tax' },
    { value: '3', viewValue: 'Professional Tax' },
    { value: '4', viewValue: 'Entry Tax' }
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
  displayedColumns: string[] = ['srNo', 'pCode', 'mHead', 'subMajorHead', 'minorHead', 'subHead', 'purpose', 'action'];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ListValue>) { }

  ngOnInit() {
    this.purposeCreationForm = this.fb.group({
      pCode: [''],
      mHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      purpose: [''],
      taxPurpose: ['']
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

  // sets value on selection of challan
  selectChallan(type) {
    if (type === 5) {
      this.isSelectedLc = true;
    } else if (type === 1 || type === 2 || type === 3 || type === 4) {
      this.isSelectedLc = false;
    }
  }

  // closes dialog box
  onNoClick(): void {
    this.dialogRef.close('no');
  }
}

