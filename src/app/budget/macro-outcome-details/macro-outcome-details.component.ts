import { CommonListing } from './../../model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MacroOutcomeDetTab, MacroOutcomeDemandDet } from 'src/app/model/budget';
import { MacroOutcomeWorkflowComponent } from './macro-outcome-workflow/macro-outcome-workflow.component';
import { MacroOutcomeHistoryPopupComponent } from './macro-outcome-history-popup/macro-outcome-history-popup.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-macro-outcome-details',
  templateUrl: './macro-outcome-details.component.html',
  styleUrls: ['./macro-outcome-details.component.css']
})
export class MacroOutcomeDetailsComponent implements OnInit {
  // Listing table data
  MacroOutcomeListingData: MacroOutcomeDemandDet[] = [
    { demandNo: '001', demandDetails: 'Agriculture and Co-operation Department', provision: '' },
    { demandNo: '002', demandDetails: 'Agriculture', provision: '' },
    { demandNo: '003', demandDetails: 'Minor Irrigation, Soil Conservation and Area Development', provision: '' },
    { demandNo: '004', demandDetails: 'Animal Husbandry', provision: '' },
    { demandNo: '005', demandDetails: 'Co-operation', provision: '' },
    { demandNo: '006', demandDetails: 'Fisheries', provision: '' },
    { demandNo: '007', demandDetails: 'Other Expenditure pertaining to Agriculture and Co-operation Department', provision: '' },
    { demandNo: '084', demandDetails: 'Non-Residential Buildings', provision: '' },
    { demandNo: '085', demandDetails: 'Residential Buildings', provision: '' },
    { demandNo: '093', demandDetails: 'Welfare of Scheduled Tribes', provision: '' },
    { demandNo: '095', demandDetails: 'Scheduled Castes Sub Plan', provision: '' },
    { demandNo: '096', demandDetails: 'Tribal Area Sub-Plan', provision: '' }
  ];
  // Listing table data
  DemandDatailsData: MacroOutcomeDetTab[] = [
    { macroOutcomeEnglish: '', macroOutcomeGujarati: '' }
  ];
  // Listing Table
  MacroOutcomeListingDataColumn: string[] = [
    'srno', 'demandNo', 'demandDetails', 'provision'
  ];

  DemandDatailsDataColumn: string[] = [
    'srno', 'macroOutcomeEnglish', 'macroOutcomeGujarati', 'action'
  ];


  selectedIndex: number;
  tabDisable: Boolean = true;

  isInputEdpCode = true;
  isDelete = false;
  currentLang = new BehaviorSubject<string>('Eng');
  isLangChange = false;
  hasFocusSet: number;

  showTabs = false;
  showSection = true;
  date: Date = new Date();
  macroOutcomeForm: FormGroup;
  MacroOutcomeListingDataSource = new MatTableDataSource(this.MacroOutcomeListingData);
  DemandDatailsDataSource = new MatTableDataSource(this.DemandDatailsData);

  constructor(private fb: FormBuilder, private router: Router,
    public dialog: MatDialog,) { }

  ngOnInit() {
    this.macroOutcomeFormData();
  }

  macroOutcomeFormData() {
    this.macroOutcomeForm = this.fb.group({
      finYear: ['2021-2022'],
      bpnCode: ['56:Outcome Budget'],
    });
  }
  openWorkflow(): void {
    const dialogRef = this.dialog.open(MacroOutcomeWorkflowComponent, {
      width: '2700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'no') {
        console.log('The dialog was closed', result);
      } else if (result === 'yes') {
        console.log('The dialog was closed', result);
      }
    });
  }

  goToScreen() {
    this.router.navigate(['/budget/macro-outcome']);
  }
  // Determine Index of Tab
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
    if (this.selectedIndex === 0) {
      this.showSection = true;
    } else {
      this.showSection = false;
    }
  }
  openHistory(): void {

    // const dialogData = new any();

    const dialogRef = this.dialog.open(MacroOutcomeHistoryPopupComponent, {
      maxWidth: '400px',
      // data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }
  // Go to next tab
  goToNext() {
    this.tabDisable = false;
    this.selectedIndex = 1;
    if (this.selectedIndex === 1) {
      this.showSection = false;
    } else {
      this.showSection = true;
    }
  }

  // Determine Index of Tab
  getTabIndex2(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
    if (this.selectedIndex === 1) {
      this.showSection = true;
    } else {
      this.showSection = false;
    }
  }
  // Go to next tab
  goToNext2() {
    this.tabDisable = false;
    this.selectedIndex = 2;
    if (this.selectedIndex === 2) {
      this.showSection = false;
    } else {
      this.showSection = true;
    }
  }
  // Eng Guj functions starts
    toggleLanguage() {
        if (this.currentLang.value == 'Guj') {
          this.currentLang.next('Eng');
        } else {
          this.currentLang.next('Guj');
        }
    }

  decimalKeyPress(event: any) {
    const pattern = /^\d+(\\d{0,0})?$/;
    const inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    let tempstr = event.target.value;
    tempstr += inputChar;
    if (!pattern.test(tempstr)) {
      event.preventDefault();
      return false;
    }
  }

  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }

  // Method to generate the total of Cheque Amount
  totalAmount(): number {
    let sum = 0;
    this.MacroOutcomeListingDataSource.data.forEach((element) => {
      sum = sum + Number(element.provision);
    });
    return sum;
  }

  addLeave() {
    const p_data = this.DemandDatailsDataSource.data;
    this.isInputEdpCode = false;
    this.isDelete = true;
    p_data.push({
      macroOutcomeEnglish: '',
      macroOutcomeGujarati: '',
    });
    this.DemandDatailsDataSource.data = p_data;
  }

  deletExpenditureRow(index) {
    this.DemandDatailsDataSource.data.splice(index, 1);
    this.DemandDatailsDataSource = new MatTableDataSource(
      this.DemandDatailsDataSource.data
    );
  }


}
