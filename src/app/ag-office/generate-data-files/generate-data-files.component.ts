import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';

@Component({
  selector: 'app-generate-data-files',
  templateUrl: './generate-data-files.component.html',
  styleUrls: ['./generate-data-files.component.css']
})
export class GenerateDataFilesComponent implements OnInit {

  referenceNumber = 'Reference Number:';
  referenceNumberDate = 'Reference Date:';
  todayDate = Date.now();
  generateDataFileForm: FormGroup;
  generateDataFileInfo = 'AG Interface';
  minDate = new Date();
  maxDate = new Date();

  includeHeadsCtrl: FormControl = new FormControl();
  districtCtrl: FormControl = new FormControl();
  outputCtrl: FormControl = new FormControl();

  includeHeadsList: ListValue[] = [
    { value: '1', viewValue: 'Loan Heads' },
    { value: '2', viewValue: 'Without Loan Heads' },
    { value: '3', viewValue: 'GPF' },
  ];

  districtList: ListValue[] = [
    { value: '1', viewValue: 'District Treasury Office,Gandhinagar' },
    { value: '2', viewValue: 'District Treasury Office,Ahmedabad' },
    { value: '3', viewValue: 'District Treasury Office,Rajkot' },
  ];

  outputList: ListValue[] = [
    { value: '1', viewValue: 'Screen' },
    { value: '2', viewValue: 'Text File' },
    { value: '3', viewValue: 'PDF File' },
  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.generateDataFileForm = this.fb.group({
      fromDate: new Date(),
      toDate: new Date(),
      includeHeads: [''],
      district: [''],
      output: ['1']
    });
  }

  onlyAlphabetSpace(event: any) {
    const pattern = /^[a-zA-Z\s]+$/;
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

  close() { }
  submit() { }

}
