import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-generate-lop-text-file',
  templateUrl: './generate-lop-text-file.component.html',
  styleUrls: ['./generate-lop-text-file.component.css']
})
export class GenerateLopTextFileComponent implements OnInit {
  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  generateLopTextFileForm: FormGroup;
  generateDataFileInfo = 'AG LOP Text File';
  minDate = new Date();
  maxDate = new Date();

  firstListCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  breakUpOfIfSfCtrl: FormControl = new FormControl();

  // list has firstListList name as firstList is formControl
  firstListList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];

  districtList: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];

  breakUpOfIfSfList: ListValue[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '2', viewValue: 'No' },
  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.generateLopTextFileForm = this.fb.group({
      fromDate: new Date(),
      toDate: new Date(),
      firstList: [''],
      district: [''],
      breakUpOfIfSf: ['']
    });
  }

  onlyAlphabet(event: any) {
    const pattern = /^[a-zA-Z]+$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }

  onlyAlphabetSpaceComma(event: any) {
    const pattern = /^[a-zA-Z,\s]+$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }

  generateReport() { }
  close() { }

}
