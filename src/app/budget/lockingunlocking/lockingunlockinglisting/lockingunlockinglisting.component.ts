import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonListing } from 'src/app/model/common-listing';
import { LockingUnlockingList } from '../../../model/lockingunlocking';

const ELEMENT_DATA: LockingUnlockingList[] = [
  {
    position: 1,
    finyear: '2017-2018',
    grnNumaber: 106453,
    dateGrn: '20-Dec-2017',
    refNO: '19-20/BUD/LUTL/001',
    refDate: '12-May-2017',
    attachFile: 'Draft',
    action: true
  },
  {
    position: 2,
    finyear: '2018-2019',
    grnNumaber: 106453,
    dateGrn: '14-Oct-2018',
    refNO: '19-20/BUD/LUTL/002',
    refDate: '25-Aug-2018',
    attachFile: 'Submitted',
    action: true
  },
  {
    position: 3,
    finyear: '2019-2020',
    grnNumaber: 106453,
    dateGrn: '04-Oct-2019',
    refNO: '19-20/BUD/LUTL/003',
    refDate: '11-May-2019',
    attachFile: 'Submitted',
    action: true
  },

];

@Component({
  selector: 'app-lockingunlockinglisting',
  templateUrl: './lockingunlockinglisting.component.html',
  styleUrls: ['./lockingunlockinglisting.component.css']
})
export class LockingunlockinglistingComponent implements OnInit {
  createLockUnlickForm: FormGroup;
  displayedColumns: string[] = [
    'position',
    'finyear',
    'grnNumaber',
    'dateGrn',
    'refNO',
    'refDate',
    'attachFile',
    'action'
  ];
  dataSource = ELEMENT_DATA;

  filteredFinYear: CommonListing[] = [
    { value: '1', viewValue: '2020-2021' },
    { value: '2', viewValue: '2019-2020' },
    { value: '3', viewValue: '2018-2019' },
    { value: '4', viewValue: '2017-2018' },
    { value: '5', viewValue: '2018-2017' },
    { value: '6', viewValue: '2016-2015' },
    { value: '7', viewValue: '2015-2014' },
    { value: '8', viewValue: '2014-2013' },
    { value: '9', viewValue: '2013-2012' },
    { value: '10', viewValue: '2012-2011' },
    { value: '11', viewValue: '2011-2010' }
  ];

  finYearCtrl: FormControl = new FormControl();

  sort: (
    compareFn?: (a: LockingUnlockingList, b: LockingUnlockingList) => number
  ) => LockingUnlockingList[];

  constructor(private fb: FormBuilder) {}

  date: any = new Date();

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.createForm();
  }

  createForm() {
    this.createLockUnlickForm = this.fb.group({
      finYear: ['1', Validators.required],
      grNotification: [''],
      refNO: [''],
      refDate: ['']
    });
  }

  gotoListing() {}

  saveLockUnlock() {
    console.log(this.createLockUnlickForm.value);
  }
}
