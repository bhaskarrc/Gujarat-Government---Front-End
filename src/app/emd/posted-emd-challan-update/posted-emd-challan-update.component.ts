import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ListValue } from 'src/app/model/common-grant';
@Component({
  selector: 'app-posted-emd-challan-update',
  templateUrl: './posted-emd-challan-update.component.html',
  styleUrls: ['./posted-emd-challan-update.component.css']
})
export class PostedEmdChallanUpdateComponent implements OnInit {
  showTable: Boolean = false;
  searchListForm: FormGroup;
  initiatiomdate = new Date();
  // FormGroup
  postedChallanUpdateForm: FormGroup;
  maxDate = new Date();
  // FormControl
  departmentTypeCtrl: FormControl = new FormControl();

  // List values
  departmentType_list: ListValue[] = [
    { value: '1', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '2', viewValue: 'Education Department' },
    { value: '3', viewValue: 'Energy & Petrochemicals Department' },
    { value: '4', viewValue: 'Finance Department' },
    { value: '5', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '6', viewValue: 'Forest & Environment Department' },
    { value: '7', viewValue: 'General Administration Department' },
    { value: '8', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '9', viewValue: 'Health & Family Welfare Department' },
    { value: '10', viewValue: 'Home Department' },
    { value: '11', viewValue: 'Industries & Mines Department' },
    { value: '12', viewValue: 'Information & Broadcasting Department' },
    { value: '13', viewValue: 'Labour & Employment Department' },
    { value: '14', viewValue: 'Legal Department' },
    { value: '15', viewValue: 'Legislative & Parliamentary Affairs Department' },
    { value: '16', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department' },
    { value: '17', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '18', viewValue: 'Ports & Transport Department' },
    { value: '19', viewValue: 'Revenue Department' },
    { value: '20', viewValue: 'Roads & Buildings Department' },
    { value: '21', viewValue: 'Science & Technology Department' },
    { value: '22', viewValue: 'Social Justice & Empowerment Department' },
    { value: '23', viewValue: 'Tribal Development Department' },
    { value: '24', viewValue: 'Sports, Youth & Cultural Activities Department' },
    { value: '25', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '26', viewValue: 'Women & Child Development Department' },
    { value: '27', viewValue: 'Climate Change Department' },

  ];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }
  ngOnInit() {
    this.postedChallanUpdateData();
  }
  postedChallanUpdateData() {
    this.postedChallanUpdateForm = this.fb.group({
      // FormGroup Fields
      payeeName: [''],
      challanNo: [''],
      mHead: [''],
      amount: [''],
      dept: [''],
    });
  }

  // shows and hides table
  search() {
    this.showTable = true;
  }

}

