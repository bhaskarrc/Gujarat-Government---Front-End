import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';

// table data
const ELEMENT_DATA = [
  {
    pprid: '10747', updatingdate: '8 jan 2020',
    submittedby: 'shri supreet singh Gulati IAS', projectname: 'Gujrat Apex training Institute(GATI)',
    sectrolarea: 'educational and skill developement', status: 'send of comments', pprtype: 'state sector', action: '-'
  },
  {
    pprid: '10717', updatingdate: '11 Dec 2019', submittedby: 'Hitesh Bhamre', projectname: 'Surat Metro Rail project Phase-1',
    sectrolarea: 'Transport and Logistic', status: 'Aporoved By DEA', pprtype: 'Central sector', action: '-'
  },
  {
    pprid: '10347', updatingdate: '4 Dec 2019', submittedby: 'Hitesh Bhamre', projectname: 'Surat Metro Rail project Phase-1',
    sectrolarea: 'Transport and Logistic', status: 'send of comments', pprtype: 'Central sector', action: '-'
  },
  {
    pprid: '10690', updatingdate: '3 Nov 2019', submittedby: 'Hitesh Bhamre', projectname: 'Surat Metro Rail project Phase-1',
    sectrolarea: 'Transport and Logistic', status: 'Final Submitted', pprtype: 'Central sector', action: '-'
  },
  {
    pprid: '10184', updatingdate: '4 Apr 2019', submittedby: 'MR.G K Sinha Ifs', projectname: 'Gujrat Foresty Developement Project Phase-3',
    sectrolarea: 'educational and Climate developement', status: 'Final Submitted', pprtype: 'state sector', action: '-'
  },


];

@Component({
  selector: 'app-ppr-dashboard',
  templateUrl: './ppr-dashboard.component.html',
  styleUrls: ['./ppr-dashboard.component.css']
})
export class PprDashboardComponent implements OnInit {
  isSearch: Boolean = true;
  pprDashboardForm: FormGroup;
  PprNoControl = new FormControl('', [Validators.required]);
  ProjectNameControl = new FormControl('', [Validators.required]);


  // table datasource
  dataSourcepprDashboard = new MatTableDataSource(ELEMENT_DATA);
  // table column
  displayedColumns: any[] = ['srNo', 'pprid', 'updatingdate', 'submittedby', 'projectname', 'sectrolarea', 'status', 'pprtype', 'action'];

  constructor(private fb: FormBuilder, private router: Router, ) {
  }

  ngOnInit() {
    this.pprDashboardForm = this.fb.group({
      PprNoControl: ['', Validators.required],
      ProjectNameControl: ['', Validators.required],
    });
  }

  createForm() {
    this.pprDashboardForm = this.fb.group({
      PprNoControl: ['', Validators.required],
      ProjectNameControl: ['', Validators.required],
    });
  }

  // leave submit function
  leaveSubmit() {
    const p_data = this.pprDashboardForm;
    console.log(p_data);
  }

  // toggles value of isSearch variable
  search() {
    this.isSearch = false;
  }

  // clears form
  clearForm() {
    this.pprDashboardForm.reset();
  }
}
