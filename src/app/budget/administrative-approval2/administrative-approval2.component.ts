import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonListing } from 'src/app/model/common-listing';
import { MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';



export interface AdministrativeApproval {

  finYear: string;
  demand: string;
  majorHead: string;
  subMajorHead: string;
  minorHead: string;
  subHead: string;
  detailHead: string;
  chargedVoted: string;
  css: string;
  status: string;
}

@Component({
  selector: 'app-administrative-approval2',
  templateUrl: './administrative-approval2.component.html',
  styleUrls: ['./administrative-approval2.component.css']
})
export class AdministrativeApproval2Component implements OnInit {

  ELEMENT_DATA: AdministrativeApproval[] = [

  { finYear: '2019-2020', demand: '001', majorHead: '3451', subMajorHead: '00', minorHead: '090', subHead: '01', detailHead: '00', chargedVoted: 'Charged', css: 'Yes', status: 'Draft'},

  ];

  displayedColumns: string[] = [ 'position',  'finYear', 'demand', 'majorHead',
  'subMajorHead', 'minorHead', 'subHead', 'detailHead', 'chargedVoted', 'css','status', 'action'];
  dataSource = new MatTableDataSource<AdministrativeApproval>(this.ELEMENT_DATA);

  administrativeApproval: FormGroup;
  finYearCtrl: FormControl = new FormControl();
  estimateCtrl:FormControl = new FormControl();

  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2019-2020' },
    { value: '2', viewValue: '2020-2021' },
  ];

    estimateList: CommonListing[] = [
      {value: '1', viewValue: 'New Item'},
      {value: '2', viewValue: 'Item Work'},
      {value: '3', viewValue: 'Work-in-progress'},
      {value: '4', viewValue: 'Item continuous'},
  
    ];
 
  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.administrativeApproval = this.fb.group({
      financialYear: ['2'],
      department: [''],
      estimate:['']
    })
  }
  adminApproval() { }

  isNewItem: boolean = false;
  selectDepartment(event: any) {
    if (event == '1') {
      this.isNewItem = true;
    }
  }
  
  administrativeView(){
    this.router.navigate(['./budget/administrative-approval-view']);
  }
}
