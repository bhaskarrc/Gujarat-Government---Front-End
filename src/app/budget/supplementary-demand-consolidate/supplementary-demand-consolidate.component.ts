import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ReplaySubject, Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonListing } from 'src/app/model/common-listing';
import { StandingChargeConsolidateHistoryComponent, ConfirmDialogModel } from '../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { StandingChargeForwardDialogComponent } from '../standing-charge/standalone-charge/standalone-charge.component';
import { SupplementaryDemandHistoryComponent } from '../supplementary-demand-estimates/supplementary-demand/supplementary-demand.component';
import { SuppDemand } from 'src/app/model/budget';
import { BudgetDirectives } from 'src/app/common/directive/budget-directive';
import { RemarksPopupComponent } from '../supplementary-demand-estimates/remarks-popup/remarks-popup.component';

declare function SetEnglish();
declare function SetGujarati();


@Component({
  selector: 'app-supplementary-demand-consolidate',
  templateUrl: './supplementary-demand-consolidate.component.html',
  styleUrls: ['./supplementary-demand-consolidate.component.css']
})
export class SupplementaryDemandConsolidateComponent implements OnInit {
  directiveObject = new BudgetDirectives(this.dialog);

showField = false;
date: any = new Date();

// Entry Table Data
  DATA: SuppDemand[] = [
    {
      majorHead: '2049',
      subMajorHead: '03',
      minorHead: '104',
      subHead: '01',
      detHead: '00',
      budgetEstimate: '100.00',
      advancedCF: '10.00',
      revisedEstimate: '120.00',
      excessSaving: '20.00',
      excessScheme: '10.00', excessSchemeEdit: true,
      remarkEng: '',
      remarkGuj: '',
    },
    {
      majorHead: '',
      subMajorHead: '60',
      minorHead: '101',
      subHead: '01',
      detHead: '00',
      budgetEstimate: '100.00',
      advancedCF: '10.00',
      revisedEstimate: '90.00',
      excessSaving: '-10.00',
      excessScheme: '10.00', excessSchemeEdit: true,
      remarkEng: '',
      remarkGuj: '',
    },
    {
      majorHead: '',
      subMajorHead: '',
      minorHead: '701',
      subHead: '01',
      detHead: '00',
      budgetEstimate: '150.00',
      advancedCF: '0.00',
      revisedEstimate: '165.00',
      excessSaving: '15.00',
      excessScheme: '15.00', excessSchemeEdit: true,
      remarkEng: '',
      remarkGuj: '',
    },
  ];

  createSupplementaryDemandForm: FormGroup;
  remarksForm: FormGroup;

  gujaratiType: Boolean = true;
  engAtiveClass: Boolean = false;
  gujAtiveClass: Boolean = false;
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;
  errorMessages = budgetMessage;
  selectedIndex = 0;

  @ViewChild('codeGJ') codeGJ: ElementRef;
// Entry Table
  displayedAttachmentColumns = ['majorHead', 'subMajorHead', 'minorHead', 'subHead',
  'budgetEstimate', 'advancedCF', 'revisedEstimate', 'excessSaving', 'excessScheme', 'action'];
  dataSource = new MatTableDataSource(this.DATA);
  isExtendedRow = (index, item) => item.extend;
  constructor(
    private fb: FormBuilder,
    private fb2: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private elem: ElementRef,
   ) { }


  ngOnInit() {
    this.createFormRemarks();
  }
  // Remarks popup
  openRemarksPopup() {
    const dialogRef = this.dialog.open(RemarksPopupComponent, {
      width: '1200px', height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      }
    });
  }

  filterObjValue(arrValue, searchValue, filteredValue) {
    if (!arrValue) {
      return;
    }
    // get the search keyword
    let search = searchValue;
    if (!search) {
      filteredValue.next(arrValue.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the values
   filteredValue.next(
      arrValue.filter(item => item.viewValue.toLowerCase().indexOf(search) > -1)
    );
  }

  createFormRemarks() {
    this.remarksForm = this.fb.group({
      remarksEng: [''],
      remarksGuj: [''],
    });
  }
  // History Popup
  openHistory(data) {
    this.showHistoryDialog();
  }
  showHistoryDialog(): void {

    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(SupplementaryDemandHistoryComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

// Got to Next Tab
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
  }

  nextTab() {
    this.selectedIndex++;
  }


  nomenclatureGJFocus() {
    if (this.gujaratiType) {
      SetGujarati();
      this.engAtiveClass = false;
      this.gujAtiveClass = true;
    }
  }
  nomenclatureGJFocusOut() {
    SetEnglish();
    this.gujaratiType = true;
    this.engAtiveClass = false;
    this.gujAtiveClass = false;
  }

  setgujarati() {
    this.gujaratiType = false;
    this.engAtiveClass = false;
    this.gujAtiveClass = true;
    SetGujarati();
    this.codeGJ.nativeElement.focus();
  }

  setenglish() {
    this.gujaratiType = false;
    this.engAtiveClass = true;
    this.gujAtiveClass = false;
    SetEnglish();
    this.codeGJ.nativeElement.focus();
  }

  checkGujarati(data) {
    this.createSupplementaryDemandForm.patchValue({
      remarkGuj: data
    });
  }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\.\d{0,2})?$/;
    const inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    console.log('event.target.value', event.target.value);
    console.log('tst', pattern.test(event.target.value));

    let tempstr = event.target.value;
    tempstr += inputChar;

    if (!pattern.test(tempstr)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }

  }
  // Gujarati English Language Functions
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
      const elements = this.elem.nativeElement.querySelectorAll('.hasfocus')[0];
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

  calcExcessScheme() {
    let sum = 0;
    this.dataSource.data.forEach((element, index) => {
      sum =
        sum + Number(element.excessScheme);
    });
    return sum;
  }

  decimalPoint(data, key) {
    data[key] = Number(data[key]).toFixed(2);
  }

  goToListing() {
    this.router.navigate(['./budget/supplementary-demand-consolidate-list']);
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  saveEstimate() {

  }

}
