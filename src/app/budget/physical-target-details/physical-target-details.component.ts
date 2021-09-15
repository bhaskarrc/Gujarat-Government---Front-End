import { CommonListing } from 'src/app/model/common-listing';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { PhysicalTargetDetails } from 'src/app/model/budget';
import { budgetMessage } from 'src/app/common/error-message/common-message.constants';
import { MacroOutcomeWorkflowComponent } from '../macro-outcome-details/macro-outcome-workflow/macro-outcome-workflow.component';

@Component({
  selector: 'app-physical-target-details',
  templateUrl: './physical-target-details.component.html',
  styleUrls: ['./physical-target-details.component.css']
})
export class PhysicalTargetDetailsComponent implements OnInit {
// Entry Field Details
  macroDepartmentList: CommonListing[] = [
    { value: '00', viewValue: 'Agriculture, Famers welfare and Co-operation Department' },
    { value: '01', viewValue: 'Education Department' },
    { value: '02', viewValue: 'Energy & Petrochemicals Department' },
    { value: '03', viewValue: 'Finance Department' },
    { value: '04', viewValue: 'Food, Civil Supplies & Consumer Affairs Department' },
    { value: '05', viewValue: 'Forest & Environment Department' },
    { value: '06', viewValue: 'General Administration Department' },
    { value: '07', viewValue: 'Gujarat Legislature Secretariat Department' },
    { value: '08', viewValue: 'Health & Family Welfare Department' },
    { value: '09', viewValue: 'Home Department' },
    { value: '10', viewValue: 'Industries & Mines Department' },
    { value: '11', viewValue: 'Information & Broadcasting Department' },
    { value: '12', viewValue: 'Labour & Employment Department' },
    { value: '13', viewValue: 'Legal Department' },
    { value: '14', viewValue: 'Legislative & Parliamentary Affairs Department' },
    { value: '15', viewValue: 'Narmada, Water Resources, Water Supply & Kalpsar Department' },
    { value: '16', viewValue: 'Panchayat, Rural Housing & Rural Development Department' },
    { value: '17', viewValue: 'Ports & Transport Department' },
    { value: '18', viewValue: 'Revenue Department' },
    { value: '19', viewValue: 'Roads & Buildings Department' },
    { value: '20', viewValue: 'Science & Technology Department' },
    { value: '21', viewValue: 'Social Justice & Empowerment Department' },
    { value: '22', viewValue: 'Tribal Development Department' },
    { value: '23', viewValue: 'Sports, Youth & Cultural Activities Department' },
    { value: '24', viewValue: 'Urban Development & Urban Housing Department' },
    { value: '25', viewValue: 'Women & Child Development Department' },
    { value: '26', viewValue: 'Climate Change Department' },
  ];

  bpnCodeList: CommonListing[] = [
    { value: '1', viewValue: '03:Agriculture, Farmers Welfare & Co-Operation Department ' },
    { value: '2', viewValue: '04:Education Department' },
    { value: '3', viewValue: '05:Energy and Petro-Chemicals Department' },
    { value: '4', viewValue: '06:Finance Department' },
    { value: '5', viewValue: '07:Food, Civil Supplies and Consumer Affairs Department' },
  ];

  demandList: CommonListing[] = [
    { value: '1', viewValue: '001:Agriculture and Co-operation Department' }
  ];

  majorHeadList: CommonListing[] = [
    { value: '1', viewValue: '2205: Art and Culture' }
  ];

  subMajorHeadList: CommonListing[] = [
    { value: '1', viewValue: '00: ' }
  ];

  minorHeadList: CommonListing[] = [
    { value: '1', viewValue: '101: Fine Arts Education' }
  ];

  subHeadList: CommonListing[] = [
    { value: '1', viewValue: '01: Grants to Sangeet Natya Bharati' }
  ];

  detailedHeadList: CommonListing[] = [
    { value: '1', viewValue: '00: Grants to Sangeet Natya Bharati' }
  ];


  langList: CommonListing[] = [
    { value: '1', viewValue: 'English' },
    { value: '2', viewValue: 'Gujarati' }
  ];

  typeOfSchemeList: CommonListing[] = [
    { value: '1', viewValue: '100% State Sponsored Scheme' },
    { value: '2', viewValue: '100% Centrally Sponsored Scheme' },
    { value: '3', viewValue: 'Partially Sponsored Scheme' }
  ];

