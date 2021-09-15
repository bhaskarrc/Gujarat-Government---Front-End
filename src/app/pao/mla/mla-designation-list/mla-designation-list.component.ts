import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MLADesignationList } from 'src/app/model/paoModel';


const ELEMENT_DATA: MLADesignationList[] = [
  {
    designationName: 'MLA',
    deapartment: 'Education Department',
    budgetDetail: '0.00',
  }
];
@Component({
  selector: 'app-mla-designation-list',
  templateUrl: './mla-designation-list.component.html',
  styleUrls: ['./mla-designation-list.component.css']
})
export class MlaDesignationListComponent implements OnInit {
  // Form Group
  mlaDesignationListForm: FormGroup;
  // Table Source
  displayedBrowseColumns = ['srNo', 'designationName', 'deapartment', 'budgetDetail', 'action'];
  dataSourceBrowse = new MatTableDataSource(ELEMENT_DATA);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mlaDesignationListForm = this.fb.group({
      designationName: [''],
      deapartment: [''],
      budgetDetail: ['0.00'],
    });
  }
  mlaDesignationListSubmit() {

  }

}
