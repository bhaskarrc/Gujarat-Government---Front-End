import { CommonListing } from 'src/app/model/common-listing';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { WaiveOfferDetailsHbaDetails } from 'src/app/model/dppf-hba';
@Component({
  selector: 'app-waive-offer-details-hba-details',
  templateUrl: './waive-offer-details-hba-details.component.html',
  styleUrls: ['./waive-offer-details-hba-details.component.css']
})
export class WaiveOfferDetailsHbaDetailsComponent implements OnInit {
  // Table data
  Element_Data: WaiveOfferDetailsHbaDetails[] = [{
    hbaMcaNo: '5646541',
    name: 'R M SONI',
    deathDate: '20-Jan-2016',
    gpfNo: '784',
    deathDetails: '-',
    remarks: '-',
  }];
  // Form Group
  waiveDetailsForm: FormGroup;
  // Date
  todayDate = Date.now();
  maxDate = new Date();
  // Lists
  attachmentTypeCode: CommonListing[] = [
    { value: '01', viewValue: 'Supporting Document' },
    { value: '02', viewValue: 'Sanction Order' },
    { value: '03', viewValue: 'Others' }
  ];
  // Table Source

  displayedColumns: string[] = [
    'srNo',
    'hbaMcaNo',
    'name',
    'deathDate',
    'gpfNo',
    'deathDetails',
    'remarks',
    'action',
  ];

  dataSource = new MatTableDataSource<WaiveOfferDetailsHbaDetails>(this.Element_Data);

  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.waiveDetailsData();
  }
  waiveDetailsData() {
    this.waiveDetailsForm = this.fb.group({
      hbaNo: [''],
      name: [''],
      deathDate: [''],
      gpfNo: [''],
      deathDetails: [''],
      remark: [''],
    });
  }
  // Navigation Route

  navigate() {
    this.router.navigate(['./dppf-hba/waive-offer-details']);
  }

}
