import { MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


const ELEMENT_DATA: any[] = [
  {
    mlaNo: '30',
    assemblyNo: '251',
    mlaName: 'Mr. Virendrasinh Jadeja',
    designation: 'MLA',
    ledgerNo: '145',
  }
];

@Component({
  selector: 'app-new-mla-list',
  templateUrl: './new-mla-list.component.html',
  styleUrls: ['./new-mla-list.component.css']
})

export class NewMlaListComponent implements OnInit {
  // Form Group
  newMlaListForm: FormGroup;
  // Table Source
  displayedBrowseColumns = ['srNo', 'mlaName', 'mlaconNo', 'designation', 'assemblyNo', 'mlaNo', 'ledgerNo', 'action'];
  dataSourceBrowse = new MatTableDataSource(ELEMENT_DATA);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newMlaListForm = this.fb.group({
      mlaName: [''],
      mlaConstNo: [''],
      designation: [''],
      assmblyNo: [''],
      mlaNo: [''],
      ledgerNo: [''],
    });
  }
  newMlaListSubmit() {

  }

}
