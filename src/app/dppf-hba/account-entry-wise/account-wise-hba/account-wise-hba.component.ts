import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/emd';
import { Component, OnInit, Inject, } from '@angular/core';
@Component({
  selector: 'app-account-wise-hba',
  templateUrl: './account-wise-hba.component.html',
  styleUrls: ['./account-wise-hba.component.css']
})
export class AccountWiseHbaComponent implements OnInit {
  hbaMcaForm: FormGroup;
  hbaMcaCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  load_list: CommonListing[] = [
    { value: '1', viewValue: 'HBA' },
    { value: '2', viewValue: 'MCA' },
  ];
  districtList: CommonListing[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];
  constructor(public dialogRef: MatDialogRef<AccountWiseHbaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { }
  ngOnInit() {
    this.hbaMcaForm = this.fb.group({
      firstName: [''],
      hbaMca: [''],
      middleName: [''],
      lastName: [''],
      shortName: [''],
      gpfNo: [''],
      majorHead: [''],
      district: [''],
      hbaMczNo: ['']
    });
  }
  onClose() {
    this.dialogRef.close();
  }

}
