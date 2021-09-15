
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-indent-preparation',
  templateUrl: './regular-indent-preparation.component.html',
  styleUrls: ['./regular-indent-preparation.component.css']
})
export class RegularIndentPreparationComponent implements OnInit {
  // variables
  showTable = false;
  regularIndentPreprationForm: FormGroup;
  // form controls
  ctsChequeTypeCtrl: FormControl = new FormControl();
  accountDetailsCtrl: FormControl = new FormControl();
  // dates
  maxDate = new Date();
  todayDate = new Date();

  // table data
  Element_Data: any[] = [
    {
      yearlIndentNo: '2547',
      indentDate: new Date('12/08/2019'),
    },
    {
      yearlIndentNo: '2548',
      indentDate: new Date('12/08/2019'),
    },
    {
      yearlIndentNo: '2549',
      indentDate: new Date('12/08/2019'),
    },

  ];

  dataSource = new MatTableDataSource<any>(this.Element_Data);

  // table columnsDef
  displayedColumns: any[] = ['position', 'yearlIndentNo', 'indentDate'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.regularIndentPreprationForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
    });
  }

  // to clear form
  clearForm() {
    this.regularIndentPreprationForm.reset();
    this.showTable = false;
  }

  // on search
  onSearch() {
    this.showTable = true;
  }

}
