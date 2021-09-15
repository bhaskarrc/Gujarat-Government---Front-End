import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-tracking-report',
  templateUrl: './item-tracking-report.component.html',
  styleUrls: ['./item-tracking-report.component.css']
})
export class ItemTrackingReportComponent implements OnInit {

  displayedColumns: string[] = ['srno', 'departmentName', 'bpn', 'demand', 'majorHead',
  'subMajorHead', 'minorHead', 'subHead', 'detailedHead', 'css', 'formType', 'itemName',
  'deptLevelFile', 'deptAmount', 'deptLevelStatus', 'fdLevelFile', 'fdAmount', 'fdLevelStatus',
  'chargedVoted'];

  datasource: any[] = [{
    departmentName: 'Finance Department',
    bpn: '012',
    demand: '015',
    majorHead: '2052',
    subMajorHead: '00',
    minorHead: '090',
    subHead: '01',
    detailedHead: '00',
    css: 'No',
    formType: 'C',
    itemName: 'Test',
    deptLevelFile: '',
    deptAmount: '',
    deptLevelStatus: '',
    fdLevelFile: '',
    fdAmount: '',
    fdLevelStatus : '',
    chargedVoted: 'VT'
  },
  {
    departmentName: 'Finance Department',
    bpn: '012',
    demand: '015',
    majorHead: '4700',
    subMajorHead: '80',
    minorHead: '001',
    subHead: '01',
    detailedHead: '00',
    css: 'No',
    formType: 'C',
    itemName: 'Test',
    deptLevelFile: '',
    deptAmount: '',
    deptLevelStatus: '',
    fdLevelFile: '',
    fdAmount: '',
    fdLevelStatus : '',
    chargedVoted: 'CH',
  },
  {
    departmentName: 'Finance Department',
    bpn: '012',
    demand: '017',
    majorHead: '2054',
    subMajorHead: '00',
    minorHead: '095',
    subHead: '01',
    detailedHead: '00',
    css: 'No',
    formType: 'C',
    itemName: 'Test',
    deptLevelFile: '',
    deptAmount: '',
    deptLevelStatus: '',
    fdLevelFile: '',
    fdAmount: '',
    fdLevelStatus : '',
    chargedVoted: 'VT'
  },
  {
    departmentName: 'Finance Department',
    bpn: '012',
    demand: '018',
    majorHead: '2071',
    subMajorHead: '01',
    minorHead: '101',
    subHead: '01',
    detailedHead: '00',
    css: 'No',
    formType: 'C',
    itemName: 'Test',
    deptLevelFile: '',
    deptAmount: '',
    deptLevelStatus: '',
    fdLevelFile: '',
    fdAmount: '',
    fdLevelStatus : '',
    chargedVoted: 'VT'
  },
  {
    departmentName: 'Finance Department',
    bpn: '012',
    demand: '019',
    majorHead: '2047',
    subMajorHead: '00',
    minorHead: '103',
    subHead: '01',
    detailedHead: '00',
    css: 'No',
    formType: 'C',
    itemName: 'Test',
    deptLevelFile: '',
    deptAmount: '',
    deptLevelStatus: '',
    fdLevelFile: '',
    fdAmount: '',
    fdLevelStatus : '',
    chargedVoted: 'VT'
  },
  {
    departmentName: 'Finance Department',
    bpn: '012',
    demand: '020',
    majorHead: '2049',
    subMajorHead: '01',
    minorHead: '101',
    subHead: '01',
    detailedHead: '00',
    css: 'No',
    formType: 'C',
    itemName: 'Test',
    deptLevelFile: '',
    deptAmount: '',
    deptLevelStatus: '',
    fdLevelFile: '',
    fdAmount: '',
    fdLevelStatus : '',
    chargedVoted: 'CH',
  }];

  searchEstimateForm = new FormGroup({
    department: new FormControl(''),
    financialYear: new FormControl(''),
    formType: this.fb.array([])
  });

  department_list: any[] = [
    {value: '1', viewValue: 'Home Department'},
    {value: '2', viewValue: 'Education Department'},
    {value: '3', viewValue: 'Finance Department'},
    {value: '4', viewValue: 'Agriculture, Farmers Welfare and Co-operation Department'},
    {value: '5', viewValue: 'Health and Family Welfare Department'},
  ];

  finYear_list: any[] = [
    {value: '2018-2019', viewValue: '2018-2019'},
    {value: '2019-2020', viewValue: '2019-2020'},
    {value: '2020-2021', viewValue: '2020-2021'},
  ];

  form_types: any[] = [
    {formId: '1', viewValue: 'Form C'},
    {formId: '2', viewValue: 'Form F'},
    {formId: '3', viewValue: 'Form E'},
    {formId: '4', viewValue: 'Form G'},
    {formId: '5', viewValue: 'Form I'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  updateChkbxArray(chk, isChecked, key) {
    var a;
    const chkArray = <FormArray>this.searchEstimateForm.get(key);
    if (isChecked) {
      //sometimes inserts values already included creating double records for the same values -hence the defence
      if (chkArray.controls.findIndex(x => x.value == chk.formId) == -1)
        chkArray.push(new FormControl({ formId: chk.formId, description: chk.viewValue }));
    } else {
      let idx = chkArray.controls.findIndex(x => x.value == chk.formId);
      chkArray.removeAt(idx);
    }
    console.log(this.searchEstimateForm.value);
  }

  captureScreen() {
  }

 

}
