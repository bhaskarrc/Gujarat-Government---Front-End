import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReplaySubject, Observable,Subject, BehaviorSubject, from } from 'rxjs';
import { CommonListing } from 'src/app/model/common-listing';

declare function SetGujarati();

@Component({
  selector: 'app-admin-remarks',
  templateUrl: './admin-remarks.component.html',
  styleUrls: ['./admin-remarks.component.css']
})
export class AdminRemarksComponent implements OnInit {
 
  budgetAdminRemarks: FormGroup;
  hasFocusSet :number;

  finYearCtrl: FormControl = new FormControl();
  departmentCodeCtrl: FormControl = new FormControl();
  demandCtrl: FormControl = new FormControl();
  bpnCodeCtrl:FormControl = new FormControl();

  currentLang = new BehaviorSubject<string>('Eng');

  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2019-2020' },
  ];

  filteredDepartmentList: CommonListing[] = [
    { value: '1', viewValue: 'Education Department' },
    { value: '2', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department' },
    { value: '3', viewValue: 'Health and Family Welfare Department' }
  ];

  demandList: CommonListing[] = [
    { value: '1', viewValue: '01' },
    { value: '2', viewValue: '02' },
    { value: '3', viewValue: '03' },
    { value: '4', viewValue: '04' },
    { value: '5', viewValue: '05' },
    { value: '6', viewValue: '06' },
    { value: '7', viewValue: '07' },
    { value: '8', viewValue: '08' },
    { value: '9', viewValue: '09' }
  ];

  bpnList:CommonListing[] = [
    { value: '1', viewValue: '03: Agriculture, Farmers Welfare and Co-operation Department' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.budgetAdminRemarks = this.fb.group({
      financialYear: ['1'],
      department: [''],
      demand: [''],
      bpnCode: ['1'],
      workNameEng: [''],
      workNameGuj: ['']

    })
  }


  workNameGuj=''
  checkGujarati(data) {
    // this.budgetAdminRemarks.patchValue({
    //   workNameGuj: data
    // });
  }

  setGujaratiDefault() {
    SetGujarati();
      this.currentLang.next('Guj');
   
  }
 

  isBpnCode: boolean = false;
  selectDepartment(event: any) {
    if (event == '2') {
      this.isBpnCode = true;
    }
  }
   isDemand:boolean = false;
  selectDemand(event:any){
      if(event =='1'){
        this.isDemand = true;
      }
  }

  saveAsDraft() { }
  saveRemarks() { }
  goToDashboard() { }
  partASaveRemark() {}
}
