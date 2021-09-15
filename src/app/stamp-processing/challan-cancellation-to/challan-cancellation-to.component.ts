
import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CloseConfirmCommonDialogComponent } from '../close-confirm-common-dialog/close-confirm-common-dialog.component';
import { SubmitConfirmCommonDialigComponent } from '../submit-confirm-common-dialig/submit-confirm-common-dialig.component';
import { ElementChallanCan } from 'src/app/model/stamp-processing';
import { StampProcessingDirectives } from 'src/app/common/directive/stamp-processing-directive';
import { BehaviorSubject } from 'rxjs';
import { SubmitConfirmCommonChallanDialigComponent } from '../submit-confirm-common-dialigchallan/submit-confirm-common-dialigchallan.component';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';


declare function SetEnglish();
declare function SetGujarati();

// Listing table data
const ELEMENT_DATA: ElementChallanCan[] = [
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

const ELEMENT_DATA1: ElementChallanCan[] = [
  {
    cNumber: '51/00057/072019/24',
    cDate: '16-Apr-2020',
    cName: 'B S Patel (000123)',
    cAmount: '11200',
    bankNo: '-',
    bankAmount: '-',
    cStatus: 'Approved',

    remarks: '',
  },

];

const ELEMENT_DATA2: ElementChallanCan[] = [
  {
    cNumber: '51/00057/072019/25',
    cDate: '17-Apr-2020',
    cName: 'B S Patel (000123)',
    cAmount: '11500',
    bankNo: '-',
    bankAmount: '-',
    cStatus: 'Pending',

    remarks: '',
  },

];



@Component({
  selector: 'app-challan-cancellation-to',
  templateUrl: './challan-cancellation-to.component.html',
  styleUrls: ['./challan-cancellation-to.component.css']
})
export class ChallanCancellationToComponent implements OnInit {
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
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  // Listing Table
  // displayedColumns: string[] = ['position', 'cNumber', 'cDate',
  //   'cName', 'cAmount', 'bankNo', 'bankAmount', 'cStatus'];
  displayedColumns: string[] = ['position', 'cNumber', 'cDate',
    'cName', 'cAmount', 'cStatus'];

  indentCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;

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
      challanNumber: ['', Validators.required],
      remarks: ['']

    });
  }


  // Add Button Click
  whenAddClick() {
    this.onAdd = true;
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  gotoListing() {
    this.router.navigate(['./stamp-processing/challan-cancellation-to-list']);
  }
  ontoken(index) {

    if (index.value === '2') {
      this.isTokentable = true;
    } else {
      this.isTokentable = false;
    }

    if (index.value === '3') {
      this.isTokentable2 = true;
    } else {
      this.isTokentable2 = false;
    }

  }
  WorkFlow() {
    const dialogRef = this.dialog.open(SubmitConfirmCommonChallanDialigComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('From Common');
    });
  }
  // Eng Guj functions starts
  setEnglishOnFocusOut() {
    SetEnglish();
  }
  setGujaratiDefault() {
    if (!this.isLangChange) {
      SetGujarati();
      this.currentLang.next('Eng');
    }
  }
  toggleLanguage() {
    this.isLangChange = true;
    const elements = this.el.nativeElement.querySelectorAll('.hasfocus')[0];
    if (elements != undefined) {
      if (this.currentLang.value == 'Guj') {
        SetEnglish();
        this.currentLang.next('Eng');
      } else {
        SetGujarati();
        this.currentLang.next('Guj');
      }
      elements.focus();
    }
  }
}

