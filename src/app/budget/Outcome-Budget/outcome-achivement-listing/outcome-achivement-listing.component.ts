import { CommonListing } from './../../../model/common-listing';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OutcomeAchievementList } from 'src/app/model/budget';

@Component({
  selector: 'app-outcome-achivement-listing',
  templateUrl: './outcome-achivement-listing.component.html',
  styleUrls: ['./outcome-achivement-listing.component.css']
})


export class OutcomeAchivementListingComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) {}

// Search Field Details
  department_list: CommonListing[] = [
    { value: '1', viewValue: ' Finance Department ' },
    { value: '2', viewValue: 'Education Department' },
    { value: '3', viewValue: 'Home Department' }
  ];

  schemeType_list: CommonListing[] = [
    { value: '1', viewValue: 'CSS' },
    { value: '0', viewValue: 'State' },
    { value: '2', viewValue: 'Partial css' }
  ];

  quater_lists: CommonListing[] = [
    { value: '1', viewValue: 'Quarter 1' },
    { value: '2', viewValue: 'Quarter 2' },
    { value: '3', viewValue: 'Quarter 3' }
  ];

  createOutcomeForm: FormGroup;

  departCtrlCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  quaterCtrl: FormControl = new FormControl();

// Listing table Data
  AchiveMent: OutcomeAchievementList[] = [
    {
    depart: 'Finance Department',
    finYr: '2019 - 2020' ,
    quter: 'Quater 1',
    schenType: 'CSS',
  },

  {
    depart: 'Education Department',
    finYr: '2019 - 2020' ,
    quter: 'Quater 1',
    schenType: 'CSS',
  },
];

// Listing Table
dataSourceoutcomeachive = new MatTableDataSource(this.AchiveMent);

displayedoutcomeachive = ['srno', 'depart', 'finYr', 'quter', 'schenType'];


ngOnInit() {
  this.createForm();
}

createForm() {
  this.createOutcomeForm = this.fb.group({
    fyctrl: ['', ],
    departCtrl: ['', ],
    quaterType: [''],
    schemeType: ['', ]
  });
}
schemtype() {}

clearForm() {
  this.createOutcomeForm.reset();
}
}
