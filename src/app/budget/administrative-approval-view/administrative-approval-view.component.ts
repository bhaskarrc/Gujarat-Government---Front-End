import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-administrative-approval-view',
  templateUrl: './administrative-approval-view.component.html',
  styleUrls: ['./administrative-approval-view.component.css']
})
export class AdministrativeApprovalViewComponent implements OnInit {

 
  AdministrativeApprovaData: any[] = [
    {
     
      checklistField: 'field 1',
      fieldDetail: ''
    },
    {
   
      checklistField: 'field 2',
      fieldDetail: ''
    },
    {
      
      checklistField: 'field 3',
      fieldDetail: ''
    },
    {
 
      checklistField: 'field 4',
      fieldDetail: ''
    },
    {

      checklistField: 'field 5',
      fieldDetail: ''
    },
    {

      checklistField: 'field 6',
      fieldDetail: ''
    },
    {

      checklistField: 'field 7',
      fieldDetail: ''
    },
  
    {

      checklistField: 'field 8',
      fieldDetail: ''
    },
    {

      checklistField: 'field  9',
      fieldDetail: ''
    },
    {

      checklistField: 'field 10',
      fieldDetail: ''
    },
    {

      checklistField: 'field 11',
      fieldDetail: ''
    },
    {

      checklistField: 'field 12',
      fieldDetail: ''
    },
    {

      checklistField: 'field 13',
      fieldDetail: ''
    }
  
  ];

  displayedItemCategoryChecklistColumns = ['srno', 'checklistField', 'fieldDetail'];
   
  dataSourceItemCategoryChecklist = new MatTableDataSource(this.AdministrativeApprovaData);

  constructor() { }

  ngOnInit() {
  }
  goToDashboard(){}
}
