import { Component, OnInit, ViewChild, OnDestroy, Inject, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { startWith, map, takeUntil } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSelect, MatPaginator, MatSort } from '@angular/material';
import { ReplaySubject, Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ConfirmDialogModel, StandingChargeConsolidateHistoryComponent } from '../../standing-charge-consolidation/standing-charge-consolidate-history/standing-charge-consolidate-history.component';
import { ExcelData, HeaderElement } from 'src/app/model/budget';

const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Account Officer' },
  { position: 2, name: 'Head Accountant' },
  { position: 3, name: 'Sub Accountant' },
];

@Component({
  selector: 'app-estimate-view',
  templateUrl: './estimate-view.component.html',
  styleUrls: ['./estimate-view.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})

export class EstimateViewComponent implements OnInit {
  selNo1 = 'no1' ;
  selNo2 = 'no2' ;
  selPmc = 'pmc';
  ELEMENT_EXE_DATA: ExcelData[] = [
    { workNo : 1001, locality: 'Gandhinagar', exeDivision: 'sector21', workNameGuj: 'મકાનોના નવીનીકરણ',
     workNameEng: 'Building Renovation', secSubSector: '-', sacEstimatedCost: '100.00', actualEstablishment: '2.00',
    actualMachinery: '7.00', proposeAmount: 100, css: 'Y',
    workDescEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
    workDescGuj: 'વિસનગર, ધંધુકા, રાજુલા ખાતે છોકરાઓ અને છોકરીઓ માટે સરકારી છાત્રાલયો અને નિવાસી શાળાઓનું બાંધકામ',
    remarksEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
    remarksGuj: 'વિસનગર, ધંધુકા, રાજુલા ખાતે છોકરાઓ અને છોકરીઓ માટે સરકારી છાત્રાલયો અને નિવાસી શાળાઓનું બાંધકામ'},
    { workNo : 1002, locality: 'Mahesana', exeDivision: 'sector10', workNameGuj: 'મકાનોના નવીનીકરણ',
     workNameEng: 'Building Renovation', secSubSector: '-', sacEstimatedCost: '100.00', actualEstablishment: '2.00',
    actualMachinery: '7.00', proposeAmount: 100, css: 'Y',
    workDescEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
    workDescGuj: 'વિસનગર, ધંધુકા, રાજુલા ખાતે છોકરાઓ અને છોકરીઓ માટે સરકારી છાત્રાલયો અને નિવાસી શાળાઓનું બાંધકામ',
    remarksEng: 'Construction of buildings for govt. Hostel and Residential schools at Visnagar,Dhandhuka,Rajula',
    remarksGuj: 'વિસનગર, ધંધુકા, રાજુલા ખાતે છોકરાઓ અને છોકરીઓ માટે સરકારી છાત્રાલયો અને નિવાસી શાળાઓનું બાંધકામ'},
  ];
    date = Date.now();
    displayedColumnsExecel: any[] = [  // Array of columns for table new work list table.
      {value: 'workNo', viewValue: 'Item No.'},
      {value: 'locality', viewValue: 'Locality'},
      {value: 'exeDivision', viewValue: 'Executive Division'},
      {value: 'workNameEng', viewValue: 'Name Of Work (English)'},
      {value: 'workNameGuj', viewValue: 'Name Of Work (Gujarati)'},
      // {value: 'secSubSector', viewValue: 'Sector:Sub Sector'},
      {value: 'sacEstimatedCost', viewValue: 'Estimated Cost', class: 'rightAlign'},
      {value: 'actualEstablishment', viewValue: 'Actual Establishment', class: 'rightAlign'},
      {value: 'actualMachinery', viewValue: 'Actual Machinery', class: 'rightAlign'},
      {value: 'proposeAmount', viewValue: 'Amount Proposed For 2020-2021', class: 'rightAlign'},
      {value: 'css', viewValue: 'CSS'},
    ];
    // displayedColumnsHeaders: any[] = ['workNo', 'locality', 'exeDivision', 'workNameEng', 'workNameGuj',
    // 'secSubSector', 'sacEstimatedCost', 'actualEstablishment', 'actualMachinery', 'proposeAmount']
    displayedColumnsHeaders: any[] = ['workNo', 'locality', 'exeDivision', 'workNameEng', 'workNameGuj',
     'proposeAmount', 'actualEstablishment', 'actualMachinery', 'sacEstimatedCost'];
    dataSource = new MatTableDataSource(this.ELEMENT_EXE_DATA);
    headerJson: HeaderElement[] = [
    { label: 'Financial Year', value: '2019-2020' },
    { label: 'Department', value: 'Education Department' },
    { label: 'Minister In Charge', value: 'Shri Bhupendrasinh Chudasama' },
    { label: 'Branch Name', value: 'Section V' },
    { label: 'Estimation From', value: 'Guj. University Serv. Tribunal' },
    { label: 'Budget Publication Number', value: '04: Education Department' },
    { label: 'Demand', value: '009 Education' },
    { label: 'Major Head', value: '4202-Capital Outlay on Education,Sports,Art and Culture' },
    { label: 'Sector', value: 'B1-B Capital Account of Social and Community Services' },
    { label: 'Sub Sector', value: 'a0-(a) Education, Sports, Art and Culture' },
    { label: 'Sub Major Head', value: '01-General Education ' },
    { label: 'Minor Head', value: '201: Elementary Education' },
    { label: 'Group Minor Head', value: '-' },
    { label: 'Sub Head', value: '04-EDN-88 Water Harvesting of primary Schools' },
    { label: 'Detail Head', value: '00-EDN-88 Water Harvesting of primary Schools' },
    { label: 'Charged/Voted', value: 'Voted' },
    { label: 'Item No. and Name of Item', value: 'Construction of Building' },
    { label: 'CSS', value: 'No' },
    { label: 'State of Percentage Share ', value: '100.00%' }
    ];

    // Attachments
  // tslint:disable-next-line:member-ordering
  brwoseData: any[] = [
    { financialYear: '2019-2020', fileName: 'PAN.jpeg' },
    { financialYear: '2020-2021', fileName: 'AadharCard.pdf' },
  ];
  displayedBrowseColumns = ['position', 'financialYear', 'fileName', 'action'];
  dataSourceBrowse = new MatTableDataSource(this.brwoseData);
  itemViewCatogary: string[] = ['position', 'checklist', 'action'];
  ViewCatogarySourceData = ELEMENT_DATA;
  constructor(public dialog: MatDialog, public fb: FormBuilder,
    private router: Router, ) {}

  fileRefNo: string;
  writeUpForm: FormGroup;
  ngOnInit() {
    this.fileRefNo = 'BGT/10/2019/3242/V';
    this.writeUpForm = this.fb.group({
      workNameEng : [''],
      workNameGuj : [''],
      workDescriptionEng : [''],
      workDescriptionGuj : [''],
      remarksEng : [''],
      remarksGuj : ['']
    });
  }

  gotoListing() {
    this.router.navigate(['./budget/budget-list']);
  }

  goToDashboard() {
    this.router.navigate(['']);
  }
  openHistory(data) {
    this.showHistoryDialog();
  }
  showHistoryDialog(): void {

    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(StandingChargeConsolidateHistoryComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }
}
