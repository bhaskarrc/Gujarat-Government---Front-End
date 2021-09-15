
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ElementChallanCan } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { BehaviorSubject } from 'rxjs';


declare function SetEnglish();
declare function SetGujarati();

// Listing table data
const ELEMENT_DATA: any[] = [
  {
    cNumber: '51/00057/072019/23',
    cDate: '15-Apr-2020',
    cName: 'B S Patel (000123)',
    cAmount: '23500',
    bankNo: 'TO/GNR/2020-21/37',
    bankAmount: '23500',
    cStatus: 'Pending',

    remarks: '',
  },

];


@Component({
  selector: 'app-challan-cancellation-to-view',
  templateUrl: './challan-cancellation-to-view.component.html',
  styleUrls: ['./challan-cancellation-to-view.component.css']
})
export class ChallanCancellationToViewComponent implements OnInit {
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;
  isTokentable = false;
  isTokentable2 = false;
  // Entry Field Details
  challan_List: CommonListing[] = [
    { value: '1', viewValue: '51/00057/072019/23' },
    { value: '2', viewValue: '51/00057/072019/24' },
    { value: '3', viewValue: '51/00057/072019/25' },
    { value: '5', viewValue: '51/00057/072019/34' },
    { value: '6', viewValue: '51/00057/072019/56' },
    { value: '7', viewValue: '51/00057/072019/77' },
  ];


  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // Listing Table
  // displayedColumns: string[] = ['position', 'cNumber', 'cDate',
  //   'cName', 'cAmount', 'bankNo', 'bankAmount', 'cStatus'];
  displayedColumns: string[] = ['position', 'cNumber', 'cDate',
    'cName', 'cAmount', 'cStatus'];

  indentCtrl: FormControl = new FormControl();

  challanCancellationToForm: FormGroup;
  date: any = new Date();
  directiveObject = new StampProcessingDirectives(this.router, this.dialog);

  onAdd = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog, private el: ElementRef) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.challanCancellationToForm = this.fb.group({
      finYear: ['2019-2020', Validators.required],

      issueDate: ['14-Apr-2020', Validators.required],

      subTreasury: ['District Treasury Office, Gandhinagar', Validators.required],
      challanNumber: ['1', Validators.required],
      remarks: ['']

    });
  }
  gotoListing() {
    this.router.navigate(['./stamp-processing/challan-cancellation-to-list']);
  }

}