  unitList: CommonListing[] = [
    { value: '1', viewValue: 'Boat' },
    { value: '2', viewValue: 'Center' },
    { value: '3', viewValue: 'Crore' },
    { value: '4', viewValue: 'Days' },
    { value: '5', viewValue: 'Hectare' },
    { value: '6', viewValue: 'Kilometer' },
    { value: '7', viewValue: 'Lakh Kg' },
    { value: '8', viewValue: 'Lakh MT' },
    { value: '9', viewValue: 'Lakhs' },
    { value: '10', viewValue: 'MT' },
    { value: '11', viewValue: 'No. of Beneficiaries' },
    { value: '12', viewValue: 'Nos.' },
    { value: '13', viewValue: 'Not Applicable' },
    { value: '14', viewValue: 'Others' },
    { value: '15', viewValue: 'Staff' },
  ];
// Entry Table data
  SchemeData: PhysicalTargetDetails[] = [
    {
      typeOfScheme: 'Normal', budgetHead: '001:2403:00:800:01:00', nameOfScheme: 'Rinderpest Eradication Programme',
      financialProvision: '', physicalTarget: '', physicalTargetInput: '',
      unit: '', year2021: '', year2122: '', year2223: ''
    },
  ];
// Entry Table
  SchemeDataColumn: string[] = [
    'srno', 'typeOfScheme', 'budgetHead', 'financialProvision', 'physicalTarget',
    'unit', 'year2021', 'year2122', 'year2223', 'action'
  ];

  tabDisable: Boolean = true;
  unitClass;
  selectedIndex = 0;
  showScheme = false;
  showTabs = false;
  date: Date = new Date();
  macroOutcomeForm: FormGroup;
  demandCtrl: FormControl = new FormControl();
  schemeTypeCtrl: FormControl = new FormControl();
  majorHeadCtrl: FormControl = new FormControl();
  subMajorHeadCtrl: FormControl = new FormControl();
  minorHeadCtrl: FormControl = new FormControl();
  subHeadCtrl: FormControl = new FormControl();
  detailedHeadCtrl: FormControl = new FormControl();
  langCtrl: FormControl = new FormControl();
  unitCtrl: FormControl = new FormControl();
  SchemeDataSource = new MatTableDataSource(this.SchemeData);
  errorMessages = budgetMessage;

  constructor(private fb: FormBuilder, private router: Router,
    public dialog: MatDialog,) { }

  ngOnInit() {
    this.macroOutcomeFormData();
    this.unitClass = 'marginTopClass';
  }

  macroOutcomeFormData() {
    this.macroOutcomeForm = this.fb.group({
      finYear: ['2021-2022'],
      dept: ['Agriculture, Farmers Welfare & Co-Operation Department'],
      bpnCode: ['03:Agriculture, Farmers Welfare & Co-Operation Department'],
      demand: [''],
      majorHead: [''],
      subMajorHead: [''],
      minorHead: [''],
      subHead: [''],
      detailedHead: [''],
      lang: [''],
      unit: [''],
      unitVal: [''],
      schemeType: [''],
    });
  }
// When add button click
  search() {
    this.showTabs = true;
  }
  // Workflow
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

  // To display Type of Scheme
  updateScheme() {
    if ((this.macroOutcomeForm.controls['demand'].value != '') && (this.macroOutcomeForm.controls['majorHead'].value != '') &&
      (this.macroOutcomeForm.controls['subMajorHead'].value != '') && (this.macroOutcomeForm.controls['minorHead'].value != '') &&
      (this.macroOutcomeForm.controls['subHead'].value != '') && (this.macroOutcomeForm.controls['detailedHead'].value != '')) {
      this.showScheme = true;
      this.macroOutcomeForm.controls.schemeType.setValue('100% State Sponsored Scheme');
    }
  }

  classChange() {
    if (this.macroOutcomeForm.controls['unit'].value === '14') {
      this.unitClass = 'marginTopAfterSelect';
    } else {
      this.unitClass = 'marginTopClass';
    }

  }

  goToScreen() {
    this.router.navigate(['/budget/physical-target']);
  }

// For Getting Tab index
  getTabIndex(tabIndex) {
    this.selectedIndex = tabIndex;
    const temp = this.selectedIndex;
  }
  // Go to next tab
  nextTab() {
    this.selectedIndex++;
  }

  // Copy record
  copyDetails(element, index) {
    const p_data = this.SchemeDataSource.data;
    p_data.splice(index, 0, element);
    this.SchemeDataSource.data = p_data;
  }
  // Add record
  addDetails() {
    const p_data = this.SchemeDataSource.data;
    p_data.push({
      typeOfScheme: 'Normal',
      budgetHead: '001:2403:00:800:01:00',
      nameOfScheme: 'Rinderpest Eradication Programme',
      financialProvision: '',
      physicalTarget: '',
      physicalTargetInput: '',
      unit: '',
      year2021: '',
      year2122: '',
      year2223: ''
    });
    this.SchemeDataSource.data = p_data;
  }

  // delete record
  deletExpenditureRow(index) {
    this.SchemeDataSource.data.splice(index, 1);
    this.SchemeDataSource = new MatTableDataSource(
      this.SchemeDataSource.data
    );
  }

// For decimal input only
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
// for 2 digit decimal point
  decimalPoint(data, key) {
    if (data[key]) {
      data[key] = Number(data[key]).toFixed(2);
    }
  }

}
